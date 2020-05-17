goog.provide('com.wsscode.pathom.graphql');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.misc');
com.wsscode.pathom.graphql._STAR_unbounded_recursion_count_STAR_ = (5);
com.wsscode.pathom.graphql.camel_case = (function com$wsscode$pathom$graphql$camel_case(s){
return camel_snake_kebab.core.__GT_camelCase(s);
});
com.wsscode.pathom.graphql.kebab_case = (function com$wsscode$pathom$graphql$kebab_case(s){
return camel_snake_kebab.core.__GT_kebab_case(s);
});
com.wsscode.pathom.graphql.pad_depth = (function com$wsscode$pathom$graphql$pad_depth(depth){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(depth,"  "));
});
com.wsscode.pathom.graphql.has_call_QMARK_ = (function com$wsscode$pathom$graphql$has_call_QMARK_(children){
return cljs.core.boolean$(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55360){
var map__55361 = p__55360;
var map__55361__$1 = (((((!((map__55361 == null))))?(((((map__55361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55361):map__55361);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55361__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
}),children)));
});
com.wsscode.pathom.graphql.find_id = (function com$wsscode$pathom$graphql$find_id(m,tempid_QMARK_){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55379){
var vec__55381 = p__55379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55381,(1),null);
return (tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : tempid_QMARK_.call(null,v));
}),m));
});
com.wsscode.pathom.graphql.stringify = (function com$wsscode$pathom$graphql$stringify(x){
return JSON.stringify((function (){var G__55407 = cljs.core.clj__GT_js(x);
if(cljs.core.uuid_QMARK_(x)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55407);
} else {
return G__55407;
}
})());
});
com.wsscode.pathom.graphql.params__GT_graphql = (function com$wsscode$pathom$graphql$params__GT_graphql(var_args){
var G__55418 = arguments.length;
switch (G__55418) {
case 3:
return com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$3 = (function (x,js_name,tempid_QMARK_){
return com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$4(x,js_name,tempid_QMARK_,true);
});

com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$4 = (function (x,js_name,tempid_QMARK_,root_QMARK_){
if(cljs.core.map_QMARK_(x)){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__55437){
var vec__55441 = p__55437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55441,(1),null);
return (tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : tempid_QMARK_.call(null,v));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__55449){
var vec__55450 = p__55449;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55450,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55450,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((js_name.cljs$core$IFn$_invoke$arity$1 ? js_name.cljs$core$IFn$_invoke$arity$1(k) : js_name.call(null,k))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$4(v,js_name,tempid_QMARK_,false))].join('');
}))),x));
if(cljs.core.truth_(root_QMARK_)){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),")"].join('');
} else {
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),"}"].join('');
}
} else {
if(cljs.core.sequential_QMARK_(x)){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55415_SHARP_){
return com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$4(p1__55415_SHARP_,js_name,tempid_QMARK_,false);
}),x))),"]"].join('');
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.name(x);
} else {
return com.wsscode.pathom.graphql.stringify(x);

}
}
}
});

com.wsscode.pathom.graphql.params__GT_graphql.cljs$lang$maxFixedArity = 4;

/**
 * Convert ident like [:Contact/by-id 123] to an usable GraphQL alias (eg: _COLON_Contact_SLASH_by_id_123).
 */
