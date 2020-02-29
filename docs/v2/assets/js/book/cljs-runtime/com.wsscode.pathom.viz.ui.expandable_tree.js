goog.provide('com.wsscode.pathom.viz.ui.expandable_tree');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.pathom.viz.helpers');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.primitives');
goog.require('com.fulcrologic.guardrails.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50952){
return cljs.core.vector_QMARK_(G__50952);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50965){
return cljs.core.set_QMARK_(G__50965);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded?","com.wsscode.pathom.viz.ui.expandable-tree/expanded?",86068608),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","key","com.wsscode.pathom.viz.ui.expandable-tree/key",671760333),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","children","com.wsscode.pathom.viz.ui.expandable-tree/children",816408666),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","node","com.wsscode.pathom.viz.ui.expandable-tree/node",-572706922)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","node","com.wsscode.pathom.viz.ui.expandable-tree/node",-572706922),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","node","com.wsscode.pathom.viz.ui.expandable-tree/node",-572706922),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50975){
return cljs.core.coll_QMARK_(G__50975);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","node","com.wsscode.pathom.viz.ui.expandable-tree/node",-572706922))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","node","com.wsscode.pathom.viz.ui.expandable-tree/node",-572706922),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","key","com.wsscode.pathom.viz.ui.expandable-tree/key",671760333),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","children","com.wsscode.pathom.viz.ui.expandable-tree/children",816408666)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","key","com.wsscode.pathom.viz.ui.expandable-tree/key",671760333),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","children","com.wsscode.pathom.viz.ui.expandable-tree/children",816408666)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50977){
return cljs.core.map_QMARK_(G__50977);
})], null),(function (G__50977){
return cljs.core.map_QMARK_(G__50977);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","key","com.wsscode.pathom.viz.ui.expandable-tree/key",671760333),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","children","com.wsscode.pathom.viz.ui.expandable-tree/children",816408666)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","children","com.wsscode.pathom.viz.ui.expandable-tree/children",816408666)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","children","com.wsscode.pathom.viz.ui.expandable-tree/children",816408666)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51001){
return cljs.core.map_QMARK_(G__51001);
}),(function (G__51001){
return cljs.core.contains_QMARK_(G__51001,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__51001){
return ((cljs.core.map_QMARK_(G__51001)) && (cljs.core.contains_QMARK_(G__51001,new cljs.core.Keyword(null,"children","children",-940561982))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","children","com.wsscode.pathom.viz.ui.expandable-tree/children",816408666)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.ui !== 'undefined') && (typeof com.wsscode.pathom.viz.ui.expandable_tree !== 'undefined') && (typeof com.wsscode.pathom.viz.ui.expandable_tree.TreeItem !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.ui.expandable_tree.TreeItem = (function com$wsscode$pathom$viz$ui$expandable_tree$TreeItem(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","TreeItem","com.wsscode.pathom.viz.ui.expandable-tree/TreeItem",1991337149),com.wsscode.pathom.viz.ui.expandable_tree.TreeItem);

var x51029_51182 = com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.prototype;
x51029_51182.render = ((function (x51029_51182){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51032 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51033 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51034 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51035 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51036 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51037 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51038 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51039 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51040 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51041 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51037;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51038;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51039;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51040;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51041;

try{var map__51042 = fulcro.client.primitives.props(this$);
var map__51042__$1 = (((((!((map__51042 == null))))?(((((map__51042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51042):map__51042);
var node = map__51042__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded?","com.wsscode.pathom.viz.ui.expandable-tree/expanded?",86068608));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128));
var toggle_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","toggle-expanded","com.wsscode.pathom.viz.ui.expandable-tree/toggle-expanded",-1505221987));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218));
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0))], null),(cljs.core.truth_(key)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".item",".item",-1434967496),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expander",".expander",-735415487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__51042,map__51042__$1,node,key,children,expanded,expanded_QMARK_,path,toggle_expanded,render,sort_by,_STAR_reconciler_STAR__orig_val__51032,_STAR_depth_STAR__orig_val__51033,_STAR_shared_STAR__orig_val__51034,_STAR_instrument_STAR__orig_val__51035,_STAR_parent_STAR__orig_val__51036,_STAR_reconciler_STAR__temp_val__51037,_STAR_depth_STAR__temp_val__51038,_STAR_shared_STAR__temp_val__51039,_STAR_instrument_STAR__temp_val__51040,_STAR_parent_STAR__temp_val__51041,this$,this__43720__auto__,x51029_51182){
return (function (){
return (toggle_expanded.cljs$core$IFn$_invoke$arity$1 ? toggle_expanded.cljs$core$IFn$_invoke$arity$1(path) : toggle_expanded.call(null,path));
});})(map__51042,map__51042__$1,node,key,children,expanded,expanded_QMARK_,path,toggle_expanded,render,sort_by,_STAR_reconciler_STAR__orig_val__51032,_STAR_depth_STAR__orig_val__51033,_STAR_shared_STAR__orig_val__51034,_STAR_instrument_STAR__orig_val__51035,_STAR_parent_STAR__orig_val__51036,_STAR_reconciler_STAR__temp_val__51037,_STAR_depth_STAR__temp_val__51038,_STAR_shared_STAR__temp_val__51039,_STAR_instrument_STAR__temp_val__51040,_STAR_parent_STAR__temp_val__51041,this$,this__43720__auto__,x51029_51182))
], null),(cljs.core.truth_(children)?(cljs.core.truth_(expanded_QMARK_)?"\u25BC":"\u25B6"):null)], 0)),(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(node) : render.call(null,node))], 0)):null),(cljs.core.truth_((function (){var or__4131__auto__ = expanded_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(key);
}
})())?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(key)?new cljs.core.Keyword(null,".children-container",".children-container",-1735984181):null)], null)], null),(function (){var iter__4523__auto__ = ((function (map__51042,map__51042__$1,node,key,children,expanded,expanded_QMARK_,path,toggle_expanded,render,sort_by,_STAR_reconciler_STAR__orig_val__51032,_STAR_depth_STAR__orig_val__51033,_STAR_shared_STAR__orig_val__51034,_STAR_instrument_STAR__orig_val__51035,_STAR_parent_STAR__orig_val__51036,_STAR_reconciler_STAR__temp_val__51037,_STAR_depth_STAR__temp_val__51038,_STAR_shared_STAR__temp_val__51039,_STAR_instrument_STAR__temp_val__51040,_STAR_parent_STAR__temp_val__51041,this$,this__43720__auto__,x51029_51182){
return (function com$wsscode$pathom$viz$ui$expandable_tree$iter__51045(s__51046){
return (new cljs.core.LazySeq(null,((function (map__51042,map__51042__$1,node,key,children,expanded,expanded_QMARK_,path,toggle_expanded,render,sort_by,_STAR_reconciler_STAR__orig_val__51032,_STAR_depth_STAR__orig_val__51033,_STAR_shared_STAR__orig_val__51034,_STAR_instrument_STAR__orig_val__51035,_STAR_parent_STAR__orig_val__51036,_STAR_reconciler_STAR__temp_val__51037,_STAR_depth_STAR__temp_val__51038,_STAR_shared_STAR__temp_val__51039,_STAR_instrument_STAR__temp_val__51040,_STAR_parent_STAR__temp_val__51041,this$,this__43720__auto__,x51029_51182){
return (function (){
var s__51046__$1 = s__51046;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51046__$1);
if(temp__5720__auto__){
var s__51046__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51046__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51046__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51048 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51047 = (0);
while(true){
if((i__51047 < size__4522__auto__)){
var map__51062 = cljs.core._nth(c__4521__auto__,i__51047);
var map__51062__$1 = (((((!((map__51062 == null))))?(((((map__51062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51062):map__51062);
var node__$1 = map__51062__$1;
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51062__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key__$1);
cljs.core.chunk_append(b__51048,(function (){var G__51067 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),path__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550),expanded,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","toggle-expanded","com.wsscode.pathom.viz.ui.expandable-tree/toggle-expanded",-1505221987),toggle_expanded,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),render,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),sort_by,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded?","com.wsscode.pathom.viz.ui.expandable-tree/expanded?",86068608),cljs.core.contains_QMARK_(expanded,path__$1)], 0));
return (com.wsscode.pathom.viz.ui.expandable_tree.tree_item.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.expandable_tree.tree_item.cljs$core$IFn$_invoke$arity$1(G__51067) : com.wsscode.pathom.viz.ui.expandable_tree.tree_item.call(null,G__51067));
})());

var G__51200 = (i__51047 + (1));
i__51047 = G__51200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51048),com$wsscode$pathom$viz$ui$expandable_tree$iter__51045(cljs.core.chunk_rest(s__51046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51048),null);
}
} else {
var map__51072 = cljs.core.first(s__51046__$2);
var map__51072__$1 = (((((!((map__51072 == null))))?(((((map__51072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51072):map__51072);
var node__$1 = map__51072__$1;
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key__$1);
return cljs.core.cons((function (){var G__51075 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),path__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550),expanded,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","toggle-expanded","com.wsscode.pathom.viz.ui.expandable-tree/toggle-expanded",-1505221987),toggle_expanded,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),render,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),sort_by,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded?","com.wsscode.pathom.viz.ui.expandable-tree/expanded?",86068608),cljs.core.contains_QMARK_(expanded,path__$1)], 0));
return (com.wsscode.pathom.viz.ui.expandable_tree.tree_item.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.expandable_tree.tree_item.cljs$core$IFn$_invoke$arity$1(G__51075) : com.wsscode.pathom.viz.ui.expandable_tree.tree_item.call(null,G__51075));
})(),com$wsscode$pathom$viz$ui$expandable_tree$iter__51045(cljs.core.rest(s__51046__$2)));
}
} else {
return null;
}
break;
}
});})(map__51042,map__51042__$1,node,key,children,expanded,expanded_QMARK_,path,toggle_expanded,render,sort_by,_STAR_reconciler_STAR__orig_val__51032,_STAR_depth_STAR__orig_val__51033,_STAR_shared_STAR__orig_val__51034,_STAR_instrument_STAR__orig_val__51035,_STAR_parent_STAR__orig_val__51036,_STAR_reconciler_STAR__temp_val__51037,_STAR_depth_STAR__temp_val__51038,_STAR_shared_STAR__temp_val__51039,_STAR_instrument_STAR__temp_val__51040,_STAR_parent_STAR__temp_val__51041,this$,this__43720__auto__,x51029_51182))
,null,null));
});})(map__51042,map__51042__$1,node,key,children,expanded,expanded_QMARK_,path,toggle_expanded,render,sort_by,_STAR_reconciler_STAR__orig_val__51032,_STAR_depth_STAR__orig_val__51033,_STAR_shared_STAR__orig_val__51034,_STAR_instrument_STAR__orig_val__51035,_STAR_parent_STAR__orig_val__51036,_STAR_reconciler_STAR__temp_val__51037,_STAR_depth_STAR__temp_val__51038,_STAR_shared_STAR__temp_val__51039,_STAR_instrument_STAR__temp_val__51040,_STAR_parent_STAR__temp_val__51041,this$,this__43720__auto__,x51029_51182))
;
return iter__4523__auto__((function (){var G__51077 = children;
if(cljs.core.truth_(sort_by)){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_by,G__51077);
} else {
return G__51077;
}
})());
})()], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51036;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51035;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51034;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51033;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51032;
}});})(x51029_51182))
;


