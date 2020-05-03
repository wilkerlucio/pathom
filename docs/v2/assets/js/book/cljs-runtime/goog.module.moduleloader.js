goog.provide("goog.module.ModuleLoader");
goog.require("goog.Timer");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.safe");
goog.require("goog.events");
goog.require("goog.events.Event");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventId");
goog.require("goog.events.EventTarget");
goog.require("goog.functions");
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
 * @constructor
 * @extends {goog.events.EventTarget}
 * @implements {goog.module.AbstractModuleLoader}
 */
goog.module.ModuleLoader = function() {
  goog.module.ModuleLoader.base(this, "constructor");
  /** @private @type {goog.events.EventHandler<!goog.module.ModuleLoader>} */ this.eventHandler_ = new goog.events.EventHandler(this);
  this.registerDisposable(this.eventHandler_);
  /** @private @type {!Object<Array<string>,goog.module.ModuleLoader.LoadStatus>} */ this.loadingModulesStatus_ = {};
};
goog.inherits(goog.module.ModuleLoader, goog.events.EventTarget);
/** @protected @type {goog.log.Logger} */ goog.module.ModuleLoader.prototype.logger = goog.log.getLogger("goog.module.ModuleLoader");
/** @private @type {boolean} */ goog.module.ModuleLoader.prototype.debugMode_ = false;
/** @private @type {boolean} */ goog.module.ModuleLoader.prototype.sourceUrlInjection_ = false;
/** @private @type {boolean} */ goog.module.ModuleLoader.prototype.useScriptTags_ = false;
/**
 * @return {boolean}
 */
goog.module.ModuleLoader.supportsSourceUrlStackTraces = function() {
  return goog.userAgent.product.CHROME || goog.labs.userAgent.browser.isFirefox() && goog.labs.userAgent.browser.isVersionOrHigher("36");
};
/**
 * @return {boolean}
 */
goog.module.ModuleLoader.supportsSourceUrlDebugger = function() {
  return goog.userAgent.product.CHROME || goog.userAgent.GECKO;
};
/** @private @const @type {number} */ goog.module.ModuleLoader.URL_MAX_LENGTH_ = 4043;
/** @private @const @type {number} */ goog.module.ModuleLoader.SYNTAX_OR_NETWORK_ERROR_CODE_ = -1;
/**
 * @private
 * @param {!goog.html.TrustedResourceUrl} url
 * @return {!HTMLScriptElement}
 */
goog.module.ModuleLoader.createScriptElement_ = function(url) {
  /** @const */ var script = goog.dom.createElement(goog.dom.TagName.SCRIPT);
  goog.dom.safe.setScriptSrc(script, url);
  script.async = false;
  return script;
};
/**
 * @private
 * @param {!goog.html.TrustedResourceUrl} url
 * @return {!HTMLLinkElement}
 */
goog.module.ModuleLoader.createPreloadScriptElement_ = function(url) {
  /** @const */ var link = goog.dom.createElement(goog.dom.TagName.LINK);
  goog.dom.safe.setLinkHrefAndRel(link, url, "preload");
  link.as = "script";
  return link;
};
/**
 * @return {boolean}
 */
goog.module.ModuleLoader.prototype.getDebugMode = function() {
  return this.debugMode_;
};
/**
 * @param {boolean} useScriptTags
 */
goog.module.ModuleLoader.prototype.setUseScriptTags = function(useScriptTags) {
  this.useScriptTags_ = useScriptTags;
};
/**
 * @return {boolean}
 */
goog.module.ModuleLoader.prototype.getUseScriptTags = function() {
  return this.useScriptTags_;
};
/**
 * @param {boolean} debugMode
 */
goog.module.ModuleLoader.prototype.setDebugMode = function(debugMode) {
  this.debugMode_ = debugMode;
};
/**
 * @param {boolean} enabled
 */
goog.module.ModuleLoader.prototype.setSourceUrlInjection = function(enabled) {
  this.sourceUrlInjection_ = enabled;
};
/**
 * @private
 * @return {boolean}
 */
