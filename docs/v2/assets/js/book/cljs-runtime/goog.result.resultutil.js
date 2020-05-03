goog.provide("goog.result");
goog.require("goog.array");
goog.require("goog.result.DependentResult");
goog.require("goog.result.Result");
goog.require("goog.result.SimpleResult");
/**
 * @param {*} value
 * @return {!goog.result.Result}
 */
goog.result.successfulResult = function(value) {
  var result = new goog.result.SimpleResult;
  result.setValue(value);
  return result;
};
/**
 * @param {*=} opt_error
 * @return {!goog.result.Result}
 */
goog.result.failedResult = function(opt_error) {
  var result = new goog.result.SimpleResult;
  result.setError(opt_error);
  return result;
};
/**
 * @return {!goog.result.Result}
 */
goog.result.canceledResult = function() {
  var result = new goog.result.SimpleResult;
  result.cancel();
  return result;
};
/**
 * @param {!goog.result.Result} result
 * @param {function(this:T,!goog.result.Result)} handler
 * @param {T=} opt_scope
 * @template T
 */
goog.result.wait = function(result, handler, opt_scope) {
  result.wait(handler, opt_scope);
};
/**
 * @param {!goog.result.Result} result
 * @param {function(this:T,?,!goog.result.Result)} handler
 * @param {T=} opt_scope
 * @template T
 */
goog.result.waitOnSuccess = function(result, handler, opt_scope) {
  goog.result.wait(result, function(res) {
    if (res.getState() == goog.result.Result.State.SUCCESS) {
      handler.call(this, res.getValue(), res);
    }
  }, opt_scope);
};
/**
 * @param {!goog.result.Result} result
 * @param {function(this:T,?,!goog.result.Result)} handler
 * @param {T=} opt_scope
 * @template T
 */
goog.result.waitOnError = function(result, handler, opt_scope) {
  goog.result.wait(result, function(res) {
    if (res.getState() == goog.result.Result.State.ERROR) {
      handler.call(this, res.getError(), res);
    }
  }, opt_scope);
};
/**
 * @param {!goog.result.Result} result
 * @param {function(?):?} transformer
 * @return {!goog.result.DependentResult}
 */
goog.result.transform = function(result, transformer) {
  var returnedResult = new goog.result.DependentResultImpl_([result]);
  goog.result.wait(result, function(res) {
    if (res.getState() == goog.result.Result.State.SUCCESS) {
      returnedResult.setValue(transformer(res.getValue()));
    } else {
      returnedResult.setError(res.getError());
    }
  });
  return returnedResult;
};
/**
 * @param {!goog.result.Result} result
 * @param {function(this:T,!goog.result.Result):!goog.result.Result} actionCallback
 * @param {T=} opt_scope
 * @return {!goog.result.DependentResult}
 * @template T
 */
goog.result.chain = function(result, actionCallback, opt_scope) {
  var dependentResult = new goog.result.DependentResultImpl_([result]);
  goog.result.wait(result, function(result) {
    if (result.getState() == goog.result.Result.State.SUCCESS) {
      var contingentResult = actionCallback.call(opt_scope, result);
      dependentResult.addParentResult(contingentResult);
      goog.result.wait(contingentResult, function(contingentResult) {
        if (contingentResult.getState() == goog.result.Result.State.SUCCESS) {
          dependentResult.setValue(contingentResult.getValue());
        } else {
          dependentResult.setError(contingentResult.getError());
        }
      });
    } else {
      dependentResult.setError(result.getError());
    }
  });
  return dependentResult;
};
/**
 * @param {...!goog.result.Result} var_args
 * @return {!goog.result.DependentResult}
 */
goog.result.combine = function(var_args) {
  /** @type {!Array<!goog.result.Result>} */ var results = goog.array.clone(arguments);
  var combinedResult = new goog.result.DependentResultImpl_(results);
  var isResolved = function(res) {
    return res.getState() != goog.result.Result.State.PENDING;
  };
  var checkResults = function() {
    if (combinedResult.getState() == goog.result.Result.State.PENDING && goog.array.every(results, isResolved)) {
      combinedResult.setValue(results);
    }
  };
  goog.array.forEach(results, function(result) {
    goog.result.wait(result, checkResults);
  });
  return combinedResult;
};
/**
 * @param {...!goog.result.Result} var_args
 * @return {!goog.result.DependentResult}
 */
goog.result.combineOnSuccess = function(var_args) {
  var results = goog.array.clone(arguments);
  var combinedResult = new goog.result.DependentResultImpl_(results);
  var resolvedSuccessfully = function(res) {
    return res.getState() == goog.result.Result.State.SUCCESS;
  };
  goog.result.wait(goog.result.combine.apply(goog.result.combine, results), function(res) {
    var results = /** @type {Array<!goog.result.Result>} */ (res.getValue());
    if (goog.array.every(results, resolvedSuccessfully)) {
      combinedResult.setValue(results);
    } else {
      combinedResult.setError(results);
    }
  });
  return combinedResult;
};
/**
 * @param {!goog.result.DependentResult} dependentResult
 * @return {boolean}
 */
goog.result.cancelParentResults = function(dependentResult) {
  var anyCanceled = false;
  var results = dependentResult.getParentResults();
  for (var n = 0; n < results.length; n++) {
    anyCanceled |= results[n].cancel();
  }
  return !!anyCanceled;
};
/**
 * @private
 * @constructor
 * @extends {goog.result.SimpleResult}
 * @implements {goog.result.DependentResult}
 * @param {!Array<!goog.result.Result>} parentResults
 */
goog.result.DependentResultImpl_ = function(parentResults) {
  goog.result.DependentResultImpl_.base(this, "constructor");
  /** @private @type {!Array<!goog.result.Result>} */ this.parentResults_ = parentResults;
};
goog.inherits(goog.result.DependentResultImpl_, goog.result.SimpleResult);
/**
 * @param {!goog.result.Result} parentResult
 */
goog.result.DependentResultImpl_.prototype.addParentResult = function(parentResult) {
  this.parentResults_.push(parentResult);
};
/** @override */ goog.result.DependentResultImpl_.prototype.getParentResults = function() {
  return this.parentResults_;
};

//# sourceMappingURL=goog.result.resultutil.js.map
