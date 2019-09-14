goog.provide('com.wsscode.pathom.viz.index_explorer');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('clojure.test.check.generators');
goog.require('com.wsscode.fuzzy');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.viz.helpers');
goog.require('com.wsscode.pathom.viz.ui.expandable_tree');
goog.require('com.wsscode.pathom.viz.ui.kit');
goog.require('com.wsscode.pathom.viz.ui.context');
goog.require('com.wsscode.spec_inspec');
goog.require('edn_query_language.core');
goog.require('fulcro_css.css');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');
goog.require('ghostwheel.core');
goog.require('goog.object');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),new cljs.core.Symbol("cljs.core","pos?","cljs.core/pos?",-652182749,null)),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),new cljs.core.Symbol("cljs.core","pos?","cljs.core/pos?",-652182749,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.double_QMARK_,cljs.core.pos_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56967){
return cljs.core.map_QMARK_(G__56967);
}),(function (G__56967){
return cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
}),(function (G__56967){
return cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868));
}),(function (G__56967){
return cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896));
}),(function (G__56967){
return cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__56967){
return cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"reach","reach",1376483465));
}),(function (G__56967){
return cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"radius","radius",-2073122258));
})], null),(function (G__56967){
return ((cljs.core.map_QMARK_(G__56967)) && (cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"attribute","attribute",-2074029119))) && (cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))) && (cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))) && (cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"reach","reach",1376483465))) && (cljs.core.contains_QMARK_(G__56967,new cljs.core.Keyword(null,"radius","radius",-2073122258))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reach","reach",1376483465))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__57003){
return cljs.core.map_QMARK_(G__57003);
}),(function (G__57003){
return cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"source","source",-433931539));
}),(function (G__57003){
return cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__57003){
return cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130));
}),(function (G__57003){
return cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__57003){
return cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"deep","deep",2090866875));
})], null),(function (G__57003){
return ((cljs.core.map_QMARK_(G__57003)) && (cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))) && (cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_(G__57003,new cljs.core.Keyword(null,"deep","deep",2090866875))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"source","source",-433931539))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deep","deep",2090866875)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57012){
return cljs.core.coll_QMARK_(G__57012);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57013){
return cljs.core.coll_QMARK_(G__57013);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-graph","com.wsscode.pathom.viz.index-explorer/attribute-graph",226486271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__57014){
return cljs.core.map_QMARK_(G__57014);
}),(function (G__57014){
return cljs.core.contains_QMARK_(G__57014,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
}),(function (G__57014){
return cljs.core.contains_QMARK_(G__57014,new cljs.core.Keyword(null,"links","links",-654507394));
})], null),(function (G__57014){
return ((cljs.core.map_QMARK_(G__57014)) && (cljs.core.contains_QMARK_(G__57014,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core.contains_QMARK_(G__57014,new cljs.core.Keyword(null,"links","links",-654507394))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"links","links",-654507394)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","maybe-nested-input","com.wsscode.pathom.viz.index-explorer/maybe-nested-input",734224205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Keyword(null,"nested","nested",18943849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.vector_QMARK_], null),null));
com.wsscode.pathom.viz.index_explorer.ExtensionContext = com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.viz.index_explorer.call_graph_comm = (function com$wsscode$pathom$viz$index_explorer$call_graph_comm(comp,f,k){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__57027 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650));
if((G__57027 == null)){
return null;
} else {
return cljs.core.deref(G__57027);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__57028 = comp;
var G__57028__$1 = (((G__57028 == null))?null:fulcro.client.primitives.props(G__57028));
var G__57028__$2 = (((G__57028__$1 == null))?null:fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(G__57028__$1));
var G__57028__$3 = (((G__57028__$2 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087).cljs$core$IFn$_invoke$arity$1(G__57028__$2));
if((G__57028__$3 == null)){
return null;
} else {
return cljs.core.deref(G__57028__$3);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var G__57031 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__57030 = goog.object.get(settings,f);
return (fexpr__57030.cljs$core$IFn$_invoke$arity$1 ? fexpr__57030.cljs$core$IFn$_invoke$arity$1(G__57031) : fexpr__57030.call(null,G__57031));
} else {
return null;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_events = (function com$wsscode$pathom$viz$index_explorer$attribute_graph_events(this$,k){
var on_select_attribute = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_attribute){
return (function (){
return (on_select_attribute.cljs$core$IFn$_invoke$arity$1 ? on_select_attribute.cljs$core$IFn$_invoke$arity$1(k) : on_select_attribute.call(null,k));
});})(on_select_attribute))
,new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),((function (on_select_attribute){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"highlightNode",k);
});})(on_select_attribute))
,new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),((function (on_select_attribute){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"unhighlightNode",k);
});})(on_select_attribute))
], null);
});
com.wsscode.pathom.viz.index_explorer.resolver_graph_events = (function com$wsscode$pathom$viz$index_explorer$resolver_graph_events(this$,k){
var on_select_resolver = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_resolver){
return (function (){
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(k) : on_select_resolver.call(null,k));
});})(on_select_resolver))
,new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),((function (on_select_resolver){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"highlightEdge",k);
});})(on_select_resolver))
,new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),((function (on_select_resolver){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"unhighlightEdge",k);
});})(on_select_resolver))
], null);
});
com.wsscode.pathom.viz.index_explorer.color_attribute = "#9a45b1";
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeLink !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeLink = (function com$wsscode$pathom$viz$index_explorer$AttributeLink(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57038_58212 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
var G__57039_58213 = React.Component.prototype;
var G__57040_58214 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57038_58212,G__57039_58213,G__57040_58214);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeLink","com.wsscode.pathom.viz.index-explorer/AttributeLink",4406070),com.wsscode.pathom.viz.index_explorer.AttributeLink);

var x57041_58215 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x57041_58215.render = ((function (x57041_58215){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57042 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57043 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57044 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57045 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57046 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57047 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57048 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57049 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57050 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57051 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57047;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57048;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57049;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57050;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57051;

try{var map__57052 = fulcro.client.primitives.props(this$);
var map__57052__$1 = (((((!((map__57052 == null))))?(((((map__57052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57052):map__57052);
var props = map__57052__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57052__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57052__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_graph_events(this$,attribute),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57046;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57045;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57044;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57043;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57042;
}});})(x57041_58215))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeLink;

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.fulcro$isComponent = true;

var x57054_58216 = com.wsscode.pathom.viz.index_explorer.AttributeLink;
x57054_58216.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57054_58216.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57054_58216){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57054_58216))
;

x57054_58216.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57054_58216){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57054_58216))
;


var x57055_58217 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x57055_58217.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57055_58217.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57055_58217){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57055_58217))
;

x57055_58217.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57055_58217){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57055_58217))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeLink");
});
com.wsscode.pathom.viz.index_explorer.attribute_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null));
com.wsscode.pathom.viz.index_explorer.color_resolver = "#467cb7";
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverLink !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverLink = (function com$wsscode$pathom$viz$index_explorer$ResolverLink(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57058_58218 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
var G__57059_58219 = React.Component.prototype;
var G__57060_58220 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57058_58218,G__57059_58219,G__57060_58220);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverLink","com.wsscode.pathom.viz.index-explorer/ResolverLink",175120056),com.wsscode.pathom.viz.index_explorer.ResolverLink);

var x57061_58221 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x57061_58221.render = ((function (x57061_58221){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57062 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57063 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57064 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57065 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57066 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57067 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57068 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57069 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57070 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57071 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57067;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57068;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57069;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57070;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57071;

try{var map__57074 = fulcro.client.primitives.props(this$);
var map__57074__$1 = (((((!((map__57074 == null))))?(((((map__57074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57074):map__57074);
var props = map__57074__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57074__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57074__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.resolver_graph_events(this$,sym),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57066;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57065;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57064;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57063;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57062;
}});})(x57061_58221))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverLink;

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.fulcro$isComponent = true;

var x57092_58222 = com.wsscode.pathom.viz.index_explorer.ResolverLink;
x57092_58222.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57092_58222.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57092_58222){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57092_58222))
;

x57092_58222.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57092_58222){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57092_58222))
;


var x57095_58223 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x57095_58223.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57095_58223.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57095_58223){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57095_58223))
;

x57095_58223.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57095_58223){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57095_58223))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverLink");
});
com.wsscode.pathom.viz.index_explorer.resolver_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.ResolverLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.color_mutation = "#ef6c00";
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationLink !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationLink = (function com$wsscode$pathom$viz$index_explorer$MutationLink(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57103_58224 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
var G__57104_58225 = React.Component.prototype;
var G__57105_58226 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57103_58224,G__57104_58225,G__57105_58226);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationLink","com.wsscode.pathom.viz.index-explorer/MutationLink",1835462427),com.wsscode.pathom.viz.index_explorer.MutationLink);

var x57106_58227 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x57106_58227.render = ((function (x57106_58227){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57107 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57108 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57109 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57110 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57111 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57112 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57113 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57114 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57115 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57116 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57112;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57113;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57114;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57115;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57116;

try{var map__57117 = fulcro.client.primitives.props(this$);
var map__57117__$1 = (((((!((map__57117 == null))))?(((((map__57117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57117):map__57117);
var props = map__57117__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57117__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57117__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
var on_select_mutation = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_mutation,map__57117,map__57117__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__57107,_STAR_depth_STAR__orig_val__57108,_STAR_shared_STAR__orig_val__57109,_STAR_instrument_STAR__orig_val__57110,_STAR_parent_STAR__orig_val__57111,_STAR_reconciler_STAR__temp_val__57112,_STAR_depth_STAR__temp_val__57113,_STAR_shared_STAR__temp_val__57114,_STAR_instrument_STAR__temp_val__57115,_STAR_parent_STAR__temp_val__57116,this$,this__43444__auto__,x57106_58227){
return (function (){
return (on_select_mutation.cljs$core$IFn$_invoke$arity$1 ? on_select_mutation.cljs$core$IFn$_invoke$arity$1(sym) : on_select_mutation.call(null,sym));
});})(on_select_mutation,map__57117,map__57117__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__57107,_STAR_depth_STAR__orig_val__57108,_STAR_shared_STAR__orig_val__57109,_STAR_instrument_STAR__orig_val__57110,_STAR_parent_STAR__orig_val__57111,_STAR_reconciler_STAR__temp_val__57112,_STAR_depth_STAR__temp_val__57113,_STAR_shared_STAR__temp_val__57114,_STAR_instrument_STAR__temp_val__57115,_STAR_parent_STAR__temp_val__57116,this$,this__43444__auto__,x57106_58227))
], null),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57111;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57110;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57109;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57108;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57107;
}});})(x57106_58227))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationLink;

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.fulcro$isComponent = true;

var x57125_58228 = com.wsscode.pathom.viz.index_explorer.MutationLink;
x57125_58228.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57125_58228.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57125_58228){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57125_58228))
;

x57125_58228.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57125_58228){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57125_58228))
;


var x57128_58229 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x57128_58229.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57128_58229.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57128_58229){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57128_58229))
;

x57128_58229.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57128_58229){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57128_58229))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/MutationLink");
});
com.wsscode.pathom.viz.index_explorer.mutation_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.node_radius = (function com$wsscode$pathom$viz$index_explorer$node_radius(p__57149){
var map__57151 = p__57149;
var map__57151__$1 = (((((!((map__57151 == null))))?(((((map__57151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57151):map__57151);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57151__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57151__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
return Math.round((Math.sqrt(((function (){var or__4131__auto__ = weight;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() + (2))) + Math.sqrt(((function (){var or__4131__auto__ = reach;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() + (1)))));
});
com.wsscode.pathom.viz.index_explorer.attribute__GT_node = (function com$wsscode$pathom$viz$index_explorer$attribute__GT_node(p__57156){
var map__57157 = p__57156;
var map__57157__$1 = (((((!((map__57157 == null))))?(((((map__57157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57157):map__57157);
var attr = map__57157__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57157__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57157__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57157__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57157__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),cljs.core.set_QMARK_(attribute),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),cljs.core.boolean$(center_QMARK_),new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,new cljs.core.Keyword(null,"reach","reach",1376483465),reach,new cljs.core.Keyword(null,"radius","radius",-2073122258),com.wsscode.pathom.viz.index_explorer.node_radius(attr)], null);
});
com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$direct_input_QMARK_(input){
return cljs.core.set_QMARK_(input);
});
com.wsscode.pathom.viz.index_explorer.nested_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$nested_QMARK_(input){
return cljs.core.vector_QMARK_(input);
});
com.wsscode.pathom.viz.index_explorer.single_input = (function com$wsscode$pathom$viz$index_explorer$single_input(input){
var input__$1 = ((com.wsscode.pathom.viz.index_explorer.nested_QMARK_(input))?cljs.core.first(input):input);
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input__$1));
if(and__4120__auto__){
return cljs.core.first(input__$1);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return null;
}
});
com.wsscode.pathom.viz.index_explorer.global_input_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$global_input_QMARK_(input){
return ((com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_(input)) && (cljs.core.empty_QMARK_(input)));
});
com.wsscode.pathom.viz.index_explorer.compute_nodes_links = (function com$wsscode$pathom$viz$index_explorer$compute_nodes_links(p__57164){
var map__57165 = p__57164;
var map__57165__$1 = (((((!((map__57165 == null))))?(((((map__57165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57165):map__57165);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57165__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var attributes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
var index = com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.attribute__GT_node),attributes__$1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (attributes__$1,index,map__57165,map__57165__$1,attributes){
return (function (p__57168){
var map__57169 = p__57168;
var map__57169__$1 = (((((!((map__57169 == null))))?(((((map__57169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57169):map__57169);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57169__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57169__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (attr_str,map__57169,map__57169__$1,attribute,attr_provides,attributes__$1,index,map__57165,map__57165__$1,attributes){
return (function (p__57171){
var vec__57172 = p__57171;
var provided = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57172,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57172,(1),null);
var nested_QMARK_ = com.wsscode.pathom.viz.index_explorer.nested_QMARK_(provided);
var provided_SINGLEQUOTE_ = ((nested_QMARK_)?cljs.core.peek(provided):provided);
if(((cljs.core.contains_QMARK_(index,provided_SINGLEQUOTE_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(attribute,provided_SINGLEQUOTE_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),attr_str,new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.count(resolvers),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",resolvers),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([provided_SINGLEQUOTE_], 0)),new cljs.core.Keyword(null,"deep","deep",2090866875),nested_QMARK_], null);
} else {
return null;
}
});})(attr_str,map__57169,map__57169__$1,attribute,attr_provides,attributes__$1,index,map__57165,map__57165__$1,attributes))
),attr_provides);
return res;
});})(attributes__$1,index,map__57165,map__57165__$1,attributes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes__$1], 0))], null);
});
com.wsscode.pathom.viz.index_explorer.render_attribute_graph = (function com$wsscode$pathom$viz$index_explorer$render_attribute_graph(this$){
var map__57175 = fulcro.client.primitives.props(this$);
var map__57175__$1 = (((((!((map__57175 == null))))?(((((map__57175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57175):map__57175);
var props = map__57175__$1;
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57175__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105));
var on_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57175__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57175__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var on_show_details__$1 = (function (){var or__4131__auto__ = on_show_details;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
var on_click_edge__$1 = (function (){var or__4131__auto__ = on_click_edge;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
var current = goog.object.get(this$,"renderedData");
var container = goog.object.get(this$,"svgContainer");
var svg = goog.object.get(this$,"svg");
if(cljs.core.truth_(current)){
var fexpr__57178_58250 = goog.object.get(current,"dispose");
(fexpr__57178_58250.cljs$core$IFn$_invoke$arity$0 ? fexpr__57178_58250.cljs$core$IFn$_invoke$arity$0() : fexpr__57178_58250.call(null));
} else {
}

goog.object.set(svg,"innerHTML","");

var render_settings = (function (){var G__57180 = svg;
var G__57181 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.index_explorer.compute_nodes_links(props),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),((function (G__57180,map__57175,map__57175__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (attr,d,js){
var G__57182 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(attr);
var G__57183 = d;
var G__57184 = js;
return (on_show_details__$1.cljs$core$IFn$_invoke$arity$3 ? on_show_details__$1.cljs$core$IFn$_invoke$arity$3(G__57182,G__57183,G__57184) : on_show_details__$1.call(null,G__57182,G__57183,G__57184));
});})(G__57180,map__57175,map__57175__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
,new cljs.core.Keyword(null,"onClickEdge","onClickEdge",124821712),((function (G__57180,map__57175,map__57175__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (edge){
var resolvers = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(edge,"resolvers")),"}"].join(''));
var G__57185 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers], null);
return (on_click_edge__$1.cljs$core$IFn$_invoke$arity$1 ? on_click_edge__$1.cljs$core$IFn$_invoke$arity$1(G__57185) : on_click_edge__$1.call(null,G__57185));
});})(G__57180,map__57175,map__57175__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
], null));
return module$com$wsscode$pathom$viz$d3_attribute_graph.render(G__57180,G__57181);
})();
if(cljs.core.truth_(graph_comm)){
cljs.core.reset_BANG_(graph_comm,render_settings);
} else {
}

return goog.object.set(this$,"renderedData",render_settings);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraph !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraph = (function com$wsscode$pathom$viz$index_explorer$AttributeGraph(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57194_58257 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
var G__57195_58258 = React.Component.prototype;
var G__57196_58259 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57194_58257,G__57195_58258,G__57196_58259);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraph","com.wsscode.pathom.viz.index-explorer/AttributeGraph",1136928477),com.wsscode.pathom.viz.index_explorer.AttributeGraph);

var x57197_58260 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x57197_58260.render = ((function (x57197_58260){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57198 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57199 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57200 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57201 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57202 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57203 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57204 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57205 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57206 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57207 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57203;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57204;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57205;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57206;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57207;

try{var map__57208 = fulcro.client.primitives.props(this$);
var map__57208__$1 = (((((!((map__57208 == null))))?(((((map__57208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57208):map__57208);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__57208,map__57208__$1,_STAR_reconciler_STAR__orig_val__57198,_STAR_depth_STAR__orig_val__57199,_STAR_shared_STAR__orig_val__57200,_STAR_instrument_STAR__orig_val__57201,_STAR_parent_STAR__orig_val__57202,_STAR_reconciler_STAR__temp_val__57203,_STAR_depth_STAR__temp_val__57204,_STAR_shared_STAR__temp_val__57205,_STAR_instrument_STAR__temp_val__57206,_STAR_parent_STAR__temp_val__57207,this$,this__43444__auto__,x57197_58260){
return (function (p1__57187_SHARP_){
return goog.object.set(this$,"svgContainer",p1__57187_SHARP_);
});})(map__57208,map__57208__$1,_STAR_reconciler_STAR__orig_val__57198,_STAR_depth_STAR__orig_val__57199,_STAR_shared_STAR__orig_val__57200,_STAR_instrument_STAR__orig_val__57201,_STAR_parent_STAR__orig_val__57202,_STAR_reconciler_STAR__temp_val__57203,_STAR_depth_STAR__temp_val__57204,_STAR_shared_STAR__temp_val__57205,_STAR_instrument_STAR__temp_val__57206,_STAR_parent_STAR__temp_val__57207,this$,this__43444__auto__,x57197_58260))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__57208,map__57208__$1,_STAR_reconciler_STAR__orig_val__57198,_STAR_depth_STAR__orig_val__57199,_STAR_shared_STAR__orig_val__57200,_STAR_instrument_STAR__orig_val__57201,_STAR_parent_STAR__orig_val__57202,_STAR_reconciler_STAR__temp_val__57203,_STAR_depth_STAR__temp_val__57204,_STAR_shared_STAR__temp_val__57205,_STAR_instrument_STAR__temp_val__57206,_STAR_parent_STAR__temp_val__57207,this$,this__43444__auto__,x57197_58260){
return (function (p1__57188_SHARP_){
return goog.object.set(this$,"svg",p1__57188_SHARP_);
});})(map__57208,map__57208__$1,_STAR_reconciler_STAR__orig_val__57198,_STAR_depth_STAR__orig_val__57199,_STAR_shared_STAR__orig_val__57200,_STAR_instrument_STAR__orig_val__57201,_STAR_parent_STAR__orig_val__57202,_STAR_reconciler_STAR__temp_val__57203,_STAR_depth_STAR__temp_val__57204,_STAR_shared_STAR__temp_val__57205,_STAR_instrument_STAR__temp_val__57206,_STAR_parent_STAR__temp_val__57207,this$,this__43444__auto__,x57197_58260))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57202;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57201;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57200;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57199;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57198;
}});})(x57197_58260))
;

x57197_58260.componentDidUpdate = ((function (x57197_58260){
return (function (prev_props__43421__auto__,prev_state__43422__auto__,snapshot__43423__auto__){
var this__43420__auto__ = this;
var this$ = this__43420__auto__;
var snapshot57190 = snapshot__43423__auto__;
var prev_props = goog.object.get(prev_props__43421__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__43422__auto__,"fulcro$state");
if((((!((this__43420__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__43420__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__43424__auto___58274 = fulcro.client.primitives.ident(this__43420__auto__,prev_props);
var next_ident__43425__auto___58275 = fulcro.client.primitives.ident(this__43420__auto__,fulcro.client.primitives.props(this__43420__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__43424__auto___58274,next_ident__43425__auto___58275)){
var idxr__43426__auto___58278 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__43420__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43426__auto___58278 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43426__auto___58278),((function (idxr__43426__auto___58278,ident__43424__auto___58274,next_ident__43425__auto___58275,this$,snapshot57190,prev_props,_,this__43420__auto__,x57197_58260){
return (function (indexes__43427__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__43427__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43424__auto___58274], null),cljs.core.disj,this__43420__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43425__auto___58275], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43420__auto__);
});})(idxr__43426__auto___58278,ident__43424__auto___58274,next_ident__43425__auto___58275,this$,snapshot57190,prev_props,_,this__43420__auto__,x57197_58260))
);
}
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_props,fulcro.client.primitives.props(this$))){
return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
} else {
return null;
}
});})(x57197_58260))
;

x57197_58260.componentDidCatch = ((function (x57197_58260){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980),true], null));
});})(x57197_58260))
;

x57197_58260.componentWillUnmount = ((function (x57197_58260){
return (function (){
var this__43432__auto__ = this;
var this$ = this__43432__auto__;
var reconciler__43433__auto__ = fulcro.client.primitives.get_reconciler(this__43432__auto__);
var lifecycle__43434__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43433__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__43435__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__43433__auto__);
var st__43436__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43435__auto__);
var indexer__43437__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43435__auto__);
goog.object.set(this__43432__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st__43436__auto__ == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__43436__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__43432__auto__], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__43436__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__43432__auto__], 0));
} else {
}

if(cljs.core.truth_(lifecycle__43434__auto__)){
var G__57211_58281 = this__43432__auto__;
var G__57212_58282 = new cljs.core.Keyword(null,"unmount","unmount",-1779083333);
(lifecycle__43434__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43434__auto__.cljs$core$IFn$_invoke$arity$2(G__57211_58281,G__57212_58282) : lifecycle__43434__auto__.call(null,G__57211_58281,G__57212_58282));
} else {
}

if(cljs.core.truth_(indexer__43437__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__43437__auto__,this__43432__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"renderedData");
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var fexpr__57213 = goog.object.get(settings,"dispose");
return (fexpr__57213.cljs$core$IFn$_invoke$arity$0 ? fexpr__57213.cljs$core$IFn$_invoke$arity$0() : fexpr__57213.call(null));
} else {
return null;
}
});})(x57197_58260))
;

