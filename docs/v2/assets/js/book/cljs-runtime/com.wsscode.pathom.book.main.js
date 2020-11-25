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
var seq__56275_56282 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("div[x-app]")));
var chunk__56277_56283 = null;
var count__56278_56284 = (0);
var i__56279_56285 = (0);
while(true){
if((i__56279_56285 < count__56278_56284)){
var node_56286 = chunk__56277_56283.cljs$core$IIndexed$_nth$arity$2(null,i__56279_56285);
var app_name_56287 = node_56286.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_56287,node_56286);


var G__56288 = seq__56275_56282;
var G__56289 = chunk__56277_56283;
var G__56290 = count__56278_56284;
var G__56291 = (i__56279_56285 + (1));
seq__56275_56282 = G__56288;
chunk__56277_56283 = G__56289;
count__56278_56284 = G__56290;
i__56279_56285 = G__56291;
continue;
} else {
var temp__5720__auto___56292 = cljs.core.seq(seq__56275_56282);
if(temp__5720__auto___56292){
var seq__56275_56293__$1 = temp__5720__auto___56292;
if(cljs.core.chunked_seq_QMARK_(seq__56275_56293__$1)){
var c__4550__auto___56294 = cljs.core.chunk_first(seq__56275_56293__$1);
var G__56295 = cljs.core.chunk_rest(seq__56275_56293__$1);
var G__56296 = c__4550__auto___56294;
var G__56297 = cljs.core.count(c__4550__auto___56294);
var G__56298 = (0);
seq__56275_56282 = G__56295;
chunk__56277_56283 = G__56296;
count__56278_56284 = G__56297;
i__56279_56285 = G__56298;
continue;
} else {
var node_56299 = cljs.core.first(seq__56275_56293__$1);
var app_name_56300 = node_56299.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_56300,node_56299);


var G__56301 = cljs.core.next(seq__56275_56293__$1);
var G__56302 = null;
var G__56303 = (0);
var G__56304 = (0);
seq__56275_56282 = G__56301;
chunk__56277_56283 = G__56302;
count__56278_56284 = G__56303;
i__56279_56285 = G__56304;
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
