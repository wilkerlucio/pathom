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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__94260){
return cljs.core.map_QMARK_(G__94260);
}),(function (G__94260){
return cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
}),(function (G__94260){
return cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868));
}),(function (G__94260){
return cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896));
}),(function (G__94260){
return cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__94260){
return cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"reach","reach",1376483465));
}),(function (G__94260){
return cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"radius","radius",-2073122258));
})], null),(function (G__94260){
return ((cljs.core.map_QMARK_(G__94260)) && (cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"attribute","attribute",-2074029119))) && (cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))) && (cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))) && (cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"reach","reach",1376483465))) && (cljs.core.contains_QMARK_(G__94260,new cljs.core.Keyword(null,"radius","radius",-2073122258))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reach","reach",1376483465))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__94369){
return cljs.core.map_QMARK_(G__94369);
}),(function (G__94369){
return cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"source","source",-433931539));
}),(function (G__94369){
return cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__94369){
return cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130));
}),(function (G__94369){
return cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__94369){
return cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"deep","deep",2090866875));
})], null),(function (G__94369){
return ((cljs.core.map_QMARK_(G__94369)) && (cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))) && (cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_(G__94369,new cljs.core.Keyword(null,"deep","deep",2090866875))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"source","source",-433931539))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deep","deep",2090866875)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__94423){
return cljs.core.coll_QMARK_(G__94423);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__94427){
return cljs.core.coll_QMARK_(G__94427);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-graph","com.wsscode.pathom.viz.index-explorer/attribute-graph",226486271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__94428){
return cljs.core.map_QMARK_(G__94428);
}),(function (G__94428){
return cljs.core.contains_QMARK_(G__94428,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
}),(function (G__94428){
return cljs.core.contains_QMARK_(G__94428,new cljs.core.Keyword(null,"links","links",-654507394));
})], null),(function (G__94428){
return ((cljs.core.map_QMARK_(G__94428)) && (cljs.core.contains_QMARK_(G__94428,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core.contains_QMARK_(G__94428,new cljs.core.Keyword(null,"links","links",-654507394))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"links","links",-654507394)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","maybe-nested-input","com.wsscode.pathom.viz.index-explorer/maybe-nested-input",734224205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Keyword(null,"nested","nested",18943849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.vector_QMARK_], null),null));
com.wsscode.pathom.viz.index_explorer.ExtensionContext = com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.viz.index_explorer.call_graph_comm = (function com$wsscode$pathom$viz$index_explorer$call_graph_comm(comp,f,k){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__94452 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650));
if((G__94452 == null)){
return null;
} else {
return cljs.core.deref(G__94452);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__94453 = comp;
var G__94453__$1 = (((G__94453 == null))?null:fulcro.client.primitives.props(G__94453));
var G__94453__$2 = (((G__94453__$1 == null))?null:fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(G__94453__$1));
var G__94453__$3 = (((G__94453__$2 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087).cljs$core$IFn$_invoke$arity$1(G__94453__$2));
if((G__94453__$3 == null)){
return null;
} else {
return cljs.core.deref(G__94453__$3);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var G__94455 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__94454 = goog.object.get(settings,f);
return (fexpr__94454.cljs$core$IFn$_invoke$arity$1 ? fexpr__94454.cljs$core$IFn$_invoke$arity$1(G__94455) : fexpr__94454.call(null,G__94455));
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeLink","com.wsscode.pathom.viz.index-explorer/AttributeLink",4406070),com.wsscode.pathom.viz.index_explorer.AttributeLink);

var x94459_96186 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x94459_96186.render = ((function (x94459_96186){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94460 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94461 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94462 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94463 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94464 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94465 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94466 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94467 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94468 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94469 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94465;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94466;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94467;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94468;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94469;

try{var map__94470 = fulcro.client.primitives.props(this$);
var map__94470__$1 = (((((!((map__94470 == null))))?(((((map__94470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94470):map__94470);
var props = map__94470__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94470__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94470__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_graph_events(this$,attribute),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94464;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94463;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94462;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94461;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94460;
}});})(x94459_96186))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeLink;

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.fulcro$isComponent = true;

var x94472_96195 = com.wsscode.pathom.viz.index_explorer.AttributeLink;
x94472_96195.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94472_96195.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94472_96195){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x94472_96195))
;

x94472_96195.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94472_96195){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94472_96195))
;


var x94473_96200 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x94473_96200.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94473_96200.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94473_96200){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x94473_96200))
;

x94473_96200.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94473_96200){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94473_96200))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeLink");
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverLink","com.wsscode.pathom.viz.index-explorer/ResolverLink",175120056),com.wsscode.pathom.viz.index_explorer.ResolverLink);

var x94476_96205 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x94476_96205.render = ((function (x94476_96205){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94477 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94478 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94479 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94480 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94481 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94482 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94483 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94484 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94485 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94486 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94482;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94483;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94484;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94485;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94486;

try{var map__94487 = fulcro.client.primitives.props(this$);
var map__94487__$1 = (((((!((map__94487 == null))))?(((((map__94487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94487):map__94487);
var props = map__94487__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94487__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94487__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.resolver_graph_events(this$,sym),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94481;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94480;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94479;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94478;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94477;
}});})(x94476_96205))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverLink;

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.fulcro$isComponent = true;

var x94489_96213 = com.wsscode.pathom.viz.index_explorer.ResolverLink;
x94489_96213.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94489_96213.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94489_96213){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x94489_96213))
;

x94489_96213.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94489_96213){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94489_96213))
;


var x94490_96218 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x94490_96218.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94490_96218.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94490_96218){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x94490_96218))
;

x94490_96218.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94490_96218){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94490_96218))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverLink");
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationLink","com.wsscode.pathom.viz.index-explorer/MutationLink",1835462427),com.wsscode.pathom.viz.index_explorer.MutationLink);

var x94493_96225 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x94493_96225.render = ((function (x94493_96225){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94494 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94495 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94496 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94497 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94498 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94499 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94500 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94501 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94502 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94503 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94499;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94500;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94501;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94502;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94503;

try{var map__94504 = fulcro.client.primitives.props(this$);
var map__94504__$1 = (((((!((map__94504 == null))))?(((((map__94504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94504):map__94504);
var props = map__94504__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94504__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94504__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
var on_select_mutation = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_mutation,map__94504,map__94504__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__94494,_STAR_depth_STAR__orig_val__94495,_STAR_shared_STAR__orig_val__94496,_STAR_instrument_STAR__orig_val__94497,_STAR_parent_STAR__orig_val__94498,_STAR_reconciler_STAR__temp_val__94499,_STAR_depth_STAR__temp_val__94500,_STAR_shared_STAR__temp_val__94501,_STAR_instrument_STAR__temp_val__94502,_STAR_parent_STAR__temp_val__94503,this$,this__50885__auto__,x94493_96225){
return (function (){
return (on_select_mutation.cljs$core$IFn$_invoke$arity$1 ? on_select_mutation.cljs$core$IFn$_invoke$arity$1(sym) : on_select_mutation.call(null,sym));
});})(on_select_mutation,map__94504,map__94504__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__94494,_STAR_depth_STAR__orig_val__94495,_STAR_shared_STAR__orig_val__94496,_STAR_instrument_STAR__orig_val__94497,_STAR_parent_STAR__orig_val__94498,_STAR_reconciler_STAR__temp_val__94499,_STAR_depth_STAR__temp_val__94500,_STAR_shared_STAR__temp_val__94501,_STAR_instrument_STAR__temp_val__94502,_STAR_parent_STAR__temp_val__94503,this$,this__50885__auto__,x94493_96225))
], null),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94498;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94497;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94496;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94495;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94494;
}});})(x94493_96225))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationLink;

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.fulcro$isComponent = true;

var x94506_96231 = com.wsscode.pathom.viz.index_explorer.MutationLink;
x94506_96231.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94506_96231.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94506_96231){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x94506_96231))
;

x94506_96231.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94506_96231){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94506_96231))
;


var x94507_96232 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x94507_96232.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94507_96232.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94507_96232){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x94507_96232))
;

x94507_96232.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94507_96232){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94507_96232))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MutationLink");
});
com.wsscode.pathom.viz.index_explorer.mutation_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.node_radius = (function com$wsscode$pathom$viz$index_explorer$node_radius(p__94508){
var map__94509 = p__94508;
var map__94509__$1 = (((((!((map__94509 == null))))?(((((map__94509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94509):map__94509);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94509__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94509__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
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
com.wsscode.pathom.viz.index_explorer.attribute__GT_node = (function com$wsscode$pathom$viz$index_explorer$attribute__GT_node(p__94511){
var map__94512 = p__94511;
var map__94512__$1 = (((((!((map__94512 == null))))?(((((map__94512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94512):map__94512);
var attr = map__94512__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94512__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94512__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94512__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94512__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194));
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
com.wsscode.pathom.viz.index_explorer.compute_nodes_links = (function com$wsscode$pathom$viz$index_explorer$compute_nodes_links(p__94514){
var map__94515 = p__94514;
var map__94515__$1 = (((((!((map__94515 == null))))?(((((map__94515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94515):map__94515);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94515__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var attributes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
var index = com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.attribute__GT_node),attributes__$1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (attributes__$1,index,map__94515,map__94515__$1,attributes){
return (function (p__94517){
var map__94518 = p__94517;
var map__94518__$1 = (((((!((map__94518 == null))))?(((((map__94518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94518):map__94518);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94518__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94518__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (attr_str,map__94518,map__94518__$1,attribute,attr_provides,attributes__$1,index,map__94515,map__94515__$1,attributes){
return (function (p__94520){
var vec__94521 = p__94520;
var provided = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94521,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94521,(1),null);
var nested_QMARK_ = com.wsscode.pathom.viz.index_explorer.nested_QMARK_(provided);
var provided_SINGLEQUOTE_ = ((nested_QMARK_)?cljs.core.peek(provided):provided);
if(((cljs.core.contains_QMARK_(index,provided_SINGLEQUOTE_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(attribute,provided_SINGLEQUOTE_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),attr_str,new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.count(resolvers),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",resolvers),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([provided_SINGLEQUOTE_], 0)),new cljs.core.Keyword(null,"deep","deep",2090866875),nested_QMARK_], null);
} else {
return null;
}
});})(attr_str,map__94518,map__94518__$1,attribute,attr_provides,attributes__$1,index,map__94515,map__94515__$1,attributes))
),attr_provides);
return res;
});})(attributes__$1,index,map__94515,map__94515__$1,attributes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes__$1], 0))], null);
});
com.wsscode.pathom.viz.index_explorer.render_attribute_graph = (function com$wsscode$pathom$viz$index_explorer$render_attribute_graph(this$){
var map__94524 = fulcro.client.primitives.props(this$);
var map__94524__$1 = (((((!((map__94524 == null))))?(((((map__94524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94524):map__94524);
var props = map__94524__$1;
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94524__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105));
var on_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94524__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94524__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
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
var fexpr__94526_96252 = goog.object.get(current,"dispose");
(fexpr__94526_96252.cljs$core$IFn$_invoke$arity$0 ? fexpr__94526_96252.cljs$core$IFn$_invoke$arity$0() : fexpr__94526_96252.call(null));
} else {
}

goog.object.set(svg,"innerHTML","");

var render_settings = module$com$wsscode$pathom$viz$d3_attribute_graph.render(svg,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.index_explorer.compute_nodes_links(props),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),((function (map__94524,map__94524__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (attr,d,js){
var G__94527 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(attr);
var G__94528 = d;
var G__94529 = js;
return (on_show_details__$1.cljs$core$IFn$_invoke$arity$3 ? on_show_details__$1.cljs$core$IFn$_invoke$arity$3(G__94527,G__94528,G__94529) : on_show_details__$1.call(null,G__94527,G__94528,G__94529));
});})(map__94524,map__94524__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
,new cljs.core.Keyword(null,"onClickEdge","onClickEdge",124821712),((function (map__94524,map__94524__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (edge){
var resolvers = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(edge,"resolvers")),"}"].join(''));
var G__94530 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers], null);
return (on_click_edge__$1.cljs$core$IFn$_invoke$arity$1 ? on_click_edge__$1.cljs$core$IFn$_invoke$arity$1(G__94530) : on_click_edge__$1.call(null,G__94530));
});})(map__94524,map__94524__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
], null)));
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraph","com.wsscode.pathom.viz.index-explorer/AttributeGraph",1136928477),com.wsscode.pathom.viz.index_explorer.AttributeGraph);

var x94536_96259 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x94536_96259.render = ((function (x94536_96259){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94537 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94538 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94539 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94540 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94541 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94542 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94543 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94544 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94545 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94546 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94542;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94543;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94544;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94545;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94546;

try{var map__94547 = fulcro.client.primitives.props(this$);
var map__94547__$1 = (((((!((map__94547 == null))))?(((((map__94547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94547):map__94547);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__94547,map__94547__$1,_STAR_reconciler_STAR__orig_val__94537,_STAR_depth_STAR__orig_val__94538,_STAR_shared_STAR__orig_val__94539,_STAR_instrument_STAR__orig_val__94540,_STAR_parent_STAR__orig_val__94541,_STAR_reconciler_STAR__temp_val__94542,_STAR_depth_STAR__temp_val__94543,_STAR_shared_STAR__temp_val__94544,_STAR_instrument_STAR__temp_val__94545,_STAR_parent_STAR__temp_val__94546,this$,this__50885__auto__,x94536_96259){
return (function (p1__94531_SHARP_){
return goog.object.set(this$,"svgContainer",p1__94531_SHARP_);
});})(map__94547,map__94547__$1,_STAR_reconciler_STAR__orig_val__94537,_STAR_depth_STAR__orig_val__94538,_STAR_shared_STAR__orig_val__94539,_STAR_instrument_STAR__orig_val__94540,_STAR_parent_STAR__orig_val__94541,_STAR_reconciler_STAR__temp_val__94542,_STAR_depth_STAR__temp_val__94543,_STAR_shared_STAR__temp_val__94544,_STAR_instrument_STAR__temp_val__94545,_STAR_parent_STAR__temp_val__94546,this$,this__50885__auto__,x94536_96259))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__94547,map__94547__$1,_STAR_reconciler_STAR__orig_val__94537,_STAR_depth_STAR__orig_val__94538,_STAR_shared_STAR__orig_val__94539,_STAR_instrument_STAR__orig_val__94540,_STAR_parent_STAR__orig_val__94541,_STAR_reconciler_STAR__temp_val__94542,_STAR_depth_STAR__temp_val__94543,_STAR_shared_STAR__temp_val__94544,_STAR_instrument_STAR__temp_val__94545,_STAR_parent_STAR__temp_val__94546,this$,this__50885__auto__,x94536_96259){
return (function (p1__94532_SHARP_){
return goog.object.set(this$,"svg",p1__94532_SHARP_);
});})(map__94547,map__94547__$1,_STAR_reconciler_STAR__orig_val__94537,_STAR_depth_STAR__orig_val__94538,_STAR_shared_STAR__orig_val__94539,_STAR_instrument_STAR__orig_val__94540,_STAR_parent_STAR__orig_val__94541,_STAR_reconciler_STAR__temp_val__94542,_STAR_depth_STAR__temp_val__94543,_STAR_shared_STAR__temp_val__94544,_STAR_instrument_STAR__temp_val__94545,_STAR_parent_STAR__temp_val__94546,this$,this__50885__auto__,x94536_96259))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94541;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94540;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94539;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94538;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94537;
}});})(x94536_96259))
;

x94536_96259.componentDidUpdate = ((function (x94536_96259){
return (function (prev_props__50862__auto__,prev_state__50863__auto__,snapshot__50864__auto__){
var this__50861__auto__ = this;
var this$ = this__50861__auto__;
var snapshot94533 = snapshot__50864__auto__;
var prev_props = goog.object.get(prev_props__50862__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__50863__auto__,"fulcro$state");
if((((!((this__50861__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__50861__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__50865__auto___96267 = fulcro.client.primitives.ident(this__50861__auto__,prev_props);
var next_ident__50866__auto___96268 = fulcro.client.primitives.ident(this__50861__auto__,fulcro.client.primitives.props(this__50861__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__50865__auto___96267,next_ident__50866__auto___96268)){
var idxr__50867__auto___96270 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__50861__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__50867__auto___96270 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__50867__auto___96270),((function (idxr__50867__auto___96270,ident__50865__auto___96267,next_ident__50866__auto___96268,this$,snapshot94533,prev_props,_,this__50861__auto__,x94536_96259){
return (function (indexes__50868__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__50868__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__50865__auto___96267], null),cljs.core.disj,this__50861__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__50866__auto___96268], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__50861__auto__);
});})(idxr__50867__auto___96270,ident__50865__auto___96267,next_ident__50866__auto___96268,this$,snapshot94533,prev_props,_,this__50861__auto__,x94536_96259))
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
});})(x94536_96259))
;

x94536_96259.componentDidCatch = ((function (x94536_96259){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980),true], null));
});})(x94536_96259))
;

x94536_96259.componentWillUnmount = ((function (x94536_96259){
return (function (){
var this__50873__auto__ = this;
var this$ = this__50873__auto__;
var reconciler__50874__auto__ = fulcro.client.primitives.get_reconciler(this__50873__auto__);
var lifecycle__50875__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__50874__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__50876__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__50874__auto__);
var st__50877__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__50876__auto__);
var indexer__50878__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__50876__auto__);
goog.object.set(this__50873__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st__50877__auto__ == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__50877__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__50873__auto__], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__50877__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__50873__auto__], 0));
} else {
}

if(cljs.core.truth_(lifecycle__50875__auto__)){
(lifecycle__50875__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__50875__auto__.cljs$core$IFn$_invoke$arity$2(this__50873__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)) : lifecycle__50875__auto__.call(null,this__50873__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)));
} else {
}

if(cljs.core.truth_(indexer__50878__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__50878__auto__,this__50873__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"renderedData");
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var fexpr__94550 = goog.object.get(settings,"dispose");
return (fexpr__94550.cljs$core$IFn$_invoke$arity$0 ? fexpr__94550.cljs$core$IFn$_invoke$arity$0() : fexpr__94550.call(null));
} else {
return null;
}
});})(x94536_96259))
;

x94536_96259.componentDidMount = ((function (x94536_96259){
return (function (){
var this__50869__auto__ = this;
var this$ = this__50869__auto__;
var reconciler__50870__auto__ = fulcro.client.primitives.get_reconciler(this__50869__auto__);
var lifecycle__50871__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__50870__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__50872__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__50870__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__50869__auto__,"fulcro$mounted",true);

if((indexer__50872__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__50872__auto__,this__50869__auto__);
}

if(cljs.core.truth_(lifecycle__50871__auto__)){
(lifecycle__50871__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__50871__auto__.cljs$core$IFn$_invoke$arity$2(this__50869__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__50871__auto__.call(null,this__50869__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
});})(x94536_96259))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraph;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.fulcro$isComponent = true;

var x94557_96276 = com.wsscode.pathom.viz.index_explorer.AttributeGraph;
x94557_96276.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94557_96276.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94557_96276){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x94557_96276))
;

x94557_96276.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94557_96276){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94557_96276))
;


