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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64527){
return cljs.core.map_QMARK_(G__64527);
}),(function (G__64527){
return cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
}),(function (G__64527){
return cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868));
}),(function (G__64527){
return cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896));
}),(function (G__64527){
return cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__64527){
return cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"reach","reach",1376483465));
}),(function (G__64527){
return cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"radius","radius",-2073122258));
})], null),(function (G__64527){
return ((cljs.core.map_QMARK_(G__64527)) && (cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"attribute","attribute",-2074029119))) && (cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))) && (cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))) && (cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"reach","reach",1376483465))) && (cljs.core.contains_QMARK_(G__64527,new cljs.core.Keyword(null,"radius","radius",-2073122258))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reach","reach",1376483465))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64572){
return cljs.core.map_QMARK_(G__64572);
}),(function (G__64572){
return cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"source","source",-433931539));
}),(function (G__64572){
return cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__64572){
return cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130));
}),(function (G__64572){
return cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__64572){
return cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"deep","deep",2090866875));
})], null),(function (G__64572){
return ((cljs.core.map_QMARK_(G__64572)) && (cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))) && (cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_(G__64572,new cljs.core.Keyword(null,"deep","deep",2090866875))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"source","source",-433931539))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deep","deep",2090866875)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64586){
return cljs.core.coll_QMARK_(G__64586);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64587){
return cljs.core.coll_QMARK_(G__64587);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-graph","com.wsscode.pathom.viz.index-explorer/attribute-graph",226486271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64589){
return cljs.core.map_QMARK_(G__64589);
}),(function (G__64589){
return cljs.core.contains_QMARK_(G__64589,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
}),(function (G__64589){
return cljs.core.contains_QMARK_(G__64589,new cljs.core.Keyword(null,"links","links",-654507394));
})], null),(function (G__64589){
return ((cljs.core.map_QMARK_(G__64589)) && (cljs.core.contains_QMARK_(G__64589,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core.contains_QMARK_(G__64589,new cljs.core.Keyword(null,"links","links",-654507394))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"links","links",-654507394)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","maybe-nested-input","com.wsscode.pathom.viz.index-explorer/maybe-nested-input",734224205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Keyword(null,"nested","nested",18943849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.vector_QMARK_], null),null));
com.wsscode.pathom.viz.index_explorer.ExtensionContext = com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.viz.index_explorer.call_graph_comm = (function com$wsscode$pathom$viz$index_explorer$call_graph_comm(comp,f,k){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__64597 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650));
if((G__64597 == null)){
return null;
} else {
return cljs.core.deref(G__64597);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__64598 = comp;
var G__64598__$1 = (((G__64598 == null))?null:fulcro.client.primitives.props(G__64598));
var G__64598__$2 = (((G__64598__$1 == null))?null:fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(G__64598__$1));
var G__64598__$3 = (((G__64598__$2 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087).cljs$core$IFn$_invoke$arity$1(G__64598__$2));
if((G__64598__$3 == null)){
return null;
} else {
return cljs.core.deref(G__64598__$3);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var G__64600 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__64599 = goog.object.get(settings,f);
return (fexpr__64599.cljs$core$IFn$_invoke$arity$1 ? fexpr__64599.cljs$core$IFn$_invoke$arity$1(G__64600) : fexpr__64599.call(null,G__64600));
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

var x64603_65599 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x64603_65599.render = ((function (x64603_65599){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64604 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64605 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64606 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64607 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64608 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64609 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64610 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64611 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64612 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64613 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64609;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64610;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64611;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64612;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64613;

try{var map__64614 = fulcro.client.primitives.props(this$);
var map__64614__$1 = (((((!((map__64614 == null))))?(((((map__64614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64614):map__64614);
var props = map__64614__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64614__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64614__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_graph_events(this$,attribute),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64608;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64607;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64606;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64605;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64604;
}});})(x64603_65599))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeLink;

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.fulcro$isComponent = true;

var x64630_65600 = com.wsscode.pathom.viz.index_explorer.AttributeLink;
x64630_65600.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64630_65600.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64630_65600){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x64630_65600))
;

x64630_65600.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64630_65600){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64630_65600))
;


var x64633_65601 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x64633_65601.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64633_65601.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64633_65601){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x64633_65601))
;

x64633_65601.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64633_65601){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64633_65601))
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

var x64641_65615 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x64641_65615.render = ((function (x64641_65615){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64642 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64643 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64644 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64645 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64646 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64647 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64648 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64649 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64650 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64651 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64647;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64648;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64649;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64650;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64651;

try{var map__64652 = fulcro.client.primitives.props(this$);
var map__64652__$1 = (((((!((map__64652 == null))))?(((((map__64652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64652):map__64652);
var props = map__64652__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64652__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64652__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.resolver_graph_events(this$,sym),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64646;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64645;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64644;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64643;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64642;
}});})(x64641_65615))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverLink;

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.fulcro$isComponent = true;

var x64658_65619 = com.wsscode.pathom.viz.index_explorer.ResolverLink;
x64658_65619.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64658_65619.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64658_65619){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x64658_65619))
;

x64658_65619.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64658_65619){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64658_65619))
;


var x64661_65620 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x64661_65620.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64661_65620.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64661_65620){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x64661_65620))
;

x64661_65620.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64661_65620){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64661_65620))
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

var x64682_65622 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x64682_65622.render = ((function (x64682_65622){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64684 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64685 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64686 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64687 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64688 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64689 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64690 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64691 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64692 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64693 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64689;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64690;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64691;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64692;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64693;

try{var map__64695 = fulcro.client.primitives.props(this$);
var map__64695__$1 = (((((!((map__64695 == null))))?(((((map__64695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64695):map__64695);
var props = map__64695__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64695__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64695__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
var on_select_mutation = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_mutation,map__64695,map__64695__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__64684,_STAR_depth_STAR__orig_val__64685,_STAR_shared_STAR__orig_val__64686,_STAR_instrument_STAR__orig_val__64687,_STAR_parent_STAR__orig_val__64688,_STAR_reconciler_STAR__temp_val__64689,_STAR_depth_STAR__temp_val__64690,_STAR_shared_STAR__temp_val__64691,_STAR_instrument_STAR__temp_val__64692,_STAR_parent_STAR__temp_val__64693,this$,this__50885__auto__,x64682_65622){
return (function (){
return (on_select_mutation.cljs$core$IFn$_invoke$arity$1 ? on_select_mutation.cljs$core$IFn$_invoke$arity$1(sym) : on_select_mutation.call(null,sym));
});})(on_select_mutation,map__64695,map__64695__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__64684,_STAR_depth_STAR__orig_val__64685,_STAR_shared_STAR__orig_val__64686,_STAR_instrument_STAR__orig_val__64687,_STAR_parent_STAR__orig_val__64688,_STAR_reconciler_STAR__temp_val__64689,_STAR_depth_STAR__temp_val__64690,_STAR_shared_STAR__temp_val__64691,_STAR_instrument_STAR__temp_val__64692,_STAR_parent_STAR__temp_val__64693,this$,this__50885__auto__,x64682_65622))
], null),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64688;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64687;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64686;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64685;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64684;
}});})(x64682_65622))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationLink;

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.fulcro$isComponent = true;

var x64699_65626 = com.wsscode.pathom.viz.index_explorer.MutationLink;
x64699_65626.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64699_65626.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64699_65626){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x64699_65626))
;

x64699_65626.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64699_65626){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64699_65626))
;


var x64703_65637 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x64703_65637.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64703_65637.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64703_65637){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x64703_65637))
;

