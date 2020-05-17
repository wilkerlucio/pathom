goog.provide('com.wsscode.pathom.book.intro.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.intro.demo.answer = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.intro.demo","answer","com.wsscode.pathom.book.intro.demo/answer",-669714390,null),(function (){var G__61414 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer-to-everything","answer-to-everything",-259077421)], null)], null);
return G__61414;

})(),(function com$wsscode$pathom$book$intro$demo$answer(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-to-everything","answer-to-everything",-259077421),(42)], null);
}));
com.wsscode.pathom.book.intro.demo.answer_plus_one = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.intro.demo","answer-plus-one","com.wsscode.pathom.book.intro.demo/answer-plus-one",-1856653972,null),(function (){var G__61431 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-to-everything","answer-to-everything",-259077421),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer-plus-one","answer-plus-one",-1375938733)], null)], null);
return G__61431;

})(),(function com$wsscode$pathom$book$intro$demo$answer_plus_one(_,p__61433){
var map__61434 = p__61433;
var map__61434__$1 = (((((!((map__61434 == null))))?(((((map__61434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61434):map__61434);
var answer_to_everything = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"answer-to-everything","answer-to-everything",-259077421));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-plus-one","answer-plus-one",-1375938733),(answer_to_everything + (1))], null);
}));
com.wsscode.pathom.book.intro.demo.registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.intro.demo.answer,com.wsscode.pathom.book.intro.demo.answer_plus_one], null);
com.wsscode.pathom.book.intro.demo.parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.reader2,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.intro.demo.registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.intro.demo.js.map
