goog.provide("goog.module.ModuleInfo");
goog.require("goog.Disposable");
goog.require("goog.async.throwException");
goog.require("goog.functions");
goog.require("goog.html.TrustedResourceUrl");
/**
 @suppress {extraRequire}
 */
goog.require("goog.module");
goog.require("goog.module.BaseModule");
goog.require("goog.module.ModuleLoadCallback");
goog.forwardDeclare("goog.loader.AbstractModuleManager.FailureType");
/**
 @final
 @constructor
 @extends {goog.Disposable}
 @param {Array<string>} deps
 @param {string} id
 */
goog.module.ModuleInfo = function(deps, id) {
  goog.Disposable.call(this);
  /** @private @type {Array<string>} */ this.deps_ = deps;
  /** @private @type {string} */ this.id_ = id;
  /** @private @type {Array<goog.module.ModuleLoadCallback>} */ this.onloadCallbacks_ = [];
  /** @private @type {Array<goog.module.ModuleLoadCallback>} */ this.onErrorCallbacks_ = [];
  /** @private @type {Array<goog.module.ModuleLoadCallback>} */ this.earlyOnloadCallbacks_ = [];
};
goog.inherits(goog.module.ModuleInfo, goog.Disposable);
/** @private @type {?Array<!goog.html.TrustedResourceUrl>} */ goog.module.ModuleInfo.prototype.uris_ = null;
/** @private @type {Function} */ goog.module.ModuleInfo.prototype.moduleConstructor_ = goog.module.BaseModule;
/** @private @type {?goog.module.BaseModule} */ goog.module.ModuleInfo.prototype.module_ = null;
/**
 @return {Array<string>}
 */
goog.module.ModuleInfo.prototype.getDependencies = function() {
  return this.deps_;
};
/**
 @return {string}
 */
goog.module.ModuleInfo.prototype.getId = function() {
  return this.id_;
};
/**
 @param {!Array<!goog.html.TrustedResourceUrl>} uris
 */
goog.module.ModuleInfo.prototype.setTrustedUris = function(uris) {
  this.uris_ = uris;
};
/**
 @return {!Array<!goog.html.TrustedResourceUrl>}
 */
goog.module.ModuleInfo.prototype.getUris = function() {
  if (!this.uris_) {
    this.uris_ = [];
  }
  return this.uris_;
};
/**
 @param {Function} constructor
 */
goog.module.ModuleInfo.prototype.setModuleConstructor = function(constructor) {
  if (this.moduleConstructor_ === goog.module.BaseModule) {
    this.moduleConstructor_ = constructor;
  } else {
    throw new Error("Cannot set module constructor more than once.");
  }
};
/**
 @param {Function} fn
 @param {Object=} opt_handler
 @return {!goog.module.ModuleLoadCallback}
 */
goog.module.ModuleInfo.prototype.registerEarlyCallback = function(fn, opt_handler) {
  return this.registerCallback_(this.earlyOnloadCallbacks_, fn, opt_handler);
};
/**
 @param {Function} fn
 @param {Object=} opt_handler
 @return {!goog.module.ModuleLoadCallback}
 */
goog.module.ModuleInfo.prototype.registerCallback = function(fn, opt_handler) {
  return this.registerCallback_(this.onloadCallbacks_, fn, opt_handler);
};
/**
 @param {Function} fn
 @param {Object=} opt_handler
 @return {!goog.module.ModuleLoadCallback}
 */
goog.module.ModuleInfo.prototype.registerErrback = function(fn, opt_handler) {
  return this.registerCallback_(this.onErrorCallbacks_, fn, opt_handler);
};
/**
 @private
 @param {Array<goog.module.ModuleLoadCallback>} callbacks
 @param {Function} fn
 @param {Object=} opt_handler
 @return {!goog.module.ModuleLoadCallback}
 */
goog.module.ModuleInfo.prototype.registerCallback_ = function(callbacks, fn, opt_handler) {
  var callback = new goog.module.ModuleLoadCallback(fn, opt_handler);
  callbacks.push(callback);
  return callback;
};
/**
 @return {boolean}
 */
goog.module.ModuleInfo.prototype.isLoaded = function() {
  return !!this.module_;
};
goog.module.ModuleInfo.prototype.setLoaded = function() {
  this.module_ = new goog.module.BaseModule;
};
/**
 @return {?goog.module.BaseModule}
 */
goog.module.ModuleInfo.prototype.getModule = function() {
  return this.module_;
};
/**
 @param {function():Object} contextProvider
 @return {boolean}
 */
goog.module.ModuleInfo.prototype.onLoad = function(contextProvider) {
  var module = new this.moduleConstructor_;
  module.initialize(contextProvider());
  this.module_ = module;
  var errors = !!this.callCallbacks_(this.earlyOnloadCallbacks_, contextProvider());
  errors = errors || !!this.callCallbacks_(this.onloadCallbacks_, contextProvider());
  if (!errors) {
    this.onErrorCallbacks_.length = 0;
  }
  return errors;
};
/**
 @param {goog.loader.AbstractModuleManager.FailureType} cause
 */
goog.module.ModuleInfo.prototype.onError = function(cause) {
  var result = this.callCallbacks_(this.onErrorCallbacks_, cause);
  if (result) {
    window.setTimeout(goog.functions.error("Module errback failures: " + result), 0);
  }
  this.earlyOnloadCallbacks_.length = 0;
  this.onloadCallbacks_.length = 0;
};
/**
 @private
 @param {Array<goog.module.ModuleLoadCallback>} callbacks
 @param {*} context
 @return {Array<*>}
 */
goog.module.ModuleInfo.prototype.callCallbacks_ = function(callbacks, context) {
  var errors = [];
  for (var i = 0; i < callbacks.length; i++) {
    try {
      callbacks[i].execute(context);
    } catch (e) {
      goog.async.throwException(e);
      errors.push(e);
    }
  }
  callbacks.length = 0;
  return errors.length ? errors : null;
};
/** @override */ goog.module.ModuleInfo.prototype.disposeInternal = function() {
  goog.module.ModuleInfo.superClass_.disposeInternal.call(this);
  goog.dispose(this.module_);
};

//# sourceMappingURL=goog.module.moduleinfo.js.map
