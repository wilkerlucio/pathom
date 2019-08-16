goog.provide("goog.module.AbstractModuleLoader");
/**
 @suppress {extraRequire}
 */
goog.require("goog.module");
goog.require("goog.module.ModuleInfo");
/** @interface */ goog.module.AbstractModuleLoader = function() {
};
/**
 @param {Array<string>} ids
 @param {!Object<string,!goog.module.ModuleInfo>} moduleInfoMap
 @param {?function()=} opt_successFn
 @param {?function(?number)=} opt_errorFn
 @param {?function()=} opt_timeoutFn
 @param {boolean=} opt_forceReload
 */
goog.module.AbstractModuleLoader.prototype.loadModules = function(ids, moduleInfoMap, opt_successFn, opt_errorFn, opt_timeoutFn, opt_forceReload) {
};
/**
 @param {string} id
 @param {!goog.module.ModuleInfo} moduleInfo
 */
goog.module.AbstractModuleLoader.prototype.prefetchModule = function(id, moduleInfo) {
};

//# sourceMappingURL=goog.module.abstractmoduleloader.js.map