x64703_65637.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64703_65637){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64703_65637))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MutationLink");
});
com.wsscode.pathom.viz.index_explorer.mutation_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.node_radius = (function com$wsscode$pathom$viz$index_explorer$node_radius(p__64704){
var map__64705 = p__64704;
var map__64705__$1 = (((((!((map__64705 == null))))?(((((map__64705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64705):map__64705);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64705__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64705__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
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
com.wsscode.pathom.viz.index_explorer.attribute__GT_node = (function com$wsscode$pathom$viz$index_explorer$attribute__GT_node(p__64708){
var map__64709 = p__64708;
var map__64709__$1 = (((((!((map__64709 == null))))?(((((map__64709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64709):map__64709);
var attr = map__64709__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64709__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64709__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64709__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64709__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194));
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
com.wsscode.pathom.viz.index_explorer.compute_nodes_links = (function com$wsscode$pathom$viz$index_explorer$compute_nodes_links(p__64713){
var map__64714 = p__64713;
var map__64714__$1 = (((((!((map__64714 == null))))?(((((map__64714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64714):map__64714);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64714__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var attributes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
var index = com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.attribute__GT_node),attributes__$1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (attributes__$1,index,map__64714,map__64714__$1,attributes){
return (function (p__64716){
var map__64717 = p__64716;
var map__64717__$1 = (((((!((map__64717 == null))))?(((((map__64717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64717):map__64717);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64717__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64717__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (attr_str,map__64717,map__64717__$1,attribute,attr_provides,attributes__$1,index,map__64714,map__64714__$1,attributes){
return (function (p__64721){
var vec__64722 = p__64721;
var provided = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64722,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64722,(1),null);
var nested_QMARK_ = com.wsscode.pathom.viz.index_explorer.nested_QMARK_(provided);
var provided_SINGLEQUOTE_ = ((nested_QMARK_)?cljs.core.peek(provided):provided);
if(((cljs.core.contains_QMARK_(index,provided_SINGLEQUOTE_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(attribute,provided_SINGLEQUOTE_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),attr_str,new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.count(resolvers),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",resolvers),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([provided_SINGLEQUOTE_], 0)),new cljs.core.Keyword(null,"deep","deep",2090866875),nested_QMARK_], null);
} else {
return null;
}
});})(attr_str,map__64717,map__64717__$1,attribute,attr_provides,attributes__$1,index,map__64714,map__64714__$1,attributes))
),attr_provides);
return res;
});})(attributes__$1,index,map__64714,map__64714__$1,attributes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes__$1], 0))], null);
});
com.wsscode.pathom.viz.index_explorer.render_attribute_graph = (function com$wsscode$pathom$viz$index_explorer$render_attribute_graph(this$){
var map__64726 = fulcro.client.primitives.props(this$);
var map__64726__$1 = (((((!((map__64726 == null))))?(((((map__64726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64726):map__64726);
var props = map__64726__$1;
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64726__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105));
var on_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64726__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64726__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
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
var fexpr__64730_65650 = goog.object.get(current,"dispose");
(fexpr__64730_65650.cljs$core$IFn$_invoke$arity$0 ? fexpr__64730_65650.cljs$core$IFn$_invoke$arity$0() : fexpr__64730_65650.call(null));
} else {
}

goog.object.set(svg,"innerHTML","");

var render_settings = module$com$wsscode$pathom$viz$d3_attribute_graph.render(svg,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.index_explorer.compute_nodes_links(props),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),((function (map__64726,map__64726__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (attr,d,js){
var G__64731 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(attr);
var G__64732 = d;
var G__64733 = js;
return (on_show_details__$1.cljs$core$IFn$_invoke$arity$3 ? on_show_details__$1.cljs$core$IFn$_invoke$arity$3(G__64731,G__64732,G__64733) : on_show_details__$1.call(null,G__64731,G__64732,G__64733));
});})(map__64726,map__64726__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
,new cljs.core.Keyword(null,"onClickEdge","onClickEdge",124821712),((function (map__64726,map__64726__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (edge){
var resolvers = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(edge,"resolvers")),"}"].join(''));
var G__64734 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers], null);
return (on_click_edge__$1.cljs$core$IFn$_invoke$arity$1 ? on_click_edge__$1.cljs$core$IFn$_invoke$arity$1(G__64734) : on_click_edge__$1.call(null,G__64734));
});})(map__64726,map__64726__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
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

var x64740_65657 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x64740_65657.render = ((function (x64740_65657){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64741 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64742 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64743 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64744 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64745 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64746 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64747 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64748 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64749 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64750 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64746;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64747;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64748;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64749;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64750;

try{var map__64751 = fulcro.client.primitives.props(this$);
var map__64751__$1 = (((((!((map__64751 == null))))?(((((map__64751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64751):map__64751);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__64751,map__64751__$1,_STAR_reconciler_STAR__orig_val__64741,_STAR_depth_STAR__orig_val__64742,_STAR_shared_STAR__orig_val__64743,_STAR_instrument_STAR__orig_val__64744,_STAR_parent_STAR__orig_val__64745,_STAR_reconciler_STAR__temp_val__64746,_STAR_depth_STAR__temp_val__64747,_STAR_shared_STAR__temp_val__64748,_STAR_instrument_STAR__temp_val__64749,_STAR_parent_STAR__temp_val__64750,this$,this__50885__auto__,x64740_65657){
return (function (p1__64735_SHARP_){
return goog.object.set(this$,"svgContainer",p1__64735_SHARP_);
});})(map__64751,map__64751__$1,_STAR_reconciler_STAR__orig_val__64741,_STAR_depth_STAR__orig_val__64742,_STAR_shared_STAR__orig_val__64743,_STAR_instrument_STAR__orig_val__64744,_STAR_parent_STAR__orig_val__64745,_STAR_reconciler_STAR__temp_val__64746,_STAR_depth_STAR__temp_val__64747,_STAR_shared_STAR__temp_val__64748,_STAR_instrument_STAR__temp_val__64749,_STAR_parent_STAR__temp_val__64750,this$,this__50885__auto__,x64740_65657))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__64751,map__64751__$1,_STAR_reconciler_STAR__orig_val__64741,_STAR_depth_STAR__orig_val__64742,_STAR_shared_STAR__orig_val__64743,_STAR_instrument_STAR__orig_val__64744,_STAR_parent_STAR__orig_val__64745,_STAR_reconciler_STAR__temp_val__64746,_STAR_depth_STAR__temp_val__64747,_STAR_shared_STAR__temp_val__64748,_STAR_instrument_STAR__temp_val__64749,_STAR_parent_STAR__temp_val__64750,this$,this__50885__auto__,x64740_65657){
return (function (p1__64736_SHARP_){
return goog.object.set(this$,"svg",p1__64736_SHARP_);
});})(map__64751,map__64751__$1,_STAR_reconciler_STAR__orig_val__64741,_STAR_depth_STAR__orig_val__64742,_STAR_shared_STAR__orig_val__64743,_STAR_instrument_STAR__orig_val__64744,_STAR_parent_STAR__orig_val__64745,_STAR_reconciler_STAR__temp_val__64746,_STAR_depth_STAR__temp_val__64747,_STAR_shared_STAR__temp_val__64748,_STAR_instrument_STAR__temp_val__64749,_STAR_parent_STAR__temp_val__64750,this$,this__50885__auto__,x64740_65657))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64745;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64744;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64743;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64742;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64741;
}});})(x64740_65657))
;

x64740_65657.componentDidUpdate = ((function (x64740_65657){
return (function (prev_props__50862__auto__,prev_state__50863__auto__,snapshot__50864__auto__){
var this__50861__auto__ = this;
var this$ = this__50861__auto__;
var snapshot64737 = snapshot__50864__auto__;
var prev_props = goog.object.get(prev_props__50862__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__50863__auto__,"fulcro$state");
if((((!((this__50861__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__50861__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__50865__auto___65664 = fulcro.client.primitives.ident(this__50861__auto__,prev_props);
var next_ident__50866__auto___65665 = fulcro.client.primitives.ident(this__50861__auto__,fulcro.client.primitives.props(this__50861__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__50865__auto___65664,next_ident__50866__auto___65665)){
var idxr__50867__auto___65667 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__50861__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__50867__auto___65667 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__50867__auto___65667),((function (idxr__50867__auto___65667,ident__50865__auto___65664,next_ident__50866__auto___65665,this$,snapshot64737,prev_props,_,this__50861__auto__,x64740_65657){
return (function (indexes__50868__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__50868__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__50865__auto___65664], null),cljs.core.disj,this__50861__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__50866__auto___65665], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__50861__auto__);
});})(idxr__50867__auto___65667,ident__50865__auto___65664,next_ident__50866__auto___65665,this$,snapshot64737,prev_props,_,this__50861__auto__,x64740_65657))
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
});})(x64740_65657))
;

x64740_65657.componentDidCatch = ((function (x64740_65657){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980),true], null));
});})(x64740_65657))
;

x64740_65657.componentWillUnmount = ((function (x64740_65657){
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
var fexpr__64754 = goog.object.get(settings,"dispose");
return (fexpr__64754.cljs$core$IFn$_invoke$arity$0 ? fexpr__64754.cljs$core$IFn$_invoke$arity$0() : fexpr__64754.call(null));
} else {
return null;
}
});})(x64740_65657))
;

x64740_65657.componentDidMount = ((function (x64740_65657){
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
});})(x64740_65657))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraph;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.fulcro$isComponent = true;

var x64755_65670 = com.wsscode.pathom.viz.index_explorer.AttributeGraph;
x64755_65670.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64755_65670.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64755_65670){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x64755_65670))
;

x64755_65670.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64755_65670){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64755_65670))
;


var x64756_65674 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x64756_65674.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64756_65674.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64756_65674){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x64756_65674))
;

x64756_65674.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64756_65674){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64756_65674))
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
com.wsscode.pathom.viz.index_explorer.pull_attr = (function com$wsscode$pathom$viz$index_explorer$pull_attr(p__64757,attr){
var map__64758 = p__64757;
var map__64758__$1 = (((((!((map__64758 == null))))?(((((map__64758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64758):map__64758);
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64758__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64758__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var G__64760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_index,attr);
if(interconnections_QMARK_ === false){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64760,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
} else {
return G__64760;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_ = (function com$wsscode$pathom$viz$index_explorer$attribute_network_STAR_(p__64761,source){
var map__64762 = p__64761;
var map__64762__$1 = (((((!((map__64762 == null))))?(((((map__64762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64762):map__64762);
var options = map__64762__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var sub_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),cljs.core.PersistentArrayMap.EMPTY);
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false);
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true);
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true);
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false);
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1));
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var attr_visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64762__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.PersistentHashSet.EMPTY);
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
var map__64764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,source);
var map__64764__$1 = (((((!((map__64764 == null))))?(((((map__64764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64764):map__64764);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64764__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64764__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(attr_depth - (1)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr_visited,source)], 0));
var _LT__GT_ = base;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,index,base,map__64764,map__64764__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__64762,map__64762__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
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
var G__64766 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__64767 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__64766,G__64767) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__64766,G__64767));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
return out;
}
});})(_LT__GT_,index,base,map__64764,map__64764__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__64762,map__64762__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT_,cljs.core.keys(attr_reach_via));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,index,base,map__64764,map__64764__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__64762,map__64762__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,attr){
if(cljs.core.truth_((function (){var and__4120__auto__ = direct_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (attr instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())){
if((attr_depth > (1))){
var G__64768 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__64769 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__64768,G__64769) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__64768,G__64769));
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
});})(_LT__GT_,_LT__GT___$1,index,base,map__64764,map__64764__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__64762,map__64762__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__64770_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__64770_SHARP_,(0),(function (x){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
}));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__64771){
var vec__64772 = p__64771;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64772,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64772,(1),null);
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
return (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__64775(s__64776){
return (new cljs.core.LazySeq(null,((function (plugins,data){
return (function (){
var s__64776__$1 = s__64776;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__64776__$1);
if(temp__5720__auto__){
var s__64776__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64776__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64776__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64778 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64777 = (0);
while(true){
if((i__64777 < size__4522__auto__)){
var map__64779 = cljs.core._nth(c__4521__auto__,i__64777);
var map__64779__$1 = (((((!((map__64779 == null))))?(((((map__64779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64779):map__64779);
var plugin = map__64779__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64779__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
cljs.core.chunk_append(b__64778,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__64781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__64781.cljs$core$IFn$_invoke$arity$1 ? fexpr__64781.cljs$core$IFn$_invoke$arity$1(data) : fexpr__64781.call(null,data));
})()], 0)));

var G__65681 = (i__64777 + (1));
i__64777 = G__65681;
continue;
} else {
var G__65682 = (i__64777 + (1));
i__64777 = G__65682;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64778),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__64775(cljs.core.chunk_rest(s__64776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64778),null);
}
} else {
var map__64782 = cljs.core.first(s__64776__$2);
var map__64782__$1 = (((((!((map__64782 == null))))?(((((map__64782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64782):map__64782);
var plugin = map__64782__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64782__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__64784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__64784.cljs$core$IFn$_invoke$arity$1 ? fexpr__64784.cljs$core$IFn$_invoke$arity$1(data) : fexpr__64784.call(null,data));
})()], 0)),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__64775(cljs.core.rest(s__64776__$2)));
} else {
var G__65683 = cljs.core.rest(s__64776__$2);
s__64776__$1 = G__65683;
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

var x64789_65684 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x64789_65684.render = ((function (x64789_65684){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64790 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64791 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64792 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64793 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64794 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64795 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64796 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64797 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64798 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64799 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64795;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64796;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64797;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64798;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64799;

try{var map__64800 = fulcro.client.primitives.props(this$);
var map__64800__$1 = (((((!((map__64800 == null))))?(((((map__64800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64800):map__64800);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64800__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__64802 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Reach via",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_reach_via)], null);
var G__64803 = (function (){var nested_reaches_QMARK_ = true;
var iter__4523__auto__ = ((function (nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function com$wsscode$pathom$viz$index_explorer$iter__64804(s__64805){
return (new cljs.core.LazySeq(null,((function (nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
var s__64805__$1 = s__64805;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__64805__$1);
if(temp__5720__auto__){
var s__64805__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64805__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64805__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64807 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64806 = (0);
while(true){
if((i__64806 < size__4522__auto__)){
var vec__64808 = cljs.core._nth(c__4521__auto__,i__64806);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64808,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
cljs.core.chunk_append(b__64807,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__64811 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__64811);
} else {
return G__64811;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__64806,s__64805__$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(i__64806,s__64805__$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__64812 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64812,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__64812;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (i__64806,s__64805__$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813(s__64814){
return (new cljs.core.LazySeq(null,((function (i__64806,s__64805__$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
var s__64814__$1 = s__64814;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__64814__$1);
if(temp__5720__auto____$1){
var s__64814__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64814__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__64814__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__64816 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__64815 = (0);
while(true){
if((i__64815 < size__4522__auto____$1)){
var vec__64817 = cljs.core._nth(c__4521__auto____$1,i__64815);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64817,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64817,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__64816,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__64815,s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64817,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__64816,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813_$_iter__64820(s__64821){
return (new cljs.core.LazySeq(null,((function (i__64815,s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64817,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__64816,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
var s__64821__$1 = s__64821;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__64821__$1);
if(temp__5720__auto____$2){
var s__64821__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__64821__$2)){
var c__4521__auto____$2 = cljs.core.chunk_first(s__64821__$2);
var size__4522__auto____$2 = cljs.core.count(c__4521__auto____$2);
var b__64823 = cljs.core.chunk_buffer(size__4522__auto____$2);
if((function (){var i__64822 = (0);
while(true){
if((i__64822 < size__4522__auto____$2)){
var vec__64824 = cljs.core._nth(c__4521__auto____$2,i__64822);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64824,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64824,(1),null);
cljs.core.chunk_append(b__64823,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__65685 = (i__64822 + (1));
i__64822 = G__65685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64823),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813_$_iter__64820(cljs.core.chunk_rest(s__64821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64823),null);
}
} else {
var vec__64827 = cljs.core.first(s__64821__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64827,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64827,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813_$_iter__64820(cljs.core.rest(s__64821__$2)));
}
} else {
return null;
}
break;
}
});})(i__64815,s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64817,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__64816,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,null,null));
});})(i__64815,s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64817,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__64816,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__65686 = (i__64815 + (1));
i__64815 = G__65686;
continue;
} else {
var G__65687 = (i__64815 + (1));
i__64815 = G__65687;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64816),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813(cljs.core.chunk_rest(s__64814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64816),null);
}
} else {
var vec__64830 = cljs.core.first(s__64814__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64830,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64830,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64830,path,resolvers,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813_$_iter__64833(s__64834){
return (new cljs.core.LazySeq(null,((function (s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64830,path,resolvers,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
var s__64834__$1 = s__64834;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__64834__$1);
if(temp__5720__auto____$2){
var s__64834__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__64834__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__64834__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__64836 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__64835 = (0);
while(true){
if((i__64835 < size__4522__auto____$1)){
var vec__64837 = cljs.core._nth(c__4521__auto____$1,i__64835);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64837,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64837,(1),null);
cljs.core.chunk_append(b__64836,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__65688 = (i__64835 + (1));
i__64835 = G__65688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64836),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813_$_iter__64833(cljs.core.chunk_rest(s__64834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64836),null);
}
} else {
var vec__64840 = cljs.core.first(s__64834__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64840,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64840,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813_$_iter__64833(cljs.core.rest(s__64834__$2)));
}
} else {
return null;
}
break;
}
});})(s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64830,path,resolvers,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,null,null));
});})(s__64814__$1,i__64806,s__64805__$1,path_SINGLEQUOTE_,vec__64830,path,resolvers,s__64814__$2,temp__5720__auto____$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64813(cljs.core.rest(s__64814__$2)));
} else {
var G__65689 = cljs.core.rest(s__64814__$2);
s__64814__$1 = G__65689;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__64806,s__64805__$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,null,null));
});})(i__64806,s__64805__$1,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (i__64806,s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (p1__64786_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__64786_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(i__64806,s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__64806,s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (p1__64785_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__64785_SHARP_,(0),((function (i__64806,s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(i__64806,s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
);
});})(i__64806,s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64808,input,v,c__4521__auto__,size__4522__auto__,b__64807,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,v)));
})():null)], 0)));

var G__65696 = (i__64806 + (1));
i__64806 = G__65696;
continue;
} else {
var G__65697 = (i__64806 + (1));
i__64806 = G__65697;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64807),com$wsscode$pathom$viz$index_explorer$iter__64804(cljs.core.chunk_rest(s__64805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64807),null);
}
} else {
var vec__64843 = cljs.core.first(s__64805__$2);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64843,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__64846 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__64846);
} else {
return G__64846;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (s__64805__$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(s__64805__$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__64847 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64847,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__64847;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (s__64805__$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848(s__64849){
return (new cljs.core.LazySeq(null,((function (s__64805__$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
var s__64849__$1 = s__64849;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__64849__$1);
if(temp__5720__auto____$1){
var s__64849__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64849__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64849__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64851 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64850 = (0);
while(true){
if((i__64850 < size__4522__auto__)){
var vec__64852 = cljs.core._nth(c__4521__auto__,i__64850);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64852,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64852,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__64851,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__64850,s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64852,path,resolvers,c__4521__auto__,size__4522__auto__,b__64851,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848_$_iter__64855(s__64856){
return (new cljs.core.LazySeq(null,((function (i__64850,s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64852,path,resolvers,c__4521__auto__,size__4522__auto__,b__64851,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
var s__64856__$1 = s__64856;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__64856__$1);
if(temp__5720__auto____$2){
var s__64856__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__64856__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__64856__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__64858 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__64857 = (0);
while(true){
if((i__64857 < size__4522__auto____$1)){
var vec__64859 = cljs.core._nth(c__4521__auto____$1,i__64857);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64859,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64859,(1),null);
cljs.core.chunk_append(b__64858,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__65721 = (i__64857 + (1));
i__64857 = G__65721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64858),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848_$_iter__64855(cljs.core.chunk_rest(s__64856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64858),null);
}
} else {
var vec__64862 = cljs.core.first(s__64856__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64862,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64862,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848_$_iter__64855(cljs.core.rest(s__64856__$2)));
}
} else {
return null;
}
break;
}
});})(i__64850,s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64852,path,resolvers,c__4521__auto__,size__4522__auto__,b__64851,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,null,null));
});})(i__64850,s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64852,path,resolvers,c__4521__auto__,size__4522__auto__,b__64851,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__65722 = (i__64850 + (1));
i__64850 = G__65722;
continue;
} else {
var G__65723 = (i__64850 + (1));
i__64850 = G__65723;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64851),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848(cljs.core.chunk_rest(s__64849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64851),null);
}
} else {
var vec__64865 = cljs.core.first(s__64849__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64865,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64865,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64865,path,resolvers,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848_$_iter__64868(s__64869){
return (new cljs.core.LazySeq(null,((function (s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64865,path,resolvers,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (){
var s__64869__$1 = s__64869;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__64869__$1);
if(temp__5720__auto____$2){
var s__64869__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__64869__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64869__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64871 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64870 = (0);
while(true){
if((i__64870 < size__4522__auto__)){
var vec__64872 = cljs.core._nth(c__4521__auto__,i__64870);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64872,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64872,(1),null);
cljs.core.chunk_append(b__64871,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__65724 = (i__64870 + (1));
i__64870 = G__65724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64871),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848_$_iter__64868(cljs.core.chunk_rest(s__64869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64871),null);
}
} else {
var vec__64875 = cljs.core.first(s__64869__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64875,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64875,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848_$_iter__64868(cljs.core.rest(s__64869__$2)));
}
} else {
return null;
}
break;
}
});})(s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64865,path,resolvers,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,null,null));
});})(s__64849__$1,s__64805__$1,path_SINGLEQUOTE_,vec__64865,path,resolvers,s__64849__$2,temp__5720__auto____$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__64804_$_iter__64848(cljs.core.rest(s__64849__$2)));
} else {
var G__65725 = cljs.core.rest(s__64849__$2);
s__64849__$1 = G__65725;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__64805__$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,null,null));
});})(s__64805__$1,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (p1__64786_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__64786_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (p1__64785_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__64785_SHARP_,(0),((function (s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
);
});})(s__64805__$1,iter__4523__auto__,direct_QMARK_,vec__64843,input,v,s__64805__$2,temp__5720__auto__,nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,v)));
})():null)], 0)),com$wsscode$pathom$viz$index_explorer$iter__64804(cljs.core.rest(s__64805__$2)));
} else {
var G__65726 = cljs.core.rest(s__64805__$2);
s__64805__$1 = G__65726;
continue;
}
}
} else {
return null;
}
break;
}
});})(nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
,null,null));
});})(nested_reaches_QMARK_,G__64802,map__64800,map__64800__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__64790,_STAR_depth_STAR__orig_val__64791,_STAR_shared_STAR__orig_val__64792,_STAR_instrument_STAR__orig_val__64793,_STAR_parent_STAR__orig_val__64794,_STAR_reconciler_STAR__temp_val__64795,_STAR_depth_STAR__temp_val__64796,_STAR_shared_STAR__temp_val__64797,_STAR_instrument_STAR__temp_val__64798,_STAR_parent_STAR__temp_val__64799,this$,this__50885__auto__,x64789_65684))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str,com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),attr_reach_via)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__64802,G__64803) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__64802,G__64803));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64794;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64793;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64792;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64791;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64790;
}});})(x64789_65684))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.fulcro$isComponent = true;

