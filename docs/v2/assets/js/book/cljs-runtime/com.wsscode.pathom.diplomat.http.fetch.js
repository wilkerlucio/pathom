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
com.wsscode.pathom.diplomat.http.fetch.build_headers = (function com$wsscode$pathom$diplomat$http$fetch$build_headers(p__48938){
var map__48940 = p__48938;
var map__48940__$1 = (((((!((map__48940 == null))))?(((((map__48940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48940):map__48940);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48940__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","headers","com.wsscode.pathom.diplomat.http/headers",-2102718913));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48940__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var base_headers = (function (){var G__48945 = null;
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48945,new cljs.core.Keyword(null,"content-type","content-type",-508222634),com.wsscode.pathom.diplomat.http.encode_type__GT_header(content_type));
} else {
return G__48945;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_headers,headers], 0));
});
com.wsscode.pathom.diplomat.http.fetch.build_body = (function com$wsscode$pathom$diplomat$http$fetch$build_body(p__48953){
var map__48955 = p__48953;
var map__48955__$1 = (((((!((map__48955 == null))))?(((((map__48955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48955):map__48955);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48955__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48955__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var G__48959 = content_type;
var G__48959__$1 = (((G__48959 instanceof cljs.core.Keyword))?G__48959.fqn:null);
switch (G__48959__$1) {
case "com.wsscode.pathom.diplomat.http/json":
return JSON.stringify(cljs.core.clj__GT_js(form_params));

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_params);

}
});
com.wsscode.pathom.diplomat.http.fetch.normalize_as = (function com$wsscode$pathom$diplomat$http$fetch$normalize_as(p__48975){
var map__48976 = p__48975;
var map__48976__$1 = (((((!((map__48976 == null))))?(((((map__48976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48976):map__48976);
var req = map__48976__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48976__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761));
var G__48980 = req;
if(cljs.core.truth_(as)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__48980,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679),as], 0));
} else {
return G__48980;
}
});
com.wsscode.pathom.diplomat.http.fetch.build_request_map = (function com$wsscode$pathom$diplomat$http$fetch$build_request_map(p__48983){
var map__48984 = p__48983;
var map__48984__$1 = (((((!((map__48984 == null))))?(((((map__48984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48984):map__48984);
var req = map__48984__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48984__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var req__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var headers = com.wsscode.pathom.diplomat.http.fetch.build_headers(req__$1);
var G__48986 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),com.wsscode.pathom.diplomat.http.request_method(req__$1)], null);
var G__48986__$1 = (cljs.core.truth_(headers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48986,new cljs.core.Keyword(null,"headers","headers",-835030129),headers):G__48986);
if(cljs.core.truth_(form_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48986__$1,new cljs.core.Keyword(null,"body","body",-2049205669),com.wsscode.pathom.diplomat.http.fetch.build_body(req__$1));
} else {
return G__48986__$1;
}
});
com.wsscode.pathom.diplomat.http.fetch.request_async = (function com$wsscode$pathom$diplomat$http$fetch$request_async(p__48987){
var map__48988 = p__48987;
var map__48988__$1 = (((((!((map__48988 == null))))?(((((map__48988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48988):map__48988);
var req = map__48988__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48988__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981),req);
} else {
}
} else {
}

var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__48988,map__48988__$1,req,url){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__48988,map__48988__$1,req,url){
return (function (state_49178){
var state_val_49179 = (state_49178[(1)]);
if((state_val_49179 === (7))){
var inst_49119 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
if(cljs.core.truth_(inst_49119)){
var statearr_49180_49265 = state_49178__$1;
(statearr_49180_49265[(1)] = (11));

} else {
var statearr_49181_49266 = state_49178__$1;
(statearr_49181_49266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (20))){
var inst_49141 = (state_49178[(7)]);
var inst_49161 = (state_49178[(8)]);
var inst_49167 = [new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_49168 = [inst_49141];
var inst_49169 = cljs.core.PersistentHashMap.fromArrays(inst_49167,inst_49168);
var inst_49170 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49161,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_49169);
var state_49178__$1 = state_49178;
var statearr_49182_49272 = state_49178__$1;
(statearr_49182_49272[(2)] = inst_49170);

(statearr_49182_49272[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (1))){
var state_49178__$1 = state_49178;
var statearr_49183_49273 = state_49178__$1;
(statearr_49183_49273[(2)] = null);

(statearr_49183_49273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (4))){
var inst_49101 = (state_49178[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49178,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49101__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var inst_49104 = (inst_49101__$1 == null);
var inst_49105 = cljs.core.not(inst_49104);
var state_49178__$1 = (function (){var statearr_49184 = state_49178;
(statearr_49184[(9)] = inst_49101__$1);

return statearr_49184;
})();
if(inst_49105){
var statearr_49186_49275 = state_49178__$1;
(statearr_49186_49275[(1)] = (5));

} else {
var statearr_49187_49276 = state_49178__$1;
(statearr_49187_49276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (15))){
var inst_49141 = (state_49178[(7)]);
var inst_49142 = (state_49178[(10)]);
var inst_49157 = (state_49178[(2)]);
var inst_49158 = [inst_49141,inst_49157];
var inst_49159 = cljs.core.PersistentHashMap.fromArrays(inst_49142,inst_49158);
var inst_49161 = cljs.core.PersistentHashMap.EMPTY;
var inst_49162 = ((199) < inst_49141);
var inst_49163 = (inst_49141 < (300));
var inst_49164 = ((inst_49162) && (inst_49163));
var inst_49165 = cljs.core.not(inst_49164);
var state_49178__$1 = (function (){var statearr_49189 = state_49178;
(statearr_49189[(8)] = inst_49161);

(statearr_49189[(11)] = inst_49159);

return statearr_49189;
})();
if(inst_49165){
var statearr_49190_49277 = state_49178__$1;
(statearr_49190_49277[(1)] = (20));

} else {
var statearr_49191_49278 = state_49178__$1;
(statearr_49191_49278[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (21))){
var inst_49161 = (state_49178[(8)]);
var state_49178__$1 = state_49178;
var statearr_49192_49279 = state_49178__$1;
(statearr_49192_49279[(2)] = inst_49161);

(statearr_49192_49279[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (13))){
var inst_49124 = (state_49178[(2)]);
var inst_49125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49124,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679));
var inst_49126 = com.wsscode.pathom.diplomat.http.request_method(req);
var inst_49127 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172)];
var inst_49128 = cljs.core.name(inst_49126);
var inst_49129 = clojure.string.upper_case(inst_49128);
var inst_49130 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49129)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_49131 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),inst_49130,url,inst_49126];
var inst_49132 = cljs.core.PersistentHashMap.fromArrays(inst_49127,inst_49131);
var inst_49133 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(req,inst_49132);
var inst_49134 = com.wsscode.pathom.diplomat.http.fetch.build_request_map(req);
var inst_49135 = cljs.core.clj__GT_js(inst_49134);
var inst_49136 = fetch(url,inst_49135);
var inst_49137 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49136);
var state_49178__$1 = (function (){var statearr_49195 = state_49178;
(statearr_49195[(12)] = inst_49125);

(statearr_49195[(13)] = inst_49133);

return statearr_49195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49178__$1,(14),inst_49137);
} else {
if((state_val_49179 === (22))){
var inst_49159 = (state_49178[(11)]);
var inst_49133 = (state_49178[(13)]);
var inst_49173 = (state_49178[(2)]);
var inst_49174 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(req,inst_49133,inst_49173);
var state_49178__$1 = (function (){var statearr_49200 = state_49178;
(statearr_49200[(14)] = inst_49174);

return statearr_49200;
})();
var statearr_49201_49289 = state_49178__$1;
(statearr_49201_49289[(2)] = inst_49159);


cljs.core.async.impl.ioc_helpers.process_exception(state_49178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (6))){
var state_49178__$1 = state_49178;
var statearr_49202_49291 = state_49178__$1;
(statearr_49202_49291[(2)] = false);

(statearr_49202_49291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (17))){
var inst_49146 = (state_49178[(2)]);
var inst_49147 = com.wsscode.common.async_cljs.consumer_pair(inst_49146);
var inst_49148 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49147,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_49178__$1 = state_49178;
var statearr_49205_49293 = state_49178__$1;
(statearr_49205_49293[(2)] = inst_49148);

(statearr_49205_49293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (3))){
var inst_49096 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49206_49296 = state_49178__$1;
(statearr_49206_49296[(2)] = inst_49096);


cljs.core.async.impl.ioc_helpers.process_exception(state_49178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (12))){
var inst_49101 = (state_49178[(9)]);
var state_49178__$1 = state_49178;
var statearr_49207_49297 = state_49178__$1;
(statearr_49207_49297[(2)] = inst_49101);

(statearr_49207_49297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (2))){
var inst_49176 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49178__$1,inst_49176);
} else {
if((state_val_49179 === (19))){
var inst_49153 = (state_49178[(2)]);
var inst_49154 = com.wsscode.common.async_cljs.consumer_pair(inst_49153);
var state_49178__$1 = state_49178;
var statearr_49208_49303 = state_49178__$1;
(statearr_49208_49303[(2)] = inst_49154);

(statearr_49208_49303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (11))){
var inst_49101 = (state_49178[(9)]);
var inst_49121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49101);
var state_49178__$1 = state_49178;
var statearr_49209_49305 = state_49178__$1;
(statearr_49209_49305[(2)] = inst_49121);

(statearr_49209_49305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (9))){
var state_49178__$1 = state_49178;
var statearr_49210_49306 = state_49178__$1;
(statearr_49210_49306[(2)] = false);

(statearr_49210_49306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (5))){
var inst_49101 = (state_49178[(9)]);
var inst_49108 = inst_49101.cljs$lang$protocol_mask$partition0$;
var inst_49109 = (inst_49108 & (64));
var inst_49110 = inst_49101.cljs$core$ISeq$;
var inst_49111 = (cljs.core.PROTOCOL_SENTINEL === inst_49110);
var inst_49112 = ((inst_49109) || (inst_49111));
var state_49178__$1 = state_49178;
if(cljs.core.truth_(inst_49112)){
var statearr_49216_49308 = state_49178__$1;
(statearr_49216_49308[(1)] = (8));

} else {
var statearr_49217_49310 = state_49178__$1;
(statearr_49217_49310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (14))){
var inst_49125 = (state_49178[(12)]);
var inst_49140 = (state_49178[(15)]);
var inst_49139 = (state_49178[(2)]);
var inst_49140__$1 = com.wsscode.common.async_cljs.consumer_pair(inst_49139);
var inst_49141 = goog.object.get(inst_49140__$1,"status");
var inst_49142 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","status","com.wsscode.pathom.diplomat.http/status",-140686429),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955)];
var state_49178__$1 = (function (){var statearr_49223 = state_49178;
(statearr_49223[(7)] = inst_49141);

(statearr_49223[(10)] = inst_49142);

(statearr_49223[(15)] = inst_49140__$1);

return statearr_49223;
})();
var G__49224_49319 = inst_49125;
var G__49224_49320__$1 = (((G__49224_49319 instanceof cljs.core.Keyword))?G__49224_49319.fqn:null);
switch (G__49224_49320__$1) {
case "com.wsscode.pathom.diplomat.http/json":
var statearr_49225_49322 = state_49178__$1;
(statearr_49225_49322[(1)] = (16));


break;
default:
var statearr_49226_49323 = state_49178__$1;
(statearr_49226_49323[(1)] = (18));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (16))){
var inst_49140 = (state_49178[(15)]);
var inst_49143 = inst_49140.json();
var inst_49144 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49143);
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49178__$1,(17),inst_49144);
} else {
if((state_val_49179 === (10))){
var inst_49116 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49229_49324 = state_49178__$1;
(statearr_49229_49324[(2)] = inst_49116);

(statearr_49229_49324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (18))){
var inst_49140 = (state_49178[(15)]);
var inst_49150 = inst_49140.text();
var inst_49151 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49150);
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49178__$1,(19),inst_49151);
} else {
if((state_val_49179 === (8))){
var state_49178__$1 = state_49178;
var statearr_49231_49331 = state_49178__$1;
(statearr_49231_49331[(2)] = true);

(statearr_49231_49331[(1)] = (10));


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
});})(c__39084__auto__,map__48988,map__48988__$1,req,url))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__48988,map__48988__$1,req,url){
return (function() {
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto____0 = (function (){
var statearr_49232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49232[(0)] = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto__);

(statearr_49232[(1)] = (1));

return statearr_49232;
});
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto____1 = (function (state_49178){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_49178);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e49233){if((e49233 instanceof Object)){
var ex__38790__auto__ = e49233;
var statearr_49234_49332 = state_49178;
(statearr_49234_49332[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49333 = state_49178;
state_49178 = G__49333;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto__ = function(state_49178){
switch(arguments.length){
case 0:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto____1.call(this,state_49178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto____0;
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto____1;
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__48988,map__48988__$1,req,url))
})();
var state__39086__auto__ = (function (){var statearr_49235 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_49235[(6)] = c__39084__auto__);

return statearr_49235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__48988,map__48988__$1,req,url))
);

return c__39084__auto__;
});
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(com.wsscode.pathom.trace.trace_style(row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491).cljs$core$IFn$_invoke$arity$1(row))?"#ff8181":"#73abff")], null)),x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491)], null));
}));
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.diplomat.http.fetch","request-async","com.wsscode.pathom.diplomat.http.fetch/request-async",-1863098993,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.diplomat.http.fetch.js.map