com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.prototype.constructor = com.wsscode.pathom.viz.ui.expandable_tree.TreeItem;

com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.prototype.constructor.displayName = "com.wsscode.pathom.viz.ui.expandable-tree/TreeItem";

com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.prototype.fulcro$isComponent = true;

var x51082_51206 = com.wsscode.pathom.viz.ui.expandable_tree.TreeItem;
x51082_51206.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51082_51206.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51082_51206){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".item",".item",-1434967496),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".expander",".expander",-735415487),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658)],["center","#656565","10px","1px","10px","pointer","0","flex","3px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".children-container",".children-container",-1735984181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"13px"], null)], null)], null);
});})(x51082_51206))
;

x51082_51206.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51082_51206){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51082_51206))
;


var x51083_51212 = com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.prototype;
x51083_51212.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51083_51212.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51083_51212){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".item",".item",-1434967496),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".expander",".expander",-735415487),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658)],["center","#656565","10px","1px","10px","pointer","0","flex","3px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".children-container",".children-container",-1735984181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"13px"], null)], null)], null);
});})(x51083_51212))
;

x51083_51212.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51083_51212){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51083_51212))
;


com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.cljs$lang$type = true;

com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.cljs$lang$ctorStr = "com.wsscode.pathom.viz.ui.expandable-tree/TreeItem";

