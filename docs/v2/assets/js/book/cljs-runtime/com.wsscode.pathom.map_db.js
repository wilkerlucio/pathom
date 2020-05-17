goog.provide('com.wsscode.pathom.map_db');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.pathom.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.map-db","sort-by-expr","com.wsscode.pathom.map-db/sort-by-expr",-1565304297),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"direction","direction",-633359395),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.map-db","asc","com.wsscode.pathom.map-db/asc",-1054628948),"null",new cljs.core.Keyword("com.wsscode.pathom.map-db","desc","com.wsscode.pathom.map-db/desc",1189645421),"null"], null), null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.maybe_impl(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.map-db","asc","com.wsscode.pathom.map-db/asc",-1054628948),null,new cljs.core.Keyword("com.wsscode.pathom.map-db","desc","com.wsscode.pathom.map-db/desc",1189645421),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.map-db","asc","com.wsscode.pathom.map-db/asc",-1054628948),"null",new cljs.core.Keyword("com.wsscode.pathom.map-db","desc","com.wsscode.pathom.map-db/desc",1189645421),"null"], null), null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.map-db","asc","com.wsscode.pathom.map-db/asc",-1054628948),"null",new cljs.core.Keyword("com.wsscode.pathom.map-db","desc","com.wsscode.pathom.map-db/desc",1189645421),"null"], null), null))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.map-db","sort-by","com.wsscode.pathom.map-db/sort-by",920915454),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"single","single",1551466437),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"directed","directed",1150765886),new cljs.core.Keyword("com.wsscode.pathom.map-db","sort-by-expr","com.wsscode.pathom.map-db/sort-by-expr",-1565304297)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"single","single",1551466437),new cljs.core.Keyword(null,"directed","directed",1150765886)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.map-db","sort-by-expr","com.wsscode.pathom.map-db/sort-by-expr",-1565304297)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.map-db","sort-by-expr","com.wsscode.pathom.map-db/sort-by-expr",-1565304297)], null),null));
com.wsscode.pathom.map_db.map_db_ident_reader = (function com$wsscode$pathom$map_db$map_db_ident_reader(p__55369){
var map__55370 = p__55369;
var map__55370__$1 = (((((!((map__55370 == null))))?(((((map__55370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55370):map__55370);
var env = map__55370__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55370__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55370__$1,new cljs.core.Keyword("com.wsscode.pathom.map-db","refs","com.wsscode.pathom.map-db/refs",1197152641));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55370__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(com.wsscode.pathom.core.ident_QMARK_(k)){
var vec__55380 = k;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55380,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55380,(1),null);
var path_SINGLEQUOTE_ = path;
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),v))?cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),k):k));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(res,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),((function (res,temp__5720__auto__,vec__55380,_,v,path_SINGLEQUOTE_,k,map__55370,map__55370__$1,env,ast,refs,path){
return (function (p__55408){
var map__55412 = p__55408;
var map__55412__$1 = (((((!((map__55412 == null))))?(((((map__55412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55412):map__55412);
var path__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path_SINGLEQUOTE_),cljs.core.count(path__$1))){
return cljs.core.first(k);
} else {
return null;
}
});})(res,temp__5720__auto__,vec__55380,_,v,path_SINGLEQUOTE_,k,map__55370,map__55370__$1,env,ast,refs,path))
));
} else {
return null;
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.map_db.map_db_reader = (function com$wsscode$pathom$map_db$map_db_reader(p__55425){
var map__55426 = p__55425;
var map__55426__$1 = (((((!((map__55426 == null))))?(((((map__55426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55426):map__55426);
var env = map__55426__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55426__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55426__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55426__$1,new cljs.core.Keyword("com.wsscode.pathom.map-db","refs","com.wsscode.pathom.map-db/refs",1197152641));
var ident_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55426__$1,new cljs.core.Keyword("com.wsscode.pathom.map-db","ident-track","com.wsscode.pathom.map-db/ident-track",1923222506));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var and__4120__auto__ = cljs.core.map_QMARK_(entity);
if(and__4120__auto__){
return cljs.core.find(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var vec__55446 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55446,(1),null);
if(com.wsscode.pathom.core.ident_QMARK_(v)){
if(cljs.core.contains_QMARK_(ident_track,v)){
return v;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,v),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.constantly(cljs.core.first(v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.map-db","ident-track","com.wsscode.pathom.map-db/ident-track",1923222506),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = ident_track;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),v)], 0)));
}
} else {
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (vec__55446,_,v,temp__5718__auto__,entity,map__55426,map__55426__$1,env,ast,query,refs,ident_track){
return (function (p1__55419_SHARP_,p2__55421_SHARP_){
if(com.wsscode.pathom.core.ident_QMARK_(p1__55419_SHARP_)){
if(cljs.core.contains_QMARK_(ident_track,p1__55419_SHARP_)){
return p1__55419_SHARP_;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,p1__55419_SHARP_),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.map-db","ident-track","com.wsscode.pathom.map-db/ident-track",1923222506),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = ident_track;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.constantly(cljs.core.first(p1__55419_SHARP_))], 0)),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,p2__55421_SHARP_));
}
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(p1__55419_SHARP_,env);
}
});})(vec__55446,_,v,temp__5718__auto__,entity,map__55426,map__55426__$1,env,ast,query,refs,ident_track))
,v,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return query;
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(v,env);
} else {
return v;

}
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.map_db.readers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.map_db.map_db_ident_reader,com.wsscode.pathom.map_db.map_db_reader], null);
com.wsscode.pathom.map_db.direction_compare = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.map-db","asc","com.wsscode.pathom.map-db/asc",-1054628948),cljs.core.compare,new cljs.core.Keyword("com.wsscode.pathom.map-db","desc","com.wsscode.pathom.map-db/desc",1189645421),(function (p1__55471_SHARP_,p2__55469_SHARP_){
return cljs.core.compare(p2__55469_SHARP_,p1__55471_SHARP_);
})], null);
com.wsscode.pathom.map_db.sort_results = (function com$wsscode$pathom$map_db$sort_results(sort,items){
var c = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.map-db","sort-by","com.wsscode.pathom.map-db/sort-by",920915454),sort);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),c)){
return items;
} else {
var vec__55510 = c;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55510,(0),null);
var sort__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55510,(1),null);
return cljs.core.vec((function (){var G__55517 = type;
var G__55517__$1 = (((G__55517 instanceof cljs.core.Keyword))?G__55517.fqn:null);
switch (G__55517__$1) {
case "single":
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort__$1,items);

break;
case "directed":
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(sort__$1),(function (){var G__55525 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sort__$1);
return (com.wsscode.pathom.map_db.direction_compare.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.map_db.direction_compare.cljs$core$IFn$_invoke$arity$1(G__55525) : com.wsscode.pathom.map_db.direction_compare.call(null,G__55525));
})(),items);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55517__$1)].join('')));

}
})());
}
});
com.wsscode.pathom.map_db.sort_plugin = (function com$wsscode$pathom$map_db$sort_plugin(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),(function com$wsscode$pathom$map_db$sort_plugin_$_sorting_plugin_external(reader){
return (function com$wsscode$pathom$map_db$sort_plugin_$_sorting_plugin_external_$_sorting_plugin_internal(env){
var sort = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.wsscode.pathom.map-db","sort-by","com.wsscode.pathom.map-db/sort-by",920915454)], null));
var G__55551 = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(cljs.core.truth_(sort)){
return com.wsscode.pathom.map_db.sort_results(sort,G__55551);
} else {
return G__55551;
}
});
})], null);
});
com.wsscode.pathom.map_db.prepare_input = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function (parser){
return (function (p__55565,tx){
var map__55569 = p__55565;
var map__55569__$1 = (((((!((map__55569 == null))))?(((((map__55569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55569):map__55569);
var env = map__55569__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var env_SINGLEQUOTE_ = (function (){var G__55591 = env;
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__55591,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.deref(state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.map-db","refs","com.wsscode.pathom.map-db/refs",1197152641),cljs.core.deref(state)], 0));
} else {
return G__55591;
}
})();
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,tx) : parser.call(null,env_SINGLEQUOTE_,tx));
});
})], null);
com.wsscode.pathom.map_db.parser_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.map_db.readers,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),(function (_){
return null;
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.map_db.prepare_input,com.wsscode.pathom.core.post_process_parser_plugin(com.wsscode.pathom.core.elide_not_found)], null)], null);
com.wsscode.pathom.map_db.parser = com.wsscode.pathom.core.parser(com.wsscode.pathom.map_db.parser_config);
com.wsscode.pathom.map_db.db__GT_tree = (function com$wsscode$pathom$map_db$db__GT_tree(query,data,refs){
return com.wsscode.pathom.map_db.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),data,new cljs.core.Keyword("com.wsscode.pathom.map-db","refs","com.wsscode.pathom.map-db/refs",1197152641),refs], null),com.wsscode.pathom.core.remove_query_wildcard(query));
});

//# sourceMappingURL=com.wsscode.pathom.map_db.js.map
