goog.provide('fulcro.inspect.ui.element_picker');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fulcro_css.css');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('fulcro.inspect.ui.helpers');
goog.require('fulcro.inspect.remote.transit');
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.ui !== 'undefined') && (typeof fulcro.inspect.ui.element_picker !== 'undefined') && (typeof fulcro.inspect.ui.element_picker.MarkerCSS !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.element_picker.MarkerCSS = (function fulcro$inspect$ui$element_picker$MarkerCSS(){
var this__55957__auto__ = this;
React.Component.apply(this__55957__auto__,arguments);

if((!((this__55957__auto__.initLocalState == null)))){
this__55957__auto__.state = this__55957__auto__.initLocalState();
} else {
this__55957__auto__.state = ({});
}

return this__55957__auto__;
});

var G__57159_57289 = fulcro.inspect.ui.element_picker.MarkerCSS.prototype;
var G__57160_57290 = React.Component.prototype;
var G__57161_57291 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57159_57289,G__57160_57290,G__57161_57291);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro.inspect.ui.element-picker","MarkerCSS","fulcro.inspect.ui.element-picker/MarkerCSS",-1950200276),fulcro.inspect.ui.element_picker.MarkerCSS);

var x57166_57295 = fulcro.inspect.ui.element_picker.MarkerCSS.prototype;
x57166_57295.render = ((function (x57166_57295){
return (function (){
var this__54322__auto__ = this;
var _ = this__54322__auto__;
var _STAR_reconciler_STAR__orig_val__57176 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57177 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57178 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57179 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57180 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57181 = fulcro.client.primitives.get_reconciler(this__54322__auto__);
var _STAR_depth_STAR__temp_val__57182 = (fulcro.client.primitives.depth(this__54322__auto__) + (1));
var _STAR_shared_STAR__temp_val__57183 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__54322__auto__);
var _STAR_instrument_STAR__temp_val__57184 = fulcro.client.primitives.instrument(this__54322__auto__);
var _STAR_parent_STAR__temp_val__57185 = this__54322__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57181;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57182;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57183;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57184;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57185;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57180;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57179;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57178;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57177;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57176;
}});})(x57166_57295))
;


fulcro.inspect.ui.element_picker.MarkerCSS.prototype.constructor = fulcro.inspect.ui.element_picker.MarkerCSS;

fulcro.inspect.ui.element_picker.MarkerCSS.prototype.constructor.displayName = "fulcro.inspect.ui.element-picker/MarkerCSS";

fulcro.inspect.ui.element_picker.MarkerCSS.prototype.fulcro$isComponent = true;

var x57195_57309 = fulcro.inspect.ui.element_picker.MarkerCSS;
x57195_57309.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57195_57309.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57195_57309){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#fff","12px","hidden","rgba(67, 132, 208, 0.5)","999999","3px 5px","none","absolute","none","monospace"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#ffab66","nowrap","10px","bold","#333740","999999","6px 8px","none","absolute","3px","none","sans-serif"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["8px solid transparent","24px","\"\"","0","8px solid transparent","absolute","8px solid #333740","0","9px"])], null)], null)], null);
});})(x57195_57309))
;

x57195_57309.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57195_57309){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57195_57309))
;


var x57204_57323 = fulcro.inspect.ui.element_picker.MarkerCSS.prototype;
x57204_57323.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57204_57323.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57204_57323){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#fff","12px","hidden","rgba(67, 132, 208, 0.5)","999999","3px 5px","none","absolute","none","monospace"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#ffab66","nowrap","10px","bold","#333740","999999","6px 8px","none","absolute","3px","none","sans-serif"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["8px solid transparent","24px","\"\"","0","8px solid transparent","absolute","8px solid #333740","0","9px"])], null)], null)], null);
});})(x57204_57323))
;

x57204_57323.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57204_57323){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57204_57323))
;


fulcro.inspect.ui.element_picker.MarkerCSS.cljs$lang$type = true;

fulcro.inspect.ui.element_picker.MarkerCSS.cljs$lang$ctorStr = "fulcro.inspect.ui.element-picker/MarkerCSS";

