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
var G__59840 = arguments.length;
switch (G__59840) {
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
var G__60862 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__60862;
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
return (function (p1__59879_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__59879_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__59884 = arguments.length;
switch (G__59884) {
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
return (function (p1__59900_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__59900_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__59918){
var map__59920 = p__59918;
var map__59920__$1 = (((((!((map__59920 == null))))?(((((map__59920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59920):map__59920);
var oref = map__59920__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59920__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
var G__59944 = arguments.length;
switch (G__59944) {
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
return (function (p1__59935_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__59935_SHARP_));
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
var G__60885 = parent;
dom = G__60885;
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
var len__4730__auto___60889 = arguments.length;
var i__4731__auto___60890 = (0);
while(true){
if((i__4731__auto___60890 < len__4730__auto___60889)){
args__4736__auto__.push((arguments[i__4731__auto___60890]));

var G__60891 = (i__4731__auto___60890 + (1));
i__4731__auto___60890 = G__60891;
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
var seq__59997 = cljs.core.seq(reactions_to_trigger);
var chunk__59998 = null;
var count__59999 = (0);
var i__60000 = (0);
while(true){
if((i__60000 < count__59999)){
var rfn = chunk__59998.cljs$core$IIndexed$_nth$arity$2(null,i__60000);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__60898 = seq__59997;
var G__60899 = chunk__59998;
var G__60900 = count__59999;
var G__60901 = (i__60000 + (1));
seq__59997 = G__60898;
chunk__59998 = G__60899;
count__59999 = G__60900;
i__60000 = G__60901;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__59997);
if(temp__5720__auto____$1){
var seq__59997__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59997__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59997__$1);
var G__60906 = cljs.core.chunk_rest(seq__59997__$1);
var G__60907 = c__4550__auto__;
var G__60908 = cljs.core.count(c__4550__auto__);
var G__60909 = (0);
seq__59997 = G__60906;
chunk__59998 = G__60907;
count__59999 = G__60908;
i__60000 = G__60909;
continue;
} else {
var rfn = cljs.core.first(seq__59997__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__60910 = cljs.core.next(seq__59997__$1);
var G__60911 = null;
var G__60912 = (0);
var G__60913 = (0);
seq__59997 = G__60910;
chunk__59998 = G__60911;
count__59999 = G__60912;
i__60000 = G__60913;
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
shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq59988){
var G__59989 = cljs.core.first(seq59988);
var seq59988__$1 = cljs.core.next(seq59988);
var G__59990 = cljs.core.first(seq59988__$1);
var seq59988__$2 = cljs.core.next(seq59988__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59989,G__59990,seq59988__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__60014_60919 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__60015_60920 = null;
var count__60016_60921 = (0);
var i__60017_60922 = (0);
while(true){
if((i__60017_60922 < count__60016_60921)){
var child_60923 = chunk__60015_60920.cljs$core$IIndexed$_nth$arity$2(null,i__60017_60922);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_60923,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_60923,ev,notify_fn));


var G__60924 = seq__60014_60919;
var G__60925 = chunk__60015_60920;
var G__60926 = count__60016_60921;
var G__60927 = (i__60017_60922 + (1));
seq__60014_60919 = G__60924;
chunk__60015_60920 = G__60925;
count__60016_60921 = G__60926;
i__60017_60922 = G__60927;
continue;
} else {
var temp__5720__auto___60928 = cljs.core.seq(seq__60014_60919);
if(temp__5720__auto___60928){
var seq__60014_60929__$1 = temp__5720__auto___60928;
if(cljs.core.chunked_seq_QMARK_(seq__60014_60929__$1)){
var c__4550__auto___60930 = cljs.core.chunk_first(seq__60014_60929__$1);
var G__60931 = cljs.core.chunk_rest(seq__60014_60929__$1);
var G__60932 = c__4550__auto___60930;
var G__60933 = cljs.core.count(c__4550__auto___60930);
var G__60934 = (0);
seq__60014_60919 = G__60931;
chunk__60015_60920 = G__60932;
count__60016_60921 = G__60933;
i__60017_60922 = G__60934;
continue;
} else {
var child_60935 = cljs.core.first(seq__60014_60929__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_60935,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_60935,ev,notify_fn));


var G__60936 = cljs.core.next(seq__60014_60929__$1);
var G__60937 = null;
var G__60938 = (0);
var G__60939 = (0);
seq__60014_60919 = G__60936;
chunk__60015_60920 = G__60937;
count__60016_60921 = G__60938;
i__60017_60922 = G__60939;
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
var len__4730__auto___60941 = arguments.length;
var i__4731__auto___60942 = (0);
while(true){
if((i__4731__auto___60942 < len__4730__auto___60941)){
args__4736__auto__.push((arguments[i__4731__auto___60942]));

var G__60943 = (i__4731__auto___60942 + (1));
i__4731__auto___60942 = G__60943;
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
shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq60030){
var G__60031 = cljs.core.first(seq60030);
var seq60030__$1 = cljs.core.next(seq60030);
var G__60032 = cljs.core.first(seq60030__$1);
var seq60030__$2 = cljs.core.next(seq60030__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60031,G__60032,seq60030__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60947 = arguments.length;
var i__4731__auto___60948 = (0);
while(true){
if((i__4731__auto___60948 < len__4730__auto___60947)){
args__4736__auto__.push((arguments[i__4731__auto___60948]));

var G__60950 = (i__4731__auto___60948 + (1));
i__4731__auto___60948 = G__60950;
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

var G__60951 = shadow.object.get_parent(current);
current = G__60951;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq60057){
var G__60058 = cljs.core.first(seq60057);
var seq60057__$1 = cljs.core.next(seq60057);
var G__60059 = cljs.core.first(seq60057__$1);
var seq60057__$2 = cljs.core.next(seq60057__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60058,G__60059,seq60057__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60953 = arguments.length;
var i__4731__auto___60954 = (0);
while(true){
if((i__4731__auto___60954 < len__4730__auto___60953)){
args__4736__auto__.push((arguments[i__4731__auto___60954]));

var G__60955 = (i__4731__auto___60954 + (1));
i__4731__auto___60954 = G__60955;
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
shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq60084){
var G__60085 = cljs.core.first(seq60084);
var seq60084__$1 = cljs.core.next(seq60084);
var G__60086 = cljs.core.first(seq60084__$1);
var seq60084__$2 = cljs.core.next(seq60084__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60085,G__60086,seq60084__$2);
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
var G__60118 = this$;
var G__60119 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__60118,G__60119) : custom_remove.call(null,G__60118,G__60119));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__60124 = arguments.length;
switch (G__60124) {
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

var seq__60157 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__60158 = null;
var count__60159 = (0);
var i__60160 = (0);
while(true){
if((i__60160 < count__60159)){
var vec__60196 = chunk__60158.cljs$core$IIndexed$_nth$arity$2(null,i__60160);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60196,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60196,(1),null);
var ev_def = vec__60196;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_60969__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__60157,chunk__60158,count__60159,i__60160,vec__60196,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__60157,chunk__60158,count__60159,i__60160,vec__60196,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__60157,chunk__60158,count__60159,i__60160,handler_60969__$1,vec__60196,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_60969__$1.cljs$core$IFn$_invoke$arity$3 ? handler_60969__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_60969__$1.call(null,oref,e,el));
});})(seq__60157,chunk__60158,count__60159,i__60160,handler_60969__$1,vec__60196,ev,handler,ev_def))
);


var G__60975 = seq__60157;
var G__60976 = chunk__60158;
var G__60977 = count__60159;
var G__60978 = (i__60160 + (1));
seq__60157 = G__60975;
chunk__60158 = G__60976;
count__60159 = G__60977;
i__60160 = G__60978;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60157);
if(temp__5720__auto__){
var seq__60157__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60157__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60157__$1);
var G__60979 = cljs.core.chunk_rest(seq__60157__$1);
var G__60980 = c__4550__auto__;
var G__60981 = cljs.core.count(c__4550__auto__);
var G__60982 = (0);
seq__60157 = G__60979;
chunk__60158 = G__60980;
count__60159 = G__60981;
i__60160 = G__60982;
continue;
} else {
var vec__60226 = cljs.core.first(seq__60157__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(1),null);
var ev_def = vec__60226;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_60983__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__60157,chunk__60158,count__60159,i__60160,vec__60226,ev,handler,ev_def,seq__60157__$1,temp__5720__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__60157,chunk__60158,count__60159,i__60160,vec__60226,ev,handler,ev_def,seq__60157__$1,temp__5720__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__60157,chunk__60158,count__60159,i__60160,handler_60983__$1,vec__60226,ev,handler,ev_def,seq__60157__$1,temp__5720__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_60983__$1.cljs$core$IFn$_invoke$arity$3 ? handler_60983__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_60983__$1.call(null,oref,e,el));
});})(seq__60157,chunk__60158,count__60159,i__60160,handler_60983__$1,vec__60226,ev,handler,ev_def,seq__60157__$1,temp__5720__auto__))
);


var G__60994 = cljs.core.next(seq__60157__$1);
var G__60995 = null;
var G__60996 = (0);
var G__60997 = (0);
seq__60157 = G__60994;
chunk__60158 = G__60995;
count__60159 = G__60996;
i__60160 = G__60997;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__60241){
var vec__60246 = p__60241;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60246,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60246,(1),null);
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
var len__4730__auto___61009 = arguments.length;
var i__4731__auto___61010 = (0);
while(true){
if((i__4731__auto___61010 < len__4730__auto___61009)){
args__4736__auto__.push((arguments[i__4731__auto___61010]));

var G__61011 = (i__4731__auto___61010 + (1));
i__4731__auto___61010 = G__61011;
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
}catch (e60301){if((e60301 instanceof Object)){
var e = e60301;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e60301;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.object.define.cljs$lang$applyTo = (function (seq60282){
var G__60283 = cljs.core.first(seq60282);
var seq60282__$1 = cljs.core.next(seq60282);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60283,seq60282__$1);
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
var G__60334 = arguments.length;
switch (G__60334) {
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
var dom = (function (){var G__60356 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__60356) : shadow.dom.build.call(null,G__60356));
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

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k60370,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__60391 = k60370;
var G__60391__$1 = (((G__60391 instanceof cljs.core.Keyword))?G__60391.fqn:null);
switch (G__60391__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60370,else__4388__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__60405){
var vec__60411 = p__60405;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60411,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60411,(1),null);
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

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60369){
var self__ = this;
var G__60369__$1 = this;
return (new cljs.core.RecordIter((0),G__60369__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60371,other60372){
var self__ = this;
var this60371__$1 = this;
return (((!((other60372 == null)))) && ((this60371__$1.constructor === other60372.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60371__$1.key,other60372.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60371__$1.handler,other60372.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60371__$1.__extmap,other60372.__extmap)));
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

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__60369){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__60487 = cljs.core.keyword_identical_QMARK_;
var expr__60488 = k__4393__auto__;
if(cljs.core.truth_((pred__60487.cljs$core$IFn$_invoke$arity$2 ? pred__60487.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__60488) : pred__60487.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__60488)))){
return (new shadow.object.Watch(G__60369,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60487.cljs$core$IFn$_invoke$arity$2 ? pred__60487.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__60488) : pred__60487.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__60488)))){
return (new shadow.object.Watch(self__.key,G__60369,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__60369),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__60369){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__60369,self__.__extmap,self__.__hash));
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
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__60376){
var extmap__4424__auto__ = (function (){var G__60512 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60376,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__60376)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60512);
} else {
return G__60512;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__60376),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__60376),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
return (function (p1__60520_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__60520_SHARP_));
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

var seq__60561 = cljs.core.seq(self__.watches);
var chunk__60562 = null;
var count__60563 = (0);
var i__60564 = (0);
while(true){
if((i__60564 < count__60563)){
var map__60579 = chunk__60562.cljs$core$IIndexed$_nth$arity$2(null,i__60564);
var map__60579__$1 = (((((!((map__60579 == null))))?(((((map__60579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60579):map__60579);
var watch = map__60579__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__61134 = seq__60561;
var G__61135 = chunk__60562;
var G__61136 = count__60563;
var G__61137 = (i__60564 + (1));
seq__60561 = G__61134;
chunk__60562 = G__61135;
count__60563 = G__61136;
i__60564 = G__61137;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60561);
if(temp__5720__auto__){
var seq__60561__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60561__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60561__$1);
var G__61142 = cljs.core.chunk_rest(seq__60561__$1);
var G__61143 = c__4550__auto__;
var G__61144 = cljs.core.count(c__4550__auto__);
var G__61145 = (0);
seq__60561 = G__61142;
chunk__60562 = G__61143;
count__60563 = G__61144;
i__60564 = G__61145;
continue;
} else {
var map__60585 = cljs.core.first(seq__60561__$1);
var map__60585__$1 = (((((!((map__60585 == null))))?(((((map__60585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60585):map__60585);
var watch = map__60585__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__61162 = cljs.core.next(seq__60561__$1);
var G__61163 = null;
var G__61164 = (0);
var G__61165 = (0);
seq__60561 = G__61162;
chunk__60562 = G__61163;
count__60563 = G__61164;
i__60564 = G__61165;
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
var seq__60596_61170 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__60597_61171 = null;
var count__60598_61172 = (0);
var i__60599_61173 = (0);
while(true){
if((i__60599_61173 < count__60598_61172)){
var child_61174 = chunk__60597_61171.cljs$core$IIndexed$_nth$arity$2(null,i__60599_61173);
shadow.object._destroy_BANG_(child_61174,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__61175 = seq__60596_61170;
var G__61176 = chunk__60597_61171;
var G__61177 = count__60598_61172;
var G__61178 = (i__60599_61173 + (1));
seq__60596_61170 = G__61175;
chunk__60597_61171 = G__61176;
count__60598_61172 = G__61177;
i__60599_61173 = G__61178;
continue;
} else {
var temp__5720__auto___61180 = cljs.core.seq(seq__60596_61170);
if(temp__5720__auto___61180){
var seq__60596_61181__$1 = temp__5720__auto___61180;
if(cljs.core.chunked_seq_QMARK_(seq__60596_61181__$1)){
var c__4550__auto___61182 = cljs.core.chunk_first(seq__60596_61181__$1);
var G__61183 = cljs.core.chunk_rest(seq__60596_61181__$1);
var G__61184 = c__4550__auto___61182;
var G__61185 = cljs.core.count(c__4550__auto___61182);
var G__61186 = (0);
seq__60596_61170 = G__61183;
chunk__60597_61171 = G__61184;
count__60598_61172 = G__61185;
i__60599_61173 = G__61186;
continue;
} else {
var child_61188 = cljs.core.first(seq__60596_61181__$1);
shadow.object._destroy_BANG_(child_61188,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__61190 = cljs.core.next(seq__60596_61181__$1);
var G__61191 = null;
var G__61192 = (0);
var G__61193 = (0);
seq__60596_61170 = G__61190;
chunk__60597_61171 = G__61191;
count__60598_61172 = G__61192;
i__60599_61173 = G__61193;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_61194 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_61194 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_61194);
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
var G__60632 = arguments.length;
switch (G__60632) {
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
var G__60645 = arguments.length;
switch (G__60645) {
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
var len__4730__auto___61215 = arguments.length;
var i__4731__auto___61218 = (0);
while(true){
if((i__4731__auto___61218 < len__4730__auto___61215)){
args__4736__auto__.push((arguments[i__4731__auto___61218]));

var G__61219 = (i__4731__auto___61218 + (1));
i__4731__auto___61218 = G__61219;
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

var dom_events_61243 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5718__auto___61245 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5718__auto___61245)){
var dom_61246 = temp__5718__auto___61245;
shadow.dom.set_data(dom_61246,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_61246,dom_events_61243);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_61246], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_61246], 0));
} else {
var temp__5720__auto___61248 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___61248)){
var dom_fn_61249 = temp__5720__auto___61248;
var dom_61251 = (function (){var G__60676 = (dom_fn_61249.cljs$core$IFn$_invoke$arity$2 ? dom_fn_61249.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_61249.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__60676) : shadow.dom.build.call(null,G__60676));
})();
shadow.dom.set_data(dom_61251,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_61251], 0));

shadow.object.bind_dom_events(oref,dom_61251,dom_events_61243);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_61251], 0));
} else {
}
}

var temp__5720__auto___61253 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___61253)){
var watches_61254 = temp__5720__auto___61253;
var seq__60678_61255 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_61254));
var chunk__60679_61256 = null;
var count__60680_61257 = (0);
var i__60681_61258 = (0);
while(true){
if((i__60681_61258 < count__60680_61257)){
var vec__60693_61259 = chunk__60679_61256.cljs$core$IIndexed$_nth$arity$2(null,i__60681_61258);
var attr_61260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60693_61259,(0),null);
var handler_61261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60693_61259,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_61260,((function (seq__60678_61255,chunk__60679_61256,count__60680_61257,i__60681_61258,vec__60693_61259,attr_61260,handler_61261,watches_61254,temp__5720__auto___61253,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_61261.cljs$core$IFn$_invoke$arity$3 ? handler_61261.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_61261.call(null,oref,old,new$));
});})(seq__60678_61255,chunk__60679_61256,count__60680_61257,i__60681_61258,vec__60693_61259,attr_61260,handler_61261,watches_61254,temp__5720__auto___61253,oid,parent,result_chan,odef,obj,oref))
);


var G__61269 = seq__60678_61255;
var G__61270 = chunk__60679_61256;
var G__61271 = count__60680_61257;
var G__61272 = (i__60681_61258 + (1));
seq__60678_61255 = G__61269;
chunk__60679_61256 = G__61270;
count__60680_61257 = G__61271;
i__60681_61258 = G__61272;
continue;
} else {
var temp__5720__auto___61273__$1 = cljs.core.seq(seq__60678_61255);
if(temp__5720__auto___61273__$1){
var seq__60678_61274__$1 = temp__5720__auto___61273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60678_61274__$1)){
var c__4550__auto___61275 = cljs.core.chunk_first(seq__60678_61274__$1);
var G__61276 = cljs.core.chunk_rest(seq__60678_61274__$1);
var G__61277 = c__4550__auto___61275;
var G__61278 = cljs.core.count(c__4550__auto___61275);
var G__61279 = (0);
seq__60678_61255 = G__61276;
chunk__60679_61256 = G__61277;
count__60680_61257 = G__61278;
i__60681_61258 = G__61279;
continue;
} else {
var vec__60701_61280 = cljs.core.first(seq__60678_61274__$1);
var attr_61281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60701_61280,(0),null);
var handler_61282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60701_61280,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_61281,((function (seq__60678_61255,chunk__60679_61256,count__60680_61257,i__60681_61258,vec__60701_61280,attr_61281,handler_61282,seq__60678_61274__$1,temp__5720__auto___61273__$1,watches_61254,temp__5720__auto___61253,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_61282.cljs$core$IFn$_invoke$arity$3 ? handler_61282.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_61282.call(null,oref,old,new$));
});})(seq__60678_61255,chunk__60679_61256,count__60680_61257,i__60681_61258,vec__60701_61280,attr_61281,handler_61282,seq__60678_61274__$1,temp__5720__auto___61273__$1,watches_61254,temp__5720__auto___61253,oid,parent,result_chan,odef,obj,oref))
);


var G__61288 = cljs.core.next(seq__60678_61274__$1);
var G__61289 = null;
var G__61290 = (0);
var G__61291 = (0);
seq__60678_61255 = G__61288;
chunk__60679_61256 = G__61289;
count__60680_61257 = G__61290;
i__60681_61258 = G__61291;
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
shadow.object.create.cljs$lang$applyTo = (function (seq60665){
var G__60666 = cljs.core.first(seq60665);
var seq60665__$1 = cljs.core.next(seq60665);
var G__60667 = cljs.core.first(seq60665__$1);
var seq60665__$2 = cljs.core.next(seq60665__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60666,G__60667,seq60665__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__60710 = arguments.length;
switch (G__60710) {
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
return (function (p1__60707_SHARP_){
var G__60716 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__60707_SHARP_) : node_gen.call(null,p1__60707_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__60716) : shadow.dom.build.call(null,G__60716));
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
var seq__60726_61319 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__60727_61320 = null;
var count__60728_61321 = (0);
var i__60729_61322 = (0);
while(true){
if((i__60729_61322 < count__60728_61321)){
var obj_61327 = chunk__60727_61320.cljs$core$IIndexed$_nth$arity$2(null,i__60729_61322);
var obj_61328__$1 = shadow.object.get_from_dom(obj_61327);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_61328__$1);


var G__61332 = seq__60726_61319;
var G__61333 = chunk__60727_61320;
var G__61334 = count__60728_61321;
var G__61335 = (i__60729_61322 + (1));
seq__60726_61319 = G__61332;
chunk__60727_61320 = G__61333;
count__60728_61321 = G__61334;
i__60729_61322 = G__61335;
continue;
} else {
var temp__5720__auto___61343 = cljs.core.seq(seq__60726_61319);
if(temp__5720__auto___61343){
var seq__60726_61344__$1 = temp__5720__auto___61343;
if(cljs.core.chunked_seq_QMARK_(seq__60726_61344__$1)){
var c__4550__auto___61348 = cljs.core.chunk_first(seq__60726_61344__$1);
var G__61349 = cljs.core.chunk_rest(seq__60726_61344__$1);
var G__61350 = c__4550__auto___61348;
var G__61351 = cljs.core.count(c__4550__auto___61348);
var G__61352 = (0);
seq__60726_61319 = G__61349;
chunk__60727_61320 = G__61350;
count__60728_61321 = G__61351;
i__60729_61322 = G__61352;
continue;
} else {
var obj_61355 = cljs.core.first(seq__60726_61344__$1);
var obj_61357__$1 = shadow.object.get_from_dom(obj_61355);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_61357__$1);


var G__61363 = cljs.core.next(seq__60726_61344__$1);
var G__61364 = null;
var G__61365 = (0);
var G__61366 = (0);
seq__60726_61319 = G__61363;
chunk__60727_61320 = G__61364;
count__60728_61321 = G__61365;
i__60729_61322 = G__61366;
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
var G__60744 = arguments.length;
switch (G__60744) {
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
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__60738_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__60738_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__60747){
var vec__60748 = p__60747;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60748,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60748,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__60748,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__60748,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__60752_61379 = cljs.core.seq((function (){var G__60758 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__60758) : coll_transform.call(null,G__60758));
})());
var chunk__60753_61380 = null;
var count__60754_61381 = (0);
var i__60755_61382 = (0);
while(true){
if((i__60755_61382 < count__60754_61381)){
var item_61387 = chunk__60753_61380.cljs$core$IIndexed$_nth$arity$2(null,i__60755_61382);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61387));


var G__61388 = seq__60752_61379;
var G__61389 = chunk__60753_61380;
var G__61390 = count__60754_61381;
var G__61391 = (i__60755_61382 + (1));
seq__60752_61379 = G__61388;
chunk__60753_61380 = G__61389;
count__60754_61381 = G__61390;
i__60755_61382 = G__61391;
continue;
} else {
var temp__5720__auto___61394 = cljs.core.seq(seq__60752_61379);
if(temp__5720__auto___61394){
var seq__60752_61395__$1 = temp__5720__auto___61394;
if(cljs.core.chunked_seq_QMARK_(seq__60752_61395__$1)){
var c__4550__auto___61396 = cljs.core.chunk_first(seq__60752_61395__$1);
var G__61397 = cljs.core.chunk_rest(seq__60752_61395__$1);
var G__61398 = c__4550__auto___61396;
var G__61399 = cljs.core.count(c__4550__auto___61396);
var G__61400 = (0);
seq__60752_61379 = G__61397;
chunk__60753_61380 = G__61398;
count__60754_61381 = G__61399;
i__60755_61382 = G__61400;
continue;
} else {
var item_61401 = cljs.core.first(seq__60752_61395__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61401));


var G__61402 = cljs.core.next(seq__60752_61395__$1);
var G__61403 = null;
var G__61404 = (0);
var G__61405 = (0);
seq__60752_61379 = G__61402;
chunk__60753_61380 = G__61403;
count__60754_61381 = G__61404;
i__60755_61382 = G__61405;
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
var n__4607__auto___61422 = count_children__$1;
var idx_61423 = (0);
while(true){
if((idx_61423 < n__4607__auto___61422)){
var cn_61424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_61423);
var cc_61425 = shadow.object.get_from_dom(cn_61424);
var ckey_61426 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_61425);
var cval_61427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_61425,item_key);
var vec__60762_61428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_61423);
var nkey_61429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60762_61428,(0),null);
var nval_61430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60762_61428,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_61426,nkey_61429)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_61427,nval_61430)))){
} else {
var new_obj_61439 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_61429,nval_61430], null));
shadow.dom.replace_node(cn_61424,new_obj_61439);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_61425);

shadow.object.notify_tree_BANG_(new_obj_61439,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__61440 = (idx_61423 + (1));
idx_61423 = G__61440;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__60768_61442 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__60769_61443 = null;
var count__60770_61444 = (0);
var i__60771_61445 = (0);
while(true){
if((i__60771_61445 < count__60770_61444)){
var item_61447 = chunk__60769_61443.cljs$core$IIndexed$_nth$arity$2(null,i__60771_61445);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61447));


var G__61449 = seq__60768_61442;
var G__61450 = chunk__60769_61443;
var G__61451 = count__60770_61444;
var G__61452 = (i__60771_61445 + (1));
seq__60768_61442 = G__61449;
chunk__60769_61443 = G__61450;
count__60770_61444 = G__61451;
i__60771_61445 = G__61452;
continue;
} else {
var temp__5720__auto___61454 = cljs.core.seq(seq__60768_61442);
if(temp__5720__auto___61454){
var seq__60768_61455__$1 = temp__5720__auto___61454;
if(cljs.core.chunked_seq_QMARK_(seq__60768_61455__$1)){
var c__4550__auto___61456 = cljs.core.chunk_first(seq__60768_61455__$1);
var G__61462 = cljs.core.chunk_rest(seq__60768_61455__$1);
var G__61463 = c__4550__auto___61456;
var G__61464 = cljs.core.count(c__4550__auto___61456);
var G__61465 = (0);
seq__60768_61442 = G__61462;
chunk__60769_61443 = G__61463;
count__60770_61444 = G__61464;
i__60771_61445 = G__61465;
continue;
} else {
var item_61466 = cljs.core.first(seq__60768_61455__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_61466));


var G__61467 = cljs.core.next(seq__60768_61455__$1);
var G__61468 = null;
var G__61469 = (0);
var G__61470 = (0);
seq__60768_61442 = G__61467;
chunk__60769_61443 = G__61468;
count__60770_61444 = G__61469;
i__60771_61445 = G__61470;
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
var G__60784 = "inspect!";
var G__60785 = shadow.object._id(oref);
var G__60786 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__60787 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__60784,G__60785,G__60786,G__60787) : shadow.object.info.call(null,G__60784,G__60785,G__60786,G__60787));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__60790_61487 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__60791_61488 = null;
var count__60792_61489 = (0);
var i__60793_61490 = (0);
while(true){
if((i__60793_61490 < count__60792_61489)){
var vec__60813_61492 = chunk__60791_61488.cljs$core$IIndexed$_nth$arity$2(null,i__60793_61490);
var id_61493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60813_61492,(0),null);
var oref_61494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60813_61492,(1),null);
var G__60816_61499 = "dump";
var G__60817_61500 = id_61493;
var G__60818_61501 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_61494)], 0));
var G__60819_61502 = cljs.core.deref(shadow.object._data(oref_61494));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__60816_61499,G__60817_61500,G__60818_61501,G__60819_61502) : shadow.object.info.call(null,G__60816_61499,G__60817_61500,G__60818_61501,G__60819_61502));