var x64878_65727 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;
x64878_65727.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64878_65727.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64878_65727){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64878_65727))
;

x64878_65727.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64878_65727.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64878_65727){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x64878_65727))
;


var x64879_65728 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x64879_65728.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64879_65728.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64879_65728){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64879_65728))
;

x64879_65728.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64879_65728.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64879_65728){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x64879_65728))
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

var x64882_65729 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x64882_65729.render = ((function (x64882_65729){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64883 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64884 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64885 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64886 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64887 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64888 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64889 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64890 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64891 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64892 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64888;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64889;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64890;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64891;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64892;

try{var map__64893 = fulcro.client.primitives.props(this$);
var map__64893__$1 = (((((!((map__64893 == null))))?(((((map__64893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64893):map__64893);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64893__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__64895 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Param In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_param_in)], null);
var G__64896 = (function (){var iter__4523__auto__ = ((function (G__64895,map__64893,map__64893__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__64883,_STAR_depth_STAR__orig_val__64884,_STAR_shared_STAR__orig_val__64885,_STAR_instrument_STAR__orig_val__64886,_STAR_parent_STAR__orig_val__64887,_STAR_reconciler_STAR__temp_val__64888,_STAR_depth_STAR__temp_val__64889,_STAR_shared_STAR__temp_val__64890,_STAR_instrument_STAR__temp_val__64891,_STAR_parent_STAR__temp_val__64892,this$,this__50885__auto__,x64882_65729){
return (function com$wsscode$pathom$viz$index_explorer$iter__64897(s__64898){
return (new cljs.core.LazySeq(null,((function (G__64895,map__64893,map__64893__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__64883,_STAR_depth_STAR__orig_val__64884,_STAR_shared_STAR__orig_val__64885,_STAR_instrument_STAR__orig_val__64886,_STAR_parent_STAR__orig_val__64887,_STAR_reconciler_STAR__temp_val__64888,_STAR_depth_STAR__temp_val__64889,_STAR_shared_STAR__temp_val__64890,_STAR_instrument_STAR__temp_val__64891,_STAR_parent_STAR__temp_val__64892,this$,this__50885__auto__,x64882_65729){
return (function (){
var s__64898__$1 = s__64898;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__64898__$1);
if(temp__5720__auto__){
var s__64898__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64898__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64898__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64900 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64899 = (0);
while(true){
if((i__64899 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__64899);
cljs.core.chunk_append(b__64900,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__65730 = (i__64899 + (1));
i__64899 = G__65730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64900),com$wsscode$pathom$viz$index_explorer$iter__64897(cljs.core.chunk_rest(s__64898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64900),null);
}
} else {
var sym = cljs.core.first(s__64898__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__64897(cljs.core.rest(s__64898__$2)));
}
} else {
return null;
}
break;
}
});})(G__64895,map__64893,map__64893__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__64883,_STAR_depth_STAR__orig_val__64884,_STAR_shared_STAR__orig_val__64885,_STAR_instrument_STAR__orig_val__64886,_STAR_parent_STAR__orig_val__64887,_STAR_reconciler_STAR__temp_val__64888,_STAR_depth_STAR__temp_val__64889,_STAR_shared_STAR__temp_val__64890,_STAR_instrument_STAR__temp_val__64891,_STAR_parent_STAR__temp_val__64892,this$,this__50885__auto__,x64882_65729))
,null,null));
});})(G__64895,map__64893,map__64893__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__64883,_STAR_depth_STAR__orig_val__64884,_STAR_shared_STAR__orig_val__64885,_STAR_instrument_STAR__orig_val__64886,_STAR_parent_STAR__orig_val__64887,_STAR_reconciler_STAR__temp_val__64888,_STAR_depth_STAR__temp_val__64889,_STAR_shared_STAR__temp_val__64890,_STAR_instrument_STAR__temp_val__64891,_STAR_parent_STAR__temp_val__64892,this$,this__50885__auto__,x64882_65729))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_param_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__64895,G__64896) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__64895,G__64896));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64887;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64886;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64885;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64884;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64883;
}});})(x64882_65729))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.fulcro$isComponent = true;

var x64901_65731 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;
x64901_65731.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64901_65731.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64901_65731){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64901_65731))
;

x64901_65731.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64901_65731.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64901_65731){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x64901_65731))
;


var x64902_65732 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x64902_65732.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64902_65732.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64902_65732){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64902_65732))
;

x64902_65732.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64902_65732.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64902_65732){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x64902_65732))
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

var x64905_65733 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x64905_65733.render = ((function (x64905_65733){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64906 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64907 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64908 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64909 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64910 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64911 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64912 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64913 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64914 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64915 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64911;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64912;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64913;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64914;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64915;

try{var map__64916 = fulcro.client.primitives.props(this$);
var map__64916__$1 = (((((!((map__64916 == null))))?(((((map__64916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64916):map__64916);
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__64918 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_output_in)], null);
var G__64919 = (function (){var iter__4523__auto__ = ((function (G__64918,map__64916,map__64916__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__64906,_STAR_depth_STAR__orig_val__64907,_STAR_shared_STAR__orig_val__64908,_STAR_instrument_STAR__orig_val__64909,_STAR_parent_STAR__orig_val__64910,_STAR_reconciler_STAR__temp_val__64911,_STAR_depth_STAR__temp_val__64912,_STAR_shared_STAR__temp_val__64913,_STAR_instrument_STAR__temp_val__64914,_STAR_parent_STAR__temp_val__64915,this$,this__50885__auto__,x64905_65733){
return (function com$wsscode$pathom$viz$index_explorer$iter__64920(s__64921){
return (new cljs.core.LazySeq(null,((function (G__64918,map__64916,map__64916__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__64906,_STAR_depth_STAR__orig_val__64907,_STAR_shared_STAR__orig_val__64908,_STAR_instrument_STAR__orig_val__64909,_STAR_parent_STAR__orig_val__64910,_STAR_reconciler_STAR__temp_val__64911,_STAR_depth_STAR__temp_val__64912,_STAR_shared_STAR__temp_val__64913,_STAR_instrument_STAR__temp_val__64914,_STAR_parent_STAR__temp_val__64915,this$,this__50885__auto__,x64905_65733){
return (function (){
var s__64921__$1 = s__64921;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__64921__$1);
if(temp__5720__auto__){
var s__64921__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64921__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64921__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64923 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64922 = (0);
while(true){
if((i__64922 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__64922);
cljs.core.chunk_append(b__64923,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__65734 = (i__64922 + (1));
i__64922 = G__65734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64923),com$wsscode$pathom$viz$index_explorer$iter__64920(cljs.core.chunk_rest(s__64921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64923),null);
}
} else {
var sym = cljs.core.first(s__64921__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__64920(cljs.core.rest(s__64921__$2)));
}
} else {
return null;
}
break;
}
});})(G__64918,map__64916,map__64916__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__64906,_STAR_depth_STAR__orig_val__64907,_STAR_shared_STAR__orig_val__64908,_STAR_instrument_STAR__orig_val__64909,_STAR_parent_STAR__orig_val__64910,_STAR_reconciler_STAR__temp_val__64911,_STAR_depth_STAR__temp_val__64912,_STAR_shared_STAR__temp_val__64913,_STAR_instrument_STAR__temp_val__64914,_STAR_parent_STAR__temp_val__64915,this$,this__50885__auto__,x64905_65733))
,null,null));
});})(G__64918,map__64916,map__64916__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__64906,_STAR_depth_STAR__orig_val__64907,_STAR_shared_STAR__orig_val__64908,_STAR_instrument_STAR__orig_val__64909,_STAR_parent_STAR__orig_val__64910,_STAR_reconciler_STAR__temp_val__64911,_STAR_depth_STAR__temp_val__64912,_STAR_shared_STAR__temp_val__64913,_STAR_instrument_STAR__temp_val__64914,_STAR_parent_STAR__temp_val__64915,this$,this__50885__auto__,x64905_65733))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__64918,G__64919) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__64918,G__64919));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64910;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64909;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64908;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64907;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64906;
}});})(x64905_65733))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.fulcro$isComponent = true;

var x64924_65735 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;
x64924_65735.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64924_65735.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64924_65735){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64924_65735))
;

x64924_65735.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64924_65735.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64924_65735){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x64924_65735))
;


var x64925_65736 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x64925_65736.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64925_65736.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64925_65736){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64925_65736))
;

x64925_65736.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64925_65736.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64925_65736){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x64925_65736))
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

var x64928_65737 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x64928_65737.render = ((function (x64928_65737){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64929 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64930 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64931 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64932 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64933 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64934 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64935 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64936 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64937 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64938 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64934;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64935;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64936;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64937;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64938;

try{var map__64939 = fulcro.client.primitives.props(this$);
var map__64939__$1 = (((((!((map__64939 == null))))?(((((map__64939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64939):map__64939);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64939__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__64941 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__64943 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__64944 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Examples"], 0));
var G__64945 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0))], 0));
var G__64946 = (function (){var G__64947 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__64943,G__64944,G__64945,map__64939,map__64939__$1,attribute,_STAR_reconciler_STAR__orig_val__64929,_STAR_depth_STAR__orig_val__64930,_STAR_shared_STAR__orig_val__64931,_STAR_instrument_STAR__orig_val__64932,_STAR_parent_STAR__orig_val__64933,_STAR_reconciler_STAR__temp_val__64934,_STAR_depth_STAR__temp_val__64935,_STAR_shared_STAR__temp_val__64936,_STAR_instrument_STAR__temp_val__64937,_STAR_parent_STAR__temp_val__64938,this$,this__50885__auto__,x64928_65737){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
});})(G__64943,G__64944,G__64945,map__64939,map__64939__$1,attribute,_STAR_reconciler_STAR__orig_val__64929,_STAR_depth_STAR__orig_val__64930,_STAR_shared_STAR__orig_val__64931,_STAR_instrument_STAR__orig_val__64932,_STAR_parent_STAR__orig_val__64933,_STAR_reconciler_STAR__temp_val__64934,_STAR_depth_STAR__temp_val__64935,_STAR_shared_STAR__temp_val__64936,_STAR_instrument_STAR__temp_val__64937,_STAR_parent_STAR__temp_val__64938,this$,this__50885__auto__,x64928_65737))
], null);
var G__64948 = fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa","fa-sync-alt"], null)], null)], 0));
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__64947,G__64948) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__64947,G__64948));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__64943,G__64944,G__64945,G__64946) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__64943,G__64944,G__64945,G__64946));
})()], null);
var G__64942 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".examples",".examples",-775726891),(function (){try{var samples = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(attribute))));
var samples__$1 = (function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(samples);
}catch (e64950){var _ = e64950;
return samples;
}})();
var iter__4523__auto__ = ((function (samples,samples__$1,G__64941,map__64939,map__64939__$1,attribute,_STAR_reconciler_STAR__orig_val__64929,_STAR_depth_STAR__orig_val__64930,_STAR_shared_STAR__orig_val__64931,_STAR_instrument_STAR__orig_val__64932,_STAR_parent_STAR__orig_val__64933,_STAR_reconciler_STAR__temp_val__64934,_STAR_depth_STAR__temp_val__64935,_STAR_shared_STAR__temp_val__64936,_STAR_instrument_STAR__temp_val__64937,_STAR_parent_STAR__temp_val__64938,this$,this__50885__auto__,x64928_65737){
return (function com$wsscode$pathom$viz$index_explorer$iter__64951(s__64952){
return (new cljs.core.LazySeq(null,((function (samples,samples__$1,G__64941,map__64939,map__64939__$1,attribute,_STAR_reconciler_STAR__orig_val__64929,_STAR_depth_STAR__orig_val__64930,_STAR_shared_STAR__orig_val__64931,_STAR_instrument_STAR__orig_val__64932,_STAR_parent_STAR__orig_val__64933,_STAR_reconciler_STAR__temp_val__64934,_STAR_depth_STAR__temp_val__64935,_STAR_shared_STAR__temp_val__64936,_STAR_instrument_STAR__temp_val__64937,_STAR_parent_STAR__temp_val__64938,this$,this__50885__auto__,x64928_65737){
return (function (){
var s__64952__$1 = s__64952;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__64952__$1);
if(temp__5720__auto__){
var s__64952__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64952__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64952__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64954 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64953 = (0);
while(true){
if((i__64953 < size__4522__auto__)){
var vec__64955 = cljs.core._nth(c__4521__auto__,i__64953);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64955,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64955,(1),null);
cljs.core.chunk_append(b__64954,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)));

var G__65738 = (i__64953 + (1));
i__64953 = G__65738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64954),com$wsscode$pathom$viz$index_explorer$iter__64951(cljs.core.chunk_rest(s__64952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64954),null);
}
} else {
var vec__64958 = cljs.core.first(s__64952__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64958,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64958,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)),com$wsscode$pathom$viz$index_explorer$iter__64951(cljs.core.rest(s__64952__$2)));
}
} else {
return null;
}
break;
}
});})(samples,samples__$1,G__64941,map__64939,map__64939__$1,attribute,_STAR_reconciler_STAR__orig_val__64929,_STAR_depth_STAR__orig_val__64930,_STAR_shared_STAR__orig_val__64931,_STAR_instrument_STAR__orig_val__64932,_STAR_parent_STAR__orig_val__64933,_STAR_reconciler_STAR__temp_val__64934,_STAR_depth_STAR__temp_val__64935,_STAR_shared_STAR__temp_val__64936,_STAR_instrument_STAR__temp_val__64937,_STAR_parent_STAR__temp_val__64938,this$,this__50885__auto__,x64928_65737))
,null,null));
});})(samples,samples__$1,G__64941,map__64939,map__64939__$1,attribute,_STAR_reconciler_STAR__orig_val__64929,_STAR_depth_STAR__orig_val__64930,_STAR_shared_STAR__orig_val__64931,_STAR_instrument_STAR__orig_val__64932,_STAR_parent_STAR__orig_val__64933,_STAR_reconciler_STAR__temp_val__64934,_STAR_depth_STAR__temp_val__64935,_STAR_shared_STAR__temp_val__64936,_STAR_instrument_STAR__temp_val__64937,_STAR_parent_STAR__temp_val__64938,this$,this__50885__auto__,x64928_65737))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),samples__$1));
}catch (e64949){var ex = e64949;
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error generating samples:",fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.ex_message(ex)], 0))], 0));
}})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__64941,G__64942) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__64941,G__64942));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64933;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64932;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64931;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64930;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64929;
}});})(x64928_65737))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.fulcro$isComponent = true;

