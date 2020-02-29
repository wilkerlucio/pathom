goog.provide("goog.debug.EntryPointMonitor");
goog.provide("goog.debug.entryPointRegistry");
goog.require("goog.asserts");
/** @interface */ goog.debug.EntryPointMonitor = function() {
};
/**
 * @param {!Function} fn
 * @return {!Function}
 */
goog.debug.EntryPointMonitor.prototype.wrap;
/**
 * @param {!Function} fn
 * @return {!Function}
 */
goog.debug.EntryPointMonitor.prototype.unwrap;
/** @private @type {!Array<function(!Function)>} */ goog.debug.entryPointRegistry.refList_ = [];
/** @private @type {!Array<!goog.debug.EntryPointMonitor>} */ goog.debug.entryPointRegistry.monitors_ = [];
/** @private @type {boolean} */ goog.debug.entryPointRegistry.monitorsMayExist_ = false;
/**
 * @param {function(!Function)} callback
 */
goog.debug.entryPointRegistry.register = function(callback) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback;
  if (goog.debug.entryPointRegistry.monitorsMayExist_) {
    var monitors = goog.debug.entryPointRegistry.monitors_;
    for (var i = 0; i < monitors.length; i++) {
      callback(goog.bind(monitors[i].wrap, monitors[i]));
    }
  }
};
/**
 * @param {!goog.debug.EntryPointMonitor} monitor
 */
goog.debug.entryPointRegistry.monitorAll = function(monitor) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = true;
  var transformer = goog.bind(monitor.wrap, monitor);
  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer);
  }
  goog.debug.entryPointRegistry.monitors_.push(monitor);
};
/**
 * @param {!goog.debug.EntryPointMonitor} monitor
 * @throws {Error}
 */
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {
  var monitors = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert(monitor == monitors[monitors.length - 1], "Only the most recent monitor can be unwrapped.");
  var transformer = goog.bind(monitor.unwrap, monitor);
  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer);
  }
  monitors.length--;
};

//# sourceMappingURL=goog.debug.entrypointregistry.js.map
