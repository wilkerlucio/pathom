goog.provide("goog.module.ModuleLoadCallback");
goog.require("goog.debug.entryPointRegistry");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.module");
/**
 * @final
 * @constructor
 * @param {Function} fn
 * @param {Object=} opt_handler
 */
goog.module.ModuleLoadCallback = function(fn, opt_handler) {
  /** @private @type {Function} */ this.fn_ = fn;
  /** @private @type {(Object|undefined)} */ this.handler_ = opt_handler;
};
/**
 * @param {*} context
 */
goog.module.ModuleLoadCallback.prototype.execute = function(context) {
  if (this.fn_) {
    this.fn_.call(this.handler_ || null, context);
    this.handler_ = null;
    this.fn_ = null;
  }
};
goog.module.ModuleLoadCallback.prototype.abort = function() {
  this.fn_ = null;
  this.handler_ = null;
};
goog.debug.entryPointRegistry.register(/**
 * @param {function(!Function):!Function} transformer
 */
function(transformer) {
  goog.module.ModuleLoadCallback.prototype.execute = transformer(goog.module.ModuleLoadCallback.prototype.execute);
});

//# sourceMappingURL=goog.module.moduleloadcallback.js.map