var G__61507 = seq__60790_61487;
var G__61508 = chunk__60791_61488;
var G__61509 = count__60792_61489;
var G__61510 = (i__60793_61490 + (1));
seq__60790_61487 = G__61507;
chunk__60791_61488 = G__61508;
count__60792_61489 = G__61509;
i__60793_61490 = G__61510;
continue;
} else {
var temp__5720__auto___61516 = cljs.core.seq(seq__60790_61487);
if(temp__5720__auto___61516){
var seq__60790_61519__$1 = temp__5720__auto___61516;
if(cljs.core.chunked_seq_QMARK_(seq__60790_61519__$1)){
var c__4550__auto___61525 = cljs.core.chunk_first(seq__60790_61519__$1);
var G__61526 = cljs.core.chunk_rest(seq__60790_61519__$1);
var G__61527 = c__4550__auto___61525;
var G__61528 = cljs.core.count(c__4550__auto___61525);
var G__61529 = (0);
seq__60790_61487 = G__61526;
chunk__60791_61488 = G__61527;
count__60792_61489 = G__61528;
i__60793_61490 = G__61529;
continue;
} else {
var vec__60822_61531 = cljs.core.first(seq__60790_61519__$1);
var id_61532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60822_61531,(0),null);
var oref_61533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60822_61531,(1),null);
var G__60825_61544 = "dump";
var G__60826_61545 = id_61532;
var G__60827_61546 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_61533)], 0));
var G__60828_61547 = cljs.core.deref(shadow.object._data(oref_61533));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__60825_61544,G__60826_61545,G__60827_61546,G__60828_61547) : shadow.object.info.call(null,G__60825_61544,G__60826_61545,G__60827_61546,G__60828_61547));


var G__61553 = cljs.core.next(seq__60790_61519__$1);
var G__61554 = null;
var G__61555 = (0);
var G__61556 = (0);
seq__60790_61487 = G__61553;
chunk__60791_61488 = G__61554;
count__60792_61489 = G__61555;
i__60793_61490 = G__61556;
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
