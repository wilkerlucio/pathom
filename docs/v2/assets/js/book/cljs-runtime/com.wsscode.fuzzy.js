goog.provide('com.wsscode.fuzzy');
goog.require('cljs.core');
goog.require('com.wsscode.fuzzyjs');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.fuzzy","sort?","com.wsscode.fuzzy/sort?",1163052809),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)], null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73538){
return cljs.core.map_QMARK_(G__73538);
}),(function (G__73538){
return cljs.core.contains_QMARK_(G__73538,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
})], null),(function (G__73538){
return ((cljs.core.map_QMARK_(G__73538)) && (cljs.core.contains_QMARK_(G__73538,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)))], null),null])),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__73536){
return cljs.core.coll_QMARK_(G__73536);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)], null)))], null),null));
/**
 * Matches ::search-input with ::string from map. When match is valid the map is
 *   augmented with the keys ::match? ::match-score and ::match-hl.
 * 
 *   ```clojure
 *   (fuzzy/match-one {::fuzzy/search-input "a"} {::fuzzy/string "abc"})
 *   ; => {::fuzzy/string      "abc"
 *   ;     ::fuzzy/match?      true
 *   ;     ::fuzzy/match-score 8
 *   ;     ::fuzzy/match-hl    "<b>a</b>bc"}
 *   ```
 */
com.wsscode.fuzzy.match_one = (function com$wsscode$fuzzy$match_one(p__73627,p__73628){
var map__73629 = p__73627;
var map__73629__$1 = (((((!((map__73629 == null))))?(((((map__73629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73629):map__73629);
var search_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73629__$1,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168));
var map__73630 = p__73628;
var map__73630__$1 = (((((!((map__73630 == null))))?(((((map__73630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73630):map__73630);
var opt = map__73630__$1;
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73630__$1,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
var vec__73641 = com.wsscode.fuzzyjs.fuzzy_match(search_input,string);
var match_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73641,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73641,(1),null);
var hl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73641,(2),null);
if(cljs.core.truth_(match_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opt,new cljs.core.Keyword("com.wsscode.fuzzy","match?","com.wsscode.fuzzy/match?",1344922817),match_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.fuzzy","match-score","com.wsscode.fuzzy/match-score",-1700262252),score,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),hl], 0));
} else {
return null;
}
});
/**
 * Search for all matches of ::search-input in ::options. Options must be a collection
 *   of maps, the map key ::string will be used to make the lookup. By default the
 *   results will be sorted by score, use ::sort? false to keep original order.
 */
com.wsscode.fuzzy.fuzzy_match = (function com$wsscode$fuzzy$fuzzy_match(p__73653){
var map__73654 = p__73653;
var map__73654__$1 = (((((!((map__73654 == null))))?(((((map__73654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73654):map__73654);
var input = map__73654__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73654__$1,new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630));
var search_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73654__$1,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73654__$1,new cljs.core.Keyword("com.wsscode.fuzzy","sort?","com.wsscode.fuzzy/sort?",1163052809),true);
if(cljs.core.seq(search_input)){
var fuzzy = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.fuzzy.match_one,input);
var compare = ((function (fuzzy,map__73654,map__73654__$1,input,options,search_input,sort_QMARK_){
return (function (p1__73647_SHARP_,p2__73646_SHARP_){
return cljs.core.compare(p2__73646_SHARP_,p1__73647_SHARP_);
});})(fuzzy,map__73654,map__73654__$1,input,options,search_input,sort_QMARK_))
;
var _LT__GT_ = options;
var _LT__GT___$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fuzzy,_LT__GT_);
var G__73679 = _LT__GT___$1;
if(cljs.core.truth_(sort_QMARK_)){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.fuzzy","match-score","com.wsscode.fuzzy/match-score",-1700262252),compare,G__73679);
} else {
return G__73679;
}
} else {
return options;
}
});

//# sourceMappingURL=com.wsscode.fuzzy.js.map