var x94561_96283 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x94561_96283.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94561_96283.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94561_96283){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x94561_96283))
;

x94561_96283.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94561_96283){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94561_96283))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraph");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraph);
/**
 * Get attribute from index, remove provides when interconnections is falsy.
 */
com.wsscode.pathom.viz.index_explorer.pull_attr = (function com$wsscode$pathom$viz$index_explorer$pull_attr(p__94566,attr){
var map__94568 = p__94566;
var map__94568__$1 = (((((!((map__94568 == null))))?(((((map__94568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94568):map__94568);
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94568__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94568__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var G__94572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_index,attr);
if(interconnections_QMARK_ === false){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__94572,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
} else {
return G__94572;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_ = (function com$wsscode$pathom$viz$index_explorer$attribute_network_STAR_(p__94576,source){
var map__94577 = p__94576;
var map__94577__$1 = (((((!((map__94577 == null))))?(((((map__94577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94577):map__94577);
var options = map__94577__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var sub_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),cljs.core.PersistentArrayMap.EMPTY);
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false);
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true);
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true);
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false);
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1));
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var attr_visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94577__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.PersistentHashSet.EMPTY);
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
var map__94581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,source);
var map__94581__$1 = (((((!((map__94581 == null))))?(((((map__94581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94581):map__94581);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94581__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94581__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(attr_depth - (1)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr_visited,source)], 0));
var _LT__GT_ = base;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,index,base,map__94581,map__94581__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__94577,map__94577__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
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
var G__94589 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__94590 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__94589,G__94590) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__94589,G__94590));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
return out;
}
});})(_LT__GT_,index,base,map__94581,map__94581__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__94577,map__94577__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT_,cljs.core.keys(attr_reach_via));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,index,base,map__94581,map__94581__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__94577,map__94577__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,attr){
if(cljs.core.truth_((function (){var and__4120__auto__ = direct_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (attr instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())){
if((attr_depth > (1))){
var G__94593 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__94594 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__94593,G__94594) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__94593,G__94594));
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
});})(_LT__GT_,_LT__GT___$1,index,base,map__94581,map__94581__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__94577,map__94577__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__94597_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__94597_SHARP_,(0),(function (x){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
}));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__94600){
var vec__94601 = p__94600;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94601,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94601,(1),null);
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
return (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__94611(s__94612){
return (new cljs.core.LazySeq(null,((function (plugins,data){
return (function (){
var s__94612__$1 = s__94612;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__94612__$1);
if(temp__5720__auto__){
var s__94612__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94612__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__94612__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__94614 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__94613 = (0);
while(true){
if((i__94613 < size__4522__auto__)){
var map__94615 = cljs.core._nth(c__4521__auto__,i__94613);
var map__94615__$1 = (((((!((map__94615 == null))))?(((((map__94615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94615):map__94615);
var plugin = map__94615__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94615__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
cljs.core.chunk_append(b__94614,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__94617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__94617.cljs$core$IFn$_invoke$arity$1 ? fexpr__94617.cljs$core$IFn$_invoke$arity$1(data) : fexpr__94617.call(null,data));
})()], 0)));

var G__96307 = (i__94613 + (1));
i__94613 = G__96307;
continue;
} else {
var G__96308 = (i__94613 + (1));
i__94613 = G__96308;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94614),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__94611(cljs.core.chunk_rest(s__94612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94614),null);
}
} else {
var map__94618 = cljs.core.first(s__94612__$2);
var map__94618__$1 = (((((!((map__94618 == null))))?(((((map__94618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94618):map__94618);
var plugin = map__94618__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94618__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__94622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__94622.cljs$core$IFn$_invoke$arity$1 ? fexpr__94622.cljs$core$IFn$_invoke$arity$1(data) : fexpr__94622.call(null,data));
})()], 0)),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__94611(cljs.core.rest(s__94612__$2)));
} else {
var G__96311 = cljs.core.rest(s__94612__$2);
s__94612__$1 = G__96311;
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoReachVia","com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia",-997057837),com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);

var x94627_96312 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x94627_96312.render = ((function (x94627_96312){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94628 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94629 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94630 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94631 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94632 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94633 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94634 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94635 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94636 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94637 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94633;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94634;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94635;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94636;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94637;

try{var map__94640 = fulcro.client.primitives.props(this$);
var map__94640__$1 = (((((!((map__94640 == null))))?(((((map__94640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94640):map__94640);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94640__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__94644 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Reach via",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_reach_via)], null);
var G__94645 = (function (){var nested_reaches_QMARK_ = true;
var iter__4523__auto__ = ((function (nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function com$wsscode$pathom$viz$index_explorer$iter__94646(s__94647){
return (new cljs.core.LazySeq(null,((function (nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
var s__94647__$1 = s__94647;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__94647__$1);
if(temp__5720__auto__){
var s__94647__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94647__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__94647__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__94649 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__94648 = (0);
while(true){
if((i__94648 < size__4522__auto__)){
var vec__94654 = cljs.core._nth(c__4521__auto__,i__94648);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94654,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94654,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
cljs.core.chunk_append(b__94649,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__94660 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__94660);
} else {
return G__94660;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__94648,s__94647__$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(i__94648,s__94647__$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__94662 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94662,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__94662;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (i__94648,s__94647__$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664(s__94665){
return (new cljs.core.LazySeq(null,((function (i__94648,s__94647__$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
var s__94665__$1 = s__94665;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__94665__$1);
if(temp__5720__auto____$1){
var s__94665__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__94665__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__94665__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__94667 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__94666 = (0);
while(true){
if((i__94666 < size__4522__auto____$1)){
var vec__94670 = cljs.core._nth(c__4521__auto____$1,i__94666);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94670,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94670,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__94667,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__94666,s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94670,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__94667,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664_$_iter__94674(s__94675){
return (new cljs.core.LazySeq(null,((function (i__94666,s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94670,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__94667,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
var s__94675__$1 = s__94675;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__94675__$1);
if(temp__5720__auto____$2){
var s__94675__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__94675__$2)){
var c__4521__auto____$2 = cljs.core.chunk_first(s__94675__$2);
var size__4522__auto____$2 = cljs.core.count(c__4521__auto____$2);
var b__94677 = cljs.core.chunk_buffer(size__4522__auto____$2);
if((function (){var i__94676 = (0);
while(true){
if((i__94676 < size__4522__auto____$2)){
var vec__94682 = cljs.core._nth(c__4521__auto____$2,i__94676);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94682,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94682,(1),null);
cljs.core.chunk_append(b__94677,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__96332 = (i__94676 + (1));
i__94676 = G__96332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94677),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664_$_iter__94674(cljs.core.chunk_rest(s__94675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94677),null);
}
} else {
var vec__94686 = cljs.core.first(s__94675__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94686,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94686,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664_$_iter__94674(cljs.core.rest(s__94675__$2)));
}
} else {
return null;
}
break;
}
});})(i__94666,s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94670,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__94667,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,null,null));
});})(i__94666,s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94670,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__94667,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__96336 = (i__94666 + (1));
i__94666 = G__96336;
continue;
} else {
var G__96337 = (i__94666 + (1));
i__94666 = G__96337;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94667),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664(cljs.core.chunk_rest(s__94665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94667),null);
}
} else {
var vec__94690 = cljs.core.first(s__94665__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94690,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94690,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94690,path,resolvers,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664_$_iter__94694(s__94695){
return (new cljs.core.LazySeq(null,((function (s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94690,path,resolvers,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
var s__94695__$1 = s__94695;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__94695__$1);
if(temp__5720__auto____$2){
var s__94695__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__94695__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__94695__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__94697 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__94696 = (0);
while(true){
if((i__94696 < size__4522__auto____$1)){
var vec__94700 = cljs.core._nth(c__4521__auto____$1,i__94696);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94700,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94700,(1),null);
cljs.core.chunk_append(b__94697,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__96346 = (i__94696 + (1));
i__94696 = G__96346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94697),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664_$_iter__94694(cljs.core.chunk_rest(s__94695__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94697),null);
}
} else {
var vec__94706 = cljs.core.first(s__94695__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94706,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94706,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664_$_iter__94694(cljs.core.rest(s__94695__$2)));
}
} else {
return null;
}
break;
}
});})(s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94690,path,resolvers,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,null,null));
});})(s__94665__$1,i__94648,s__94647__$1,path_SINGLEQUOTE_,vec__94690,path,resolvers,s__94665__$2,temp__5720__auto____$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94664(cljs.core.rest(s__94665__$2)));
} else {
var G__96352 = cljs.core.rest(s__94665__$2);
s__94665__$1 = G__96352;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__94648,s__94647__$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,null,null));
});})(i__94648,s__94647__$1,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (i__94648,s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (p1__94624_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__94624_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(i__94648,s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__94648,s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (p1__94623_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__94623_SHARP_,(0),((function (i__94648,s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(i__94648,s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
);
});})(i__94648,s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94654,input,v,c__4521__auto__,size__4522__auto__,b__94649,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,v)));
})():null)], 0)));

var G__96358 = (i__94648 + (1));
i__94648 = G__96358;
continue;
} else {
var G__96359 = (i__94648 + (1));
i__94648 = G__96359;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94649),com$wsscode$pathom$viz$index_explorer$iter__94646(cljs.core.chunk_rest(s__94647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94649),null);
}
} else {
var vec__94713 = cljs.core.first(s__94647__$2);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94713,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__94717 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__94717);
} else {
return G__94717;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (s__94647__$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(s__94647__$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__94718 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94718,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__94718;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (s__94647__$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719(s__94720){
return (new cljs.core.LazySeq(null,((function (s__94647__$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
var s__94720__$1 = s__94720;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__94720__$1);
if(temp__5720__auto____$1){
var s__94720__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__94720__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__94720__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__94722 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__94721 = (0);
while(true){
if((i__94721 < size__4522__auto__)){
var vec__94723 = cljs.core._nth(c__4521__auto__,i__94721);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94723,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94723,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__94722,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__94721,s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94723,path,resolvers,c__4521__auto__,size__4522__auto__,b__94722,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719_$_iter__94726(s__94727){
return (new cljs.core.LazySeq(null,((function (i__94721,s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94723,path,resolvers,c__4521__auto__,size__4522__auto__,b__94722,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
var s__94727__$1 = s__94727;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__94727__$1);
if(temp__5720__auto____$2){
var s__94727__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__94727__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__94727__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__94729 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__94728 = (0);
while(true){
if((i__94728 < size__4522__auto____$1)){
var vec__94730 = cljs.core._nth(c__4521__auto____$1,i__94728);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94730,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94730,(1),null);
cljs.core.chunk_append(b__94729,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__96365 = (i__94728 + (1));
i__94728 = G__96365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94729),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719_$_iter__94726(cljs.core.chunk_rest(s__94727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94729),null);
}
} else {
var vec__94735 = cljs.core.first(s__94727__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94735,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94735,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719_$_iter__94726(cljs.core.rest(s__94727__$2)));
}
} else {
return null;
}
break;
}
});})(i__94721,s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94723,path,resolvers,c__4521__auto__,size__4522__auto__,b__94722,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,null,null));
});})(i__94721,s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94723,path,resolvers,c__4521__auto__,size__4522__auto__,b__94722,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__96366 = (i__94721 + (1));
i__94721 = G__96366;
continue;
} else {
var G__96368 = (i__94721 + (1));
i__94721 = G__96368;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94722),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719(cljs.core.chunk_rest(s__94720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94722),null);
}
} else {
var vec__94738 = cljs.core.first(s__94720__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94738,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94738,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94738,path,resolvers,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719_$_iter__94742(s__94743){
return (new cljs.core.LazySeq(null,((function (s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94738,path,resolvers,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (){
var s__94743__$1 = s__94743;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__94743__$1);
if(temp__5720__auto____$2){
var s__94743__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__94743__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__94743__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__94745 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__94744 = (0);
while(true){
if((i__94744 < size__4522__auto__)){
var vec__94748 = cljs.core._nth(c__4521__auto__,i__94744);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94748,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94748,(1),null);
cljs.core.chunk_append(b__94745,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__96374 = (i__94744 + (1));
i__94744 = G__96374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94745),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719_$_iter__94742(cljs.core.chunk_rest(s__94743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94745),null);
}
} else {
var vec__94753 = cljs.core.first(s__94743__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94753,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94753,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719_$_iter__94742(cljs.core.rest(s__94743__$2)));
}
} else {
return null;
}
break;
}
});})(s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94738,path,resolvers,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,null,null));
});})(s__94720__$1,s__94647__$1,path_SINGLEQUOTE_,vec__94738,path,resolvers,s__94720__$2,temp__5720__auto____$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__94646_$_iter__94719(cljs.core.rest(s__94720__$2)));
} else {
var G__96379 = cljs.core.rest(s__94720__$2);
s__94720__$1 = G__96379;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__94647__$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,null,null));
});})(s__94647__$1,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (p1__94624_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__94624_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (p1__94623_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__94623_SHARP_,(0),((function (s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
);
});})(s__94647__$1,iter__4523__auto__,direct_QMARK_,vec__94713,input,v,s__94647__$2,temp__5720__auto__,nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,v)));
})():null)], 0)),com$wsscode$pathom$viz$index_explorer$iter__94646(cljs.core.rest(s__94647__$2)));
} else {
var G__96386 = cljs.core.rest(s__94647__$2);
s__94647__$1 = G__96386;
continue;
}
}
} else {
return null;
}
break;
}
});})(nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
,null,null));
});})(nested_reaches_QMARK_,G__94644,map__94640,map__94640__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__94628,_STAR_depth_STAR__orig_val__94629,_STAR_shared_STAR__orig_val__94630,_STAR_instrument_STAR__orig_val__94631,_STAR_parent_STAR__orig_val__94632,_STAR_reconciler_STAR__temp_val__94633,_STAR_depth_STAR__temp_val__94634,_STAR_shared_STAR__temp_val__94635,_STAR_instrument_STAR__temp_val__94636,_STAR_parent_STAR__temp_val__94637,this$,this__50885__auto__,x94627_96312))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str,com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),attr_reach_via)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__94644,G__94645) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__94644,G__94645));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94632;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94631;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94630;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94629;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94628;
}});})(x94627_96312))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.fulcro$isComponent = true;