com.wsscode.pathom.graphql.ident__GT_alias = (function com$wsscode$pathom$graphql$ident__GT_alias(p__55464){
var vec__55465 = p__55464;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55465,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55465,(1),null);
var value__$1 = ((cljs.core.vector_QMARK_(value))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",value):value);
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)].join(''),/[^a-zA-Z0-9_]/,"_");
});
com.wsscode.pathom.graphql.ident_transform = (function com$wsscode$pathom$graphql$ident_transform(p__55513){
var vec__55514 = p__55513;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55514,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55514,(1),null);
var fields = (function (){var temp__5718__auto__ = cljs.core.name(key);
if(cljs.core.truth_(temp__5718__auto__)){
var field_part = temp__5718__auto__;
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(field_part,/-and-|And/);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id"], null);
}
})();
var value__$1 = ((cljs.core.vector_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(fields),cljs.core.count(value__$1))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The number of fields on value needs to match the entries",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.graphql","selector","com.wsscode.pathom.graphql/selector",-564918133),cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(key),/\./)),new cljs.core.Keyword("com.wsscode.pathom.graphql","params","com.wsscode.pathom.graphql/params",1698880382),cljs.core.zipmap(fields,value__$1)], null);
});
com.wsscode.pathom.graphql.group_inline_unions = (function com$wsscode$pathom$graphql$group_inline_unions(children){
var map__55560 = cljs.core.group_by((function (p1__55549_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__55549_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.wsscode.pathom.graphql","on","com.wsscode.pathom.graphql/on",1244976995)], null));
}),children);
var map__55560__$1 = (((((!((map__55560 == null))))?(((((map__55560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55560):map__55560);
var groups = map__55560__$1;
var general = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55560__$1,null);
var groups__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__55560,map__55560__$1,groups,general){
return (function (p__55590){
var vec__55593 = p__55590;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__55593,k,v,map__55560,map__55560__$1,groups,general){
return (function (p1__55552_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55552_SHARP_,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom.graphql","on","com.wsscode.pathom.graphql/on",1244976995));
});})(vec__55593,k,v,map__55560,map__55560__$1,groups,general))
,v)], null);
});})(map__55560,map__55560__$1,groups,general))
),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(groups,null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(general,groups__$1);
});
com.wsscode.pathom.graphql.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.graphql","on","com.wsscode.pathom.graphql/on",1244976995),null,new cljs.core.Keyword("com.wsscode.pathom.graphql","alias","com.wsscode.pathom.graphql/alias",-1051418195),null], null), null);
com.wsscode.pathom.graphql.node__GT_graphql = (function com$wsscode$pathom$graphql$node__GT_graphql(p__55604){
var map__55606 = p__55604;
var map__55606__$1 = (((((!((map__55606 == null))))?(((((map__55606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55606):map__55606);
var tempid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55606__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701),cljs.core.constantly(false));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var parent_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","parent-children","com.wsscode.pathom.graphql/parent-children",-986285872));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var ident_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55606__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55606__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","depth","com.wsscode.pathom.graphql/depth",-1398356279),(0));
var continue$ = ((function (map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth){
return (function() {
var com$wsscode$pathom$graphql$node__GT_graphql_$_continue = null;
var com$wsscode$pathom$graphql$node__GT_graphql_$_continue__1 = (function (x){
return com$wsscode$pathom$graphql$node__GT_graphql_$_continue.cljs$core$IFn$_invoke$arity$2(x,cljs.core.inc);
});
var com$wsscode$pathom$graphql$node__GT_graphql_$_continue__2 = (function (x,depth_iterate){
var G__55616 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.graphql","depth","com.wsscode.pathom.graphql/depth",-1398356279),(depth_iterate.cljs$core$IFn$_invoke$arity$1 ? depth_iterate.cljs$core$IFn$_invoke$arity$1(depth) : depth_iterate.call(null,depth)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.graphql","parent-children","com.wsscode.pathom.graphql/parent-children",-986285872),(function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.graphql","parent-children","com.wsscode.pathom.graphql/parent-children",-986285872).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return children;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576),js_name,new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701),tempid_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546),ident_transform], 0));
return (com.wsscode.pathom.graphql.node__GT_graphql.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.graphql.node__GT_graphql.cljs$core$IFn$_invoke$arity$1(G__55616) : com.wsscode.pathom.graphql.node__GT_graphql.call(null,G__55616));
});
com$wsscode$pathom$graphql$node__GT_graphql_$_continue = function(x,depth_iterate){
switch(arguments.length){
case 1:
return com$wsscode$pathom$graphql$node__GT_graphql_$_continue__1.call(this,x);
case 2:
return com$wsscode$pathom$graphql$node__GT_graphql_$_continue__2.call(this,x,depth_iterate);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$graphql$node__GT_graphql_$_continue.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$graphql$node__GT_graphql_$_continue__1;
com$wsscode$pathom$graphql$node__GT_graphql_$_continue.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom$graphql$node__GT_graphql_$_continue__2;
return com$wsscode$pathom$graphql$node__GT_graphql_$_continue;
})()
;})(map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth))
;
var map__55617 = params;
var map__55617__$1 = (((((!((map__55617 == null))))?(((((map__55617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55617):map__55617);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55617__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","alias","com.wsscode.pathom.graphql/alias",-1051418195));
var params__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,params,com.wsscode.pathom.graphql.special_params);
var G__55620 = type;
var G__55620__$1 = (((G__55620 instanceof cljs.core.Keyword))?G__55620.fqn:null);
switch (G__55620__$1) {
case "root":
return [((com.wsscode.pathom.graphql.has_call_QMARK_(children))?"mutation ":"query "),"{\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(continue$,com.wsscode.pathom.graphql.group_inline_unions(children)))),"}\n"].join('');

break;
case "join":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),query)){
return "";
} else {
var header = ((cljs.core.vector_QMARK_(key))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((ident_transform.cljs$core$IFn$_invoke$arity$1 ? ident_transform.cljs$core$IFn$_invoke$arity$1(key) : ident_transform.call(null,key)),new cljs.core.Keyword("com.wsscode.pathom.graphql","index","com.wsscode.pathom.graphql/index",-510846884),com.wsscode.pathom.graphql.ident__GT_alias(key)):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.graphql","index","com.wsscode.pathom.graphql/index",-510846884),alias,new cljs.core.Keyword("com.wsscode.pathom.graphql","selector","com.wsscode.pathom.graphql/selector",-564918133),dispatch_key,new cljs.core.Keyword("com.wsscode.pathom.graphql","params","com.wsscode.pathom.graphql/params",1698880382),null], null));
var params__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.graphql","params","com.wsscode.pathom.graphql/params",1698880382).cljs$core$IFn$_invoke$arity$1(header),params__$1], 0));
var children__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query))?(function (){var parent = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),parent_children], null),key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword(null,"query","query",-1288509510),(com.wsscode.pathom.graphql._STAR_unbounded_recursion_count_STAR_ - (1))], 0)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (parent,header,params__$2,G__55620,G__55620__$1,map__55617,map__55617__$1,alias,params__$1,map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth){
return (function (p1__55600_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55600_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.graphql","parent-children","com.wsscode.pathom.graphql/parent-children",-986285872),parent);
});})(parent,header,params__$2,G__55620,G__55620__$1,map__55617,map__55617__$1,alias,params__$1,map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth))
,parent);
})():((cljs.core.pos_int_QMARK_(query))?(function (){var parent = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),parent_children], null),key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dec], 0)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (parent,header,params__$2,G__55620,G__55620__$1,map__55617,map__55617__$1,alias,params__$1,map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth){
return (function (p1__55602_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55602_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.graphql","parent-children","com.wsscode.pathom.graphql/parent-children",-986285872),parent);
});})(parent,header,params__$2,G__55620,G__55620__$1,map__55617,map__55617__$1,alias,params__$1,map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth))
,parent);
})():children
));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.graphql","index","com.wsscode.pathom.graphql/index",-510846884).cljs$core$IFn$_invoke$arity$1(header))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.graphql","index","com.wsscode.pathom.graphql/index",-510846884).cljs$core$IFn$_invoke$arity$1(header)),": "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__55632 = new cljs.core.Keyword("com.wsscode.pathom.graphql","selector","com.wsscode.pathom.graphql/selector",-564918133).cljs$core$IFn$_invoke$arity$1(header);
return (js_name.cljs$core$IFn$_invoke$arity$1 ? js_name.cljs$core$IFn$_invoke$arity$1(G__55632) : js_name.call(null,G__55632));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(params__$2))?com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$3(params__$2,js_name,tempid_QMARK_):null))," {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(continue$,com.wsscode.pathom.graphql.group_inline_unions(children__$1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),"}\n"].join('');
}