com.wsscode.pathom.viz.ui.expandable_tree.TreeItem.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.ui.expandable-tree/TreeItem");
});
com.wsscode.pathom.viz.ui.expandable_tree.tree_item = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.ui.expandable_tree.TreeItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__51089_SHARP_){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__51089_SHARP_)], 0));
})], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.ui !== 'undefined') && (typeof com.wsscode.pathom.viz.ui.expandable_tree !== 'undefined') && (typeof com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree = (function com$wsscode$pathom$viz$ui$expandable_tree$ExpandableTree(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","ExpandableTree","com.wsscode.pathom.viz.ui.expandable-tree/ExpandableTree",183600037),com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree);

var x51109_51225 = com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.prototype;
x51109_51225.render = ((function (x51109_51225){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51110 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51111 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51112 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51113 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51114 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51115 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51116 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51117 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51118 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51119 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51115;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51116;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51117;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51118;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51119;

try{var map__51121 = fulcro.client.primitives.props(this$);
var map__51121__$1 = (((((!((map__51121 == null))))?(((((map__51121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51121):map__51121);
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550));
var map__51122 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__51122__$1 = (((((!((map__51122 == null))))?(((((map__51122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51122):map__51122);
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653));
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__51127 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(root,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","path","com.wsscode.pathom.viz.ui.expandable-tree/path",2038643128),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550),expanded,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),render,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),sort_by,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","toggle-expanded","com.wsscode.pathom.viz.ui.expandable-tree/toggle-expanded",-1505221987),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-expanded","toggle-expanded",285596933))], 0));
return (com.wsscode.pathom.viz.ui.expandable_tree.tree_item.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.expandable_tree.tree_item.cljs$core$IFn$_invoke$arity$1(G__51127) : com.wsscode.pathom.viz.ui.expandable_tree.tree_item.call(null,G__51127));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51114;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51113;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51112;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51111;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51110;
}});})(x51109_51225))
;

x51109_51225.initLocalState = ((function (x51109_51225){
return (function (){
var this$ = this;
var ret__43695__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-expanded","toggle-expanded",285596933),((function (this$,x51109_51225){
return (function (path){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});})(this$,x51109_51225))
], null);
var obj51129 = ({"fulcro$state":ret__43695__auto__});
return obj51129;
});})(x51109_51225))
;


com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.prototype.constructor = com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree;

com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.prototype.constructor.displayName = "com.wsscode.pathom.viz.ui.expandable-tree/ExpandableTree";

com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.prototype.fulcro$isComponent = true;

var x51130_51278 = com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree;
x51130_51278.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51130_51278.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51130_51278){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51130_51278))
;

x51130_51278.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51130_51278){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.expandable_tree.TreeItem], null);
});})(x51130_51278))
;

