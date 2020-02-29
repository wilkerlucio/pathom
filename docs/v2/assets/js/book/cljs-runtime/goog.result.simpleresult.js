goog.provide("goog.result.SimpleResult");
goog.provide("goog.result.SimpleResult.StateError");
goog.require("goog.Promise");
goog.require("goog.Thenable");
goog.require("goog.debug.Error");
goog.require("goog.result.Result");
/**
 * @constructor
 * @implements {goog.result.Result}
 * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
 */
goog.result.SimpleResult = function() {
  /** @private @type {goog.result.Result.State} */ this.state_ = goog.result.Result.State.PENDING;
  /** @private @type {!Array<!goog.result.SimpleResult.HandlerEntry_>} */ this.handlers_ = [];
  /** @private @type {*} */ this.value_ = undefined;
  /** @private @type {*} */ this.error_ = undefined;
};
goog.Thenable.addImplementation(goog.result.SimpleResult);
/** @private @typedef {{callback:function(!goog.result.SimpleResult),scope:Object}} */ goog.result.SimpleResult.HandlerEntry_;
/**
 * @final
 * @constructor
 * @extends {goog.debug.Error}
 * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
 */
goog.result.SimpleResult.StateError = function() {
  goog.result.SimpleResult.StateError.base(this, "constructor", "Multiple attempts to set the state of this Result");
};
goog.inherits(goog.result.SimpleResult.StateError, goog.debug.Error);
/** @override */ goog.result.SimpleResult.prototype.getState = function() {
  return this.state_;
};
/** @override */ goog.result.SimpleResult.prototype.getValue = function() {
  return this.value_;
};
/** @override */ goog.result.SimpleResult.prototype.getError = function() {
  return this.error_;
};
/**
 * @param {function(this:T,!goog.result.SimpleResult)} handler
 * @param {T=} opt_scope
 * @template T
 * @override
 */
goog.result.SimpleResult.prototype.wait = function(handler, opt_scope) {
  if (this.isPending_()) {
    this.handlers_.push({callback:handler, scope:opt_scope || null});
  } else {
    handler.call(opt_scope, this);
  }
};
/**
 * @param {*} value
 */
goog.result.SimpleResult.prototype.setValue = function(value) {
  if (this.isPending_()) {
    this.value_ = value;
    this.state_ = goog.result.Result.State.SUCCESS;
    this.callHandlers_();
  } else {
    if (!this.isCanceled()) {
      throw new goog.result.SimpleResult.StateError;
    }
  }
};
/**
 * @param {*=} opt_error
 */
goog.result.SimpleResult.prototype.setError = function(opt_error) {
  if (this.isPending_()) {
    this.error_ = opt_error;
    this.state_ = goog.result.Result.State.ERROR;
    this.callHandlers_();
  } else {
    if (!this.isCanceled()) {
      throw new goog.result.SimpleResult.StateError;
    }
  }
};
/** @private */ goog.result.SimpleResult.prototype.callHandlers_ = function() {
  var handlers = this.handlers_;
  this.handlers_ = [];
  for (var n = 0; n < handlers.length; n++) {
    var handlerEntry = handlers[n];
    handlerEntry.callback.call(handlerEntry.scope, this);
  }
};
/**
 * @private
 * @return {boolean}
 */
goog.result.SimpleResult.prototype.isPending_ = function() {
  return this.state_ == goog.result.Result.State.PENDING;
};
/**
 * @return {boolean}
 * @override
 */
goog.result.SimpleResult.prototype.cancel = function() {
  if (this.isPending_()) {
    this.setError(new goog.result.Result.CancelError);
    return true;
  }
  return false;
};
/** @override */ goog.result.SimpleResult.prototype.isCanceled = function() {
  return this.state_ == goog.result.Result.State.ERROR && this.error_ instanceof goog.result.Result.CancelError;
};
/** @override */ goog.result.SimpleResult.prototype.then = function(opt_onFulfilled, opt_onRejected, opt_context) {
  var resolve, reject;
  var promise = new goog.Promise(function(res, rej) {
    resolve = res;
    reject = rej;
  });
  this.wait(function(result) {
    if (result.isCanceled()) {
      promise.cancel();
    } else {
      if (result.getState() == goog.result.Result.State.SUCCESS) {
        resolve(result.getValue());
      } else {
        if (result.getState() == goog.result.Result.State.ERROR) {
          reject(result.getError());
        }
      }
    }
  });
  return promise.then(opt_onFulfilled, opt_onRejected, opt_context);
};
/**
 * @param {!goog.Promise<?>} promise
 * @return {!goog.result.Result}
 */
goog.result.SimpleResult.fromPromise = function(promise) {
  var result = new goog.result.SimpleResult;
  promise.then(result.setValue, result.setError, result);
  return result;
};

//# sourceMappingURL=goog.result.simpleresult.js.map
