goog.provide('ghostwheel.utils');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('orchestra_cljs.spec.test');
ghostwheel.utils.ghostwheel_default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ghostwheel.core","report-output","ghostwheel.core/report-output",-1945560991),new cljs.core.Keyword("ghostwheel.core","instrument","ghostwheel.core/instrument",-427699197),new cljs.core.Keyword("ghostwheel.core","extrument","ghostwheel.core/extrument",-1845043355),new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),new cljs.core.Keyword("ghostwheel.core","check-coverage","ghostwheel.core/check-coverage",195314921),new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),new cljs.core.Keyword("ghostwheel.core","trace","ghostwheel.core/trace",531995664),new cljs.core.Keyword("ghostwheel.core","trace-color","ghostwheel.core/trace-color",-2040710640),new cljs.core.Keyword("ghostwheel.core","expound","ghostwheel.core/expound",2100442996),new cljs.core.Keyword("ghostwheel.core","outstrument","ghostwheel.core/outstrument",-653830347),new cljs.core.Keyword("ghostwheel.core","num-tests-ext","ghostwheel.core/num-tests-ext",-1546795687),new cljs.core.Keyword("ghostwheel.core","extensive-tests","ghostwheel.core/extensive-tests",-1219157415),new cljs.core.Keyword("ghostwheel.core","ignore-fx","ghostwheel.core/ignore-fx",-1650876390),new cljs.core.Keyword("ghostwheel.core","defn-macro","ghostwheel.core/defn-macro",-493811684)],[new cljs.core.Keyword(null,"js-console","js-console",1240105791),false,null,false,false,(0),(0),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),true,new cljs.core.Keyword(null,"print-specs?","print-specs?",146397677),true], null),false,(100),false,false,null]);
ghostwheel.utils.cljs_env_QMARK_ = (function ghostwheel$utils$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
var _STAR_config_cache_85415 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.utils","timestamp","ghostwheel.utils/timestamp",-1150458516),(0),new cljs.core.Keyword("ghostwheel.utils","value","ghostwheel.utils/value",2111420378),null], null));
var read_config_file_85416 = ((function (_STAR_config_cache_85415){
return (function (){
return null;
});})(_STAR_config_cache_85415))
;
var reload_config_85417 = ((function (_STAR_config_cache_85415,read_config_file_85416){
return (function (){
var plain_config = (function (){var cljs_compiler_config = (cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?(function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"external-config","external-config",-471423941),new cljs.core.Keyword(null,"ghostwheel","ghostwheel",1311459564)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"ghostwheel","ghostwheel",1311459564)], null));
}
})():null);
if(cljs.core.truth_(cljs_compiler_config)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,read_config_file_85416(),cljs_compiler_config], 0));
} else {
return null;
}
})();
if(cljs.core.truth_(plain_config)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (plain_config,_STAR_config_cache_85415,read_config_file_85416){
return (function (p__85349){
var vec__85350 = p__85349;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85350,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("ghostwheel.core",cljs.core.name(k)),v], null);
});})(plain_config,_STAR_config_cache_85415,read_config_file_85416))
,plain_config));
} else {
return null;
}
});})(_STAR_config_cache_85415,read_config_file_85416))
;
ghostwheel.utils.get_env_config = ((function (_STAR_config_cache_85415,read_config_file_85416,reload_config_85417){
return (function ghostwheel$utils$get_env_config(var_args){
var G__85358 = arguments.length;
switch (G__85358) {
case 0:
return ghostwheel.utils.get_env_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ghostwheel.utils.get_env_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(_STAR_config_cache_85415,read_config_file_85416,reload_config_85417))
;

ghostwheel.utils.get_env_config.cljs$core$IFn$_invoke$arity$0 = ((function (_STAR_config_cache_85415,read_config_file_85416,reload_config_85417){
return (function (){
return ghostwheel.utils.get_env_config.cljs$core$IFn$_invoke$arity$1(true);
});})(_STAR_config_cache_85415,read_config_file_85416,reload_config_85417))
;

ghostwheel.utils.get_env_config.cljs$core$IFn$_invoke$arity$1 = ((function (_STAR_config_cache_85415,read_config_file_85416,reload_config_85417){
return (function (cache_QMARK_){
if(cljs.core.not(cache_QMARK_)){
return reload_config_85417();
} else {
var now = cljs.core.identity(Date.now());
if(((now - new cljs.core.Keyword("ghostwheel.utils","timestamp","ghostwheel.utils/timestamp",-1150458516).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_config_cache_85415))) < (2000))){
return new cljs.core.Keyword("ghostwheel.utils","value","ghostwheel.utils/value",2111420378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_config_cache_85415));
} else {
return new cljs.core.Keyword("ghostwheel.utils","value","ghostwheel.utils/value",2111420378).cljs$core$IFn$_invoke$arity$1(cljs.core.reset_BANG_(_STAR_config_cache_85415,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.utils","timestamp","ghostwheel.utils/timestamp",-1150458516),now,new cljs.core.Keyword("ghostwheel.utils","value","ghostwheel.utils/value",2111420378),reload_config_85417()], null)));
}
}
});})(_STAR_config_cache_85415,read_config_file_85416,reload_config_85417))
;

ghostwheel.utils.get_env_config.cljs$lang$maxFixedArity = 1;

ghostwheel.utils.get_base_config = (function ghostwheel$utils$get_base_config(var_args){
var G__85373 = arguments.length;
switch (G__85373) {
case 0:
return ghostwheel.utils.get_base_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ghostwheel.utils.get_base_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.utils.get_base_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.utils.get_base_config.cljs$core$IFn$_invoke$arity$1(true);
});

ghostwheel.utils.get_base_config.cljs$core$IFn$_invoke$arity$1 = (function (cache_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ghostwheel.utils.ghostwheel_default_config,ghostwheel.utils.get_env_config.cljs$core$IFn$_invoke$arity$1(cache_QMARK_)], 0));
});

ghostwheel.utils.get_base_config.cljs$lang$maxFixedArity = 1;

ghostwheel.utils.clj__GT_cljs = (function ghostwheel$utils$clj__GT_cljs(var_args){
var G__85384 = arguments.length;
switch (G__85384) {
case 1:
return ghostwheel.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$1 = (function (form){
return ghostwheel.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2(form,true);
});

ghostwheel.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2 = (function (form,strip_core_ns){
var ns_replacements = (function (){var G__85393 = new cljs.core.PersistentArrayMap(null, 6, ["clojure.core","cljs.core","clojure.test","cljs.test","clojure.spec.alpha","cljs.spec.alpha","clojure.spec.test.alpha","cljs.spec.test.alpha","orchestra.spec.test","orchestra-cljs.spec.test","clojure.spec.gen.alpha","cljs.spec.gen.alpha"], null);
if(cljs.core.truth_(strip_core_ns)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__85393,new cljs.core.PersistentArrayMap(null, 2, ["clojure.core",null,"cljs.core",null], null)], 0));
} else {
return G__85393;
}
})();
var replace_namespace = ((function (ns_replacements){
return (function (p1__85380_SHARP_){
if((!(cljs.core.qualified_symbol_QMARK_(p1__85380_SHARP_)))){
return p1__85380_SHARP_;
} else {
var nspace = cljs.core.namespace(p1__85380_SHARP_);
if(cljs.core.contains_QMARK_(ns_replacements,nspace)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns_replacements,nspace),cljs.core.name(p1__85380_SHARP_));
} else {
return p1__85380_SHARP_;
}
}
});})(ns_replacements))
;
return clojure.walk.postwalk(replace_namespace,form);
});

ghostwheel.utils.clj__GT_cljs.cljs$lang$maxFixedArity = 2;

ghostwheel.utils.gen_exception = (function ghostwheel$utils$gen_exception(env,msg){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,((ghostwheel.utils.cljs_env_QMARK_(env))?new cljs.core.Symbol("js","Error.","js/Error.",750655924,null):new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null)),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))))),null,(1),null)))));
});

//# sourceMappingURL=ghostwheel.utils.js.map
