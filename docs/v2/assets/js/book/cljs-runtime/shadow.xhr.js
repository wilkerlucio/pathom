goog.provide('shadow.xhr');
goog.require('cljs.core');
goog.require('goog.result');
goog.require('goog.result.SimpleResult');
goog.require('goog.labs.net.xhr');
goog.require('cljs.reader');
goog.require('goog.uri.utils');
goog.require('goog.json');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('shadow.util');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56856 = arguments.length;
var i__4731__auto___56857 = (0);
while(true){
if((i__4731__auto___56857 < len__4730__auto___56856)){
args__4736__auto__.push((arguments[i__4731__auto___56857]));

var G__56858 = (i__4731__auto___56857 + (1));
i__4731__auto___56857 = G__56858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
});

shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq56656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56656));
});

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = ({});
var seq__56683_56870 = cljs.core.seq(options);
var chunk__56684_56871 = null;
var count__56685_56872 = (0);
var i__56686_56873 = (0);
while(true){
if((i__56686_56873 < count__56685_56872)){
var vec__56719_56874 = chunk__56684_56871.cljs$core$IIndexed$_nth$arity$2(null,i__56686_56873);
var k_56875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56719_56874,(0),null);
var v_56876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56719_56874,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_56875)] = cljs.core.clj__GT_js(v_56876));


var G__56881 = seq__56683_56870;
var G__56882 = chunk__56684_56871;
var G__56883 = count__56685_56872;
var G__56884 = (i__56686_56873 + (1));
seq__56683_56870 = G__56881;
chunk__56684_56871 = G__56882;
count__56685_56872 = G__56883;
i__56686_56873 = G__56884;
continue;
} else {
var temp__5720__auto___56885 = cljs.core.seq(seq__56683_56870);
if(temp__5720__auto___56885){
var seq__56683_56886__$1 = temp__5720__auto___56885;
if(cljs.core.chunked_seq_QMARK_(seq__56683_56886__$1)){
var c__4550__auto___56887 = cljs.core.chunk_first(seq__56683_56886__$1);
var G__56888 = cljs.core.chunk_rest(seq__56683_56886__$1);
var G__56889 = c__4550__auto___56887;
var G__56890 = cljs.core.count(c__4550__auto___56887);
var G__56891 = (0);
seq__56683_56870 = G__56888;
chunk__56684_56871 = G__56889;
count__56685_56872 = G__56890;
i__56686_56873 = G__56891;
continue;
} else {
var vec__56725_56892 = cljs.core.first(seq__56683_56886__$1);
var k_56893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56725_56892,(0),null);
var v_56894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56725_56892,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_56893)] = cljs.core.clj__GT_js(v_56894));


var G__56895 = cljs.core.next(seq__56683_56886__$1);
var G__56896 = null;
var G__56897 = (0);
var G__56898 = (0);
seq__56683_56870 = G__56895;
chunk__56684_56871 = G__56896;
count__56685_56872 = G__56897;
i__56686_56873 = G__56898;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__56736 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__56736) : transform_fn.call(null,G__56736));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
return goog.uri.utils.appendParamsFromMap(url,cljs.core.clj__GT_js(params));
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__56740 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56740,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56740,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if((!((events == null)))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__56758 = arguments.length;
switch (G__56758) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__56762){
var map__56763 = p__56762;
var map__56763__$1 = (((((!((map__56763 == null))))?(((((map__56763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56763):map__56763);
var options = map__56763__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__56765 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56765,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56765,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_((function (){var and__4120__auto__ = body_QMARK_;
if(and__4120__auto__){
return upload;
} else {
return and__4120__auto__;
}
})())){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return ((function (callback,req,body_QMARK_,vec__56765,content_type,body,result_chan,map__56763,map__56763__$1,options,events,upload,body_only){
return (function (e){
callback(e);

return cljs.core.async.close_BANG_(result_chan);
});
;})(callback,req,body_QMARK_,vec__56765,content_type,body,result_chan,map__56763,map__56763__$1,options,events,upload,body_only))
})());

var error_handler_56951 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_56951);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return ((function (callback,error_handler_56951,req,body_QMARK_,vec__56765,content_type,body,result_chan,map__56763,map__56763__$1,options,events,upload,body_only){
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5718__auto__)){
var transform = temp__5718__auto__;
var G__56774 = req.responseText;
var G__56775 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__56774,G__56775) : transform.call(null,G__56774,G__56775));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(shadow.xhr.request_error_QMARK_(status)){
return error_handler_56951(e);
} else {
callback(e);

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
;})(callback,error_handler_56951,req,body_QMARK_,vec__56765,content_type,body,result_chan,map__56763,map__56763__$1,options,events,upload,body_only))
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

req.responseType = "text";

req.withCredentials = (!(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false));

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
});

