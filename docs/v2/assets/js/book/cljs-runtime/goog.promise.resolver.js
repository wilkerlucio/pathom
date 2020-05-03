goog.provide("goog.promise.Resolver");
goog.forwardDeclare("goog.Promise");
/**
 * @interface
 * @template TYPE
 */
goog.promise.Resolver = function() {
};
/** @type {!goog.Promise<TYPE>} */ goog.promise.Resolver.prototype.promise;
/** @type {function((TYPE|goog.Promise<TYPE>|Thenable)=)} */ goog.promise.Resolver.prototype.resolve;
/** @type {function(*=):void} */ goog.promise.Resolver.prototype.reject;

//# sourceMappingURL=goog.promise.resolver.js.map
