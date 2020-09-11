goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._id[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._id["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._type[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._type["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._update[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4434__auto__.call(null,this$,update_fn));
} else {
var m__4431__auto__ = (shadow.object._update["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4431__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4434__auto__.call(null,this$,cause));
} else {
var m__4431__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4431__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__56244 = arguments.length;
switch (G__56244) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});

shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3;

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4131__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5720__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5720__auto__)){
var oid = temp__5720__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5720__auto__)){
var parent_id = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__56658 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__56658;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parent_id,child_ids,instances){
return (function (p1__56291_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__56291_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__56293 = arguments.length;
switch (G__56293) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
});

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});

shadow.object.tree_seq.cljs$lang$maxFixedArity = 2;

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__56295_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__56295_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__56296){
var map__56297 = p__56296;
var map__56297__$1 = (((((!((map__56297 == null))))?(((((map__56297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56297):map__56297);
var oref = map__56297__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__56301 = arguments.length;
switch (G__56301) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__56299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__56299_SHARP_));
});})(type_kw))
,shadow.object.get_siblings(oref));
});

shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2;

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5718__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5718__auto__)){
var obj = temp__5718__auto__;
return obj;
} else {
var temp__5720__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__56668 = parent;
dom = G__56668;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56669 = arguments.length;
var i__4731__auto___56670 = (0);
while(true){
if((i__4731__auto___56670 < len__4730__auto___56669)){
args__4736__auto__.push((arguments[i__4731__auto___56670]));

var G__56671 = (i__4731__auto___56670 + (1));
i__4731__auto___56670 = G__56671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5720__auto__)){
var reactions_to_trigger = temp__5720__auto__;
var seq__56312 = cljs.core.seq(reactions_to_trigger);
var chunk__56313 = null;
var count__56314 = (0);
var i__56315 = (0);
while(true){
if((i__56315 < count__56314)){
var rfn = chunk__56313.cljs$core$IIndexed$_nth$arity$2(null,i__56315);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__56673 = seq__56312;
var G__56674 = chunk__56313;
var G__56675 = count__56314;
var G__56676 = (i__56315 + (1));
seq__56312 = G__56673;
chunk__56313 = G__56674;
count__56314 = G__56675;
i__56315 = G__56676;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__56312);
if(temp__5720__auto____$1){
var seq__56312__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56312__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56312__$1);
var G__56679 = cljs.core.chunk_rest(seq__56312__$1);
var G__56680 = c__4550__auto__;
var G__56681 = cljs.core.count(c__4550__auto__);
var G__56682 = (0);
seq__56312 = G__56679;
chunk__56313 = G__56680;
count__56314 = G__56681;
i__56315 = G__56682;
continue;
} else {
var rfn = cljs.core.first(seq__56312__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__56688 = cljs.core.next(seq__56312__$1);
var G__56689 = null;
var G__56690 = (0);
var G__56691 = (0);
seq__56312 = G__56688;
chunk__56313 = G__56689;
count__56314 = G__56690;
i__56315 = G__56691;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq56306){
var G__56307 = cljs.core.first(seq56306);
var seq56306__$1 = cljs.core.next(seq56306);
var G__56308 = cljs.core.first(seq56306__$1);
var seq56306__$2 = cljs.core.next(seq56306__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56307,G__56308,seq56306__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__56318_56695 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__56319_56696 = null;
var count__56320_56697 = (0);
var i__56321_56698 = (0);
while(true){
if((i__56321_56698 < count__56320_56697)){
var child_56699 = chunk__56319_56696.cljs$core$IIndexed$_nth$arity$2(null,i__56321_56698);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_56699,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_56699,ev,notify_fn));


var G__56700 = seq__56318_56695;
var G__56701 = chunk__56319_56696;
var G__56702 = count__56320_56697;
var G__56703 = (i__56321_56698 + (1));
seq__56318_56695 = G__56700;
chunk__56319_56696 = G__56701;
count__56320_56697 = G__56702;
i__56321_56698 = G__56703;
continue;
} else {
var temp__5720__auto___56707 = cljs.core.seq(seq__56318_56695);
if(temp__5720__auto___56707){
var seq__56318_56708__$1 = temp__5720__auto___56707;
if(cljs.core.chunked_seq_QMARK_(seq__56318_56708__$1)){
var c__4550__auto___56709 = cljs.core.chunk_first(seq__56318_56708__$1);
var G__56710 = cljs.core.chunk_rest(seq__56318_56708__$1);
var G__56711 = c__4550__auto___56709;
var G__56712 = cljs.core.count(c__4550__auto___56709);
var G__56713 = (0);
seq__56318_56695 = G__56710;
chunk__56319_56696 = G__56711;
count__56320_56697 = G__56712;
i__56321_56698 = G__56713;
continue;
} else {
var child_56714 = cljs.core.first(seq__56318_56708__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_56714,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_56714,ev,notify_fn));


var G__56715 = cljs.core.next(seq__56318_56708__$1);
var G__56716 = null;
var G__56717 = (0);
var G__56718 = (0);
seq__56318_56695 = G__56715;
chunk__56319_56696 = G__56716;
count__56320_56697 = G__56717;
i__56321_56698 = G__56718;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56722 = arguments.length;
var i__4731__auto___56723 = (0);
while(true){
if((i__4731__auto___56723 < len__4730__auto___56722)){
args__4736__auto__.push((arguments[i__4731__auto___56723]));

var G__56724 = (i__4731__auto___56723 + (1));
i__4731__auto___56723 = G__56724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq56323){
var G__56324 = cljs.core.first(seq56323);
var seq56323__$1 = cljs.core.next(seq56323);
var G__56325 = cljs.core.first(seq56323__$1);
var seq56323__$2 = cljs.core.next(seq56323__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56324,G__56325,seq56323__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56728 = arguments.length;
var i__4731__auto___56729 = (0);
while(true){
if((i__4731__auto___56729 < len__4730__auto___56728)){
args__4736__auto__.push((arguments[i__4731__auto___56729]));

var G__56730 = (i__4731__auto___56729 + (1));
i__4731__auto___56729 = G__56730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__56731 = shadow.object.get_parent(current);
current = G__56731;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq56329){
var G__56330 = cljs.core.first(seq56329);
var seq56329__$1 = cljs.core.next(seq56329);
var G__56331 = cljs.core.first(seq56329__$1);
var seq56329__$2 = cljs.core.next(seq56329__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56330,G__56331,seq56329__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56732 = arguments.length;
var i__4731__auto___56733 = (0);
while(true){
if((i__4731__auto___56733 < len__4730__auto___56732)){
args__4736__auto__.push((arguments[i__4731__auto___56733]));

var G__56734 = (i__4731__auto___56733 + (1));
i__4731__auto___56733 = G__56734;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = ((function (id,data){
return (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;
return shadow.object._update(oref,work_fn);
});

shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq56335){
var G__56336 = cljs.core.first(seq56335);
var seq56335__$1 = cljs.core.next(seq56335);
var G__56337 = cljs.core.first(seq56335__$1);
var seq56335__$2 = cljs.core.next(seq56335__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56336,G__56337,seq56335__$2);
});

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,((function (child_id,parent_id){
return (function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
});})(child_id,parent_id))
);

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5718__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5718__auto__)){
var custom_remove = temp__5718__auto__;
var G__56345 = this$;
var G__56346 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__56345,G__56346) : custom_remove.call(null,G__56345,G__56346));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__56348 = arguments.length;
switch (G__56348) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
});

shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2;

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__56352 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__56353 = null;
var count__56354 = (0);
var i__56355 = (0);
while(true){
if((i__56355 < count__56354)){
var vec__56363 = chunk__56353.cljs$core$IIndexed$_nth$arity$2(null,i__56355);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56363,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56363,(1),null);
var ev_def = vec__56363;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_56743__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__56352,chunk__56353,count__56354,i__56355,vec__56363,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__56352,chunk__56353,count__56354,i__56355,vec__56363,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__56352,chunk__56353,count__56354,i__56355,handler_56743__$1,vec__56363,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_56743__$1.cljs$core$IFn$_invoke$arity$3 ? handler_56743__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_56743__$1.call(null,oref,e,el));
});})(seq__56352,chunk__56353,count__56354,i__56355,handler_56743__$1,vec__56363,ev,handler,ev_def))
);


var G__56744 = seq__56352;
var G__56745 = chunk__56353;
var G__56746 = count__56354;
var G__56747 = (i__56355 + (1));
seq__56352 = G__56744;
chunk__56353 = G__56745;
count__56354 = G__56746;
i__56355 = G__56747;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__56352);
if(temp__5720__auto__){
var seq__56352__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56352__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56352__$1);
var G__56748 = cljs.core.chunk_rest(seq__56352__$1);
var G__56749 = c__4550__auto__;
var G__56750 = cljs.core.count(c__4550__auto__);
var G__56751 = (0);
seq__56352 = G__56748;
chunk__56353 = G__56749;
count__56354 = G__56750;
i__56355 = G__56751;
continue;
} else {
var vec__56366 = cljs.core.first(seq__56352__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56366,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56366,(1),null);
var ev_def = vec__56366;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_56752__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__56352,chunk__56353,count__56354,i__56355,vec__56366,ev,handler,ev_def,seq__56352__$1,temp__5720__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__56352,chunk__56353,count__56354,i__56355,vec__56366,ev,handler,ev_def,seq__56352__$1,temp__5720__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__56352,chunk__56353,count__56354,i__56355,handler_56752__$1,vec__56366,ev,handler,ev_def,seq__56352__$1,temp__5720__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_56752__$1.cljs$core$IFn$_invoke$arity$3 ? handler_56752__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_56752__$1.call(null,oref,e,el));
});})(seq__56352,chunk__56353,count__56354,i__56355,handler_56752__$1,vec__56366,ev,handler,ev_def,seq__56352__$1,temp__5720__auto__))
);