var x94761_96387 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;
x94761_96387.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94761_96387.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94761_96387){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94761_96387))
;

x94761_96387.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94761_96387.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94761_96387){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x94761_96387))
;


var x94764_96388 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x94764_96388.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94764_96388.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94764_96388){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94764_96388))
;

x94764_96388.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94764_96388.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94764_96388){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x94764_96388))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationParamIn(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationParamIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn",768684351),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);

var x94768_96391 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x94768_96391.render = ((function (x94768_96391){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94770 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94771 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94772 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94773 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94774 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94775 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94776 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94777 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94778 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94779 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94775;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94776;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94777;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94778;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94779;

try{var map__94783 = fulcro.client.primitives.props(this$);
var map__94783__$1 = (((((!((map__94783 == null))))?(((((map__94783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94783):map__94783);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94783__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__94786 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Param In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_param_in)], null);
var G__94787 = (function (){var iter__4523__auto__ = ((function (G__94786,map__94783,map__94783__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__94770,_STAR_depth_STAR__orig_val__94771,_STAR_shared_STAR__orig_val__94772,_STAR_instrument_STAR__orig_val__94773,_STAR_parent_STAR__orig_val__94774,_STAR_reconciler_STAR__temp_val__94775,_STAR_depth_STAR__temp_val__94776,_STAR_shared_STAR__temp_val__94777,_STAR_instrument_STAR__temp_val__94778,_STAR_parent_STAR__temp_val__94779,this$,this__50885__auto__,x94768_96391){
return (function com$wsscode$pathom$viz$index_explorer$iter__94788(s__94789){
return (new cljs.core.LazySeq(null,((function (G__94786,map__94783,map__94783__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__94770,_STAR_depth_STAR__orig_val__94771,_STAR_shared_STAR__orig_val__94772,_STAR_instrument_STAR__orig_val__94773,_STAR_parent_STAR__orig_val__94774,_STAR_reconciler_STAR__temp_val__94775,_STAR_depth_STAR__temp_val__94776,_STAR_shared_STAR__temp_val__94777,_STAR_instrument_STAR__temp_val__94778,_STAR_parent_STAR__temp_val__94779,this$,this__50885__auto__,x94768_96391){
return (function (){
var s__94789__$1 = s__94789;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__94789__$1);
if(temp__5720__auto__){
var s__94789__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94789__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__94789__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__94791 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__94790 = (0);
while(true){
if((i__94790 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__94790);
cljs.core.chunk_append(b__94791,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__96398 = (i__94790 + (1));
i__94790 = G__96398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94791),com$wsscode$pathom$viz$index_explorer$iter__94788(cljs.core.chunk_rest(s__94789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94791),null);
}
} else {
var sym = cljs.core.first(s__94789__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__94788(cljs.core.rest(s__94789__$2)));
}
} else {
return null;
}
break;
}
});})(G__94786,map__94783,map__94783__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__94770,_STAR_depth_STAR__orig_val__94771,_STAR_shared_STAR__orig_val__94772,_STAR_instrument_STAR__orig_val__94773,_STAR_parent_STAR__orig_val__94774,_STAR_reconciler_STAR__temp_val__94775,_STAR_depth_STAR__temp_val__94776,_STAR_shared_STAR__temp_val__94777,_STAR_instrument_STAR__temp_val__94778,_STAR_parent_STAR__temp_val__94779,this$,this__50885__auto__,x94768_96391))
,null,null));
});})(G__94786,map__94783,map__94783__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__94770,_STAR_depth_STAR__orig_val__94771,_STAR_shared_STAR__orig_val__94772,_STAR_instrument_STAR__orig_val__94773,_STAR_parent_STAR__orig_val__94774,_STAR_reconciler_STAR__temp_val__94775,_STAR_depth_STAR__temp_val__94776,_STAR_shared_STAR__temp_val__94777,_STAR_instrument_STAR__temp_val__94778,_STAR_parent_STAR__temp_val__94779,this$,this__50885__auto__,x94768_96391))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_param_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__94786,G__94787) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__94786,G__94787));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94774;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94773;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94772;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94771;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94770;
}});})(x94768_96391))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.fulcro$isComponent = true;

var x94801_96401 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;
x94801_96401.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94801_96401.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94801_96401){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94801_96401))
;

x94801_96401.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94801_96401.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94801_96401){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x94801_96401))
;


var x94805_96403 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x94805_96403.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94805_96403.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94805_96403){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94805_96403))
;

x94805_96403.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94805_96403.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94805_96403){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x94805_96403))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationOutputIn(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationOutputIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn",304871094),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);

var x94814_96405 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x94814_96405.render = ((function (x94814_96405){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94815 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94816 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94817 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94818 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94819 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94820 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94821 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94822 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94823 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94824 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94820;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94821;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94822;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94823;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94824;

try{var map__94827 = fulcro.client.primitives.props(this$);
var map__94827__$1 = (((((!((map__94827 == null))))?(((((map__94827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94827):map__94827);
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94827__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__94832 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_output_in)], null);
var G__94833 = (function (){var iter__4523__auto__ = ((function (G__94832,map__94827,map__94827__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__94815,_STAR_depth_STAR__orig_val__94816,_STAR_shared_STAR__orig_val__94817,_STAR_instrument_STAR__orig_val__94818,_STAR_parent_STAR__orig_val__94819,_STAR_reconciler_STAR__temp_val__94820,_STAR_depth_STAR__temp_val__94821,_STAR_shared_STAR__temp_val__94822,_STAR_instrument_STAR__temp_val__94823,_STAR_parent_STAR__temp_val__94824,this$,this__50885__auto__,x94814_96405){
return (function com$wsscode$pathom$viz$index_explorer$iter__94835(s__94836){
return (new cljs.core.LazySeq(null,((function (G__94832,map__94827,map__94827__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__94815,_STAR_depth_STAR__orig_val__94816,_STAR_shared_STAR__orig_val__94817,_STAR_instrument_STAR__orig_val__94818,_STAR_parent_STAR__orig_val__94819,_STAR_reconciler_STAR__temp_val__94820,_STAR_depth_STAR__temp_val__94821,_STAR_shared_STAR__temp_val__94822,_STAR_instrument_STAR__temp_val__94823,_STAR_parent_STAR__temp_val__94824,this$,this__50885__auto__,x94814_96405){
return (function (){
var s__94836__$1 = s__94836;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__94836__$1);
if(temp__5720__auto__){
var s__94836__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94836__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__94836__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__94838 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__94837 = (0);
while(true){
if((i__94837 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__94837);
cljs.core.chunk_append(b__94838,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__96406 = (i__94837 + (1));
i__94837 = G__96406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94838),com$wsscode$pathom$viz$index_explorer$iter__94835(cljs.core.chunk_rest(s__94836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94838),null);
}
} else {
var sym = cljs.core.first(s__94836__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__94835(cljs.core.rest(s__94836__$2)));
}
} else {
return null;
}
break;
}
});})(G__94832,map__94827,map__94827__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__94815,_STAR_depth_STAR__orig_val__94816,_STAR_shared_STAR__orig_val__94817,_STAR_instrument_STAR__orig_val__94818,_STAR_parent_STAR__orig_val__94819,_STAR_reconciler_STAR__temp_val__94820,_STAR_depth_STAR__temp_val__94821,_STAR_shared_STAR__temp_val__94822,_STAR_instrument_STAR__temp_val__94823,_STAR_parent_STAR__temp_val__94824,this$,this__50885__auto__,x94814_96405))
,null,null));
});})(G__94832,map__94827,map__94827__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__94815,_STAR_depth_STAR__orig_val__94816,_STAR_shared_STAR__orig_val__94817,_STAR_instrument_STAR__orig_val__94818,_STAR_parent_STAR__orig_val__94819,_STAR_reconciler_STAR__temp_val__94820,_STAR_depth_STAR__temp_val__94821,_STAR_shared_STAR__temp_val__94822,_STAR_instrument_STAR__temp_val__94823,_STAR_parent_STAR__temp_val__94824,this$,this__50885__auto__,x94814_96405))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__94832,G__94833) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__94832,G__94833));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94819;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94818;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94817;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94816;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94815;
}});})(x94814_96405))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.fulcro$isComponent = true;

var x94842_96407 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;
x94842_96407.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94842_96407.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94842_96407){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94842_96407))
;

x94842_96407.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94842_96407.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94842_96407){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x94842_96407))
;


var x94845_96409 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x94845_96409.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94845_96409.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94845_96409){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94845_96409))
;

x94845_96409.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94845_96409.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94845_96409){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x94845_96409))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ExamplesPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ExamplesPanel = (function com$wsscode$pathom$viz$index_explorer$ExamplesPanel(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ExamplesPanel","com.wsscode.pathom.viz.index-explorer/ExamplesPanel",846657103),com.wsscode.pathom.viz.index_explorer.ExamplesPanel);

var x94855_96412 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x94855_96412.render = ((function (x94855_96412){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94857 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94858 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94859 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94860 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94861 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94862 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94863 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94864 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94865 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94866 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94862;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94863;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94864;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94865;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94866;

try{var map__94869 = fulcro.client.primitives.props(this$);
var map__94869__$1 = (((((!((map__94869 == null))))?(((((map__94869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94869):map__94869);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94869__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__94872 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__94875 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__94876 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Examples"], 0));
var G__94877 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0))], 0));
var G__94878 = (function (){var G__94879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__94875,G__94876,G__94877,map__94869,map__94869__$1,attribute,_STAR_reconciler_STAR__orig_val__94857,_STAR_depth_STAR__orig_val__94858,_STAR_shared_STAR__orig_val__94859,_STAR_instrument_STAR__orig_val__94860,_STAR_parent_STAR__orig_val__94861,_STAR_reconciler_STAR__temp_val__94862,_STAR_depth_STAR__temp_val__94863,_STAR_shared_STAR__temp_val__94864,_STAR_instrument_STAR__temp_val__94865,_STAR_parent_STAR__temp_val__94866,this$,this__50885__auto__,x94855_96412){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
});})(G__94875,G__94876,G__94877,map__94869,map__94869__$1,attribute,_STAR_reconciler_STAR__orig_val__94857,_STAR_depth_STAR__orig_val__94858,_STAR_shared_STAR__orig_val__94859,_STAR_instrument_STAR__orig_val__94860,_STAR_parent_STAR__orig_val__94861,_STAR_reconciler_STAR__temp_val__94862,_STAR_depth_STAR__temp_val__94863,_STAR_shared_STAR__temp_val__94864,_STAR_instrument_STAR__temp_val__94865,_STAR_parent_STAR__temp_val__94866,this$,this__50885__auto__,x94855_96412))
], null);
var G__94880 = fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa","fa-sync-alt"], null)], null)], 0));
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__94879,G__94880) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__94879,G__94880));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__94875,G__94876,G__94877,G__94878) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__94875,G__94876,G__94877,G__94878));
})()], null);
var G__94873 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".examples",".examples",-775726891),(function (){try{var samples = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(attribute))));
var samples__$1 = (function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(samples);
}catch (e94886){var _ = e94886;
return samples;
}})();
var iter__4523__auto__ = ((function (samples,samples__$1,G__94872,map__94869,map__94869__$1,attribute,_STAR_reconciler_STAR__orig_val__94857,_STAR_depth_STAR__orig_val__94858,_STAR_shared_STAR__orig_val__94859,_STAR_instrument_STAR__orig_val__94860,_STAR_parent_STAR__orig_val__94861,_STAR_reconciler_STAR__temp_val__94862,_STAR_depth_STAR__temp_val__94863,_STAR_shared_STAR__temp_val__94864,_STAR_instrument_STAR__temp_val__94865,_STAR_parent_STAR__temp_val__94866,this$,this__50885__auto__,x94855_96412){
return (function com$wsscode$pathom$viz$index_explorer$iter__94887(s__94888){
return (new cljs.core.LazySeq(null,((function (samples,samples__$1,G__94872,map__94869,map__94869__$1,attribute,_STAR_reconciler_STAR__orig_val__94857,_STAR_depth_STAR__orig_val__94858,_STAR_shared_STAR__orig_val__94859,_STAR_instrument_STAR__orig_val__94860,_STAR_parent_STAR__orig_val__94861,_STAR_reconciler_STAR__temp_val__94862,_STAR_depth_STAR__temp_val__94863,_STAR_shared_STAR__temp_val__94864,_STAR_instrument_STAR__temp_val__94865,_STAR_parent_STAR__temp_val__94866,this$,this__50885__auto__,x94855_96412){
return (function (){
var s__94888__$1 = s__94888;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__94888__$1);
if(temp__5720__auto__){
var s__94888__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94888__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__94888__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__94890 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__94889 = (0);
while(true){
if((i__94889 < size__4522__auto__)){
var vec__94892 = cljs.core._nth(c__4521__auto__,i__94889);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94892,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94892,(1),null);
cljs.core.chunk_append(b__94890,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)));

var G__96418 = (i__94889 + (1));
i__94889 = G__96418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94890),com$wsscode$pathom$viz$index_explorer$iter__94887(cljs.core.chunk_rest(s__94888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94890),null);
}
} else {
var vec__94897 = cljs.core.first(s__94888__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94897,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94897,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)),com$wsscode$pathom$viz$index_explorer$iter__94887(cljs.core.rest(s__94888__$2)));
}
} else {
return null;
}
break;
}
});})(samples,samples__$1,G__94872,map__94869,map__94869__$1,attribute,_STAR_reconciler_STAR__orig_val__94857,_STAR_depth_STAR__orig_val__94858,_STAR_shared_STAR__orig_val__94859,_STAR_instrument_STAR__orig_val__94860,_STAR_parent_STAR__orig_val__94861,_STAR_reconciler_STAR__temp_val__94862,_STAR_depth_STAR__temp_val__94863,_STAR_shared_STAR__temp_val__94864,_STAR_instrument_STAR__temp_val__94865,_STAR_parent_STAR__temp_val__94866,this$,this__50885__auto__,x94855_96412))
,null,null));
});})(samples,samples__$1,G__94872,map__94869,map__94869__$1,attribute,_STAR_reconciler_STAR__orig_val__94857,_STAR_depth_STAR__orig_val__94858,_STAR_shared_STAR__orig_val__94859,_STAR_instrument_STAR__orig_val__94860,_STAR_parent_STAR__orig_val__94861,_STAR_reconciler_STAR__temp_val__94862,_STAR_depth_STAR__temp_val__94863,_STAR_shared_STAR__temp_val__94864,_STAR_instrument_STAR__temp_val__94865,_STAR_parent_STAR__temp_val__94866,this$,this__50885__auto__,x94855_96412))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),samples__$1));
}catch (e94883){var ex = e94883;
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error generating samples:",fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.ex_message(ex)], 0))], 0));
}})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__94872,G__94873) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__94872,G__94873));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94861;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94860;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94859;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94858;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94857;
}});})(x94855_96412))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.fulcro$isComponent = true;