goog.module.ModuleLoader.prototype.usingSourceUrlInjection_ = function() {
  return this.sourceUrlInjection_ || this.getDebugMode() && goog.module.ModuleLoader.supportsSourceUrlStackTraces();
};
/** @override */ goog.module.ModuleLoader.prototype.loadModules = function(ids, moduleInfoMap, opt_successFn, opt_errorFn, opt_timeoutFn, opt_forceReload) {
  var loadStatus = this.loadingModulesStatus_[ids] || goog.module.ModuleLoader.LoadStatus.createForIds_(ids, moduleInfoMap);
  loadStatus.loadRequested = true;
  if (loadStatus.successFn && opt_successFn) {
    loadStatus.successFn = goog.functions.sequence(loadStatus.successFn, opt_successFn);
  } else {
    loadStatus.successFn = opt_successFn || loadStatus.successFn;
  }
  loadStatus.errorFn = opt_errorFn || null;
  if (!this.loadingModulesStatus_[ids]) {
    this.loadingModulesStatus_[ids] = loadStatus;
    this.downloadModules_(ids);
  } else {
    if (this.getUseScriptTags()) {
      this.downloadModules_(ids);
    } else {
      if (loadStatus.responseTexts != null) {
        this.evaluateCode_(ids);
      }
    }
  }
};
/**
 * @private
 * @param {Array<string>} moduleIds
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
 * @private
 * @param {goog.net.BulkLoader} bulkLoader
 * @param {Array<string>} moduleIds
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
  goog.log.info(this.logger, "Prefetching module: " + id);
  var loadStatus = this.loadingModulesStatus_[[id]];
  if (loadStatus) {
    return;
  }
  var moduleInfoMap = {};
  moduleInfoMap[id] = moduleInfo;
  loadStatus = goog.module.ModuleLoader.LoadStatus.createForIds_([id], moduleInfoMap);
  this.loadingModulesStatus_[[id]] = loadStatus;
  if (this.getUseScriptTags()) {
    /** @const */ var links = [];
    /** @const */ var insertPos = document.head || document.documentElement;
    for (var i = 0; i < loadStatus.trustedRequestUris.length; i++) {
      /** @const */ var link = goog.module.ModuleLoader.createPreloadScriptElement_(loadStatus.trustedRequestUris[i]);
      links.push(link);
      insertPos.insertBefore(link, insertPos.firstChild);
    }
    loadStatus.successFn = function() {
      for (var i = 0; i < links.length; i++) {
        /** @const */ var link$6 = links[i];
        goog.dom.removeNode(link$6);
      }
    };
  } else {
    this.downloadModules_([id]);
  }
};
/**
 * @private
 * @param {?Array<string>} ids
 */
goog.module.ModuleLoader.prototype.downloadModules_ = function(ids) {
  /** @const */ var debugMode = this.getDebugMode();
  /** @const */ var sourceUrlInjection = this.usingSourceUrlInjection_();
  /** @const */ var useScriptTags = this.getUseScriptTags();
  if (debugMode + sourceUrlInjection + useScriptTags > 1) {
    /** @const */ var effectiveFlag = useScriptTags ? "useScriptTags" : debugMode && !sourceUrlInjection ? "debug" : "sourceUrlInjection";
    goog.log.warning(this.logger, "More than one of debugMode (set to " + debugMode + "), " + ("useScriptTags (set to " + useScriptTags + "), ") + ("and sourceUrlInjection (set to " + sourceUrlInjection + ") ") + "is enabled. Proceeding with download as if " + (effectiveFlag + " is set to true and the rest to false."));
  }
  /** @const */ var loadStatus = goog.asserts.assert(this.loadingModulesStatus_[ids]);
  if (useScriptTags) {
    this.loadWithNonAsyncScriptTag_(loadStatus, ids);
  } else {
    if (debugMode && !sourceUrlInjection) {
      goog.net.jsloader.safeLoadMany(loadStatus.trustedRequestUris);
    } else {
      goog.log.info(this.logger, "downloadModules ids:" + ids + " uris:" + loadStatus.requestUris);
      var bulkLoader = new goog.net.BulkLoader(loadStatus.requestUris);
      var eventHandler = this.eventHandler_;
      eventHandler.listen(bulkLoader, goog.net.EventType.SUCCESS, goog.bind(this.handleSuccess_, this, bulkLoader, ids));
      eventHandler.listen(bulkLoader, goog.net.EventType.ERROR, goog.bind(this.handleError_, this, bulkLoader, ids));
      bulkLoader.load();
    }
  }
};
/**
 * @private
 * @param {!goog.module.ModuleLoader.LoadStatus} loadStatus
 * @param {?Array<string>} ids
 */