var G__56753 = cljs.core.next(seq__56352__$1);
var G__56754 = null;
var G__56755 = (0);
var G__56756 = (0);
seq__56352 = G__56753;
chunk__56353 = G__56754;
count__56354 = G__56755;
i__56355 = G__56756;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__56371){
var vec__56372 = p__56371;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56372,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56372,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = event;
if(cljs.core.truth_(and__4120__auto__)){
return handler;
} else {
return and__4120__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
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

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e56382){if((e56382 instanceof Object)){
var e = e56382;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e56382;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.object.define.cljs$lang$applyTo = (function (seq56380){
var G__56381 = cljs.core.first(seq56380);
var seq56380__$1 = cljs.core.next(seq56380);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56381,seq56380__$1);
});

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__56390 = arguments.length;
switch (G__56390) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__56392 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56392) : shadow.dom.build.call(null,G__56392));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
});

shadow.object.make_dom.cljs$lang$maxFixedArity = 4;

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k56397,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__56405 = k56397;
var G__56405__$1 = (((G__56405 instanceof cljs.core.Keyword))?G__56405.fqn:null);
switch (G__56405__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56397,else__4388__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__56406){
var vec__56407 = p__56406;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56407,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56407,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.object.Watch{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56396){
var self__ = this;
var G__56396__$1 = this;
return (new cljs.core.RecordIter((0),G__56396__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56398,other56399){
var self__ = this;
var this56398__$1 = this;
return (((!((other56399 == null)))) && ((this56398__$1.constructor === other56399.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56398__$1.key,other56399.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56398__$1.handler,other56399.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56398__$1.__extmap,other56399.__extmap)));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__56396){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__56419 = cljs.core.keyword_identical_QMARK_;
var expr__56420 = k__4393__auto__;
if(cljs.core.truth_((pred__56419.cljs$core$IFn$_invoke$arity$2 ? pred__56419.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__56420) : pred__56419.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__56420)))){
return (new shadow.object.Watch(G__56396,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56419.cljs$core$IFn$_invoke$arity$2 ? pred__56419.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__56420) : pred__56419.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__56420)))){
return (new shadow.object.Watch(self__.key,G__56396,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__56396),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__56396){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__56396,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.object/Watch");
});

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__56402){
var extmap__4424__auto__ = (function (){var G__56429 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56402,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__56402)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56429);
} else {
return G__56429;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__56402),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__56402),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
});

shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});

shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
});

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
});

shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null)));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__56434_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56434_SHARP_));
});})(this$__$1))
,self__.watches);
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
self__.data = new$;

var seq__56450 = cljs.core.seq(self__.watches);
var chunk__56451 = null;
var count__56452 = (0);
var i__56453 = (0);
while(true){
if((i__56453 < count__56452)){
var map__56463 = chunk__56451.cljs$core$IIndexed$_nth$arity$2(null,i__56453);
var map__56463__$1 = (((((!((map__56463 == null))))?(((((map__56463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56463):map__56463);
var watch = map__56463__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56463__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56463__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__56809 = seq__56450;
var G__56810 = chunk__56451;
var G__56811 = count__56452;
var G__56812 = (i__56453 + (1));
seq__56450 = G__56809;
chunk__56451 = G__56810;
count__56452 = G__56811;
i__56453 = G__56812;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__56450);
if(temp__5720__auto__){
var seq__56450__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56450__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56450__$1);
var G__56816 = cljs.core.chunk_rest(seq__56450__$1);
var G__56817 = c__4550__auto__;
var G__56818 = cljs.core.count(c__4550__auto__);
var G__56819 = (0);
seq__56450 = G__56816;
chunk__56451 = G__56817;
count__56452 = G__56818;
i__56453 = G__56819;
continue;
} else {
var map__56466 = cljs.core.first(seq__56450__$1);
var map__56466__$1 = (((((!((map__56466 == null))))?(((((map__56466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56466):map__56466);
var watch = map__56466__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__56823 = cljs.core.next(seq__56450__$1);
var G__56824 = null;
var G__56825 = (0);
var G__56826 = (0);
seq__56450 = G__56823;
chunk__56451 = G__56824;
count__56452 = G__56825;
i__56453 = G__56826;
continue;
}
} else {
return null;
}
}
break;
}
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__56468_56827 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__56469_56828 = null;
var count__56470_56829 = (0);
var i__56471_56830 = (0);
while(true){
if((i__56471_56830 < count__56470_56829)){
var child_56831 = chunk__56469_56828.cljs$core$IIndexed$_nth$arity$2(null,i__56471_56830);
shadow.object._destroy_BANG_(child_56831,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__56832 = seq__56468_56827;
var G__56833 = chunk__56469_56828;
var G__56834 = count__56470_56829;
var G__56835 = (i__56471_56830 + (1));
seq__56468_56827 = G__56832;
chunk__56469_56828 = G__56833;
count__56470_56829 = G__56834;
i__56471_56830 = G__56835;
continue;
} else {
var temp__5720__auto___56836 = cljs.core.seq(seq__56468_56827);
if(temp__5720__auto___56836){
var seq__56468_56837__$1 = temp__5720__auto___56836;
if(cljs.core.chunked_seq_QMARK_(seq__56468_56837__$1)){
var c__4550__auto___56838 = cljs.core.chunk_first(seq__56468_56837__$1);
var G__56839 = cljs.core.chunk_rest(seq__56468_56837__$1);
var G__56840 = c__4550__auto___56838;
var G__56841 = cljs.core.count(c__4550__auto___56838);
var G__56842 = (0);
seq__56468_56827 = G__56839;
chunk__56469_56828 = G__56840;
count__56470_56829 = G__56841;
i__56471_56830 = G__56842;
continue;
} else {
var child_56843 = cljs.core.first(seq__56468_56837__$1);
shadow.object._destroy_BANG_(child_56843,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__56844 = cljs.core.next(seq__56468_56837__$1);
var G__56845 = null;
var G__56846 = (0);
var G__56847 = (0);
seq__56468_56827 = G__56844;
chunk__56469_56828 = G__56845;
count__56470_56829 = G__56846;
i__56471_56830 = G__56847;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_56851 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_56851 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_56851);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
});

shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
});

shadow.object.ObjectRef.cljs$lang$type = true;

shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.object/ObjectRef");
});

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__56484 = arguments.length;
switch (G__56484) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
});

shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3;

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__56487 = arguments.length;
switch (G__56487) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,((function (attr__$1){
return (function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
});})(attr__$1))
);
});

shadow.object.bind_change.cljs$lang$maxFixedArity = 4;

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56877 = arguments.length;
var i__4731__auto___56878 = (0);
while(true){
if((i__4731__auto___56878 < len__4730__auto___56877)){
args__4736__auto__.push((arguments[i__4731__auto___56878]));

var G__56879 = (i__4731__auto___56878 + (1));
i__4731__auto___56878 = G__56879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_56899 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5718__auto___56900 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5718__auto___56900)){
var dom_56901 = temp__5718__auto___56900;
shadow.dom.set_data(dom_56901,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_56901,dom_events_56899);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_56901], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_56901], 0));
} else {
var temp__5720__auto___56902 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___56902)){
var dom_fn_56903 = temp__5720__auto___56902;
var dom_56904 = (function (){var G__56501 = (dom_fn_56903.cljs$core$IFn$_invoke$arity$2 ? dom_fn_56903.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_56903.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56501) : shadow.dom.build.call(null,G__56501));
})();
shadow.dom.set_data(dom_56904,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_56904], 0));

