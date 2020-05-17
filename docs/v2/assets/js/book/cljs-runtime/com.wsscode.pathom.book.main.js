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
var seq__66901_66908 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("div[x-app]")));
var chunk__66903_66909 = null;
var count__66904_66910 = (0);
var i__66905_66911 = (0);
while(true){
if((i__66905_66911 < count__66904_66910)){
var node_66913 = chunk__66903_66909.cljs$core$IIndexed$_nth$arity$2(null,i__66905_66911);
var app_name_66914 = node_66913.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_66914,node_66913);


var G__66915 = seq__66901_66908;
var G__66916 = chunk__66903_66909;
var G__66917 = count__66904_66910;
var G__66918 = (i__66905_66911 + (1));
seq__66901_66908 = G__66915;
chunk__66903_66909 = G__66916;
count__66904_66910 = G__66917;
i__66905_66911 = G__66918;
continue;
} else {
var temp__5720__auto___66919 = cljs.core.seq(seq__66901_66908);
if(temp__5720__auto___66919){
var seq__66901_66920__$1 = temp__5720__auto___66919;
if(cljs.core.chunked_seq_QMARK_(seq__66901_66920__$1)){
var c__4550__auto___66921 = cljs.core.chunk_first(seq__66901_66920__$1);
var G__66922 = cljs.core.chunk_rest(seq__66901_66920__$1);
var G__66923 = c__4550__auto___66921;
var G__66924 = cljs.core.count(c__4550__auto___66921);
var G__66925 = (0);
seq__66901_66908 = G__66922;
chunk__66903_66909 = G__66923;
count__66904_66910 = G__66924;
i__66905_66911 = G__66925;
continue;
} else {
var node_66926 = cljs.core.first(seq__66901_66920__$1);
var app_name_66927 = node_66926.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_66927,node_66926);


var G__66928 = cljs.core.next(seq__66901_66920__$1);
var G__66929 = null;
var G__66930 = (0);
var G__66931 = (0);
seq__66901_66908 = G__66928;
chunk__66903_66909 = G__66929;
count__66904_66910 = G__66930;
i__66905_66911 = G__66931;
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