x57197_58260.componentDidMount = ((function (x57197_58260){
return (function (){
var this__43428__auto__ = this;
var this$ = this__43428__auto__;
var reconciler__43429__auto__ = fulcro.client.primitives.get_reconciler(this__43428__auto__);
var lifecycle__43430__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43429__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__43431__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43429__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__43428__auto__,"fulcro$mounted",true);

if((indexer__43431__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__43431__auto__,this__43428__auto__);
}

if(cljs.core.truth_(lifecycle__43430__auto__)){
var G__57214_58286 = this__43428__auto__;
var G__57215_58287 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__43430__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43430__auto__.cljs$core$IFn$_invoke$arity$2(G__57214_58286,G__57215_58287) : lifecycle__43430__auto__.call(null,G__57214_58286,G__57215_58287));
} else {
}

return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
});})(x57197_58260))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraph;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.fulcro$isComponent = true;

var x57216_58288 = com.wsscode.pathom.viz.index_explorer.AttributeGraph;
x57216_58288.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57216_58288.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57216_58288){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x57216_58288))
;

x57216_58288.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57216_58288){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57216_58288))
;


var x57217_58291 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x57217_58291.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57217_58291.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57217_58291){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x57217_58291))
;

x57217_58291.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57217_58291){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57217_58291))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraph");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraph);
/**
 * Get attribute from index, remove provides when interconnections is falsy.
 */
com.wsscode.pathom.viz.index_explorer.pull_attr = (function com$wsscode$pathom$viz$index_explorer$pull_attr(p__57218,attr){
var map__57219 = p__57218;
var map__57219__$1 = (((((!((map__57219 == null))))?(((((map__57219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57219):map__57219);
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57219__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57219__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var G__57221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_index,attr);
if(interconnections_QMARK_ === false){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57221,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
} else {
return G__57221;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_ = (function com$wsscode$pathom$viz$index_explorer$attribute_network_STAR_(p__57222,source){
var map__57223 = p__57222;
var map__57223__$1 = (((((!((map__57223 == null))))?(((((map__57223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57223):map__57223);
var options = map__57223__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var sub_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),cljs.core.PersistentArrayMap.EMPTY);
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false);
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true);
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true);
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false);
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1));
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var attr_visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57223__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.contains_QMARK_(attr_visited,source)){
return sub_index;
} else {
var index = (function (){var or__4131__auto__ = attr_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
}
})();
var base = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_index,cljs.core.select_keys(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null))], 0));
var map__57225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,source);
var map__57225__$1 = (((((!((map__57225 == null))))?(((((map__57225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57225):map__57225);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57225__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57225__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(attr_depth - (1)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr_visited,source)], 0));
var _LT__GT_ = base;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,index,base,map__57225,map__57225__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57223,map__57223__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,input){
if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = direct_reaches_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_(input);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = nested_reaches_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return com.wsscode.pathom.viz.index_explorer.nested_QMARK_(input);
} else {
return and__4120__auto__;
}
}
})())){
var attr = (function (){var or__4131__auto__ = com.wsscode.pathom.viz.index_explorer.single_input(input);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.vector_QMARK_(input)){
return cljs.core.first(input);
} else {
return input;
}
}
})();
if((attr_depth > (1))){
var G__57227 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__57228 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__57227,G__57228) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__57227,G__57228));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
return out;
}
});})(_LT__GT_,index,base,map__57225,map__57225__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57223,map__57223__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT_,cljs.core.keys(attr_reach_via));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,index,base,map__57225,map__57225__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57223,map__57223__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,attr){
if(cljs.core.truth_((function (){var and__4120__auto__ = direct_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (attr instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())){
if((attr_depth > (1))){
var G__57229 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__57230 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__57229,G__57230) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__57229,G__57230));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = nested_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return com.wsscode.pathom.viz.index_explorer.nested_QMARK_(attr);
} else {
return and__4120__auto__;
}
})())){
var attr__$1 = cljs.core.peek(attr);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr__$1,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr__$1));
} else {
return out;

}
}
});})(_LT__GT_,_LT__GT___$1,index,base,map__57225,map__57225__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57223,map__57223__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT___$1,cljs.core.keys(attr_provides));
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network = (function com$wsscode$pathom$viz$index_explorer$attribute_network(options,source){
return cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_(options,source),source,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
});
com.wsscode.pathom.viz.index_explorer.attr_path_key_root = (function com$wsscode$pathom$viz$index_explorer$attr_path_key_root(x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.first(x);
} else {
return x;
}
});
com.wsscode.pathom.viz.index_explorer.attr_provides__GT_path_map = (function com$wsscode$pathom$viz$index_explorer$attr_provides__GT_path_map(attr_provides){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__57231_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57231_SHARP_,(0),(function (x){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
}));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__57232){
var vec__57233 = p__57232;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57233,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57233,(1),null);
var k = cljs.core.peek(path);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),resolvers], null)], null);
}))),attr_provides);
});
com.wsscode.pathom.viz.index_explorer.attr_provides__GT_tree = (function com$wsscode$pathom$viz$index_explorer$attr_provides__GT_tree(attr_provides){
return com.wsscode.pathom.viz.helpers.path_map__GT_tree(com.wsscode.pathom.viz.index_explorer.attr_provides__GT_path_map(attr_provides));
});
com.wsscode.pathom.viz.index_explorer.render_plugin_extension = (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension(this$,view){
var plugins = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugins","com.wsscode.pathom.viz.index-explorer/plugins",1906824802).cljs$core$IFn$_invoke$arity$1(goog.object.get(this$,"context"));
var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$))),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var iter__4523__auto__ = ((function (plugins,data){
return (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__57236(s__57237){
return (new cljs.core.LazySeq(null,((function (plugins,data){
return (function (){
var s__57237__$1 = s__57237;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57237__$1);
if(temp__5720__auto__){
var s__57237__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57237__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57237__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57239 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57238 = (0);
while(true){
if((i__57238 < size__4522__auto__)){
var map__57240 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57238);
var map__57240__$1 = (((((!((map__57240 == null))))?(((((map__57240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57240):map__57240);
var plugin = map__57240__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
cljs.core.chunk_append(b__57239,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__57242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__57242.cljs$core$IFn$_invoke$arity$1 ? fexpr__57242.cljs$core$IFn$_invoke$arity$1(data) : fexpr__57242.call(null,data));
})()], 0)));

var G__58315 = (i__57238 + (1));
i__57238 = G__58315;
continue;
} else {
var G__58316 = (i__57238 + (1));
i__57238 = G__58316;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57239),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__57236(cljs.core.chunk_rest(s__57237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57239),null);
}
} else {
var map__57243 = cljs.core.first(s__57237__$2);
var map__57243__$1 = (((((!((map__57243 == null))))?(((((map__57243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57243):map__57243);
var plugin = map__57243__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57243__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__57245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__57245.cljs$core$IFn$_invoke$arity$1 ? fexpr__57245.cljs$core$IFn$_invoke$arity$1(data) : fexpr__57245.call(null,data));
})()], 0)),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__57236(cljs.core.rest(s__57237__$2)));
} else {
var G__58319 = cljs.core.rest(s__57237__$2);
s__57237__$1 = G__58319;
continue;
}
}
} else {
return null;
}
break;
}
});})(plugins,data))
,null,null));
});})(plugins,data))
;
return iter__4523__auto__(plugins);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoReachVia(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57250_58320 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
var G__57251_58321 = React.Component.prototype;
var G__57252_58322 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57250_58320,G__57251_58321,G__57252_58322);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoReachVia","com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia",-997057837),com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);

var x57253_58323 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x57253_58323.render = ((function (x57253_58323){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57254 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57255 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57256 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57257 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57258 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57259 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57260 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57261 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57262 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57263 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57259;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57260;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57261;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57262;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57263;

try{var map__57264 = fulcro.client.primitives.props(this$);
var map__57264__$1 = (((((!((map__57264 == null))))?(((((map__57264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57264):map__57264);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57266 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Reach via",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_reach_via)], null);
var G__57267 = (function (){var nested_reaches_QMARK_ = true;
var iter__4523__auto__ = ((function (nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function com$wsscode$pathom$viz$index_explorer$iter__57268(s__57269){
return (new cljs.core.LazySeq(null,((function (nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
var s__57269__$1 = s__57269;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57269__$1);
if(temp__5720__auto__){
var s__57269__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57269__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57269__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57271 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57270 = (0);
while(true){
if((i__57270 < size__4522__auto__)){
var vec__57272 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57270);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57272,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57272,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
cljs.core.chunk_append(b__57271,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),(function (){var G__57275 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__57277 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__57277);
} else {
return G__57277;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__57270,s__57269__$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(i__57270,s__57269__$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__57278 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57278,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__57278;
}
})()], null);
var G__57276 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57275,G__57276) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57275,G__57276));
})(),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (i__57270,s__57269__$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279(s__57280){
return (new cljs.core.LazySeq(null,((function (i__57270,s__57269__$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
var s__57280__$1 = s__57280;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57280__$1);
if(temp__5720__auto____$1){
var s__57280__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57280__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57280__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57282 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57281 = (0);
while(true){
if((i__57281 < size__4522__auto____$1)){
var vec__57283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57281);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57283,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57283,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__57282,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__57281,s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57283,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57282,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279_$_iter__57286(s__57287){
return (new cljs.core.LazySeq(null,((function (i__57281,s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57283,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57282,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
var s__57287__$1 = s__57287;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57287__$1);
if(temp__5720__auto____$2){
var s__57287__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57287__$2)){
var c__4521__auto____$2 = cljs.core.chunk_first(s__57287__$2);
var size__4522__auto____$2 = cljs.core.count(c__4521__auto____$2);
var b__57289 = cljs.core.chunk_buffer(size__4522__auto____$2);
if((function (){var i__57288 = (0);
while(true){
if((i__57288 < size__4522__auto____$2)){
var vec__57290 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$2,i__57288);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57290,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57290,(1),null);
cljs.core.chunk_append(b__57289,(function (){var G__57293 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57294 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57293,G__57294) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57293,G__57294));
})());

var G__58330 = (i__57288 + (1));
i__57288 = G__58330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57289),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279_$_iter__57286(cljs.core.chunk_rest(s__57287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57289),null);
}
} else {
var vec__57295 = cljs.core.first(s__57287__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57295,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57295,(1),null);
return cljs.core.cons((function (){var G__57298 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57299 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57298,G__57299) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57298,G__57299));
})(),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279_$_iter__57286(cljs.core.rest(s__57287__$2)));
}
} else {
return null;
}
break;
}
});})(i__57281,s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57283,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57282,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,null,null));
});})(i__57281,s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57283,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57282,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__58331 = (i__57281 + (1));
i__57281 = G__58331;
continue;
} else {
var G__58332 = (i__57281 + (1));
i__57281 = G__58332;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57282),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279(cljs.core.chunk_rest(s__57280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57282),null);
}
} else {
var vec__57300 = cljs.core.first(s__57280__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57300,path,resolvers,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279_$_iter__57303(s__57304){
return (new cljs.core.LazySeq(null,((function (s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57300,path,resolvers,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
var s__57304__$1 = s__57304;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57304__$1);
if(temp__5720__auto____$2){
var s__57304__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57304__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57304__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57306 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57305 = (0);
while(true){
if((i__57305 < size__4522__auto____$1)){
var vec__57307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57305);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57307,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57307,(1),null);
cljs.core.chunk_append(b__57306,(function (){var G__57310 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57311 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57310,G__57311) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57310,G__57311));
})());

var G__58333 = (i__57305 + (1));
i__57305 = G__58333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57306),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279_$_iter__57303(cljs.core.chunk_rest(s__57304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57306),null);
}
} else {
var vec__57312 = cljs.core.first(s__57304__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57312,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57312,(1),null);
return cljs.core.cons((function (){var G__57315 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57316 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57315,G__57316) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57315,G__57316));
})(),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279_$_iter__57303(cljs.core.rest(s__57304__$2)));
}
} else {
return null;
}
break;
}
});})(s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57300,path,resolvers,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,null,null));
});})(s__57280__$1,i__57270,s__57269__$1,path_SINGLEQUOTE_,vec__57300,path,resolvers,s__57280__$2,temp__5720__auto____$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57279(cljs.core.rest(s__57280__$2)));
} else {
var G__58334 = cljs.core.rest(s__57280__$2);
s__57280__$1 = G__58334;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__57270,s__57269__$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,null,null));
});})(i__57270,s__57269__$1,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (i__57270,s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (p1__57247_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57247_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(i__57270,s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__57270,s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (p1__57246_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57246_SHARP_,(0),((function (i__57270,s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(i__57270,s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
);
});})(i__57270,s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57272,input,v,c__4521__auto__,size__4522__auto__,b__57271,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,v)));
})():null)], 0)));