var x64961_65739 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;
x64961_65739.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64961_65739.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64961_65739){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x64961_65739))
;

x64961_65739.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64961_65739){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64961_65739))
;


var x64962_65740 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x64962_65740.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64962_65740.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64962_65740){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x64962_65740))
;

x64962_65740.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64962_65740){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64962_65740))
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

var x64967_65741 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x64967_65741.render = ((function (x64967_65741){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64968 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64969 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64970 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64971 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64972 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64973 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64974 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64975 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64976 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64977 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64973;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64974;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64975;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64976;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64977;

try{var map__64978 = fulcro.client.primitives.props(this$);
var map__64978__$1 = (((((!((map__64978 == null))))?(((((map__64978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64978):map__64978);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242));
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994));
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448));
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052));
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64978__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var map__64979 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__64979__$1 = (((((!((map__64979 == null))))?(((((map__64979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64979):map__64979);
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64979__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64979__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64979__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var G__64982 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__64984 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042)], 0))], null);
var G__64985 = (function (){var G__64990 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__64991 = fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Depth"], 0));
var G__64992 = (function (){var G__64993 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),attr_depth,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__64990,G__64991,G__64984,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741){
return (function (p1__64964_SHARP_,p2__64963_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),p2__64963_SHARP_);
});})(G__64990,G__64991,G__64984,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741))
], null);
return (com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1(G__64993) : com.wsscode.pathom.viz.ui.kit.number_input.call(null,G__64993));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__64990,G__64991,G__64992) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__64990,G__64991,G__64992));
})();
var G__64986 = (function (){var G__64994 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__64984,G__64985,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),cljs.core.not(direct_reaches_QMARK_));
});})(G__64984,G__64985,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741))
], null);
var G__64995 = "Direct inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__64994,G__64995) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__64994,G__64995));
})();
var G__64987 = (function (){var G__64996 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__64984,G__64985,G__64986,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),cljs.core.not(nested_reaches_QMARK_));
});})(G__64984,G__64985,G__64986,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741))
], null);
var G__64997 = "Nested inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__64996,G__64997) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__64996,G__64997));
})();
var G__64988 = (function (){var G__64998 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__64984,G__64985,G__64986,G__64987,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),cljs.core.not(direct_provides_QMARK_));
});})(G__64984,G__64985,G__64986,G__64987,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741))
], null);
var G__64999 = "Direct outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__64998,G__64999) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__64998,G__64999));
})();
var G__64989 = (function (){var G__65000 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__64984,G__64985,G__64986,G__64987,G__64988,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),cljs.core.not(nested_provides_QMARK_));
});})(G__64984,G__64985,G__64986,G__64987,G__64988,map__64978,map__64978__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__64979,map__64979__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__64968,_STAR_depth_STAR__orig_val__64969,_STAR_shared_STAR__orig_val__64970,_STAR_instrument_STAR__orig_val__64971,_STAR_parent_STAR__orig_val__64972,_STAR_reconciler_STAR__temp_val__64973,_STAR_depth_STAR__temp_val__64974,_STAR_shared_STAR__temp_val__64975,_STAR_instrument_STAR__temp_val__64976,_STAR_parent_STAR__temp_val__64977,this$,this__50885__auto__,x64967_65741))
], null);
var G__65001 = "Nested outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__65000,G__65001) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__65000,G__65001));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6(G__64984,G__64985,G__64986,G__64987,G__64988,G__64989) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__64984,G__64985,G__64986,G__64987,G__64988,G__64989));
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","scrollbars?","com.wsscode.pathom.viz.ui.kit/scrollbars?",1389911780),false], null);
var G__64983 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph",".graph",-327673667),(function (){var shared_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),direct_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),nested_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),direct_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),nested_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),interconnections_QMARK_], null);
var G__65002 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),com.wsscode.pathom.viz.index_explorer.attribute_network(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),attr_depth,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes], null),shared_options], 0)),attribute),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),graph_comm], null),shared_options], 0));
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__65002) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__65002));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__64982,G__64983) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__64982,G__64983));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64972;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64971;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64970;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64969;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64968;
}});})(x64967_65741))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.fulcro$isComponent = true;

var x65003_65742 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;
x65003_65742.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65003_65742.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65003_65742){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x65003_65742))
;

x65003_65742.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65003_65742){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65003_65742))
;

x65003_65742.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65003_65742.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65003_65742){
return (function (this$,p__65004){
var map__65005 = p__65004;
var map__65005__$1 = (((((!((map__65005 == null))))?(((((map__65005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65005):map__65005);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65005__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65005__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x65003_65742))
;

x65003_65742.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65003_65742.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65003_65742){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65003_65742))
;

x65003_65742.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65003_65742.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65003_65742){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x65003_65742))
;


var x65007_65743 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x65007_65743.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65007_65743.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65007_65743){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x65007_65743))
;

x65007_65743.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65007_65743){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65007_65743))
;

x65007_65743.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65007_65743.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65007_65743){
return (function (this$,p__65008){
var map__65009 = p__65008;
var map__65009__$1 = (((((!((map__65009 == null))))?(((((map__65009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65009):map__65009);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65009__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65009__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x65007_65743))
;

x65007_65743.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65007_65743.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65007_65743){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65007_65743))
;

x65007_65743.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65007_65743.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65007_65743){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x65007_65743))
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

var x65016_65744 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x65016_65744.render = ((function (x65016_65744){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65017 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65018 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65019 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65020 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65021 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65022 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65023 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65024 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65025 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65026 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65022;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65023;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65024;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65025;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65026;

try{var map__65027 = fulcro.client.primitives.props(this$);
var map__65027__$1 = (((((!((map__65027 == null))))?(((((map__65027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65027):map__65027);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var provides_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755));
var provides_tree_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325));
var attr_input_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var show_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552));
var mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271));
var attr_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610));
var reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword(">","reach-via",">/reach-via",725397135));
var graph_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737));
var mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], 0)),(function (){var G__65029 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),show_graph_QMARK_,new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669)], 0)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),cljs.core.not(show_graph_QMARK_));
});})(computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
], null);
var G__65030 = "Graph View";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__65029,G__65030) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__65029,G__65030));
})()], 0)),(cljs.core.truth_(show_graph_QMARK_)?(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(graph_panel,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,graph_panel,computed__$1)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".columns$scrollbars",".columns$scrollbars",-1170212651),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list",".data-list",949465177),((cljs.core.seq(attr_reach_via))?(com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2(reach_via,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.call(null,reach_via,computed__$1)):null),((cljs.core.seq(attr_output_in))?(function (){var G__65031 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_output_in)], null);
var G__65032 = (function (){var iter__4523__auto__ = ((function (G__65031,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function com$wsscode$pathom$viz$index_explorer$iter__65033(s__65034){
return (new cljs.core.LazySeq(null,((function (G__65031,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function (){
var s__65034__$1 = s__65034;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65034__$1);
if(temp__5720__auto__){
var s__65034__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65034__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65034__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65036 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65035 = (0);
while(true){
if((i__65035 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__65035);
cljs.core.chunk_append(b__65036,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__65745 = (i__65035 + (1));
i__65035 = G__65745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65036),com$wsscode$pathom$viz$index_explorer$iter__65033(cljs.core.chunk_rest(s__65034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65036),null);
}
} else {
var resolver = cljs.core.first(s__65034__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__65033(cljs.core.rest(s__65034__$2)));
}
} else {
return null;
}
break;
}
});})(G__65031,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
,null,null));
});})(G__65031,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65031,G__65032) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65031,G__65032));
})():null),((cljs.core.seq(attr_combinations))?(function (){var G__65037 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input Combinations",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_combinations)], null);
var G__65038 = (function (){var iter__4523__auto__ = ((function (G__65037,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function com$wsscode$pathom$viz$index_explorer$iter__65039(s__65040){
return (new cljs.core.LazySeq(null,((function (G__65037,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function (){
var s__65040__$1 = s__65040;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65040__$1);
if(temp__5720__auto__){
var s__65040__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65040__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65040__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65042 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65041 = (0);
while(true){
if((i__65041 < size__4522__auto__)){
var input = cljs.core._nth(c__4521__auto__,i__65041);
cljs.core.chunk_append(b__65042,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1));

var G__65746 = (i__65041 + (1));
i__65041 = G__65746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65042),com$wsscode$pathom$viz$index_explorer$iter__65039(cljs.core.chunk_rest(s__65040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65042),null);
}
} else {
var input = cljs.core.first(s__65040__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__65039(cljs.core.rest(s__65040__$2)));
}
} else {
return null;
}
break;
}
});})(G__65037,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
,null,null));
});})(G__65037,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort),com.wsscode.pathom.viz.helpers.vector_compare,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,G__65037,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function (p1__65013_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),p1__65013_SHARP_);
});})(iter__4523__auto__,G__65037,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
,attr_combinations)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65037,G__65038) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65037,G__65038));
})():null),((cljs.core.seq(attr_mutation_param_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2(mutation_param_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.call(null,mutation_param_in,computed__$1)):null),((cljs.core.seq(attr_mutation_output_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2(mutation_output_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.call(null,mutation_output_in,computed__$1)):null),(function (){var temp__5718__auto__ = com.wsscode.spec_inspec.safe_form(attribute);
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__65043 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Spec"], null);
var G__65044 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65043,G__65044) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65043,G__65044));
})(),(function (){var G__65045 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__65046 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2(G__65045,G__65046) : com.wsscode.pathom.viz.index_explorer.examples_panel.call(null,G__65045,G__65046));
})()], 0));
} else {
return null;
}
})(),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-attr-left-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-attr-left-menu",-1946076893))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),((cljs.core.seq(attr_provides))?(function (){var G__65047 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Provides",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_provides)], null);
var G__65048 = (function (){var G__65049 = provides_tree;
var G__65050 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),provides_tree_source,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),((function (G__65049,G__65047,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function (p__65051){
var map__65052 = p__65051;
var map__65052__$1 = (((((!((map__65052 == null))))?(((((map__65052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65052):map__65052);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sym_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
var G__65054 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-container",".links-container",-1347961892)], 0))], null);
var G__65055 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
var G__65056 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-display",".links-display",-2102960556)], 0))], null),(function (){var iter__4523__auto__ = ((function (G__65054,G__65055,map__65052,map__65052__$1,key,sym_set,G__65049,G__65047,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function com$wsscode$pathom$viz$index_explorer$iter__65057(s__65058){
return (new cljs.core.LazySeq(null,((function (G__65054,G__65055,map__65052,map__65052__$1,key,sym_set,G__65049,G__65047,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function (){
var s__65058__$1 = s__65058;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65058__$1);
if(temp__5720__auto__){
var s__65058__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65058__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65058__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65060 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65059 = (0);
while(true){
if((i__65059 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__65059);
cljs.core.chunk_append(b__65060,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1));

var G__65747 = (i__65059 + (1));
i__65059 = G__65747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65060),com$wsscode$pathom$viz$index_explorer$iter__65057(cljs.core.chunk_rest(s__65058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65060),null);
}
} else {
var sym = cljs.core.first(s__65058__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__65057(cljs.core.rest(s__65058__$2)));
}
} else {
return null;
}
break;
}
});})(G__65054,G__65055,map__65052,map__65052__$1,key,sym_set,G__65049,G__65047,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
,null,null));
});})(G__65054,G__65055,map__65052,map__65052__$1,key,sym_set,G__65049,G__65047,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(sym_set));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__65054,G__65055,G__65056) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65054,G__65055,G__65056));
});})(G__65049,G__65047,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__65049,G__65050) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__65049,G__65050));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65047,G__65048) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65047,G__65048));
})():null),((cljs.core.seq(attr_input_in))?(function (){var G__65061 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_input_in)], null);
var G__65062 = (function (){var iter__4523__auto__ = ((function (G__65061,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function com$wsscode$pathom$viz$index_explorer$iter__65063(s__65064){
return (new cljs.core.LazySeq(null,((function (G__65061,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744){
return (function (){
var s__65064__$1 = s__65064;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65064__$1);
if(temp__5720__auto__){
var s__65064__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65064__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65064__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65066 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65065 = (0);
while(true){
if((i__65065 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__65065);
cljs.core.chunk_append(b__65066,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__65748 = (i__65065 + (1));
i__65065 = G__65748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65066),com$wsscode$pathom$viz$index_explorer$iter__65063(cljs.core.chunk_rest(s__65064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65066),null);
}
} else {
var resolver = cljs.core.first(s__65064__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__65063(cljs.core.rest(s__65064__$2)));
}
} else {
return null;
}
break;
}
});})(G__65061,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
,null,null));
});})(G__65061,computed__$1,map__65027,map__65027__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__65017,_STAR_depth_STAR__orig_val__65018,_STAR_shared_STAR__orig_val__65019,_STAR_instrument_STAR__orig_val__65020,_STAR_parent_STAR__orig_val__65021,_STAR_reconciler_STAR__temp_val__65022,_STAR_depth_STAR__temp_val__65023,_STAR_shared_STAR__temp_val__65024,_STAR_instrument_STAR__temp_val__65025,_STAR_parent_STAR__temp_val__65026,this$,this__50885__auto__,x65016_65744))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_input_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65061,G__65062) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65061,G__65062));
})():null)], 0))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65021;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65020;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65019;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65018;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65017;
}});})(x65016_65744))
;