shadow.object.bind_dom_events(oref,dom_56904,dom_events_56899);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_56904], 0));
} else {
}
}

var temp__5720__auto___56906 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___56906)){
var watches_56907 = temp__5720__auto___56906;
var seq__56503_56908 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_56907));
var chunk__56504_56909 = null;
var count__56505_56910 = (0);
var i__56506_56911 = (0);
while(true){
if((i__56506_56911 < count__56505_56910)){
var vec__56513_56912 = chunk__56504_56909.cljs$core$IIndexed$_nth$arity$2(null,i__56506_56911);
var attr_56913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513_56912,(0),null);
var handler_56914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513_56912,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_56913,((function (seq__56503_56908,chunk__56504_56909,count__56505_56910,i__56506_56911,vec__56513_56912,attr_56913,handler_56914,watches_56907,temp__5720__auto___56906,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_56914.cljs$core$IFn$_invoke$arity$3 ? handler_56914.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_56914.call(null,oref,old,new$));
});})(seq__56503_56908,chunk__56504_56909,count__56505_56910,i__56506_56911,vec__56513_56912,attr_56913,handler_56914,watches_56907,temp__5720__auto___56906,oid,parent,result_chan,odef,obj,oref))
);


var G__56917 = seq__56503_56908;
var G__56918 = chunk__56504_56909;
var G__56919 = count__56505_56910;
var G__56920 = (i__56506_56911 + (1));
seq__56503_56908 = G__56917;
chunk__56504_56909 = G__56918;
count__56505_56910 = G__56919;
i__56506_56911 = G__56920;
continue;
} else {
var temp__5720__auto___56921__$1 = cljs.core.seq(seq__56503_56908);
if(temp__5720__auto___56921__$1){
var seq__56503_56922__$1 = temp__5720__auto___56921__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56503_56922__$1)){
var c__4550__auto___56923 = cljs.core.chunk_first(seq__56503_56922__$1);
var G__56924 = cljs.core.chunk_rest(seq__56503_56922__$1);
var G__56925 = c__4550__auto___56923;
var G__56926 = cljs.core.count(c__4550__auto___56923);
var G__56927 = (0);
seq__56503_56908 = G__56924;
chunk__56504_56909 = G__56925;
count__56505_56910 = G__56926;
i__56506_56911 = G__56927;
continue;
} else {
var vec__56516_56930 = cljs.core.first(seq__56503_56922__$1);
var attr_56931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56516_56930,(0),null);
var handler_56932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56516_56930,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_56931,((function (seq__56503_56908,chunk__56504_56909,count__56505_56910,i__56506_56911,vec__56516_56930,attr_56931,handler_56932,seq__56503_56922__$1,temp__5720__auto___56921__$1,watches_56907,temp__5720__auto___56906,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_56932.cljs$core$IFn$_invoke$arity$3 ? handler_56932.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_56932.call(null,oref,old,new$));
});})(seq__56503_56908,chunk__56504_56909,count__56505_56910,i__56506_56911,vec__56516_56930,attr_56931,handler_56932,seq__56503_56922__$1,temp__5720__auto___56921__$1,watches_56907,temp__5720__auto___56906,oid,parent,result_chan,odef,obj,oref))
);