var x94902_96422 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;
x94902_96422.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94902_96422.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94902_96422){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x94902_96422))
;

x94902_96422.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94902_96422){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94902_96422))
;


var x94907_96425 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x94907_96425.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94907_96425.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94907_96425){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x94907_96425))
;

x94907_96425.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94907_96425){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94907_96425))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/ExamplesPanel");
});
com.wsscode.pathom.viz.index_explorer.examples_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ExamplesPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeGraphPanel(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraphPanel","com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel",-658371264),com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);

var x94922_96428 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x94922_96428.render = ((function (x94922_96428){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__94926 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__94927 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__94928 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__94929 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__94930 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__94931 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__94932 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__94933 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__94934 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__94935 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__94931;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__94932;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__94933;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__94934;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__94935;

try{var map__94938 = fulcro.client.primitives.props(this$);
var map__94938__$1 = (((((!((map__94938 == null))))?(((((map__94938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94938):map__94938);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94938__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94938__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242));
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94938__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994));
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94938__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448));
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94938__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052));
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94938__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94938__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var map__94939 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__94939__$1 = (((((!((map__94939 == null))))?(((((map__94939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94939):map__94939);
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94939__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94939__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94939__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var G__94944 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__94946 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042)], 0))], null);
var G__94947 = (function (){var G__94952 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__94953 = fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Depth"], 0));
var G__94954 = (function (){var G__94955 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),attr_depth,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__94952,G__94953,G__94946,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428){
return (function (p1__94911_SHARP_,p2__94910_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),p2__94910_SHARP_);
});})(G__94952,G__94953,G__94946,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428))
], null);
return (com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1(G__94955) : com.wsscode.pathom.viz.ui.kit.number_input.call(null,G__94955));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__94952,G__94953,G__94954) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__94952,G__94953,G__94954));
})();
var G__94948 = (function (){var G__94956 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__94946,G__94947,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),cljs.core.not(direct_reaches_QMARK_));
});})(G__94946,G__94947,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428))
], null);
var G__94957 = "Direct inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__94956,G__94957) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__94956,G__94957));
})();
var G__94949 = (function (){var G__94958 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__94946,G__94947,G__94948,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),cljs.core.not(nested_reaches_QMARK_));
});})(G__94946,G__94947,G__94948,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428))
], null);
var G__94959 = "Nested inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__94958,G__94959) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__94958,G__94959));
})();
var G__94950 = (function (){var G__94960 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__94946,G__94947,G__94948,G__94949,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),cljs.core.not(direct_provides_QMARK_));
});})(G__94946,G__94947,G__94948,G__94949,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428))
], null);
var G__94961 = "Direct outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__94960,G__94961) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__94960,G__94961));
})();
var G__94951 = (function (){var G__94963 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__94946,G__94947,G__94948,G__94949,G__94950,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),cljs.core.not(nested_provides_QMARK_));
});})(G__94946,G__94947,G__94948,G__94949,G__94950,map__94938,map__94938__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__94939,map__94939__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__94926,_STAR_depth_STAR__orig_val__94927,_STAR_shared_STAR__orig_val__94928,_STAR_instrument_STAR__orig_val__94929,_STAR_parent_STAR__orig_val__94930,_STAR_reconciler_STAR__temp_val__94931,_STAR_depth_STAR__temp_val__94932,_STAR_shared_STAR__temp_val__94933,_STAR_instrument_STAR__temp_val__94934,_STAR_parent_STAR__temp_val__94935,this$,this__50885__auto__,x94922_96428))
], null);
var G__94964 = "Nested outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__94963,G__94964) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__94963,G__94964));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6(G__94946,G__94947,G__94948,G__94949,G__94950,G__94951) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__94946,G__94947,G__94948,G__94949,G__94950,G__94951));
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","scrollbars?","com.wsscode.pathom.viz.ui.kit/scrollbars?",1389911780),false], null);
var G__94945 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph",".graph",-327673667),(function (){var shared_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),direct_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),nested_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),direct_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),nested_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),interconnections_QMARK_], null);
var G__94966 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),com.wsscode.pathom.viz.index_explorer.attribute_network(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),attr_depth,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes], null),shared_options], 0)),attribute),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),graph_comm], null),shared_options], 0));
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__94966) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__94966));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__94944,G__94945) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__94944,G__94945));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__94930;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__94929;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__94928;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__94927;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__94926;
}});})(x94922_96428))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.fulcro$isComponent = true;

var x94967_96438 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;
x94967_96438.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94967_96438.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94967_96438){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x94967_96438))
;

x94967_96438.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94967_96438){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94967_96438))
;

x94967_96438.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x94967_96438.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x94967_96438){
return (function (this$,p__94971){
var map__94972 = p__94971;
var map__94972__$1 = (((((!((map__94972 == null))))?(((((map__94972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94972):map__94972);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94972__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94972__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x94967_96438))
;

x94967_96438.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94967_96438.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94967_96438){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94967_96438))
;

x94967_96438.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94967_96438.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94967_96438){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x94967_96438))
;


var x94978_96439 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x94978_96439.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x94978_96439.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x94978_96439){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x94978_96439))
;

x94978_96439.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x94978_96439){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x94978_96439))
;

x94978_96439.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x94978_96439.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x94978_96439){
return (function (this$,p__94981){
var map__94982 = p__94981;
var map__94982__$1 = (((((!((map__94982 == null))))?(((((map__94982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94982):map__94982);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94982__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94982__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x94978_96439))
;

x94978_96439.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x94978_96439.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x94978_96439){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x94978_96439))
;

x94978_96439.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x94978_96439.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x94978_96439){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x94978_96439))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeView = (function com$wsscode$pathom$viz$index_explorer$AttributeView(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeView","com.wsscode.pathom.viz.index-explorer/AttributeView",1769179789),com.wsscode.pathom.viz.index_explorer.AttributeView);

var x95002_96441 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x95002_96441.render = ((function (x95002_96441){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95003 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95004 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95005 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95006 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95007 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95008 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95009 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95010 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95011 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95012 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95008;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95009;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95010;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95011;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95012;

try{var map__95013 = fulcro.client.primitives.props(this$);
var map__95013__$1 = (((((!((map__95013 == null))))?(((((map__95013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95013):map__95013);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var provides_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755));
var provides_tree_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325));
var attr_input_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var show_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552));
var mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271));
var attr_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610));
var reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword(">","reach-via",">/reach-via",725397135));
var graph_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737));
var mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95013__$1,new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], 0)),(function (){var G__95016 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),show_graph_QMARK_,new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669)], 0)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),cljs.core.not(show_graph_QMARK_));
});})(computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
], null);
var G__95017 = "Graph View";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__95016,G__95017) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__95016,G__95017));
})()], 0)),(cljs.core.truth_(show_graph_QMARK_)?(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(graph_panel,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,graph_panel,computed__$1)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".columns$scrollbars",".columns$scrollbars",-1170212651),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list",".data-list",949465177),((cljs.core.seq(attr_reach_via))?(com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2(reach_via,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.call(null,reach_via,computed__$1)):null),((cljs.core.seq(attr_output_in))?(function (){var G__95018 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_output_in)], null);
var G__95019 = (function (){var iter__4523__auto__ = ((function (G__95018,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function com$wsscode$pathom$viz$index_explorer$iter__95021(s__95022){
return (new cljs.core.LazySeq(null,((function (G__95018,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function (){
var s__95022__$1 = s__95022;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__95022__$1);
if(temp__5720__auto__){
var s__95022__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95022__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95022__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95024 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95023 = (0);
while(true){
if((i__95023 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__95023);
cljs.core.chunk_append(b__95024,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__96443 = (i__95023 + (1));
i__95023 = G__96443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95024),com$wsscode$pathom$viz$index_explorer$iter__95021(cljs.core.chunk_rest(s__95022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95024),null);
}
} else {
var resolver = cljs.core.first(s__95022__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__95021(cljs.core.rest(s__95022__$2)));
}
} else {
return null;
}
break;
}
});})(G__95018,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
,null,null));
});})(G__95018,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95018,G__95019) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95018,G__95019));
})():null),((cljs.core.seq(attr_combinations))?(function (){var G__95031 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input Combinations",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_combinations)], null);
var G__95032 = (function (){var iter__4523__auto__ = ((function (G__95031,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function com$wsscode$pathom$viz$index_explorer$iter__95033(s__95034){
return (new cljs.core.LazySeq(null,((function (G__95031,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function (){
var s__95034__$1 = s__95034;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__95034__$1);
if(temp__5720__auto__){
var s__95034__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95034__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95034__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95036 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95035 = (0);
while(true){
if((i__95035 < size__4522__auto__)){
var input = cljs.core._nth(c__4521__auto__,i__95035);
cljs.core.chunk_append(b__95036,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1));

var G__96448 = (i__95035 + (1));
i__95035 = G__96448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95036),com$wsscode$pathom$viz$index_explorer$iter__95033(cljs.core.chunk_rest(s__95034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95036),null);
}
} else {
var input = cljs.core.first(s__95034__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__95033(cljs.core.rest(s__95034__$2)));
}
} else {
return null;
}
break;
}
});})(G__95031,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
,null,null));
});})(G__95031,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort),com.wsscode.pathom.viz.helpers.vector_compare,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,G__95031,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function (p1__94991_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),p1__94991_SHARP_);
});})(iter__4523__auto__,G__95031,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
,attr_combinations)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95031,G__95032) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95031,G__95032));
})():null),((cljs.core.seq(attr_mutation_param_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2(mutation_param_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.call(null,mutation_param_in,computed__$1)):null),((cljs.core.seq(attr_mutation_output_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2(mutation_output_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.call(null,mutation_output_in,computed__$1)):null),(function (){var temp__5718__auto__ = com.wsscode.spec_inspec.safe_form(attribute);
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__95041 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Spec"], null);
var G__95042 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95041,G__95042) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95041,G__95042));
})(),(function (){var G__95043 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__95044 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2(G__95043,G__95044) : com.wsscode.pathom.viz.index_explorer.examples_panel.call(null,G__95043,G__95044));
})()], 0));
} else {
return null;
}
})(),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-attr-left-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-attr-left-menu",-1946076893))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),((cljs.core.seq(attr_provides))?(function (){var G__95045 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Provides",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_provides)], null);
var G__95046 = (function (){var G__95047 = provides_tree;
var G__95048 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),provides_tree_source,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),((function (G__95047,G__95045,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function (p__95049){
var map__95050 = p__95049;
var map__95050__$1 = (((((!((map__95050 == null))))?(((((map__95050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95050):map__95050);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95050__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sym_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95050__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
var G__95052 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-container",".links-container",-1347961892)], 0))], null);
var G__95053 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
var G__95054 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-display",".links-display",-2102960556)], 0))], null),(function (){var iter__4523__auto__ = ((function (G__95052,G__95053,map__95050,map__95050__$1,key,sym_set,G__95047,G__95045,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function com$wsscode$pathom$viz$index_explorer$iter__95055(s__95056){
return (new cljs.core.LazySeq(null,((function (G__95052,G__95053,map__95050,map__95050__$1,key,sym_set,G__95047,G__95045,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function (){
var s__95056__$1 = s__95056;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__95056__$1);
if(temp__5720__auto__){
var s__95056__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95056__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95056__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95058 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95057 = (0);
while(true){
if((i__95057 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__95057);
cljs.core.chunk_append(b__95058,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1));

var G__96454 = (i__95057 + (1));
i__95057 = G__96454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95058),com$wsscode$pathom$viz$index_explorer$iter__95055(cljs.core.chunk_rest(s__95056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95058),null);
}
} else {
var sym = cljs.core.first(s__95056__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__95055(cljs.core.rest(s__95056__$2)));
}
} else {
return null;
}
break;
}
});})(G__95052,G__95053,map__95050,map__95050__$1,key,sym_set,G__95047,G__95045,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
,null,null));
});})(G__95052,G__95053,map__95050,map__95050__$1,key,sym_set,G__95047,G__95045,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(sym_set));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__95052,G__95053,G__95054) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__95052,G__95053,G__95054));
});})(G__95047,G__95045,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__95047,G__95048) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__95047,G__95048));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95045,G__95046) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95045,G__95046));
})():null),((cljs.core.seq(attr_input_in))?(function (){var G__95064 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_input_in)], null);
var G__95065 = (function (){var iter__4523__auto__ = ((function (G__95064,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function com$wsscode$pathom$viz$index_explorer$iter__95066(s__95067){
return (new cljs.core.LazySeq(null,((function (G__95064,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441){
return (function (){
var s__95067__$1 = s__95067;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__95067__$1);
if(temp__5720__auto__){
var s__95067__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95067__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95067__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95069 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95068 = (0);
while(true){
if((i__95068 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__95068);
cljs.core.chunk_append(b__95069,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__96459 = (i__95068 + (1));
i__95068 = G__96459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95069),com$wsscode$pathom$viz$index_explorer$iter__95066(cljs.core.chunk_rest(s__95067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95069),null);
}
} else {
var resolver = cljs.core.first(s__95067__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__95066(cljs.core.rest(s__95067__$2)));
}
} else {
return null;
}
break;
}
});})(G__95064,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
,null,null));
});})(G__95064,computed__$1,map__95013,map__95013__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__95003,_STAR_depth_STAR__orig_val__95004,_STAR_shared_STAR__orig_val__95005,_STAR_instrument_STAR__orig_val__95006,_STAR_parent_STAR__orig_val__95007,_STAR_reconciler_STAR__temp_val__95008,_STAR_depth_STAR__temp_val__95009,_STAR_shared_STAR__temp_val__95010,_STAR_instrument_STAR__temp_val__95011,_STAR_parent_STAR__temp_val__95012,this$,this__50885__auto__,x95002_96441))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_input_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95064,G__95065) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95064,G__95065));
})():null)], 0))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95007;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95006;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95005;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95004;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95003;
}});})(x95002_96441))
;

