goog.provide('fulcro.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.data_targeting');
goog.require('fulcro.util');
goog.require('fulcro.client.util');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('fulcro.logging');
goog.require('fulcro.history');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.impl.protocols');
goog.require('cljs.spec.alpha');

fulcro.client.impl.data_fetch.optional = (function fulcro$client$impl$data_fetch$optional(pred){
return cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,pred], null),null);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),cljs.core.list(new cljs.core.Symbol("fulcro.client.impl.data-fetch","optional","fulcro.client.impl.data-fetch/optional",-2141468527,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),fulcro.client.impl.data_fetch.optional(cljs.core.vector_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921),cljs.core.list(new cljs.core.Symbol("fulcro.client.impl.data-fetch","optional","fulcro.client.impl.data-fetch/optional",-2141468527,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),fulcro.client.impl.data_fetch.optional(cljs.core.keyword_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962),cljs.core.list(new cljs.core.Symbol("fulcro.client.impl.data-fetch","optional","fulcro.client.impl.data-fetch/optional",-2141468527,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),fulcro.client.impl.data_fetch.optional(cljs.core.symbol_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764),cljs.core.list(new cljs.core.Symbol("fulcro.client.impl.data-fetch","optional","fulcro.client.impl.data-fetch/optional",-2141468527,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),fulcro.client.impl.data_fetch.optional(cljs.core.map_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976),cljs.core.list(new cljs.core.Symbol("fulcro.client.impl.data-fetch","optional","fulcro.client.impl.data-fetch/optional",-2141468527,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),fulcro.client.impl.data_fetch.optional(cljs.core.vector_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Symbol("cljs.core","true?","cljs.core/true?",-77973136,null),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"nothing","nothing",-1022703296)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","true?","cljs.core/true?",-77973136,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.true_QMARK_,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"false","false",1277713805)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.false_QMARK_], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051),cljs.core.list(new cljs.core.Symbol("fulcro.client.impl.data-fetch","optional","fulcro.client.impl.data-fetch/optional",-2141468527,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),fulcro.client.impl.data_fetch.optional(cljs.core.boolean_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810),cljs.core.list(new cljs.core.Symbol("fulcro.client.impl.data-fetch","optional","fulcro.client.impl.data-fetch/optional",-2141468527,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),fulcro.client.impl.data_fetch.optional(cljs.core.symbol_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-marker","fulcro.client.impl.data-fetch/load-marker",1926035537),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962),new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976),new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046),new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051),new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58337){
return cljs.core.map_QMARK_(G__58337);
}),(function (G__58337){
return cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265));
}),(function (G__58337){
return cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240));
}),(function (G__58337){
return cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
}),(function (G__58337){
return cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884));
}),(function (G__58337){
return cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456));
})], null),(function (G__58337){
return ((cljs.core.map_QMARK_(G__58337)) && (cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265))) && (cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240))) && (cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758))) && (cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884))) && (cljs.core.contains_QMARK_(G__58337,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456))));
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962),new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976),new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046),new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051),new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962),new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976),new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046),new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051),new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)))], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962),new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976),new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046),new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051),new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-marker","fulcro.client.impl.data-fetch/load-marker",1926035537)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-marker","fulcro.client.impl.data-fetch/load-marker",1926035537),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-marker","fulcro.client.impl.data-fetch/load-marker",1926035537),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58448){
return cljs.core.coll_QMARK_(G__58448);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-marker","fulcro.client.impl.data-fetch/load-marker",1926035537))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58450){
return cljs.core.map_QMARK_(G__58450);
}),(function (G__58450){
return cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
}),(function (G__58450){
return cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
}),(function (G__58450){
return cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
}),(function (G__58450){
return cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564));
}),(function (G__58450){
return cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456));
})], null),(function (G__58450){
return ((cljs.core.map_QMARK_(G__58450)) && (cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758))) && (cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603))) && (cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629))) && (cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564))) && (cljs.core.contains_QMARK_(G__58450,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","network-error","fulcro.client.impl.data-fetch/network-error",721360552),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.impl.data-fetch","network-result","fulcro.client.impl.data-fetch/network-result",183682473),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),new cljs.core.Keyword("fulcro.client.impl.data-fetch","network-error","fulcro.client.impl.data-fetch/network-error",721360552)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58514){
return cljs.core.map_QMARK_(G__58514);
})], null),(function (G__58514){
return cljs.core.map_QMARK_(G__58514);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),new cljs.core.Keyword("fulcro.client.impl.data-fetch","network-error","fulcro.client.impl.data-fetch/network-error",721360552)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),new cljs.core.Keyword("fulcro.client.impl.data-fetch","network-error","fulcro.client.impl.data-fetch/network-error",721360552)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),new cljs.core.Keyword("fulcro.client.impl.data-fetch","network-error","fulcro.client.impl.data-fetch/network-error",721360552)], null)])));
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
fulcro.client.impl.data_fetch.data_target = (function fulcro$client$impl$data_fetch$data_target(state){
return new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
fulcro.client.impl.data_fetch.data_ident = (function fulcro$client$impl$data_fetch$data_ident(state){
return new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
fulcro.client.impl.data_fetch.data_query = (function fulcro$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_ident(state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.client.impl.data_fetch.data_ident(state),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758).cljs$core$IFn$_invoke$arity$1(state)])], null);
} else {
return new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758).cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
fulcro.client.impl.data_fetch.data_field = (function fulcro$client$impl$data_fetch$data_field(state){
return new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
fulcro.client.impl.data_fetch.data_uuid = (function fulcro$client$impl$data_fetch$data_uuid(state){
return new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Returns the ID of the data marker, or nil/false if there isn't one. True means to use the old marker behavior of
 *   replacing the data in app state with a marker (DEPRECATED)
 */
fulcro.client.impl.data_fetch.data_marker = (function fulcro$client$impl$data_fetch$data_marker(state){
return new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
fulcro.client.impl.data_fetch.data_marker_QMARK_ = (function fulcro$client$impl$data_fetch$data_marker_QMARK_(state){
return cljs.core.boolean$(new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
fulcro.client.impl.data_fetch.data_refresh = (function fulcro$client$impl$data_fetch$data_refresh(state){
return new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the remote that this marker is meant to talk to
 */
fulcro.client.impl.data_fetch.data_remote = (function fulcro$client$impl$data_fetch$data_remote(state){
return new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
fulcro.client.impl.data_fetch.data_query_key = (function fulcro$client$impl$data_fetch$data_query_key(state){
var ast = fulcro.client.primitives.query__GT_ast(new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758).cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
fulcro.client.impl.data_fetch.data_path = (function fulcro$client$impl$data_fetch$data_path(state){
var target = fulcro.client.impl.data_fetch.data_target(state);
if(cljs.core.truth_((function (){var and__4120__auto__ = (fulcro.client.impl.data_fetch.data_field(state) == null);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.vector_QMARK_(target);
if(and__4120__auto____$1){
return cljs.core.not_empty(target);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return target;
} else {
if(((cljs.core.vector_QMARK_(fulcro.client.impl.data_fetch.data_ident(state))) && ((fulcro.client.impl.data_fetch.data_field(state) instanceof cljs.core.Keyword)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_ident(state),fulcro.client.impl.data_fetch.data_field(state));
} else {
if(fulcro.util.ident_QMARK_(fulcro.client.impl.data_fetch.data_query_key(state))){
return fulcro.client.impl.data_fetch.data_query_key(state);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.data_query_key(state)], null);

}
}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
fulcro.client.impl.data_fetch.data_params = (function fulcro$client$impl$data_fetch$data_params(state){
return new cljs.core.Keyword("fulcro.client.impl.data-fetch","params","fulcro.client.impl.data-fetch/params",1865690070).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Composes together the queries of a sequence of data states into a single query.
 */
fulcro.client.impl.data_fetch.full_query = (function fulcro$client$impl$data_fetch$full_query(items){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (item){
return fulcro.client.impl.data_fetch.data_query(item);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
});
var set_type = (function fulcro$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),type,new cljs.core.Keyword("fulcro.client.impl.data-fetch","params","fulcro.client.impl.data-fetch/params",1865690070),params], null)], 0));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
fulcro.client.impl.data_fetch.set_ready_BANG_ = (function fulcro$client$impl$data_fetch$set_ready_BANG_(var_args){
var G__58551 = arguments.length;
switch (G__58551) {
case 1:
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,new cljs.core.Keyword(null,"ready","ready",1086465795),params);
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
fulcro.client.impl.data_fetch.set_loading_BANG_ = (function fulcro$client$impl$data_fetch$set_loading_BANG_(var_args){
var G__58559 = arguments.length;
switch (G__58559) {
case 1:
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type(state,new cljs.core.Keyword(null,"loading","loading",-737050189),params);
return cljs.core.with_meta(rv,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),rv], null));
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the error state
 */
fulcro.client.impl.data_fetch.set_failed_BANG_ = (function fulcro$client$impl$data_fetch$set_failed_BANG_(var_args){
var G__58578 = arguments.length;
switch (G__58578) {
case 1:
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,new cljs.core.Keyword(null,"failed","failed",-1397425762),params);
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Test if the given bit of state is a data fetch state-tracking marker
 */
fulcro.client.impl.data_fetch.data_state_QMARK_ = (function fulcro$client$impl$data_fetch$data_state_QMARK_(state){
return ((cljs.core.map_QMARK_(state)) && (cljs.core.contains_QMARK_(state,new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265))));
});
var is_kind_QMARK_ = (function fulcro$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(fulcro.client.impl.data_fetch.data_state_QMARK_(state)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265).cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
fulcro.client.impl.data_fetch.ready_QMARK_ = (function fulcro$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_(state,new cljs.core.Keyword(null,"ready","ready",1086465795));
});

/**
 * Test if the given item is a data state marker in the loading state
 */
fulcro.client.impl.data_fetch.loading_QMARK_ = (function fulcro$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_(state,new cljs.core.Keyword(null,"loading","loading",-737050189));
});

/**
 * Test if the given item is a data state marker in the failed state
 */
fulcro.client.impl.data_fetch.failed_QMARK_ = (function fulcro$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_(state,new cljs.core.Keyword(null,"failed","failed",-1397425762));
});
fulcro.client.impl.data_fetch.is_direct_table_load_QMARK_ = (function fulcro$client$impl$data_fetch$is_direct_table_load_QMARK_(load_marker){
return ((cljs.core.not(fulcro.client.impl.data_fetch.data_field(load_marker))) && (fulcro.util.ident_QMARK_(fulcro.client.impl.data_fetch.data_query_key(load_marker))));
});
fulcro.client.impl.data_fetch.marker_table = new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486);
fulcro.client.impl.data_fetch._place_load_marker = (function fulcro$client$impl$data_fetch$_place_load_marker(state_map,marker){
var marker_id = fulcro.client.impl.data_fetch.data_marker(marker);
var legacy_marker_QMARK_ = marker_id === true;
if(legacy_marker_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,fulcro.client.impl.data_fetch.data_path(marker),((function (marker_id,legacy_marker_QMARK_){
return (function (current_val){
if(fulcro.client.impl.data_fetch.is_direct_table_load_QMARK_(marker)){
if(cljs.core.map_QMARK_(current_val)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_val,new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),marker);
} else {
return null;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),marker], null);
}
});})(marker_id,legacy_marker_QMARK_))
);
} else {
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,marker_id], null),marker);
}
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
fulcro.client.impl.data_fetch._place_load_markers = (function fulcro$client$impl$data_fetch$_place_load_markers(state_map,items_to_load){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,item){
var i = fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(item);
var G__58651 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),fulcro.client.impl.data_fetch.data_uuid(i));
if(fulcro.client.impl.data_fetch.data_marker_QMARK_(i)){
return fulcro.client.impl.data_fetch._place_load_marker(G__58651,i);
} else {
return G__58651;
}
}),state_map,items_to_load);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.data-fetch","-place-load-markers","fulcro.client.impl.data-fetch/-place-load-markers",-1836596925,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
/**
 * Given a sequence of load markers, returns the history tx-time of the earliest one. Returns hist/max-tx-time if there
 *   are no markers or none have a time.
 */
fulcro.client.impl.data_fetch.earliest_load_time = (function fulcro$client$impl$data_fetch$earliest_load_time(load_markers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.min,fulcro.history.max_tx_time,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),load_markers));
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_ = (function fulcro$client$impl$data_fetch$mark_parallel_loading_BANG_(remote_name,reconciler){
var state = fulcro.client.primitives.app_state(reconciler);
var queued_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696));
var is_eligible_QMARK_ = ((function (state,queued_items){
return (function (item){
var and__4120__auto__ = new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote_name,fulcro.client.impl.data_fetch.data_remote(item));
} else {
return and__4120__auto__;
}
});})(state,queued_items))
;
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224))));
var items_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,queued_items);
var remaining_items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),queued_items);
var loading_QMARK_ = ((cljs.core.boolean$(cljs.core.seq(items_to_load))) || (other_items_loading_QMARK_));
var history_atom = fulcro.client.primitives.get_history(reconciler);
var ok = (fulcro.client.impl.data_fetch._loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch._loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch._loaded_callback.call(null,reconciler));
var error = (fulcro.client.impl.data_fetch._error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch._error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch._error_callback.call(null,reconciler));
var tx_time = fulcro.client.impl.data_fetch.earliest_load_time(items_to_load);
if(cljs.core.empty_QMARK_(items_to_load)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch._place_load_markers(s,items_to_load),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696),remaining_items], 0));
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time))
);