break;
case "call":
var map__55633 = params__$1;
var map__55633__$1 = (((((!((map__55633 == null))))?(((((map__55633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55633):map__55633);
var mutate_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55633__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","mutate-join","com.wsscode.pathom.graphql/mutate-join",-257946587));
var children__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),new cljs.core.Keyword(null,"key","key",-1516042587)),(function (){var or__4131__auto__ = (function (){var G__55640 = mutate_join;
var G__55640__$1 = (((G__55640 == null))?null:com.wsscode.pathom.core.query__GT_ast(G__55640));
if((G__55640__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__55640__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return children;
}
})());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((js_name.cljs$core$IFn$_invoke$arity$1 ? js_name.cljs$core$IFn$_invoke$arity$1(dispatch_key) : js_name.call(null,dispatch_key))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params__$1,new cljs.core.Keyword("com.wsscode.pathom.graphql","mutate-join","com.wsscode.pathom.graphql/mutate-join",-257946587)),js_name,tempid_QMARK_)),((cljs.core.seq(children__$1))?[" {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(continue$,com.wsscode.pathom.graphql.group_inline_unions(children__$1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),"}\n"].join(''):(function (){var temp__5718__auto__ = com.wsscode.pathom.graphql.find_id(params__$1,tempid_QMARK_);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__55657 = temp__5718__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(1),null);
return [" {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth((depth + (1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((js_name.cljs$core$IFn$_invoke$arity$1 ? js_name.cljs$core$IFn$_invoke$arity$1(k) : js_name.call(null,k))),"}\n"].join('');
} else {
return null;
}
})())].join('');

