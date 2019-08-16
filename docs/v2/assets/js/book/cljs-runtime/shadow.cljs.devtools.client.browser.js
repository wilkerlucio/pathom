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
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63139 = arguments.length;
var i__4731__auto___63140 = (0);
while(true){
if((i__4731__auto___63140 < len__4730__auto___63139)){
args__4736__auto__.push((arguments[i__4731__auto___63140]));

var G__63143 = (i__4731__auto___63140 + (1));
i__4731__auto___63140 = G__63143;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq62147){
var G__62150 = cljs.core.first(seq62147);
var seq62147__$1 = cljs.core.next(seq62147);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62150,seq62147__$1);
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
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__62195){
var map__62196 = p__62195;
var map__62196__$1 = (((((!((map__62196 == null))))?(((((map__62196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62196):map__62196);
var src = map__62196__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62196__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62196__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__62205 = cljs.core.seq(sources);
var chunk__62206 = null;
var count__62207 = (0);
var i__62208 = (0);
while(true){
if((i__62208 < count__62207)){
var map__62239 = chunk__62206.cljs$core$IIndexed$_nth$arity$2(null,i__62208);
var map__62239__$1 = (((((!((map__62239 == null))))?(((((map__62239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62239):map__62239);
var src = map__62239__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62239__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62239__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62239__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62239__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__63168 = seq__62205;
var G__63169 = chunk__62206;
var G__63170 = count__62207;
var G__63171 = (i__62208 + (1));
seq__62205 = G__63168;
chunk__62206 = G__63169;
count__62207 = G__63170;
i__62208 = G__63171;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62205);
if(temp__5720__auto__){
var seq__62205__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62205__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62205__$1);
var G__63174 = cljs.core.chunk_rest(seq__62205__$1);
var G__63175 = c__4550__auto__;
var G__63176 = cljs.core.count(c__4550__auto__);
var G__63177 = (0);
seq__62205 = G__63174;
chunk__62206 = G__63175;
count__62207 = G__63176;
i__62208 = G__63177;
continue;
} else {
var map__62251 = cljs.core.first(seq__62205__$1);
var map__62251__$1 = (((((!((map__62251 == null))))?(((((map__62251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62251):map__62251);
var src = map__62251__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__63184 = cljs.core.next(seq__62205__$1);
var G__63185 = null;
var G__63186 = (0);
var G__63187 = (0);
seq__62205 = G__63184;
chunk__62206 = G__63185;
count__62207 = G__63186;
i__62208 = G__63187;
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
var seq__62268 = cljs.core.seq(js_requires);
var chunk__62269 = null;
var count__62270 = (0);
var i__62271 = (0);
while(true){
if((i__62271 < count__62270)){
var js_ns = chunk__62269.cljs$core$IIndexed$_nth$arity$2(null,i__62271);
var require_str_63195 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63195);


var G__63197 = seq__62268;
var G__63198 = chunk__62269;
var G__63199 = count__62270;
var G__63200 = (i__62271 + (1));
seq__62268 = G__63197;
chunk__62269 = G__63198;
count__62270 = G__63199;
i__62271 = G__63200;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62268);
if(temp__5720__auto__){
var seq__62268__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62268__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62268__$1);
var G__63203 = cljs.core.chunk_rest(seq__62268__$1);
var G__63204 = c__4550__auto__;
var G__63205 = cljs.core.count(c__4550__auto__);
var G__63206 = (0);
seq__62268 = G__63203;
chunk__62269 = G__63204;
count__62270 = G__63205;
i__62271 = G__63206;
continue;
} else {
var js_ns = cljs.core.first(seq__62268__$1);
var require_str_63208 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63208);


var G__63209 = cljs.core.next(seq__62268__$1);
var G__63210 = null;
var G__63211 = (0);
var G__63212 = (0);
seq__62268 = G__63209;
chunk__62269 = G__63210;
count__62270 = G__63211;
i__62271 = G__63212;
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
var G__62296 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__62296) : callback.call(null,G__62296));
} else {
var G__62297 = shadow.cljs.devtools.client.env.files_url();
var G__62298 = ((function (G__62297){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__62297))
;
var G__62299 = "POST";
var G__62300 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__62301 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__62297,G__62298,G__62299,G__62300,G__62301);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__62315){
var map__62316 = p__62315;
var map__62316__$1 = (((((!((map__62316 == null))))?(((((map__62316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62316):map__62316);
var msg = map__62316__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__62319 = info;
var map__62319__$1 = (((((!((map__62319 == null))))?(((((map__62319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62319):map__62319);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62322(s__62323){
return (new cljs.core.LazySeq(null,((function (map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info){
return (function (){
var s__62323__$1 = s__62323;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__62323__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__62331 = cljs.core.first(xs__6277__auto__);
var map__62331__$1 = (((((!((map__62331 == null))))?(((((map__62331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62331):map__62331);
var src = map__62331__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62331__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62331__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__62323__$1,map__62331,map__62331__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62322_$_iter__62324(s__62325){
return (new cljs.core.LazySeq(null,((function (s__62323__$1,map__62331,map__62331__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info){
return (function (){
var s__62325__$1 = s__62325;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__62325__$1);
if(temp__5720__auto____$1){
var s__62325__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62325__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62325__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62327 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62326 = (0);
while(true){
if((i__62326 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__62326);
cljs.core.chunk_append(b__62327,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63255 = (i__62326 + (1));
i__62326 = G__63255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62327),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62322_$_iter__62324(cljs.core.chunk_rest(s__62325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62327),null);
}
} else {
var warning = cljs.core.first(s__62325__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62322_$_iter__62324(cljs.core.rest(s__62325__$2)));
}
} else {
return null;
}
break;
}
});})(s__62323__$1,map__62331,map__62331__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info))
,null,null));
});})(s__62323__$1,map__62331,map__62331__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62322(cljs.core.rest(s__62323__$1)));
} else {
var G__63268 = cljs.core.rest(s__62323__$1);
s__62323__$1 = G__63268;
continue;
}
} else {
var G__63270 = cljs.core.rest(s__62323__$1);
s__62323__$1 = G__63270;
continue;
}
} else {
return null;
}
break;
}
});})(map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info))
,null,null));
});})(map__62319,map__62319__$1,sources,compiled,map__62316,map__62316__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__62343_63272 = cljs.core.seq(warnings);
var chunk__62344_63273 = null;
var count__62345_63274 = (0);
var i__62346_63275 = (0);
while(true){
if((i__62346_63275 < count__62345_63274)){
var map__62369_63276 = chunk__62344_63273.cljs$core$IIndexed$_nth$arity$2(null,i__62346_63275);
var map__62369_63277__$1 = (((((!((map__62369_63276 == null))))?(((((map__62369_63276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62369_63276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62369_63276):map__62369_63276);
var w_63278 = map__62369_63277__$1;
var msg_63279__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369_63277__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369_63277__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369_63277__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369_63277__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63282)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63280),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63281),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63279__$1)].join(''));


var G__63297 = seq__62343_63272;
var G__63298 = chunk__62344_63273;
var G__63299 = count__62345_63274;
var G__63300 = (i__62346_63275 + (1));
seq__62343_63272 = G__63297;
chunk__62344_63273 = G__63298;
count__62345_63274 = G__63299;
i__62346_63275 = G__63300;
continue;
} else {
var temp__5720__auto___63301 = cljs.core.seq(seq__62343_63272);
if(temp__5720__auto___63301){
var seq__62343_63303__$1 = temp__5720__auto___63301;
if(cljs.core.chunked_seq_QMARK_(seq__62343_63303__$1)){
var c__4550__auto___63304 = cljs.core.chunk_first(seq__62343_63303__$1);
var G__63305 = cljs.core.chunk_rest(seq__62343_63303__$1);
var G__63306 = c__4550__auto___63304;
var G__63307 = cljs.core.count(c__4550__auto___63304);
var G__63308 = (0);
seq__62343_63272 = G__63305;
chunk__62344_63273 = G__63306;
count__62345_63274 = G__63307;
i__62346_63275 = G__63308;
continue;
} else {
var map__62381_63309 = cljs.core.first(seq__62343_63303__$1);
var map__62381_63310__$1 = (((((!((map__62381_63309 == null))))?(((((map__62381_63309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62381_63309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62381_63309):map__62381_63309);
var w_63311 = map__62381_63310__$1;
var msg_63312__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381_63310__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381_63310__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381_63310__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381_63310__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63315)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63313),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63314),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63312__$1)].join(''));


var G__63328 = cljs.core.next(seq__62343_63303__$1);
var G__63329 = null;
var G__63330 = (0);
var G__63331 = (0);
seq__62343_63272 = G__63328;
chunk__62344_63273 = G__63329;
count__62345_63274 = G__63330;
i__62346_63275 = G__63331;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info){
return (function (p__62408){
var map__62410 = p__62408;
var map__62410__$1 = (((((!((map__62410 == null))))?(((((map__62410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62410):map__62410);
var src = map__62410__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62410__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62410__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info){
return (function (p__62450){
var map__62452 = p__62450;
var map__62452__$1 = (((((!((map__62452 == null))))?(((((map__62452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62452):map__62452);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62452__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info){
return (function (p__62482){
var map__62487 = p__62482;
var map__62487__$1 = (((((!((map__62487 == null))))?(((((map__62487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62487):map__62487);
var rc = map__62487__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info){
return (function (p1__62313_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__62313_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__62319,map__62319__$1,sources,compiled,warnings,map__62316,map__62316__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__62629){
var map__62630 = p__62629;
var map__62630__$1 = (((((!((map__62630 == null))))?(((((map__62630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62630):map__62630);
var msg = map__62630__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62630__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__62638 = cljs.core.seq(updates);
var chunk__62646 = null;
var count__62647 = (0);
var i__62648 = (0);
while(true){
if((i__62648 < count__62647)){
var path = chunk__62646.cljs$core$IIndexed$_nth$arity$2(null,i__62648);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62917_63386 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62920_63387 = null;
var count__62921_63388 = (0);
var i__62922_63389 = (0);
while(true){
if((i__62922_63389 < count__62921_63388)){
var node_63392 = chunk__62920_63387.cljs$core$IIndexed$_nth$arity$2(null,i__62922_63389);
var path_match_63393 = shadow.cljs.devtools.client.browser.match_paths(node_63392.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63393)){
var new_link_63395 = (function (){var G__62945 = node_63392.cloneNode(true);
G__62945.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63393),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62945;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63393], 0));

goog.dom.insertSiblingAfter(new_link_63395,node_63392);

goog.dom.removeNode(node_63392);


var G__63397 = seq__62917_63386;
var G__63398 = chunk__62920_63387;
var G__63399 = count__62921_63388;
var G__63400 = (i__62922_63389 + (1));
seq__62917_63386 = G__63397;
chunk__62920_63387 = G__63398;
count__62921_63388 = G__63399;
i__62922_63389 = G__63400;
continue;
} else {
var G__63403 = seq__62917_63386;
var G__63404 = chunk__62920_63387;
var G__63405 = count__62921_63388;
var G__63406 = (i__62922_63389 + (1));
seq__62917_63386 = G__63403;
chunk__62920_63387 = G__63404;
count__62921_63388 = G__63405;
i__62922_63389 = G__63406;
continue;
}
} else {
var temp__5720__auto___63408 = cljs.core.seq(seq__62917_63386);
if(temp__5720__auto___63408){
var seq__62917_63409__$1 = temp__5720__auto___63408;
if(cljs.core.chunked_seq_QMARK_(seq__62917_63409__$1)){
var c__4550__auto___63410 = cljs.core.chunk_first(seq__62917_63409__$1);
var G__63411 = cljs.core.chunk_rest(seq__62917_63409__$1);
var G__63412 = c__4550__auto___63410;
var G__63413 = cljs.core.count(c__4550__auto___63410);
var G__63414 = (0);
seq__62917_63386 = G__63411;
chunk__62920_63387 = G__63412;
count__62921_63388 = G__63413;
i__62922_63389 = G__63414;
continue;
} else {
var node_63416 = cljs.core.first(seq__62917_63409__$1);
var path_match_63417 = shadow.cljs.devtools.client.browser.match_paths(node_63416.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63417)){
var new_link_63419 = (function (){var G__62953 = node_63416.cloneNode(true);
G__62953.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63417),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62953;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63417], 0));

goog.dom.insertSiblingAfter(new_link_63419,node_63416);

goog.dom.removeNode(node_63416);


var G__63422 = cljs.core.next(seq__62917_63409__$1);
var G__63423 = null;
var G__63424 = (0);
var G__63425 = (0);
seq__62917_63386 = G__63422;
chunk__62920_63387 = G__63423;
count__62921_63388 = G__63424;
i__62922_63389 = G__63425;
continue;
} else {
var G__63430 = cljs.core.next(seq__62917_63409__$1);
var G__63431 = null;
var G__63432 = (0);
var G__63433 = (0);
seq__62917_63386 = G__63430;
chunk__62920_63387 = G__63431;
count__62921_63388 = G__63432;
i__62922_63389 = G__63433;
continue;
}
}
} else {
}
}
break;
}


var G__63434 = seq__62638;
var G__63435 = chunk__62646;
var G__63436 = count__62647;
var G__63437 = (i__62648 + (1));
seq__62638 = G__63434;
chunk__62646 = G__63435;
count__62647 = G__63436;
i__62648 = G__63437;
continue;
} else {
var G__63440 = seq__62638;
var G__63441 = chunk__62646;
var G__63442 = count__62647;
var G__63443 = (i__62648 + (1));
seq__62638 = G__63440;
chunk__62646 = G__63441;
count__62647 = G__63442;
i__62648 = G__63443;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62638);
if(temp__5720__auto__){
var seq__62638__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62638__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62638__$1);
var G__63445 = cljs.core.chunk_rest(seq__62638__$1);
var G__63446 = c__4550__auto__;
var G__63447 = cljs.core.count(c__4550__auto__);
var G__63448 = (0);
seq__62638 = G__63445;
chunk__62646 = G__63446;
count__62647 = G__63447;
i__62648 = G__63448;
continue;
} else {
var path = cljs.core.first(seq__62638__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62961_63450 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62964_63451 = null;
var count__62965_63452 = (0);
var i__62966_63453 = (0);
while(true){
if((i__62966_63453 < count__62965_63452)){
var node_63455 = chunk__62964_63451.cljs$core$IIndexed$_nth$arity$2(null,i__62966_63453);
var path_match_63456 = shadow.cljs.devtools.client.browser.match_paths(node_63455.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63456)){
var new_link_63460 = (function (){var G__62985 = node_63455.cloneNode(true);
G__62985.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63456),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62985;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63456], 0));

goog.dom.insertSiblingAfter(new_link_63460,node_63455);

goog.dom.removeNode(node_63455);


var G__63463 = seq__62961_63450;
var G__63464 = chunk__62964_63451;
var G__63465 = count__62965_63452;
var G__63466 = (i__62966_63453 + (1));
seq__62961_63450 = G__63463;
chunk__62964_63451 = G__63464;
count__62965_63452 = G__63465;
i__62966_63453 = G__63466;
continue;
} else {
var G__63469 = seq__62961_63450;
var G__63470 = chunk__62964_63451;
var G__63471 = count__62965_63452;
var G__63472 = (i__62966_63453 + (1));
seq__62961_63450 = G__63469;
chunk__62964_63451 = G__63470;
count__62965_63452 = G__63471;
i__62966_63453 = G__63472;
continue;
}
} else {
var temp__5720__auto___63474__$1 = cljs.core.seq(seq__62961_63450);
if(temp__5720__auto___63474__$1){
var seq__62961_63475__$1 = temp__5720__auto___63474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62961_63475__$1)){
var c__4550__auto___63476 = cljs.core.chunk_first(seq__62961_63475__$1);
var G__63477 = cljs.core.chunk_rest(seq__62961_63475__$1);
var G__63478 = c__4550__auto___63476;
var G__63479 = cljs.core.count(c__4550__auto___63476);
var G__63480 = (0);
seq__62961_63450 = G__63477;
chunk__62964_63451 = G__63478;
count__62965_63452 = G__63479;
i__62966_63453 = G__63480;
continue;
} else {
var node_63482 = cljs.core.first(seq__62961_63475__$1);
var path_match_63483 = shadow.cljs.devtools.client.browser.match_paths(node_63482.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63483)){
var new_link_63484 = (function (){var G__62992 = node_63482.cloneNode(true);
G__62992.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63483),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62992;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63483], 0));

goog.dom.insertSiblingAfter(new_link_63484,node_63482);

goog.dom.removeNode(node_63482);


var G__63486 = cljs.core.next(seq__62961_63475__$1);
var G__63487 = null;
var G__63488 = (0);
var G__63489 = (0);
seq__62961_63450 = G__63486;
chunk__62964_63451 = G__63487;
count__62965_63452 = G__63488;
i__62966_63453 = G__63489;
continue;
} else {
var G__63491 = cljs.core.next(seq__62961_63475__$1);
var G__63492 = null;
var G__63493 = (0);
var G__63494 = (0);
seq__62961_63450 = G__63491;
chunk__62964_63451 = G__63492;
count__62965_63452 = G__63493;
i__62966_63453 = G__63494;
continue;
}
}
} else {
}
}
break;
}


var G__63498 = cljs.core.next(seq__62638__$1);
var G__63500 = null;
var G__63501 = (0);
var G__63502 = (0);
seq__62638 = G__63498;
chunk__62646 = G__63500;
count__62647 = G__63501;
i__62648 = G__63502;
continue;
} else {
var G__63505 = cljs.core.next(seq__62638__$1);
var G__63506 = null;
var G__63507 = (0);
var G__63508 = (0);
seq__62638 = G__63505;
chunk__62646 = G__63506;
count__62647 = G__63507;
i__62648 = G__63508;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__63006){
var map__63007 = p__63006;
var map__63007__$1 = (((((!((map__63007 == null))))?(((((map__63007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63007):map__63007);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63007__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63007__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__63007,map__63007__$1,id,js){
return (function (){
return eval(js);
});})(map__63007,map__63007__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__63016){
var map__63017 = p__63016;
var map__63017__$1 = (((((!((map__63017 == null))))?(((((map__63017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63017):map__63017);
var msg = map__63017__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63017__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63017__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63017__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63017__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__63017,map__63017__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__63022){
var map__63025 = p__63022;
var map__63025__$1 = (((((!((map__63025 == null))))?(((((map__63025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63025):map__63025);
var src = map__63025__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63025__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__63017,map__63017__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__63017,map__63017__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__63017,map__63017__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__63040){
var map__63042 = p__63040;
var map__63042__$1 = (((((!((map__63042 == null))))?(((((map__63042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63042):map__63042);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63042__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63042__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__63042,map__63042__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__63042,map__63042__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__63049){
var map__63052 = p__63049;
var map__63052__$1 = (((((!((map__63052 == null))))?(((((map__63052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63052):map__63052);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63052__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63052__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__63064){
var map__63066 = p__63064;
var map__63066__$1 = (((((!((map__63066 == null))))?(((((map__63066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63066):map__63066);
var msg = map__63066__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63066__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__63076 = type;
var G__63076__$1 = (((G__63076 instanceof cljs.core.Keyword))?G__63076.fqn:null);
switch (G__63076__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__63091 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__63092 = ((function (G__63091){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__63091))
;
var G__63093 = "POST";
var G__63094 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__63095 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__63091,G__63092,G__63093,G__63094,G__63095);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
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

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e63111){var e = e63111;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___63589 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___63589)){
var s_63593 = temp__5720__auto___63589;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_63593.onclose = ((function (s_63593,temp__5720__auto___63589){
return (function (e){
return null;
});})(s_63593,temp__5720__auto___63589))
;

s_63593.close();

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