x95002_96441.initLocalState = ((function (x95002_96441){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x95002_96441){
return (function (p__95076){
var map__95077 = p__95076;
var map__95077__$1 = (((((!((map__95077 == null))))?(((((map__95077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95077):map__95077);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95077__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__95080 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__95080__$1 = (((((!((map__95080 == null))))?(((((map__95080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95080):map__95080);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95080__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__95083 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__95083) : on_select_resolver.call(null,G__95083));
});})(this$,x95002_96441))
], null);
var obj95086 = ({"fulcro$state":ret__50860__auto__});
return obj95086;
});})(x95002_96441))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeView;

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.fulcro$isComponent = true;

var x95087_96460 = com.wsscode.pathom.viz.index_explorer.AttributeView;
x95087_96460.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95087_96460.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95087_96460){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x95087_96460))
;

x95087_96460.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95087_96460){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x95087_96460))
;

x95087_96460.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95087_96460.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95087_96460){
return (function (this$,p__95091){
var map__95093 = p__95091;
var map__95093__$1 = (((((!((map__95093 == null))))?(((((map__95093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95093):map__95093);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95093__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95093__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x95087_96460))
;

x95087_96460.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95087_96460.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95087_96460){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95087_96460))
;

x95087_96460.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95087_96460.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95087_96460){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x95087_96460))
;


var x95101_96461 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x95101_96461.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95101_96461.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95101_96461){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x95101_96461))
;

x95101_96461.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95101_96461){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x95101_96461))
;

x95101_96461.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95101_96461.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95101_96461){
return (function (this$,p__95107){
var map__95108 = p__95107;
var map__95108__$1 = (((((!((map__95108 == null))))?(((((map__95108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95108):map__95108);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95108__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95108__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x95101_96461))
;

x95101_96461.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95101_96461.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95101_96461){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95101_96461))
;

x95101_96461.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95101_96461.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95101_96461){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x95101_96461))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.AttributeView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.attribute_view = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null));
com.wsscode.pathom.viz.index_explorer.out_all_attributes = (function com$wsscode$pathom$viz$index_explorer$out_all_attributes(p__95117,input){
var map__95118 = p__95117;
var map__95118__$1 = (((((!((map__95118 == null))))?(((((map__95118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95118):map__95118);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__95118,map__95118__$1,children){
return (function (attrs,p__95123){
var map__95125 = p__95123;
var map__95125__$1 = (((((!((map__95125 == null))))?(((((map__95125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95125):map__95125);
var node = map__95125__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95125__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__95128 = ((cljs.core.contains_QMARK_(input,key))?attrs:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key));
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__95128,(com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2(node,input) : com.wsscode.pathom.viz.index_explorer.out_all_attributes.call(null,node,input)));
} else {
return G__95128;
}
});})(map__95118,map__95118__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverView = (function com$wsscode$pathom$viz$index_explorer$ResolverView(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverView","com.wsscode.pathom.viz.index-explorer/ResolverView",1233559847),com.wsscode.pathom.viz.index_explorer.ResolverView);

var x95135_96482 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x95135_96482.render = ((function (x95135_96482){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95136 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95137 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95138 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95139 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95140 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95141 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95142 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95143 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95144 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95145 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95141;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95142;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95143;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95144;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95145;

try{var map__95146 = fulcro.client.primitives.props(this$);
var map__95146__$1 = (((((!((map__95146 == null))))?(((((map__95146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95146):map__95146);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95146__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95146__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95146__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95146__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95146__$1,new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343));
var map__95147 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__95147__$1 = (((((!((map__95147 == null))))?(((((map__95147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95147):map__95147);
var computed = map__95147__$1;
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95147__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95147__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.index_explorer.ResolverView);
var input_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input)))?cljs.core.first(input):input);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__95152 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__95153 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__95154 = (function (){var G__95155 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__95156 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),(cljs.core.truth_(batch_QMARK_)?(function (){var G__95158 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Batch"], null);
var G__95159 = "True";
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95158,G__95159) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95158,G__95159));
})():null),(cljs.core.truth_(input)?(function (){var G__95162 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input"], null);
var G__95163 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input_SINGLEQUOTE_], null),computed__$1);
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95162,G__95163) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95162,G__95163));
})():null),(cljs.core.truth_(output)?(function (){var G__95164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__95165 = (function (){var G__95166 = output_tree;
var G__95167 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword(null,"children","children",-940561982),((function (G__95166,G__95164,G__95155,G__95152,G__95153,input_SINGLEQUOTE_,computed__$1,map__95146,map__95146__$1,sym,input,output,batch_QMARK_,output_tree,map__95147,map__95147__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__95136,_STAR_depth_STAR__orig_val__95137,_STAR_shared_STAR__orig_val__95138,_STAR_instrument_STAR__orig_val__95139,_STAR_parent_STAR__orig_val__95140,_STAR_reconciler_STAR__temp_val__95141,_STAR_depth_STAR__temp_val__95142,_STAR_shared_STAR__temp_val__95143,_STAR_instrument_STAR__temp_val__95144,_STAR_parent_STAR__temp_val__95145,this$,this__50885__auto__,x95135_96482){
return (function (p1__95130_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.Keyword(null,"key","key",-1516042587)),p1__95130_SHARP_);
});})(G__95166,G__95164,G__95155,G__95152,G__95153,input_SINGLEQUOTE_,computed__$1,map__95146,map__95146__$1,sym,input,output,batch_QMARK_,output_tree,map__95147,map__95147__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__95136,_STAR_depth_STAR__orig_val__95137,_STAR_shared_STAR__orig_val__95138,_STAR_instrument_STAR__orig_val__95139,_STAR_parent_STAR__orig_val__95140,_STAR_reconciler_STAR__temp_val__95141,_STAR_depth_STAR__temp_val__95142,_STAR_shared_STAR__temp_val__95143,_STAR_instrument_STAR__temp_val__95144,_STAR_parent_STAR__temp_val__95145,this$,this__50885__auto__,x95135_96482))
),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__95166,G__95167) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__95166,G__95167));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95164,G__95165) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95164,G__95165));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-resolver-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-resolver-menu",-1265412227))], 0));
var G__95157 = (cljs.core.truth_(input)?(function (){var resolver_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.out_all_attributes(edn_query_language.core.query__GT_ast(output),input),input_SINGLEQUOTE_);
var attrs = cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.select_keys(com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),resolver_attrs),input_SINGLEQUOTE_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
var G__95168 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318))], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__95168) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__95168));
})():null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__95155,G__95156,G__95157) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__95155,G__95156,G__95157));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__95152,G__95153,G__95154) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__95152,G__95153,G__95154));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95140;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95139;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95138;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95137;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95136;
}});})(x95135_96482))
;

x95135_96482.initLocalState = ((function (x95135_96482){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x95135_96482){
return (function (p__95171){
var map__95172 = p__95171;
var map__95172__$1 = (((((!((map__95172 == null))))?(((((map__95172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95172):map__95172);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95172__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__95176 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__95176__$1 = (((((!((map__95176 == null))))?(((((map__95176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95176):map__95176);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95176__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__95181 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__95181) : on_select_resolver.call(null,G__95181));
});})(this$,x95135_96482))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x95135_96482){
return (function (p__95183){
var map__95184 = p__95183;
var map__95184__$1 = (((((!((map__95184 == null))))?(((((map__95184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95184):map__95184);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95184__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
});})(this$,x95135_96482))
], null);
var obj95192 = ({"fulcro$state":ret__50860__auto__});
return obj95192;
});})(x95135_96482))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverView;

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.fulcro$isComponent = true;

var x95195_96496 = com.wsscode.pathom.viz.index_explorer.ResolverView;
x95195_96496.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95195_96496.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95195_96496){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x95195_96496))
;

x95195_96496.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95195_96496){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95195_96496))
;

x95195_96496.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95195_96496.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95195_96496){
return (function (this$,p__95198){
var map__95199 = p__95198;
var map__95199__$1 = (((((!((map__95199 == null))))?(((((map__95199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95199):map__95199);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95199__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95199__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x95195_96496))
;

x95195_96496.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95195_96496.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95195_96496){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95195_96496))
;

x95195_96496.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95195_96496.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95195_96496){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x95195_96496))
;


var x95203_96499 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x95203_96499.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95203_96499.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95203_96499){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x95203_96499))
;

x95203_96499.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95203_96499){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95203_96499))
;

x95203_96499.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95203_96499.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95203_96499){
return (function (this$,p__95208){
var map__95209 = p__95208;
var map__95209__$1 = (((((!((map__95209 == null))))?(((((map__95209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95209):map__95209);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95209__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95209__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x95203_96499))
;

x95203_96499.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95203_96499.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95203_96499){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95203_96499))
;

x95203_96499.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95203_96499.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95203_96499){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x95203_96499))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverView");
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationView","com.wsscode.pathom.viz.index-explorer/MutationView",1198577335),com.wsscode.pathom.viz.index_explorer.MutationView);

var x95228_96500 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x95228_96500.render = ((function (x95228_96500){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95231 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95232 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95233 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95234 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95235 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95236 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95237 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95238 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95239 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95240 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95236;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95237;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95238;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95239;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95240;

try{var map__95243 = fulcro.client.primitives.props(this$);
var map__95243__$1 = (((((!((map__95243 == null))))?(((((map__95243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95243):map__95243);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95243__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95243__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95243__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var mutation_params_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95243__$1,new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365));
var mutation_output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95243__$1,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980));
var G__95249 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__95250 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__95251 = (function (){var G__95252 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120),new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447)], 0));
var G__95253 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(params)?(function (){var G__95257 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Params"], null);
var G__95258 = (function (){var G__95259 = mutation_params_tree;
var G__95260 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(params),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__95259,G__95260) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__95259,G__95260));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95257,G__95258) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95257,G__95258));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-left","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-left",-356992926))], 0));
var G__95254 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0));
var G__95255 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(output)?(function (){var G__95262 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__95263 = (function (){var G__95264 = mutation_output_tree;
var G__95265 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__95264,G__95265) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__95264,G__95265));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95262,G__95263) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95262,G__95263));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-right","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-right",1791875010))], 0));
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__95252,G__95253,G__95254,G__95255) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__95252,G__95253,G__95254,G__95255));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__95249,G__95250,G__95251) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__95249,G__95250,G__95251));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95235;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95234;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95233;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95232;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95231;
}});})(x95228_96500))
;

x95228_96500.initLocalState = ((function (x95228_96500){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x95228_96500){
return (function (p__95268){
var map__95269 = p__95268;
var map__95269__$1 = (((((!((map__95269 == null))))?(((((map__95269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95269):map__95269);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95269__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(this$,x95228_96500))
], null);
var obj95275 = ({"fulcro$state":ret__50860__auto__});
return obj95275;
});})(x95228_96500))
;


com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationView;

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.fulcro$isComponent = true;

var x95277_96501 = com.wsscode.pathom.viz.index_explorer.MutationView;
x95277_96501.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95277_96501.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95277_96501){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x95277_96501))
;

x95277_96501.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95277_96501){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95277_96501))
;

x95277_96501.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95277_96501.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95277_96501){
return (function (this$,p__95282){
var map__95283 = p__95282;
var map__95283__$1 = (((((!((map__95283 == null))))?(((((map__95283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95283):map__95283);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95283__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95283__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x95277_96501))
;

x95277_96501.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95277_96501.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95277_96501){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95277_96501))
;

x95277_96501.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95277_96501.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95277_96501){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x95277_96501))
;


var x95289_96503 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x95289_96503.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95289_96503.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95289_96503){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x95289_96503))
;

x95289_96503.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95289_96503){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95289_96503))
;

x95289_96503.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95289_96503.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95289_96503){
return (function (this$,p__95291){
var map__95292 = p__95291;
var map__95292__$1 = (((((!((map__95292 == null))))?(((((map__95292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95292):map__95292);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95292__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95292__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x95289_96503))
;

x95289_96503.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95289_96503.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95289_96503){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95289_96503))
;

x95289_96503.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95289_96503.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95289_96503){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x95289_96503))
;


com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MutationView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.MutationView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.mutation_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
com.wsscode.pathom.viz.index_explorer.realize_references = (function com$wsscode$pathom$viz$index_explorer$realize_references(state,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__95298_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__95298_SHARP_);
}),coll);
});
com.wsscode.pathom.viz.index_explorer.max_search_results = (100);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-index-item","com.wsscode.pathom.viz.index-explorer/search-index-item",-560879594),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__95305){
return cljs.core.map_QMARK_(G__95305);
}),(function (G__95305){
return cljs.core.contains_QMARK_(G__95305,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
}),(function (G__95305){
return cljs.core.contains_QMARK_(G__95305,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
}),(function (G__95305){
return cljs.core.contains_QMARK_(G__95305,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
})], null),(function (G__95305){
return ((cljs.core.map_QMARK_(G__95305)) && (cljs.core.contains_QMARK_(G__95305,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))) && (cljs.core.contains_QMARK_(G__95305,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))) && (cljs.core.contains_QMARK_(G__95305,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)])));
com.wsscode.pathom.viz.index_explorer.active_search_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$active_search_QMARK_(text){
return (cljs.core.count(text) > (2));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),(function (fulcro_incoming_env,_,p__95324){
var map__95325 = p__95324;
var map__95325__$1 = (((((!((map__95325 == null))))?(((((map__95325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95325):map__95325);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95325__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95329 = fulcro_incoming_env;
var map__95329__$1 = (((((!((map__95329 == null))))?(((((map__95329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95329):map__95329);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95329__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95329__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95329,map__95329__$1,ref,state,map__95325,map__95325__$1,text){
return (function (){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935)));
var fuzzy_res = ((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),items,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),text], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.SearchEverything,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.max_search_results,fuzzy_res))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),text], 0));
});})(map__95329,map__95329__$1,ref,state,map__95325,map__95325__$1,text))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.remove_not_found = (function com$wsscode$pathom$viz$index_explorer$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__95337){
var vec__95338 = p__95337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95338,(1),null);
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllAttributesList","com.wsscode.pathom.viz.index-explorer/AllAttributesList",741873297),com.wsscode.pathom.viz.index_explorer.AllAttributesList);

var x95345_96504 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
x95345_96504.render = ((function (x95345_96504){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95347 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95348 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95349 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95350 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95351 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95352 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95353 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95354 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95355 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95356 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95352;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95353;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95354;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95355;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95356;

try{var map__95358 = fulcro.client.primitives.props(this$);
var map__95358__$1 = (((((!((map__95358 == null))))?(((((map__95358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95358):map__95358);
var props = map__95358__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95358__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__95360 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Attributes");
var G__95361 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__95360,map__95358,map__95358__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__95347,_STAR_depth_STAR__orig_val__95348,_STAR_shared_STAR__orig_val__95349,_STAR_instrument_STAR__orig_val__95350,_STAR_parent_STAR__orig_val__95351,_STAR_reconciler_STAR__temp_val__95352,_STAR_depth_STAR__temp_val__95353,_STAR_shared_STAR__temp_val__95354,_STAR_instrument_STAR__temp_val__95355,_STAR_parent_STAR__temp_val__95356,this$,this__50885__auto__,x95345_96504){
return (function (p__95362){
var map__95363 = p__95362;
var map__95363__$1 = (((((!((map__95363 == null))))?(((((map__95363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95363):map__95363);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95363__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], null),computed);
});})(G__95360,map__95358,map__95358__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__95347,_STAR_depth_STAR__orig_val__95348,_STAR_shared_STAR__orig_val__95349,_STAR_instrument_STAR__orig_val__95350,_STAR_parent_STAR__orig_val__95351,_STAR_reconciler_STAR__temp_val__95352,_STAR_depth_STAR__temp_val__95353,_STAR_shared_STAR__temp_val__95354,_STAR_instrument_STAR__temp_val__95355,_STAR_parent_STAR__temp_val__95356,this$,this__50885__auto__,x95345_96504))
)),attributes)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__95360,G__95361) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__95360,G__95361));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95351;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95350;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95349;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95348;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95347;
}});})(x95345_96504))
;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllAttributesList;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.fulcro$isComponent = true;