var G__56934 = cljs.core.next(seq__56503_56922__$1);
var G__56935 = null;
var G__56936 = (0);
var G__56937 = (0);
seq__56503_56908 = G__56934;
chunk__56504_56909 = G__56935;
count__56505_56910 = G__56936;
i__56506_56911 = G__56937;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
});

shadow.object.create.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.create.cljs$lang$applyTo = (function (seq56496){
var G__56497 = cljs.core.first(seq56496);
var seq56496__$1 = cljs.core.next(seq56496);
var G__56498 = cljs.core.first(seq56496__$1);
var seq56496__$2 = cljs.core.next(seq56496__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56497,G__56498,seq56496__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__56525 = arguments.length;
switch (G__56525) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = ((function (attr__$1){
return (function (p1__56523_SHARP_){
var G__56529 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__56523_SHARP_) : node_gen.call(null,p1__56523_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56529) : shadow.dom.build.call(null,G__56529));
});})(attr__$1))
;
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,node_get,node,bind_key){
return (function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
});})(attr__$1,node_get,node,bind_key))
);

return cljs.core.deref(node);
});

shadow.object.bind_simple.cljs$lang$maxFixedArity = 3;

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = ((function (attr__$1,curval){
return (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});})(attr__$1,curval))
;
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,curval,make_child_fn,child){
return (function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__56532_56952 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__56533_56953 = null;
var count__56534_56954 = (0);
var i__56535_56955 = (0);
while(true){
if((i__56535_56955 < count__56534_56954)){
var obj_56956 = chunk__56533_56953.cljs$core$IIndexed$_nth$arity$2(null,i__56535_56955);
var obj_56957__$1 = shadow.object.get_from_dom(obj_56956);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_56957__$1);


var G__56958 = seq__56532_56952;
var G__56959 = chunk__56533_56953;
var G__56960 = count__56534_56954;
var G__56961 = (i__56535_56955 + (1));
seq__56532_56952 = G__56958;
chunk__56533_56953 = G__56959;
count__56534_56954 = G__56960;
i__56535_56955 = G__56961;
continue;
} else {
var temp__5720__auto___56965 = cljs.core.seq(seq__56532_56952);
if(temp__5720__auto___56965){
var seq__56532_56966__$1 = temp__5720__auto___56965;
if(cljs.core.chunked_seq_QMARK_(seq__56532_56966__$1)){
var c__4550__auto___56967 = cljs.core.chunk_first(seq__56532_56966__$1);
var G__56968 = cljs.core.chunk_rest(seq__56532_56966__$1);
var G__56969 = c__4550__auto___56967;
var G__56970 = cljs.core.count(c__4550__auto___56967);
var G__56971 = (0);
seq__56532_56952 = G__56968;
chunk__56533_56953 = G__56969;
count__56534_56954 = G__56970;
i__56535_56955 = G__56971;
continue;
} else {
var obj_56972 = cljs.core.first(seq__56532_56966__$1);
var obj_56973__$1 = shadow.object.get_from_dom(obj_56972);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_56973__$1);


var G__56974 = cljs.core.next(seq__56532_56966__$1);
var G__56975 = null;
var G__56976 = (0);
var G__56977 = (0);
seq__56532_56952 = G__56974;
chunk__56533_56953 = G__56975;
count__56534_56954 = G__56976;
i__56535_56955 = G__56977;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__56545 = arguments.length;
switch (G__56545) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__56543_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__56543_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__56547){
var vec__56549 = p__56547;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56549,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56549,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__56549,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__56549,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__56554_56985 = cljs.core.seq((function (){var G__56565 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__56565) : coll_transform.call(null,G__56565));
})());
var chunk__56555_56986 = null;
var count__56556_56987 = (0);
var i__56557_56988 = (0);
while(true){
if((i__56557_56988 < count__56556_56987)){
var item_56989 = chunk__56555_56986.cljs$core$IIndexed$_nth$arity$2(null,i__56557_56988);
shadow.object.dom_enter(coll_dom,make_item_fn(item_56989));


var G__56995 = seq__56554_56985;
var G__56996 = chunk__56555_56986;
var G__56997 = count__56556_56987;
var G__56998 = (i__56557_56988 + (1));
seq__56554_56985 = G__56995;
chunk__56555_56986 = G__56996;
count__56556_56987 = G__56997;
i__56557_56988 = G__56998;
continue;
} else {
var temp__5720__auto___57000 = cljs.core.seq(seq__56554_56985);
if(temp__5720__auto___57000){
var seq__56554_57001__$1 = temp__5720__auto___57000;
if(cljs.core.chunked_seq_QMARK_(seq__56554_57001__$1)){
var c__4550__auto___57002 = cljs.core.chunk_first(seq__56554_57001__$1);
var G__57003 = cljs.core.chunk_rest(seq__56554_57001__$1);
var G__57004 = c__4550__auto___57002;
var G__57005 = cljs.core.count(c__4550__auto___57002);
var G__57006 = (0);
seq__56554_56985 = G__57003;
chunk__56555_56986 = G__57004;
count__56556_56987 = G__57005;
i__56557_56988 = G__57006;
continue;
} else {
var item_57007 = cljs.core.first(seq__56554_57001__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_57007));


var G__57012 = cljs.core.next(seq__56554_57001__$1);
var G__57013 = null;
var G__57014 = (0);
var G__57015 = (0);
seq__56554_56985 = G__57012;
chunk__56555_56986 = G__57013;
count__56556_56987 = G__57014;
i__56557_56988 = G__57015;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,((function (attr__$1,update_children,coll_dom,make_item_fn){
return (function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4222__auto__ = count_new;
var y__4223__auto__ = count_children;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var n__4607__auto___57023 = count_children__$1;
var idx_57028 = (0);
while(true){
if((idx_57028 < n__4607__auto___57023)){
var cn_57029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_57028);
var cc_57030 = shadow.object.get_from_dom(cn_57029);
var ckey_57031 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_57030);
var cval_57032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_57030,item_key);
var vec__56577_57033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_57028);
var nkey_57034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56577_57033,(0),null);
var nval_57035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56577_57033,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_57031,nkey_57034)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_57032,nval_57035)))){
} else {
var new_obj_57047 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_57034,nval_57035], null));
shadow.dom.replace_node(cn_57029,new_obj_57047);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_57030);

