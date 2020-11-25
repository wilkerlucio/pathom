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
var this__52443__auto__ = this;
React.Component.apply(this__52443__auto__,arguments);

if((!((this__52443__auto__.initLocalState == null)))){
this__52443__auto__.state = this__52443__auto__.initLocalState();
} else {
this__52443__auto__.state = ({});
}

return this__52443__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","GithubViewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer",2105777535),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);

var x67131_67231 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x67131_67231.render = ((function (x67131_67231){
return (function (){
var this__51361__auto__ = this;
var this$ = this__51361__auto__;
var _STAR_reconciler_STAR__orig_val__67136 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__67137 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__67138 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__67139 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__67140 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__67141 = fulcro.client.primitives.get_reconciler(this__51361__auto__);
var _STAR_depth_STAR__temp_val__67142 = (fulcro.client.primitives.depth(this__51361__auto__) + (1));
var _STAR_shared_STAR__temp_val__67143 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__51361__auto__);
var _STAR_instrument_STAR__temp_val__67144 = fulcro.client.primitives.instrument(this__51361__auto__);
var _STAR_parent_STAR__temp_val__67145 = this__51361__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__67141;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__67142;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__67143;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__67144;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__67145;

try{var map__67149 = fulcro.client.primitives.props(this$);
var map__67149__$1 = (((((!((map__67149 == null))))?(((((map__67149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67149):map__67149);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67149__$1,new cljs.core.Keyword("g.user","name","g.user/name",996543775));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Group: ",fulcro.util.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__67140;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__67139;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__67138;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__67137;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__67136;
}});})(x67131_67231))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.fulcro$isComponent = true;

var x67155_67237 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;
x67155_67237.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x67155_67237.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x67155_67237){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67155_67237))
;

x67155_67237.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x67155_67237){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67155_67237))
;

x67155_67237.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x67155_67237.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x67155_67237){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x67155_67237))
;

x67155_67237.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x67155_67237.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x67155_67237){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x67155_67237))
;

x67155_67237.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x67155_67237.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x67155_67237){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x67155_67237))
;


var x67162_67240 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x67162_67240.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x67162_67240.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x67162_67240){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67162_67240))
;

x67162_67240.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x67162_67240){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67162_67240))
;

x67162_67240.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x67162_67240.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x67162_67240){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x67162_67240))
;

x67162_67240.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x67162_67240.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x67162_67240){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x67162_67240))
;

x67162_67240.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x67162_67240.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x67162_67240){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x67162_67240))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorPrWriter = (function (this__52446__auto__,writer__52447__auto__,opt__52448__auto__){
return cljs.core._write(writer__52447__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("g.user","id","g.user/id",398261570)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp = (function com$wsscode$pathom$book$graphql$fulcro_network$contacts$ContactsApp(){
var this__52443__auto__ = this;
React.Component.apply(this__52443__auto__,arguments);

if((!((this__52443__auto__.initLocalState == null)))){
this__52443__auto__.state = this__52443__auto__.initLocalState();
} else {
this__52443__auto__.state = ({});
}

return this__52443__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","ContactsApp","com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp",-1042428475),com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);

var x67177_67248 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x67177_67248.render = ((function (x67177_67248){
return (function (){
var this__51361__auto__ = this;
var this$ = this__51361__auto__;
var _STAR_reconciler_STAR__orig_val__67178 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__67179 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__67180 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__67181 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__67182 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__67183 = fulcro.client.primitives.get_reconciler(this__51361__auto__);
var _STAR_depth_STAR__temp_val__67184 = (fulcro.client.primitives.depth(this__51361__auto__) + (1));
var _STAR_shared_STAR__temp_val__67185 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__51361__auto__);
var _STAR_instrument_STAR__temp_val__67186 = fulcro.client.primitives.instrument(this__51361__auto__);
var _STAR_parent_STAR__temp_val__67187 = this__51361__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__67183;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__67184;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__67185;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__67186;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__67187;

try{var map__67191 = fulcro.client.primitives.props(this$);
var map__67191__$1 = (((((!((map__67191 == null))))?(((((map__67191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67191):map__67191);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67191__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Hello Contacts App World!!",fulcro.util.force_children((com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1(viewer) : com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.call(null,viewer)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__67182;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__67181;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__67180;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__67179;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__67178;
}});})(x67177_67248))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.fulcro$isComponent = true;

var x67193_67254 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;
x67193_67254.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x67193_67254.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x67193_67254){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67193_67254))
;

x67193_67254.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x67193_67254){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67193_67254))
;

x67193_67254.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x67193_67254.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x67193_67254){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x67193_67254))
;

x67193_67254.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x67193_67254.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x67193_67254){
return (function (this$,p__67197){
var map__67198 = p__67197;
var map__67198__$1 = (((((!((map__67198 == null))))?(((((map__67198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67198):map__67198);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67198__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x67193_67254))
;

x67193_67254.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x67193_67254.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x67193_67254){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x67193_67254))
;


var x67202_67268 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x67202_67268.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x67202_67268.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x67202_67268){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67202_67268))
;

x67202_67268.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x67202_67268){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x67202_67268))
;

x67202_67268.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x67202_67268.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x67202_67268){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x67202_67268))
;

x67202_67268.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x67202_67268.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x67202_67268){
return (function (this$,p__67207){
var map__67208 = p__67207;
var map__67208__$1 = (((((!((map__67208 == null))))?(((((map__67208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67208):map__67208);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67208__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x67202_67268))
;

x67202_67268.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x67202_67268.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x67202_67268){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x67202_67268))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorPrWriter = (function (this__52446__auto__,writer__52447__auto__,opt__52448__auto__){
return cljs.core._write(writer__52447__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.contacts_app = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
com.wsscode.pathom.book.app_types.register_app("contacts",(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__67217){
var map__67218 = p__67217;
var map__67218__$1 = (((((!((map__67218 == null))))?(((((map__67218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67218):map__67218);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67218__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(reconciler,new cljs.core.Keyword("app","viewer","app/viewer",-784046652),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton",new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050)], null)], null));
}),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","url","com.wsscode.pathom.fulcro.network/url",-572582451),"https://api.github.com/graphql?access_token="], null)))], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.app_types.make_root(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp,"contacts")], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.graphql.fulcro_network.contacts.js.map