var x95367_96505 = com.wsscode.pathom.viz.index_explorer.AllAttributesList;


var x95368_96506 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AllAttributesList");
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllResolversList","com.wsscode.pathom.viz.index-explorer/AllResolversList",1219737218),com.wsscode.pathom.viz.index_explorer.AllResolversList);

var x95372_96507 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
x95372_96507.render = ((function (x95372_96507){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95373 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95374 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95375 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95376 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95377 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95378 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95379 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95380 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95381 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95382 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95378;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95379;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95380;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95381;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95382;

try{var map__95383 = fulcro.client.primitives.props(this$);
var map__95383__$1 = (((((!((map__95383 == null))))?(((((map__95383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95383):map__95383);
var props = map__95383__$1;
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95383__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__95385 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Resolvers");
var G__95386 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__95385,map__95383,map__95383__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__95373,_STAR_depth_STAR__orig_val__95374,_STAR_shared_STAR__orig_val__95375,_STAR_instrument_STAR__orig_val__95376,_STAR_parent_STAR__orig_val__95377,_STAR_reconciler_STAR__temp_val__95378,_STAR_depth_STAR__temp_val__95379,_STAR_shared_STAR__temp_val__95380,_STAR_instrument_STAR__temp_val__95381,_STAR_parent_STAR__temp_val__95382,this$,this__50885__auto__,x95372_96507){
return (function (p1__95369_SHARP_){
return com.wsscode.pathom.viz.index_explorer.resolver_link(p1__95369_SHARP_,computed);
});})(G__95385,map__95383,map__95383__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__95373,_STAR_depth_STAR__orig_val__95374,_STAR_shared_STAR__orig_val__95375,_STAR_instrument_STAR__orig_val__95376,_STAR_parent_STAR__orig_val__95377,_STAR_reconciler_STAR__temp_val__95378,_STAR_depth_STAR__temp_val__95379,_STAR_shared_STAR__temp_val__95380,_STAR_instrument_STAR__temp_val__95381,_STAR_parent_STAR__temp_val__95382,this$,this__50885__auto__,x95372_96507))
,resolvers)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__95385,G__95386) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__95385,G__95386));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95377;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95376;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95375;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95374;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95373;
}});})(x95372_96507))
;


com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllResolversList;

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.fulcro$isComponent = true;

var x95387_96508 = com.wsscode.pathom.viz.index_explorer.AllResolversList;


var x95388_96509 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;


com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AllResolversList");
});
com.wsscode.pathom.viz.index_explorer.all_resolvers_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllResolversList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllMutationsList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllMutationsList = (function com$wsscode$pathom$viz$index_explorer$AllMutationsList(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllMutationsList","com.wsscode.pathom.viz.index-explorer/AllMutationsList",-1767454340),com.wsscode.pathom.viz.index_explorer.AllMutationsList);

var x95392_96510 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
x95392_96510.render = ((function (x95392_96510){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95393 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95394 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95395 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95396 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95397 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95398 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95399 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95400 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95401 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95402 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95398;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95399;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95400;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95401;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95402;

try{var map__95403 = fulcro.client.primitives.props(this$);
var map__95403__$1 = (((((!((map__95403 == null))))?(((((map__95403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95403):map__95403);
var props = map__95403__$1;
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95403__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__95405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Mutations");
var G__95406 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__95405,map__95403,map__95403__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__95393,_STAR_depth_STAR__orig_val__95394,_STAR_shared_STAR__orig_val__95395,_STAR_instrument_STAR__orig_val__95396,_STAR_parent_STAR__orig_val__95397,_STAR_reconciler_STAR__temp_val__95398,_STAR_depth_STAR__temp_val__95399,_STAR_shared_STAR__temp_val__95400,_STAR_instrument_STAR__temp_val__95401,_STAR_parent_STAR__temp_val__95402,this$,this__50885__auto__,x95392_96510){
return (function (p1__95389_SHARP_){
return com.wsscode.pathom.viz.index_explorer.mutation_link(p1__95389_SHARP_,computed);
});})(G__95405,map__95403,map__95403__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__95393,_STAR_depth_STAR__orig_val__95394,_STAR_shared_STAR__orig_val__95395,_STAR_instrument_STAR__orig_val__95396,_STAR_parent_STAR__orig_val__95397,_STAR_reconciler_STAR__temp_val__95398,_STAR_depth_STAR__temp_val__95399,_STAR_shared_STAR__temp_val__95400,_STAR_instrument_STAR__temp_val__95401,_STAR_parent_STAR__temp_val__95402,this$,this__50885__auto__,x95392_96510))
,mutations)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__95405,G__95406) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__95405,G__95406));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95397;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95396;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95395;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95394;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95393;
}});})(x95392_96510))
;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllMutationsList;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.fulcro$isComponent = true;

var x95408_96511 = com.wsscode.pathom.viz.index_explorer.AllMutationsList;


var x95409_96512 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AllMutationsList");
});
com.wsscode.pathom.viz.index_explorer.all_mutations_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllMutationsList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.SearchEverything !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.SearchEverything = (function com$wsscode$pathom$viz$index_explorer$SearchEverything(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","SearchEverything","com.wsscode.pathom.viz.index-explorer/SearchEverything",384463028),com.wsscode.pathom.viz.index_explorer.SearchEverything);

var x95424_96513 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x95424_96513.render = ((function (x95424_96513){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95427 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95428 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95429 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95430 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95431 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95432 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95433 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95434 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95435 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95436 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95432;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95433;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95434;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95435;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95436;

try{var map__95438 = fulcro.client.primitives.props(this$);
var map__95438__$1 = (((((!((map__95438 == null))))?(((((map__95438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95438):map__95438);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var collapse_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
var collapse_resolvers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
var collapse_mutations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95438__$1,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__95443 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__95444 = (function (){var G__95446 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","left-icon","com.wsscode.pathom.viz.ui.kit/left-icon",-1594855964),new cljs.core.Keyword(null,"$fa-search","$fa-search",1999917289),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-clear","com.wsscode.pathom.viz.ui.kit/on-clear",-221492596),((function (G__95443,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"");
});})(G__95443,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513))
], null);
return (com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1(G__95446) : com.wsscode.pathom.viz.ui.kit.text_field.call(null,G__95446));
})();
var G__95445 = (function (){var G__95448 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0));
var G__95449 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((!(com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))))?"none":null)], null)], null),((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513){
return (function (p__95453){
var map__95454 = p__95453;
var map__95454__$1 = (((((!((map__95454 == null))))?(((((map__95454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95454):map__95454);
var search_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95454__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
var search_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95454__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
var match_hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95454__$1,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739));
var G__95456 = search_type;
var G__95456__$1 = (((G__95456 instanceof cljs.core.Keyword))?G__95456.fqn:null);
switch (G__95456__$1) {
case "com.wsscode.pathom.viz.index-explorer/search-type-attribute":
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__95456,G__95456__$1,map__95454,map__95454__$1,search_value,search_type,match_hl,G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__95456,G__95456__$1,map__95454,map__95454__$1,search_value,search_type,match_hl,G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-resolver":
return com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__95456,G__95456__$1,map__95454,map__95454__$1,search_value,search_type,match_hl,G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__95456,G__95456__$1,map__95454,map__95454__$1,search_value,search_type,match_hl,G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-mutation":
return com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__95456,G__95456__$1,map__95454,map__95454__$1,search_value,search_type,match_hl,G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__95456,G__95456__$1,map__95454,map__95454__$1,search_value,search_type,match_hl,G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513))
], null),computed);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__95456__$1)].join('')));

}
});})(G__95448,G__95443,G__95444,map__95438,map__95438__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__95427,_STAR_depth_STAR__orig_val__95428,_STAR_shared_STAR__orig_val__95429,_STAR_instrument_STAR__orig_val__95430,_STAR_parent_STAR__orig_val__95431,_STAR_reconciler_STAR__temp_val__95432,_STAR_depth_STAR__temp_val__95433,_STAR_shared_STAR__temp_val__95434,_STAR_instrument_STAR__temp_val__95435,_STAR_parent_STAR__temp_val__95436,this$,this__50885__auto__,x95424_96513))
)),search_results):null)], 0));
var G__95450 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((cljs.core.count(text) > (2)))?"none":null)], null)], null),(function (){var G__95461 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_attributes_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782))], null);
var G__95462 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2(G__95461,G__95462) : com.wsscode.pathom.viz.index_explorer.all_attributes_list.call(null,G__95461,G__95462));
})(),(function (){var G__95463 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_resolvers_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560))], null);
var G__95464 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2(G__95463,G__95464) : com.wsscode.pathom.viz.index_explorer.all_resolvers_list.call(null,G__95463,G__95464));
})(),(function (){var G__95465 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),mutations,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_mutations_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814))], null);
var G__95466 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2(G__95465,G__95466) : com.wsscode.pathom.viz.index_explorer.all_mutations_list.call(null,G__95465,G__95466));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__95448,G__95449,G__95450) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__95448,G__95449,G__95450));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__95443,G__95444,G__95445) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__95443,G__95444,G__95445));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95431;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95430;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95429;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95428;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95427;
}});})(x95424_96513))
;

x95424_96513.initLocalState = ((function (x95424_96513){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),((function (this$,x95424_96513){
return (function (p1__95413_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.viz.helpers.target_value(p1__95413_SHARP_),null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x95424_96513))
,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782),((function (this$,x95424_96513){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
});})(this$,x95424_96513))
,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560),((function (this$,x95424_96513){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
});})(this$,x95424_96513))
,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814),((function (this$,x95424_96513){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
});})(this$,x95424_96513))
,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),(function (){var props = fulcro.client.primitives.props(this$);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (props,computed,this$,x95424_96513){
return (function (p__95472){
var map__95474 = p__95472;
var map__95474__$1 = (((((!((map__95474 == null))))?(((((map__95474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95474):map__95474);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95474__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed);
});})(props,computed,this$,x95424_96513))
)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281).cljs$core$IFn$_invoke$arity$1(props))], 0));
})()], null);
var obj95479 = ({"fulcro$state":ret__50860__auto__});
return obj95479;
});})(x95424_96513))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor = com.wsscode.pathom.viz.index_explorer.SearchEverything;

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.fulcro$isComponent = true;

var x95481_96515 = com.wsscode.pathom.viz.index_explorer.SearchEverything;
x95481_96515.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95481_96515.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95481_96515){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x95481_96515))
;

x95481_96515.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95481_96515){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95481_96515))
;

x95481_96515.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95481_96515.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95481_96515){
return (function (this$,p__95484){
var map__95485 = p__95484;
var map__95485__$1 = (((((!((map__95485 == null))))?(((((map__95485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95485):map__95485);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95485__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95485__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x95481_96515))
;

x95481_96515.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95481_96515.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95481_96515){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95481_96515))
;

x95481_96515.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95481_96515.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95481_96515){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x95481_96515))
;


var x95488_96516 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x95488_96516.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95488_96516.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95488_96516){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x95488_96516))
;

x95488_96516.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95488_96516){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95488_96516))
;

x95488_96516.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95488_96516.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95488_96516){
return (function (this$,p__95491){
var map__95492 = p__95491;
var map__95492__$1 = (((((!((map__95492 == null))))?(((((map__95492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95492):map__95492);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95492__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95492__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x95488_96516))
;

x95488_96516.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95488_96516.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95488_96516){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95488_96516))
;

x95488_96516.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95488_96516.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95488_96516){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x95488_96516))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/SearchEverything");
});
com.wsscode.pathom.viz.index_explorer.search_everything = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeMismatchPanel(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeMismatchPanel","com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel",653731723),com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);

var x95526_96517 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x95526_96517.render = ((function (x95526_96517){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95528 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95529 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95530 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95531 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95532 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95533 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95534 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95535 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95536 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95537 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95533;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95534;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95535;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95536;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95537;

try{var map__95538 = fulcro.client.primitives.props(this$);
var map__95538__$1 = (((((!((map__95538 == null))))?(((((map__95538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95538):map__95538);
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95538__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var attr_mismatch_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95538__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__95540 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Attributes with type mismatch"], null);
var G__95541 = (function (){var iter__4523__auto__ = ((function (G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function com$wsscode$pathom$viz$index_explorer$iter__95543(s__95544){
return (new cljs.core.LazySeq(null,((function (G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function (){
var s__95544__$1 = s__95544;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__95544__$1);
if(temp__5720__auto__){
var s__95544__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95544__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95544__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95546 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95545 = (0);
while(true){
if((i__95545 < size__4522__auto__)){
var map__95547 = cljs.core._nth(c__4521__auto__,i__95545);
var map__95547__$1 = (((((!((map__95547 == null))))?(((((map__95547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95547):map__95547);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95547__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95547__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95547__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
cljs.core.chunk_append(b__95546,(function (){var G__95551 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (i__95545,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(i__95545,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__95552 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95555(s__95556){
return (new cljs.core.LazySeq(null,((function (i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function (){
var s__95556__$1 = s__95556;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__95556__$1);
if(temp__5720__auto____$1){
var s__95556__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__95556__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__95556__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__95558 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__95557 = (0);
while(true){
if((i__95557 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__95557);
cljs.core.chunk_append(b__95558,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__96518 = (i__95557 + (1));
i__95557 = G__96518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95558),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95555(cljs.core.chunk_rest(s__95556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95558),null);
}
} else {
var resolver = cljs.core.first(s__95556__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95555(cljs.core.rest(s__95556__$2)));
}
} else {
return null;
}
break;
}
});})(i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
,null,null));
});})(i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95562(s__95563){
return (new cljs.core.LazySeq(null,((function (i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function (){
var s__95563__$1 = s__95563;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__95563__$1);
if(temp__5720__auto____$1){
var s__95563__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__95563__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__95563__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__95565 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__95564 = (0);
while(true){
if((i__95564 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__95564);
cljs.core.chunk_append(b__95565,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__96519 = (i__95564 + (1));
i__95564 = G__96519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95565),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95562(cljs.core.chunk_rest(s__95563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95565),null);
}
} else {
var resolver = cljs.core.first(s__95563__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95562(cljs.core.rest(s__95563__$2)));
}
} else {
return null;
}
break;
}
});})(i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
,null,null));
});})(i__95545,G__95551,map__95547,map__95547__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__95546,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__95551,G__95552) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__95551,G__95552));
})());

var G__96520 = (i__95545 + (1));
i__95545 = G__96520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95546),com$wsscode$pathom$viz$index_explorer$iter__95543(cljs.core.chunk_rest(s__95544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95546),null);
}
} else {
var map__95569 = cljs.core.first(s__95544__$2);
var map__95569__$1 = (((((!((map__95569 == null))))?(((((map__95569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95569):map__95569);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95569__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95569__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95569__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
return cljs.core.cons((function (){var G__95572 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__95573 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95574(s__95575){
return (new cljs.core.LazySeq(null,((function (G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function (){
var s__95575__$1 = s__95575;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__95575__$1);
if(temp__5720__auto____$1){
var s__95575__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__95575__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95575__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95577 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95576 = (0);
while(true){
if((i__95576 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__95576);
cljs.core.chunk_append(b__95577,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__96521 = (i__95576 + (1));
i__95576 = G__96521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95577),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95574(cljs.core.chunk_rest(s__95575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95577),null);
}
} else {
var resolver = cljs.core.first(s__95575__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95574(cljs.core.rest(s__95575__$2)));
}
} else {
return null;
}
break;
}
});})(G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
,null,null));
});})(G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95581(s__95582){
return (new cljs.core.LazySeq(null,((function (G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517){
return (function (){
var s__95582__$1 = s__95582;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__95582__$1);
if(temp__5720__auto____$1){
var s__95582__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__95582__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95582__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95584 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95583 = (0);
while(true){
if((i__95583 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__95583);
cljs.core.chunk_append(b__95584,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__96522 = (i__95583 + (1));
i__95583 = G__96522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95584),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95581(cljs.core.chunk_rest(s__95582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95584),null);
}
} else {
var resolver = cljs.core.first(s__95582__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__95543_$_iter__95581(cljs.core.rest(s__95582__$2)));
}
} else {
return null;
}
break;
}
});})(G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
,null,null));
});})(G__95572,map__95569,map__95569__$1,attribute,attr_leaf_in,attr_branch_in,s__95544__$2,temp__5720__auto__,G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__95572,G__95573) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__95572,G__95573));
})(),com$wsscode$pathom$viz$index_explorer$iter__95543(cljs.core.rest(s__95544__$2)));
}
} else {
return null;
}
break;
}
});})(G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
,null,null));
});})(G__95540,map__95538,map__95538__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__95528,_STAR_depth_STAR__orig_val__95529,_STAR_shared_STAR__orig_val__95530,_STAR_instrument_STAR__orig_val__95531,_STAR_parent_STAR__orig_val__95532,_STAR_reconciler_STAR__temp_val__95533,_STAR_depth_STAR__temp_val__95534,_STAR_shared_STAR__temp_val__95535,_STAR_instrument_STAR__temp_val__95536,_STAR_parent_STAR__temp_val__95537,this$,this__50885__auto__,x95526_96517))
;
return iter__4523__auto__(attr_type_mismatch);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95540,G__95541) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95540,G__95541));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95532;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95531;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95530;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95529;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95528;
}});})(x95526_96517))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.fulcro$isComponent = true;