fulcro.inspect.ui.element_picker.MarkerCSS.cljs$lang$ctorPrWriter = (function (this__55960__auto__,writer__55961__auto__,opt__55962__auto__){
return cljs.core._write(writer__55961__auto__,"fulcro.inspect.ui.element-picker/MarkerCSS");
});
fulcro.inspect.ui.element_picker.marker_element = (function fulcro$inspect$ui$element_picker$marker_element(){
var id = "__fulcro_inspect_marker";
var or__4131__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__57207 = document.createElement("div");
goog.object.set(G__57207,"id",id);

var G__57208_57329 = G__57207;
var G__57209_57330 = "className";
var G__57210_57331 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1((fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element_picker.MarkerCSS) : fulcro_css.css.get_classnames.call(null,fulcro.inspect.ui.element_picker.MarkerCSS)));
goog.object.set(G__57208_57329,G__57209_57330,G__57210_57331);

goog.dom.appendChild(document.body,G__57207);

return G__57207;
}
});
fulcro.inspect.ui.element_picker.marker_label_element = (function fulcro$inspect$ui$element_picker$marker_label_element(){
var id = "__fulcro_inspect_marker_label";
var or__4131__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__57216 = document.createElement("div");
goog.object.set(G__57216,"id",id);

var G__57217_57332 = G__57216;
var G__57218_57333 = "className";
var G__57219_57334 = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element_picker.MarkerCSS) : fulcro_css.css.get_classnames.call(null,fulcro.inspect.ui.element_picker.MarkerCSS)));
goog.object.set(G__57217_57332,G__57218_57333,G__57219_57334);

goog.dom.appendChild(document.body,G__57216);