var G__58335 = (i__57270 + (1));
i__57270 = G__58335;
continue;
} else {
var G__58336 = (i__57270 + (1));
i__57270 = G__58336;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57271),com$wsscode$pathom$viz$index_explorer$iter__57268(cljs.core.chunk_rest(s__57269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57271),null);
}
} else {
var vec__57317 = cljs.core.first(s__57269__$2);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57317,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57317,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),(function (){var G__57320 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__57322 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__57322);
} else {
return G__57322;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (s__57269__$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(s__57269__$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__57323 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57323,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__57323;
}
})()], null);
var G__57321 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57320,G__57321) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57320,G__57321));
})(),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (s__57269__$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324(s__57325){
return (new cljs.core.LazySeq(null,((function (s__57269__$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
var s__57325__$1 = s__57325;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57325__$1);
if(temp__5720__auto____$1){
var s__57325__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57325__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57325__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57327 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57326 = (0);
while(true){
if((i__57326 < size__4522__auto__)){
var vec__57328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57326);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57328,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57328,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__57327,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__57326,s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57328,path,resolvers,c__4521__auto__,size__4522__auto__,b__57327,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324_$_iter__57331(s__57332){
return (new cljs.core.LazySeq(null,((function (i__57326,s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57328,path,resolvers,c__4521__auto__,size__4522__auto__,b__57327,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
var s__57332__$1 = s__57332;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57332__$1);
if(temp__5720__auto____$2){
var s__57332__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57332__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57332__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57334 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57333 = (0);
while(true){
if((i__57333 < size__4522__auto____$1)){
var vec__57335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57333);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57335,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57335,(1),null);
cljs.core.chunk_append(b__57334,(function (){var G__57338 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57339 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57338,G__57339) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57338,G__57339));
})());

var G__58343 = (i__57333 + (1));
i__57333 = G__58343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57334),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324_$_iter__57331(cljs.core.chunk_rest(s__57332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57334),null);
}
} else {
var vec__57340 = cljs.core.first(s__57332__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57340,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57340,(1),null);
return cljs.core.cons((function (){var G__57343 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57344 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57343,G__57344) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57343,G__57344));
})(),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324_$_iter__57331(cljs.core.rest(s__57332__$2)));
}
} else {
return null;
}
break;
}
});})(i__57326,s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57328,path,resolvers,c__4521__auto__,size__4522__auto__,b__57327,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,null,null));
});})(i__57326,s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57328,path,resolvers,c__4521__auto__,size__4522__auto__,b__57327,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__58344 = (i__57326 + (1));
i__57326 = G__58344;
continue;
} else {
var G__58345 = (i__57326 + (1));
i__57326 = G__58345;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57327),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324(cljs.core.chunk_rest(s__57325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57327),null);
}
} else {
var vec__57345 = cljs.core.first(s__57325__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57345,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57345,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57345,path,resolvers,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324_$_iter__57348(s__57349){
return (new cljs.core.LazySeq(null,((function (s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57345,path,resolvers,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (){
var s__57349__$1 = s__57349;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57349__$1);
if(temp__5720__auto____$2){
var s__57349__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57349__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57349__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57351 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57350 = (0);
while(true){
if((i__57350 < size__4522__auto__)){
var vec__57352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57350);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57352,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57352,(1),null);
cljs.core.chunk_append(b__57351,(function (){var G__57355 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57356 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57355,G__57356) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57355,G__57356));
})());

var G__58369 = (i__57350 + (1));
i__57350 = G__58369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57351),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324_$_iter__57348(cljs.core.chunk_rest(s__57349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57351),null);
}
} else {
var vec__57357 = cljs.core.first(s__57349__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57357,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57357,(1),null);
return cljs.core.cons((function (){var G__57360 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57361 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57360,G__57361) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57360,G__57361));
})(),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324_$_iter__57348(cljs.core.rest(s__57349__$2)));
}
} else {
return null;
}
break;
}
});})(s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57345,path,resolvers,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,null,null));
});})(s__57325__$1,s__57269__$1,path_SINGLEQUOTE_,vec__57345,path,resolvers,s__57325__$2,temp__5720__auto____$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__57268_$_iter__57324(cljs.core.rest(s__57325__$2)));
} else {
var G__58370 = cljs.core.rest(s__57325__$2);
s__57325__$1 = G__58370;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__57269__$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,null,null));
});})(s__57269__$1,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (p1__57247_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57247_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (p1__57246_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57246_SHARP_,(0),((function (s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
);
});})(s__57269__$1,iter__4523__auto__,direct_QMARK_,vec__57317,input,v,s__57269__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,v)));
})():null)], 0)),com$wsscode$pathom$viz$index_explorer$iter__57268(cljs.core.rest(s__57269__$2)));
} else {
var G__58371 = cljs.core.rest(s__57269__$2);
s__57269__$1 = G__58371;
continue;
}
}
} else {
return null;
}
break;
}
});})(nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
,null,null));
});})(nested_reaches_QMARK_,G__57266,map__57264,map__57264__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57254,_STAR_depth_STAR__orig_val__57255,_STAR_shared_STAR__orig_val__57256,_STAR_instrument_STAR__orig_val__57257,_STAR_parent_STAR__orig_val__57258,_STAR_reconciler_STAR__temp_val__57259,_STAR_depth_STAR__temp_val__57260,_STAR_shared_STAR__temp_val__57261,_STAR_instrument_STAR__temp_val__57262,_STAR_parent_STAR__temp_val__57263,this$,this__43444__auto__,x57253_58323))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str,com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),attr_reach_via)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57266,G__57267) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57266,G__57267));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57258;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57257;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57256;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57255;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57254;
}});})(x57253_58323))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.fulcro$isComponent = true;

var x57362_58372 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;
x57362_58372.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57362_58372.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57362_58372){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57362_58372))
;

x57362_58372.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57362_58372.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57362_58372){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x57362_58372))
;


var x57363_58373 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x57363_58373.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57363_58373.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57363_58373){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57363_58373))
;

x57363_58373.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57363_58373.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57363_58373){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x57363_58373))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationParamIn(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57366_58374 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
var G__57367_58375 = React.Component.prototype;
var G__57368_58376 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57366_58374,G__57367_58375,G__57368_58376);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationParamIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn",768684351),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);

var x57369_58377 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x57369_58377.render = ((function (x57369_58377){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57370 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57371 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57372 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57373 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57374 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57375 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57376 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57377 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57378 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57379 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57375;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57376;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57377;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57378;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57379;

try{var map__57380 = fulcro.client.primitives.props(this$);
var map__57380__$1 = (((((!((map__57380 == null))))?(((((map__57380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57380):map__57380);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57380__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57382 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Param In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_param_in)], null);
var G__57383 = (function (){var iter__4523__auto__ = ((function (G__57382,map__57380,map__57380__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57370,_STAR_depth_STAR__orig_val__57371,_STAR_shared_STAR__orig_val__57372,_STAR_instrument_STAR__orig_val__57373,_STAR_parent_STAR__orig_val__57374,_STAR_reconciler_STAR__temp_val__57375,_STAR_depth_STAR__temp_val__57376,_STAR_shared_STAR__temp_val__57377,_STAR_instrument_STAR__temp_val__57378,_STAR_parent_STAR__temp_val__57379,this$,this__43444__auto__,x57369_58377){
return (function com$wsscode$pathom$viz$index_explorer$iter__57384(s__57385){
return (new cljs.core.LazySeq(null,((function (G__57382,map__57380,map__57380__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57370,_STAR_depth_STAR__orig_val__57371,_STAR_shared_STAR__orig_val__57372,_STAR_instrument_STAR__orig_val__57373,_STAR_parent_STAR__orig_val__57374,_STAR_reconciler_STAR__temp_val__57375,_STAR_depth_STAR__temp_val__57376,_STAR_shared_STAR__temp_val__57377,_STAR_instrument_STAR__temp_val__57378,_STAR_parent_STAR__temp_val__57379,this$,this__43444__auto__,x57369_58377){
return (function (){
var s__57385__$1 = s__57385;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57385__$1);
if(temp__5720__auto__){
var s__57385__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57385__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57385__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57387 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57386 = (0);
while(true){
if((i__57386 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57386);
cljs.core.chunk_append(b__57387,(function (){var G__57388 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57389 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57388,G__57389) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57388,G__57389));
})());

var G__58378 = (i__57386 + (1));
i__57386 = G__58378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57387),com$wsscode$pathom$viz$index_explorer$iter__57384(cljs.core.chunk_rest(s__57385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57387),null);
}
} else {
var sym = cljs.core.first(s__57385__$2);
return cljs.core.cons((function (){var G__57390 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57391 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57390,G__57391) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57390,G__57391));
})(),com$wsscode$pathom$viz$index_explorer$iter__57384(cljs.core.rest(s__57385__$2)));
}
} else {
return null;
}
break;
}
});})(G__57382,map__57380,map__57380__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57370,_STAR_depth_STAR__orig_val__57371,_STAR_shared_STAR__orig_val__57372,_STAR_instrument_STAR__orig_val__57373,_STAR_parent_STAR__orig_val__57374,_STAR_reconciler_STAR__temp_val__57375,_STAR_depth_STAR__temp_val__57376,_STAR_shared_STAR__temp_val__57377,_STAR_instrument_STAR__temp_val__57378,_STAR_parent_STAR__temp_val__57379,this$,this__43444__auto__,x57369_58377))
,null,null));
});})(G__57382,map__57380,map__57380__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57370,_STAR_depth_STAR__orig_val__57371,_STAR_shared_STAR__orig_val__57372,_STAR_instrument_STAR__orig_val__57373,_STAR_parent_STAR__orig_val__57374,_STAR_reconciler_STAR__temp_val__57375,_STAR_depth_STAR__temp_val__57376,_STAR_shared_STAR__temp_val__57377,_STAR_instrument_STAR__temp_val__57378,_STAR_parent_STAR__temp_val__57379,this$,this__43444__auto__,x57369_58377))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_param_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57382,G__57383) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57382,G__57383));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57374;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57373;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57372;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57371;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57370;
}});})(x57369_58377))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.fulcro$isComponent = true;

var x57392_58379 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;
x57392_58379.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57392_58379.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57392_58379){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57392_58379))
;

x57392_58379.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57392_58379.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57392_58379){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x57392_58379))
;


var x57393_58380 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x57393_58380.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57393_58380.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57393_58380){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57393_58380))
;

x57393_58380.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57393_58380.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57393_58380){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x57393_58380))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationOutputIn(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57396_58381 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
var G__57397_58382 = React.Component.prototype;
var G__57398_58383 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57396_58381,G__57397_58382,G__57398_58383);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationOutputIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn",304871094),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);

var x57399_58384 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x57399_58384.render = ((function (x57399_58384){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57400 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57401 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57402 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57403 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57404 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57405 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57406 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57407 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57408 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57409 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57405;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57406;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57407;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57408;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57409;

try{var map__57410 = fulcro.client.primitives.props(this$);
var map__57410__$1 = (((((!((map__57410 == null))))?(((((map__57410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57410):map__57410);
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57410__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57412 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_output_in)], null);
var G__57413 = (function (){var iter__4523__auto__ = ((function (G__57412,map__57410,map__57410__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57400,_STAR_depth_STAR__orig_val__57401,_STAR_shared_STAR__orig_val__57402,_STAR_instrument_STAR__orig_val__57403,_STAR_parent_STAR__orig_val__57404,_STAR_reconciler_STAR__temp_val__57405,_STAR_depth_STAR__temp_val__57406,_STAR_shared_STAR__temp_val__57407,_STAR_instrument_STAR__temp_val__57408,_STAR_parent_STAR__temp_val__57409,this$,this__43444__auto__,x57399_58384){
return (function com$wsscode$pathom$viz$index_explorer$iter__57414(s__57415){
return (new cljs.core.LazySeq(null,((function (G__57412,map__57410,map__57410__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57400,_STAR_depth_STAR__orig_val__57401,_STAR_shared_STAR__orig_val__57402,_STAR_instrument_STAR__orig_val__57403,_STAR_parent_STAR__orig_val__57404,_STAR_reconciler_STAR__temp_val__57405,_STAR_depth_STAR__temp_val__57406,_STAR_shared_STAR__temp_val__57407,_STAR_instrument_STAR__temp_val__57408,_STAR_parent_STAR__temp_val__57409,this$,this__43444__auto__,x57399_58384){
return (function (){
var s__57415__$1 = s__57415;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57415__$1);
if(temp__5720__auto__){
var s__57415__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57415__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57415__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57417 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57416 = (0);
while(true){
if((i__57416 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57416);
cljs.core.chunk_append(b__57417,(function (){var G__57418 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57419 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57418,G__57419) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57418,G__57419));
})());

var G__58385 = (i__57416 + (1));
i__57416 = G__58385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57417),com$wsscode$pathom$viz$index_explorer$iter__57414(cljs.core.chunk_rest(s__57415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57417),null);
}
} else {
var sym = cljs.core.first(s__57415__$2);
return cljs.core.cons((function (){var G__57420 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57421 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57420,G__57421) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57420,G__57421));
})(),com$wsscode$pathom$viz$index_explorer$iter__57414(cljs.core.rest(s__57415__$2)));
}
} else {
return null;
}
break;
}
});})(G__57412,map__57410,map__57410__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57400,_STAR_depth_STAR__orig_val__57401,_STAR_shared_STAR__orig_val__57402,_STAR_instrument_STAR__orig_val__57403,_STAR_parent_STAR__orig_val__57404,_STAR_reconciler_STAR__temp_val__57405,_STAR_depth_STAR__temp_val__57406,_STAR_shared_STAR__temp_val__57407,_STAR_instrument_STAR__temp_val__57408,_STAR_parent_STAR__temp_val__57409,this$,this__43444__auto__,x57399_58384))
,null,null));
});})(G__57412,map__57410,map__57410__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57400,_STAR_depth_STAR__orig_val__57401,_STAR_shared_STAR__orig_val__57402,_STAR_instrument_STAR__orig_val__57403,_STAR_parent_STAR__orig_val__57404,_STAR_reconciler_STAR__temp_val__57405,_STAR_depth_STAR__temp_val__57406,_STAR_shared_STAR__temp_val__57407,_STAR_instrument_STAR__temp_val__57408,_STAR_parent_STAR__temp_val__57409,this$,this__43444__auto__,x57399_58384))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57412,G__57413) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57412,G__57413));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57404;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57403;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57402;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57401;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57400;
}});})(x57399_58384))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.fulcro$isComponent = true;

var x57422_58386 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;
x57422_58386.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57422_58386.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57422_58386){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57422_58386))
;

x57422_58386.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57422_58386.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57422_58386){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x57422_58386))
;


var x57423_58387 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x57423_58387.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57423_58387.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57423_58387){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57423_58387))
;

