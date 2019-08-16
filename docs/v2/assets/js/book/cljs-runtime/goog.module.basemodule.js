goog.provide("goog.module.BaseModule");
goog.require("goog.Disposable");
/**
 @suppress {extraRequire}
 */
goog.require("goog.module");
/**
 @constructor
 @extends {goog.Disposable}
 */
goog.module.BaseModule = function() {
  goog.Disposable.call(this);
};
goog.inherits(goog.module.BaseModule, goog.Disposable);
/**
 @param {Object} context
 */
goog.module.BaseModule.prototype.initialize = function(context) {
};

//# sourceMappingURL=goog.module.basemodule.js.map
