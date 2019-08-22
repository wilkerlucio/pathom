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
var seq__49909_49916 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("div[x-app]")));
var chunk__49911_49917 = null;
var count__49912_49918 = (0);
var i__49913_49919 = (0);
while(true){
if((i__49913_49919 < count__49912_49918)){
var node_49920 = chunk__49911_49917.cljs$core$IIndexed$_nth$arity$2(null,i__49913_49919);
var app_name_49921 = node_49920.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_49921,node_49920);


var G__49922 = seq__49909_49916;
var G__49923 = chunk__49911_49917;
var G__49924 = count__49912_49918;
var G__49925 = (i__49913_49919 + (1));
seq__49909_49916 = G__49922;
chunk__49911_49917 = G__49923;
count__49912_49918 = G__49924;
i__49913_49919 = G__49925;
continue;
} else {
var temp__5720__auto___49926 = cljs.core.seq(seq__49909_49916);
if(temp__5720__auto___49926){
var seq__49909_49927__$1 = temp__5720__auto___49926;
if(cljs.core.chunked_seq_QMARK_(seq__49909_49927__$1)){
var c__4550__auto___49928 = cljs.core.chunk_first(seq__49909_49927__$1);
var G__49929 = cljs.core.chunk_rest(seq__49909_49927__$1);
var G__49930 = c__4550__auto___49928;
var G__49931 = cljs.core.count(c__4550__auto___49928);
var G__49932 = (0);
seq__49909_49916 = G__49929;
chunk__49911_49917 = G__49930;
count__49912_49918 = G__49931;
i__49913_49919 = G__49932;
continue;
} else {
var node_49933 = cljs.core.first(seq__49909_49927__$1);
var app_name_49934 = node_49933.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_49934,node_49933);


var G__49935 = cljs.core.next(seq__49909_49927__$1);
var G__49936 = null;
var G__49937 = (0);
var G__49938 = (0);
seq__49909_49916 = G__49935;
chunk__49911_49917 = G__49936;
count__49912_49918 = G__49937;
i__49913_49919 = G__49938;
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
