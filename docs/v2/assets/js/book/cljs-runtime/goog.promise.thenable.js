goog.provide("goog.Thenable");
/**
 * @suppress {extraRequire}
 */
goog.forwardDeclare("goog.Promise");
/**
 * @interface
 * @extends {IThenable<TYPE>}
 * @template TYPE
 */
goog.Thenable = function() {
};
/**
 * @param {?function(this:THIS,TYPE):VALUE=} opt_onFulfilled
 * @param {?function(this:THIS,*):*=} opt_onRejected
 * @param {THIS=} opt_context
 * @return {RESULT}
 * @template VALUE
 * @template THIS
 * @template RESULT := type("goog.Promise",cond(isUnknown(VALUE),unknown(),mapunion(VALUE,V=>cond(isTemplatized(V)&&sub(rawTypeOf(V),"IThenable"),templateTypeOf(V,0),cond(sub(V,"Thenable"),unknown(),V))))) =:
 */
goog.Thenable.prototype.then = function(opt_onFulfilled, opt_onRejected, opt_context) {
};
/** @const */ goog.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";
/**
 * @param {function(new:goog.Thenable,...?)} ctor
 */
goog.Thenable.addImplementation = function(ctor) {
  if (COMPILED) {
    ctor.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = true;
  } else {
    ctor.prototype.$goog_Thenable = true;
  }
};
/**
 * @param {?} object
 * @return {boolean}
 */
goog.Thenable.isImplementedBy = function(object) {
  if (!object) {
    return false;
  }
  try {
    if (COMPILED) {
      return !!object[goog.Thenable.IMPLEMENTED_BY_PROP];
    }
    return !!object.$goog_Thenable;
  } catch (e) {
    return false;
  }
};

//# sourceMappingURL=goog.promise.thenable.js.map
