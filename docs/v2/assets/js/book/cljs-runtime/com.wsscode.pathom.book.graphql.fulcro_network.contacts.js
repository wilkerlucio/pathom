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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","GithubViewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer",2105777535),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);

var x62777_62876 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x62777_62876.render = ((function (x62777_62876){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__62779 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__62780 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__62781 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__62782 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__62783 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__62784 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__62785 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__62786 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__62787 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__62788 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__62784;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__62785;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__62786;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__62787;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__62788;

try{var map__62792 = fulcro.client.primitives.props(this$);
var map__62792__$1 = (((((!((map__62792 == null))))?(((((map__62792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62792):map__62792);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword("g.user","name","g.user/name",996543775));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Group: ",fulcro.util.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__62783;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__62782;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__62781;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__62780;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__62779;
}});})(x62777_62876))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.fulcro$isComponent = true;

var x62802_62881 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;
x62802_62881.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x62802_62881.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x62802_62881){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62802_62881))
;

x62802_62881.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x62802_62881){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62802_62881))
;

x62802_62881.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x62802_62881.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x62802_62881){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x62802_62881))
;

x62802_62881.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x62802_62881.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x62802_62881){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x62802_62881))
;

x62802_62881.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x62802_62881.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x62802_62881){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x62802_62881))
;


var x62810_62885 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x62810_62885.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x62810_62885.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x62810_62885){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62810_62885))
;

x62810_62885.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x62810_62885){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62810_62885))
;

x62810_62885.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x62810_62885.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x62810_62885){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x62810_62885))
;

x62810_62885.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x62810_62885.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x62810_62885){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x62810_62885))
;

x62810_62885.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x62810_62885.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x62810_62885){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x62810_62885))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("g.user","id","g.user/id",398261570)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp = (function com$wsscode$pathom$book$graphql$fulcro_network$contacts$ContactsApp(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","ContactsApp","com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp",-1042428475),com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);

var x62826_62890 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x62826_62890.render = ((function (x62826_62890){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__62828 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__62829 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__62830 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__62831 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__62832 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__62833 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__62834 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__62835 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__62836 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__62837 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__62833;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__62834;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__62835;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__62836;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__62837;

try{var map__62840 = fulcro.client.primitives.props(this$);
var map__62840__$1 = (((((!((map__62840 == null))))?(((((map__62840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62840):map__62840);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Hello Contacts App World!!",fulcro.util.force_children((com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1(viewer) : com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.call(null,viewer)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__62832;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__62831;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__62830;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__62829;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__62828;
}});})(x62826_62890))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.fulcro$isComponent = true;

var x62847_62894 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;
x62847_62894.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x62847_62894.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x62847_62894){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62847_62894))
;

x62847_62894.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x62847_62894){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62847_62894))
;

x62847_62894.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x62847_62894.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x62847_62894){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x62847_62894))
;

x62847_62894.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x62847_62894.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x62847_62894){
return (function (this$,p__62857){
var map__62858 = p__62857;
var map__62858__$1 = (((((!((map__62858 == null))))?(((((map__62858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62858):map__62858);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62858__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x62847_62894))
;

x62847_62894.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x62847_62894.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x62847_62894){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x62847_62894))
;


var x62864_62897 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x62864_62897.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x62864_62897.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x62864_62897){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62864_62897))
;

x62864_62897.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x62864_62897){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62864_62897))
;

x62864_62897.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x62864_62897.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x62864_62897){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x62864_62897))
;

x62864_62897.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x62864_62897.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x62864_62897){
return (function (this$,p__62869){
var map__62870 = p__62869;
var map__62870__$1 = (((((!((map__62870 == null))))?(((((map__62870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62870):map__62870);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x62864_62897))
;

x62864_62897.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x62864_62897.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x62864_62897){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x62864_62897))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.contacts_app = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
com.wsscode.pathom.book.app_types.register_app("contacts",(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__62873){
var map__62874 = p__62873;
var map__62874__$1 = (((((!((map__62874 == null))))?(((((map__62874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62874):map__62874);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62874__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(reconciler,new cljs.core.Keyword("app","viewer","app/viewer",-784046652),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton",new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050)], null)], null));
}),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","url","com.wsscode.pathom.fulcro.network/url",-572582451),"https://api.github.com/graphql?access_token="], null)))], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.app_types.make_root(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp,"contacts")], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.graphql.fulcro_network.contacts.js.map
