goog.provide("goog.module.ModuleLoader");
goog.require("goog.Timer");
goog.require("goog.array");
goog.require("goog.events");
goog.require("goog.events.Event");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventId");
goog.require("goog.events.EventTarget");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.log");
goog.require("goog.module.AbstractModuleLoader");
goog.require("goog.net.BulkLoader");
goog.require("goog.net.EventType");
goog.require("goog.net.jsloader");
goog.require("goog.userAgent");
goog.require("goog.userAgent.product");
/**
 @constructor
 @extends {goog.events.EventTarget}
 @implements {goog.module.AbstractModuleLoader}
 */
goog.module.ModuleLoader = function() {
  goog.module.ModuleLoader.base(this, "constructor");
  /** @private @type {goog.events.EventHandler<!goog.module.ModuleLoader>} */ this.eventHandler_ = new goog.events.EventHandler(this);
  /** @private @type {!Object<Array<string>,goog.module.ModuleLoader.LoadStatus>} */ this.loadingModulesStatus_ = {};
};
goog.inherits(goog.module.ModuleLoader, goog.events.EventTarget);
/** @protected @type {goog.log.Logger} */ goog.module.ModuleLoader.prototype.logger = goog.log.getLogger("goog.module.ModuleLoader");
/** @private @type {boolean} */ goog.module.ModuleLoader.prototype.debugMode_ = false;
/** @private @type {boolean} */ goog.module.ModuleLoader.prototype.sourceUrlInjection_ = false;
/**
 @return {boolean}
 */
goog.module.ModuleLoader.supportsSourceUrlStackTraces = function() {
  return goog.userAgent.product.CHROME || goog.labs.userAgent.browser.isFirefox() && goog.labs.userAgent.browser.isVersionOrHigher("36");
};
/**
 @return {boolean}
 */
goog.module.ModuleLoader.supportsSourceUrlDebugger = function() {
  return goog.userAgent.product.CHROME || goog.userAgent.GECKO;
};
/**
 @return {boolean}
 */
goog.module.ModuleLoader.prototype.getDebugMode = function() {
  return this.debugMode_;
};
/**
 @param {boolean} debugMode
 */
goog.module.ModuleLoader.prototype.setDebugMode = function(debugMode) {
  this.debugMode_ = debugMode;
};
/**
 @param {boolean} enabled
 */
goog.module.ModuleLoader.prototype.setSourceUrlInjection = function(enabled) {
  this.sourceUrlInjection_ = enabled;
};
/**
 @private
 @return {boolean}
 */
goog.module.ModuleLoader.prototype.usingSourceUrlInjection_ = function() {
  return this.sourceUrlInjection_ || this.getDebugMode() && goog.module.ModuleLoader.supportsSourceUrlStackTraces();
};
/** @override */ goog.module.ModuleLoader.prototype.loadModules = function(ids, moduleInfoMap, opt_successFn, opt_errorFn, opt_timeoutFn, opt_forceReload) {
  var loadStatus = this.loadingModulesStatus_[ids] || new goog.module.ModuleLoader.LoadStatus;
  loadStatus.loadRequested = true;
  loadStatus.successFn = opt_successFn || null;
  loadStatus.errorFn = opt_errorFn || null;
  if (!this.loadingModulesStatus_[ids]) {
    this.loadingModulesStatus_[ids] = loadStatus;
    this.downloadModules_(ids, moduleInfoMap);
  } else {
    if (goog.isDefAndNotNull(loadStatus.responseTexts)) {
      this.evaluateCode_(ids);
    }
  }
};
/**
 @private
 @param {Array<string>} moduleIds
 */
goog.module.ModuleLoader.prototype.evaluateCode_ = function(moduleIds) {
  this.dispatchEvent(new goog.module.ModuleLoader.RequestSuccessEvent(moduleIds));
  goog.log.info(this.logger, "evaluateCode ids:" + moduleIds);
  var loadStatus = this.loadingModulesStatus_[moduleIds];
  var uris = loadStatus.requestUris;
  var texts = loadStatus.responseTexts;
  var error = null;
  try {
    if (this.usingSourceUrlInjection_()) {
      for (var i = 0; i < uris.length; i++) {
        var uri = uris[i];
        goog.globalEval(texts[i] + " //# sourceURL\x3d" + uri);
      }
    } else {
      goog.globalEval(texts.join("\n"));
    }
  } catch (e) {
    error = e;
    goog.log.warning(this.logger, "Loaded incomplete code for module(s): " + moduleIds, e);
  }
  this.dispatchEvent(new goog.module.ModuleLoader.EvaluateCodeEvent(moduleIds));
  if (error) {
    this.handleErrorHelper_(moduleIds, loadStatus.errorFn, null, error);
  } else {
    if (loadStatus.successFn) {
      loadStatus.successFn();
    }
  }
  delete this.loadingModulesStatus_[moduleIds];
};
/**
 @private
 @param {goog.net.BulkLoader} bulkLoader
 @param {Array<string>} moduleIds
 */
goog.module.ModuleLoader.prototype.handleSuccess_ = function(bulkLoader, moduleIds) {
  goog.log.info(this.logger, "Code loaded for module(s): " + moduleIds);
  var loadStatus = this.loadingModulesStatus_[moduleIds];
  loadStatus.responseTexts = bulkLoader.getResponseTexts();
  if (loadStatus.loadRequested) {
    this.evaluateCode_(moduleIds);
  }
  goog.Timer.callOnce(bulkLoader.dispose, 5, bulkLoader);
};
/** @override */ goog.module.ModuleLoader.prototype.prefetchModule = function(id, moduleInfo) {
  if (this.getDebugMode()) {
    return;
  }
  var loadStatus = this.loadingModulesStatus_[[id]];
  if (loadStatus) {
    return;
  }
  var moduleInfoMap = {};
  moduleInfoMap[id] = moduleInfo;
  this.loadingModulesStatus_[[id]] = new goog.module.ModuleLoader.LoadStatus;
  this.downloadModules_([id], moduleInfoMap);
};
/**
 @private
 @param {Array<string>} ids
 @param {!Object<string,!goog.module.ModuleInfo>} moduleInfoMap
 */