var x95591_96523 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;
x95591_96523.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95591_96523.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95591_96523){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x95591_96523))
;

x95591_96523.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95591_96523){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95591_96523))
;

x95591_96523.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95591_96523.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95591_96523){
return (function (this$,p__95596){
var map__95598 = p__95596;
var map__95598__$1 = (((((!((map__95598 == null))))?(((((map__95598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95598):map__95598);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95598__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95598__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x95591_96523))
;

x95591_96523.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95591_96523.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95591_96523){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95591_96523))
;

x95591_96523.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95591_96523.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95591_96523){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x95591_96523))
;


var x95603_96524 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x95603_96524.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95603_96524.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95603_96524){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x95603_96524))
;

x95603_96524.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95603_96524){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95603_96524))
;

x95603_96524.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95603_96524.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95603_96524){
return (function (this$,p__95606){
var map__95607 = p__95606;
var map__95607__$1 = (((((!((map__95607 == null))))?(((((map__95607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95607):map__95607);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95607__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95607__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x95603_96524))
;

x95603_96524.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95603_96524.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95603_96524){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95603_96524))
;

x95603_96524.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95603_96524.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95603_96524){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x95603_96524))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.StatsView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.StatsView = (function com$wsscode$pathom$viz$index_explorer$StatsView(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.StatsView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","StatsView","com.wsscode.pathom.viz.index-explorer/StatsView",1030504264),com.wsscode.pathom.viz.index_explorer.StatsView);

var x95623_96525 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x95623_96525.render = ((function (x95623_96525){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95625 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95626 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95627 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95628 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95629 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95630 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95631 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95632 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95633 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95634 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95630;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95631;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95632;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95633;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95634;

try{var map__95637 = fulcro.client.primitives.props(this$);
var map__95637__$1 = (((((!((map__95637 == null))))?(((((map__95637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95637):map__95637);
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957));
var mutation_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737));
var top_connection_hubs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657));
var attr_type_mismatch_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640));
var idents_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333));
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var resolver_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099));
var globals_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019));
var attr_edges_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95637__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0)),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Stats"], 0)),(function (){var G__95641 = cljs.core.PersistentArrayMap.EMPTY;
var G__95642 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__95645 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Counters"], null);
var G__95646 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attribute count: ",attribute_count], 0));
var G__95647 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resolver count: ",resolver_count], 0));
var G__95648 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation count: ",mutation_count], 0));
var G__95649 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Globals count: ",globals_count], 0));
var G__95650 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Idents count: ",idents_count], 0));
var G__95651 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edges count: ",attr_edges_count], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7(G__95645,G__95646,G__95647,G__95648,G__95649,G__95650,G__95651) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95645,G__95646,G__95647,G__95648,G__95649,G__95650,G__95651));
})(),(function (){var G__95652 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Most Connected Attributes"], null);
var G__95653 = (function (){var iter__4523__auto__ = ((function (G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525){
return (function com$wsscode$pathom$viz$index_explorer$iter__95654(s__95655){
return (new cljs.core.LazySeq(null,((function (G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525){
return (function (){
var s__95655__$1 = s__95655;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__95655__$1);
if(temp__5720__auto__){
var s__95655__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95655__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__95655__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__95657 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__95656 = (0);
while(true){
if((i__95656 < size__4522__auto__)){
var map__95660 = cljs.core._nth(c__4521__auto__,i__95656);
var map__95660__$1 = (((((!((map__95660 == null))))?(((((map__95660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95660):map__95660);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95660__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
cljs.core.chunk_append(b__95657,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__95656,map__95660,map__95660__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__95657,s__95655__$2,temp__5720__auto__,G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(i__95656,map__95660,map__95660__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__95657,s__95655__$2,temp__5720__auto__,G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525))
], null),computed));

var G__96526 = (i__95656 + (1));
i__95656 = G__96526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95657),com$wsscode$pathom$viz$index_explorer$iter__95654(cljs.core.chunk_rest(s__95655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95657),null);
}
} else {
var map__95665 = cljs.core.first(s__95655__$2);
var map__95665__$1 = (((((!((map__95665 == null))))?(((((map__95665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95665):map__95665);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95665__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95665__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (map__95665,map__95665__$1,attribute,attr_edges_count__$1,s__95655__$2,temp__5720__auto__,G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(map__95665,map__95665__$1,attribute,attr_edges_count__$1,s__95655__$2,temp__5720__auto__,G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525))
], null),computed),com$wsscode$pathom$viz$index_explorer$iter__95654(cljs.core.rest(s__95655__$2)));
}
} else {
return null;
}
break;
}
});})(G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525))
,null,null));
});})(G__95652,G__95641,map__95637,map__95637__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__95625,_STAR_depth_STAR__orig_val__95626,_STAR_shared_STAR__orig_val__95627,_STAR_instrument_STAR__orig_val__95628,_STAR_parent_STAR__orig_val__95629,_STAR_reconciler_STAR__temp_val__95630,_STAR_depth_STAR__temp_val__95631,_STAR_shared_STAR__temp_val__95632,_STAR_instrument_STAR__temp_val__95633,_STAR_parent_STAR__temp_val__95634,this$,this__50885__auto__,x95623_96525))
;
return iter__4523__auto__(top_connection_hubs);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__95652,G__95653) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__95652,G__95653));
})()], 0));
var G__95643 = ((cljs.core.seq(attr_type_mismatch))?fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2(attr_type_mismatch_join,computed) : com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.call(null,attr_type_mismatch_join,computed))], 0))], 0)):null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__95641,G__95642,G__95643) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__95641,G__95642,G__95643));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95629;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95628;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95627;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95626;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95625;
}});})(x95623_96525))
;


com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.StatsView;

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.fulcro$isComponent = true;

var x95673_96527 = com.wsscode.pathom.viz.index_explorer.StatsView;
x95673_96527.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95673_96527.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95673_96527){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x95673_96527))
;

x95673_96527.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95673_96527){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95673_96527))
;

x95673_96527.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95673_96527.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95673_96527){
return (function (this$,p__95679){
var map__95680 = p__95679;
var map__95680__$1 = (((((!((map__95680 == null))))?(((((map__95680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95680):map__95680);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95680__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95680__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x95673_96527))
;

x95673_96527.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95673_96527.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95673_96527){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95673_96527))
;

x95673_96527.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95673_96527.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95673_96527){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x95673_96527))
;


var x95689_96528 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x95689_96528.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95689_96528.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95689_96528){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x95689_96528))
;

x95689_96528.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95689_96528){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95689_96528))
;

x95689_96528.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x95689_96528.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x95689_96528){
return (function (this$,p__95693){
var map__95694 = p__95693;
var map__95694__$1 = (((((!((map__95694 == null))))?(((((map__95694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95694):map__95694);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95694__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95694__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x95689_96528))
;

x95689_96528.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95689_96528.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95689_96528){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95689_96528))
;

x95689_96528.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95689_96528.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95689_96528){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x95689_96528))
;


com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/StatsView");
});
com.wsscode.pathom.viz.index_explorer.stats_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.FullGraphView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.FullGraphView = (function com$wsscode$pathom$viz$index_explorer$FullGraphView(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","FullGraphView","com.wsscode.pathom.viz.index-explorer/FullGraphView",1989996895),com.wsscode.pathom.viz.index_explorer.FullGraphView);

var x95702_96529 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x95702_96529.render = ((function (x95702_96529){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95703 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95704 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95705 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95706 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95707 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95708 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95709 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95710 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95711 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95712 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95708;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95709;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95710;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95711;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95712;

try{var _ = fulcro.client.primitives.props(this$);
var map__95713 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__95713__$1 = (((((!((map__95713 == null))))?(((((map__95713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95713):map__95713);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95713__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95713__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95713__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__95715 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944)], 0))], null);
var G__95716 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Full Graph"], 0));
var G__95717 = (function (){var G__95718 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),((function (G__95715,G__95716,_,map__95713,map__95713__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__95703,_STAR_depth_STAR__orig_val__95704,_STAR_shared_STAR__orig_val__95705,_STAR_instrument_STAR__orig_val__95706,_STAR_parent_STAR__orig_val__95707,_STAR_reconciler_STAR__temp_val__95708,_STAR_depth_STAR__temp_val__95709,_STAR_shared_STAR__temp_val__95710,_STAR_instrument_STAR__temp_val__95711,_STAR_parent_STAR__temp_val__95712,this$,this__50885__auto__,x95702_96529){
return (function (p1__95698_SHARP_){
var G__95719 = cljs.core.first(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669).cljs$core$IFn$_invoke$arity$1(p1__95698_SHARP_));
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__95719) : on_select_resolver.call(null,G__95719));
});})(G__95715,G__95716,_,map__95713,map__95713__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__95703,_STAR_depth_STAR__orig_val__95704,_STAR_shared_STAR__orig_val__95705,_STAR_instrument_STAR__orig_val__95706,_STAR_parent_STAR__orig_val__95707,_STAR_reconciler_STAR__temp_val__95708,_STAR_depth_STAR__temp_val__95709,_STAR_shared_STAR__temp_val__95710,_STAR_instrument_STAR__temp_val__95711,_STAR_parent_STAR__temp_val__95712,this$,this__50885__auto__,x95702_96529))
], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__95718) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__95718));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__95715,G__95716,G__95717) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__95715,G__95716,G__95717));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95707;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95706;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95705;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95704;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95703;
}});})(x95702_96529))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.FullGraphView;

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.fulcro$isComponent = true;

var x95720_96530 = com.wsscode.pathom.viz.index_explorer.FullGraphView;
x95720_96530.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95720_96530.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95720_96530){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x95720_96530))
;

x95720_96530.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95720_96530){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95720_96530))
;

x95720_96530.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95720_96530.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95720_96530){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95720_96530))
;

x95720_96530.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95720_96530.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95720_96530){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x95720_96530))
;


var x95721_96531 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x95721_96531.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x95721_96531.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x95721_96531){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x95721_96531))
;

x95721_96531.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x95721_96531){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x95721_96531))
;

x95721_96531.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95721_96531.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95721_96531){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95721_96531))
;

x95721_96531.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95721_96531.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95721_96531){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x95721_96531))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/FullGraphView");
});
com.wsscode.pathom.viz.index_explorer.full_graph_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView);
com.wsscode.pathom.viz.index_explorer.prop_presence_ident = (function com$wsscode$pathom$viz$index_explorer$prop_presence_ident(props){
return (function (data){
var or__4131__auto__ = cljs.core.some((function (p1__95725_SHARP_){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__95725_SHARP_);
if((temp__5722__auto__ == null)){
return null;
} else {
var val = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__95725_SHARP_,val], null);
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MainViewUnion","com.wsscode.pathom.viz.index-explorer/MainViewUnion",280346003),com.wsscode.pathom.viz.index_explorer.MainViewUnion);

var x95736_96532 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x95736_96532.render = ((function (x95736_96532){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95738 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95739 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95740 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95741 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95742 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95743 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95744 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95745 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95746 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95747 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95743;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95744;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95745;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95746;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95747;

try{var props = fulcro.client.primitives.props(this$);
var G__95750 = cljs.core.first(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__95750__$1 = (((G__95750 instanceof cljs.core.Keyword))?G__95750.fqn:null);
switch (G__95750__$1) {
case "com.wsscode.pathom.connect/attribute":
return com.wsscode.pathom.viz.index_explorer.attribute_view(props);

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
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95742;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95741;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95740;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95739;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95738;
}});})(x95736_96532))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MainViewUnion;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.fulcro$isComponent = true;

var x95753_96534 = com.wsscode.pathom.viz.index_explorer.MainViewUnion;
x95753_96534.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95753_96534.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95753_96534){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x95753_96534))
;

x95753_96534.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95753_96534.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95753_96534){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x95753_96534))
;


var x95757_96535 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x95757_96535.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95757_96535.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95757_96535){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x95757_96535))
;