goog.module.ModuleLoader.prototype.loadWithNonAsyncScriptTag_ = function(loadStatus, ids) {
  /** @const */ var $jscomp$this = this;
  goog.log.info(this.logger, "Loading initiated for: " + ids);
  if (loadStatus.trustedRequestUris.length == 0) {
    if (loadStatus.successFn) {
      loadStatus.successFn();
      return;
    }
  }
  var lastScript = null;
  /** @const */ var insertPos = document.head || document.documentElement;
  var $jscomp$loop$8 = {};
  var i = 0;
  for (; i < loadStatus.trustedRequestUris.length; $jscomp$loop$8 = {$jscomp$loop$prop$scriptElement$10:$jscomp$loop$8.$jscomp$loop$prop$scriptElement$10}, i++) {
    /** @const */ var url = loadStatus.trustedRequestUris[i];
    /** @const */ var urlLength = loadStatus.requestUris[i].length;
    goog.asserts.assert(urlLength <= goog.module.ModuleLoader.URL_MAX_LENGTH_, "Module url length is " + urlLength + ", which is greater than limit of " + (goog.module.ModuleLoader.URL_MAX_LENGTH_ + ". This should never ") + "happen.");
    /** @const */ $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10 = goog.module.ModuleLoader.createScriptElement_(url);
    $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10.onload = function($jscomp$loop$8) {
      return function() {
        $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10.onload = null;
        $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10.onerror = null;
        goog.dom.removeNode($jscomp$loop$8.$jscomp$loop$prop$scriptElement$10);
        if ($jscomp$loop$8.$jscomp$loop$prop$scriptElement$10 == lastScript) {
          goog.log.info($jscomp$this.logger, "Loading complete for: " + ids);
          lastScript = null;
          if (loadStatus.successFn) {
            loadStatus.successFn();
          }
        }
      };
    }($jscomp$loop$8);
    $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10.onerror = function($jscomp$loop$8) {
      return function() {
        goog.log.error($jscomp$this.logger, "Network error when loading module(s): " + ids);
        $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10.onload = null;
        $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10.onerror = null;
        goog.dom.removeNode($jscomp$loop$8.$jscomp$loop$prop$scriptElement$10);
        $jscomp$this.handleErrorHelper_(ids, loadStatus.errorFn, goog.module.ModuleLoader.SYNTAX_OR_NETWORK_ERROR_CODE_);
        if (lastScript == $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10) {
          lastScript = null;
        } else {
          goog.log.error($jscomp$this.logger, "Dependent requests were made in parallel with failed request " + ('for module(s) "' + ids + '". Non-recoverable out-of-order ') + "execution may occur.");
        }
      };
    }($jscomp$loop$8);
    lastScript = $jscomp$loop$8.$jscomp$loop$prop$scriptElement$10;
    insertPos.insertBefore($jscomp$loop$8.$jscomp$loop$prop$scriptElement$10, insertPos.firstChild);
  }
};
/**
 * @private
 * @param {goog.net.BulkLoader} bulkLoader
 * @param {Array<string>} moduleIds
 * @param {!goog.net.BulkLoader.LoadErrorEvent} event
 */
goog.module.ModuleLoader.prototype.handleError_ = function(bulkLoader, moduleIds, event) {
  var loadStatus = this.loadingModulesStatus_[moduleIds];
  if (loadStatus) {
    delete this.loadingModulesStatus_[moduleIds];
    this.handleErrorHelper_(moduleIds, loadStatus.errorFn, event.status);
  }
  goog.Timer.callOnce(bulkLoader.dispose, 5, bulkLoader);
};
/**
 * @private
 * @param {Array<string>} moduleIds
 * @param {?function(?number)} errorFn
 * @param {?number} status
 * @param {!Error=} opt_error
 */