shadow.object.notify_tree_BANG_(new_obj_57047,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__57052 = (idx_57028 + (1));
idx_57028 = G__57052;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__56582_57053 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__56583_57054 = null;
var count__56584_57055 = (0);
var i__56585_57056 = (0);
while(true){
if((i__56585_57056 < count__56584_57055)){
var item_57057 = chunk__56583_57054.cljs$core$IIndexed$_nth$arity$2(null,i__56585_57056);
shadow.object.dom_enter(coll_dom,make_item_fn(item_57057));


var G__57058 = seq__56582_57053;
var G__57059 = chunk__56583_57054;
var G__57060 = count__56584_57055;
var G__57061 = (i__56585_57056 + (1));
seq__56582_57053 = G__57058;
chunk__56583_57054 = G__57059;
count__56584_57055 = G__57060;
i__56585_57056 = G__57061;
continue;
} else {
var temp__5720__auto___57062 = cljs.core.seq(seq__56582_57053);
if(temp__5720__auto___57062){
var seq__56582_57063__$1 = temp__5720__auto___57062;
if(cljs.core.chunked_seq_QMARK_(seq__56582_57063__$1)){
var c__4550__auto___57064 = cljs.core.chunk_first(seq__56582_57063__$1);
var G__57065 = cljs.core.chunk_rest(seq__56582_57063__$1);
var G__57066 = c__4550__auto___57064;
var G__57067 = cljs.core.count(c__4550__auto___57064);
var G__57068 = (0);
seq__56582_57053 = G__57065;
chunk__56583_57054 = G__57066;
count__56584_57055 = G__57067;
i__56585_57056 = G__57068;
continue;
} else {
var item_57069 = cljs.core.first(seq__56582_57063__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_57069));


var G__57071 = cljs.core.next(seq__56582_57063__$1);
var G__57072 = null;
var G__57073 = (0);
var G__57074 = (0);
seq__56582_57053 = G__57071;
chunk__56583_57054 = G__57072;
count__56584_57055 = G__57073;
i__56585_57056 = G__57074;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
});})(attr__$1,update_children,coll_dom,make_item_fn))
);