x57423_58387.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57423_58387.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57423_58387){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x57423_58387))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ExamplesPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ExamplesPanel = (function com$wsscode$pathom$viz$index_explorer$ExamplesPanel(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57426_58388 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
var G__57427_58389 = React.Component.prototype;
var G__57428_58390 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57426_58388,G__57427_58389,G__57428_58390);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ExamplesPanel","com.wsscode.pathom.viz.index-explorer/ExamplesPanel",846657103),com.wsscode.pathom.viz.index_explorer.ExamplesPanel);

var x57429_58391 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x57429_58391.render = ((function (x57429_58391){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57430 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57431 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57432 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57433 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57434 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57435 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57436 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57437 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57438 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57439 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57435;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57436;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57437;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57438;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57439;

try{var map__57440 = fulcro.client.primitives.props(this$);
var map__57440__$1 = (((((!((map__57440 == null))))?(((((map__57440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57440):map__57440);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57440__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__57442 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__57444 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__57445 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Examples"], 0));
var G__57446 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0))], 0));
var G__57447 = (function (){var G__57448 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__57444,G__57445,G__57446,map__57440,map__57440__$1,attribute,_STAR_reconciler_STAR__orig_val__57430,_STAR_depth_STAR__orig_val__57431,_STAR_shared_STAR__orig_val__57432,_STAR_instrument_STAR__orig_val__57433,_STAR_parent_STAR__orig_val__57434,_STAR_reconciler_STAR__temp_val__57435,_STAR_depth_STAR__temp_val__57436,_STAR_shared_STAR__temp_val__57437,_STAR_instrument_STAR__temp_val__57438,_STAR_parent_STAR__temp_val__57439,this$,this__43444__auto__,x57429_58391){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
});})(G__57444,G__57445,G__57446,map__57440,map__57440__$1,attribute,_STAR_reconciler_STAR__orig_val__57430,_STAR_depth_STAR__orig_val__57431,_STAR_shared_STAR__orig_val__57432,_STAR_instrument_STAR__orig_val__57433,_STAR_parent_STAR__orig_val__57434,_STAR_reconciler_STAR__temp_val__57435,_STAR_depth_STAR__temp_val__57436,_STAR_shared_STAR__temp_val__57437,_STAR_instrument_STAR__temp_val__57438,_STAR_parent_STAR__temp_val__57439,this$,this__43444__auto__,x57429_58391))
], null);
var G__57449 = fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa","fa-sync-alt"], null)], null)], 0));
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__57448,G__57449) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__57448,G__57449));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__57444,G__57445,G__57446,G__57447) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__57444,G__57445,G__57446,G__57447));
})()], null);
var G__57443 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".examples",".examples",-775726891),(function (){try{var samples = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(attribute))));
var samples__$1 = (function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(samples);
}catch (e57451){var _ = e57451;
return samples;
}})();
var iter__4523__auto__ = ((function (samples,samples__$1,G__57442,map__57440,map__57440__$1,attribute,_STAR_reconciler_STAR__orig_val__57430,_STAR_depth_STAR__orig_val__57431,_STAR_shared_STAR__orig_val__57432,_STAR_instrument_STAR__orig_val__57433,_STAR_parent_STAR__orig_val__57434,_STAR_reconciler_STAR__temp_val__57435,_STAR_depth_STAR__temp_val__57436,_STAR_shared_STAR__temp_val__57437,_STAR_instrument_STAR__temp_val__57438,_STAR_parent_STAR__temp_val__57439,this$,this__43444__auto__,x57429_58391){
return (function com$wsscode$pathom$viz$index_explorer$iter__57452(s__57453){
return (new cljs.core.LazySeq(null,((function (samples,samples__$1,G__57442,map__57440,map__57440__$1,attribute,_STAR_reconciler_STAR__orig_val__57430,_STAR_depth_STAR__orig_val__57431,_STAR_shared_STAR__orig_val__57432,_STAR_instrument_STAR__orig_val__57433,_STAR_parent_STAR__orig_val__57434,_STAR_reconciler_STAR__temp_val__57435,_STAR_depth_STAR__temp_val__57436,_STAR_shared_STAR__temp_val__57437,_STAR_instrument_STAR__temp_val__57438,_STAR_parent_STAR__temp_val__57439,this$,this__43444__auto__,x57429_58391){
return (function (){
var s__57453__$1 = s__57453;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57453__$1);
if(temp__5720__auto__){
var s__57453__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57453__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57453__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57455 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57454 = (0);
while(true){
if((i__57454 < size__4522__auto__)){
var vec__57456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57454);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57456,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57456,(1),null);
cljs.core.chunk_append(b__57455,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)));

var G__58392 = (i__57454 + (1));
i__57454 = G__58392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57455),com$wsscode$pathom$viz$index_explorer$iter__57452(cljs.core.chunk_rest(s__57453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57455),null);
}
} else {
var vec__57459 = cljs.core.first(s__57453__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57459,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57459,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)),com$wsscode$pathom$viz$index_explorer$iter__57452(cljs.core.rest(s__57453__$2)));
}
} else {
return null;
}
break;
}
});})(samples,samples__$1,G__57442,map__57440,map__57440__$1,attribute,_STAR_reconciler_STAR__orig_val__57430,_STAR_depth_STAR__orig_val__57431,_STAR_shared_STAR__orig_val__57432,_STAR_instrument_STAR__orig_val__57433,_STAR_parent_STAR__orig_val__57434,_STAR_reconciler_STAR__temp_val__57435,_STAR_depth_STAR__temp_val__57436,_STAR_shared_STAR__temp_val__57437,_STAR_instrument_STAR__temp_val__57438,_STAR_parent_STAR__temp_val__57439,this$,this__43444__auto__,x57429_58391))
,null,null));
});})(samples,samples__$1,G__57442,map__57440,map__57440__$1,attribute,_STAR_reconciler_STAR__orig_val__57430,_STAR_depth_STAR__orig_val__57431,_STAR_shared_STAR__orig_val__57432,_STAR_instrument_STAR__orig_val__57433,_STAR_parent_STAR__orig_val__57434,_STAR_reconciler_STAR__temp_val__57435,_STAR_depth_STAR__temp_val__57436,_STAR_shared_STAR__temp_val__57437,_STAR_instrument_STAR__temp_val__57438,_STAR_parent_STAR__temp_val__57439,this$,this__43444__auto__,x57429_58391))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),samples__$1));
}catch (e57450){var ex = e57450;
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error generating samples:",fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.ex_message(ex)], 0))], 0));
}})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57442,G__57443) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57442,G__57443));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57434;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57433;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57432;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57431;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57430;
}});})(x57429_58391))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.fulcro$isComponent = true;

var x57462_58393 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;
x57462_58393.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57462_58393.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57462_58393){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x57462_58393))
;

x57462_58393.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57462_58393){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57462_58393))
;


var x57463_58394 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x57463_58394.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57463_58394.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57463_58394){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x57463_58394))
;

x57463_58394.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57463_58394){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57463_58394))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/ExamplesPanel");
});
com.wsscode.pathom.viz.index_explorer.examples_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ExamplesPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeGraphPanel(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57468_58395 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
var G__57469_58396 = React.Component.prototype;
var G__57470_58397 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57468_58395,G__57469_58396,G__57470_58397);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraphPanel","com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel",-658371264),com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);

var x57471_58398 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x57471_58398.render = ((function (x57471_58398){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57472 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57473 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57474 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57475 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57476 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57477 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57478 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57479 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57480 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57481 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57477;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57478;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57479;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57480;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57481;

try{var map__57482 = fulcro.client.primitives.props(this$);
var map__57482__$1 = (((((!((map__57482 == null))))?(((((map__57482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57482):map__57482);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242));
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994));
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448));
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052));
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var map__57483 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__57483__$1 = (((((!((map__57483 == null))))?(((((map__57483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57483):map__57483);
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var G__57486 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__57488 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042)], 0))], null);
var G__57489 = (function (){var G__57494 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__57495 = fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Depth"], 0));
var G__57496 = (function (){var G__57497 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),attr_depth,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__57494,G__57495,G__57488,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398){
return (function (p1__57465_SHARP_,p2__57464_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),p2__57464_SHARP_);
});})(G__57494,G__57495,G__57488,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398))
], null);
return (com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1(G__57497) : com.wsscode.pathom.viz.ui.kit.number_input.call(null,G__57497));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__57494,G__57495,G__57496) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__57494,G__57495,G__57496));
})();
var G__57490 = (function (){var G__57498 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__57488,G__57489,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),cljs.core.not(direct_reaches_QMARK_));
});})(G__57488,G__57489,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398))
], null);
var G__57499 = "Direct inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__57498,G__57499) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__57498,G__57499));
})();
var G__57491 = (function (){var G__57500 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__57488,G__57489,G__57490,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),cljs.core.not(nested_reaches_QMARK_));
});})(G__57488,G__57489,G__57490,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398))
], null);
var G__57501 = "Nested inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__57500,G__57501) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__57500,G__57501));
})();
var G__57492 = (function (){var G__57502 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__57488,G__57489,G__57490,G__57491,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),cljs.core.not(direct_provides_QMARK_));
});})(G__57488,G__57489,G__57490,G__57491,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398))
], null);
var G__57503 = "Direct outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__57502,G__57503) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__57502,G__57503));
})();
var G__57493 = (function (){var G__57504 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__57488,G__57489,G__57490,G__57491,G__57492,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),cljs.core.not(nested_provides_QMARK_));
});})(G__57488,G__57489,G__57490,G__57491,G__57492,map__57482,map__57482__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__57483,map__57483__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__57472,_STAR_depth_STAR__orig_val__57473,_STAR_shared_STAR__orig_val__57474,_STAR_instrument_STAR__orig_val__57475,_STAR_parent_STAR__orig_val__57476,_STAR_reconciler_STAR__temp_val__57477,_STAR_depth_STAR__temp_val__57478,_STAR_shared_STAR__temp_val__57479,_STAR_instrument_STAR__temp_val__57480,_STAR_parent_STAR__temp_val__57481,this$,this__43444__auto__,x57471_58398))
], null);
var G__57505 = "Nested outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__57504,G__57505) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__57504,G__57505));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6(G__57488,G__57489,G__57490,G__57491,G__57492,G__57493) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__57488,G__57489,G__57490,G__57491,G__57492,G__57493));
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","scrollbars?","com.wsscode.pathom.viz.ui.kit/scrollbars?",1389911780),false], null);
var G__57487 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph",".graph",-327673667),(function (){var shared_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),direct_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),nested_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),direct_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),nested_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),interconnections_QMARK_], null);
var G__57506 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),com.wsscode.pathom.viz.index_explorer.attribute_network(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),attr_depth,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes], null),shared_options], 0)),attribute),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),graph_comm], null),shared_options], 0));
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__57506) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__57506));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57486,G__57487) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57486,G__57487));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57476;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57475;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57474;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57473;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57472;
}});})(x57471_58398))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.fulcro$isComponent = true;

var x57507_58399 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;
x57507_58399.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57507_58399.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57507_58399){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x57507_58399))
;

x57507_58399.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57507_58399){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57507_58399))
;

x57507_58399.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57507_58399.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57507_58399){
return (function (this$,p__57508){
var map__57509 = p__57508;
var map__57509__$1 = (((((!((map__57509 == null))))?(((((map__57509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57509):map__57509);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57509__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57509__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x57507_58399))
;

x57507_58399.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57507_58399.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57507_58399){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57507_58399))
;

x57507_58399.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57507_58399.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57507_58399){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x57507_58399))
;


var x57511_58400 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x57511_58400.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57511_58400.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57511_58400){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x57511_58400))
;

x57511_58400.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57511_58400){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57511_58400))
;

x57511_58400.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57511_58400.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57511_58400){
return (function (this$,p__57512){
var map__57513 = p__57512;
var map__57513__$1 = (((((!((map__57513 == null))))?(((((map__57513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57513):map__57513);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x57511_58400))
;

x57511_58400.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57511_58400.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57511_58400){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57511_58400))
;

x57511_58400.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57511_58400.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57511_58400){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x57511_58400))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeView = (function com$wsscode$pathom$viz$index_explorer$AttributeView(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57520_58401 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
var G__57521_58402 = React.Component.prototype;
var G__57522_58403 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57520_58401,G__57521_58402,G__57522_58403);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeView","com.wsscode.pathom.viz.index-explorer/AttributeView",1769179789),com.wsscode.pathom.viz.index_explorer.AttributeView);

var x57523_58404 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x57523_58404.render = ((function (x57523_58404){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57524 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57525 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57526 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57527 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57528 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57529 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57530 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57531 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57532 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57533 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57529;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57530;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57531;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57532;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57533;

try{var map__57534 = fulcro.client.primitives.props(this$);
var map__57534__$1 = (((((!((map__57534 == null))))?(((((map__57534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57534):map__57534);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var provides_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755));
var provides_tree_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325));
var attr_input_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var show_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552));
var mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271));
var attr_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610));
var reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword(">","reach-via",">/reach-via",725397135));
var graph_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737));
var mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], 0)),(function (){var G__57536 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),show_graph_QMARK_,new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669)], 0)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),cljs.core.not(show_graph_QMARK_));
});})(computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
], null);
var G__57537 = "Graph View";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__57536,G__57537) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__57536,G__57537));
})()], 0)),(cljs.core.truth_(show_graph_QMARK_)?(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(graph_panel,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,graph_panel,computed__$1)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".columns$scrollbars",".columns$scrollbars",-1170212651),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list",".data-list",949465177),((cljs.core.seq(attr_reach_via))?(com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2(reach_via,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.call(null,reach_via,computed__$1)):null),((cljs.core.seq(attr_output_in))?(function (){var G__57538 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_output_in)], null);
var G__57539 = (function (){var iter__4523__auto__ = ((function (G__57538,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function com$wsscode$pathom$viz$index_explorer$iter__57540(s__57541){
return (new cljs.core.LazySeq(null,((function (G__57538,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function (){
var s__57541__$1 = s__57541;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57541__$1);
if(temp__5720__auto__){
var s__57541__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57541__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57541__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57543 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57542 = (0);
while(true){
if((i__57542 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57542);
cljs.core.chunk_append(b__57543,(function (){var G__57544 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57545 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57544,G__57545) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57544,G__57545));
})());

var G__58405 = (i__57542 + (1));
i__57542 = G__58405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57543),com$wsscode$pathom$viz$index_explorer$iter__57540(cljs.core.chunk_rest(s__57541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57543),null);
}
} else {
var resolver = cljs.core.first(s__57541__$2);
return cljs.core.cons((function (){var G__57546 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57547 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57546,G__57547) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57546,G__57547));
})(),com$wsscode$pathom$viz$index_explorer$iter__57540(cljs.core.rest(s__57541__$2)));
}
} else {
return null;
}
break;
}
});})(G__57538,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
,null,null));
});})(G__57538,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57538,G__57539) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57538,G__57539));
})():null),((cljs.core.seq(attr_combinations))?(function (){var G__57548 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input Combinations",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_combinations)], null);
var G__57549 = (function (){var iter__4523__auto__ = ((function (G__57548,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function com$wsscode$pathom$viz$index_explorer$iter__57550(s__57551){
return (new cljs.core.LazySeq(null,((function (G__57548,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function (){
var s__57551__$1 = s__57551;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57551__$1);
if(temp__5720__auto__){
var s__57551__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57551__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57551__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57553 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57552 = (0);
while(true){
if((i__57552 < size__4522__auto__)){
var input = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57552);
cljs.core.chunk_append(b__57553,(function (){var G__57554 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null);
var G__57555 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57554,G__57555) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57554,G__57555));
})());

var G__58406 = (i__57552 + (1));
i__57552 = G__58406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57553),com$wsscode$pathom$viz$index_explorer$iter__57550(cljs.core.chunk_rest(s__57551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57553),null);
}
} else {
var input = cljs.core.first(s__57551__$2);
return cljs.core.cons((function (){var G__57556 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null);
var G__57557 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57556,G__57557) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57556,G__57557));
})(),com$wsscode$pathom$viz$index_explorer$iter__57550(cljs.core.rest(s__57551__$2)));
}
} else {
return null;
}
break;
}
});})(G__57548,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
,null,null));
});})(G__57548,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort),com.wsscode.pathom.viz.helpers.vector_compare,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,G__57548,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function (p1__57517_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),p1__57517_SHARP_);
});})(iter__4523__auto__,G__57548,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
,attr_combinations)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57548,G__57549) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57548,G__57549));
})():null),((cljs.core.seq(attr_mutation_param_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2(mutation_param_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.call(null,mutation_param_in,computed__$1)):null),((cljs.core.seq(attr_mutation_output_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2(mutation_output_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.call(null,mutation_output_in,computed__$1)):null),(function (){var temp__5718__auto__ = com.wsscode.spec_inspec.safe_form(attribute);
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__57558 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Spec"], null);
var G__57559 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57558,G__57559) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57558,G__57559));
})(),(function (){var G__57560 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__57561 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2(G__57560,G__57561) : com.wsscode.pathom.viz.index_explorer.examples_panel.call(null,G__57560,G__57561));
})()], 0));
} else {
return null;
}
})(),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-attr-left-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-attr-left-menu",-1946076893))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),((cljs.core.seq(attr_provides))?(function (){var G__57562 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Provides",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_provides)], null);
var G__57563 = (function (){var G__57564 = provides_tree;
var G__57565 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),provides_tree_source,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),((function (G__57564,G__57562,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function (p__57566){
var map__57567 = p__57566;
var map__57567__$1 = (((((!((map__57567 == null))))?(((((map__57567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57567):map__57567);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57567__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sym_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57567__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
var G__57569 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-container",".links-container",-1347961892)], 0))], null);
var G__57570 = (function (){var G__57572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__57573 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57572,G__57573) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57572,G__57573));
})();
var G__57571 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-display",".links-display",-2102960556)], 0))], null),(function (){var iter__4523__auto__ = ((function (G__57569,G__57570,map__57567,map__57567__$1,key,sym_set,G__57564,G__57562,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function com$wsscode$pathom$viz$index_explorer$iter__57574(s__57575){
return (new cljs.core.LazySeq(null,((function (G__57569,G__57570,map__57567,map__57567__$1,key,sym_set,G__57564,G__57562,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function (){
var s__57575__$1 = s__57575;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57575__$1);
if(temp__5720__auto__){
var s__57575__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57575__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57575__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57577 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57576 = (0);
while(true){
if((i__57576 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57576);
cljs.core.chunk_append(b__57577,(function (){var G__57578 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57579 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57578,G__57579) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57578,G__57579));
})());

var G__58407 = (i__57576 + (1));
i__57576 = G__58407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57577),com$wsscode$pathom$viz$index_explorer$iter__57574(cljs.core.chunk_rest(s__57575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57577),null);
}
} else {
var sym = cljs.core.first(s__57575__$2);
return cljs.core.cons((function (){var G__57580 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57581 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57580,G__57581) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57580,G__57581));
})(),com$wsscode$pathom$viz$index_explorer$iter__57574(cljs.core.rest(s__57575__$2)));
}
} else {
return null;
}
break;
}
});})(G__57569,G__57570,map__57567,map__57567__$1,key,sym_set,G__57564,G__57562,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
,null,null));
});})(G__57569,G__57570,map__57567,map__57567__$1,key,sym_set,G__57564,G__57562,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(sym_set));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__57569,G__57570,G__57571) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__57569,G__57570,G__57571));
});})(G__57564,G__57562,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__57564,G__57565) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__57564,G__57565));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57562,G__57563) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57562,G__57563));
})():null),((cljs.core.seq(attr_input_in))?(function (){var G__57582 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_input_in)], null);
var G__57583 = (function (){var iter__4523__auto__ = ((function (G__57582,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function com$wsscode$pathom$viz$index_explorer$iter__57584(s__57585){
return (new cljs.core.LazySeq(null,((function (G__57582,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404){
return (function (){
var s__57585__$1 = s__57585;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57585__$1);
if(temp__5720__auto__){
var s__57585__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57585__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57585__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57587 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57586 = (0);
while(true){
if((i__57586 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57586);
cljs.core.chunk_append(b__57587,(function (){var G__57588 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57589 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57588,G__57589) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57588,G__57589));
})());

var G__58408 = (i__57586 + (1));
i__57586 = G__58408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57587),com$wsscode$pathom$viz$index_explorer$iter__57584(cljs.core.chunk_rest(s__57585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57587),null);
}
} else {
var resolver = cljs.core.first(s__57585__$2);
return cljs.core.cons((function (){var G__57590 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57591 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57590,G__57591) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57590,G__57591));
})(),com$wsscode$pathom$viz$index_explorer$iter__57584(cljs.core.rest(s__57585__$2)));
}
} else {
return null;
}
break;
}
});})(G__57582,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
,null,null));
});})(G__57582,computed__$1,map__57534,map__57534__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57524,_STAR_depth_STAR__orig_val__57525,_STAR_shared_STAR__orig_val__57526,_STAR_instrument_STAR__orig_val__57527,_STAR_parent_STAR__orig_val__57528,_STAR_reconciler_STAR__temp_val__57529,_STAR_depth_STAR__temp_val__57530,_STAR_shared_STAR__temp_val__57531,_STAR_instrument_STAR__temp_val__57532,_STAR_parent_STAR__temp_val__57533,this$,this__43444__auto__,x57523_58404))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_input_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57582,G__57583) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57582,G__57583));
})():null)], 0))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57528;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57527;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57526;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57525;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57524;
}});})(x57523_58404))
;

