goog.provide("goog.Disposable");
goog.provide("goog.dispose");
goog.provide("goog.disposeAll");
goog.require("goog.disposable.IDisposable");
/**
 * @constructor
 * @implements {goog.disposable.IDisposable}
 */
goog.Disposable = function() {
  /** @type {(string|undefined)} */ this.creationStack;
  if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF) {
    if (goog.Disposable.INCLUDE_STACK_ON_CREATION) {
      this.creationStack = (new Error).stack;
    }
    goog.Disposable.instances_[goog.getUid(this)] = this;
  }
  this.disposed_ = this.disposed_;
  this.onDisposeCallbacks_ = this.onDisposeCallbacks_;
};
/** @enum {number} */ goog.Disposable.MonitoringMode = {OFF:0, PERMANENT:1, INTERACTIVE:2};
/** @define {number} */ goog.Disposable.MONITORING_MODE = goog.define("goog.Disposable.MONITORING_MODE", 0);
/** @define {boolean} */ goog.Disposable.INCLUDE_STACK_ON_CREATION = goog.define("goog.Disposable.INCLUDE_STACK_ON_CREATION", true);
/** @private @type {!Object<number,!goog.Disposable>} */ goog.Disposable.instances_ = {};
/**
 * @return {!Array<!goog.Disposable>}
 */
goog.Disposable.getUndisposedObjects = function() {
  var ret = [];
  for (var id in goog.Disposable.instances_) {
    if (goog.Disposable.instances_.hasOwnProperty(id)) {
      ret.push(goog.Disposable.instances_[Number(id)]);
    }
  }
  return ret;
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {};
};
/** @private @type {boolean} */ goog.Disposable.prototype.disposed_ = false;
/** @private @type {Array<!Function>} */ goog.Disposable.prototype.onDisposeCallbacks_;
/**
 * @return {boolean}
 * @override
 */
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_;
};
/**
 * @return {boolean}
 * @deprecated Use {@link #isDisposed} instead.
 */
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
/**
 * @return {void}
 * @override
 */
goog.Disposable.prototype.dispose = function() {
  if (!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
    if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF) {
      var uid = goog.getUid(this);
      if (goog.Disposable.MONITORING_MODE == goog.Disposable.MonitoringMode.PERMANENT && !goog.Disposable.instances_.hasOwnProperty(uid)) {
        throw new Error(this + " did not call the goog.Disposable base " + "constructor or was disposed of after a clearUndisposedObjects " + "call");
      }
      if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF && this.onDisposeCallbacks_ && this.onDisposeCallbacks_.length > 0) {
        throw new Error(this + " did not empty its onDisposeCallbacks queue. This " + "probably means it overrode dispose() or disposeInternal() " + "without calling the superclass' method.");
      }
      delete goog.Disposable.instances_[uid];
    }
  }
};
/**
 * @param {goog.disposable.IDisposable} disposable
 */
goog.Disposable.prototype.registerDisposable = function(disposable) {
  this.addOnDisposeCallback(goog.partial(goog.dispose, disposable));
};
/**
 * @param {function(this:T):?} callback
 * @param {T=} opt_scope
 * @template T
 */
goog.Disposable.prototype.addOnDisposeCallback = function(callback, opt_scope) {
  if (this.disposed_) {
    opt_scope !== undefined ? callback.call(opt_scope) : callback();
    return;
  }
  if (!this.onDisposeCallbacks_) {
    this.onDisposeCallbacks_ = [];
  }
  this.onDisposeCallbacks_.push(opt_scope !== undefined ? goog.bind(callback, opt_scope) : callback);
};
/** @protected */ goog.Disposable.prototype.disposeInternal = function() {
  if (this.onDisposeCallbacks_) {
    while (this.onDisposeCallbacks_.length) {
      this.onDisposeCallbacks_.shift()();
    }
  }
};
/**
 * @param {*} obj
 * @return {boolean}
 */
goog.Disposable.isDisposed = function(obj) {
  if (obj && typeof obj.isDisposed == "function") {
    return obj.isDisposed();
  }
  return false;
};
/**
 * @param {*} obj
 */
goog.dispose = function(obj) {
  if (obj && typeof obj.dispose == "function") {
    obj.dispose();
  }
};
/**
 * @param {...*} var_args
 */
goog.disposeAll = function(var_args) {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    var disposable = arguments[i];
    if (goog.isArrayLike(disposable)) {
      goog.disposeAll.apply(null, disposable);
    } else {
      goog.dispose(disposable);
    }
  }
};

//# sourceMappingURL=goog.disposable.disposable.js.map
