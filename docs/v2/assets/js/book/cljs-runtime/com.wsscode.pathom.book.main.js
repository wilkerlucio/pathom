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
var seq__58898_58906 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("div[x-app]")));
var chunk__58900_58907 = null;
var count__58901_58908 = (0);
var i__58902_58909 = (0);
while(true){
if((i__58902_58909 < count__58901_58908)){
var node_58910 = chunk__58900_58907.cljs$core$IIndexed$_nth$arity$2(null,i__58902_58909);
var app_name_58911 = node_58910.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_58911,node_58910);


var G__58912 = seq__58898_58906;
var G__58913 = chunk__58900_58907;
var G__58914 = count__58901_58908;
var G__58915 = (i__58902_58909 + (1));
seq__58898_58906 = G__58912;
chunk__58900_58907 = G__58913;
count__58901_58908 = G__58914;
i__58902_58909 = G__58915;
continue;
} else {
var temp__5720__auto___58916 = cljs.core.seq(seq__58898_58906);
if(temp__5720__auto___58916){
var seq__58898_58917__$1 = temp__5720__auto___58916;
if(cljs.core.chunked_seq_QMARK_(seq__58898_58917__$1)){
var c__4550__auto___58918 = cljs.core.chunk_first(seq__58898_58917__$1);
var G__58919 = cljs.core.chunk_rest(seq__58898_58917__$1);
var G__58920 = c__4550__auto___58918;
var G__58921 = cljs.core.count(c__4550__auto___58918);
var G__58922 = (0);
seq__58898_58906 = G__58919;
chunk__58900_58907 = G__58920;
count__58901_58908 = G__58921;
i__58902_58909 = G__58922;
continue;
} else {
var node_58923 = cljs.core.first(seq__58898_58917__$1);
var app_name_58924 = node_58923.getAttribute("x-app");
com.wsscode.pathom.book.app_types.mount_app(app_name_58924,node_58923);


var G__58925 = cljs.core.next(seq__58898_58917__$1);
var G__58926 = null;
var G__58927 = (0);
var G__58928 = (0);
seq__58898_58906 = G__58925;
chunk__58900_58907 = G__58926;
count__58901_58908 = G__58927;
i__58902_58909 = G__58928;
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
