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
var this__56082__auto__ = this;
React.Component.apply(this__56082__auto__,arguments);

if((!((this__56082__auto__.initLocalState == null)))){
this__56082__auto__.state = this__56082__auto__.initLocalState();
} else {
this__56082__auto__.state = ({});
}

return this__56082__auto__;
});

goog.object.extend(fulcro.inspect.ui.element_picker.MarkerCSS.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro.inspect.ui.element-picker","MarkerCSS","fulcro.inspect.ui.element-picker/MarkerCSS",-1950200276),fulcro.inspect.ui.element_picker.MarkerCSS);

var x57994_58133 = fulcro.inspect.ui.element_picker.MarkerCSS.prototype;
x57994_58133.render = ((function (x57994_58133){
return (function (){
var this__55000__auto__ = this;
var _ = this__55000__auto__;
var _STAR_reconciler_STAR__orig_val__57997 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57998 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57999 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58000 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58001 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58002 = fulcro.client.primitives.get_reconciler(this__55000__auto__);
var _STAR_depth_STAR__temp_val__58003 = (fulcro.client.primitives.depth(this__55000__auto__) + (1));
var _STAR_shared_STAR__temp_val__58004 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55000__auto__);
var _STAR_instrument_STAR__temp_val__58005 = fulcro.client.primitives.instrument(this__55000__auto__);
var _STAR_parent_STAR__temp_val__58006 = this__55000__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58002;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58003;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58004;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58005;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58006;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58001;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58000;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57999;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57998;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57997;
}});})(x57994_58133))
;


fulcro.inspect.ui.element_picker.MarkerCSS.prototype.constructor = fulcro.inspect.ui.element_picker.MarkerCSS;

fulcro.inspect.ui.element_picker.MarkerCSS.prototype.constructor.displayName = "fulcro.inspect.ui.element-picker/MarkerCSS";

fulcro.inspect.ui.element_picker.MarkerCSS.prototype.fulcro$isComponent = true;

var x58022_58141 = fulcro.inspect.ui.element_picker.MarkerCSS;
x58022_58141.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58022_58141.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58022_58141){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#fff","12px","hidden","rgba(67, 132, 208, 0.5)","999999","3px 5px","none","absolute","none","monospace"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#ffab66","nowrap","10px","bold","#333740","999999","6px 8px","none","absolute","3px","none","sans-serif"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["8px solid transparent","24px","\"\"","0","8px solid transparent","absolute","8px solid #333740","0","9px"])], null)], null)], null);
});})(x58022_58141))
;

x58022_58141.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58022_58141){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58022_58141))
;


var x58032_58161 = fulcro.inspect.ui.element_picker.MarkerCSS.prototype;
x58032_58161.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58032_58161.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58032_58161){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#fff","12px","hidden","rgba(67, 132, 208, 0.5)","999999","3px 5px","none","absolute","none","monospace"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#ffab66","nowrap","10px","bold","#333740","999999","6px 8px","none","absolute","3px","none","sans-serif"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["8px solid transparent","24px","\"\"","0","8px solid transparent","absolute","8px solid #333740","0","9px"])], null)], null)], null);
});})(x58032_58161))
;

x58032_58161.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58032_58161){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58032_58161))
;


fulcro.inspect.ui.element_picker.MarkerCSS.cljs$lang$type = true;

fulcro.inspect.ui.element_picker.MarkerCSS.cljs$lang$ctorStr = "fulcro.inspect.ui.element-picker/MarkerCSS";

fulcro.inspect.ui.element_picker.MarkerCSS.cljs$lang$ctorPrWriter = (function (this__56085__auto__,writer__56086__auto__,opt__56087__auto__){
return cljs.core._write(writer__56086__auto__,"fulcro.inspect.ui.element-picker/MarkerCSS");
});
fulcro.inspect.ui.element_picker.marker_element = (function fulcro$inspect$ui$element_picker$marker_element(){
var id = "__fulcro_inspect_marker";
var or__4131__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__58040 = document.createElement("div");
goog.object.set(G__58040,"id",id);

goog.object.set(G__58040,"className",new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1((fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element_picker.MarkerCSS) : fulcro_css.css.get_classnames.call(null,fulcro.inspect.ui.element_picker.MarkerCSS))));

goog.dom.appendChild(document.body,G__58040);

return G__58040;
}
});
fulcro.inspect.ui.element_picker.marker_label_element = (function fulcro$inspect$ui$element_picker$marker_label_element(){
var id = "__fulcro_inspect_marker_label";
var or__4131__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__58048 = document.createElement("div");
goog.object.set(G__58048,"id",id);

goog.object.set(G__58048,"className",new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element_picker.MarkerCSS) : fulcro_css.css.get_classnames.call(null,fulcro.inspect.ui.element_picker.MarkerCSS))));

goog.dom.appendChild(document.body,G__58048);

