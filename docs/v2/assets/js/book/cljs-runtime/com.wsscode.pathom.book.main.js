goog.provide('com.wsscode.pathom.book.main');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.book.async.demos');
goog.require('com.wsscode.pathom.book.interactive_parser');
goog.require('com.wsscode.pathom.book.index_explorer');
goog.require('com.wsscode.pathom.book.graphql.edn_converter');
goog.require('com.wsscode.pathom.book.graphql.fulcro_network.contacts');
goog.require('com.wsscode.pathom.book.graphql.app_types');
com.wsscode.pathom.book.main.main = (function com$wsscode$pathom$book$main$main(){
var seq__81888_81895 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("div[x-app]")));
var chunk__81890_81896 = null;
var count__81891_81897 = (0);
var i__81892_81898 = (0);
while(true){
if((i__81892_81898 < count__81891_81897)){
var node_81899 = chunk__81890_81896.cljs$core$IIndexed$_nth$arity$2(null,i__81892_81898);
var app_name_81900 = node_81899.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_81900,node_81899);


var G__81901 = seq__81888_81895;
var G__81902 = chunk__81890_81896;
var G__81903 = count__81891_81897;
var G__81904 = (i__81892_81898 + (1));
seq__81888_81895 = G__81901;
chunk__81890_81896 = G__81902;
count__81891_81897 = G__81903;
i__81892_81898 = G__81904;
continue;
} else {
var temp__5720__auto___81905 = cljs.core.seq(seq__81888_81895);
if(temp__5720__auto___81905){
var seq__81888_81906__$1 = temp__5720__auto___81905;
if(cljs.core.chunked_seq_QMARK_(seq__81888_81906__$1)){
var c__4550__auto___81907 = cljs.core.chunk_first(seq__81888_81906__$1);
var G__81908 = cljs.core.chunk_rest(seq__81888_81906__$1);
var G__81909 = c__4550__auto___81907;
var G__81910 = cljs.core.count(c__4550__auto___81907);
var G__81911 = (0);
seq__81888_81895 = G__81908;
chunk__81890_81896 = G__81909;
count__81891_81897 = G__81910;
i__81892_81898 = G__81911;
continue;
} else {
var node_81912 = cljs.core.first(seq__81888_81906__$1);
var app_name_81913 = node_81912.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_81913,node_81912);


var G__81914 = cljs.core.next(seq__81888_81906__$1);
var G__81915 = null;
var G__81916 = (0);
var G__81917 = (0);
seq__81888_81895 = G__81914;
chunk__81890_81896 = G__81915;
count__81891_81897 = G__81916;
i__81892_81898 = G__81917;
continue;
}
} else {
}
}
break;
}

return com.wsscode.pathom.book.app_types.update_apps();
});
com.wsscode.pathom.book.main.main();

//# sourceMappingURL=com.wsscode.pathom.book.main.js.map
