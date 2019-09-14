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
var seq__58337_58346 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("div[x-app]")));
var chunk__58339_58347 = null;
var count__58340_58348 = (0);
var i__58341_58349 = (0);
while(true){
if((i__58341_58349 < count__58340_58348)){
var node_58350 = chunk__58339_58347.cljs$core$IIndexed$_nth$arity$2(null,i__58341_58349);
var app_name_58351 = node_58350.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_58351,node_58350);


var G__58352 = seq__58337_58346;
var G__58353 = chunk__58339_58347;
var G__58354 = count__58340_58348;
var G__58355 = (i__58341_58349 + (1));
seq__58337_58346 = G__58352;
chunk__58339_58347 = G__58353;
count__58340_58348 = G__58354;
i__58341_58349 = G__58355;
continue;
} else {
var temp__5720__auto___58356 = cljs.core.seq(seq__58337_58346);
if(temp__5720__auto___58356){
var seq__58337_58357__$1 = temp__5720__auto___58356;
if(cljs.core.chunked_seq_QMARK_(seq__58337_58357__$1)){
var c__4550__auto___58358 = cljs.core.chunk_first(seq__58337_58357__$1);
var G__58359 = cljs.core.chunk_rest(seq__58337_58357__$1);
var G__58360 = c__4550__auto___58358;
var G__58361 = cljs.core.count(c__4550__auto___58358);
var G__58362 = (0);
seq__58337_58346 = G__58359;
chunk__58339_58347 = G__58360;
count__58340_58348 = G__58361;
i__58341_58349 = G__58362;
continue;
} else {
var node_58363 = cljs.core.first(seq__58337_58357__$1);
var app_name_58364 = node_58363.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_58364,node_58363);


var G__58365 = cljs.core.next(seq__58337_58357__$1);
var G__58366 = null;
var G__58367 = (0);
var G__58368 = (0);
seq__58337_58346 = G__58365;
chunk__58339_58347 = G__58366;
count__58340_58348 = G__58367;
i__58341_58349 = G__58368;
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
