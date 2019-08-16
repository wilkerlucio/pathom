goog.provide("goog.loader.AbstractModuleManager");
goog.provide("goog.loader.AbstractModuleManager.CallbackType");
goog.provide("goog.loader.AbstractModuleManager.FailureType");
goog.require("goog.module.AbstractModuleLoader");
goog.require("goog.module.ModuleInfo");
goog.require("goog.module.ModuleLoadCallback");
/** @abstract @struct @constructor */ goog.loader.AbstractModuleManager = function() {
  /** @private @type {?Object} */ this.moduleContext_ = null;
  /** @private @type {?goog.module.AbstractModuleLoader} */ this.loader_ = null;
};
/** @enum {string} */ goog.loader.AbstractModuleManager.CallbackType = {ERROR:"error", IDLE:"idle", ACTIVE:"active", USER_IDLE:"userIdle", USER_ACTIVE:"userActive"};
/** @enum {number} */ goog.loader.AbstractModuleManager.FailureType = {UNAUTHORIZED:0, CONSECUTIVE_FAILURES:1, TIMEOUT:2, OLD_CODE_GONE:3, INIT_ERROR:4};
/** @type {number} */ goog.loader.AbstractModuleManager.CORRUPT_RESPONSE_STATUS_CODE = 8001;
/**
 @param {boolean} enabled
 */
goog.loader.AbstractModuleManager.prototype.setBatchModeEnabled = function(enabled) {
};
/**
 @param {boolean} enabled
 */
goog.loader.AbstractModuleManager.prototype.setConcurrentLoadingEnabled = function(enabled) {
};
/**
 @param {!Object<?,!Array<string>>} infoMap
 */
goog.loader.AbstractModuleManager.prototype.setAllModuleInfo = function(infoMap) {
};
/**
 @param {string=} opt_info
 @param {!Array<string>=} opt_loadingModuleIds
 */
goog.loader.AbstractModuleManager.prototype.setAllModuleInfoString = function(opt_info, opt_loadingModuleIds) {
};
/**
 @abstract
 @param {string} id
 @return {!goog.module.ModuleInfo}
 */
goog.loader.AbstractModuleManager.prototype.getModuleInfo = function(id) {
};
/**
 @param {!Object<string,!Array<!goog.html.TrustedResourceUrl>>} moduleUriMap
 */
goog.loader.AbstractModuleManager.prototype.setModuleTrustedUris = function(moduleUriMap) {
};
/**
 @return {?goog.module.AbstractModuleLoader}
 */
goog.loader.AbstractModuleManager.prototype.getLoader = function() {
  return this.loader_;
};
/**
 @param {!goog.module.AbstractModuleLoader} loader
 */
goog.loader.AbstractModuleManager.prototype.setLoader = function(loader) {
  this.loader_ = loader;
};
/**
 @return {?Object}
 */
goog.loader.AbstractModuleManager.prototype.getModuleContext = function() {
  return this.moduleContext_;
};
/**
 @param {!Object} context
 */
goog.loader.AbstractModuleManager.prototype.setModuleContext = function(context) {
  this.moduleContext_ = context;
};
/**
 @return {boolean}
 */
goog.loader.AbstractModuleManager.prototype.isActive = function() {
  return false;
};
/**
 @return {boolean}
 */
goog.loader.AbstractModuleManager.prototype.isUserActive = function() {
  return false;
};
/**
 @abstract
 @param {string} id
 @param {number=} opt_timeout
 @return {!IThenable}
 */
goog.loader.AbstractModuleManager.prototype.preloadModule = function(id, opt_timeout) {
};
/**
 @param {string} id
 */
goog.loader.AbstractModuleManager.prototype.prefetchModule = function(id) {
  throw new Error("prefetchModule is not implemented.");
};
/** @abstract */ goog.loader.AbstractModuleManager.prototype.setLoaded = function() {
};
/**
 @abstract
 @param {string} id
 @return {boolean}
 */
goog.loader.AbstractModuleManager.prototype.isModuleLoading = function(id) {
};
/**
 @abstract
 @param {string} moduleId
 @param {!Function} fn
 @param {!Object=} opt_handler
 @param {boolean=} opt_noLoad
 @param {boolean=} opt_userInitiated
 @param {boolean=} opt_preferSynchronous
 @return {!goog.module.ModuleLoadCallback}
 */
goog.loader.AbstractModuleManager.prototype.execOnLoad = function(moduleId, fn, opt_handler, opt_noLoad, opt_userInitiated, opt_preferSynchronous) {
};
/**
 @abstract
 @param {string} moduleId
 @param {boolean=} opt_userInitiated
 @return {!IThenable}
 */
goog.loader.AbstractModuleManager.prototype.load = function(moduleId, opt_userInitiated) {
};
/**
 @abstract
 @param {!Array<string>} moduleIds
 @param {boolean=} opt_userInitiated
 @return {!Object<string,!IThenable>}
 */
goog.loader.AbstractModuleManager.prototype.loadMultiple = function(moduleIds, opt_userInitiated) {
};
/**
 @abstract
 @param {string} id
 */
goog.loader.AbstractModuleManager.prototype.beforeLoadModuleCode = function(id) {
};
/**
 @param {!Function} fn
 @param {!Object=} opt_handler
 */
goog.loader.AbstractModuleManager.prototype.registerInitializationCallback = function(fn, opt_handler) {
};
/**
 @param {!Function} fn
 @param {!Object=} opt_handler
 */
goog.loader.AbstractModuleManager.prototype.registerLateInitializationCallback = function(fn, opt_handler) {
};
/**
 @param {!Function} fn
 */
goog.loader.AbstractModuleManager.prototype.setModuleConstructor = function(fn) {
};
/**
 @param {(!goog.loader.AbstractModuleManager.CallbackType|!Array<!goog.loader.AbstractModuleManager.CallbackType>)} types
 @param {!Function} fn
 */
goog.loader.AbstractModuleManager.prototype.registerCallback = function(types, fn) {
};

//# sourceMappingURL=goog.loader.abstractmodulemanager.js.map