break;
case "union":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),"__typename\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__55620,G__55620__$1,map__55617,map__55617__$1,alias,params__$1,map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth){
return (function (p1__55603_SHARP_){
return continue$(p1__55603_SHARP_,cljs.core.identity);
});})(G__55620,G__55620__$1,map__55617,map__55617__$1,alias,params__$1,map__55606,map__55606__$1,tempid_QMARK_,query,children,union_key,parent_children,key,params,type,js_name,dispatch_key,ident_transform,depth))
,children)))].join('');

break;
case "union-entry":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),"... on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof union_key === 'string')?union_key:(js_name.cljs$core$IFn$_invoke$arity$1 ? js_name.cljs$core$IFn$_invoke$arity$1(union_key) : js_name.call(null,union_key))))," {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(continue$,children))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),"}\n"].join('');

break;
case "prop":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.graphql.pad_depth(depth)),(cljs.core.truth_(alias)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),": "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((js_name.cljs$core$IFn$_invoke$arity$1 ? js_name.cljs$core$IFn$_invoke$arity$1(dispatch_key) : js_name.call(null,dispatch_key))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(params__$1))?com.wsscode.pathom.graphql.params__GT_graphql.cljs$core$IFn$_invoke$arity$3(params__$1,js_name,tempid_QMARK_):null)),"\n"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55620__$1)].join('')));

}
});
/**
 * Convert query from EDN format to GraphQL string.
 */
com.wsscode.pathom.graphql.query__GT_graphql = (function com$wsscode$pathom$graphql$query__GT_graphql(var_args){
var G__55671 = arguments.length;
switch (G__55671) {
case 1:
return com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$1 = (function (query){
return com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(query,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2 = (function (query,options){
var ast = com.wsscode.pathom.core.query__GT_ast(query);
return com.wsscode.pathom.graphql.node__GT_graphql(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576),cljs.core.name,new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546),com.wsscode.pathom.graphql.ident_transform,new cljs.core.Keyword("com.wsscode.pathom.graphql","parent-children","com.wsscode.pathom.graphql/parent-children",-986285872),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)], null),options], 0)));
});

com.wsscode.pathom.graphql.query__GT_graphql.cljs$lang$maxFixedArity = 2;

if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.graphql","node->graphql","com.wsscode.pathom.graphql/node->graphql",1474455173,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55687){
return cljs.core.map_QMARK_(G__55687);
}),(function (G__55687){
return cljs.core.contains_QMARK_(G__55687,new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576));
})], null),(function (G__55687){
return ((cljs.core.map_QMARK_(G__55687)) && (cljs.core.contains_QMARK_(G__55687,new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.graphql","ident-transform","com.wsscode.pathom.graphql/ident-transform",641409546)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.graphql.js.map