return G__58048;
}
});
fulcro.inspect.ui.element_picker.react_raw_instance = (function fulcro$inspect$ui$element_picker$react_raw_instance(node){
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58052_SHARP_){
return clojure.string.starts_with_QMARK_(p1__58052_SHARP_,"__reactInternalInstance$");
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
try{if(cljs.core.truth_((function (){var G__58080 = fulcro.client.primitives.get_reconciler(x);
var G__58080__$1 = (((G__58080 == null))?null:fulcro.client.primitives.app_state(G__58080));
var G__58080__$2 = (((G__58080__$1 == null))?null:cljs.core.deref(G__58080__$1));
var G__58080__$3 = (((G__58080__$2 == null))?null:new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491).cljs$core$IFn$_invoke$arity$1(G__58080__$2));
if((G__58080__$3 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__58080__$3,app_uuid);
}
})())){
return x;
} else {
return null;
}
}catch (e58076){var _ = e58076;
return null;
}});
fulcro.inspect.ui.element_picker.pick_element = (function fulcro$inspect$ui$element_picker$pick_element(p__58086){
var map__58087 = p__58086;
var map__58087__$1 = (((((!((map__58087 == null))))?(((((map__58087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58087):map__58087);
var on_pick = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58087__$1,new cljs.core.Keyword("fulcro.inspect.ui.element-picker","on-pick","fulcro.inspect.ui.element-picker/on-pick",-1116265320),cljs.core.identity);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var marker = fulcro.inspect.ui.element_picker.marker_element();
var marker_label = fulcro.inspect.ui.element_picker.marker_label_element();
var current = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var over_handler = ((function (marker,marker_label,current,map__58087,map__58087__$1,on_pick,app_uuid){
return (function (e){
var target = e.target;
var target__$1 = target;
while(true){
if(cljs.core.truth_(target__$1)){
var temp__5718__auto__ = (function (){var G__58091 = target__$1;
var G__58091__$1 = (((G__58091 == null))?null:fulcro.inspect.ui.element_picker.react_instance(G__58091));
if((G__58091__$1 == null)){
return null;
} else {
return fulcro.inspect.ui.element_picker.ensure_reconciler(G__58091__$1,app_uuid);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var instance = temp__5718__auto__;
e.stopPropagation();

cljs.core.reset_BANG_(current,instance);

goog.dom.setTextContent(marker_label,fulcro.inspect.ui.helpers.react_display_name(instance));

var target_SINGLEQUOTE_ = ReactDOM.findDOMNode(instance);
var offset = goog.style.getPageOffset(target_SINGLEQUOTE_);
var size = goog.style.getSize(target_SINGLEQUOTE_);
goog.style.setStyle(marker_label,({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset.y - (36))),"px"].join('')}));

return goog.style.setStyle(marker,({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.width),"px"].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.height),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.y),"px"].join('')}));
} else {
var G__58206 = goog.dom.getParentElement(target__$1);
target__$1 = G__58206;
continue;
}
} else {
return null;
}
break;
}
});})(marker,marker_label,current,map__58087,map__58087__$1,on_pick,app_uuid))
;
var pick_handler = ((function (marker,marker_label,current,over_handler,map__58087,map__58087__$1,on_pick,app_uuid){
return (function fulcro$inspect$ui$element_picker$pick_element_$_self(){
var G__58102_58216 = cljs.core.deref(current);
(on_pick.cljs$core$IFn$_invoke$arity$1 ? on_pick.cljs$core$IFn$_invoke$arity$1(G__58102_58216) : on_pick.call(null,G__58102_58216));

goog.style.setStyle(marker,({"display": "none"}));

goog.style.setStyle(marker_label,({"display": "none"}));

removeEventListener("click",fulcro$inspect$ui$element_picker$pick_element_$_self);

return removeEventListener("mouseover",over_handler);
});})(marker,marker_label,current,over_handler,map__58087,map__58087__$1,on_pick,app_uuid))
;
goog.style.setStyle(marker,({"display": "block", "top": "-100000px", "left": "-100000px"}));

goog.style.setStyle(marker_label,({"display": "block", "top": "-100000px", "left": "-100000px"}));

addEventListener("mouseover",over_handler);

return setTimeout(((function (marker,marker_label,current,over_handler,pick_handler,map__58087,map__58087__$1,on_pick,app_uuid){
return (function (){
return addEventListener("click",pick_handler);
});})(marker,marker_label,current,over_handler,pick_handler,map__58087,map__58087__$1,on_pick,app_uuid))
,(10));
});
fulcro.inspect.ui.element_picker.inspect_component = (function fulcro$inspect$ui$element_picker$inspect_component(comp){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.element","display-name","fulcro.inspect.ui.element/display-name",-1091845070),(function (){var G__58116 = comp;
if((G__58116 == null)){
return null;
} else {
return fulcro.inspect.ui.helpers.react_display_name(G__58116);
}
})(),new cljs.core.Keyword("fulcro.inspect.ui.element","props","fulcro.inspect.ui.element/props",-1984763386),fulcro.client.primitives.props(comp),new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913),(function (){try{return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp);
}catch (e58117){var _ = e58117;
return null;
}})(),new cljs.core.Keyword("fulcro.inspect.ui.element","query","fulcro.inspect.ui.element/query",113020567),(function (){try{var G__58121 = comp;
var G__58121__$1 = (((G__58121 == null))?null:fulcro.client.primitives.react_type(G__58121));
if((G__58121__$1 == null)){
return null;
} else {
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(G__58121__$1);
}
}catch (e58119){var _ = e58119;
return null;
}})()], null);
});

//# sourceMappingURL=fulcro.inspect.ui.element_picker.js.map
