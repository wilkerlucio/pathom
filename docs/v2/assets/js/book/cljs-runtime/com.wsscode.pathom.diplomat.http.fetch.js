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
com.wsscode.pathom.diplomat.http.fetch.build_headers = (function com$wsscode$pathom$diplomat$http$fetch$build_headers(p__48997){
var map__48998 = p__48997;
var map__48998__$1 = (((((!((map__48998 == null))))?(((((map__48998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48998):map__48998);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48998__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","headers","com.wsscode.pathom.diplomat.http/headers",-2102718913));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48998__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var base_headers = (function (){var G__49000 = null;
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49000,new cljs.core.Keyword(null,"content-type","content-type",-508222634),com.wsscode.pathom.diplomat.http.encode_type__GT_header(content_type));
} else {
return G__49000;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_headers,headers], 0));
});
com.wsscode.pathom.diplomat.http.fetch.build_body = (function com$wsscode$pathom$diplomat$http$fetch$build_body(p__49001){
var map__49002 = p__49001;
var map__49002__$1 = (((((!((map__49002 == null))))?(((((map__49002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49002):map__49002);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49002__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49002__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var G__49004 = content_type;
var G__49004__$1 = (((G__49004 instanceof cljs.core.Keyword))?G__49004.fqn:null);
switch (G__49004__$1) {
case "com.wsscode.pathom.diplomat.http/json":
return JSON.stringify(cljs.core.clj__GT_js(form_params));

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_params);

}
});
com.wsscode.pathom.diplomat.http.fetch.normalize_as = (function com$wsscode$pathom$diplomat$http$fetch$normalize_as(p__49011){
var map__49013 = p__49011;
var map__49013__$1 = (((((!((map__49013 == null))))?(((((map__49013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49013):map__49013);
var req = map__49013__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761));
var G__49018 = req;
if(cljs.core.truth_(as)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49018,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679),as], 0));
} else {
return G__49018;
}
});
com.wsscode.pathom.diplomat.http.fetch.build_request_map = (function com$wsscode$pathom$diplomat$http$fetch$build_request_map(p__49023){
var map__49025 = p__49023;
var map__49025__$1 = (((((!((map__49025 == null))))?(((((map__49025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49025):map__49025);
var req = map__49025__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var req__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var headers = com.wsscode.pathom.diplomat.http.fetch.build_headers(req__$1);
var G__49054 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),com.wsscode.pathom.diplomat.http.request_method(req__$1)], null);
var G__49054__$1 = (cljs.core.truth_(headers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49054,new cljs.core.Keyword(null,"headers","headers",-835030129),headers):G__49054);
if(cljs.core.truth_(form_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49054__$1,new cljs.core.Keyword(null,"body","body",-2049205669),com.wsscode.pathom.diplomat.http.fetch.build_body(req__$1));
} else {
return G__49054__$1;
}
});
com.wsscode.pathom.diplomat.http.fetch.request_async = (function com$wsscode$pathom$diplomat$http$fetch$request_async(p__49063){
var map__49064 = p__49063;
var map__49064__$1 = (((((!((map__49064 == null))))?(((((map__49064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49064):map__49064);
var req = map__49064__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49064__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981),req);
} else {
}
} else {
}

var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__49064,map__49064__$1,req,url){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__49064,map__49064__$1,req,url){
return (function (state_49197){
var state_val_49199 = (state_49197[(1)]);
if((state_val_49199 === (7))){
var inst_49114 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
if(cljs.core.truth_(inst_49114)){
var statearr_49208_49381 = state_49197__$1;
(statearr_49208_49381[(1)] = (11));

} else {
var statearr_49209_49382 = state_49197__$1;
(statearr_49209_49382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (20))){
var inst_49146 = (state_49197[(7)]);
var inst_49171 = (state_49197[(8)]);
var inst_49178 = [new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_49180 = [inst_49146];
var inst_49181 = cljs.core.PersistentHashMap.fromArrays(inst_49178,inst_49180);
var inst_49182 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49171,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_49181);
var state_49197__$1 = state_49197;
var statearr_49213_49384 = state_49197__$1;
(statearr_49213_49384[(2)] = inst_49182);

(statearr_49213_49384[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (1))){
var state_49197__$1 = state_49197;
var statearr_49214_49385 = state_49197__$1;
(statearr_49214_49385[(2)] = null);

(statearr_49214_49385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (4))){
var inst_49093 = (state_49197[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49197,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49093__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var inst_49098 = (inst_49093__$1 == null);
var inst_49099 = cljs.core.not(inst_49098);
var state_49197__$1 = (function (){var statearr_49219 = state_49197;
(statearr_49219[(9)] = inst_49093__$1);

return statearr_49219;
})();
if(inst_49099){
var statearr_49220_49389 = state_49197__$1;
(statearr_49220_49389[(1)] = (5));

} else {
var statearr_49224_49390 = state_49197__$1;
(statearr_49224_49390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (15))){
var inst_49146 = (state_49197[(7)]);
var inst_49151 = (state_49197[(10)]);
var inst_49167 = (state_49197[(2)]);
var inst_49168 = [inst_49146,inst_49167];
var inst_49169 = cljs.core.PersistentHashMap.fromArrays(inst_49151,inst_49168);
var inst_49171 = cljs.core.PersistentHashMap.EMPTY;
var inst_49172 = ((199) < inst_49146);
var inst_49173 = (inst_49146 < (300));
var inst_49174 = ((inst_49172) && (inst_49173));
var inst_49175 = cljs.core.not(inst_49174);
var state_49197__$1 = (function (){var statearr_49229 = state_49197;
(statearr_49229[(8)] = inst_49171);

(statearr_49229[(11)] = inst_49169);

return statearr_49229;
})();
if(inst_49175){
var statearr_49234_49393 = state_49197__$1;
(statearr_49234_49393[(1)] = (20));

} else {
var statearr_49236_49394 = state_49197__$1;
(statearr_49236_49394[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (21))){
var inst_49171 = (state_49197[(8)]);
var state_49197__$1 = state_49197;
var statearr_49238_49395 = state_49197__$1;
(statearr_49238_49395[(2)] = inst_49171);

(statearr_49238_49395[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (13))){
var inst_49119 = (state_49197[(2)]);
var inst_49121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49119,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679));
var inst_49122 = com.wsscode.pathom.diplomat.http.request_method(req);
var inst_49123 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172)];
var inst_49130 = cljs.core.name(inst_49122);
var inst_49131 = clojure.string.upper_case(inst_49130);
var inst_49132 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49131)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_49133 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),inst_49132,url,inst_49122];
var inst_49134 = cljs.core.PersistentHashMap.fromArrays(inst_49123,inst_49133);
var inst_49135 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(req,inst_49134);
var inst_49138 = com.wsscode.pathom.diplomat.http.fetch.build_request_map(req);
var inst_49139 = cljs.core.clj__GT_js(inst_49138);
var inst_49140 = fetch(url,inst_49139);
var inst_49141 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49140);
var state_49197__$1 = (function (){var statearr_49241 = state_49197;
(statearr_49241[(12)] = inst_49121);

(statearr_49241[(13)] = inst_49135);

return statearr_49241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49197__$1,(14),inst_49141);
} else {
if((state_val_49199 === (22))){
var inst_49169 = (state_49197[(11)]);
var inst_49135 = (state_49197[(13)]);
var inst_49185 = (state_49197[(2)]);
var inst_49186 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(req,inst_49135,inst_49185);
var state_49197__$1 = (function (){var statearr_49243 = state_49197;
(statearr_49243[(14)] = inst_49186);

return statearr_49243;
})();
var statearr_49244_49401 = state_49197__$1;
(statearr_49244_49401[(2)] = inst_49169);


cljs.core.async.impl.ioc_helpers.process_exception(state_49197__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (6))){
var state_49197__$1 = state_49197;
var statearr_49246_49402 = state_49197__$1;
(statearr_49246_49402[(2)] = false);

(statearr_49246_49402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (17))){
var inst_49155 = (state_49197[(2)]);
var inst_49156 = com.wsscode.common.async_cljs.consumer_pair(inst_49155);
var inst_49157 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49156,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49197__$1 = state_49197;
var statearr_49250_49404 = state_49197__$1;
(statearr_49250_49404[(2)] = inst_49157);

(statearr_49250_49404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (3))){
var inst_49086 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
var statearr_49251_49406 = state_49197__$1;
(statearr_49251_49406[(2)] = inst_49086);


cljs.core.async.impl.ioc_helpers.process_exception(state_49197__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (12))){
var inst_49093 = (state_49197[(9)]);
var state_49197__$1 = state_49197;
var statearr_49254_49409 = state_49197__$1;
(statearr_49254_49409[(2)] = inst_49093);

(statearr_49254_49409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (2))){
var inst_49188 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49197__$1,inst_49188);
} else {
if((state_val_49199 === (19))){
var inst_49163 = (state_49197[(2)]);
var inst_49164 = com.wsscode.common.async_cljs.consumer_pair(inst_49163);
var state_49197__$1 = state_49197;
var statearr_49259_49411 = state_49197__$1;
(statearr_49259_49411[(2)] = inst_49164);

(statearr_49259_49411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (11))){
var inst_49093 = (state_49197[(9)]);
var inst_49116 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49093);
var state_49197__$1 = state_49197;
var statearr_49262_49412 = state_49197__$1;
(statearr_49262_49412[(2)] = inst_49116);

(statearr_49262_49412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (9))){
var state_49197__$1 = state_49197;
var statearr_49264_49415 = state_49197__$1;
(statearr_49264_49415[(2)] = false);

(statearr_49264_49415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (5))){
var inst_49093 = (state_49197[(9)]);
var inst_49102 = inst_49093.cljs$lang$protocol_mask$partition0$;
var inst_49103 = (inst_49102 & (64));
var inst_49104 = inst_49093.cljs$core$ISeq$;
var inst_49105 = (cljs.core.PROTOCOL_SENTINEL === inst_49104);
var inst_49106 = ((inst_49103) || (inst_49105));
var state_49197__$1 = state_49197;
if(cljs.core.truth_(inst_49106)){
var statearr_49268_49417 = state_49197__$1;
(statearr_49268_49417[(1)] = (8));

} else {
var statearr_49269_49419 = state_49197__$1;
(statearr_49269_49419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (14))){
var inst_49121 = (state_49197[(12)]);
var inst_49144 = (state_49197[(15)]);
var inst_49143 = (state_49197[(2)]);
var inst_49144__$1 = com.wsscode.common.async_cljs.consumer_pair(inst_49143);
var inst_49146 = goog.object.get(inst_49144__$1,"status");
var inst_49151 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","status","com.wsscode.pathom.diplomat.http/status",-140686429),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955)];
var state_49197__$1 = (function (){var statearr_49275 = state_49197;
(statearr_49275[(15)] = inst_49144__$1);

(statearr_49275[(7)] = inst_49146);

(statearr_49275[(10)] = inst_49151);

return statearr_49275;
})();
var G__49277_49422 = inst_49121;
var G__49277_49423__$1 = (((G__49277_49422 instanceof cljs.core.Keyword))?G__49277_49422.fqn:null);
switch (G__49277_49423__$1) {
case "com.wsscode.pathom.diplomat.http/json":
var statearr_49278_49429 = state_49197__$1;
(statearr_49278_49429[(1)] = (16));


break;
default:
var statearr_49280_49430 = state_49197__$1;
(statearr_49280_49430[(1)] = (18));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (16))){
var inst_49144 = (state_49197[(15)]);
var inst_49152 = inst_49144.json();
var inst_49153 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49152);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49197__$1,(17),inst_49153);
} else {
if((state_val_49199 === (10))){
var inst_49111 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
var statearr_49287_49451 = state_49197__$1;
(statearr_49287_49451[(2)] = inst_49111);

(statearr_49287_49451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (18))){
var inst_49144 = (state_49197[(15)]);
var inst_49159 = inst_49144.text();
var inst_49160 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49159);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49197__$1,(19),inst_49160);
} else {
if((state_val_49199 === (8))){
var state_49197__$1 = state_49197;
var statearr_49288_49457 = state_49197__$1;
(statearr_49288_49457[(2)] = true);

(statearr_49288_49457[(1)] = (10));


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
});})(c__39003__auto__,map__49064,map__49064__$1,req,url))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__49064,map__49064__$1,req,url){
return (function() {
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto____0 = (function (){
var statearr_49293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49293[(0)] = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto__);

(statearr_49293[(1)] = (1));

return statearr_49293;
});
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto____1 = (function (state_49197){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_49197);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e49294){if((e49294 instanceof Object)){
var ex__38933__auto__ = e49294;
var statearr_49295_49464 = state_49197;
(statearr_49295_49464[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49466 = state_49197;
state_49197 = G__49466;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto__ = function(state_49197){
switch(arguments.length){
case 0:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto____1.call(this,state_49197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto____0;
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto____1;
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__49064,map__49064__$1,req,url))
})();
var state__39005__auto__ = (function (){var statearr_49323 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_49323[(6)] = c__39003__auto__);

return statearr_49323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__49064,map__49064__$1,req,url))
);

return c__39003__auto__;
});
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(com.wsscode.pathom.trace.trace_style(row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491).cljs$core$IFn$_invoke$arity$1(row))?"#ff8181":"#73abff")], null)),x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491)], null));
}));
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.diplomat.http.fetch","request-async","com.wsscode.pathom.diplomat.http.fetch/request-async",-1863098993,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.diplomat.http.fetch.js.map