x57523_58404.initLocalState = ((function (x57523_58404){
return (function (){
var this$ = this;
var ret__43419__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x57523_58404){
return (function (p__57592){
var map__57593 = p__57592;
var map__57593__$1 = (((((!((map__57593 == null))))?(((((map__57593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57593):map__57593);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57593__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__57595 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__57595__$1 = (((((!((map__57595 == null))))?(((((map__57595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57595):map__57595);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57595__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__57597 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__57597) : on_select_resolver.call(null,G__57597));
});})(this$,x57523_58404))
], null);
var obj57599 = ({"fulcro$state":ret__43419__auto__});
return obj57599;
});})(x57523_58404))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeView;

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.fulcro$isComponent = true;

var x57600_58409 = com.wsscode.pathom.viz.index_explorer.AttributeView;
x57600_58409.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57600_58409.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57600_58409){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x57600_58409))
;

x57600_58409.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57600_58409){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x57600_58409))
;

x57600_58409.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57600_58409.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57600_58409){
return (function (this$,p__57601){
var map__57602 = p__57601;
var map__57602__$1 = (((((!((map__57602 == null))))?(((((map__57602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57602):map__57602);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57602__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57602__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var attr = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
var attr_provides = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),false,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree,(cljs.core.truth_(attr_provides)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325),com.wsscode.pathom.viz.index_explorer.attr_provides__GT_tree(attr_provides)], null):null)], 0));
});})(x57600_58409))
;

x57600_58409.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57600_58409.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57600_58409){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57600_58409))
;

x57600_58409.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57600_58409.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57600_58409){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x57600_58409))
;


var x57604_58410 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x57604_58410.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57604_58410.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57604_58410){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x57604_58410))
;

x57604_58410.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57604_58410){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x57604_58410))
;

x57604_58410.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57604_58410.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57604_58410){
return (function (this$,p__57605){
var map__57606 = p__57605;
var map__57606__$1 = (((((!((map__57606 == null))))?(((((map__57606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57606):map__57606);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57606__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57606__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var attr = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
var attr_provides = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),false,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree,(cljs.core.truth_(attr_provides)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325),com.wsscode.pathom.viz.index_explorer.attr_provides__GT_tree(attr_provides)], null):null)], 0));
});})(x57604_58410))
;

x57604_58410.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57604_58410.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57604_58410){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57604_58410))
;

x57604_58410.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57604_58410.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57604_58410){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x57604_58410))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.AttributeView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.attribute_view = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null));
com.wsscode.pathom.viz.index_explorer.out_all_attributes = (function com$wsscode$pathom$viz$index_explorer$out_all_attributes(p__57608,input){
var map__57609 = p__57608;
var map__57609__$1 = (((((!((map__57609 == null))))?(((((map__57609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57609):map__57609);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__57609,map__57609__$1,children){
return (function (attrs,p__57611){
var map__57612 = p__57611;
var map__57612__$1 = (((((!((map__57612 == null))))?(((((map__57612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57612):map__57612);
var node = map__57612__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57612__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__57614 = ((cljs.core.contains_QMARK_(input,key))?attrs:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key));
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__57614,(com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2(node,input) : com.wsscode.pathom.viz.index_explorer.out_all_attributes.call(null,node,input)));
} else {
return G__57614;
}
});})(map__57609,map__57609__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverView = (function com$wsscode$pathom$viz$index_explorer$ResolverView(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57618_58411 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
var G__57619_58412 = React.Component.prototype;
var G__57620_58413 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57618_58411,G__57619_58412,G__57620_58413);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverView","com.wsscode.pathom.viz.index-explorer/ResolverView",1233559847),com.wsscode.pathom.viz.index_explorer.ResolverView);

var x57621_58414 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x57621_58414.render = ((function (x57621_58414){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57622 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57623 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57624 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57625 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57626 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57627 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57628 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57629 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57630 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57631 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57627;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57628;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57629;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57630;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57631;

try{var map__57632 = fulcro.client.primitives.props(this$);
var map__57632__$1 = (((((!((map__57632 == null))))?(((((map__57632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57632):map__57632);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343));
var map__57633 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__57633__$1 = (((((!((map__57633 == null))))?(((((map__57633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57633):map__57633);
var computed = map__57633__$1;
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57633__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57633__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.index_explorer.ResolverView);
var input_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input)))?cljs.core.first(input):input);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__57636 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__57637 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__57638 = (function (){var G__57639 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__57640 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),(cljs.core.truth_(batch_QMARK_)?(function (){var G__57642 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Batch"], null);
var G__57643 = "True";
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57642,G__57643) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57642,G__57643));
})():null),(cljs.core.truth_(input)?(function (){var G__57644 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input"], null);
var G__57645 = (function (){var G__57646 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input_SINGLEQUOTE_], null);
var G__57647 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57646,G__57647) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57646,G__57647));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57644,G__57645) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57644,G__57645));
})():null),(cljs.core.truth_(output)?(function (){var G__57648 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__57649 = (function (){var G__57650 = output_tree;
var G__57651 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword(null,"children","children",-940561982),((function (G__57650,G__57648,G__57639,G__57636,G__57637,input_SINGLEQUOTE_,computed__$1,map__57632,map__57632__$1,sym,input,output,batch_QMARK_,output_tree,map__57633,map__57633__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__57622,_STAR_depth_STAR__orig_val__57623,_STAR_shared_STAR__orig_val__57624,_STAR_instrument_STAR__orig_val__57625,_STAR_parent_STAR__orig_val__57626,_STAR_reconciler_STAR__temp_val__57627,_STAR_depth_STAR__temp_val__57628,_STAR_shared_STAR__temp_val__57629,_STAR_instrument_STAR__temp_val__57630,_STAR_parent_STAR__temp_val__57631,this$,this__43444__auto__,x57621_58414){
return (function (p1__57615_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.Keyword(null,"key","key",-1516042587)),p1__57615_SHARP_);
});})(G__57650,G__57648,G__57639,G__57636,G__57637,input_SINGLEQUOTE_,computed__$1,map__57632,map__57632__$1,sym,input,output,batch_QMARK_,output_tree,map__57633,map__57633__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__57622,_STAR_depth_STAR__orig_val__57623,_STAR_shared_STAR__orig_val__57624,_STAR_instrument_STAR__orig_val__57625,_STAR_parent_STAR__orig_val__57626,_STAR_reconciler_STAR__temp_val__57627,_STAR_depth_STAR__temp_val__57628,_STAR_shared_STAR__temp_val__57629,_STAR_instrument_STAR__temp_val__57630,_STAR_parent_STAR__temp_val__57631,this$,this__43444__auto__,x57621_58414))
),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__57650,G__57651) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__57650,G__57651));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57648,G__57649) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57648,G__57649));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-resolver-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-resolver-menu",-1265412227))], 0));
var G__57641 = (cljs.core.truth_(input)?(function (){var resolver_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.out_all_attributes(edn_query_language.core.query__GT_ast(output),input),input_SINGLEQUOTE_);
var attrs = cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.select_keys(com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),resolver_attrs),input_SINGLEQUOTE_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
var G__57652 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318))], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__57652) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__57652));
})():null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__57639,G__57640,G__57641) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__57639,G__57640,G__57641));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__57636,G__57637,G__57638) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__57636,G__57637,G__57638));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57626;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57625;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57624;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57623;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57622;
}});})(x57621_58414))
;

x57621_58414.initLocalState = ((function (x57621_58414){
return (function (){
var this$ = this;
var ret__43419__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x57621_58414){
return (function (p__57653){
var map__57654 = p__57653;
var map__57654__$1 = (((((!((map__57654 == null))))?(((((map__57654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57654):map__57654);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57654__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__57656 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__57656__$1 = (((((!((map__57656 == null))))?(((((map__57656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57656):map__57656);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57656__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__57658 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__57658) : on_select_resolver.call(null,G__57658));
});})(this$,x57621_58414))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x57621_58414){
return (function (p__57659){
var map__57660 = p__57659;
var map__57660__$1 = (((((!((map__57660 == null))))?(((((map__57660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57660):map__57660);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57660__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__57662 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__57663 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57662,G__57663) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57662,G__57663));
});})(this$,x57621_58414))
], null);
var obj57665 = ({"fulcro$state":ret__43419__auto__});
return obj57665;
});})(x57621_58414))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverView;

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.fulcro$isComponent = true;

var x57666_58415 = com.wsscode.pathom.viz.index_explorer.ResolverView;
x57666_58415.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57666_58415.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57666_58415){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x57666_58415))
;

x57666_58415.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57666_58415){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57666_58415))
;

x57666_58415.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57666_58415.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57666_58415){
return (function (this$,p__57667){
var map__57668 = p__57667;
var map__57668__$1 = (((((!((map__57668 == null))))?(((((map__57668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57668):map__57668);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57668__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57668__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x57666_58415))
;

x57666_58415.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57666_58415.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57666_58415){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57666_58415))
;

x57666_58415.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57666_58415.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57666_58415){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x57666_58415))
;


var x57670_58416 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x57670_58416.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57670_58416.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57670_58416){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x57670_58416))
;

x57670_58416.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57670_58416){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57670_58416))
;

x57670_58416.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57670_58416.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57670_58416){
return (function (this$,p__57671){
var map__57672 = p__57671;
var map__57672__$1 = (((((!((map__57672 == null))))?(((((map__57672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57672):map__57672);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57672__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57672__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x57670_58416))
;

x57670_58416.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57670_58416.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57670_58416){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57670_58416))
;

x57670_58416.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57670_58416.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57670_58416){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x57670_58416))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.ResolverView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.resolver_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationView = (function com$wsscode$pathom$viz$index_explorer$MutationView(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57676_58417 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
var G__57677_58418 = React.Component.prototype;
var G__57678_58419 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57676_58417,G__57677_58418,G__57678_58419);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationView","com.wsscode.pathom.viz.index-explorer/MutationView",1198577335),com.wsscode.pathom.viz.index_explorer.MutationView);

var x57679_58420 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x57679_58420.render = ((function (x57679_58420){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57680 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57681 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57682 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57683 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57684 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57685 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57686 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57687 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57688 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57689 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57685;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57686;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57687;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57688;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57689;

try{var map__57690 = fulcro.client.primitives.props(this$);
var map__57690__$1 = (((((!((map__57690 == null))))?(((((map__57690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57690):map__57690);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57690__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57690__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57690__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var mutation_params_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57690__$1,new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365));
var mutation_output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57690__$1,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980));
var G__57692 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__57693 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__57694 = (function (){var G__57695 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120),new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447)], 0));
var G__57696 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(params)?(function (){var G__57699 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Params"], null);
var G__57700 = (function (){var G__57701 = mutation_params_tree;
var G__57702 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(params),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__57701,G__57702) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__57701,G__57702));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57699,G__57700) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57699,G__57700));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-left","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-left",-356992926))], 0));
var G__57697 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0));
var G__57698 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(output)?(function (){var G__57703 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__57704 = (function (){var G__57705 = mutation_output_tree;
var G__57706 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__57705,G__57706) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__57705,G__57706));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57703,G__57704) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57703,G__57704));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-right","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-right",1791875010))], 0));
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__57695,G__57696,G__57697,G__57698) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__57695,G__57696,G__57697,G__57698));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__57692,G__57693,G__57694) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__57692,G__57693,G__57694));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57684;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57683;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57682;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57681;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57680;
}});})(x57679_58420))
;

x57679_58420.initLocalState = ((function (x57679_58420){
return (function (){
var this$ = this;
var ret__43419__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x57679_58420){
return (function (p__57707){
var map__57708 = p__57707;
var map__57708__$1 = (((((!((map__57708 == null))))?(((((map__57708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57708):map__57708);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57708__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__57710 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__57711 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57710,G__57711) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57710,G__57711));
});})(this$,x57679_58420))
], null);
var obj57713 = ({"fulcro$state":ret__43419__auto__});
return obj57713;
});})(x57679_58420))
;


com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationView;

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.fulcro$isComponent = true;

var x57714_58421 = com.wsscode.pathom.viz.index_explorer.MutationView;
x57714_58421.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57714_58421.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57714_58421){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57714_58421))
;

x57714_58421.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57714_58421){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57714_58421))
;

x57714_58421.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57714_58421.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57714_58421){
return (function (this$,p__57715){
var map__57716 = p__57715;
var map__57716__$1 = (((((!((map__57716 == null))))?(((((map__57716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57716):map__57716);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57716__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57716__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x57714_58421))
;

x57714_58421.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57714_58421.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57714_58421){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57714_58421))
;

x57714_58421.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57714_58421.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57714_58421){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x57714_58421))
;


var x57718_58422 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x57718_58422.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57718_58422.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57718_58422){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57718_58422))
;

x57718_58422.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57718_58422){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57718_58422))
;

x57718_58422.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57718_58422.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57718_58422){
return (function (this$,p__57719){
var map__57720 = p__57719;
var map__57720__$1 = (((((!((map__57720 == null))))?(((((map__57720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57720):map__57720);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57720__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57720__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x57718_58422))
;

x57718_58422.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57718_58422.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57718_58422){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57718_58422))
;

x57718_58422.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57718_58422.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57718_58422){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x57718_58422))
;


com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/MutationView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.MutationView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.mutation_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
com.wsscode.pathom.viz.index_explorer.realize_references = (function com$wsscode$pathom$viz$index_explorer$realize_references(state,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57722_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__57722_SHARP_);
}),coll);
});
com.wsscode.pathom.viz.index_explorer.max_search_results = (100);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-index-item","com.wsscode.pathom.viz.index-explorer/search-index-item",-560879594),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__57723){
return cljs.core.map_QMARK_(G__57723);
}),(function (G__57723){
return cljs.core.contains_QMARK_(G__57723,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
}),(function (G__57723){
return cljs.core.contains_QMARK_(G__57723,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
}),(function (G__57723){
return cljs.core.contains_QMARK_(G__57723,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
})], null),(function (G__57723){
return ((cljs.core.map_QMARK_(G__57723)) && (cljs.core.contains_QMARK_(G__57723,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))) && (cljs.core.contains_QMARK_(G__57723,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))) && (cljs.core.contains_QMARK_(G__57723,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)])));
com.wsscode.pathom.viz.index_explorer.active_search_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$active_search_QMARK_(text){
return (cljs.core.count(text) > (2));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),(function (fulcro_incoming_env,_,p__57724){
var map__57725 = p__57724;
var map__57725__$1 = (((((!((map__57725 == null))))?(((((map__57725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57725):map__57725);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57725__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__57727 = fulcro_incoming_env;
var map__57727__$1 = (((((!((map__57727 == null))))?(((((map__57727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57727):map__57727);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57727,map__57727__$1,ref,state,map__57725,map__57725__$1,text){
return (function (){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935)));
var fuzzy_res = ((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),items,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),text], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.SearchEverything,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.max_search_results,fuzzy_res))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),text], 0));
});})(map__57727,map__57727__$1,ref,state,map__57725,map__57725__$1,text))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.remove_not_found = (function com$wsscode$pathom$viz$index_explorer$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__57729){
var vec__57730 = p__57729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57730,(1),null);
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),null], null), null),v);
})),x);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllAttributesList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllAttributesList = (function com$wsscode$pathom$viz$index_explorer$AllAttributesList(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57735_58423 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
var G__57736_58424 = React.Component.prototype;
var G__57737_58425 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57735_58423,G__57736_58424,G__57737_58425);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllAttributesList","com.wsscode.pathom.viz.index-explorer/AllAttributesList",741873297),com.wsscode.pathom.viz.index_explorer.AllAttributesList);

var x57738_58426 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
x57738_58426.render = ((function (x57738_58426){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57739 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57740 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57741 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57742 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57743 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57744 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57745 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57746 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57747 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57748 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57744;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57745;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57746;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57747;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57748;

try{var map__57749 = fulcro.client.primitives.props(this$);
var map__57749__$1 = (((((!((map__57749 == null))))?(((((map__57749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57749):map__57749);
var props = map__57749__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57749__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57751 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Attributes");
var G__57752 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__57753 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null);
var G__57754 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57753,G__57754) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57753,G__57754));
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__57751,map__57749,map__57749__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__57739,_STAR_depth_STAR__orig_val__57740,_STAR_shared_STAR__orig_val__57741,_STAR_instrument_STAR__orig_val__57742,_STAR_parent_STAR__orig_val__57743,_STAR_reconciler_STAR__temp_val__57744,_STAR_depth_STAR__temp_val__57745,_STAR_shared_STAR__temp_val__57746,_STAR_instrument_STAR__temp_val__57747,_STAR_parent_STAR__temp_val__57748,this$,this__43444__auto__,x57738_58426){
return (function (p__57755){
var map__57756 = p__57755;
var map__57756__$1 = (((((!((map__57756 == null))))?(((((map__57756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57756):map__57756);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57756__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__57758 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], null);
var G__57759 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57758,G__57759) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57758,G__57759));
});})(G__57751,map__57749,map__57749__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__57739,_STAR_depth_STAR__orig_val__57740,_STAR_shared_STAR__orig_val__57741,_STAR_instrument_STAR__orig_val__57742,_STAR_parent_STAR__orig_val__57743,_STAR_reconciler_STAR__temp_val__57744,_STAR_depth_STAR__temp_val__57745,_STAR_shared_STAR__temp_val__57746,_STAR_instrument_STAR__temp_val__57747,_STAR_parent_STAR__temp_val__57748,this$,this__43444__auto__,x57738_58426))
)),attributes)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__57751,G__57752) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__57751,G__57752));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57743;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57742;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57741;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57740;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57739;
}});})(x57738_58426))
;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllAttributesList;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.fulcro$isComponent = true;

