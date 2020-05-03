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
var seq__52574_52583 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("div[x-app]")));
var chunk__52576_52584 = null;
var count__52577_52585 = (0);
var i__52578_52586 = (0);
while(true){
if((i__52578_52586 < count__52577_52585)){
var node_52587 = chunk__52576_52584.cljs$core$IIndexed$_nth$arity$2(null,i__52578_52586);
var app_name_52588 = node_52587.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_52588,node_52587);


var G__52589 = seq__52574_52583;
var G__52590 = chunk__52576_52584;
var G__52591 = count__52577_52585;
var G__52592 = (i__52578_52586 + (1));
seq__52574_52583 = G__52589;
chunk__52576_52584 = G__52590;
count__52577_52585 = G__52591;
i__52578_52586 = G__52592;
continue;
} else {
var temp__5720__auto___52593 = cljs.core.seq(seq__52574_52583);
if(temp__5720__auto___52593){
var seq__52574_52594__$1 = temp__5720__auto___52593;
if(cljs.core.chunked_seq_QMARK_(seq__52574_52594__$1)){
var c__4550__auto___52595 = cljs.core.chunk_first(seq__52574_52594__$1);
var G__52596 = cljs.core.chunk_rest(seq__52574_52594__$1);
var G__52597 = c__4550__auto___52595;
var G__52598 = cljs.core.count(c__4550__auto___52595);
var G__52599 = (0);
seq__52574_52583 = G__52596;
chunk__52576_52584 = G__52597;
count__52577_52585 = G__52598;
i__52578_52586 = G__52599;
continue;
} else {
var node_52600 = cljs.core.first(seq__52574_52594__$1);
var app_name_52601 = node_52600.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_52601,node_52600);


var G__52602 = cljs.core.next(seq__52574_52594__$1);
var G__52603 = null;
var G__52604 = (0);
var G__52605 = (0);
seq__52574_52583 = G__52602;
chunk__52576_52584 = G__52603;
count__52577_52585 = G__52604;
i__52578_52586 = G__52605;
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
