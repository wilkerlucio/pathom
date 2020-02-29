goog.provide("goog.async.FreeList");
/**
 * @struct
 * @constructor
 * @param {function():ITEM} create
 * @param {function(ITEM):void} reset
 * @param {number} limit
 * @template ITEM
 */
goog.async.FreeList = function(create, reset, limit) {
  /** @private @const @type {number} */ this.limit_ = limit;
  /** @private @const @type {function()} */ this.create_ = create;
  /** @private @const @type {function(ITEM):void} */ this.reset_ = reset;
  /** @private @type {number} */ this.occupants_ = 0;
  /** @private @type {ITEM} */ this.head_ = null;
};
/**
 * @return {ITEM}
 */
goog.async.FreeList.prototype.get = function() {
  var item;
  if (this.occupants_ > 0) {
    this.occupants_--;
    item = this.head_;
    this.head_ = item.next;
    item.next = null;
  } else {
    item = this.create_();
  }
  return item;
};
/**
 * @param {ITEM} item
 */
goog.async.FreeList.prototype.put = function(item) {
  this.reset_(item);
  if (this.occupants_ < this.limit_) {
    this.occupants_++;
    item.next = this.head_;
    this.head_ = item;
  }
};
/**
 * @package
 * @return {number}
 */
goog.async.FreeList.prototype.occupants = function() {
  return this.occupants_;
};

//# sourceMappingURL=goog.async.freelist.js.map
