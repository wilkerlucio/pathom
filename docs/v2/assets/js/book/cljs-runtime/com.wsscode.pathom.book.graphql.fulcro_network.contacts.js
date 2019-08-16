goog.provide('com.wsscode.pathom.book.graphql.fulcro_network.contacts');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.dom');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('fulcro.client');
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer = (function com$wsscode$pathom$book$graphql$fulcro_network$contacts$GithubViewer(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57092_57186 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
var G__57093_57187 = React.Component.prototype;
var G__57094_57188 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57092_57186,G__57093_57187,G__57094_57188);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","GithubViewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer",2105777535),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);

var x57095_57189 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x57095_57189.render = ((function (x57095_57189){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57096 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57097 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57098 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57099 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57100 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57101 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57102 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57103 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57104 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57105 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57101;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57102;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57103;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57104;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57105;

try{var map__57106 = fulcro.client.primitives.props(this$);
var map__57106__$1 = (((((!((map__57106 == null))))?(((((map__57106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57106):map__57106);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57106__$1,new cljs.core.Keyword("g.user","name","g.user/name",996543775));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Group: ",fulcro.util.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57100;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57099;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57098;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57097;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57096;
}});})(x57095_57189))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.fulcro$isComponent = true;

var x57112_57196 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;
x57112_57196.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57112_57196.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57112_57196){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57112_57196))
;

x57112_57196.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57112_57196){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57112_57196))
;

x57112_57196.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x57112_57196.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x57112_57196){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x57112_57196))
;

x57112_57196.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57112_57196.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57112_57196){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57112_57196))
;

x57112_57196.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57112_57196.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57112_57196){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x57112_57196))
;


var x57115_57197 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x57115_57197.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57115_57197.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57115_57197){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57115_57197))
;

x57115_57197.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57115_57197){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57115_57197))
;

x57115_57197.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x57115_57197.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x57115_57197){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x57115_57197))
;

x57115_57197.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57115_57197.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57115_57197){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57115_57197))
;

x57115_57197.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57115_57197.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57115_57197){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x57115_57197))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("g.user","id","g.user/id",398261570)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp = (function com$wsscode$pathom$book$graphql$fulcro_network$contacts$ContactsApp(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57137_57206 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
var G__57138_57207 = React.Component.prototype;
var G__57139_57208 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57137_57206,G__57138_57207,G__57139_57208);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","ContactsApp","com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp",-1042428475),com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);

var x57140_57209 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x57140_57209.render = ((function (x57140_57209){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57142 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57143 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57144 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57145 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57146 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57147 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57148 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57149 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57150 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57151 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57147;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57148;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57149;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57150;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57151;

try{var map__57152 = fulcro.client.primitives.props(this$);
var map__57152__$1 = (((((!((map__57152 == null))))?(((((map__57152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57152):map__57152);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57152__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Hello Contacts App World!!",fulcro.util.force_children((com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1(viewer) : com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.call(null,viewer)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57146;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57145;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57144;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57143;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57142;
}});})(x57140_57209))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.fulcro$isComponent = true;

var x57154_57215 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;
x57154_57215.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57154_57215.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57154_57215){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57154_57215))
;

x57154_57215.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57154_57215){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57154_57215))
;

x57154_57215.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x57154_57215.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x57154_57215){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x57154_57215))
;

x57154_57215.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57154_57215.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57154_57215){
return (function (this$,p__57156){
var map__57157 = p__57156;
var map__57157__$1 = (((((!((map__57157 == null))))?(((((map__57157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57157):map__57157);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57157__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x57154_57215))
;

x57154_57215.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57154_57215.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57154_57215){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x57154_57215))
;


var x57159_57223 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x57159_57223.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57159_57223.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57159_57223){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57159_57223))
;

x57159_57223.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57159_57223){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57159_57223))
;

x57159_57223.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x57159_57223.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x57159_57223){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x57159_57223))
;

x57159_57223.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57159_57223.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57159_57223){
return (function (this$,p__57162){
var map__57163 = p__57162;
var map__57163__$1 = (((((!((map__57163 == null))))?(((((map__57163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57163):map__57163);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57163__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x57159_57223))
;

x57159_57223.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57159_57223.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57159_57223){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x57159_57223))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.contacts_app = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
com.wsscode.pathom.book.app_types.register_app("contacts",(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__57166){
var map__57167 = p__57166;
var map__57167__$1 = (((((!((map__57167 == null))))?(((((map__57167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57167):map__57167);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(reconciler,new cljs.core.Keyword("app","viewer","app/viewer",-784046652),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton",new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050)], null)], null));
}),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","url","com.wsscode.pathom.fulcro.network/url",-572582451),"https://api.github.com/graphql?access_token="], null)))], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.app_types.make_root(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp,"contacts")], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.graphql.fulcro_network.contacts.js.map
