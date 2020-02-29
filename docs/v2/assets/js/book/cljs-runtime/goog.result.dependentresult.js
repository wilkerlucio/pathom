goog.provide("goog.result.DependentResult");
goog.require("goog.result.Result");
/**
 * @interface
 * @extends {goog.result.Result}
 * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
 */
goog.result.DependentResult = function() {
};
/**
 * @return {!Array<!goog.result.Result>}
 */
goog.result.DependentResult.prototype.getParentResults = function() {
};

//# sourceMappingURL=goog.result.dependentresult.js.map