x51130_51278.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x51130_51278.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x51130_51278){
return (function (this$,p__51133){
var map__51134 = p__51133;
var map__51134__$1 = (((((!((map__51134 == null))))?(((((map__51134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51134):map__51134);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x51130_51278))
;

x51130_51278.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51130_51278.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51130_51278){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","id","ui/id",-1388397664).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51130_51278))
;

x51130_51278.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51130_51278.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51130_51278){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550)], null);
});})(x51130_51278))
;


var x51155_51280 = com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.prototype;
x51155_51280.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51155_51280.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51155_51280){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51155_51280))
;

x51155_51280.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51155_51280){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.expandable_tree.TreeItem], null);
});})(x51155_51280))
;

x51155_51280.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x51155_51280.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x51155_51280){
return (function (this$,p__51158){
var map__51159 = p__51158;
var map__51159__$1 = (((((!((map__51159 == null))))?(((((map__51159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51159):map__51159);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51159__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51159__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x51155_51280))
;

x51155_51280.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51155_51280.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51155_51280){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("ui","id","ui/id",-1388397664).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51155_51280))
;

x51155_51280.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51155_51280.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51155_51280){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","id","ui/id",-1388397664),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","expanded","com.wsscode.pathom.viz.ui.expandable-tree/expanded",-1996841550)], null);
});})(x51155_51280))
;


com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.cljs$lang$type = true;

com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.cljs$lang$ctorStr = "com.wsscode.pathom.viz.ui.expandable-tree/ExpandableTree";

com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.ui.expandable-tree/ExpandableTree");
});
com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree);

//# sourceMappingURL=com.wsscode.pathom.viz.ui.expandable_tree.js.map