var x57760_58427 = com.wsscode.pathom.viz.index_explorer.AllAttributesList;


var x57761_58428 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AllAttributesList");
});
com.wsscode.pathom.viz.index_explorer.all_attributes_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllAttributesList);
com.wsscode.pathom.viz.index_explorer.last_value = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllResolversList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllResolversList = (function com$wsscode$pathom$viz$index_explorer$AllResolversList(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57765_58429 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
var G__57766_58430 = React.Component.prototype;
var G__57767_58431 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57765_58429,G__57766_58430,G__57767_58431);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllResolversList","com.wsscode.pathom.viz.index-explorer/AllResolversList",1219737218),com.wsscode.pathom.viz.index_explorer.AllResolversList);

var x57768_58432 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
x57768_58432.render = ((function (x57768_58432){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57769 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57770 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57771 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57772 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57773 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57774 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57775 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57776 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57777 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57778 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57774;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57775;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57776;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57777;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57778;

try{var map__57779 = fulcro.client.primitives.props(this$);
var map__57779__$1 = (((((!((map__57779 == null))))?(((((map__57779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57779):map__57779);
var props = map__57779__$1;
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57779__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57781 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Resolvers");
var G__57782 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__57781,map__57779,map__57779__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__57769,_STAR_depth_STAR__orig_val__57770,_STAR_shared_STAR__orig_val__57771,_STAR_instrument_STAR__orig_val__57772,_STAR_parent_STAR__orig_val__57773,_STAR_reconciler_STAR__temp_val__57774,_STAR_depth_STAR__temp_val__57775,_STAR_shared_STAR__temp_val__57776,_STAR_instrument_STAR__temp_val__57777,_STAR_parent_STAR__temp_val__57778,this$,this__43444__auto__,x57768_58432){
return (function (p1__57762_SHARP_){
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(p1__57762_SHARP_,computed) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,p1__57762_SHARP_,computed));
});})(G__57781,map__57779,map__57779__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__57769,_STAR_depth_STAR__orig_val__57770,_STAR_shared_STAR__orig_val__57771,_STAR_instrument_STAR__orig_val__57772,_STAR_parent_STAR__orig_val__57773,_STAR_reconciler_STAR__temp_val__57774,_STAR_depth_STAR__temp_val__57775,_STAR_shared_STAR__temp_val__57776,_STAR_instrument_STAR__temp_val__57777,_STAR_parent_STAR__temp_val__57778,this$,this__43444__auto__,x57768_58432))
,resolvers)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__57781,G__57782) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__57781,G__57782));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57773;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57772;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57771;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57770;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57769;
}});})(x57768_58432))
;


com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllResolversList;

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.fulcro$isComponent = true;

var x57783_58433 = com.wsscode.pathom.viz.index_explorer.AllResolversList;


var x57784_58434 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;


com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AllResolversList");
});
com.wsscode.pathom.viz.index_explorer.all_resolvers_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllResolversList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllMutationsList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllMutationsList = (function com$wsscode$pathom$viz$index_explorer$AllMutationsList(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57788_58435 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
var G__57789_58436 = React.Component.prototype;
var G__57790_58437 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57788_58435,G__57789_58436,G__57790_58437);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllMutationsList","com.wsscode.pathom.viz.index-explorer/AllMutationsList",-1767454340),com.wsscode.pathom.viz.index_explorer.AllMutationsList);

var x57791_58438 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
x57791_58438.render = ((function (x57791_58438){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57792 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57793 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57794 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57795 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57796 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57797 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57798 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57799 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57800 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57801 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57797;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57798;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57799;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57800;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57801;

try{var map__57802 = fulcro.client.primitives.props(this$);
var map__57802__$1 = (((((!((map__57802 == null))))?(((((map__57802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57802):map__57802);
var props = map__57802__$1;
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57802__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Mutations");
var G__57805 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__57804,map__57802,map__57802__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__57792,_STAR_depth_STAR__orig_val__57793,_STAR_shared_STAR__orig_val__57794,_STAR_instrument_STAR__orig_val__57795,_STAR_parent_STAR__orig_val__57796,_STAR_reconciler_STAR__temp_val__57797,_STAR_depth_STAR__temp_val__57798,_STAR_shared_STAR__temp_val__57799,_STAR_instrument_STAR__temp_val__57800,_STAR_parent_STAR__temp_val__57801,this$,this__43444__auto__,x57791_58438){
return (function (p1__57785_SHARP_){
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(p1__57785_SHARP_,computed) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,p1__57785_SHARP_,computed));
});})(G__57804,map__57802,map__57802__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__57792,_STAR_depth_STAR__orig_val__57793,_STAR_shared_STAR__orig_val__57794,_STAR_instrument_STAR__orig_val__57795,_STAR_parent_STAR__orig_val__57796,_STAR_reconciler_STAR__temp_val__57797,_STAR_depth_STAR__temp_val__57798,_STAR_shared_STAR__temp_val__57799,_STAR_instrument_STAR__temp_val__57800,_STAR_parent_STAR__temp_val__57801,this$,this__43444__auto__,x57791_58438))
,mutations)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__57804,G__57805) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__57804,G__57805));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57796;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57795;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57794;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57793;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57792;
}});})(x57791_58438))
;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllMutationsList;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.fulcro$isComponent = true;

var x57806_58439 = com.wsscode.pathom.viz.index_explorer.AllMutationsList;


var x57807_58440 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AllMutationsList");
});
com.wsscode.pathom.viz.index_explorer.all_mutations_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllMutationsList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.SearchEverything !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.SearchEverything = (function com$wsscode$pathom$viz$index_explorer$SearchEverything(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57811_58441 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
var G__57812_58442 = React.Component.prototype;
var G__57813_58443 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57811_58441,G__57812_58442,G__57813_58443);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","SearchEverything","com.wsscode.pathom.viz.index-explorer/SearchEverything",384463028),com.wsscode.pathom.viz.index_explorer.SearchEverything);

var x57814_58444 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x57814_58444.render = ((function (x57814_58444){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57815 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57816 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57817 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57818 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57819 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57820 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57821 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57822 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57823 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57824 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57820;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57821;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57822;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57823;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57824;

try{var map__57825 = fulcro.client.primitives.props(this$);
var map__57825__$1 = (((((!((map__57825 == null))))?(((((map__57825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57825):map__57825);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var collapse_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
var collapse_resolvers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
var collapse_mutations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57827 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__57828 = (function (){var G__57830 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","left-icon","com.wsscode.pathom.viz.ui.kit/left-icon",-1594855964),new cljs.core.Keyword(null,"$fa-search","$fa-search",1999917289),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-clear","com.wsscode.pathom.viz.ui.kit/on-clear",-221492596),((function (G__57827,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"");
});})(G__57827,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444))
], null);
return (com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1(G__57830) : com.wsscode.pathom.viz.ui.kit.text_field.call(null,G__57830));
})();
var G__57829 = (function (){var G__57831 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0));
var G__57832 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((!(com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))))?"none":null)], null)], null),((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444){
return (function (p__57834){
var map__57835 = p__57834;
var map__57835__$1 = (((((!((map__57835 == null))))?(((((map__57835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57835):map__57835);
var search_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57835__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
var search_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57835__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
var match_hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57835__$1,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739));
var G__57837 = search_type;
var G__57837__$1 = (((G__57837 instanceof cljs.core.Keyword))?G__57837.fqn:null);
switch (G__57837__$1) {
case "com.wsscode.pathom.viz.index-explorer/search-type-attribute":
var G__57838 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__57837,G__57837__$1,map__57835,map__57835__$1,search_value,search_type,match_hl,G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__57837,G__57837__$1,map__57835,map__57835__$1,search_value,search_type,match_hl,G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444))
], null);
var G__57839 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57838,G__57839) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57838,G__57839));

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-resolver":
var G__57840 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__57837,G__57837__$1,map__57835,map__57835__$1,search_value,search_type,match_hl,G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__57837,G__57837__$1,map__57835,map__57835__$1,search_value,search_type,match_hl,G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444))
], null);
var G__57841 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57840,G__57841) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57840,G__57841));

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-mutation":
var G__57842 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__57837,G__57837__$1,map__57835,map__57835__$1,search_value,search_type,match_hl,G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__57837,G__57837__$1,map__57835,map__57835__$1,search_value,search_type,match_hl,G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444))
], null);
var G__57843 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57842,G__57843) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57842,G__57843));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57837__$1)].join('')));

}
});})(G__57831,G__57827,G__57828,map__57825,map__57825__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__57815,_STAR_depth_STAR__orig_val__57816,_STAR_shared_STAR__orig_val__57817,_STAR_instrument_STAR__orig_val__57818,_STAR_parent_STAR__orig_val__57819,_STAR_reconciler_STAR__temp_val__57820,_STAR_depth_STAR__temp_val__57821,_STAR_shared_STAR__temp_val__57822,_STAR_instrument_STAR__temp_val__57823,_STAR_parent_STAR__temp_val__57824,this$,this__43444__auto__,x57814_58444))
)),search_results):null)], 0));
var G__57833 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((cljs.core.count(text) > (2)))?"none":null)], null)], null),(function (){var G__57844 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_attributes_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782))], null);
var G__57845 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2(G__57844,G__57845) : com.wsscode.pathom.viz.index_explorer.all_attributes_list.call(null,G__57844,G__57845));
})(),(function (){var G__57846 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_resolvers_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560))], null);
var G__57847 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2(G__57846,G__57847) : com.wsscode.pathom.viz.index_explorer.all_resolvers_list.call(null,G__57846,G__57847));
})(),(function (){var G__57848 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),mutations,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_mutations_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814))], null);
var G__57849 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2(G__57848,G__57849) : com.wsscode.pathom.viz.index_explorer.all_mutations_list.call(null,G__57848,G__57849));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__57831,G__57832,G__57833) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__57831,G__57832,G__57833));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__57827,G__57828,G__57829) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__57827,G__57828,G__57829));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57819;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57818;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57817;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57816;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57815;
}});})(x57814_58444))
;

x57814_58444.initLocalState = ((function (x57814_58444){
return (function (){
var this$ = this;
var ret__43419__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),((function (this$,x57814_58444){
return (function (p1__57808_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.viz.helpers.target_value(p1__57808_SHARP_),null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x57814_58444))
,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782),((function (this$,x57814_58444){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
});})(this$,x57814_58444))
,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560),((function (this$,x57814_58444){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
});})(this$,x57814_58444))
,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814),((function (this$,x57814_58444){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
});})(this$,x57814_58444))
,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),(function (){var props = fulcro.client.primitives.props(this$);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__57850 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null);
var G__57851 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57850,G__57851) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57850,G__57851));
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (props,computed,this$,x57814_58444){
return (function (p__57852){
var map__57853 = p__57852;
var map__57853__$1 = (((((!((map__57853 == null))))?(((((map__57853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57853):map__57853);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57853__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__57855 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__57856 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57855,G__57856) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57855,G__57856));
});})(props,computed,this$,x57814_58444))
)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281).cljs$core$IFn$_invoke$arity$1(props))], 0));
})()], null);
var obj57858 = ({"fulcro$state":ret__43419__auto__});
return obj57858;
});})(x57814_58444))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor = com.wsscode.pathom.viz.index_explorer.SearchEverything;

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.fulcro$isComponent = true;

var x57859_58446 = com.wsscode.pathom.viz.index_explorer.SearchEverything;
x57859_58446.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57859_58446.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57859_58446){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x57859_58446))
;

x57859_58446.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57859_58446){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57859_58446))
;

x57859_58446.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57859_58446.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57859_58446){
return (function (this$,p__57860){
var map__57861 = p__57860;
var map__57861__$1 = (((((!((map__57861 == null))))?(((((map__57861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57861):map__57861);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57861__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x57859_58446))
;

x57859_58446.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57859_58446.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57859_58446){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57859_58446))
;

x57859_58446.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57859_58446.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57859_58446){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x57859_58446))
;


var x57863_58447 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x57863_58447.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57863_58447.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57863_58447){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x57863_58447))
;

x57863_58447.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57863_58447){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57863_58447))
;

x57863_58447.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57863_58447.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57863_58447){
return (function (this$,p__57864){
var map__57865 = p__57864;
var map__57865__$1 = (((((!((map__57865 == null))))?(((((map__57865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57865):map__57865);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x57863_58447))
;

x57863_58447.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57863_58447.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57863_58447){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57863_58447))
;

x57863_58447.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57863_58447.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57863_58447){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x57863_58447))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/SearchEverything");
});
com.wsscode.pathom.viz.index_explorer.search_everything = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeMismatchPanel(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57869_58448 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
var G__57870_58449 = React.Component.prototype;
var G__57871_58450 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57869_58448,G__57870_58449,G__57871_58450);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeMismatchPanel","com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel",653731723),com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);

var x57872_58451 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x57872_58451.render = ((function (x57872_58451){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57873 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57874 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57875 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57876 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57877 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57878 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57879 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57880 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57881 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57882 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57878;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57879;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57880;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57881;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57882;

try{var map__57883 = fulcro.client.primitives.props(this$);
var map__57883__$1 = (((((!((map__57883 == null))))?(((((map__57883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57883):map__57883);
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57883__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var attr_mismatch_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57883__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57885 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Attributes with type mismatch"], null);
var G__57886 = (function (){var iter__4523__auto__ = ((function (G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function com$wsscode$pathom$viz$index_explorer$iter__57887(s__57888){
return (new cljs.core.LazySeq(null,((function (G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function (){
var s__57888__$1 = s__57888;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57888__$1);
if(temp__5720__auto__){
var s__57888__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57888__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57888__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57890 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57889 = (0);
while(true){
if((i__57889 < size__4522__auto__)){
var map__57891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57889);
var map__57891__$1 = (((((!((map__57891 == null))))?(((((map__57891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57891):map__57891);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
cljs.core.chunk_append(b__57890,(function (){var G__57893 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (i__57889,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(i__57889,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),(function (){var G__57895 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__57896 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57895,G__57896) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57895,G__57896));
})()], null);
var G__57894 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57897(s__57898){
return (new cljs.core.LazySeq(null,((function (i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function (){
var s__57898__$1 = s__57898;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57898__$1);
if(temp__5720__auto____$1){
var s__57898__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57898__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57898__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57900 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57899 = (0);
while(true){
if((i__57899 < size__4522__auto____$1)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57899);
cljs.core.chunk_append(b__57900,(function (){var G__57901 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57902 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57901,G__57902) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57901,G__57902));
})());

var G__58452 = (i__57899 + (1));
i__57899 = G__58452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57900),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57897(cljs.core.chunk_rest(s__57898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57900),null);
}
} else {
var resolver = cljs.core.first(s__57898__$2);
return cljs.core.cons((function (){var G__57903 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57904 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57903,G__57904) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57903,G__57904));
})(),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57897(cljs.core.rest(s__57898__$2)));
}
} else {
return null;
}
break;
}
});})(i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
,null,null));
});})(i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57905(s__57906){
return (new cljs.core.LazySeq(null,((function (i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function (){
var s__57906__$1 = s__57906;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57906__$1);
if(temp__5720__auto____$1){
var s__57906__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57906__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57906__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57908 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57907 = (0);
while(true){
if((i__57907 < size__4522__auto____$1)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57907);
cljs.core.chunk_append(b__57908,(function (){var G__57909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57910 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57909,G__57910) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57909,G__57910));
})());

var G__58453 = (i__57907 + (1));
i__57907 = G__58453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57908),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57905(cljs.core.chunk_rest(s__57906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57908),null);
}
} else {
var resolver = cljs.core.first(s__57906__$2);
return cljs.core.cons((function (){var G__57911 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57912 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57911,G__57912) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57911,G__57912));
})(),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57905(cljs.core.rest(s__57906__$2)));
}
} else {
return null;
}
break;
}
});})(i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
,null,null));
});})(i__57889,G__57893,map__57891,map__57891__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__57890,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__57893,G__57894) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__57893,G__57894));
})());

var G__58454 = (i__57889 + (1));
i__57889 = G__58454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57890),com$wsscode$pathom$viz$index_explorer$iter__57887(cljs.core.chunk_rest(s__57888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57890),null);
}
} else {
var map__57913 = cljs.core.first(s__57888__$2);
var map__57913__$1 = (((((!((map__57913 == null))))?(((((map__57913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57913):map__57913);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57913__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57913__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57913__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
return cljs.core.cons((function (){var G__57915 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),(function (){var G__57917 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__57918 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57917,G__57918) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57917,G__57918));
})()], null);
var G__57916 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57919(s__57920){
return (new cljs.core.LazySeq(null,((function (G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function (){
var s__57920__$1 = s__57920;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57920__$1);
if(temp__5720__auto____$1){
var s__57920__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57920__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57920__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57922 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57921 = (0);
while(true){
if((i__57921 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57921);
cljs.core.chunk_append(b__57922,(function (){var G__57923 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57924 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57923,G__57924) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57923,G__57924));
})());

var G__58455 = (i__57921 + (1));
i__57921 = G__58455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57922),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57919(cljs.core.chunk_rest(s__57920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57922),null);
}
} else {
var resolver = cljs.core.first(s__57920__$2);
return cljs.core.cons((function (){var G__57925 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57926 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57925,G__57926) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57925,G__57926));
})(),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57919(cljs.core.rest(s__57920__$2)));
}
} else {
return null;
}
break;
}
});})(G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
,null,null));
});})(G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57927(s__57928){
return (new cljs.core.LazySeq(null,((function (G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451){
return (function (){
var s__57928__$1 = s__57928;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57928__$1);
if(temp__5720__auto____$1){
var s__57928__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57928__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57928__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57930 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57929 = (0);
while(true){
if((i__57929 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57929);
cljs.core.chunk_append(b__57930,(function (){var G__57931 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57932 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57931,G__57932) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57931,G__57932));
})());

var G__58456 = (i__57929 + (1));
i__57929 = G__58456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57930),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57927(cljs.core.chunk_rest(s__57928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57930),null);
}
} else {
var resolver = cljs.core.first(s__57928__$2);
return cljs.core.cons((function (){var G__57933 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__57934 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__57933,G__57934) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__57933,G__57934));
})(),com$wsscode$pathom$viz$index_explorer$iter__57887_$_iter__57927(cljs.core.rest(s__57928__$2)));
}
} else {
return null;
}
break;
}
});})(G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
,null,null));
});})(G__57915,map__57913,map__57913__$1,attribute,attr_leaf_in,attr_branch_in,s__57888__$2,temp__5720__auto__,G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__57915,G__57916) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__57915,G__57916));
})(),com$wsscode$pathom$viz$index_explorer$iter__57887(cljs.core.rest(s__57888__$2)));
}
} else {
return null;
}
break;
}
});})(G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
,null,null));
});})(G__57885,map__57883,map__57883__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__57873,_STAR_depth_STAR__orig_val__57874,_STAR_shared_STAR__orig_val__57875,_STAR_instrument_STAR__orig_val__57876,_STAR_parent_STAR__orig_val__57877,_STAR_reconciler_STAR__temp_val__57878,_STAR_depth_STAR__temp_val__57879,_STAR_shared_STAR__temp_val__57880,_STAR_instrument_STAR__temp_val__57881,_STAR_parent_STAR__temp_val__57882,this$,this__43444__auto__,x57872_58451))
;
return iter__4523__auto__(attr_type_mismatch);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57885,G__57886) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57885,G__57886));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57877;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57876;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57875;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57874;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57873;
}});})(x57872_58451))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.fulcro$isComponent = true;