x65016_65744.initLocalState = ((function (x65016_65744){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x65016_65744){
return (function (p__65067){
var map__65068 = p__65067;
var map__65068__$1 = (((((!((map__65068 == null))))?(((((map__65068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65068):map__65068);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65068__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__65070 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__65070__$1 = (((((!((map__65070 == null))))?(((((map__65070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65070):map__65070);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65070__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__65072 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__65072) : on_select_resolver.call(null,G__65072));
});})(this$,x65016_65744))
], null);
var obj65074 = ({"fulcro$state":ret__50860__auto__});
return obj65074;
});})(x65016_65744))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeView;

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.fulcro$isComponent = true;

var x65075_65749 = com.wsscode.pathom.viz.index_explorer.AttributeView;
x65075_65749.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65075_65749.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65075_65749){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x65075_65749))
;

x65075_65749.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65075_65749){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x65075_65749))
;

x65075_65749.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65075_65749.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65075_65749){
return (function (this$,p__65076){
var map__65077 = p__65076;
var map__65077__$1 = (((((!((map__65077 == null))))?(((((map__65077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65077):map__65077);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65077__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65077__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x65075_65749))
;

x65075_65749.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65075_65749.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65075_65749){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65075_65749))
;

x65075_65749.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65075_65749.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65075_65749){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x65075_65749))
;


var x65079_65750 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x65079_65750.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65079_65750.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65079_65750){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x65079_65750))
;

x65079_65750.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65079_65750){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x65079_65750))
;

x65079_65750.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65079_65750.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65079_65750){
return (function (this$,p__65080){
var map__65081 = p__65080;
var map__65081__$1 = (((((!((map__65081 == null))))?(((((map__65081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65081):map__65081);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65081__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65081__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x65079_65750))
;

x65079_65750.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65079_65750.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65079_65750){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65079_65750))
;

x65079_65750.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65079_65750.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65079_65750){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x65079_65750))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.AttributeView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.attribute_view = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null));
com.wsscode.pathom.viz.index_explorer.out_all_attributes = (function com$wsscode$pathom$viz$index_explorer$out_all_attributes(p__65083,input){
var map__65084 = p__65083;
var map__65084__$1 = (((((!((map__65084 == null))))?(((((map__65084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65084):map__65084);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65084__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__65084,map__65084__$1,children){
return (function (attrs,p__65086){
var map__65087 = p__65086;
var map__65087__$1 = (((((!((map__65087 == null))))?(((((map__65087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65087):map__65087);
var node = map__65087__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65087__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__65089 = ((cljs.core.contains_QMARK_(input,key))?attrs:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key));
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__65089,(com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2(node,input) : com.wsscode.pathom.viz.index_explorer.out_all_attributes.call(null,node,input)));
} else {
return G__65089;
}
});})(map__65084,map__65084__$1,children))
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

var x65093_65751 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x65093_65751.render = ((function (x65093_65751){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65094 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65095 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65096 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65097 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65098 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65099 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65100 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65101 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65102 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65103 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65099;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65100;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65101;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65102;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65103;

try{var map__65104 = fulcro.client.primitives.props(this$);
var map__65104__$1 = (((((!((map__65104 == null))))?(((((map__65104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65104):map__65104);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343));
var map__65105 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__65105__$1 = (((((!((map__65105 == null))))?(((((map__65105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65105):map__65105);
var computed = map__65105__$1;
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65105__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65105__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.index_explorer.ResolverView);
var input_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input)))?cljs.core.first(input):input);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__65108 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__65109 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__65110 = (function (){var G__65111 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__65112 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),(cljs.core.truth_(batch_QMARK_)?(function (){var G__65114 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Batch"], null);
var G__65115 = "True";
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65114,G__65115) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65114,G__65115));
})():null),(cljs.core.truth_(input)?(function (){var G__65116 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input"], null);
var G__65117 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input_SINGLEQUOTE_], null),computed__$1);
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65116,G__65117) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65116,G__65117));
})():null),(cljs.core.truth_(output)?(function (){var G__65118 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__65119 = (function (){var G__65120 = output_tree;
var G__65121 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword(null,"children","children",-940561982),((function (G__65120,G__65118,G__65111,G__65108,G__65109,input_SINGLEQUOTE_,computed__$1,map__65104,map__65104__$1,sym,input,output,batch_QMARK_,output_tree,map__65105,map__65105__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__65094,_STAR_depth_STAR__orig_val__65095,_STAR_shared_STAR__orig_val__65096,_STAR_instrument_STAR__orig_val__65097,_STAR_parent_STAR__orig_val__65098,_STAR_reconciler_STAR__temp_val__65099,_STAR_depth_STAR__temp_val__65100,_STAR_shared_STAR__temp_val__65101,_STAR_instrument_STAR__temp_val__65102,_STAR_parent_STAR__temp_val__65103,this$,this__50885__auto__,x65093_65751){
return (function (p1__65090_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.Keyword(null,"key","key",-1516042587)),p1__65090_SHARP_);
});})(G__65120,G__65118,G__65111,G__65108,G__65109,input_SINGLEQUOTE_,computed__$1,map__65104,map__65104__$1,sym,input,output,batch_QMARK_,output_tree,map__65105,map__65105__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__65094,_STAR_depth_STAR__orig_val__65095,_STAR_shared_STAR__orig_val__65096,_STAR_instrument_STAR__orig_val__65097,_STAR_parent_STAR__orig_val__65098,_STAR_reconciler_STAR__temp_val__65099,_STAR_depth_STAR__temp_val__65100,_STAR_shared_STAR__temp_val__65101,_STAR_instrument_STAR__temp_val__65102,_STAR_parent_STAR__temp_val__65103,this$,this__50885__auto__,x65093_65751))
),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__65120,G__65121) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__65120,G__65121));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65118,G__65119) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65118,G__65119));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-resolver-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-resolver-menu",-1265412227))], 0));
var G__65113 = (cljs.core.truth_(input)?(function (){var resolver_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.out_all_attributes(edn_query_language.core.query__GT_ast(output),input),input_SINGLEQUOTE_);
var attrs = cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.select_keys(com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),resolver_attrs),input_SINGLEQUOTE_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
var G__65122 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318))], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__65122) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__65122));
})():null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__65111,G__65112,G__65113) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__65111,G__65112,G__65113));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__65108,G__65109,G__65110) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65108,G__65109,G__65110));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65098;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65097;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65096;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65095;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65094;
}});})(x65093_65751))
;

x65093_65751.initLocalState = ((function (x65093_65751){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x65093_65751){
return (function (p__65123){
var map__65124 = p__65123;
var map__65124__$1 = (((((!((map__65124 == null))))?(((((map__65124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65124):map__65124);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65124__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__65126 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__65126__$1 = (((((!((map__65126 == null))))?(((((map__65126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65126):map__65126);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65126__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__65128 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__65128) : on_select_resolver.call(null,G__65128));
});})(this$,x65093_65751))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x65093_65751){
return (function (p__65129){
var map__65130 = p__65129;
var map__65130__$1 = (((((!((map__65130 == null))))?(((((map__65130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65130):map__65130);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65130__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
});})(this$,x65093_65751))
], null);
var obj65133 = ({"fulcro$state":ret__50860__auto__});
return obj65133;
});})(x65093_65751))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverView;

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.fulcro$isComponent = true;

var x65134_65752 = com.wsscode.pathom.viz.index_explorer.ResolverView;
x65134_65752.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65134_65752.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65134_65752){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x65134_65752))
;

x65134_65752.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65134_65752){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65134_65752))
;

x65134_65752.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65134_65752.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65134_65752){
return (function (this$,p__65135){
var map__65136 = p__65135;
var map__65136__$1 = (((((!((map__65136 == null))))?(((((map__65136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65136):map__65136);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65136__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65136__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x65134_65752))
;

x65134_65752.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65134_65752.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65134_65752){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65134_65752))
;

x65134_65752.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65134_65752.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65134_65752){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x65134_65752))
;


var x65138_65753 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x65138_65753.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65138_65753.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65138_65753){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x65138_65753))
;

x65138_65753.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65138_65753){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65138_65753))
;

x65138_65753.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65138_65753.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65138_65753){
return (function (this$,p__65139){
var map__65140 = p__65139;
var map__65140__$1 = (((((!((map__65140 == null))))?(((((map__65140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65140):map__65140);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x65138_65753))
;

x65138_65753.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65138_65753.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65138_65753){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65138_65753))
;

x65138_65753.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65138_65753.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65138_65753){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x65138_65753))
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

var x65144_65754 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x65144_65754.render = ((function (x65144_65754){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65145 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65146 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65147 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65148 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65149 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65150 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65151 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65152 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65153 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65154 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65150;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65151;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65152;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65153;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65154;

try{var map__65155 = fulcro.client.primitives.props(this$);
var map__65155__$1 = (((((!((map__65155 == null))))?(((((map__65155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65155):map__65155);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var mutation_params_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365));
var mutation_output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980));
var G__65157 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__65158 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__65159 = (function (){var G__65160 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120),new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447)], 0));
var G__65161 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(params)?(function (){var G__65164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Params"], null);
var G__65165 = (function (){var G__65166 = mutation_params_tree;
var G__65167 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(params),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__65166,G__65167) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__65166,G__65167));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65164,G__65165) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65164,G__65165));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-left","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-left",-356992926))], 0));
var G__65162 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0));
var G__65163 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(output)?(function (){var G__65168 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__65169 = (function (){var G__65170 = mutation_output_tree;
var G__65171 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__65170,G__65171) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__65170,G__65171));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65168,G__65169) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65168,G__65169));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-right","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-right",1791875010))], 0));
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__65160,G__65161,G__65162,G__65163) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__65160,G__65161,G__65162,G__65163));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__65157,G__65158,G__65159) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65157,G__65158,G__65159));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65149;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65148;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65147;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65146;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65145;
}});})(x65144_65754))
;

x65144_65754.initLocalState = ((function (x65144_65754){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x65144_65754){
return (function (p__65172){
var map__65173 = p__65172;
var map__65173__$1 = (((((!((map__65173 == null))))?(((((map__65173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65173):map__65173);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65173__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(this$,x65144_65754))
], null);
var obj65176 = ({"fulcro$state":ret__50860__auto__});
return obj65176;
});})(x65144_65754))
;


com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationView;

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.fulcro$isComponent = true;

var x65177_65755 = com.wsscode.pathom.viz.index_explorer.MutationView;
x65177_65755.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65177_65755.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65177_65755){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x65177_65755))
;

x65177_65755.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65177_65755){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65177_65755))
;

x65177_65755.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65177_65755.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65177_65755){
return (function (this$,p__65178){
var map__65179 = p__65178;
var map__65179__$1 = (((((!((map__65179 == null))))?(((((map__65179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65179):map__65179);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x65177_65755))
;

x65177_65755.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65177_65755.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65177_65755){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65177_65755))
;

x65177_65755.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65177_65755.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65177_65755){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x65177_65755))
;


var x65181_65756 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x65181_65756.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65181_65756.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65181_65756){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x65181_65756))
;

x65181_65756.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65181_65756){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65181_65756))
;

x65181_65756.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65181_65756.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65181_65756){
return (function (this$,p__65182){
var map__65183 = p__65182;
var map__65183__$1 = (((((!((map__65183 == null))))?(((((map__65183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65183):map__65183);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65183__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65183__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x65181_65756))
;

x65181_65756.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65181_65756.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65181_65756){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65181_65756))
;

x65181_65756.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65181_65756.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65181_65756){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x65181_65756))
;


com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MutationView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.MutationView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.mutation_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
com.wsscode.pathom.viz.index_explorer.realize_references = (function com$wsscode$pathom$viz$index_explorer$realize_references(state,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__65185_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__65185_SHARP_);
}),coll);
});
com.wsscode.pathom.viz.index_explorer.max_search_results = (100);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-index-item","com.wsscode.pathom.viz.index-explorer/search-index-item",-560879594),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65186){
return cljs.core.map_QMARK_(G__65186);
}),(function (G__65186){
return cljs.core.contains_QMARK_(G__65186,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
}),(function (G__65186){
return cljs.core.contains_QMARK_(G__65186,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
}),(function (G__65186){
return cljs.core.contains_QMARK_(G__65186,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
})], null),(function (G__65186){
return ((cljs.core.map_QMARK_(G__65186)) && (cljs.core.contains_QMARK_(G__65186,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))) && (cljs.core.contains_QMARK_(G__65186,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))) && (cljs.core.contains_QMARK_(G__65186,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)])));
com.wsscode.pathom.viz.index_explorer.active_search_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$active_search_QMARK_(text){
return (cljs.core.count(text) > (2));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),(function (fulcro_incoming_env,_,p__65187){
var map__65188 = p__65187;
var map__65188__$1 = (((((!((map__65188 == null))))?(((((map__65188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65188):map__65188);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65190 = fulcro_incoming_env;
var map__65190__$1 = (((((!((map__65190 == null))))?(((((map__65190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65190):map__65190);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65190__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65190__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65190,map__65190__$1,ref,state,map__65188,map__65188__$1,text){
return (function (){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935)));
var fuzzy_res = ((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),items,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),text], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.SearchEverything,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.max_search_results,fuzzy_res))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),text], 0));
});})(map__65190,map__65190__$1,ref,state,map__65188,map__65188__$1,text))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.remove_not_found = (function com$wsscode$pathom$viz$index_explorer$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__65192){
var vec__65193 = p__65192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65193,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65193,(1),null);
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

var x65198_65757 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
x65198_65757.render = ((function (x65198_65757){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65199 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65200 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65201 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65202 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65203 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65204 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65205 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65206 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65207 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65208 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65204;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65205;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65206;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65207;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65208;

try{var map__65209 = fulcro.client.primitives.props(this$);
var map__65209__$1 = (((((!((map__65209 == null))))?(((((map__65209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65209):map__65209);
var props = map__65209__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65209__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__65211 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Attributes");
var G__65212 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__65211,map__65209,map__65209__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__65199,_STAR_depth_STAR__orig_val__65200,_STAR_shared_STAR__orig_val__65201,_STAR_instrument_STAR__orig_val__65202,_STAR_parent_STAR__orig_val__65203,_STAR_reconciler_STAR__temp_val__65204,_STAR_depth_STAR__temp_val__65205,_STAR_shared_STAR__temp_val__65206,_STAR_instrument_STAR__temp_val__65207,_STAR_parent_STAR__temp_val__65208,this$,this__50885__auto__,x65198_65757){
return (function (p__65213){
var map__65214 = p__65213;
var map__65214__$1 = (((((!((map__65214 == null))))?(((((map__65214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65214):map__65214);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65214__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], null),computed);
});})(G__65211,map__65209,map__65209__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__65199,_STAR_depth_STAR__orig_val__65200,_STAR_shared_STAR__orig_val__65201,_STAR_instrument_STAR__orig_val__65202,_STAR_parent_STAR__orig_val__65203,_STAR_reconciler_STAR__temp_val__65204,_STAR_depth_STAR__temp_val__65205,_STAR_shared_STAR__temp_val__65206,_STAR_instrument_STAR__temp_val__65207,_STAR_parent_STAR__temp_val__65208,this$,this__50885__auto__,x65198_65757))
)),attributes)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__65211,G__65212) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__65211,G__65212));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65203;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65202;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65201;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65200;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65199;
}});})(x65198_65757))
;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllAttributesList;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.fulcro$isComponent = true;