x95757_96535.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95757_96535.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95757_96535){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x95757_96535))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MainViewUnion");
});
com.wsscode.pathom.viz.index_explorer.main_view_union = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MainViewUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__95762_SHARP_){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__95762_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__95762_SHARP_);
}
})], null));
com.wsscode.pathom.viz.index_explorer.augment = (function com$wsscode$pathom$viz$index_explorer$augment(data,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], 0));
});
com.wsscode.pathom.viz.index_explorer.compute_stats = (function com$wsscode$pathom$viz$index_explorer$compute_stats(p__95769){
var map__95770 = p__95769;
var map__95770__$1 = (((((!((map__95770 == null))))?(((((map__95770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95770):map__95770);
var data = map__95770__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95770__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95770__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95770__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var globals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95770__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95770__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),cljs.core.count(attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),cljs.core.count(resolvers),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),cljs.core.count(mutations),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),cljs.core.count(globals),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),cljs.core.count(idents),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)),cljs.core._PLUS_,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),cljs.core.filterv(((function (map__95770,map__95770__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__95765_SHARP_){
return ((cljs.core.contains_QMARK_(p1__95765_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711))) && (cljs.core.contains_QMARK_(p1__95765_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732))));
});})(map__95770,map__95770__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((30),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),((function (map__95770,map__95770__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__95767_SHARP_,p2__95766_SHARP_){
return cljs.core.compare(p2__95766_SHARP_,p1__95767_SHARP_);
});})(map__95770,map__95770__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes)))], null);
});
com.wsscode.pathom.viz.index_explorer.build_search_vector = (function com$wsscode$pathom$viz$index_explorer$build_search_vector(p__95779){
var map__95780 = p__95779;
var map__95780__$1 = (((((!((map__95780 == null))))?(((((map__95780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95780):map__95780);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95780__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95780__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95780__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__95780,map__95780__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__95776_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__95776_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__95776_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676)]);
});})(map__95780,map__95780__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__95780,map__95780__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__95777_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__95777_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__95777_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744)]);
});})(map__95780,map__95780__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__95780,map__95780__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__95778_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__95778_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__95778_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524)]);
});})(map__95780,map__95780__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_attributes)))], 0)));
});
com.wsscode.pathom.viz.index_explorer.process_index = (function com$wsscode$pathom$viz$index_explorer$process_index(p__95786){
var map__95787 = p__95786;
var map__95787__$1 = (((((!((map__95787 == null))))?(((((map__95787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95787):map__95787);
var index = map__95787__$1;
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95787__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95787__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95787__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95787__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
var attrs = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__95787,map__95787__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p__95798){
var vec__95800 = p__95798;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95800,(0),null);
var map__95803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95800,(1),null);
var map__95803__$1 = (((((!((map__95803 == null))))?(((((map__95803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95803):map__95803);
var data = map__95803__$1;
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95803__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95803__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),cljs.core.count(attr_provides),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),cljs.core.count(attr_reach_via),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_reach_via)) + cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_provides))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),cljs.core.contains_QMARK_(attr_reach_via,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),cljs.core.contains_QMARK_(idents,attr)], 0));
});})(map__95787,map__95787__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,index_attributes)));
return com.wsscode.pathom.viz.index_explorer.augment(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935),com.wsscode.pathom.viz.index_explorer.build_search_vector(index),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__95787,map__95787__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__95784_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__95784_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver?","com.wsscode.pathom.viz.index-explorer/resolver?",167854159),true);
});})(attrs,map__95787,map__95787__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers)))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__95787,map__95787__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__95785_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__95785_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation?","com.wsscode.pathom.viz.index-explorer/mutation?",1568382673),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__95785_SHARP_)], 0));
});})(attrs,map__95787,map__95787__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))))], null),com.wsscode.pathom.viz.index_explorer.compute_stats);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeIndex = (function com$wsscode$pathom$viz$index_explorer$AttributeIndex(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeIndex","com.wsscode.pathom.viz.index-explorer/AttributeIndex",-1624405224),com.wsscode.pathom.viz.index_explorer.AttributeIndex);

var x95860_96536 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x95860_96536.render = ((function (x95860_96536){
return (function (){
var this__50885__auto__ = this;
var _ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95861 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95862 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95863 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95864 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95865 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95866 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95867 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95868 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95869 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95870 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95866;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95867;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95868;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95869;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95870;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95865;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95864;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95863;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95862;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95861;
}});})(x95860_96536))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeIndex;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.fulcro$isComponent = true;

var x95871_96537 = com.wsscode.pathom.viz.index_explorer.AttributeIndex;
x95871_96537.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95871_96537.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95871_96537){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95871_96537))
;

x95871_96537.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95871_96537.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95871_96537){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x95871_96537))
;


var x95874_96538 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x95874_96538.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95874_96538.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95874_96538){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95874_96538))
;

x95874_96538.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95874_96538.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95874_96538){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x95874_96538))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverIndex = (function com$wsscode$pathom$viz$index_explorer$ResolverIndex(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverIndex","com.wsscode.pathom.viz.index-explorer/ResolverIndex",-1943751145),com.wsscode.pathom.viz.index_explorer.ResolverIndex);

var x95884_96539 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x95884_96539.render = ((function (x95884_96539){
return (function (){
var this__50885__auto__ = this;
var _ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95887 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95888 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95889 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95890 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95891 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95892 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95893 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95894 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95895 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95896 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95892;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95893;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95894;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95895;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95896;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95891;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95890;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95889;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95888;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95887;
}});})(x95884_96539))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverIndex;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.fulcro$isComponent = true;

var x95901_96540 = com.wsscode.pathom.viz.index_explorer.ResolverIndex;
x95901_96540.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95901_96540.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95901_96540){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95901_96540))
;

x95901_96540.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95901_96540.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95901_96540){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x95901_96540))
;


var x95903_96541 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x95903_96541.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95903_96541.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95903_96541){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95903_96541))
;

x95903_96541.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95903_96541.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95903_96541){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x95903_96541))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationIndex = (function com$wsscode$pathom$viz$index_explorer$MutationIndex(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationIndex","com.wsscode.pathom.viz.index-explorer/MutationIndex",21487988),com.wsscode.pathom.viz.index_explorer.MutationIndex);

var x95914_96542 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x95914_96542.render = ((function (x95914_96542){
return (function (){
var this__50885__auto__ = this;
var _ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__95917 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__95918 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__95919 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__95920 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__95921 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__95922 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__95923 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__95924 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__95925 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__95926 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__95922;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__95923;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__95924;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__95925;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__95926;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__95921;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__95920;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__95919;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__95918;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__95917;
}});})(x95914_96542))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationIndex;

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.fulcro$isComponent = true;

var x95930_96543 = com.wsscode.pathom.viz.index_explorer.MutationIndex;
x95930_96543.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95930_96543.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95930_96543){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95930_96543))
;

x95930_96543.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95930_96543.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95930_96543){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x95930_96543))
;


var x95933_96544 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x95933_96544.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x95933_96544.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x95933_96544){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x95933_96544))
;

x95933_96544.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x95933_96544.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x95933_96544){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x95933_96544))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MutationIndex");
});
com.wsscode.pathom.viz.index_explorer.history_size_limit = (200);
com.wsscode.pathom.viz.index_explorer.history_append = (function com$wsscode$pathom$viz$index_explorer$history_append(p__95938,ref){
var map__95939 = p__95938;
var map__95939__$1 = (((((!((map__95939 == null))))?(((((map__95939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95939):map__95939);
var x = map__95939__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95939__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95939__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
var index = (history_index + (1));
var history_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,com.wsscode.pathom.viz.index_explorer.history_size_limit))?(1):(0)),index),ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),history_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(cljs.core.count(history_SINGLEQUOTE_) - (1)),new cljs.core.Keyword("ui","page","ui/page",849066625),ref], 0));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),(function (fulcro_incoming_env,_,p__95946){
var map__95947 = p__95946;
var map__95947__$1 = (((((!((map__95947 == null))))?(((((map__95947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95947):map__95947);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95947__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95951 = fulcro_incoming_env;
var map__95951__$1 = (((((!((map__95951 == null))))?(((((map__95951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95951):map__95951);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95951__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95951__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95951,map__95951__$1,state,ref,map__95947,map__95947__$1,attribute){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null)], 0));
});})(map__95951,map__95951__$1,state,ref,map__95947,map__95947__$1,attribute))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),(function (fulcro_incoming_env,_,p__95953){
var map__95954 = p__95953;
var map__95954__$1 = (((((!((map__95954 == null))))?(((((map__95954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95954):map__95954);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95954__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95956 = fulcro_incoming_env;
var map__95956__$1 = (((((!((map__95956 == null))))?(((((map__95956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95956):map__95956);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95956__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95956__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95956,map__95956__$1,state,ref,map__95954,map__95954__$1,sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null)], 0));
});})(map__95956,map__95956__$1,state,ref,map__95954,map__95954__$1,sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),(function (fulcro_incoming_env,_,p__95958){
var map__95959 = p__95958;
var map__95959__$1 = (((((!((map__95959 == null))))?(((((map__95959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95959):map__95959);
var mutation_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95961 = fulcro_incoming_env;
var map__95961__$1 = (((((!((map__95961 == null))))?(((((map__95961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95961):map__95961);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95961__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95961__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95961,map__95961__$1,state,ref,map__95959,map__95959__$1,mutation_sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null)], 0));
});})(map__95961,map__95961__$1,state,ref,map__95959,map__95959__$1,mutation_sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95966 = fulcro_incoming_env;
var map__95966__$1 = (((((!((map__95966 == null))))?(((((map__95966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95966):map__95966);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95966__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95966__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95966,map__95966__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0));
});})(map__95966,map__95966__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95971 = fulcro_incoming_env;
var map__95971__$1 = (((((!((map__95971 == null))))?(((((map__95971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95971):map__95971);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95971__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95971__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95971,map__95971__$1,state,ref){
return (function (){
var id = cljs.core.second(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.FullGraphView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null)], 0));
});})(map__95971,map__95971__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_back_QMARK_(p__95973){
var map__95974 = p__95973;
var map__95974__$1 = (((((!((map__95974 == null))))?(((((map__95974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95974):map__95974);
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95974__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index > (0));
});
com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_forward_QMARK_(p__95979){
var map__95981 = p__95979;
var map__95981__$1 = (((((!((map__95981 == null))))?(((((map__95981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95981):map__95981);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95981__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95981__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index < (cljs.core.count(history) - (1)));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95987 = fulcro_incoming_env;
var map__95987__$1 = (((((!((map__95987 == null))))?(((((map__95987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95987):map__95987);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95987__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95987__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95987,map__95987__$1,state,ref){
return (function (){
var map__95992 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__95992__$1 = (((((!((map__95992 == null))))?(((((map__95992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95992):map__95992);
var props = map__95992__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95992__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95992__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index - (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index - (1))], 0));
} else {
return null;
}
});})(map__95987,map__95987__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__95994 = fulcro_incoming_env;
var map__95994__$1 = (((((!((map__95994 == null))))?(((((map__95994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95994):map__95994);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95994__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95994__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__95994,map__95994__$1,state,ref){
return (function (){
var map__95996 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__95996__$1 = (((((!((map__95996 == null))))?(((((map__95996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95996):map__95996);
var props = map__95996__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95996__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95996__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index + (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index + (1))], 0));
} else {
return null;
}
});})(map__95994,map__95994__$1,state,ref))
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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","IndexExplorer","com.wsscode.pathom.viz.index-explorer/IndexExplorer",493663752),com.wsscode.pathom.viz.index_explorer.IndexExplorer);

var x96012_96545 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x96012_96545.render = ((function (x96012_96545){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__96013 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__96014 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__96015 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__96016 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__96017 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__96018 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__96019 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__96020 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__96021 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__96022 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__96018;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__96019;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__96020;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__96021;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__96022;

try{var map__96027 = fulcro.client.primitives.props(this$);
var map__96027__$1 = (((((!((map__96027 == null))))?(((((map__96027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96027):map__96027);
var props = map__96027__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96027__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96027__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96027__$1,new cljs.core.Keyword("ui","menu","ui/menu",352268114));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96027__$1,new cljs.core.Keyword("ui","page","ui/page",849066625));
var extensions = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__96030 = goog.object.get(com.wsscode.pathom.viz.index_explorer.ExtensionContext,"Provider");
var G__96031 = ({"value": extensions});
var G__96032 = (function (){var G__96033 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"container",new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".out-container",".out-container",-265742466)], 0))], null);
var G__96034 = (function (){var G__96036 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874)], 0))], null);
var G__96037 = (function (){var G__96038 = menu;
var G__96039 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], null);
return (com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2(G__96038,G__96039) : com.wsscode.pathom.viz.index_explorer.search_everything.call(null,G__96038,G__96039));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2(G__96036,G__96037) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__96036,G__96037));
})();
var G__96035 = (function (){var G__96040 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__96041 = (function (){var G__96043 = cljs.core.PersistentArrayMap.EMPTY;
var G__96044 = (function (){var G__96048 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)))], null);
var G__96049 = "\u25C0";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__96048,G__96049) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__96048,G__96049));
})();
var G__96045 = (function (){var G__96050 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-forward","go-forward",666578902)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)))], null);
var G__96051 = "\u25B6";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__96050,G__96051) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__96050,G__96051));
})();
var G__96046 = (function (){var G__96052 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-stats","go-stats",156008525)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.main_view_ident(page),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__96053 = "Stats";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__96052,G__96053) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__96052,G__96053));
})();
var G__96047 = (function (){var G__96054 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(com.wsscode.pathom.viz.index_explorer.main_view_ident(page)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__96055 = "Full Graph";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__96054,G__96055) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__96054,G__96055));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5(G__96043,G__96044,G__96045,G__96046,G__96047) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__96043,G__96044,G__96045,G__96046,G__96047));
})();
var G__96042 = (cljs.core.truth_(page)?com.wsscode.pathom.viz.index_explorer.main_view_union(page,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], 0))):null);
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__96040,G__96041,G__96042) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__96040,G__96041,G__96042));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__96033,G__96034,G__96035) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__96033,G__96034,G__96035));
})();
return (fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__96030,G__96031,G__96032) : fulcro.client.localized_dom.create_element.call(null,G__96030,G__96031,G__96032));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__96017;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__96016;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__96015;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__96014;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__96013;
}});})(x96012_96545))
;

x96012_96545.initLocalState = ((function (x96012_96545){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489),((function (this$,x96012_96545){
return (function (p1__96005_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),null,(1),null)),(new cljs.core.List(null,p1__96005_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x96012_96545))
,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x96012_96545){
return (function (p1__96006_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),null,(1),null)),(new cljs.core.List(null,p1__96006_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x96012_96545))
,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866),((function (this$,x96012_96545){
return (function (p1__96007_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),null,(1),null)),(new cljs.core.List(null,p1__96007_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x96012_96545))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),((function (this$,x96012_96545){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),null,(1),null)))))], null));
});})(this$,x96012_96545))
,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),((function (this$,x96012_96545){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),null,(1),null)))))], null));
});})(this$,x96012_96545))
,new cljs.core.Keyword(null,"go-stats","go-stats",156008525),((function (this$,x96012_96545){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),null,(1),null)))))], null));
});})(this$,x96012_96545))
,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058),((function (this$,x96012_96545){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),null,(1),null)))))], null));
});})(this$,x96012_96545))
], null);
var obj96063 = ({"fulcro$state":ret__50860__auto__});
return obj96063;
});})(x96012_96545))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor = com.wsscode.pathom.viz.index_explorer.IndexExplorer;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.fulcro$isComponent = true;

var x96064_96546 = com.wsscode.pathom.viz.index_explorer.IndexExplorer;
x96064_96546.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x96064_96546.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x96064_96546){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x96064_96546))
;

x96064_96546.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x96064_96546){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x96064_96546))
;

x96064_96546.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x96064_96546.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x96064_96546){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x96064_96546))
;

x96064_96546.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x96064_96546.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x96064_96546){
return (function (this$,p__96070){
var map__96071 = p__96070;
var map__96071__$1 = (((((!((map__96071 == null))))?(((((map__96071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96071):map__96071);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96071__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96071__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x96064_96546))
;

x96064_96546.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x96064_96546.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x96064_96546){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x96064_96546))
;

x96064_96546.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x96064_96546.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x96064_96546){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x96064_96546))
;


var x96081_96547 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x96081_96547.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x96081_96547.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x96081_96547){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x96081_96547))
;

x96081_96547.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x96081_96547){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x96081_96547))
;

x96081_96547.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x96081_96547.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x96081_96547){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x96081_96547))
;

x96081_96547.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x96081_96547.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x96081_96547){
return (function (this$,p__96087){
var map__96088 = p__96087;
var map__96088__$1 = (((((!((map__96088 == null))))?(((((map__96088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96088):map__96088);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96088__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96088__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x96081_96547))
;

x96081_96547.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x96081_96547.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x96081_96547){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x96081_96547))
;

x96081_96547.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x96081_96547.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x96081_96547){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x96081_96547))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/IndexExplorer");
});
com.wsscode.pathom.viz.index_explorer.index_explorer = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer);

//# sourceMappingURL=com.wsscode.pathom.viz.index_explorer.js.map
