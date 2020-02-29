goog.provide("goog.math.Size");
/**
 * @struct
 * @constructor
 * @param {number} width
 * @param {number} height
 */
goog.math.Size = function(width, height) {
  /** @type {number} */ this.width = width;
  /** @type {number} */ this.height = height;
};
/**
 * @param {goog.math.Size} a
 * @param {goog.math.Size} b
 * @return {boolean}
 */
goog.math.Size.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.width == b.width && a.height == b.height;
};
/**
 * @return {!goog.math.Size}
 */
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height);
};
if (goog.DEBUG) {
  /**
   * @return {string}
   * @override
   */
  goog.math.Size.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")";
  };
}
/**
 * @return {number}
 */
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height);
};
/**
 * @return {number}
 */
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height);
};
/**
 * @return {number}
 */
goog.math.Size.prototype.area = function() {
  return this.width * this.height;
};
/**
 * @return {number}
 */
goog.math.Size.prototype.perimeter = function() {
  return (this.width + this.height) * 2;
};
/**
 * @return {number}
 */
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height;
};
/**
 * @return {boolean}
 */
goog.math.Size.prototype.isEmpty = function() {
  return !this.area();
};
/**
 * @return {!goog.math.Size}
 */
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
/**
 * @param {!goog.math.Size} target
 * @return {boolean}
 */
goog.math.Size.prototype.fitsInside = function(target) {
  return this.width <= target.width && this.height <= target.height;
};
/**
 * @return {!goog.math.Size}
 */
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
/**
 * @return {!goog.math.Size}
 */
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
/**
 * @param {number} sx
 * @param {number=} opt_sy
 * @return {!goog.math.Size}
 */
goog.math.Size.prototype.scale = function(sx, opt_sy) {
  /** @const */ var sy = typeof opt_sy === "number" ? opt_sy : sx;
  this.width *= sx;
  this.height *= sy;
  return this;
};
/**
 * @param {!goog.math.Size} target
 * @return {!goog.math.Size}
 */
goog.math.Size.prototype.scaleToCover = function(target) {
  /** @const */ var s = this.aspectRatio() <= target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s);
};
/**
 * @param {!goog.math.Size} target
 * @return {!goog.math.Size}
 */
goog.math.Size.prototype.scaleToFit = function(target) {
  /** @const */ var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s);
};

//# sourceMappingURL=goog.math.size.js.map