var x65216_65758 = com.wsscode.pathom.viz.index_explorer.AllAttributesList;


var x65217_65759 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;


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

var x65221_65760 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
x65221_65760.render = ((function (x65221_65760){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65222 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65223 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65224 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65225 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65226 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65227 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65228 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65229 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65230 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65231 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65227;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65228;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65229;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65230;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65231;

try{var map__65232 = fulcro.client.primitives.props(this$);
var map__65232__$1 = (((((!((map__65232 == null))))?(((((map__65232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65232):map__65232);
var props = map__65232__$1;
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65232__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__65234 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Resolvers");
var G__65235 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__65234,map__65232,map__65232__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__65222,_STAR_depth_STAR__orig_val__65223,_STAR_shared_STAR__orig_val__65224,_STAR_instrument_STAR__orig_val__65225,_STAR_parent_STAR__orig_val__65226,_STAR_reconciler_STAR__temp_val__65227,_STAR_depth_STAR__temp_val__65228,_STAR_shared_STAR__temp_val__65229,_STAR_instrument_STAR__temp_val__65230,_STAR_parent_STAR__temp_val__65231,this$,this__50885__auto__,x65221_65760){
return (function (p1__65218_SHARP_){
return com.wsscode.pathom.viz.index_explorer.resolver_link(p1__65218_SHARP_,computed);
});})(G__65234,map__65232,map__65232__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__65222,_STAR_depth_STAR__orig_val__65223,_STAR_shared_STAR__orig_val__65224,_STAR_instrument_STAR__orig_val__65225,_STAR_parent_STAR__orig_val__65226,_STAR_reconciler_STAR__temp_val__65227,_STAR_depth_STAR__temp_val__65228,_STAR_shared_STAR__temp_val__65229,_STAR_instrument_STAR__temp_val__65230,_STAR_parent_STAR__temp_val__65231,this$,this__50885__auto__,x65221_65760))
,resolvers)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__65234,G__65235) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__65234,G__65235));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65226;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65225;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65224;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65223;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65222;
}});})(x65221_65760))
;


com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllResolversList;

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.fulcro$isComponent = true;

var x65236_65761 = com.wsscode.pathom.viz.index_explorer.AllResolversList;


var x65237_65762 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;


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

var x65241_65763 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
x65241_65763.render = ((function (x65241_65763){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65242 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65243 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65244 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65245 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65246 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65247 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65248 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65249 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65250 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65251 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65247;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65248;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65249;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65250;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65251;

try{var map__65252 = fulcro.client.primitives.props(this$);
var map__65252__$1 = (((((!((map__65252 == null))))?(((((map__65252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65252):map__65252);
var props = map__65252__$1;
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65252__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__65254 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Mutations");
var G__65255 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__65254,map__65252,map__65252__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__65242,_STAR_depth_STAR__orig_val__65243,_STAR_shared_STAR__orig_val__65244,_STAR_instrument_STAR__orig_val__65245,_STAR_parent_STAR__orig_val__65246,_STAR_reconciler_STAR__temp_val__65247,_STAR_depth_STAR__temp_val__65248,_STAR_shared_STAR__temp_val__65249,_STAR_instrument_STAR__temp_val__65250,_STAR_parent_STAR__temp_val__65251,this$,this__50885__auto__,x65241_65763){
return (function (p1__65238_SHARP_){
return com.wsscode.pathom.viz.index_explorer.mutation_link(p1__65238_SHARP_,computed);
});})(G__65254,map__65252,map__65252__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__65242,_STAR_depth_STAR__orig_val__65243,_STAR_shared_STAR__orig_val__65244,_STAR_instrument_STAR__orig_val__65245,_STAR_parent_STAR__orig_val__65246,_STAR_reconciler_STAR__temp_val__65247,_STAR_depth_STAR__temp_val__65248,_STAR_shared_STAR__temp_val__65249,_STAR_instrument_STAR__temp_val__65250,_STAR_parent_STAR__temp_val__65251,this$,this__50885__auto__,x65241_65763))
,mutations)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__65254,G__65255) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__65254,G__65255));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65246;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65245;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65244;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65243;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65242;
}});})(x65241_65763))
;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllMutationsList;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.fulcro$isComponent = true;

var x65256_65764 = com.wsscode.pathom.viz.index_explorer.AllMutationsList;


var x65257_65765 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;


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

var x65261_65766 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x65261_65766.render = ((function (x65261_65766){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65262 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65263 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65264 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65265 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65266 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65267 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65268 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65269 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65270 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65271 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65267;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65268;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65269;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65270;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65271;

try{var map__65272 = fulcro.client.primitives.props(this$);
var map__65272__$1 = (((((!((map__65272 == null))))?(((((map__65272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65272):map__65272);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var collapse_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
var collapse_resolvers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
var collapse_mutations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__65274 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__65275 = (function (){var G__65277 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","left-icon","com.wsscode.pathom.viz.ui.kit/left-icon",-1594855964),new cljs.core.Keyword(null,"$fa-search","$fa-search",1999917289),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-clear","com.wsscode.pathom.viz.ui.kit/on-clear",-221492596),((function (G__65274,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"");
});})(G__65274,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766))
], null);
return (com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1(G__65277) : com.wsscode.pathom.viz.ui.kit.text_field.call(null,G__65277));
})();
var G__65276 = (function (){var G__65278 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0));
var G__65279 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((!(com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))))?"none":null)], null)], null),((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766){
return (function (p__65281){
var map__65282 = p__65281;
var map__65282__$1 = (((((!((map__65282 == null))))?(((((map__65282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65282):map__65282);
var search_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65282__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
var search_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65282__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
var match_hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65282__$1,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739));
var G__65284 = search_type;
var G__65284__$1 = (((G__65284 instanceof cljs.core.Keyword))?G__65284.fqn:null);
switch (G__65284__$1) {
case "com.wsscode.pathom.viz.index-explorer/search-type-attribute":
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__65284,G__65284__$1,map__65282,map__65282__$1,search_value,search_type,match_hl,G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__65284,G__65284__$1,map__65282,map__65282__$1,search_value,search_type,match_hl,G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-resolver":
return com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__65284,G__65284__$1,map__65282,map__65282__$1,search_value,search_type,match_hl,G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__65284,G__65284__$1,map__65282,map__65282__$1,search_value,search_type,match_hl,G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-mutation":
return com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__65284,G__65284__$1,map__65282,map__65282__$1,search_value,search_type,match_hl,G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__65284,G__65284__$1,map__65282,map__65282__$1,search_value,search_type,match_hl,G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766))
], null),computed);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65284__$1)].join('')));

}
});})(G__65278,G__65274,G__65275,map__65272,map__65272__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__65262,_STAR_depth_STAR__orig_val__65263,_STAR_shared_STAR__orig_val__65264,_STAR_instrument_STAR__orig_val__65265,_STAR_parent_STAR__orig_val__65266,_STAR_reconciler_STAR__temp_val__65267,_STAR_depth_STAR__temp_val__65268,_STAR_shared_STAR__temp_val__65269,_STAR_instrument_STAR__temp_val__65270,_STAR_parent_STAR__temp_val__65271,this$,this__50885__auto__,x65261_65766))
)),search_results):null)], 0));
var G__65280 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((cljs.core.count(text) > (2)))?"none":null)], null)], null),(function (){var G__65285 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_attributes_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782))], null);
var G__65286 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2(G__65285,G__65286) : com.wsscode.pathom.viz.index_explorer.all_attributes_list.call(null,G__65285,G__65286));
})(),(function (){var G__65287 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_resolvers_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560))], null);
var G__65288 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2(G__65287,G__65288) : com.wsscode.pathom.viz.index_explorer.all_resolvers_list.call(null,G__65287,G__65288));
})(),(function (){var G__65289 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),mutations,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_mutations_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814))], null);
var G__65290 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2(G__65289,G__65290) : com.wsscode.pathom.viz.index_explorer.all_mutations_list.call(null,G__65289,G__65290));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__65278,G__65279,G__65280) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65278,G__65279,G__65280));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__65274,G__65275,G__65276) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65274,G__65275,G__65276));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65266;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65265;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65264;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65263;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65262;
}});})(x65261_65766))
;

x65261_65766.initLocalState = ((function (x65261_65766){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),((function (this$,x65261_65766){
return (function (p1__65258_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.viz.helpers.target_value(p1__65258_SHARP_),null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x65261_65766))
,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782),((function (this$,x65261_65766){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
});})(this$,x65261_65766))
,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560),((function (this$,x65261_65766){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
});})(this$,x65261_65766))
,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814),((function (this$,x65261_65766){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
});})(this$,x65261_65766))
,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),(function (){var props = fulcro.client.primitives.props(this$);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (props,computed,this$,x65261_65766){
return (function (p__65291){
var map__65292 = p__65291;
var map__65292__$1 = (((((!((map__65292 == null))))?(((((map__65292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65292):map__65292);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65292__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed);
});})(props,computed,this$,x65261_65766))
)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281).cljs$core$IFn$_invoke$arity$1(props))], 0));
})()], null);
var obj65295 = ({"fulcro$state":ret__50860__auto__});
return obj65295;
});})(x65261_65766))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor = com.wsscode.pathom.viz.index_explorer.SearchEverything;

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.fulcro$isComponent = true;

var x65296_65768 = com.wsscode.pathom.viz.index_explorer.SearchEverything;
x65296_65768.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65296_65768.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65296_65768){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x65296_65768))
;

x65296_65768.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65296_65768){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65296_65768))
;

x65296_65768.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65296_65768.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65296_65768){
return (function (this$,p__65297){
var map__65298 = p__65297;
var map__65298__$1 = (((((!((map__65298 == null))))?(((((map__65298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65298):map__65298);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x65296_65768))
;

x65296_65768.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65296_65768.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65296_65768){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65296_65768))
;

x65296_65768.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65296_65768.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65296_65768){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x65296_65768))
;


var x65300_65769 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x65300_65769.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65300_65769.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65300_65769){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x65300_65769))
;

x65300_65769.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65300_65769){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65300_65769))
;

x65300_65769.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65300_65769.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65300_65769){
return (function (this$,p__65301){
var map__65302 = p__65301;
var map__65302__$1 = (((((!((map__65302 == null))))?(((((map__65302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65302):map__65302);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x65300_65769))
;

x65300_65769.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65300_65769.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65300_65769){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65300_65769))
;

x65300_65769.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65300_65769.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65300_65769){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x65300_65769))
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

var x65306_65770 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x65306_65770.render = ((function (x65306_65770){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65307 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65308 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65309 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65310 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65311 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65312 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65313 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65314 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65315 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65316 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65312;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65313;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65314;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65315;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65316;

try{var map__65317 = fulcro.client.primitives.props(this$);
var map__65317__$1 = (((((!((map__65317 == null))))?(((((map__65317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65317):map__65317);
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var attr_mismatch_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__65319 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Attributes with type mismatch"], null);
var G__65320 = (function (){var iter__4523__auto__ = ((function (G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function com$wsscode$pathom$viz$index_explorer$iter__65321(s__65322){
return (new cljs.core.LazySeq(null,((function (G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function (){
var s__65322__$1 = s__65322;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65322__$1);
if(temp__5720__auto__){
var s__65322__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65322__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65322__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65324 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65323 = (0);
while(true){
if((i__65323 < size__4522__auto__)){
var map__65325 = cljs.core._nth(c__4521__auto__,i__65323);
var map__65325__$1 = (((((!((map__65325 == null))))?(((((map__65325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65325):map__65325);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
cljs.core.chunk_append(b__65324,(function (){var G__65327 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (i__65323,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(i__65323,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__65328 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65329(s__65330){
return (new cljs.core.LazySeq(null,((function (i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function (){
var s__65330__$1 = s__65330;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__65330__$1);
if(temp__5720__auto____$1){
var s__65330__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65330__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__65330__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__65332 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__65331 = (0);
while(true){
if((i__65331 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__65331);
cljs.core.chunk_append(b__65332,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__65771 = (i__65331 + (1));
i__65331 = G__65771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65332),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65329(cljs.core.chunk_rest(s__65330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65332),null);
}
} else {
var resolver = cljs.core.first(s__65330__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65329(cljs.core.rest(s__65330__$2)));
}
} else {
return null;
}
break;
}
});})(i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
,null,null));
});})(i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65333(s__65334){
return (new cljs.core.LazySeq(null,((function (i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function (){
var s__65334__$1 = s__65334;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__65334__$1);
if(temp__5720__auto____$1){
var s__65334__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65334__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__65334__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__65336 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__65335 = (0);
while(true){
if((i__65335 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__65335);
cljs.core.chunk_append(b__65336,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__65772 = (i__65335 + (1));
i__65335 = G__65772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65336),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65333(cljs.core.chunk_rest(s__65334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65336),null);
}
} else {
var resolver = cljs.core.first(s__65334__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65333(cljs.core.rest(s__65334__$2)));
}
} else {
return null;
}
break;
}
});})(i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
,null,null));
});})(i__65323,G__65327,map__65325,map__65325__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__65324,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__65327,G__65328) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__65327,G__65328));
})());

var G__65773 = (i__65323 + (1));
i__65323 = G__65773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65324),com$wsscode$pathom$viz$index_explorer$iter__65321(cljs.core.chunk_rest(s__65322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65324),null);
}
} else {
var map__65337 = cljs.core.first(s__65322__$2);
var map__65337__$1 = (((((!((map__65337 == null))))?(((((map__65337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65337):map__65337);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65337__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65337__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65337__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
return cljs.core.cons((function (){var G__65339 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__65340 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65341(s__65342){
return (new cljs.core.LazySeq(null,((function (G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function (){
var s__65342__$1 = s__65342;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__65342__$1);
if(temp__5720__auto____$1){
var s__65342__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65342__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65342__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65344 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65343 = (0);
while(true){
if((i__65343 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__65343);
cljs.core.chunk_append(b__65344,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__65774 = (i__65343 + (1));
i__65343 = G__65774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65344),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65341(cljs.core.chunk_rest(s__65342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65344),null);
}
} else {
var resolver = cljs.core.first(s__65342__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65341(cljs.core.rest(s__65342__$2)));
}
} else {
return null;
}
break;
}
});})(G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
,null,null));
});})(G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65345(s__65346){
return (new cljs.core.LazySeq(null,((function (G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770){
return (function (){
var s__65346__$1 = s__65346;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__65346__$1);
if(temp__5720__auto____$1){
var s__65346__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65346__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65346__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65348 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65347 = (0);
while(true){
if((i__65347 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__65347);
cljs.core.chunk_append(b__65348,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__65775 = (i__65347 + (1));
i__65347 = G__65775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65348),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65345(cljs.core.chunk_rest(s__65346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65348),null);
}
} else {
var resolver = cljs.core.first(s__65346__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__65321_$_iter__65345(cljs.core.rest(s__65346__$2)));
}
} else {
return null;
}
break;
}
});})(G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
,null,null));
});})(G__65339,map__65337,map__65337__$1,attribute,attr_leaf_in,attr_branch_in,s__65322__$2,temp__5720__auto__,G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__65339,G__65340) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__65339,G__65340));
})(),com$wsscode$pathom$viz$index_explorer$iter__65321(cljs.core.rest(s__65322__$2)));
}
} else {
return null;
}
break;
}
});})(G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
,null,null));
});})(G__65319,map__65317,map__65317__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__65307,_STAR_depth_STAR__orig_val__65308,_STAR_shared_STAR__orig_val__65309,_STAR_instrument_STAR__orig_val__65310,_STAR_parent_STAR__orig_val__65311,_STAR_reconciler_STAR__temp_val__65312,_STAR_depth_STAR__temp_val__65313,_STAR_shared_STAR__temp_val__65314,_STAR_instrument_STAR__temp_val__65315,_STAR_parent_STAR__temp_val__65316,this$,this__50885__auto__,x65306_65770))
;
return iter__4523__auto__(attr_type_mismatch);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65319,G__65320) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65319,G__65320));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65311;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65310;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65309;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65308;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65307;
}});})(x65306_65770))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.fulcro$isComponent = true;