var iter__4523__auto__ = ((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time){
return (function fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__58670(s__58671){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time){
return (function (){
var s__58671__$1 = s__58671;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58671__$1);
if(temp__5720__auto__){
var s__58671__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58671__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58671__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58673 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58672 = (0);
while(true){
if((i__58672 < size__4522__auto__)){
var item = cljs.core._nth(c__4521__auto__,i__58672);
cljs.core.chunk_append(b__58673,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),fulcro.client.impl.data_fetch.full_query(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote_name,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history_atom,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),ok,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),error,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__59138 = (i__58672 + (1));
i__58672 = G__59138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58673),fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__58670(cljs.core.chunk_rest(s__58671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58673),null);
}
} else {
var item = cljs.core.first(s__58671__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),fulcro.client.impl.data_fetch.full_query(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote_name,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history_atom,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),ok,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),error,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__58670(cljs.core.rest(s__58671__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time))
,null,null));
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time))
;
return iter__4523__auto__(items_to_load);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.data-fetch","mark-parallel-loading!","fulcro.client.impl.data-fetch/mark-parallel-loading!",1842283092,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,fulcro.client.primitives.reconciler_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),null,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),null,null,null));
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
fulcro.client.impl.data_fetch.dedupe_by = (function fulcro$client$impl$data_fetch$dedupe_by(var_args){
var G__58683 = arguments.length;
switch (G__58683) {
case 1:
return fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__59150 = null;
var G__59150__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__59150__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__59150__2 = (function (result,input){
var input_keys = cljs.core.set((keys_fn.cljs$core$IFn$_invoke$arity$1 ? keys_fn.cljs$core$IFn$_invoke$arity$1(input) : keys_fn.call(null,input)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keys_seen),input_keys))){
keys_seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,clojure.set.union.cljs$core$IFn$_invoke$arity$2(keys_seen.cljs$core$IDeref$_deref$arity$1(null),input_keys));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__59150 = function(result,input){
switch(arguments.length){
case 0:
return G__59150__0.call(this);
case 1:
return G__59150__1.call(this,result);
case 2:
return G__59150__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59150.cljs$core$IFn$_invoke$arity$0 = G__59150__0;
G__59150.cljs$core$IFn$_invoke$arity$1 = G__59150__1;
G__59150.cljs$core$IFn$_invoke$arity$2 = G__59150__2;
return G__59150;
})()
;})(keys_seen))
});
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1(keys_fn),coll);
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;

