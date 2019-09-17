goog.provide('com.wsscode.pathom.diplomat.http.fetch');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.diplomat.http');
goog.require('com.wsscode.pathom.misc');
goog.require('com.wsscode.pathom.trace');
goog.require('goog.object');
com.wsscode.pathom.diplomat.http.fetch.build_headers = (function com$wsscode$pathom$diplomat$http$fetch$build_headers(p__48859){
var map__48860 = p__48859;
var map__48860__$1 = (((((!((map__48860 == null))))?(((((map__48860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48860):map__48860);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","headers","com.wsscode.pathom.diplomat.http/headers",-2102718913));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var base_headers = (function (){var G__48864 = null;
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48864,new cljs.core.Keyword(null,"content-type","content-type",-508222634),com.wsscode.pathom.diplomat.http.encode_type__GT_header(content_type));
} else {
return G__48864;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_headers,headers], 0));
});
com.wsscode.pathom.diplomat.http.fetch.build_body = (function com$wsscode$pathom$diplomat$http$fetch$build_body(p__48879){
var map__48880 = p__48879;
var map__48880__$1 = (((((!((map__48880 == null))))?(((((map__48880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48880):map__48880);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48880__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48880__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var G__48890 = content_type;
var G__48890__$1 = (((G__48890 instanceof cljs.core.Keyword))?G__48890.fqn:null);
switch (G__48890__$1) {
case "com.wsscode.pathom.diplomat.http/json":
return JSON.stringify(cljs.core.clj__GT_js(form_params));

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_params);

}
});
com.wsscode.pathom.diplomat.http.fetch.normalize_as = (function com$wsscode$pathom$diplomat$http$fetch$normalize_as(p__48918){
var map__48919 = p__48918;
var map__48919__$1 = (((((!((map__48919 == null))))?(((((map__48919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48919):map__48919);
var req = map__48919__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761));
var G__48926 = req;
if(cljs.core.truth_(as)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__48926,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679),as], 0));
} else {
return G__48926;
}
});
com.wsscode.pathom.diplomat.http.fetch.build_request_map = (function com$wsscode$pathom$diplomat$http$fetch$build_request_map(p__48931){
var map__48935 = p__48931;
var map__48935__$1 = (((((!((map__48935 == null))))?(((((map__48935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48935):map__48935);
var req = map__48935__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48935__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var req__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var headers = com.wsscode.pathom.diplomat.http.fetch.build_headers(req__$1);
var G__48942 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),com.wsscode.pathom.diplomat.http.request_method(req__$1)], null);
var G__48942__$1 = (cljs.core.truth_(headers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48942,new cljs.core.Keyword(null,"headers","headers",-835030129),headers):G__48942);
if(cljs.core.truth_(form_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48942__$1,new cljs.core.Keyword(null,"body","body",-2049205669),com.wsscode.pathom.diplomat.http.fetch.build_body(req__$1));
} else {
return G__48942__$1;
}
});
com.wsscode.pathom.diplomat.http.fetch.request_async = (function com$wsscode$pathom$diplomat$http$fetch$request_async(p__48955){
var map__48956 = p__48955;
var map__48956__$1 = (((((!((map__48956 == null))))?(((((map__48956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48956):map__48956);
var req = map__48956__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48956__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981),req);
} else {
}
} else {
}

var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__48956,map__48956__$1,req,url){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__48956,map__48956__$1,req,url){
return (function (state_49075){
var state_val_49076 = (state_49075[(1)]);
if((state_val_49076 === (7))){
var inst_49011 = (state_49075[(2)]);
var state_49075__$1 = state_49075;
if(cljs.core.truth_(inst_49011)){
var statearr_49087_49251 = state_49075__$1;
(statearr_49087_49251[(1)] = (11));

} else {
var statearr_49097_49252 = state_49075__$1;
(statearr_49097_49252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (20))){
var inst_49034 = (state_49075[(7)]);
var inst_49057 = (state_49075[(8)]);
var inst_49064 = [new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_49065 = [inst_49034];
var inst_49066 = cljs.core.PersistentHashMap.fromArrays(inst_49064,inst_49065);
var inst_49067 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49057,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_49066);
var state_49075__$1 = state_49075;
var statearr_49101_49256 = state_49075__$1;
(statearr_49101_49256[(2)] = inst_49067);

(statearr_49101_49256[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (1))){
var state_49075__$1 = state_49075;
var statearr_49102_49258 = state_49075__$1;
(statearr_49102_49258[(2)] = null);

(statearr_49102_49258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (4))){
var inst_48992 = (state_49075[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49075,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48992__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var inst_48995 = (inst_48992__$1 == null);
var inst_48996 = cljs.core.not(inst_48995);
var state_49075__$1 = (function (){var statearr_49105 = state_49075;
(statearr_49105[(9)] = inst_48992__$1);

return statearr_49105;
})();
if(inst_48996){
var statearr_49108_49261 = state_49075__$1;
(statearr_49108_49261[(1)] = (5));

} else {
var statearr_49109_49263 = state_49075__$1;
(statearr_49109_49263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (15))){
var inst_49034 = (state_49075[(7)]);
var inst_49038 = (state_49075[(10)]);
var inst_49053 = (state_49075[(2)]);
var inst_49054 = [inst_49034,inst_49053];
var inst_49055 = cljs.core.PersistentHashMap.fromArrays(inst_49038,inst_49054);
var inst_49057 = cljs.core.PersistentHashMap.EMPTY;
var inst_49059 = ((199) < inst_49034);
var inst_49060 = (inst_49034 < (300));
var inst_49061 = ((inst_49059) && (inst_49060));
var inst_49062 = cljs.core.not(inst_49061);
var state_49075__$1 = (function (){var statearr_49113 = state_49075;
(statearr_49113[(8)] = inst_49057);

(statearr_49113[(11)] = inst_49055);

return statearr_49113;
})();
if(inst_49062){
var statearr_49115_49287 = state_49075__$1;
(statearr_49115_49287[(1)] = (20));

} else {
var statearr_49116_49288 = state_49075__$1;
(statearr_49116_49288[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (21))){
var inst_49057 = (state_49075[(8)]);
var state_49075__$1 = state_49075;
var statearr_49117_49289 = state_49075__$1;
(statearr_49117_49289[(2)] = inst_49057);

(statearr_49117_49289[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (13))){
var inst_49016 = (state_49075[(2)]);
var inst_49017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49016,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679));
var inst_49018 = com.wsscode.pathom.diplomat.http.request_method(req);
var inst_49019 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172)];
var inst_49020 = cljs.core.name(inst_49018);
var inst_49021 = clojure.string.upper_case(inst_49020);
var inst_49022 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49021)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_49023 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),inst_49022,url,inst_49018];
var inst_49024 = cljs.core.PersistentHashMap.fromArrays(inst_49019,inst_49023);
var inst_49025 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(req,inst_49024);
var inst_49027 = com.wsscode.pathom.diplomat.http.fetch.build_request_map(req);
var inst_49028 = cljs.core.clj__GT_js(inst_49027);
var inst_49029 = fetch(url,inst_49028);
var inst_49030 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49029);
var state_49075__$1 = (function (){var statearr_49122 = state_49075;
(statearr_49122[(12)] = inst_49025);

(statearr_49122[(13)] = inst_49017);

return statearr_49122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49075__$1,(14),inst_49030);
} else {
if((state_val_49076 === (22))){
var inst_49025 = (state_49075[(12)]);
var inst_49055 = (state_49075[(11)]);
var inst_49070 = (state_49075[(2)]);
var inst_49071 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(req,inst_49025,inst_49070);
var state_49075__$1 = (function (){var statearr_49125 = state_49075;
(statearr_49125[(14)] = inst_49071);

return statearr_49125;
})();
var statearr_49126_49297 = state_49075__$1;
(statearr_49126_49297[(2)] = inst_49055);


cljs.core.async.impl.ioc_helpers.process_exception(state_49075__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (6))){
var state_49075__$1 = state_49075;
var statearr_49128_49298 = state_49075__$1;
(statearr_49128_49298[(2)] = false);

(statearr_49128_49298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (17))){
var inst_49042 = (state_49075[(2)]);
var inst_49043 = com.wsscode.common.async_cljs.consumer_pair(inst_49042);
var inst_49044 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49043,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49075__$1 = state_49075;
var statearr_49135_49302 = state_49075__$1;
(statearr_49135_49302[(2)] = inst_49044);

(statearr_49135_49302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (3))){
var inst_48982 = (state_49075[(2)]);
var state_49075__$1 = state_49075;
var statearr_49137_49304 = state_49075__$1;
(statearr_49137_49304[(2)] = inst_48982);


cljs.core.async.impl.ioc_helpers.process_exception(state_49075__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (12))){
var inst_48992 = (state_49075[(9)]);
var state_49075__$1 = state_49075;
var statearr_49141_49306 = state_49075__$1;
(statearr_49141_49306[(2)] = inst_48992);

(statearr_49141_49306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (2))){
var inst_49073 = (state_49075[(2)]);
var state_49075__$1 = state_49075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49075__$1,inst_49073);
} else {
if((state_val_49076 === (19))){
var inst_49049 = (state_49075[(2)]);
var inst_49050 = com.wsscode.common.async_cljs.consumer_pair(inst_49049);
var state_49075__$1 = state_49075;
var statearr_49146_49312 = state_49075__$1;
(statearr_49146_49312[(2)] = inst_49050);

(statearr_49146_49312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (11))){
var inst_48992 = (state_49075[(9)]);
var inst_49013 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48992);
var state_49075__$1 = state_49075;
var statearr_49148_49315 = state_49075__$1;
(statearr_49148_49315[(2)] = inst_49013);

(statearr_49148_49315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (9))){
var state_49075__$1 = state_49075;
var statearr_49149_49318 = state_49075__$1;
(statearr_49149_49318[(2)] = false);

(statearr_49149_49318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (5))){
var inst_48992 = (state_49075[(9)]);
var inst_49000 = inst_48992.cljs$lang$protocol_mask$partition0$;
var inst_49001 = (inst_49000 & (64));
var inst_49002 = inst_48992.cljs$core$ISeq$;
var inst_49003 = (cljs.core.PROTOCOL_SENTINEL === inst_49002);
var inst_49004 = ((inst_49001) || (inst_49003));
var state_49075__$1 = state_49075;
if(cljs.core.truth_(inst_49004)){
var statearr_49152_49320 = state_49075__$1;
(statearr_49152_49320[(1)] = (8));

} else {
var statearr_49154_49321 = state_49075__$1;
(statearr_49154_49321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (14))){
var inst_49033 = (state_49075[(15)]);
var inst_49017 = (state_49075[(13)]);
var inst_49032 = (state_49075[(2)]);
var inst_49033__$1 = com.wsscode.common.async_cljs.consumer_pair(inst_49032);
var inst_49034 = goog.object.get(inst_49033__$1,"status");
var inst_49038 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","status","com.wsscode.pathom.diplomat.http/status",-140686429),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955)];
var state_49075__$1 = (function (){var statearr_49160 = state_49075;
(statearr_49160[(15)] = inst_49033__$1);

(statearr_49160[(7)] = inst_49034);

(statearr_49160[(10)] = inst_49038);

return statearr_49160;
})();
var G__49165_49322 = inst_49017;
var G__49165_49323__$1 = (((G__49165_49322 instanceof cljs.core.Keyword))?G__49165_49322.fqn:null);
switch (G__49165_49323__$1) {
case "com.wsscode.pathom.diplomat.http/json":
var statearr_49179_49325 = state_49075__$1;
(statearr_49179_49325[(1)] = (16));


break;
default:
var statearr_49181_49326 = state_49075__$1;
(statearr_49181_49326[(1)] = (18));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (16))){
var inst_49033 = (state_49075[(15)]);
var inst_49039 = inst_49033.json();
var inst_49040 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49039);
var state_49075__$1 = state_49075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49075__$1,(17),inst_49040);
} else {
if((state_val_49076 === (10))){
var inst_49008 = (state_49075[(2)]);
var state_49075__$1 = state_49075;
var statearr_49183_49330 = state_49075__$1;
(statearr_49183_49330[(2)] = inst_49008);

(statearr_49183_49330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49076 === (18))){
var inst_49033 = (state_49075[(15)]);
var inst_49046 = inst_49033.text();
var inst_49047 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49046);
var state_49075__$1 = state_49075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49075__$1,(19),inst_49047);
} else {
if((state_val_49076 === (8))){
var state_49075__$1 = state_49075;
var statearr_49185_49333 = state_49075__$1;
(statearr_49185_49333[(2)] = true);

(statearr_49185_49333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38971__auto__,map__48956,map__48956__$1,req,url))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__48956,map__48956__$1,req,url){
return (function() {
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto____0 = (function (){
var statearr_49191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49191[(0)] = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto__);

(statearr_49191[(1)] = (1));

return statearr_49191;
});
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto____1 = (function (state_49075){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_49075);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e49193){if((e49193 instanceof Object)){
var ex__38928__auto__ = e49193;
var statearr_49194_49336 = state_49075;
(statearr_49194_49336[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49339 = state_49075;
state_49075 = G__49339;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto__ = function(state_49075){
switch(arguments.length){
case 0:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto____1.call(this,state_49075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto____0;
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto____1;
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__48956,map__48956__$1,req,url))
})();
var state__38973__auto__ = (function (){var statearr_49199 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_49199[(6)] = c__38971__auto__);

return statearr_49199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__48956,map__48956__$1,req,url))
);

return c__38971__auto__;
});
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(com.wsscode.pathom.trace.trace_style(row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491).cljs$core$IFn$_invoke$arity$1(row))?"#ff8181":"#73abff")], null)),x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491)], null));
}));
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.diplomat.http.fetch","request-async","com.wsscode.pathom.diplomat.http.fetch/request-async",-1863098993,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.diplomat.http.fetch.js.map