var x65349_65776 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;
x65349_65776.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65349_65776.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65349_65776){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x65349_65776))
;

x65349_65776.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65349_65776){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65349_65776))
;

x65349_65776.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65349_65776.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65349_65776){
return (function (this$,p__65350){
var map__65351 = p__65350;
var map__65351__$1 = (((((!((map__65351 == null))))?(((((map__65351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65351):map__65351);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65351__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65351__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x65349_65776))
;

x65349_65776.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65349_65776.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65349_65776){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65349_65776))
;

x65349_65776.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65349_65776.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65349_65776){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x65349_65776))
;


var x65353_65777 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x65353_65777.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65353_65777.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65353_65777){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x65353_65777))
;

x65353_65777.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65353_65777){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65353_65777))
;

x65353_65777.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65353_65777.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65353_65777){
return (function (this$,p__65354){
var map__65355 = p__65354;
var map__65355__$1 = (((((!((map__65355 == null))))?(((((map__65355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65355):map__65355);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65355__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65355__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x65353_65777))
;

x65353_65777.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65353_65777.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65353_65777){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65353_65777))
;

x65353_65777.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65353_65777.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65353_65777){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x65353_65777))
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

var x65359_65778 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x65359_65778.render = ((function (x65359_65778){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65360 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65361 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65362 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65363 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65364 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65365 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65366 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65367 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65368 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65369 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65365;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65366;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65367;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65368;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65369;

try{var map__65370 = fulcro.client.primitives.props(this$);
var map__65370__$1 = (((((!((map__65370 == null))))?(((((map__65370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65370):map__65370);
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957));
var mutation_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737));
var top_connection_hubs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657));
var attr_type_mismatch_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640));
var idents_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333));
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var resolver_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099));
var globals_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019));
var attr_edges_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0)),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Stats"], 0)),(function (){var G__65372 = cljs.core.PersistentArrayMap.EMPTY;
var G__65373 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__65375 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Counters"], null);
var G__65376 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attribute count: ",attribute_count], 0));
var G__65377 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resolver count: ",resolver_count], 0));
var G__65378 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation count: ",mutation_count], 0));
var G__65379 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Globals count: ",globals_count], 0));
var G__65380 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Idents count: ",idents_count], 0));
var G__65381 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edges count: ",attr_edges_count], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7(G__65375,G__65376,G__65377,G__65378,G__65379,G__65380,G__65381) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65375,G__65376,G__65377,G__65378,G__65379,G__65380,G__65381));
})(),(function (){var G__65382 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Most Connected Attributes"], null);
var G__65383 = (function (){var iter__4523__auto__ = ((function (G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778){
return (function com$wsscode$pathom$viz$index_explorer$iter__65384(s__65385){
return (new cljs.core.LazySeq(null,((function (G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778){
return (function (){
var s__65385__$1 = s__65385;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65385__$1);
if(temp__5720__auto__){
var s__65385__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65385__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65385__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65387 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65386 = (0);
while(true){
if((i__65386 < size__4522__auto__)){
var map__65388 = cljs.core._nth(c__4521__auto__,i__65386);
var map__65388__$1 = (((((!((map__65388 == null))))?(((((map__65388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65388):map__65388);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65388__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65388__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
cljs.core.chunk_append(b__65387,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__65386,map__65388,map__65388__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__65387,s__65385__$2,temp__5720__auto__,G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(i__65386,map__65388,map__65388__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__65387,s__65385__$2,temp__5720__auto__,G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778))
], null),computed));

var G__65779 = (i__65386 + (1));
i__65386 = G__65779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65387),com$wsscode$pathom$viz$index_explorer$iter__65384(cljs.core.chunk_rest(s__65385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65387),null);
}
} else {
var map__65390 = cljs.core.first(s__65385__$2);
var map__65390__$1 = (((((!((map__65390 == null))))?(((((map__65390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65390):map__65390);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65390__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65390__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (map__65390,map__65390__$1,attribute,attr_edges_count__$1,s__65385__$2,temp__5720__auto__,G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(map__65390,map__65390__$1,attribute,attr_edges_count__$1,s__65385__$2,temp__5720__auto__,G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778))
], null),computed),com$wsscode$pathom$viz$index_explorer$iter__65384(cljs.core.rest(s__65385__$2)));
}
} else {
return null;
}
break;
}
});})(G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778))
,null,null));
});})(G__65382,G__65372,map__65370,map__65370__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__65360,_STAR_depth_STAR__orig_val__65361,_STAR_shared_STAR__orig_val__65362,_STAR_instrument_STAR__orig_val__65363,_STAR_parent_STAR__orig_val__65364,_STAR_reconciler_STAR__temp_val__65365,_STAR_depth_STAR__temp_val__65366,_STAR_shared_STAR__temp_val__65367,_STAR_instrument_STAR__temp_val__65368,_STAR_parent_STAR__temp_val__65369,this$,this__50885__auto__,x65359_65778))
;
return iter__4523__auto__(top_connection_hubs);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__65382,G__65383) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__65382,G__65383));
})()], 0));
var G__65374 = ((cljs.core.seq(attr_type_mismatch))?fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2(attr_type_mismatch_join,computed) : com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.call(null,attr_type_mismatch_join,computed))], 0))], 0)):null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__65372,G__65373,G__65374) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__65372,G__65373,G__65374));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65364;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65363;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65362;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65361;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65360;
}});})(x65359_65778))
;


com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.StatsView;

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.fulcro$isComponent = true;

var x65392_65780 = com.wsscode.pathom.viz.index_explorer.StatsView;
x65392_65780.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65392_65780.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65392_65780){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x65392_65780))
;

x65392_65780.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65392_65780){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65392_65780))
;

x65392_65780.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65392_65780.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65392_65780){
return (function (this$,p__65393){
var map__65394 = p__65393;
var map__65394__$1 = (((((!((map__65394 == null))))?(((((map__65394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65394):map__65394);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x65392_65780))
;

x65392_65780.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65392_65780.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65392_65780){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65392_65780))
;

x65392_65780.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65392_65780.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65392_65780){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x65392_65780))
;


var x65396_65781 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x65396_65781.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65396_65781.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65396_65781){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x65396_65781))
;

x65396_65781.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65396_65781){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65396_65781))
;

x65396_65781.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65396_65781.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65396_65781){
return (function (this$,p__65397){
var map__65398 = p__65397;
var map__65398__$1 = (((((!((map__65398 == null))))?(((((map__65398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65398):map__65398);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x65396_65781))
;

x65396_65781.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65396_65781.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65396_65781){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65396_65781))
;

x65396_65781.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65396_65781.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65396_65781){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x65396_65781))
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

var x65403_65782 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x65403_65782.render = ((function (x65403_65782){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65404 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65405 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65406 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65407 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65408 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65409 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65410 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65411 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65412 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65413 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65409;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65410;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65411;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65412;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65413;

try{var _ = fulcro.client.primitives.props(this$);
var map__65414 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__65414__$1 = (((((!((map__65414 == null))))?(((((map__65414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65414):map__65414);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65414__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65414__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65414__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__65416 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944)], 0))], null);
var G__65417 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Full Graph"], 0));
var G__65418 = (function (){var G__65419 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),((function (G__65416,G__65417,_,map__65414,map__65414__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__65404,_STAR_depth_STAR__orig_val__65405,_STAR_shared_STAR__orig_val__65406,_STAR_instrument_STAR__orig_val__65407,_STAR_parent_STAR__orig_val__65408,_STAR_reconciler_STAR__temp_val__65409,_STAR_depth_STAR__temp_val__65410,_STAR_shared_STAR__temp_val__65411,_STAR_instrument_STAR__temp_val__65412,_STAR_parent_STAR__temp_val__65413,this$,this__50885__auto__,x65403_65782){
return (function (p1__65400_SHARP_){
var G__65420 = cljs.core.first(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669).cljs$core$IFn$_invoke$arity$1(p1__65400_SHARP_));
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__65420) : on_select_resolver.call(null,G__65420));
});})(G__65416,G__65417,_,map__65414,map__65414__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__65404,_STAR_depth_STAR__orig_val__65405,_STAR_shared_STAR__orig_val__65406,_STAR_instrument_STAR__orig_val__65407,_STAR_parent_STAR__orig_val__65408,_STAR_reconciler_STAR__temp_val__65409,_STAR_depth_STAR__temp_val__65410,_STAR_shared_STAR__temp_val__65411,_STAR_instrument_STAR__temp_val__65412,_STAR_parent_STAR__temp_val__65413,this$,this__50885__auto__,x65403_65782))
], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__65419) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__65419));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__65416,G__65417,G__65418) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65416,G__65417,G__65418));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65408;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65407;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65406;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65405;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65404;
}});})(x65403_65782))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.FullGraphView;

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.fulcro$isComponent = true;

var x65421_65783 = com.wsscode.pathom.viz.index_explorer.FullGraphView;
x65421_65783.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65421_65783.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65421_65783){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x65421_65783))
;

x65421_65783.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65421_65783){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65421_65783))
;

x65421_65783.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65421_65783.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65421_65783){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65421_65783))
;

x65421_65783.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65421_65783.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65421_65783){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x65421_65783))
;


var x65422_65784 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x65422_65784.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65422_65784.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65422_65784){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x65422_65784))
;

x65422_65784.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65422_65784){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x65422_65784))
;

x65422_65784.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65422_65784.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65422_65784){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65422_65784))
;

x65422_65784.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65422_65784.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65422_65784){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x65422_65784))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/FullGraphView");
});
com.wsscode.pathom.viz.index_explorer.full_graph_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView);
com.wsscode.pathom.viz.index_explorer.prop_presence_ident = (function com$wsscode$pathom$viz$index_explorer$prop_presence_ident(props){
return (function (data){
var or__4131__auto__ = cljs.core.some((function (p1__65423_SHARP_){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__65423_SHARP_);
if((temp__5722__auto__ == null)){
return null;
} else {
var val = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65423_SHARP_,val], null);
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

var x65426_65785 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x65426_65785.render = ((function (x65426_65785){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65427 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65428 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65429 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65430 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65431 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65432 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65433 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65434 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65435 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65436 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65432;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65433;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65434;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65435;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65436;

try{var props = fulcro.client.primitives.props(this$);
var G__65437 = cljs.core.first(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__65437__$1 = (((G__65437 instanceof cljs.core.Keyword))?G__65437.fqn:null);
switch (G__65437__$1) {
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
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65431;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65430;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65429;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65428;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65427;
}});})(x65426_65785))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MainViewUnion;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.fulcro$isComponent = true;

var x65438_65787 = com.wsscode.pathom.viz.index_explorer.MainViewUnion;
x65438_65787.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65438_65787.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65438_65787){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x65438_65787))
;

x65438_65787.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65438_65787.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65438_65787){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x65438_65787))
;


var x65439_65788 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x65439_65788.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65439_65788.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65439_65788){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x65439_65788))
;

