goog.provide('fulcro.inspect.ui.dom_history_viewer');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.inspect.helpers');
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","show-dom-preview","fulcro.inspect.ui.dom-history-viewer/show-dom-preview",626121644,null),(function (fulcro_incoming_env,_,p__59604){
var map__59605 = p__59604;
var map__59605__$1 = (((((!((map__59605 == null))))?(((((map__59605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59605):map__59605);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59605__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__59605,map__59605__$1,state){
return (function (){
return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),true,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),state], 0));
});})(env,map__59605,map__59605__$1,state))
], null);
})(),(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860)], null)], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false], 0));
});})(env))
], null);
})(),(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860)], null)], null);
})()], 0));
}));
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.ui !== 'undefined') && (typeof fulcro.inspect.ui.dom_history_viewer !== 'undefined') && (typeof fulcro.inspect.ui.dom_history_viewer.DOMHistoryView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.dom_history_viewer.DOMHistoryView = (function fulcro$inspect$ui$dom_history_viewer$DOMHistoryView(){
var this__55957__auto__ = this;
React.Component.apply(this__55957__auto__,arguments);

if((!((this__55957__auto__.initLocalState == null)))){
this__55957__auto__.state = this__55957__auto__.initLocalState();
} else {
this__55957__auto__.state = ({});
}

return this__55957__auto__;
});

var G__59719_59954 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype;
var G__59720_59955 = React.Component.prototype;
var G__59721_59956 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__59719_59954,G__59720_59955,G__59721_59956);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","DOMHistoryView","fulcro.inspect.ui.dom-history-viewer/DOMHistoryView",-1737671377),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);

var x59722_59961 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype;
x59722_59961.render = ((function (x59722_59961){
return (function (){
var this__54322__auto__ = this;
var this$ = this__54322__auto__;
var _STAR_reconciler_STAR__orig_val__59731 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__59732 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__59733 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__59734 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__59735 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__59736 = fulcro.client.primitives.get_reconciler(this__54322__auto__);
var _STAR_depth_STAR__temp_val__59737 = (fulcro.client.primitives.depth(this__54322__auto__) + (1));
var _STAR_shared_STAR__temp_val__59738 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__54322__auto__);
var _STAR_instrument_STAR__temp_val__59739 = fulcro.client.primitives.instrument(this__54322__auto__);
var _STAR_parent_STAR__temp_val__59740 = this__54322__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__59736;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__59737;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__59738;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__59739;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__59740;

try{var map__59756 = fulcro.client.primitives.props(this$);
var map__59756__$1 = (((((!((map__59756 == null))))?(((((map__59756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59756):map__59756);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(css)),new cljs.core.Keyword(null,"title","title",636505583),"Click to close preview.",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__59756,map__59756__$1,visible_QMARK_,app_state,_,css,_STAR_reconciler_STAR__orig_val__59731,_STAR_depth_STAR__orig_val__59732,_STAR_shared_STAR__orig_val__59733,_STAR_instrument_STAR__orig_val__59734,_STAR_parent_STAR__orig_val__59735,_STAR_reconciler_STAR__temp_val__59736,_STAR_depth_STAR__temp_val__59737,_STAR_shared_STAR__temp_val__59738,_STAR_instrument_STAR__temp_val__59739,_STAR_parent_STAR__temp_val__59740,this$,this__54322__auto__,x59722_59961){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__59756,map__59756__$1,visible_QMARK_,app_state,_,css,_STAR_reconciler_STAR__orig_val__59731,_STAR_depth_STAR__orig_val__59732,_STAR_shared_STAR__orig_val__59733,_STAR_instrument_STAR__orig_val__59734,_STAR_parent_STAR__orig_val__59735,_STAR_reconciler_STAR__temp_val__59736,_STAR_depth_STAR__temp_val__59737,_STAR_shared_STAR__temp_val__59738,_STAR_instrument_STAR__temp_val__59739,_STAR_parent_STAR__temp_val__59740,this$,this__54322__auto__,x59722_59961))
], null),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(app_state));
if(cljs.core.truth_(temp__5720__auto__)){
var render_fn = temp__5720__auto__;
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(app_state) : render_fn.call(null,app_state));
} else {
return null;
}
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__59735;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__59734;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__59733;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__59732;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__59731;
}});})(x59722_59961))
;


fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.constructor = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView;

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.constructor.displayName = "fulcro.inspect.ui.dom-history-viewer/DOMHistoryView";

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.fulcro$isComponent = true;

var x59794_60026 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView;
x59794_60026.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x59794_60026.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x59794_60026){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hidden",".hidden",-1525088678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null)], null);
});})(x59794_60026))
;

x59794_60026.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x59794_60026){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x59794_60026))
;

x59794_60026.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x59794_60026.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x59794_60026){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
});})(x59794_60026))
;

x59794_60026.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x59794_60026.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x59794_60026){
return (function (this$,p__59806){
var map__59808 = p__59806;
var map__59808__$1 = (((((!((map__59808 == null))))?(((((map__59808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59808):map__59808);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
});})(x59794_60026))
;

x59794_60026.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x59794_60026.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x59794_60026){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)], null);
});})(x59794_60026))
;


var x59810_60046 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype;
x59810_60046.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x59810_60046.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x59810_60046){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hidden",".hidden",-1525088678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null)], null);
});})(x59810_60046))
;

x59810_60046.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x59810_60046){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x59810_60046))
;

x59810_60046.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x59810_60046.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x59810_60046){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
});})(x59810_60046))
;

x59810_60046.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x59810_60046.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x59810_60046){
return (function (this$,p__59843){
var map__59844 = p__59843;
var map__59844__$1 = (((((!((map__59844 == null))))?(((((map__59844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59844):map__59844);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59844__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59844__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
});})(x59810_60046))
;

x59810_60046.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x59810_60046.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x59810_60046){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)], null);
});})(x59810_60046))
;


fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$type = true;

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$ctorStr = "fulcro.inspect.ui.dom-history-viewer/DOMHistoryView";

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$ctorPrWriter = (function (this__55960__auto__,writer__55961__auto__,opt__55962__auto__){
return cljs.core._write(writer__55961__auto__,"fulcro.inspect.ui.dom-history-viewer/DOMHistoryView");
});
fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);

//# sourceMappingURL=fulcro.inspect.ui.dom_history_viewer.js.map