goog.module.ModuleLoader.prototype.handleErrorHelper_ = function(moduleIds, errorFn, status, opt_error) {
  this.dispatchEvent(new goog.module.ModuleLoader.RequestErrorEvent(moduleIds, status, opt_error));
  goog.log.warning(this.logger, "Request failed for module(s): " + moduleIds);
  if (errorFn) {
    errorFn(status);
  }
};
/** @const */ goog.module.ModuleLoader.EventType = {/** @const @type {!goog.events.EventId<!goog.module.ModuleLoader.EvaluateCodeEvent>} */ EVALUATE_CODE:new goog.events.EventId(goog.events.getUniqueId("evaluateCode")), /** @const @type {!goog.events.EventId<!goog.module.ModuleLoader.RequestSuccessEvent>} */ REQUEST_SUCCESS:new goog.events.EventId(goog.events.getUniqueId("requestSuccess")), /** @const @type {!goog.events.EventId<!goog.module.ModuleLoader.RequestErrorEvent>} */ REQUEST_ERROR:new goog.events.EventId(goog.events.getUniqueId("requestError"))};
/**
 * @protected
 * @final
 * @constructor
 * @extends {goog.events.Event}
 * @param {Array<string>} moduleIds
 */
goog.module.ModuleLoader.EvaluateCodeEvent = function(moduleIds) {
  goog.module.ModuleLoader.EvaluateCodeEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.EVALUATE_CODE);
  /** @type {Array<string>} */ this.moduleIds = moduleIds;
};
goog.inherits(goog.module.ModuleLoader.EvaluateCodeEvent, goog.events.Event);
/**
 * @protected
 * @final
 * @constructor
 * @extends {goog.events.Event}
 * @param {Array<string>} moduleIds
 */
goog.module.ModuleLoader.RequestSuccessEvent = function(moduleIds) {
  goog.module.ModuleLoader.RequestSuccessEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.REQUEST_SUCCESS);
  /** @type {Array<string>} */ this.moduleIds = moduleIds;
};
goog.inherits(goog.module.ModuleLoader.RequestSuccessEvent, goog.events.Event);
/**
 * @protected
 * @final
 * @constructor
 * @extends {goog.events.Event}
 * @param {?Array<string>} moduleIds
 * @param {?number} status
 * @param {!Error=} opt_error
 */
goog.module.ModuleLoader.RequestErrorEvent = function(moduleIds, status, opt_error) {
  goog.module.ModuleLoader.RequestErrorEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.REQUEST_ERROR);
  /** @type {?Array<string>} */ this.moduleIds = moduleIds;
  /** @type {?number} */ this.status = status;
  /** @type {?Error} */ this.error = opt_error || null;
};
goog.inherits(goog.module.ModuleLoader.RequestErrorEvent, goog.events.Event);
/**
 * @final
 * @constructor
 * @param {!Array<!goog.html.TrustedResourceUrl>} trustedRequestUris
 */
goog.module.ModuleLoader.LoadStatus = function(trustedRequestUris) {
  /** @final @type {!Array<string>} */ this.requestUris = goog.array.map(trustedRequestUris, goog.html.TrustedResourceUrl.unwrap);
  /** @final @type {!Array<!goog.html.TrustedResourceUrl>} */ this.trustedRequestUris = trustedRequestUris;
  /** @type {?Array<string>} */ this.responseTexts = null;
  /** @type {boolean} */ this.loadRequested = false;
  /** @type {?function()} */ this.successFn = null;
  /** @type {?function(?number)} */ this.errorFn = null;
};
/**
 * @private
 * @param {?Array<string>} ids
 * @param {!Object<string,!goog.module.ModuleInfo>} moduleInfoMap
 * @return {!goog.module.ModuleLoader.LoadStatus}
 */
goog.module.ModuleLoader.LoadStatus.createForIds_ = function(ids, moduleInfoMap) {
  if (!ids) {
    return new goog.module.ModuleLoader.LoadStatus([]);
  }
  /** @const */ var trustedRequestUris = [];
  for (var i = 0; i < ids.length; i++) {
    goog.array.extend(trustedRequestUris, moduleInfoMap[ids[i]].getUris());
  }
  return new goog.module.ModuleLoader.LoadStatus(trustedRequestUris);
};

//# sourceMappingURL=goog.module.moduleloader.js.map
