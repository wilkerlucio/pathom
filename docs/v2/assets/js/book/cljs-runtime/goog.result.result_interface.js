goog.provide("goog.result.Result");
goog.require("goog.Thenable");
/**
 * @interface
 * @extends {goog.Thenable}
 * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
 */
goog.result.Result = function() {
};
/**
 * @param {function(this:T,!goog.result.Result)} handler
 * @param {T=} opt_scope
 * @template T
 */
goog.result.Result.prototype.wait = function(handler, opt_scope) {
};
/**
 * @enum {string}
 * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
 */
goog.result.Result.State = {SUCCESS:"success", ERROR:"error", PENDING:"pending"};
/**
 * @return {!goog.result.Result.State}
 */
goog.result.Result.prototype.getState = function() {
};
/**
 * @return {*}
 */
goog.result.Result.prototype.getValue = function() {
};
/**
 * @return {*}
 */
goog.result.Result.prototype.getError = function() {
};
/**
 * @return {boolean}
 */
goog.result.Result.prototype.cancel = function() {
};
/**
 * @return {boolean}
 */
goog.result.Result.prototype.isCanceled = function() {
};
/**
 * @final
 * @constructor
 * @extends {Error}
 * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
 */
goog.result.Result.CancelError = function() {
};
goog.inherits(goog.result.Result.CancelError, Error);

//# sourceMappingURL=goog.result.result_interface.js.map
