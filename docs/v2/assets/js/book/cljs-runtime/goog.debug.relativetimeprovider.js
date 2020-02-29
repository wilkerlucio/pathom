goog.provide("goog.debug.RelativeTimeProvider");
/** @final @constructor */ goog.debug.RelativeTimeProvider = function() {
  /** @private @type {number} */ this.relativeTimeStart_ = goog.now();
};
/** @private @type {?goog.debug.RelativeTimeProvider} */ goog.debug.RelativeTimeProvider.defaultInstance_ = null;
/**
 * @param {number} timeStamp
 */
goog.debug.RelativeTimeProvider.prototype.set = function(timeStamp) {
  this.relativeTimeStart_ = timeStamp;
};
goog.debug.RelativeTimeProvider.prototype.reset = function() {
  this.set(goog.now());
};
/**
 * @return {number}
 */
goog.debug.RelativeTimeProvider.prototype.get = function() {
  return this.relativeTimeStart_;
};
/**
 * @return {goog.debug.RelativeTimeProvider}
 */
goog.debug.RelativeTimeProvider.getDefaultInstance = function() {
  if (!goog.debug.RelativeTimeProvider.defaultInstance_) {
    goog.debug.RelativeTimeProvider.defaultInstance_ = new goog.debug.RelativeTimeProvider;
  }
  return goog.debug.RelativeTimeProvider.defaultInstance_;
};

//# sourceMappingURL=goog.debug.relativetimeprovider.js.map
