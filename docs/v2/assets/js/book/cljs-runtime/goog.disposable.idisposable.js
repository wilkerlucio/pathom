goog.provide("goog.disposable.IDisposable");
/** @record */ goog.disposable.IDisposable = function() {
};
/**
 * @return {void}
 */
goog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;
/**
 * @return {boolean}
 */
goog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;

//# sourceMappingURL=goog.disposable.idisposable.js.map