shadow.xhr.chan.cljs$lang$maxFixedArity = 4;

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__56781 = arguments.length;
switch (G__56781) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method)))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null)))));
var vec__56786 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56786,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56786,(1),null);
var req = goog.labs.net.xhr.send(cljs.core.name(method),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
if(and__4120__auto__){
return data;
} else {
return and__4120__auto__;
}
})())?shadow.xhr.make_url(url,data):url),((body_QMARK_)?body:null),shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options)));
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
});

shadow.xhr.request.cljs$lang$maxFixedArity = 4;

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56990 = arguments.length;
var i__4731__auto___56991 = (0);
while(true){
if((i__4731__auto___56991 < len__4730__auto___56990)){
args__4736__auto__.push((arguments[i__4731__auto___56991]));

var G__56999 = (i__4731__auto___56991 + (1));
i__4731__auto___56991 = G__56999;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__56796_57008 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__56798_57009 = null;
var count__56799_57010 = (0);
var i__56800_57011 = (0);
while(true){
if((i__56800_57011 < count__56799_57010)){
var vec__56820_57016 = chunk__56798_57009.cljs$core$IIndexed$_nth$arity$2(null,i__56800_57011);
var ev_id_57017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56820_57016,(0),null);
var ev_handler_57018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56820_57016,(1),null);
var target_57022 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_57017))?(xhr["upload"]):xhr);
target_57022.addEventListener(cljs.core.name(ev_id_57017),ev_handler_57018);


var G__57024 = seq__56796_57008;
var G__57025 = chunk__56798_57009;
var G__57026 = count__56799_57010;
var G__57027 = (i__56800_57011 + (1));
seq__56796_57008 = G__57024;
chunk__56798_57009 = G__57025;
count__56799_57010 = G__57026;
i__56800_57011 = G__57027;
continue;
} else {
var temp__5720__auto___57036 = cljs.core.seq(seq__56796_57008);
if(temp__5720__auto___57036){
var seq__56796_57037__$1 = temp__5720__auto___57036;
if(cljs.core.chunked_seq_QMARK_(seq__56796_57037__$1)){
var c__4550__auto___57038 = cljs.core.chunk_first(seq__56796_57037__$1);
var G__57039 = cljs.core.chunk_rest(seq__56796_57037__$1);
var G__57040 = c__4550__auto___57038;
var G__57041 = cljs.core.count(c__4550__auto___57038);
var G__57042 = (0);
seq__56796_57008 = G__57039;
chunk__56798_57009 = G__57040;
count__56799_57010 = G__57041;
i__56800_57011 = G__57042;
continue;
} else {
var vec__56848_57043 = cljs.core.first(seq__56796_57037__$1);
var ev_id_57044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56848_57043,(0),null);
var ev_handler_57045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56848_57043,(1),null);
var target_57046 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_57044))?(xhr["upload"]):xhr);
target_57046.addEventListener(cljs.core.name(ev_id_57044),ev_handler_57045);


var G__57048 = cljs.core.next(seq__56796_57037__$1);
var G__57049 = null;
var G__57050 = (0);
var G__57051 = (0);
seq__56796_57008 = G__57048;
chunk__56798_57009 = G__57049;
count__56799_57010 = G__57050;
i__56800_57011 = G__57051;
continue;
}
} else {
}
}
break;
}

var G__56853 = xhr;
G__56853.open("PUT",url);

G__56853.send(file);

return G__56853;
});

shadow.xhr.upload.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.xhr.upload.cljs$lang$applyTo = (function (seq56793){
var G__56794 = cljs.core.first(seq56793);
var seq56793__$1 = cljs.core.next(seq56793);
var G__56795 = cljs.core.first(seq56793__$1);
var seq56793__$2 = cljs.core.next(seq56793__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56794,G__56795,seq56793__$2);
});


//# sourceMappingURL=shadow.xhr.js.map
