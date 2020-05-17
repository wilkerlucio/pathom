goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68937 = arguments.length;
var i__4731__auto___68938 = (0);
while(true){
if((i__4731__auto___68938 < len__4730__auto___68937)){
args__4736__auto__.push((arguments[i__4731__auto___68938]));

var G__68943 = (i__4731__auto___68938 + (1));
i__4731__auto___68938 = G__68943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq68311){
var G__68312 = cljs.core.first(seq68311);
var seq68311__$1 = cljs.core.next(seq68311);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68312,seq68311__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__68341 = cljs.core.seq(sources);
var chunk__68342 = null;
var count__68343 = (0);
var i__68344 = (0);
while(true){
if((i__68344 < count__68343)){
var map__68402 = chunk__68342.cljs$core$IIndexed$_nth$arity$2(null,i__68344);
var map__68402__$1 = (((((!((map__68402 == null))))?(((((map__68402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68402):map__68402);
var src = map__68402__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68402__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68402__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68402__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68402__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e68404){var e_68997 = e68404;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68997);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68997.message)].join('')));
}

var G__68998 = seq__68341;
var G__68999 = chunk__68342;
var G__69000 = count__68343;
var G__69001 = (i__68344 + (1));
seq__68341 = G__68998;
chunk__68342 = G__68999;
count__68343 = G__69000;
i__68344 = G__69001;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68341);
if(temp__5720__auto__){
var seq__68341__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68341__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68341__$1);
var G__69002 = cljs.core.chunk_rest(seq__68341__$1);
var G__69003 = c__4550__auto__;
var G__69004 = cljs.core.count(c__4550__auto__);
var G__69005 = (0);
seq__68341 = G__69002;
chunk__68342 = G__69003;
count__68343 = G__69004;
i__68344 = G__69005;
continue;
} else {
var map__68412 = cljs.core.first(seq__68341__$1);
var map__68412__$1 = (((((!((map__68412 == null))))?(((((map__68412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68412):map__68412);
var src = map__68412__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e68420){var e_69011 = e68420;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_69011);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_69011.message)].join('')));
}

var G__69013 = cljs.core.next(seq__68341__$1);
var G__69014 = null;
var G__69015 = (0);
var G__69016 = (0);
seq__68341 = G__69013;
chunk__68342 = G__69014;
count__68343 = G__69015;
i__68344 = G__69016;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__68452 = cljs.core.seq(js_requires);
var chunk__68453 = null;
var count__68454 = (0);
var i__68455 = (0);
while(true){
if((i__68455 < count__68454)){
var js_ns = chunk__68453.cljs$core$IIndexed$_nth$arity$2(null,i__68455);
var require_str_69018 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_69018);


var G__69019 = seq__68452;
var G__69020 = chunk__68453;
var G__69021 = count__68454;
var G__69022 = (i__68455 + (1));
seq__68452 = G__69019;
chunk__68453 = G__69020;
count__68454 = G__69021;
i__68455 = G__69022;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68452);
if(temp__5720__auto__){
var seq__68452__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68452__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68452__$1);
var G__69028 = cljs.core.chunk_rest(seq__68452__$1);
var G__69029 = c__4550__auto__;
var G__69030 = cljs.core.count(c__4550__auto__);
var G__69031 = (0);
seq__68452 = G__69028;
chunk__68453 = G__69029;
count__68454 = G__69030;
i__68455 = G__69031;
continue;
} else {
var js_ns = cljs.core.first(seq__68452__$1);
var require_str_69035 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_69035);


var G__69040 = cljs.core.next(seq__68452__$1);
var G__69041 = null;
var G__69042 = (0);
var G__69043 = (0);
seq__68452 = G__69040;
chunk__68453 = G__69041;
count__68454 = G__69042;
i__68455 = G__69043;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__68480 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__68480) : callback.call(null,G__68480));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__68502){
var map__68504 = p__68502;
var map__68504__$1 = (((((!((map__68504 == null))))?(((((map__68504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68504):map__68504);
var msg = map__68504__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68504__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68504__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__68504,map__68504__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68513(s__68514){
return (new cljs.core.LazySeq(null,((function (map__68504,map__68504__$1,msg,info,reload_info){
return (function (){
var s__68514__$1 = s__68514;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__68514__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__68539 = cljs.core.first(xs__6277__auto__);
var map__68539__$1 = (((((!((map__68539 == null))))?(((((map__68539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68539):map__68539);
var src = map__68539__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68539__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68539__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__68514__$1,map__68539,map__68539__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68504,map__68504__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68513_$_iter__68515(s__68516){
return (new cljs.core.LazySeq(null,((function (s__68514__$1,map__68539,map__68539__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68504,map__68504__$1,msg,info,reload_info){
return (function (){
var s__68516__$1 = s__68516;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__68516__$1);
if(temp__5720__auto____$1){
var s__68516__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68516__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__68516__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__68518 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__68517 = (0);
while(true){
if((i__68517 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__68517);
cljs.core.chunk_append(b__68518,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__69093 = (i__68517 + (1));
i__68517 = G__69093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68518),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68513_$_iter__68515(cljs.core.chunk_rest(s__68516__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68518),null);
}
} else {
var warning = cljs.core.first(s__68516__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68513_$_iter__68515(cljs.core.rest(s__68516__$2)));
}
} else {
return null;
}
break;
}
});})(s__68514__$1,map__68539,map__68539__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68504,map__68504__$1,msg,info,reload_info))
,null,null));
});})(s__68514__$1,map__68539,map__68539__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68504,map__68504__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68513(cljs.core.rest(s__68514__$1)));
} else {
var G__69098 = cljs.core.rest(s__68514__$1);
s__68514__$1 = G__69098;
continue;
}
} else {
var G__69099 = cljs.core.rest(s__68514__$1);
s__68514__$1 = G__69099;
continue;
}
} else {
return null;
}
break;
}
});})(map__68504,map__68504__$1,msg,info,reload_info))
,null,null));
});})(map__68504,map__68504__$1,msg,info,reload_info))
;
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__68574_69103 = cljs.core.seq(warnings);
var chunk__68575_69104 = null;
var count__68576_69105 = (0);
var i__68577_69106 = (0);
while(true){
if((i__68577_69106 < count__68576_69105)){
var map__68606_69108 = chunk__68575_69104.cljs$core$IIndexed$_nth$arity$2(null,i__68577_69106);
var map__68606_69109__$1 = (((((!((map__68606_69108 == null))))?(((((map__68606_69108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68606_69108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68606_69108):map__68606_69108);
var w_69110 = map__68606_69109__$1;
var msg_69111__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606_69109__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_69112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606_69109__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_69113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606_69109__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_69114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606_69109__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_69114)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_69112),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_69113),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_69111__$1)].join(''));


var G__69124 = seq__68574_69103;
var G__69125 = chunk__68575_69104;
var G__69126 = count__68576_69105;
var G__69127 = (i__68577_69106 + (1));
seq__68574_69103 = G__69124;
chunk__68575_69104 = G__69125;
count__68576_69105 = G__69126;
i__68577_69106 = G__69127;
continue;
} else {
var temp__5720__auto___69130 = cljs.core.seq(seq__68574_69103);
if(temp__5720__auto___69130){
var seq__68574_69132__$1 = temp__5720__auto___69130;
if(cljs.core.chunked_seq_QMARK_(seq__68574_69132__$1)){
var c__4550__auto___69137 = cljs.core.chunk_first(seq__68574_69132__$1);
var G__69138 = cljs.core.chunk_rest(seq__68574_69132__$1);
var G__69139 = c__4550__auto___69137;
var G__69140 = cljs.core.count(c__4550__auto___69137);
var G__69141 = (0);
seq__68574_69103 = G__69138;
chunk__68575_69104 = G__69139;
count__68576_69105 = G__69140;
i__68577_69106 = G__69141;
continue;
} else {
var map__68616_69150 = cljs.core.first(seq__68574_69132__$1);
var map__68616_69151__$1 = (((((!((map__68616_69150 == null))))?(((((map__68616_69150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68616_69150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68616_69150):map__68616_69150);
var w_69152 = map__68616_69151__$1;
var msg_69153__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68616_69151__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_69154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68616_69151__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_69155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68616_69151__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_69156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68616_69151__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_69156)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_69154),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_69155),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_69153__$1)].join(''));


var G__69160 = cljs.core.next(seq__68574_69132__$1);
var G__69161 = null;
var G__69162 = (0);
var G__69163 = (0);
seq__68574_69103 = G__69160;
chunk__68575_69104 = G__69161;
count__68576_69105 = G__69162;
i__68577_69106 = G__69163;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,warnings,map__68504,map__68504__$1,msg,info,reload_info){
return (function (p1__68495_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__68495_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,warnings,map__68504,map__68504__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__68650){
var map__68651 = p__68650;
var map__68651__$1 = (((((!((map__68651 == null))))?(((((map__68651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68651):map__68651);
var msg = map__68651__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68651__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__68654 = cljs.core.seq(updates);
var chunk__68656 = null;
var count__68657 = (0);
var i__68658 = (0);
while(true){
if((i__68658 < count__68657)){
var path = chunk__68656.cljs$core$IIndexed$_nth$arity$2(null,i__68658);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68733_69189 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68736_69190 = null;
var count__68737_69191 = (0);
var i__68738_69192 = (0);
while(true){
if((i__68738_69192 < count__68737_69191)){
var node_69193 = chunk__68736_69190.cljs$core$IIndexed$_nth$arity$2(null,i__68738_69192);
var path_match_69194 = shadow.cljs.devtools.client.browser.match_paths(node_69193.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69194)){
var new_link_69195 = (function (){var G__68747 = node_69193.cloneNode(true);
G__68747.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69194),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68747;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69194], 0));

goog.dom.insertSiblingAfter(new_link_69195,node_69193);

goog.dom.removeNode(node_69193);


var G__69196 = seq__68733_69189;
var G__69197 = chunk__68736_69190;
var G__69198 = count__68737_69191;
var G__69199 = (i__68738_69192 + (1));
seq__68733_69189 = G__69196;
chunk__68736_69190 = G__69197;
count__68737_69191 = G__69198;
i__68738_69192 = G__69199;
continue;
} else {
var G__69200 = seq__68733_69189;
var G__69201 = chunk__68736_69190;
var G__69202 = count__68737_69191;
var G__69203 = (i__68738_69192 + (1));
seq__68733_69189 = G__69200;
chunk__68736_69190 = G__69201;
count__68737_69191 = G__69202;
i__68738_69192 = G__69203;
continue;
}
} else {
var temp__5720__auto___69204 = cljs.core.seq(seq__68733_69189);
if(temp__5720__auto___69204){
var seq__68733_69205__$1 = temp__5720__auto___69204;
if(cljs.core.chunked_seq_QMARK_(seq__68733_69205__$1)){
var c__4550__auto___69207 = cljs.core.chunk_first(seq__68733_69205__$1);
var G__69208 = cljs.core.chunk_rest(seq__68733_69205__$1);
var G__69209 = c__4550__auto___69207;
var G__69210 = cljs.core.count(c__4550__auto___69207);
var G__69211 = (0);
seq__68733_69189 = G__69208;
chunk__68736_69190 = G__69209;
count__68737_69191 = G__69210;
i__68738_69192 = G__69211;
continue;
} else {
var node_69213 = cljs.core.first(seq__68733_69205__$1);
var path_match_69217 = shadow.cljs.devtools.client.browser.match_paths(node_69213.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69217)){
var new_link_69219 = (function (){var G__68757 = node_69213.cloneNode(true);
G__68757.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69217),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68757;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69217], 0));

goog.dom.insertSiblingAfter(new_link_69219,node_69213);

goog.dom.removeNode(node_69213);


var G__69225 = cljs.core.next(seq__68733_69205__$1);
var G__69226 = null;
var G__69227 = (0);
var G__69228 = (0);
seq__68733_69189 = G__69225;
chunk__68736_69190 = G__69226;
count__68737_69191 = G__69227;
i__68738_69192 = G__69228;
continue;
} else {
var G__69229 = cljs.core.next(seq__68733_69205__$1);
var G__69230 = null;
var G__69231 = (0);
var G__69232 = (0);
seq__68733_69189 = G__69229;
chunk__68736_69190 = G__69230;
count__68737_69191 = G__69231;
i__68738_69192 = G__69232;
continue;
}
}
} else {
}
}
break;
}


var G__69233 = seq__68654;
var G__69234 = chunk__68656;
var G__69235 = count__68657;
var G__69236 = (i__68658 + (1));
seq__68654 = G__69233;
chunk__68656 = G__69234;
count__68657 = G__69235;
i__68658 = G__69236;
continue;
} else {
var G__69237 = seq__68654;
var G__69238 = chunk__68656;
var G__69239 = count__68657;
var G__69240 = (i__68658 + (1));
seq__68654 = G__69237;
chunk__68656 = G__69238;
count__68657 = G__69239;
i__68658 = G__69240;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68654);
if(temp__5720__auto__){
var seq__68654__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68654__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68654__$1);
var G__69242 = cljs.core.chunk_rest(seq__68654__$1);
var G__69243 = c__4550__auto__;
var G__69244 = cljs.core.count(c__4550__auto__);
var G__69245 = (0);
seq__68654 = G__69242;
chunk__68656 = G__69243;
count__68657 = G__69244;
i__68658 = G__69245;
continue;
} else {
var path = cljs.core.first(seq__68654__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68763_69248 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68766_69249 = null;
var count__68767_69250 = (0);
var i__68768_69251 = (0);
while(true){
if((i__68768_69251 < count__68767_69250)){
var node_69256 = chunk__68766_69249.cljs$core$IIndexed$_nth$arity$2(null,i__68768_69251);
var path_match_69257 = shadow.cljs.devtools.client.browser.match_paths(node_69256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69257)){
var new_link_69259 = (function (){var G__68783 = node_69256.cloneNode(true);
G__68783.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68783;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69257], 0));

goog.dom.insertSiblingAfter(new_link_69259,node_69256);

goog.dom.removeNode(node_69256);


var G__69261 = seq__68763_69248;
var G__69262 = chunk__68766_69249;
var G__69263 = count__68767_69250;
var G__69264 = (i__68768_69251 + (1));
seq__68763_69248 = G__69261;
chunk__68766_69249 = G__69262;
count__68767_69250 = G__69263;
i__68768_69251 = G__69264;
continue;
} else {
var G__69266 = seq__68763_69248;
var G__69267 = chunk__68766_69249;
var G__69268 = count__68767_69250;
var G__69269 = (i__68768_69251 + (1));
seq__68763_69248 = G__69266;
chunk__68766_69249 = G__69267;
count__68767_69250 = G__69268;
i__68768_69251 = G__69269;
continue;
}
} else {
var temp__5720__auto___69270__$1 = cljs.core.seq(seq__68763_69248);
if(temp__5720__auto___69270__$1){
var seq__68763_69271__$1 = temp__5720__auto___69270__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68763_69271__$1)){
var c__4550__auto___69274 = cljs.core.chunk_first(seq__68763_69271__$1);
var G__69275 = cljs.core.chunk_rest(seq__68763_69271__$1);
var G__69276 = c__4550__auto___69274;
var G__69277 = cljs.core.count(c__4550__auto___69274);
var G__69278 = (0);
seq__68763_69248 = G__69275;
chunk__68766_69249 = G__69276;
count__68767_69250 = G__69277;
i__68768_69251 = G__69278;
continue;
} else {
var node_69282 = cljs.core.first(seq__68763_69271__$1);
var path_match_69284 = shadow.cljs.devtools.client.browser.match_paths(node_69282.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69284)){
var new_link_69285 = (function (){var G__68785 = node_69282.cloneNode(true);
G__68785.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69284),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68785;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69284], 0));

goog.dom.insertSiblingAfter(new_link_69285,node_69282);

goog.dom.removeNode(node_69282);


var G__69287 = cljs.core.next(seq__68763_69271__$1);
var G__69288 = null;
var G__69289 = (0);
var G__69290 = (0);
seq__68763_69248 = G__69287;
chunk__68766_69249 = G__69288;
count__68767_69250 = G__69289;
i__68768_69251 = G__69290;
continue;
} else {
var G__69293 = cljs.core.next(seq__68763_69271__$1);
var G__69294 = null;
var G__69295 = (0);
var G__69296 = (0);
seq__68763_69248 = G__69293;
chunk__68766_69249 = G__69294;
count__68767_69250 = G__69295;
i__68768_69251 = G__69296;
continue;
}
}
} else {
}
}
break;
}


var G__69300 = cljs.core.next(seq__68654__$1);
var G__69301 = null;
var G__69302 = (0);
var G__69303 = (0);
seq__68654 = G__69300;
chunk__68656 = G__69301;
count__68657 = G__69302;
i__68658 = G__69303;
continue;
} else {
var G__69305 = cljs.core.next(seq__68654__$1);
var G__69306 = null;
var G__69307 = (0);
var G__69308 = (0);
seq__68654 = G__69305;
chunk__68656 = G__69306;
count__68657 = G__69307;
i__68658 = G__69308;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__68793){
var map__68795 = p__68793;
var map__68795__$1 = (((((!((map__68795 == null))))?(((((map__68795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68795):map__68795);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68795__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68795__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__68795,map__68795__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__68795,map__68795__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__68811,done){
var map__68812 = p__68811;
var map__68812__$1 = (((((!((map__68812 == null))))?(((((map__68812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68812):map__68812);
var msg = map__68812__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68812__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68812__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68812__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68812__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__68812,map__68812__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__68819){
var map__68820 = p__68819;
var map__68820__$1 = (((((!((map__68820 == null))))?(((((map__68820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68820):map__68820);
var src = map__68820__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68820__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__68812,map__68812__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__68812,map__68812__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e68824){var e = e68824;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__68812,map__68812__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__68827,done){
var map__68828 = p__68827;
var map__68828__$1 = (((((!((map__68828 == null))))?(((((map__68828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68828):map__68828);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68828__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68828__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__68828,map__68828__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__68828,map__68828__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__68836){
var map__68837 = p__68836;
var map__68837__$1 = (((((!((map__68837 == null))))?(((((map__68837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68837):map__68837);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68837__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68837__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__68848,done){
var map__68849 = p__68848;
var map__68849__$1 = (((((!((map__68849 == null))))?(((((map__68849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68849):map__68849);
var msg = map__68849__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68849__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__68855_69383 = type;
var G__68855_69384__$1 = (((G__68855_69383 instanceof cljs.core.Keyword))?G__68855_69383.fqn:null);
switch (G__68855_69384__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__68877 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__68877.cljs$core$IFn$_invoke$arity$1 ? fexpr__68877.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__68877.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e68884){var e = e68884;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___69441 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___69441)){
var s_69443 = temp__5720__auto___69441;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_69443.onclose = ((function (s_69443,temp__5720__auto___69441){
return (function (e){
return null;
});})(s_69443,temp__5720__auto___69441))
;

s_69443.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