return G__57216;
}
});
fulcro.inspect.ui.element_picker.react_raw_instance = (function fulcro$inspect$ui$element_picker$react_raw_instance(node){
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57220_SHARP_){
return clojure.string.starts_with_QMARK_(p1__57220_SHARP_,"__reactInternalInstance$");
}),goog.object.getKeys(node)));
if(cljs.core.truth_(temp__5718__auto__)){
var instance_key = temp__5718__auto__;
return goog.object.get(node,instance_key);
} else {
return null;
}
});
fulcro.inspect.ui.element_picker.react_instance = (function fulcro$inspect$ui$element_picker$react_instance(node){
var temp__5718__auto__ = fulcro.inspect.ui.element_picker.react_raw_instance(node);
if(cljs.core.truth_(temp__5718__auto__)){
var raw = temp__5718__auto__;
var or__4131__auto__ = goog.object.getValueByKeys(raw,"_currentElement","_owner","_instance");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.object.getValueByKeys(raw,"return","stateNode");
}
} else {
return null;
}
});
fulcro.inspect.ui.element_picker.ensure_reconciler = (function fulcro$inspect$ui$element_picker$ensure_reconciler(x,app_uuid){
try{if(cljs.core.truth_((function (){var G__57229 = fulcro.client.primitives.get_reconciler(x);
var G__57229__$1 = (((G__57229 == null))?null:fulcro.client.primitives.app_state(G__57229));
var G__57229__$2 = (((G__57229__$1 == null))?null:cljs.core.deref(G__57229__$1));
var G__57229__$3 = (((G__57229__$2 == null))?null:new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491).cljs$core$IFn$_invoke$arity$1(G__57229__$2));
if((G__57229__$3 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__57229__$3,app_uuid);
}
})())){
return x;
} else {
return null;
}
}catch (e57228){var _ = e57228;
return null;
}});
fulcro.inspect.ui.element_picker.pick_element = (function fulcro$inspect$ui$element_picker$pick_element(p__57234){
var map__57235 = p__57234;
var map__57235__$1 = (((((!((map__57235 == null))))?(((((map__57235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57235):map__57235);
var on_pick = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57235__$1,new cljs.core.Keyword("fulcro.inspect.ui.element-picker","on-pick","fulcro.inspect.ui.element-picker/on-pick",-1116265320),cljs.core.identity);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57235__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var marker = fulcro.inspect.ui.element_picker.marker_element();
var marker_label = fulcro.inspect.ui.element_picker.marker_label_element();
var current = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var over_handler = ((function (marker,marker_label,current,map__57235,map__57235__$1,on_pick,app_uuid){
return (function (e){
var target = e.target;
var target__$1 = target;
while(true){
if(cljs.core.truth_(target__$1)){
var temp__5718__auto__ = (function (){var G__57242 = target__$1;
var G__57242__$1 = (((G__57242 == null))?null:fulcro.inspect.ui.element_picker.react_instance(G__57242));
if((G__57242__$1 == null)){
return null;
} else {
return fulcro.inspect.ui.element_picker.ensure_reconciler(G__57242__$1,app_uuid);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var instance = temp__5718__auto__;
e.stopPropagation();

cljs.core.reset_BANG_(current,instance);

var G__57246_57342 = marker_label;
var G__57247_57343 = fulcro.inspect.ui.helpers.react_display_name(instance);
goog.dom.setTextContent(G__57246_57342,G__57247_57343);

var target_SINGLEQUOTE_ = ReactDOM.findDOMNode(instance);
var offset = goog.style.getPageOffset(target_SINGLEQUOTE_);
var size = goog.style.getSize(target_SINGLEQUOTE_);
var G__57248_57344 = marker_label;
var G__57249_57345 = ({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset.y - (36))),"px"].join('')});
goog.style.setStyle(G__57248_57344,G__57249_57345);

var G__57250 = marker;
var G__57251 = ({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.width),"px"].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.height),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.y),"px"].join('')});
return goog.style.setStyle(G__57250,G__57251);
} else {
var G__57348 = goog.dom.getParentElement(target__$1);
target__$1 = G__57348;
continue;
}
} else {
return null;
}
break;
}
});})(marker,marker_label,current,map__57235,map__57235__$1,on_pick,app_uuid))
;
var pick_handler = ((function (marker,marker_label,current,over_handler,map__57235,map__57235__$1,on_pick,app_uuid){
return (function fulcro$inspect$ui$element_picker$pick_element_$_self(){
var G__57255_57351 = cljs.core.deref(current);
(on_pick.cljs$core$IFn$_invoke$arity$1 ? on_pick.cljs$core$IFn$_invoke$arity$1(G__57255_57351) : on_pick.call(null,G__57255_57351));

var G__57256_57352 = marker;
var G__57257_57353 = ({"display": "none"});
goog.style.setStyle(G__57256_57352,G__57257_57353);

var G__57261_57354 = marker_label;
var G__57262_57355 = ({"display": "none"});
goog.style.setStyle(G__57261_57354,G__57262_57355);

removeEventListener("click",fulcro$inspect$ui$element_picker$pick_element_$_self);

return removeEventListener("mouseover",over_handler);
});})(marker,marker_label,current,over_handler,map__57235,map__57235__$1,on_pick,app_uuid))
;
var G__57268_57356 = marker;
var G__57269_57357 = ({"display": "block", "top": "-100000px", "left": "-100000px"});
goog.style.setStyle(G__57268_57356,G__57269_57357);

var G__57274_57358 = marker_label;
var G__57275_57359 = ({"display": "block", "top": "-100000px", "left": "-100000px"});
goog.style.setStyle(G__57274_57358,G__57275_57359);

addEventListener("mouseover",over_handler);

return setTimeout(((function (marker,marker_label,current,over_handler,pick_handler,map__57235,map__57235__$1,on_pick,app_uuid){
return (function (){
return addEventListener("click",pick_handler);
});})(marker,marker_label,current,over_handler,pick_handler,map__57235,map__57235__$1,on_pick,app_uuid))
,(10));
});
fulcro.inspect.ui.element_picker.inspect_component = (function fulcro$inspect$ui$element_picker$inspect_component(comp){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.element","display-name","fulcro.inspect.ui.element/display-name",-1091845070),(function (){var G__57281 = comp;
if((G__57281 == null)){
return null;
} else {
return fulcro.inspect.ui.helpers.react_display_name(G__57281);
}
})(),new cljs.core.Keyword("fulcro.inspect.ui.element","props","fulcro.inspect.ui.element/props",-1984763386),fulcro.client.primitives.props(comp),new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913),(function (){try{return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp);
}catch (e57283){var _ = e57283;
return null;
}})(),new cljs.core.Keyword("fulcro.inspect.ui.element","query","fulcro.inspect.ui.element/query",113020567),(function (){try{var G__57285 = comp;
var G__57285__$1 = (((G__57285 == null))?null:fulcro.client.primitives.react_type(G__57285));
if((G__57285__$1 == null)){
return null;
} else {
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(G__57285__$1);
}
}catch (e57284){var _ = e57284;
return null;
}})()], null);
});

//# sourceMappingURL=fulcro.inspect.ui.element_picker.js.map