goog.module.ModuleLoader.prototype.downloadModules_ = function(ids, moduleInfoMap) {
  var trustedUris = [];
  for (var i = 0; i < ids.length; i++) {
    goog.array.extend(trustedUris, moduleInfoMap[ids[i]].getUris());
  }
  var uris = goog.array.map(trustedUris, goog.html.TrustedResourceUrl.unwrap);
  goog.log.info(this.logger, "downloadModules ids:" + ids + " uris:" + uris);
  if (this.getDebugMode() && !this.usingSourceUrlInjection_()) {
    goog.net.jsloader.safeLoadMany(trustedUris);
  } else {
    var loadStatus = this.loadingModulesStatus_[ids];
    loadStatus.requestUris = uris;
    var bulkLoader = new goog.net.BulkLoader(uris);
    var eventHandler = this.eventHandler_;
    eventHandler.listen(bulkLoader, goog.net.EventType.SUCCESS, goog.bind(this.handleSuccess_, this, bulkLoader, ids));
    eventHandler.listen(bulkLoader, goog.net.EventType.ERROR, goog.bind(this.handleError_, this, bulkLoader, ids));
    bulkLoader.load();
  }
};
/**
 @private
 @param {goog.net.BulkLoader} bulkLoader
 @param {Array<string>} moduleIds
 @param {number} status
 */
goog.module.ModuleLoader.prototype.handleError_ = function(bulkLoader, moduleIds, status) {
  var loadStatus = this.loadingModulesStatus_[moduleIds];
  if (loadStatus) {
    delete this.loadingModulesStatus_[moduleIds];
    this.handleErrorHelper_(moduleIds, loadStatus.errorFn, status);
  }
  goog.Timer.callOnce(bulkLoader.dispose, 5, bulkLoader);
};
/**
 @private
 @param {Array<string>} moduleIds
 @param {?function(?number)} errorFn
 @param {?number} status
 @param {!Error=} opt_error
 */
goog.module.ModuleLoader.prototype.handleErrorHelper_ = function(moduleIds, errorFn, status, opt_error) {
  this.dispatchEvent(new goog.module.ModuleLoader.RequestErrorEvent(moduleIds, opt_error));
  goog.log.warning(this.logger, "Request failed for module(s): " + moduleIds);
  if (errorFn) {
    errorFn(status);
  }
};
/** @override */ goog.module.ModuleLoader.prototype.disposeInternal = function() {
  goog.module.ModuleLoader.superClass_.disposeInternal.call(this);
  this.eventHandler_.dispose();
  this.eventHandler_ = null;
};
/** @const */ goog.module.ModuleLoader.EventType = {/** @const @type {!goog.events.EventId<!goog.module.ModuleLoader.EvaluateCodeEvent>} */ EVALUATE_CODE:new goog.events.EventId(goog.events.getUniqueId("evaluateCode")), /** @const @type {!goog.events.EventId<!goog.module.ModuleLoader.RequestSuccessEvent>} */ REQUEST_SUCCESS:new goog.events.EventId(goog.events.getUniqueId("requestSuccess")), /** @const @type {!goog.events.EventId<!goog.module.ModuleLoader.RequestErrorEvent>} */ REQUEST_ERROR:new goog.events.EventId(goog.events.getUniqueId("requestError"))};
/**
 @protected
 @final
 @constructor
 @extends {goog.events.Event}
 @param {Array<string>} moduleIds
 */
goog.module.ModuleLoader.EvaluateCodeEvent = function(moduleIds) {
  goog.module.ModuleLoader.EvaluateCodeEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.EVALUATE_CODE);
  /** @type {Array<string>} */ this.moduleIds = moduleIds;
};
goog.inherits(goog.module.ModuleLoader.EvaluateCodeEvent, goog.events.Event);
/**
 @protected
 @final
 @constructor
 @extends {goog.events.Event}
 @param {Array<string>} moduleIds
 */
goog.module.ModuleLoader.RequestSuccessEvent = function(moduleIds) {
  goog.module.ModuleLoader.RequestSuccessEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.REQUEST_SUCCESS);
  /** @type {Array<string>} */ this.moduleIds = moduleIds;
};
goog.inherits(goog.module.ModuleLoader.RequestSuccessEvent, goog.events.Event);
/**
 @protected
 @final
 @constructor
 @extends {goog.events.Event}
 @param {Array<string>} moduleIds
 @param {!Error=} opt_error
 */
goog.module.ModuleLoader.RequestErrorEvent = function(moduleIds, opt_error) {
  goog.module.ModuleLoader.RequestErrorEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.REQUEST_ERROR);
  /** @type {Array<string>} */ this.moduleIds = moduleIds;
  /** @type {?Error} */ this.error = opt_error || null;
};
goog.inherits(goog.module.ModuleLoader.RequestErrorEvent, goog.events.Event);
/** @final @constructor */ goog.module.ModuleLoader.LoadStatus = function() {
  /** @type {Array<string>} */ this.requestUris = null;
  /** @type {Array<string>} */ this.responseTexts = null;
  /** @type {boolean} */ this.loadRequested = false;
  /** @type {?function()} */ this.successFn = null;
  /** @type {?function(?number)} */ this.errorFn = null;
};

//# sourceMappingURL=goog.module.moduleloader.js.map
