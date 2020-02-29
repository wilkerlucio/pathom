goog.provide("goog.debug.errorcontext");
/**
 * @param {!Error} err
 * @param {string} contextKey
 * @param {string} contextValue
 */
goog.debug.errorcontext.addErrorContext = function(err, contextKey, contextValue) {
  if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) {
    err[goog.debug.errorcontext.CONTEXT_KEY_] = {};
  }
  err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue;
};
/**
 * @param {!Error} err
 * @return {!Object<string,string>}
 */
goog.debug.errorcontext.getErrorContext = function(err) {
  return err[goog.debug.errorcontext.CONTEXT_KEY_] || {};
};
/** @private @const @type {string} */ goog.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";

//# sourceMappingURL=goog.debug.errorcontext.js.map