var x57935_58457 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;
x57935_58457.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57935_58457.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57935_58457){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x57935_58457))
;

x57935_58457.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57935_58457){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57935_58457))
;

x57935_58457.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57935_58457.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57935_58457){
return (function (this$,p__57936){
var map__57937 = p__57936;
var map__57937__$1 = (((((!((map__57937 == null))))?(((((map__57937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57937):map__57937);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57937__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57937__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x57935_58457))
;

x57935_58457.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57935_58457.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57935_58457){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57935_58457))
;

x57935_58457.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57935_58457.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57935_58457){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x57935_58457))
;


var x57939_58458 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x57939_58458.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57939_58458.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57939_58458){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x57939_58458))
;

x57939_58458.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57939_58458){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57939_58458))
;

x57939_58458.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57939_58458.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57939_58458){
return (function (this$,p__57940){
var map__57941 = p__57940;
var map__57941__$1 = (((((!((map__57941 == null))))?(((((map__57941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57941):map__57941);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57941__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57941__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x57939_58458))
;

x57939_58458.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57939_58458.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57939_58458){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57939_58458))
;

x57939_58458.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57939_58458.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57939_58458){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x57939_58458))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.StatsView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.StatsView = (function com$wsscode$pathom$viz$index_explorer$StatsView(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57945_58459 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
var G__57946_58460 = React.Component.prototype;
var G__57947_58461 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57945_58459,G__57946_58460,G__57947_58461);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","StatsView","com.wsscode.pathom.viz.index-explorer/StatsView",1030504264),com.wsscode.pathom.viz.index_explorer.StatsView);

var x57948_58462 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x57948_58462.render = ((function (x57948_58462){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__57949 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57950 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57951 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57952 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57953 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57954 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__57955 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__57956 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__57957 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__57958 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57954;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57955;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57956;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57957;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57958;

try{var map__57959 = fulcro.client.primitives.props(this$);
var map__57959__$1 = (((((!((map__57959 == null))))?(((((map__57959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57959):map__57959);
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957));
var mutation_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737));
var top_connection_hubs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657));
var attr_type_mismatch_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640));
var idents_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333));
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var resolver_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099));
var globals_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019));
var attr_edges_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0)),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Stats"], 0)),(function (){var G__57961 = cljs.core.PersistentArrayMap.EMPTY;
var G__57962 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__57964 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Counters"], null);
var G__57965 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attribute count: ",attribute_count], 0));
var G__57966 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resolver count: ",resolver_count], 0));
var G__57967 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation count: ",mutation_count], 0));
var G__57968 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Globals count: ",globals_count], 0));
var G__57969 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Idents count: ",idents_count], 0));
var G__57970 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edges count: ",attr_edges_count], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7(G__57964,G__57965,G__57966,G__57967,G__57968,G__57969,G__57970) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57964,G__57965,G__57966,G__57967,G__57968,G__57969,G__57970));
})(),(function (){var G__57971 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Most Connected Attributes"], null);
var G__57972 = (function (){var iter__4523__auto__ = ((function (G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462){
return (function com$wsscode$pathom$viz$index_explorer$iter__57973(s__57974){
return (new cljs.core.LazySeq(null,((function (G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462){
return (function (){
var s__57974__$1 = s__57974;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57974__$1);
if(temp__5720__auto__){
var s__57974__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57974__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57974__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57976 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57975 = (0);
while(true){
if((i__57975 < size__4522__auto__)){
var map__57977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57975);
var map__57977__$1 = (((((!((map__57977 == null))))?(((((map__57977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57977):map__57977);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57977__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57977__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
cljs.core.chunk_append(b__57976,(function (){var G__57979 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__57975,map__57977,map__57977__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__57976,s__57974__$2,temp__5720__auto__,G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(i__57975,map__57977,map__57977__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__57976,s__57974__$2,temp__5720__auto__,G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462))
], null);
var G__57980 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57979,G__57980) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57979,G__57980));
})());

var G__58463 = (i__57975 + (1));
i__57975 = G__58463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57976),com$wsscode$pathom$viz$index_explorer$iter__57973(cljs.core.chunk_rest(s__57974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57976),null);
}
} else {
var map__57981 = cljs.core.first(s__57974__$2);
var map__57981__$1 = (((((!((map__57981 == null))))?(((((map__57981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57981):map__57981);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57981__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57981__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
return cljs.core.cons((function (){var G__57983 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (map__57981,map__57981__$1,attribute,attr_edges_count__$1,s__57974__$2,temp__5720__auto__,G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(map__57981,map__57981__$1,attribute,attr_edges_count__$1,s__57974__$2,temp__5720__auto__,G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462))
], null);
var G__57984 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57983,G__57984) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57983,G__57984));
})(),com$wsscode$pathom$viz$index_explorer$iter__57973(cljs.core.rest(s__57974__$2)));
}
} else {
return null;
}
break;
}
});})(G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462))
,null,null));
});})(G__57971,G__57961,map__57959,map__57959__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__57949,_STAR_depth_STAR__orig_val__57950,_STAR_shared_STAR__orig_val__57951,_STAR_instrument_STAR__orig_val__57952,_STAR_parent_STAR__orig_val__57953,_STAR_reconciler_STAR__temp_val__57954,_STAR_depth_STAR__temp_val__57955,_STAR_shared_STAR__temp_val__57956,_STAR_instrument_STAR__temp_val__57957,_STAR_parent_STAR__temp_val__57958,this$,this__43444__auto__,x57948_58462))
;
return iter__4523__auto__(top_connection_hubs);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57971,G__57972) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57971,G__57972));
})()], 0));
var G__57963 = ((cljs.core.seq(attr_type_mismatch))?fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2(attr_type_mismatch_join,computed) : com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.call(null,attr_type_mismatch_join,computed))], 0))], 0)):null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__57961,G__57962,G__57963) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__57961,G__57962,G__57963));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57953;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57952;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57951;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57950;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57949;
}});})(x57948_58462))
;


com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.StatsView;

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.fulcro$isComponent = true;

var x57985_58464 = com.wsscode.pathom.viz.index_explorer.StatsView;
x57985_58464.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57985_58464.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57985_58464){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57985_58464))
;

x57985_58464.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57985_58464){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57985_58464))
;

x57985_58464.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57985_58464.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57985_58464){
return (function (this$,p__57986){
var map__57987 = p__57986;
var map__57987__$1 = (((((!((map__57987 == null))))?(((((map__57987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57987):map__57987);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57987__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57987__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),current_normalized,data_tree], 0));
});})(x57985_58464))
;

x57985_58464.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57985_58464.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57985_58464){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57985_58464))
;

x57985_58464.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57985_58464.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57985_58464){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x57985_58464))
;


var x57989_58465 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x57989_58465.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57989_58465.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57989_58465){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57989_58465))
;

x57989_58465.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57989_58465){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57989_58465))
;

x57989_58465.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x57989_58465.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x57989_58465){
return (function (this$,p__57990){
var map__57991 = p__57990;
var map__57991__$1 = (((((!((map__57991 == null))))?(((((map__57991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57991):map__57991);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),current_normalized,data_tree], 0));
});})(x57989_58465))
;

x57989_58465.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57989_58465.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57989_58465){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57989_58465))
;

x57989_58465.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57989_58465.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57989_58465){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x57989_58465))
;


com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/StatsView");
});
com.wsscode.pathom.viz.index_explorer.stats_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.FullGraphView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.FullGraphView = (function com$wsscode$pathom$viz$index_explorer$FullGraphView(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__57996_58466 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
var G__57997_58467 = React.Component.prototype;
var G__57998_58468 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57996_58466,G__57997_58467,G__57998_58468);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","FullGraphView","com.wsscode.pathom.viz.index-explorer/FullGraphView",1989996895),com.wsscode.pathom.viz.index_explorer.FullGraphView);

var x57999_58469 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x57999_58469.render = ((function (x57999_58469){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__58000 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58001 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58002 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58003 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58004 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58005 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__58006 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__58007 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__58008 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__58009 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58005;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58006;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58007;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58008;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58009;

try{var _ = fulcro.client.primitives.props(this$);
var map__58010 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__58010__$1 = (((((!((map__58010 == null))))?(((((map__58010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58010):map__58010);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58010__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58010__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58010__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__58012 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944)], 0))], null);
var G__58013 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Full Graph"], 0));
var G__58014 = (function (){var G__58015 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),((function (G__58012,G__58013,_,map__58010,map__58010__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__58000,_STAR_depth_STAR__orig_val__58001,_STAR_shared_STAR__orig_val__58002,_STAR_instrument_STAR__orig_val__58003,_STAR_parent_STAR__orig_val__58004,_STAR_reconciler_STAR__temp_val__58005,_STAR_depth_STAR__temp_val__58006,_STAR_shared_STAR__temp_val__58007,_STAR_instrument_STAR__temp_val__58008,_STAR_parent_STAR__temp_val__58009,this$,this__43444__auto__,x57999_58469){
return (function (p1__57993_SHARP_){
var G__58016 = cljs.core.first(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669).cljs$core$IFn$_invoke$arity$1(p1__57993_SHARP_));
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__58016) : on_select_resolver.call(null,G__58016));
});})(G__58012,G__58013,_,map__58010,map__58010__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__58000,_STAR_depth_STAR__orig_val__58001,_STAR_shared_STAR__orig_val__58002,_STAR_instrument_STAR__orig_val__58003,_STAR_parent_STAR__orig_val__58004,_STAR_reconciler_STAR__temp_val__58005,_STAR_depth_STAR__temp_val__58006,_STAR_shared_STAR__temp_val__58007,_STAR_instrument_STAR__temp_val__58008,_STAR_parent_STAR__temp_val__58009,this$,this__43444__auto__,x57999_58469))
], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__58015) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__58015));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58012,G__58013,G__58014) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58012,G__58013,G__58014));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58004;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58003;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58002;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58001;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58000;
}});})(x57999_58469))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.FullGraphView;

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.fulcro$isComponent = true;

var x58017_58470 = com.wsscode.pathom.viz.index_explorer.FullGraphView;
x58017_58470.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58017_58470.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58017_58470){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58017_58470))
;

x58017_58470.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58017_58470){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58017_58470))
;

x58017_58470.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58017_58470.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58017_58470){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58017_58470))
;

x58017_58470.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58017_58470.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58017_58470){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x58017_58470))
;


var x58018_58471 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x58018_58471.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58018_58471.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58018_58471){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58018_58471))
;

x58018_58471.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58018_58471){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58018_58471))
;

x58018_58471.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58018_58471.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58018_58471){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58018_58471))
;

x58018_58471.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58018_58471.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58018_58471){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x58018_58471))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/FullGraphView");
});
com.wsscode.pathom.viz.index_explorer.full_graph_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView);
com.wsscode.pathom.viz.index_explorer.prop_presence_ident = (function com$wsscode$pathom$viz$index_explorer$prop_presence_ident(props){
return (function (data){
var or__4131__auto__ = cljs.core.some((function (p1__58019_SHARP_){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__58019_SHARP_);
if((temp__5722__auto__ == null)){
return null;
} else {
var val = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58019_SHARP_,val], null);
}
}),props);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalid","invalid",412869516),"ident"], null);
}
});
});
com.wsscode.pathom.viz.index_explorer.main_view_ident = com.wsscode.pathom.viz.index_explorer.prop_presence_ident(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MainViewUnion !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MainViewUnion = (function com$wsscode$pathom$viz$index_explorer$MainViewUnion(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__58022_58472 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
var G__58023_58473 = React.Component.prototype;
var G__58024_58474 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58022_58472,G__58023_58473,G__58024_58474);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MainViewUnion","com.wsscode.pathom.viz.index-explorer/MainViewUnion",280346003),com.wsscode.pathom.viz.index_explorer.MainViewUnion);

var x58025_58475 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x58025_58475.render = ((function (x58025_58475){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__58026 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58027 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58028 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58029 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58030 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58031 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__58032 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__58033 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__58034 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__58035 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58031;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58032;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58033;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58034;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58035;

try{var props = fulcro.client.primitives.props(this$);
var G__58036 = cljs.core.first(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__58036__$1 = (((G__58036 instanceof cljs.core.Keyword))?G__58036.fqn:null);
switch (G__58036__$1) {
case "com.wsscode.pathom.connect/attribute":
return (com.wsscode.pathom.viz.index_explorer.attribute_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.attribute_view.call(null,props));

break;
case "com.wsscode.pathom.connect/sym":
return (com.wsscode.pathom.viz.index_explorer.resolver_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.resolver_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.resolver_view.call(null,props));

break;
case "com.wsscode.pathom.viz.index-explorer/mutation-sym":
return (com.wsscode.pathom.viz.index_explorer.mutation_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.mutation_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.mutation_view.call(null,props));

break;
case "com.wsscode.pathom.viz.index-explorer/id":
return (com.wsscode.pathom.viz.index_explorer.stats_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.stats_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.stats_view.call(null,props));

break;
case "com.wsscode.pathom.viz.index-explorer/graph-view-id":
return (com.wsscode.pathom.viz.index_explorer.full_graph_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.full_graph_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.full_graph_view.call(null,props));

break;
default:
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Blank page"], 0));

}
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58030;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58029;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58028;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58027;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58026;
}});})(x58025_58475))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MainViewUnion;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.fulcro$isComponent = true;

var x58037_58477 = com.wsscode.pathom.viz.index_explorer.MainViewUnion;
x58037_58477.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58037_58477.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58037_58477){
return (function (this$,props){
var this$__$1 = this;
return (com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,props));
});})(x58037_58477))
;

x58037_58477.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58037_58477.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58037_58477){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x58037_58477))
;


var x58038_58478 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x58038_58478.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58038_58478.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58038_58478){
return (function (this$,props){
var this$__$1 = this;
return (com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,props));
});})(x58038_58478))
;