return coll_dom;
});

shadow.object.bind_children.cljs$lang$maxFixedArity = 6;

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4120__auto__ = key;
if(cljs.core.truth_(and__4120__auto__)){
return path;
} else {
return and__4120__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__56594 = "inspect!";
var G__56595 = shadow.object._id(oref);
var G__56596 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__56597 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__56594,G__56595,G__56596,G__56597) : shadow.object.info.call(null,G__56594,G__56595,G__56596,G__56597));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__56598_57076 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__56599_57077 = null;
var count__56600_57078 = (0);
var i__56601_57079 = (0);
while(true){
if((i__56601_57079 < count__56600_57078)){
var vec__56624_57080 = chunk__56599_57077.cljs$core$IIndexed$_nth$arity$2(null,i__56601_57079);
var id_57081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56624_57080,(0),null);
var oref_57082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56624_57080,(1),null);
var G__56628_57083 = "dump";
var G__56629_57084 = id_57081;
var G__56630_57085 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_57082)], 0));
var G__56631_57086 = cljs.core.deref(shadow.object._data(oref_57082));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__56628_57083,G__56629_57084,G__56630_57085,G__56631_57086) : shadow.object.info.call(null,G__56628_57083,G__56629_57084,G__56630_57085,G__56631_57086));


var G__57087 = seq__56598_57076;
var G__57088 = chunk__56599_57077;
var G__57089 = count__56600_57078;
var G__57090 = (i__56601_57079 + (1));
seq__56598_57076 = G__57087;
chunk__56599_57077 = G__57088;
count__56600_57078 = G__57089;
i__56601_57079 = G__57090;
continue;
} else {
var temp__5720__auto___57091 = cljs.core.seq(seq__56598_57076);
if(temp__5720__auto___57091){
var seq__56598_57092__$1 = temp__5720__auto___57091;
if(cljs.core.chunked_seq_QMARK_(seq__56598_57092__$1)){
var c__4550__auto___57093 = cljs.core.chunk_first(seq__56598_57092__$1);
var G__57094 = cljs.core.chunk_rest(seq__56598_57092__$1);
var G__57095 = c__4550__auto___57093;
var G__57096 = cljs.core.count(c__4550__auto___57093);
var G__57097 = (0);
seq__56598_57076 = G__57094;
chunk__56599_57077 = G__57095;
count__56600_57078 = G__57096;
i__56601_57079 = G__57097;
continue;
} else {
var vec__56633_57099 = cljs.core.first(seq__56598_57092__$1);
var id_57100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56633_57099,(0),null);
var oref_57101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56633_57099,(1),null);
var G__56636_57102 = "dump";
var G__56637_57103 = id_57100;
var G__56638_57104 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_57101)], 0));
var G__56639_57105 = cljs.core.deref(shadow.object._data(oref_57101));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__56636_57102,G__56637_57103,G__56638_57104,G__56639_57105) : shadow.object.info.call(null,G__56636_57102,G__56637_57103,G__56638_57104,G__56639_57105));


var G__57106 = cljs.core.next(seq__56598_57092__$1);
var G__57107 = null;
var G__57108 = (0);
var G__57109 = (0);
seq__56598_57076 = G__57106;
chunk__56599_57077 = G__57107;
count__56600_57078 = G__57108;
i__56601_57079 = G__57109;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
