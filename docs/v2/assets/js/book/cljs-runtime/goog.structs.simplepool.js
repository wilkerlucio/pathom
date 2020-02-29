goog.provide("goog.structs.SimplePool");
goog.require("goog.Disposable");
/**
 * @constructor
 * @extends {goog.Disposable}
 * @param {number} initialCount
 * @param {number} maxCount
 * @template T
 */
goog.structs.SimplePool = function(initialCount, maxCount) {
  goog.Disposable.call(this);
  /** @private @type {?Function} */ this.createObjectFn_ = null;
  /** @private @type {?Function} */ this.disposeObjectFn_ = null;
  /** @private @type {number} */ this.maxCount_ = maxCount;
  /** @private @type {Array<T>} */ this.freeQueue_ = [];
  this.createInitial_(initialCount);
};
goog.inherits(goog.structs.SimplePool, goog.Disposable);
/**
 * @param {Function} createObjectFn
 */
goog.structs.SimplePool.prototype.setCreateObjectFn = function(createObjectFn) {
  this.createObjectFn_ = createObjectFn;
};
/**
 * @param {Function} disposeObjectFn
 */
goog.structs.SimplePool.prototype.setDisposeObjectFn = function(disposeObjectFn) {
  this.disposeObjectFn_ = disposeObjectFn;
};
/**
 * @return {T}
 */
goog.structs.SimplePool.prototype.getObject = function() {
  if (this.freeQueue_.length) {
    return this.freeQueue_.pop();
  }
  return this.createObject();
};
/**
 * @param {T} obj
 */
goog.structs.SimplePool.prototype.releaseObject = function(obj) {
  if (this.freeQueue_.length < this.maxCount_) {
    this.freeQueue_.push(obj);
  } else {
    this.disposeObject(obj);
  }
};
/**
 * @private
 * @param {number} initialCount
 */
goog.structs.SimplePool.prototype.createInitial_ = function(initialCount) {
  if (initialCount > this.maxCount_) {
    throw new Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for (var i = 0; i < initialCount; i++) {
    this.freeQueue_.push(this.createObject());
  }
};
/**
 * @return {T}
 */
goog.structs.SimplePool.prototype.createObject = function() {
  if (this.createObjectFn_) {
    return this.createObjectFn_();
  } else {
    return {};
  }
};
/**
 * @param {T} obj
 */
goog.structs.SimplePool.prototype.disposeObject = function(obj) {
  if (this.disposeObjectFn_) {
    this.disposeObjectFn_(obj);
  } else {
    if (goog.isObject(obj)) {
      if (goog.isFunction(obj.dispose)) {
        obj.dispose();
      } else {
        for (var i in obj) {
          delete obj[i];
        }
      }
    }
  }
};
/** @protected @override */ goog.structs.SimplePool.prototype.disposeInternal = function() {
  goog.structs.SimplePool.superClass_.disposeInternal.call(this);
  var freeQueue = this.freeQueue_;
  while (freeQueue.length) {
    this.disposeObject(freeQueue.pop());
  }
  delete this.freeQueue_;
};

//# sourceMappingURL=goog.structs.simplepool.js.map