x65439_65788.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65439_65788.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65439_65788){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x65439_65788))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MainViewUnion");
});
com.wsscode.pathom.viz.index_explorer.main_view_union = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MainViewUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__65440_SHARP_){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__65440_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__65440_SHARP_);
}
})], null));
com.wsscode.pathom.viz.index_explorer.augment = (function com$wsscode$pathom$viz$index_explorer$augment(data,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], 0));
});
com.wsscode.pathom.viz.index_explorer.compute_stats = (function com$wsscode$pathom$viz$index_explorer$compute_stats(p__65444){
var map__65445 = p__65444;
var map__65445__$1 = (((((!((map__65445 == null))))?(((((map__65445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65445):map__65445);
var data = map__65445__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var globals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),cljs.core.count(attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),cljs.core.count(resolvers),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),cljs.core.count(mutations),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),cljs.core.count(globals),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),cljs.core.count(idents),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)),cljs.core._PLUS_,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),cljs.core.filterv(((function (map__65445,map__65445__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__65441_SHARP_){
return ((cljs.core.contains_QMARK_(p1__65441_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711))) && (cljs.core.contains_QMARK_(p1__65441_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732))));
});})(map__65445,map__65445__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((30),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),((function (map__65445,map__65445__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__65443_SHARP_,p2__65442_SHARP_){
return cljs.core.compare(p2__65442_SHARP_,p1__65443_SHARP_);
});})(map__65445,map__65445__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes)))], null);
});
com.wsscode.pathom.viz.index_explorer.build_search_vector = (function com$wsscode$pathom$viz$index_explorer$build_search_vector(p__65450){
var map__65451 = p__65450;
var map__65451__$1 = (((((!((map__65451 == null))))?(((((map__65451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65451):map__65451);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65451__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65451__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65451__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__65451,map__65451__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__65447_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__65447_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__65447_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676)]);
});})(map__65451,map__65451__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__65451,map__65451__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__65448_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__65448_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__65448_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744)]);
});})(map__65451,map__65451__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__65451,map__65451__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__65449_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__65449_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__65449_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524)]);
});})(map__65451,map__65451__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_attributes)))], 0)));
});
com.wsscode.pathom.viz.index_explorer.process_index = (function com$wsscode$pathom$viz$index_explorer$process_index(p__65455){
var map__65456 = p__65455;
var map__65456__$1 = (((((!((map__65456 == null))))?(((((map__65456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65456):map__65456);
var index = map__65456__$1;
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65456__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65456__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65456__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65456__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
var attrs = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__65456,map__65456__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p__65458){
var vec__65459 = p__65458;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65459,(0),null);
var map__65462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65459,(1),null);
var map__65462__$1 = (((((!((map__65462 == null))))?(((((map__65462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65462):map__65462);
var data = map__65462__$1;
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65462__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65462__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),cljs.core.count(attr_provides),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),cljs.core.count(attr_reach_via),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_reach_via)) + cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_provides))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),cljs.core.contains_QMARK_(attr_reach_via,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),cljs.core.contains_QMARK_(idents,attr)], 0));
});})(map__65456,map__65456__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,index_attributes)));
return com.wsscode.pathom.viz.index_explorer.augment(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935),com.wsscode.pathom.viz.index_explorer.build_search_vector(index),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__65456,map__65456__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__65453_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__65453_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver?","com.wsscode.pathom.viz.index-explorer/resolver?",167854159),true);
});})(attrs,map__65456,map__65456__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers)))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__65456,map__65456__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__65454_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__65454_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation?","com.wsscode.pathom.viz.index-explorer/mutation?",1568382673),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__65454_SHARP_)], 0));
});})(attrs,map__65456,map__65456__$1,index,index_resolvers,idents,index_attributes,index_mutations))
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

var x65466_65789 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x65466_65789.render = ((function (x65466_65789){
return (function (){
var this__50885__auto__ = this;
var _ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65467 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65468 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65469 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65470 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65471 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65472 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65473 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65474 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65475 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65476 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65472;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65473;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65474;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65475;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65476;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65471;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65470;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65469;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65468;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65467;
}});})(x65466_65789))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeIndex;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.fulcro$isComponent = true;

var x65477_65790 = com.wsscode.pathom.viz.index_explorer.AttributeIndex;
x65477_65790.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65477_65790.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65477_65790){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65477_65790))
;

x65477_65790.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65477_65790.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65477_65790){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x65477_65790))
;


var x65478_65791 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x65478_65791.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65478_65791.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65478_65791){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65478_65791))
;

x65478_65791.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65478_65791.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65478_65791){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x65478_65791))
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

var x65481_65792 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x65481_65792.render = ((function (x65481_65792){
return (function (){
var this__50885__auto__ = this;
var _ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65482 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65483 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65484 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65485 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65486 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65487 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65488 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65489 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65490 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65491 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65487;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65488;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65489;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65490;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65491;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65486;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65485;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65484;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65483;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65482;
}});})(x65481_65792))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverIndex;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.fulcro$isComponent = true;

var x65492_65793 = com.wsscode.pathom.viz.index_explorer.ResolverIndex;
x65492_65793.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65492_65793.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65492_65793){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65492_65793))
;

x65492_65793.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65492_65793.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65492_65793){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x65492_65793))
;


var x65493_65794 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x65493_65794.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65493_65794.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65493_65794){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65493_65794))
;

x65493_65794.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65493_65794.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65493_65794){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x65493_65794))
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

var x65496_65795 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x65496_65795.render = ((function (x65496_65795){
return (function (){
var this__50885__auto__ = this;
var _ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65497 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65498 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65499 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65500 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65501 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65502 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65503 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65504 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65505 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65506 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65502;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65503;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65504;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65505;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65506;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65501;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65500;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65499;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65498;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65497;
}});})(x65496_65795))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationIndex;

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.fulcro$isComponent = true;

var x65507_65796 = com.wsscode.pathom.viz.index_explorer.MutationIndex;
x65507_65796.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65507_65796.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65507_65796){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65507_65796))
;

x65507_65796.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65507_65796.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65507_65796){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x65507_65796))
;


var x65508_65797 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x65508_65797.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65508_65797.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65508_65797){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65508_65797))
;

x65508_65797.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65508_65797.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65508_65797){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x65508_65797))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/MutationIndex");
});
com.wsscode.pathom.viz.index_explorer.history_size_limit = (200);
com.wsscode.pathom.viz.index_explorer.history_append = (function com$wsscode$pathom$viz$index_explorer$history_append(p__65509,ref){
var map__65510 = p__65509;
var map__65510__$1 = (((((!((map__65510 == null))))?(((((map__65510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65510):map__65510);
var x = map__65510__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
var index = (history_index + (1));
var history_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,com.wsscode.pathom.viz.index_explorer.history_size_limit))?(1):(0)),index),ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),history_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(cljs.core.count(history_SINGLEQUOTE_) - (1)),new cljs.core.Keyword("ui","page","ui/page",849066625),ref], 0));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),(function (fulcro_incoming_env,_,p__65512){
var map__65513 = p__65512;
var map__65513__$1 = (((((!((map__65513 == null))))?(((((map__65513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65513):map__65513);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65513__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65515 = fulcro_incoming_env;
var map__65515__$1 = (((((!((map__65515 == null))))?(((((map__65515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65515):map__65515);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65515__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65515__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65515,map__65515__$1,state,ref,map__65513,map__65513__$1,attribute){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null)], 0));
});})(map__65515,map__65515__$1,state,ref,map__65513,map__65513__$1,attribute))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),(function (fulcro_incoming_env,_,p__65517){
var map__65518 = p__65517;
var map__65518__$1 = (((((!((map__65518 == null))))?(((((map__65518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65518):map__65518);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65518__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65520 = fulcro_incoming_env;
var map__65520__$1 = (((((!((map__65520 == null))))?(((((map__65520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65520):map__65520);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65520,map__65520__$1,state,ref,map__65518,map__65518__$1,sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null)], 0));
});})(map__65520,map__65520__$1,state,ref,map__65518,map__65518__$1,sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),(function (fulcro_incoming_env,_,p__65522){
var map__65523 = p__65522;
var map__65523__$1 = (((((!((map__65523 == null))))?(((((map__65523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65523):map__65523);
var mutation_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65523__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65525 = fulcro_incoming_env;
var map__65525__$1 = (((((!((map__65525 == null))))?(((((map__65525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65525):map__65525);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65525__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65525__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65525,map__65525__$1,state,ref,map__65523,map__65523__$1,mutation_sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null)], 0));
});})(map__65525,map__65525__$1,state,ref,map__65523,map__65523__$1,mutation_sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65527 = fulcro_incoming_env;
var map__65527__$1 = (((((!((map__65527 == null))))?(((((map__65527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65527):map__65527);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65527__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65527__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65527,map__65527__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0));
});})(map__65527,map__65527__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65529 = fulcro_incoming_env;
var map__65529__$1 = (((((!((map__65529 == null))))?(((((map__65529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65529):map__65529);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65529,map__65529__$1,state,ref){
return (function (){
var id = cljs.core.second(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.FullGraphView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null)], 0));
});})(map__65529,map__65529__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_back_QMARK_(p__65531){
var map__65532 = p__65531;
var map__65532__$1 = (((((!((map__65532 == null))))?(((((map__65532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65532):map__65532);
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65532__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index > (0));
});
com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_forward_QMARK_(p__65534){
var map__65535 = p__65534;
var map__65535__$1 = (((((!((map__65535 == null))))?(((((map__65535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65535):map__65535);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index < (cljs.core.count(history) - (1)));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65537 = fulcro_incoming_env;
var map__65537__$1 = (((((!((map__65537 == null))))?(((((map__65537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65537):map__65537);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65537__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65537__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65537,map__65537__$1,state,ref){
return (function (){
var map__65539 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__65539__$1 = (((((!((map__65539 == null))))?(((((map__65539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65539):map__65539);
var props = map__65539__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65539__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65539__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index - (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index - (1))], 0));
} else {
return null;
}
});})(map__65537,map__65537__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65541 = fulcro_incoming_env;
var map__65541__$1 = (((((!((map__65541 == null))))?(((((map__65541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65541):map__65541);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65541__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65541__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65541,map__65541__$1,state,ref){
return (function (){
var map__65543 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__65543__$1 = (((((!((map__65543 == null))))?(((((map__65543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65543):map__65543);
var props = map__65543__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65543__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65543__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index + (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index + (1))], 0));
} else {
return null;
}
});})(map__65541,map__65541__$1,state,ref))
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

var x65550_65798 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x65550_65798.render = ((function (x65550_65798){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__65551 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65552 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65553 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65554 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65555 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65556 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__65557 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__65558 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__65559 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__65560 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65556;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65557;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65558;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65559;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65560;

try{var map__65561 = fulcro.client.primitives.props(this$);
var map__65561__$1 = (((((!((map__65561 == null))))?(((((map__65561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65561):map__65561);
var props = map__65561__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65561__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65561__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65561__$1,new cljs.core.Keyword("ui","menu","ui/menu",352268114));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65561__$1,new cljs.core.Keyword("ui","page","ui/page",849066625));
var extensions = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__65563 = goog.object.get(com.wsscode.pathom.viz.index_explorer.ExtensionContext,"Provider");
var G__65564 = ({"value": extensions});
var G__65565 = (function (){var G__65566 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"container",new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".out-container",".out-container",-265742466)], 0))], null);
var G__65567 = (function (){var G__65569 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874)], 0))], null);
var G__65570 = (function (){var G__65571 = menu;
var G__65572 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], null);
return (com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2(G__65571,G__65572) : com.wsscode.pathom.viz.index_explorer.search_everything.call(null,G__65571,G__65572));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2(G__65569,G__65570) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65569,G__65570));
})();
var G__65568 = (function (){var G__65573 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__65574 = (function (){var G__65576 = cljs.core.PersistentArrayMap.EMPTY;
var G__65577 = (function (){var G__65581 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)))], null);
var G__65582 = "\u25C0";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__65581,G__65582) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__65581,G__65582));
})();
var G__65578 = (function (){var G__65583 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-forward","go-forward",666578902)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)))], null);
var G__65584 = "\u25B6";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__65583,G__65584) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__65583,G__65584));
})();
var G__65579 = (function (){var G__65585 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-stats","go-stats",156008525)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.main_view_ident(page),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__65586 = "Stats";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__65585,G__65586) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__65585,G__65586));
})();
var G__65580 = (function (){var G__65587 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(com.wsscode.pathom.viz.index_explorer.main_view_ident(page)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__65588 = "Full Graph";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__65587,G__65588) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__65587,G__65588));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5(G__65576,G__65577,G__65578,G__65579,G__65580) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__65576,G__65577,G__65578,G__65579,G__65580));
})();
var G__65575 = (cljs.core.truth_(page)?com.wsscode.pathom.viz.index_explorer.main_view_union(page,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], 0))):null);
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__65573,G__65574,G__65575) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__65573,G__65574,G__65575));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__65566,G__65567,G__65568) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__65566,G__65567,G__65568));
})();
return (fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__65563,G__65564,G__65565) : fulcro.client.localized_dom.create_element.call(null,G__65563,G__65564,G__65565));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65555;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65554;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65553;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65552;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65551;
}});})(x65550_65798))
;

x65550_65798.initLocalState = ((function (x65550_65798){
return (function (){
var this$ = this;
var ret__50860__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489),((function (this$,x65550_65798){
return (function (p1__65545_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),null,(1),null)),(new cljs.core.List(null,p1__65545_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x65550_65798))
,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x65550_65798){
return (function (p1__65546_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),null,(1),null)),(new cljs.core.List(null,p1__65546_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x65550_65798))
,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866),((function (this$,x65550_65798){
return (function (p1__65547_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),null,(1),null)),(new cljs.core.List(null,p1__65547_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x65550_65798))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),((function (this$,x65550_65798){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),null,(1),null)))))], null));
});})(this$,x65550_65798))
,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),((function (this$,x65550_65798){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),null,(1),null)))))], null));
});})(this$,x65550_65798))
,new cljs.core.Keyword(null,"go-stats","go-stats",156008525),((function (this$,x65550_65798){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),null,(1),null)))))], null));
});})(this$,x65550_65798))
,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058),((function (this$,x65550_65798){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),null,(1),null)))))], null));
});})(this$,x65550_65798))
], null);
var obj65590 = ({"fulcro$state":ret__50860__auto__});
return obj65590;
});})(x65550_65798))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor = com.wsscode.pathom.viz.index_explorer.IndexExplorer;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.fulcro$isComponent = true;

var x65591_65799 = com.wsscode.pathom.viz.index_explorer.IndexExplorer;
x65591_65799.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65591_65799.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65591_65799){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x65591_65799))
;

x65591_65799.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65591_65799){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x65591_65799))
;

x65591_65799.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x65591_65799.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x65591_65799){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x65591_65799))
;

x65591_65799.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65591_65799.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65591_65799){
return (function (this$,p__65592){
var map__65593 = p__65592;
var map__65593__$1 = (((((!((map__65593 == null))))?(((((map__65593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65593):map__65593);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65593__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65593__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x65591_65799))
;

x65591_65799.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65591_65799.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65591_65799){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65591_65799))
;

x65591_65799.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65591_65799.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65591_65799){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x65591_65799))
;


var x65595_65800 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x65595_65800.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x65595_65800.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x65595_65800){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x65595_65800))
;

x65595_65800.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x65595_65800){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x65595_65800))
;

x65595_65800.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x65595_65800.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x65595_65800){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x65595_65800))
;

x65595_65800.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x65595_65800.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x65595_65800){
return (function (this$,p__65596){
var map__65597 = p__65596;
var map__65597__$1 = (((((!((map__65597 == null))))?(((((map__65597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65597):map__65597);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65597__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65597__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x65595_65800))
;

x65595_65800.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65595_65800.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65595_65800){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x65595_65800))
;

x65595_65800.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65595_65800.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65595_65800){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x65595_65800))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.viz.index-explorer/IndexExplorer");
});
com.wsscode.pathom.viz.index_explorer.index_explorer = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer);

//# sourceMappingURL=com.wsscode.pathom.viz.index_explorer.js.map