/**
 * This function is used to split accidental colliding queries into separate network
 *   requests. The most general description of this issue is
 *   from two unrelated `load` calls when black-box composing functions. The two
 *   separate queries: One issues `[{:entitlements [:foo]}]`, and the other
 *   asks for `[{:entitlements [:bar]}]`. Fulcro merges these into a single query
 *   [{:entitlements [:foo]} {:entitlements [:bar]}]. However, the response to a query
 *   is a map, and such a query would result in the backend parser being called twice (once per key in the subquery)
 *   but one would stomp on the other.
 * 
 *   The other potential collision is if a load includes an abort ID. In this case such a load should not be batched
 *   with others because aborting it would take others down with it.
 * 
 *   Thus, this function ensures such accidental collisions are not combined into a single network request.
 * 
 *   This functions returns a list of the load items that can be batched (from the beginning, in order) and the
 *   remainder of the items which must be deferred to another request.
 */
fulcro.client.impl.data_fetch.split_items_ready_to_load = (function fulcro$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var item_keys = (function (item){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(fulcro.client.impl.data_fetch.data_query(item)))));
});
var abort_id_conflict_QMARK_ = ((function (item_keys){
return (function (items_going_QMARK_,active_abort_id,abort_id){
var and__4120__auto__ = items_going_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = (function (){var or__4131__auto__ = abort_id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return active_abort_id;
}
})();
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(active_abort_id,abort_id);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});})(item_keys))
;
var can_go_now_QMARK_ = ((function (item_keys,abort_id_conflict_QMARK_){
return (function (p__58699,item){
var map__58702 = p__58699;
var map__58702__$1 = (((((!((map__58702 == null))))?(((((map__58702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58702):map__58702);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var current_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"current-keys","current-keys",1533136521));
var current_abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"current-abort-id","current-abort-id",-1328568342));
var abort_id = new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267).cljs$core$IFn$_invoke$arity$1(item);
return ((cljs.core.not(abort_id_conflict_QMARK_(cljs.core.seq(items),current_abort_id,abort_id))) && (cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(current_keys,item_keys(item)))));
});})(item_keys,abort_id_conflict_QMARK_))
;
var map__58693 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item_keys,abort_id_conflict_QMARK_,can_go_now_QMARK_){
return (function (acc,item){
if(can_go_now_QMARK_(acc,item)){
var G__58709 = acc;
var G__58709__$1 = (cljs.core.truth_(new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58709,new cljs.core.Keyword(null,"current-abort-id","current-abort-id",-1328568342),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267).cljs$core$IFn$_invoke$arity$1(item)):G__58709);
var G__58709__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58709__$1,new cljs.core.Keyword(null,"current-keys","current-keys",1533136521),clojure.set.union,item_keys(item))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58709__$2,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,item);

} else {
return cljs.core.reduced(acc);
}
});})(item_keys,abort_id_conflict_QMARK_,can_go_now_QMARK_))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-keys","current-keys",1533136521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"current-abort-id","current-abort-id",-1328568342),null,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null),items_ready_to_load);
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var items_to_load_now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var items_to_defer = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items_to_load_now),items_ready_to_load));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_to_load_now,items_to_defer], null);
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
fulcro.client.impl.data_fetch.mark_loading = (function fulcro$client$impl$data_fetch$mark_loading(remote,reconciler){
var state = fulcro.client.primitives.app_state(reconciler);
var is_eligible_QMARK_ = ((function (state){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote,fulcro.client.impl.data_fetch.data_remote(item));
});})(state))
;
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696));
var items_ready_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,all_items);
var items_for_other_remotes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),all_items);
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224))));
var vec__58719 = fulcro.client.impl.data_fetch.split_items_ready_to_load(items_ready_to_load);
var items_to_load_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58719,(0),null);
var items_to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58719,(1),null);
var remaining_items = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(items_for_other_remotes,items_to_defer);
var loading_QMARK_ = ((cljs.core.boolean$(cljs.core.seq(items_to_load_now))) || (other_items_loading_QMARK_));
var tx_time = fulcro.client.impl.data_fetch.earliest_load_time(all_items);
if(cljs.core.empty_QMARK_(items_to_load_now)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,is_eligible_QMARK_,all_items,items_ready_to_load,items_for_other_remotes,other_items_loading_QMARK_,vec__58719,items_to_load_now,items_to_defer,remaining_items,loading_QMARK_,tx_time){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch._place_load_markers(s,items_to_load_now),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696),remaining_items], 0));
});})(state,is_eligible_QMARK_,all_items,items_ready_to_load,items_for_other_remotes,other_items_loading_QMARK_,vec__58719,items_to_load_now,items_to_defer,remaining_items,loading_QMARK_,tx_time))
);

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),fulcro.client.impl.data_fetch.full_query(items_to_load_now),new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),fulcro.client.primitives.get_history(reconciler),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),(fulcro.client.impl.data_fetch._loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch._loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch._loaded_callback.call(null,reconciler)),new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),(fulcro.client.impl.data_fetch._error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch._error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch._error_callback.call(null,reconciler)),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),items_to_load_now)),new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424),items_to_load_now], null);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.data-fetch","mark-loading","fulcro.client.impl.data-fetch/mark-loading",2035863225,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,fulcro.client.primitives.reconciler_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Symbol("fulcro.client.primitives","reconciler?","fulcro.client.primitives/reconciler?",-1575870606,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295),null,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295),null,null,null));
fulcro.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
fulcro.client.impl.data_fetch.make_data_state = (function fulcro$client$impl$data_fetch$make_data_state(var_args){
var G__58734 = arguments.length;
switch (G__58734) {
case 1:
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2(type,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),type,new cljs.core.Keyword("fulcro.client.impl.data-fetch","params","fulcro.client.impl.data-fetch/params",1865690070),params], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["INVALID DATA STATE TYPE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

fulcro.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;

/**
 * Remove items from a query (AST) that have a key that returns true for the elision-predicate
 */
fulcro.client.impl.data_fetch.elide_ast_nodes = (function fulcro$client$impl$data_fetch$elide_ast_nodes(p__58743,elision_predicate){
var map__58744 = p__58743;
var map__58744__$1 = (((((!((map__58744 == null))))?(((((map__58744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58744):map__58744);
var ast = map__58744__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(union_key) : elision_predicate.call(null,union_key));
if(cljs.core.truth_((function (){var or__4131__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(key) : elision_predicate.call(null,key));
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.count(children) <= (2));
} else {
return and__4120__auto__;
}
})())){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),356], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0))], 0));
}catch (e58751){if((e58751 instanceof Error)){
var e__48920__auto___59210 = e58751;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),356], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___59210], 0));
} else {
throw e58751;

}
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__58744,map__58744__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__58744,map__58744__$1,ast,key,union_key,children){
return (function (p1__58740_SHARP_){
return (fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__58740_SHARP_,elision_predicate) : fulcro.client.impl.data_fetch.elide_ast_nodes.call(null,p1__58740_SHARP_,elision_predicate));
});})(union_elision_QMARK_,map__58744,map__58744__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__58744,map__58744__$1,ast,key,union_key,children))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
fulcro.client.impl.data_fetch.inject_query_params = (function fulcro$client$impl$data_fetch$inject_query_params(ast,params){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(function (p1__58755_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__5718__auto__)){
var new_params = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(c,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,new_params);
} else {
return c;
}
}),p1__58755_SHARP_);
}));
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
fulcro.client.impl.data_fetch.ready_state = (function fulcro$client$impl$data_fetch$ready_state(p__58762){
var map__58764 = p__58762;
var map__58764__$1 = (((((!((map__58764 == null))))?(((((map__58764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58764):map__58764);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58764__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58764__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58764__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58764__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var initialize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"initialize","initialize",609952913));
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
if(cljs.core.truth_((function (){var or__4131__auto__ = field;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error(["Assert failed: ","You must supply a query or a field/ident pair","\n","(or field query)"].join('')));
}

if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not(field);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = field;
if(cljs.core.truth_(and__4120__auto__)){
return fulcro.util.ident_QMARK_(ident);
} else {
return and__4120__auto__;
}
}
})())){
} else {
throw (new Error(["Assert failed: ","Field requires ident","\n","(or (not field) (and field (util/ident? ident)))"].join('')));
}

var old_ast = fulcro.client.primitives.query__GT_ast(query);
var ast = (function (){var G__58786 = old_ast;
var G__58786__$1 = (cljs.core.truth_(cljs.core.not_empty(without))?fulcro.client.impl.data_fetch.elide_ast_nodes(G__58786,without):G__58786);
var G__58786__$2 = (cljs.core.truth_((function (){var and__4120__auto__ = field;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = params;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(cljs.core.contains_QMARK_(params,field)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?fulcro.client.impl.data_fetch.inject_query_params(G__58786__$1,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,params])):G__58786__$1);
if(cljs.core.truth_(params)){
return fulcro.client.impl.data_fetch.inject_query_params(G__58786__$2,params);
} else {
return G__58786__$2;
}
})();
var query_field = cljs.core.first(query);
var key = ((fulcro.util.join_QMARK_(query_field))?fulcro.util.join_key(query_field):query_field);
var query_SINGLEQUOTE_ = fulcro.client.primitives.ast__GT_query(ast);
if(((cljs.core.not(field)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,key)))){
} else {
throw (new Error(["Assert failed: ","Component fetch query does not match supplied field.","\n","(or (not field) (= field key))"].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fulcro.client.impl.data-fetch","initialize","fulcro.client.impl.data-fetch/initialize",-1870031324),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),new cljs.core.Keyword("fulcro.client.impl.data-fetch","uuid","fulcro.client.impl.data-fetch/uuid",1534451240),new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051),new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884),new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976),new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764),new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810),new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046),new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962),new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921)],[initialize,abort_id,(cljs.core.truth_((function (){var G__58791 = env;
if((G__58791 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__58791);
}
})())?fulcro.client.primitives.get_current_time(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(env)):fulcro.history.max_tx_time),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),parallel,target,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,env),ident,remote,query_SINGLEQUOTE_,refresh,new cljs.core.Keyword(null,"ready","ready",1086465795),post_mutation_params,fallback,marker,post_mutation,field]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load` and `load-field` functions in `fulcro.client.data-fetch` for the public API.
 */
fulcro.client.impl.data_fetch.mark_ready = (function fulcro$client$impl$data_fetch$mark_ready(p__58798){
var map__58800 = p__58798;
var map__58800__$1 = (((((!((map__58800 == null))))?(((((map__58800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58800):map__58800);
var config = map__58800__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58800__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"state","state",-1988618099));
var marker_QMARK_ = (!((false === new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(config))));
var load_request = fulcro.client.impl.data_fetch.ready_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"env","env",-1815813235),env], null),config], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,marker_QMARK_,load_request,map__58800,map__58800__$1,config,env){
return (function (s){
var G__58808 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),load_request);
if(marker_QMARK_){
return fulcro.client.impl.data_fetch._place_load_marker(G__58808,load_request);
} else {
return G__58808;
}
});})(state,marker_QMARK_,load_request,map__58800,map__58800__$1,config,env))
);
});
fulcro.client.impl.data_fetch._set_global_loading_BANG_ = (function fulcro$client$impl$data_fetch$_set_global_loading_BANG_(reconciler){

var state_atom = fulcro.client.primitives.app_state(reconciler);
var loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_);
});
fulcro.client.impl.data_fetch.replacement_target_QMARK_ = (function fulcro$client$impl$data_fetch$replacement_target_QMARK_(t){
return fulcro.client.impl.data_targeting.replacement_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.prepend_target_QMARK_ = (function fulcro$client$impl$data_fetch$prepend_target_QMARK_(t){
return fulcro.client.impl.data_targeting.prepend_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.append_target_QMARK_ = (function fulcro$client$impl$data_fetch$append_target_QMARK_(t){
return fulcro.client.impl.data_targeting.append_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.multiple_targets_QMARK_ = (function fulcro$client$impl$data_fetch$multiple_targets_QMARK_(t){
return fulcro.client.impl.data_targeting.multiple_targets_QMARK_(t);
});
fulcro.client.impl.data_fetch.special_target_QMARK_ = (function fulcro$client$impl$data_fetch$special_target_QMARK_(t){
return fulcro.client.impl.data_targeting.special_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.process_target = fulcro.client.impl.data_targeting.process_target;
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
fulcro.client.impl.data_fetch.relocate_targeted_results_BANG_ = (function fulcro$client$impl$data_fetch$relocate_targeted_results_BANG_(state_atom,items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,item){
var default_target = fulcro.client.impl.data_fetch.data_query_key(item);
var explicit_target = (function (){var or__4131__auto__ = fulcro.client.impl.data_fetch.data_target(item);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK_ = (function (){var and__4120__auto__ = (fulcro.client.impl.data_fetch.data_field(item) == null);
if(and__4120__auto__){
return cljs.core.not_empty(explicit_target);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK_)){
return (fulcro.client.impl.data_fetch.process_target.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.impl.data_fetch.process_target.cljs$core$IFn$_invoke$arity$3(state,default_target,explicit_target) : fulcro.client.impl.data_fetch.process_target.call(null,state,default_target,explicit_target));
} else {
return state;
}
}),state_map,items);
}));
});
/**
 * Returns app-state without the load marker for the given item.
 */
fulcro.client.impl.data_fetch._remove_marker = (function fulcro$client$impl$data_fetch$_remove_marker(app_state,item){
var marker_id = fulcro.client.impl.data_fetch.data_marker(item);
var legacy_marker_QMARK_ = marker_id === true;
if(legacy_marker_QMARK_){
var path = fulcro.client.impl.data_fetch.data_path(item);
var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,path);
if(((cljs.core.map_QMARK_(data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),null], null), null),cljs.core.set(cljs.core.keys(data)))))){
return cljs.core.assoc_in(app_state,path,null);
} else {
if(((cljs.core.map_QMARK_(data)) && (cljs.core.contains_QMARK_(data,new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927))))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,path,cljs.core.dissoc,new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927));
} else {
return cljs.core.assoc_in(app_state,path,null);

}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app_state,fulcro.client.impl.data_fetch.marker_table,cljs.core.dissoc,marker_id);
}
});
/**
 * Build a callback env for post mutations and fallbacks
 */
fulcro.client.impl.data_fetch.callback_env = (function fulcro$client$impl$data_fetch$callback_env(reconciler,load_request,original_env){
var state = fulcro.client.primitives.app_state(reconciler);
var map__58849 = load_request;
var map__58849__$1 = (((((!((map__58849 == null))))?(((((map__58849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58849):map__58849);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","parallel","fulcro.client.impl.data-fetch/parallel",1010707051));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748));
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","refresh","fulcro.client.impl.data-fetch/refresh",-12271976));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","marker","fulcro.client.impl.data-fetch/marker",392378046));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","field","fulcro.client.impl.data-fetch/field",-439885921));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([original_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"load-request","load-request",693664659),(function (){var G__58855 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"server-query","server-query",-191976706),query,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),cljs.core.boolean$(parallel)], null);
var G__58855__$1 = (cljs.core.truth_(post_mutation)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58855,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation):G__58855);
var G__58855__$2 = (cljs.core.truth_(post_mutation_params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58855__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),post_mutation_params):G__58855__$1);
var G__58855__$3 = (cljs.core.truth_(refresh)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58855__$2,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh):G__58855__$2);
if(cljs.core.truth_(fallback)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58855__$3,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback);
} else {
return G__58855__$3;
}
})()], null)], 0));
});
/**
 * Ability to mock in tests
 */
fulcro.client.impl.data_fetch._tick_BANG_ = (function fulcro$client$impl$data_fetch$_tick_BANG_(r){
return fulcro.client.impl.protocols.tick_BANG_(r);
});
/**
 * Generates a callback that processes all of the post-processing steps once a remote ***load*** has completed. This includes:
 * 
 *   - Marking the items that were queried for but not returned as 'missing' (see documentation on mark and sweep of db)
 *   - Refreshing elements of the UI that were included in the data fetch :refresh option
 *   - Removing loading markers related to the executed loads that were not overwritten by incoming data
 *   - Merging the incoming data into the normalized database
 *   - Running post-mutations for any fetches that completed
 *   - Updating the global loading marker
 *   - Triggering re-render for all data item refresh lists
 *   - Removing the activity from history tracking
 *   
 */
fulcro.client.impl.data_fetch._loaded_callback = (function fulcro$client$impl$data_fetch$_loaded_callback(reconciler){
return (function (response,items){
var query = fulcro.client.impl.data_fetch.full_query(items);
var base_merge = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (query){
return (function (initial_state,item){
var temp__5718__auto__ = new cljs.core.Keyword("fulcro.client.impl.data-fetch","initialize","fulcro.client.impl.data-fetch/initialize",-1870031324).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5718__auto__)){
var item_tree = temp__5718__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_state,item_tree], 0));
} else {
return initial_state;
}
});})(query))
,cljs.core.PersistentArrayMap.EMPTY,items);
var response__$1 = fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_merge,response], 0));
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),fulcro.client.impl.data_fetch.marker_table,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)]),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.data_refresh,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
var marked_response = fulcro.client.primitives.mark_missing(response__$1,query);
var explicit_refresh = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(refresh_set),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(marked_response));
var app_state = fulcro.client.primitives.app_state(reconciler);
var ran_mutations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var remove_markers_BANG_ = ((function (query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations){
return (function (){
var seq__58878 = cljs.core.seq(loading_items);
var chunk__58879 = null;
var count__58880 = (0);
var i__58881 = (0);
while(true){
if((i__58881 < count__58880)){
var item = chunk__58879.cljs$core$IIndexed$_nth$arity$2(null,i__58881);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__58878,chunk__58879,count__58880,i__58881,item,query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations){
return (function (s){
var G__58891 = s;
var G__58891__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58891,new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224),cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(fulcro.client.impl.data_fetch.data_marker_QMARK_(item)){
return fulcro.client.impl.data_fetch._remove_marker(G__58891__$1,item);
} else {
return G__58891__$1;
}
});})(seq__58878,chunk__58879,count__58880,i__58881,item,query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations))
);


var G__59273 = seq__58878;
var G__59274 = chunk__58879;
var G__59275 = count__58880;
var G__59276 = (i__58881 + (1));
seq__58878 = G__59273;
chunk__58879 = G__59274;
count__58880 = G__59275;
i__58881 = G__59276;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58878);
if(temp__5720__auto__){
var seq__58878__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58878__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58878__$1);
var G__59279 = cljs.core.chunk_rest(seq__58878__$1);
var G__59280 = c__4550__auto__;
var G__59281 = cljs.core.count(c__4550__auto__);
var G__59282 = (0);
seq__58878 = G__59279;
chunk__58879 = G__59280;
count__58880 = G__59281;
i__58881 = G__59282;
continue;
} else {
var item = cljs.core.first(seq__58878__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__58878,chunk__58879,count__58880,i__58881,item,seq__58878__$1,temp__5720__auto__,query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations){
return (function (s){
var G__58892 = s;
var G__58892__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58892,new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224),cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(fulcro.client.impl.data_fetch.data_marker_QMARK_(item)){
return fulcro.client.impl.data_fetch._remove_marker(G__58892__$1,item);
} else {
return G__58892__$1;
}
});})(seq__58878,chunk__58879,count__58880,i__58881,item,seq__58878__$1,temp__5720__auto__,query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations))
);


var G__59288 = cljs.core.next(seq__58878__$1);
var G__59289 = null;
var G__59290 = (0);
var G__59291 = (0);
seq__58878 = G__59288;
chunk__58879 = G__59289;
count__58880 = G__59290;
i__58881 = G__59291;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations))
;
var to_refresh = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.set(explicit_refresh));
var run_post_mutations_BANG_ = ((function (query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations,remove_markers_BANG_,to_refresh){
return (function (){
var seq__58899 = cljs.core.seq(loading_items);
var chunk__58900 = null;
var count__58901 = (0);
var i__58902 = (0);
while(true){
if((i__58902 < count__58901)){
var item = chunk__58900.cljs$core$IIndexed$_nth$arity$2(null,i__58902);
var temp__5720__auto___59294 = new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto___59294)){
var mutation_symbol_59296 = temp__5720__auto___59294;
cljs.core.reset_BANG_(ran_mutations,true);

var params_59297 = (function (){var or__4131__auto__ = new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_59298 = cljs.core.meta(new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884).cljs$core$IFn$_invoke$arity$1(item));
var map__58936_59299 = fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_59298),mutation_symbol_59296,params_59297);
var map__58936_59300__$1 = (((((!((map__58936_59299 == null))))?(((((map__58936_59299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58936_59299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58936_59299):map__58936_59299);
var action_59301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936_59300__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var refresh_59302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936_59300__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
if(cljs.core.seq(refresh_59302)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_refresh,cljs.core.into,refresh_59302);
} else {
}

if(cljs.core.truth_(action_59301)){
(action_59301.cljs$core$IFn$_invoke$arity$0 ? action_59301.cljs$core$IFn$_invoke$arity$0() : action_59301.call(null));
} else {
}
} else {
}


var G__59312 = seq__58899;
var G__59313 = chunk__58900;
var G__59314 = count__58901;
var G__59315 = (i__58902 + (1));
seq__58899 = G__59312;
chunk__58900 = G__59313;
count__58901 = G__59314;
i__58902 = G__59315;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58899);
if(temp__5720__auto__){
var seq__58899__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58899__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58899__$1);
var G__59316 = cljs.core.chunk_rest(seq__58899__$1);
var G__59317 = c__4550__auto__;
var G__59318 = cljs.core.count(c__4550__auto__);
var G__59319 = (0);
seq__58899 = G__59316;
chunk__58900 = G__59317;
count__58901 = G__59318;
i__58902 = G__59319;
continue;
} else {
var item = cljs.core.first(seq__58899__$1);
var temp__5720__auto___59320__$1 = new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation","fulcro.client.impl.data-fetch/post-mutation",-75376962).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto___59320__$1)){
var mutation_symbol_59321 = temp__5720__auto___59320__$1;
cljs.core.reset_BANG_(ran_mutations,true);

var params_59324 = (function (){var or__4131__auto__ = new cljs.core.Keyword("fulcro.client.impl.data-fetch","post-mutation-params","fulcro.client.impl.data-fetch/post-mutation-params",430524764).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_59325 = cljs.core.meta(new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884).cljs$core$IFn$_invoke$arity$1(item));
var map__58944_59326 = fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_59325),mutation_symbol_59321,params_59324);
var map__58944_59327__$1 = (((((!((map__58944_59326 == null))))?(((((map__58944_59326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58944_59326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58944_59326):map__58944_59326);
var action_59328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58944_59327__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var refresh_59329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58944_59327__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
if(cljs.core.seq(refresh_59329)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_refresh,cljs.core.into,refresh_59329);
} else {
}

if(cljs.core.truth_(action_59328)){
(action_59328.cljs$core$IFn$_invoke$arity$0 ? action_59328.cljs$core$IFn$_invoke$arity$0() : action_59328.call(null));
} else {
}
} else {
}


var G__59334 = cljs.core.next(seq__58899__$1);
var G__59335 = null;
var G__59336 = (0);
var G__59337 = (0);
seq__58899 = G__59334;
chunk__58900 = G__59335;
count__58901 = G__59336;
i__58902 = G__59337;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,base_merge,response__$1,loading_items,refresh_set,marked_response,explicit_refresh,app_state,ran_mutations,remove_markers_BANG_,to_refresh))
;
remove_markers_BANG_();

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,marked_response,query);

fulcro.client.impl.data_fetch.relocate_targeted_results_BANG_(app_state,loading_items);

run_post_mutations_BANG_();

fulcro.client.impl.data_fetch._set_global_loading_BANG_(reconciler);

fulcro.client.impl.data_fetch._tick_BANG_(reconciler);

if(cljs.core.contains_QMARK_(refresh_set,new cljs.core.Keyword("fulcro","force-root","fulcro/force-root",1965847682))){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
} else {
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$2(reconciler,cljs.core.vec(cljs.core.deref(to_refresh)));
}
});
});
/**
 * Generates a callback that is used whenever a hard server error occurs (status code 400+ or network error).
 * 
 *   The generated callback:
 * 
 *   - Replaces affected loading markers with error markers (if :marker is true on the load item)
 *   - Runs fallbacks associated with the loads
 *   - Sets the global error marker (:fulcro/server-error)
 *   - Refreshes UI (from root if there were fallbacks)
 *   
 */
fulcro.client.impl.data_fetch._error_callback = (function fulcro$client$impl$data_fetch$_error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = fulcro.client.primitives.app_state(reconciler);
var ran_fallbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mark_errors = ((function (loading_items,app_state,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,new cljs.core.Keyword("fulcro","server-error","fulcro/server-error",-1254037316),error);

var seq__58962 = cljs.core.seq(loading_items);
var chunk__58963 = null;
var count__58964 = (0);
var i__58965 = (0);
while(true){
if((i__58965 < count__58964)){
var item = chunk__58963.cljs$core$IIndexed$_nth$arity$2(null,i__58965);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__58962,chunk__58963,count__58964,i__58965,item,loading_items,app_state,ran_fallbacks){
return (function (s){
var G__58991 = s;
var G__58991__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(and__4120__auto__){
return fulcro.client.impl.data_fetch.data_marker(item);
} else {
return and__4120__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__58991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,fulcro.client.impl.data_fetch.data_marker(item)], null),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__58991);
var G__58991__$2 = ((((fulcro.client.impl.data_fetch.data_marker_QMARK_(item)) && ((true === fulcro.client.impl.data_fetch.data_marker(item)))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__58991__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__58991__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58991__$2,new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224),cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__58962,chunk__58963,count__58964,i__58965,item,loading_items,app_state,ran_fallbacks))
);


var G__59357 = seq__58962;
var G__59358 = chunk__58963;
var G__59359 = count__58964;
var G__59360 = (i__58965 + (1));
seq__58962 = G__59357;
chunk__58963 = G__59358;
count__58964 = G__59359;
i__58965 = G__59360;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58962);
if(temp__5720__auto__){
var seq__58962__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58962__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58962__$1);
var G__59361 = cljs.core.chunk_rest(seq__58962__$1);
var G__59362 = c__4550__auto__;
var G__59363 = cljs.core.count(c__4550__auto__);
var G__59364 = (0);
seq__58962 = G__59361;
chunk__58963 = G__59362;
count__58964 = G__59363;
i__58965 = G__59364;
continue;
} else {
var item = cljs.core.first(seq__58962__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__58962,chunk__58963,count__58964,i__58965,item,seq__58962__$1,temp__5720__auto__,loading_items,app_state,ran_fallbacks){
return (function (s){
var G__58996 = s;
var G__58996__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(and__4120__auto__){
return fulcro.client.impl.data_fetch.data_marker(item);
} else {
return and__4120__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__58996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,fulcro.client.impl.data_fetch.data_marker(item)], null),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__58996);
var G__58996__$2 = ((((fulcro.client.impl.data_fetch.data_marker_QMARK_(item)) && ((true === fulcro.client.impl.data_fetch.data_marker(item)))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__58996__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__58996__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58996__$2,new cljs.core.Keyword("fulcro","loads-in-progress","fulcro/loads-in-progress",-1196090224),cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__58962,chunk__58963,count__58964,i__58965,item,seq__58962__$1,temp__5720__auto__,loading_items,app_state,ran_fallbacks))
);


var G__59374 = cljs.core.next(seq__58962__$1);
var G__59375 = null;
var G__59376 = (0);
var G__59377 = (0);
seq__58962 = G__59374;
chunk__58963 = G__59375;
count__58964 = G__59376;
i__58965 = G__59377;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,ran_fallbacks,mark_errors){
return (function (){
var seq__58999 = cljs.core.seq(loading_items);
var chunk__59000 = null;
var count__59001 = (0);
var i__59002 = (0);
while(true){
if((i__59002 < count__59001)){
var item = chunk__59000.cljs$core$IIndexed$_nth$arity$2(null,i__59002);
var temp__5720__auto___59379 = new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto___59379)){
var fallback_symbol_59380 = temp__5720__auto___59379;
var original_env_59381 = cljs.core.meta(new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884).cljs$core$IFn$_invoke$arity$1(item));
var env_59382 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_59381);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__59008_59383 = fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env_59382,fallback_symbol_59380,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__59008_59384__$1 = (((G__59008_59383 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__59008_59383));
if((G__59008_59384__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__59008_59384__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}


var G__59390 = seq__58999;
var G__59391 = chunk__59000;
var G__59392 = count__59001;
var G__59393 = (i__59002 + (1));
seq__58999 = G__59390;
chunk__59000 = G__59391;
count__59001 = G__59392;
i__59002 = G__59393;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58999);
if(temp__5720__auto__){
var seq__58999__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58999__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58999__$1);
var G__59396 = cljs.core.chunk_rest(seq__58999__$1);
var G__59397 = c__4550__auto__;
var G__59398 = cljs.core.count(c__4550__auto__);
var G__59399 = (0);
seq__58999 = G__59396;
chunk__59000 = G__59397;
count__59001 = G__59398;
i__59002 = G__59399;
continue;
} else {
var item = cljs.core.first(seq__58999__$1);
var temp__5720__auto___59402__$1 = new cljs.core.Keyword("fulcro.client.impl.data-fetch","fallback","fulcro.client.impl.data-fetch/fallback",-644539810).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto___59402__$1)){
var fallback_symbol_59403 = temp__5720__auto___59402__$1;
var original_env_59404 = cljs.core.meta(new cljs.core.Keyword("fulcro.client.impl.data-fetch","original-env","fulcro.client.impl.data-fetch/original-env",1405563884).cljs$core$IFn$_invoke$arity$1(item));
var env_59405 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_59404);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__59011_59406 = fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env_59405,fallback_symbol_59403,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__59011_59407__$1 = (((G__59011_59406 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__59011_59406));
if((G__59011_59407__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__59011_59407__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}


var G__59412 = cljs.core.next(seq__58999__$1);
var G__59413 = null;
var G__59414 = (0);
var G__59415 = (0);
seq__58999 = G__59412;
chunk__59000 = G__59413;
count__59001 = G__59414;
i__59002 = G__59415;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,ran_fallbacks,mark_errors))
;
mark_errors();

run_fallbacks();

fulcro.client.impl.data_fetch._set_global_loading_BANG_(reconciler);

fulcro.client.impl.data_fetch._tick_BANG_(reconciler);

return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});
});
/**
 * Returns true if the outgoing query is just a placeholder indicator for a deferred transaction in the load queue.
 */
fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_ = (function fulcro$client$impl$data_fetch$is_deferred_transaction_QMARK_(query){
return cljs.core.boolean$((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.vector_QMARK_(query)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.impl.data-fetch","deferred-transaction","fulcro.client.impl.data-fetch/deferred-transaction",1662063962),cljs.core.first(query))));
} else {
return and__4120__auto__;
}
})());
});

//# sourceMappingURL=fulcro.client.impl.data_fetch.js.map