x58038_58478.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58038_58478.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58038_58478){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x58038_58478))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/MainViewUnion");
});
com.wsscode.pathom.viz.index_explorer.main_view_union = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MainViewUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__58039_SHARP_){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__58039_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58039_SHARP_);
}
})], null));
com.wsscode.pathom.viz.index_explorer.augment = (function com$wsscode$pathom$viz$index_explorer$augment(data,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], 0));
});
com.wsscode.pathom.viz.index_explorer.compute_stats = (function com$wsscode$pathom$viz$index_explorer$compute_stats(p__58043){
var map__58044 = p__58043;
var map__58044__$1 = (((((!((map__58044 == null))))?(((((map__58044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58044):map__58044);
var data = map__58044__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var globals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),cljs.core.count(attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),cljs.core.count(resolvers),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),cljs.core.count(mutations),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),cljs.core.count(globals),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),cljs.core.count(idents),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)),cljs.core._PLUS_,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),cljs.core.filterv(((function (map__58044,map__58044__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__58040_SHARP_){
return ((cljs.core.contains_QMARK_(p1__58040_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711))) && (cljs.core.contains_QMARK_(p1__58040_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732))));
});})(map__58044,map__58044__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((30),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),((function (map__58044,map__58044__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__58042_SHARP_,p2__58041_SHARP_){
return cljs.core.compare(p2__58041_SHARP_,p1__58042_SHARP_);
});})(map__58044,map__58044__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes)))], null);
});
com.wsscode.pathom.viz.index_explorer.build_search_vector = (function com$wsscode$pathom$viz$index_explorer$build_search_vector(p__58049){
var map__58050 = p__58049;
var map__58050__$1 = (((((!((map__58050 == null))))?(((((map__58050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58050):map__58050);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58050__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58050__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58050__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58050,map__58050__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__58046_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58046_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58046_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676)]);
});})(map__58050,map__58050__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58050,map__58050__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__58047_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58047_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58047_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744)]);
});})(map__58050,map__58050__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58050,map__58050__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__58048_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__58048_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__58048_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524)]);
});})(map__58050,map__58050__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_attributes)))], 0)));
});
com.wsscode.pathom.viz.index_explorer.process_index = (function com$wsscode$pathom$viz$index_explorer$process_index(p__58054){
var map__58055 = p__58054;
var map__58055__$1 = (((((!((map__58055 == null))))?(((((map__58055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58055):map__58055);
var index = map__58055__$1;
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
var attrs = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58055,map__58055__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p__58057){
var vec__58058 = p__58057;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58058,(0),null);
var map__58061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58058,(1),null);
var map__58061__$1 = (((((!((map__58061 == null))))?(((((map__58061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58061):map__58061);
var data = map__58061__$1;
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),cljs.core.count(attr_provides),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),cljs.core.count(attr_reach_via),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_reach_via)) + cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_provides))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),cljs.core.contains_QMARK_(attr_reach_via,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),cljs.core.contains_QMARK_(idents,attr)], 0));
});})(map__58055,map__58055__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,index_attributes)));
return com.wsscode.pathom.viz.index_explorer.augment(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935),com.wsscode.pathom.viz.index_explorer.build_search_vector(index),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__58055,map__58055__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__58052_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58052_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver?","com.wsscode.pathom.viz.index-explorer/resolver?",167854159),true);
});})(attrs,map__58055,map__58055__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers)))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__58055,map__58055__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__58053_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__58053_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation?","com.wsscode.pathom.viz.index-explorer/mutation?",1568382673),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58053_SHARP_)], 0));
});})(attrs,map__58055,map__58055__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))))], null),com.wsscode.pathom.viz.index_explorer.compute_stats);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeIndex = (function com$wsscode$pathom$viz$index_explorer$AttributeIndex(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__58065_58479 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
var G__58066_58480 = React.Component.prototype;
var G__58067_58481 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58065_58479,G__58066_58480,G__58067_58481);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeIndex","com.wsscode.pathom.viz.index-explorer/AttributeIndex",-1624405224),com.wsscode.pathom.viz.index_explorer.AttributeIndex);

var x58068_58482 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x58068_58482.render = ((function (x58068_58482){
return (function (){
var this__43444__auto__ = this;
var _ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__58069 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58070 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58071 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58072 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58073 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58074 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__58075 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__58076 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__58077 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__58078 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58074;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58075;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58076;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58077;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58078;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58073;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58072;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58071;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58070;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58069;
}});})(x58068_58482))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeIndex;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.fulcro$isComponent = true;

var x58079_58483 = com.wsscode.pathom.viz.index_explorer.AttributeIndex;
x58079_58483.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58079_58483.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58079_58483){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58079_58483))
;

x58079_58483.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58079_58483.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58079_58483){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x58079_58483))
;


var x58080_58484 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x58080_58484.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58080_58484.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58080_58484){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58080_58484))
;

x58080_58484.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58080_58484.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58080_58484){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x58080_58484))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverIndex = (function com$wsscode$pathom$viz$index_explorer$ResolverIndex(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__58083_58485 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
var G__58084_58486 = React.Component.prototype;
var G__58085_58487 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58083_58485,G__58084_58486,G__58085_58487);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverIndex","com.wsscode.pathom.viz.index-explorer/ResolverIndex",-1943751145),com.wsscode.pathom.viz.index_explorer.ResolverIndex);

var x58086_58488 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x58086_58488.render = ((function (x58086_58488){
return (function (){
var this__43444__auto__ = this;
var _ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__58087 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58088 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58089 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58090 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58091 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58092 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__58093 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__58094 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__58095 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__58096 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58092;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58093;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58094;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58095;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58096;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58091;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58090;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58089;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58088;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58087;
}});})(x58086_58488))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverIndex;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.fulcro$isComponent = true;

var x58097_58489 = com.wsscode.pathom.viz.index_explorer.ResolverIndex;
x58097_58489.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58097_58489.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58097_58489){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58097_58489))
;

x58097_58489.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58097_58489.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58097_58489){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58097_58489))
;


var x58098_58490 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x58098_58490.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58098_58490.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58098_58490){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58098_58490))
;

x58098_58490.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58098_58490.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58098_58490){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58098_58490))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationIndex = (function com$wsscode$pathom$viz$index_explorer$MutationIndex(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__58101_58491 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
var G__58102_58492 = React.Component.prototype;
var G__58103_58493 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58101_58491,G__58102_58492,G__58103_58493);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationIndex","com.wsscode.pathom.viz.index-explorer/MutationIndex",21487988),com.wsscode.pathom.viz.index_explorer.MutationIndex);

var x58104_58494 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x58104_58494.render = ((function (x58104_58494){
return (function (){
var this__43444__auto__ = this;
var _ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__58105 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58106 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58107 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58108 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58109 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58110 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__58111 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__58112 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__58113 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__58114 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58110;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58111;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58112;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58113;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58114;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58109;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58108;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58107;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58106;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58105;
}});})(x58104_58494))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationIndex;

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.fulcro$isComponent = true;

var x58115_58495 = com.wsscode.pathom.viz.index_explorer.MutationIndex;
x58115_58495.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58115_58495.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58115_58495){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58115_58495))
;

x58115_58495.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58115_58495.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58115_58495){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58115_58495))
;


var x58116_58496 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x58116_58496.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58116_58496.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58116_58496){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58116_58496))
;

x58116_58496.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58116_58496.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58116_58496){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58116_58496))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/MutationIndex");
});
com.wsscode.pathom.viz.index_explorer.history_size_limit = (200);
com.wsscode.pathom.viz.index_explorer.history_append = (function com$wsscode$pathom$viz$index_explorer$history_append(p__58117,ref){
var map__58118 = p__58117;
var map__58118__$1 = (((((!((map__58118 == null))))?(((((map__58118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58118):map__58118);
var x = map__58118__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
var index = (history_index + (1));
var history_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,com.wsscode.pathom.viz.index_explorer.history_size_limit))?(1):(0)),index),ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),history_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(cljs.core.count(history_SINGLEQUOTE_) - (1)),new cljs.core.Keyword("ui","page","ui/page",849066625),ref], 0));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),(function (fulcro_incoming_env,_,p__58120){
var map__58121 = p__58120;
var map__58121__$1 = (((((!((map__58121 == null))))?(((((map__58121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58121):map__58121);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58121__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58123 = fulcro_incoming_env;
var map__58123__$1 = (((((!((map__58123 == null))))?(((((map__58123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58123):map__58123);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58123,map__58123__$1,state,ref,map__58121,map__58121__$1,attribute){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null)], 0));
});})(map__58123,map__58123__$1,state,ref,map__58121,map__58121__$1,attribute))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),(function (fulcro_incoming_env,_,p__58125){
var map__58126 = p__58125;
var map__58126__$1 = (((((!((map__58126 == null))))?(((((map__58126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58126):map__58126);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58128 = fulcro_incoming_env;
var map__58128__$1 = (((((!((map__58128 == null))))?(((((map__58128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58128):map__58128);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58128,map__58128__$1,state,ref,map__58126,map__58126__$1,sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null)], 0));
});})(map__58128,map__58128__$1,state,ref,map__58126,map__58126__$1,sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),(function (fulcro_incoming_env,_,p__58130){
var map__58131 = p__58130;
var map__58131__$1 = (((((!((map__58131 == null))))?(((((map__58131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58131):map__58131);
var mutation_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58133 = fulcro_incoming_env;
var map__58133__$1 = (((((!((map__58133 == null))))?(((((map__58133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58133):map__58133);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58133,map__58133__$1,state,ref,map__58131,map__58131__$1,mutation_sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null)], 0));
});})(map__58133,map__58133__$1,state,ref,map__58131,map__58131__$1,mutation_sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58135 = fulcro_incoming_env;
var map__58135__$1 = (((((!((map__58135 == null))))?(((((map__58135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58135):map__58135);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58135,map__58135__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0));
});})(map__58135,map__58135__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58137 = fulcro_incoming_env;
var map__58137__$1 = (((((!((map__58137 == null))))?(((((map__58137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58137):map__58137);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58137,map__58137__$1,state,ref){
return (function (){
var id = cljs.core.second(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.FullGraphView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null)], 0));
});})(map__58137,map__58137__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_back_QMARK_(p__58139){
var map__58140 = p__58139;
var map__58140__$1 = (((((!((map__58140 == null))))?(((((map__58140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58140):map__58140);
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58140__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index > (0));
});
com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_forward_QMARK_(p__58142){
var map__58143 = p__58142;
var map__58143__$1 = (((((!((map__58143 == null))))?(((((map__58143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58143):map__58143);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index < (cljs.core.count(history) - (1)));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58145 = fulcro_incoming_env;
var map__58145__$1 = (((((!((map__58145 == null))))?(((((map__58145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58145):map__58145);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58145,map__58145__$1,state,ref){
return (function (){
var map__58147 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__58147__$1 = (((((!((map__58147 == null))))?(((((map__58147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58147):map__58147);
var props = map__58147__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index - (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index - (1))], 0));
} else {
return null;
}
});})(map__58145,map__58145__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58149 = fulcro_incoming_env;
var map__58149__$1 = (((((!((map__58149 == null))))?(((((map__58149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58149):map__58149);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58149,map__58149__$1,state,ref){
return (function (){
var map__58151 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var props = map__58151__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index + (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index + (1))], 0));
} else {
return null;
}
});})(map__58149,map__58149__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.clear_not_found = (function com$wsscode$pathom$viz$index_explorer$clear_not_found(x){
return com.wsscode.pathom.core.elide_items(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.special_outputs,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912)),x);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.IndexExplorer !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.IndexExplorer = (function com$wsscode$pathom$viz$index_explorer$IndexExplorer(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__58158_58497 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
var G__58159_58498 = React.Component.prototype;
var G__58160_58499 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58158_58497,G__58159_58498,G__58160_58499);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","IndexExplorer","com.wsscode.pathom.viz.index-explorer/IndexExplorer",493663752),com.wsscode.pathom.viz.index_explorer.IndexExplorer);

var x58161_58500 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x58161_58500.render = ((function (x58161_58500){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__58162 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58163 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58164 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58165 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58166 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58167 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__58168 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__58169 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__58170 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__58171 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58167;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58168;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58169;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58170;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58171;

try{var map__58172 = fulcro.client.primitives.props(this$);
var map__58172__$1 = (((((!((map__58172 == null))))?(((((map__58172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58172):map__58172);
var props = map__58172__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword("ui","menu","ui/menu",352268114));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword("ui","page","ui/page",849066625));
var extensions = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__58174 = goog.object.get(com.wsscode.pathom.viz.index_explorer.ExtensionContext,"Provider");
var G__58175 = ({"value": extensions});
var G__58176 = (function (){var G__58177 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"container",new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".out-container",".out-container",-265742466)], 0))], null);
var G__58178 = (function (){var G__58180 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874)], 0))], null);
var G__58181 = (function (){var G__58182 = menu;
var G__58183 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], null);
return (com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2(G__58182,G__58183) : com.wsscode.pathom.viz.index_explorer.search_everything.call(null,G__58182,G__58183));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2(G__58180,G__58181) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58180,G__58181));
})();
var G__58179 = (function (){var G__58184 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__58185 = (function (){var G__58187 = cljs.core.PersistentArrayMap.EMPTY;
var G__58188 = (function (){var G__58192 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)))], null);
var G__58193 = "\u25C0";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58192,G__58193) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58192,G__58193));
})();
var G__58189 = (function (){var G__58194 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-forward","go-forward",666578902)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)))], null);
var G__58195 = "\u25B6";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58194,G__58195) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58194,G__58195));
})();
var G__58190 = (function (){var G__58196 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-stats","go-stats",156008525)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(page) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,page)),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__58197 = "Stats";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58196,G__58197) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58196,G__58197));
})();
var G__58191 = (function (){var G__58198 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first((com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(page) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,page))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__58199 = "Full Graph";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58198,G__58199) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58198,G__58199));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5(G__58187,G__58188,G__58189,G__58190,G__58191) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58187,G__58188,G__58189,G__58190,G__58191));
})();
var G__58186 = (cljs.core.truth_(page)?(function (){var G__58200 = page;
var G__58201 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], 0));
return (com.wsscode.pathom.viz.index_explorer.main_view_union.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.main_view_union.cljs$core$IFn$_invoke$arity$2(G__58200,G__58201) : com.wsscode.pathom.viz.index_explorer.main_view_union.call(null,G__58200,G__58201));
})():null);
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58184,G__58185,G__58186) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58184,G__58185,G__58186));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__58177,G__58178,G__58179) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58177,G__58178,G__58179));
})();
return (fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__58174,G__58175,G__58176) : fulcro.client.localized_dom.create_element.call(null,G__58174,G__58175,G__58176));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58166;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58165;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58164;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58163;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58162;
}});})(x58161_58500))
;

x58161_58500.initLocalState = ((function (x58161_58500){
return (function (){
var this$ = this;
var ret__43419__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489),((function (this$,x58161_58500){
return (function (p1__58153_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),null,(1),null)),(new cljs.core.List(null,p1__58153_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x58161_58500))
,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x58161_58500){
return (function (p1__58154_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),null,(1),null)),(new cljs.core.List(null,p1__58154_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x58161_58500))
,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866),((function (this$,x58161_58500){
return (function (p1__58155_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),null,(1),null)),(new cljs.core.List(null,p1__58155_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x58161_58500))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),((function (this$,x58161_58500){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),null,(1),null)))))], null));
});})(this$,x58161_58500))
,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),((function (this$,x58161_58500){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),null,(1),null)))))], null));
});})(this$,x58161_58500))
,new cljs.core.Keyword(null,"go-stats","go-stats",156008525),((function (this$,x58161_58500){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),null,(1),null)))))], null));
});})(this$,x58161_58500))
,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058),((function (this$,x58161_58500){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),null,(1),null)))))], null));
});})(this$,x58161_58500))
], null);
var obj58203 = ({"fulcro$state":ret__43419__auto__});
return obj58203;
});})(x58161_58500))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor = com.wsscode.pathom.viz.index_explorer.IndexExplorer;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.fulcro$isComponent = true;

var x58204_58501 = com.wsscode.pathom.viz.index_explorer.IndexExplorer;
x58204_58501.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58204_58501.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58204_58501){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x58204_58501))
;

x58204_58501.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58204_58501){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x58204_58501))
;

x58204_58501.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x58204_58501.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x58204_58501){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x58204_58501))
;

x58204_58501.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58204_58501.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58204_58501){
return (function (this$,p__58205){
var map__58206 = p__58205;
var map__58206__$1 = (((((!((map__58206 == null))))?(((((map__58206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58206):map__58206);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var data_tree__$1 = com.wsscode.pathom.viz.index_explorer.clear_not_found(data_tree);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(0),new cljs.core.Keyword("ui","menu","ui/menu",352268114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null),new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null);
})(),current_normalized,data_tree__$1,(function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
if(cljs.core.truth_(temp__5718__auto__)){
var index = temp__5718__auto__;
return com.wsscode.pathom.viz.index_explorer.process_index(index);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","no-index?","com.wsscode.pathom.viz.index-explorer/no-index?",1191727764),true], null)], null);
}
})()], 0));
});})(x58204_58501))
;

x58204_58501.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58204_58501.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58204_58501){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58204_58501))
;

x58204_58501.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58204_58501.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58204_58501){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x58204_58501))
;


var x58208_58502 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x58208_58502.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58208_58502.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58208_58502){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x58208_58502))
;

x58208_58502.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58208_58502){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x58208_58502))
;

x58208_58502.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x58208_58502.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x58208_58502){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x58208_58502))
;

x58208_58502.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58208_58502.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58208_58502){
return (function (this$,p__58209){
var map__58210 = p__58209;
var map__58210__$1 = (((((!((map__58210 == null))))?(((((map__58210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58210):map__58210);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var data_tree__$1 = com.wsscode.pathom.viz.index_explorer.clear_not_found(data_tree);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(0),new cljs.core.Keyword("ui","menu","ui/menu",352268114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null),new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null);
})(),current_normalized,data_tree__$1,(function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
if(cljs.core.truth_(temp__5718__auto__)){
var index = temp__5718__auto__;
return com.wsscode.pathom.viz.index_explorer.process_index(index);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","no-index?","com.wsscode.pathom.viz.index-explorer/no-index?",1191727764),true], null)], null);
}
})()], 0));
});})(x58208_58502))
;

x58208_58502.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58208_58502.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58208_58502){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58208_58502))
;

x58208_58502.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58208_58502.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58208_58502){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x58208_58502))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.viz.index-explorer/IndexExplorer");
});
com.wsscode.pathom.viz.index_explorer.index_explorer = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer);

//# sourceMappingURL=com.wsscode.pathom.viz.index_explorer.js.map
