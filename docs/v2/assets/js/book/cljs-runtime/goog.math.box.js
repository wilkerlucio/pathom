goog.provide("goog.math.Box");
goog.require("goog.asserts");
goog.require("goog.math.Coordinate");
/**
 * @struct
 * @constructor
 * @param {number} top
 * @param {number} right
 * @param {number} bottom
 * @param {number} left
 */
goog.math.Box = function(top, right, bottom, left) {
  /** @type {number} */ this.top = top;
  /** @type {number} */ this.right = right;
  /** @type {number} */ this.bottom = bottom;
  /** @type {number} */ this.left = left;
};
/**
 * @param {...goog.math.Coordinate} var_args
 * @return {!goog.math.Box}
 */
goog.math.Box.boundingBox = function(var_args) {
  var box = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);
  for (var i = 1; i < arguments.length; i++) {
    box.expandToIncludeCoordinate(arguments[i]);
  }
  return box;
};
/**
 * @return {number}
 */
goog.math.Box.prototype.getWidth = function() {
  return this.right - this.left;
};
/**
 * @return {number}
 */
goog.math.Box.prototype.getHeight = function() {
  return this.bottom - this.top;
};
/**
 * @return {!goog.math.Box}
 */
goog.math.Box.prototype.clone = function() {
  return new goog.math.Box(this.top, this.right, this.bottom, this.left);
};
if (goog.DEBUG) {
  /**
   * @return {string}
   * @override
   */
  goog.math.Box.prototype.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
  };
}
/**
 * @param {(goog.math.Coordinate|goog.math.Box)} other
 * @return {boolean}
 */
goog.math.Box.prototype.contains = function(other) {
  return goog.math.Box.contains(this, other);
};
/**
 * @param {(number|goog.math.Box)} top
 * @param {number=} opt_right
 * @param {number=} opt_bottom
 * @param {number=} opt_left
 * @return {!goog.math.Box}
 */
goog.math.Box.prototype.expand = function(top, opt_right, opt_bottom, opt_left) {
  if (goog.isObject(top)) {
    this.top -= top.top;
    this.right += top.right;
    this.bottom += top.bottom;
    this.left -= top.left;
  } else {
    this.top -= /** @type {number} */ (top);
    this.right += Number(opt_right);
    this.bottom += Number(opt_bottom);
    this.left -= Number(opt_left);
  }
  return this;
};
/**
 * @param {goog.math.Box} box
 */
goog.math.Box.prototype.expandToInclude = function(box) {
  this.left = Math.min(this.left, box.left);
  this.top = Math.min(this.top, box.top);
  this.right = Math.max(this.right, box.right);
  this.bottom = Math.max(this.bottom, box.bottom);
};
/**
 * @param {!goog.math.Coordinate} coord
 */
goog.math.Box.prototype.expandToIncludeCoordinate = function(coord) {
  this.top = Math.min(this.top, coord.y);
  this.right = Math.max(this.right, coord.x);
  this.bottom = Math.max(this.bottom, coord.y);
  this.left = Math.min(this.left, coord.x);
};
/**
 * @param {goog.math.Box} a
 * @param {goog.math.Box} b
 * @return {boolean}
 */
goog.math.Box.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left;
};
/**
 * @param {goog.math.Box} box
 * @param {(goog.math.Coordinate|goog.math.Box)} other
 * @return {boolean}
 */
goog.math.Box.contains = function(box, other) {
  if (!box || !other) {
    return false;
  }
  if (other instanceof goog.math.Box) {
    return other.left >= box.left && other.right <= box.right && other.top >= box.top && other.bottom <= box.bottom;
  }
  return other.x >= box.left && other.x <= box.right && other.y >= box.top && other.y <= box.bottom;
};
/**
 * @param {goog.math.Box} box
 * @param {goog.math.Coordinate} coord
 * @return {number}
 */
goog.math.Box.relativePositionX = function(box, coord) {
  if (coord.x < box.left) {
    return coord.x - box.left;
  } else {
    if (coord.x > box.right) {
      return coord.x - box.right;
    }
  }
  return 0;
};
/**
 * @param {goog.math.Box} box
 * @param {goog.math.Coordinate} coord
 * @return {number}
 */
goog.math.Box.relativePositionY = function(box, coord) {
  if (coord.y < box.top) {
    return coord.y - box.top;
  } else {
    if (coord.y > box.bottom) {
      return coord.y - box.bottom;
    }
  }
  return 0;
};
/**
 * @param {goog.math.Box} box
 * @param {goog.math.Coordinate} coord
 * @return {number}
 */
goog.math.Box.distance = function(box, coord) {
  var x = goog.math.Box.relativePositionX(box, coord);
  var y = goog.math.Box.relativePositionY(box, coord);
  return Math.sqrt(x * x + y * y);
};
/**
 * @param {goog.math.Box} a
 * @param {goog.math.Box} b
 * @return {boolean}
 */
goog.math.Box.intersects = function(a, b) {
  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom;
};
/**
 * @param {goog.math.Box} a
 * @param {goog.math.Box} b
 * @param {number} padding
 * @return {boolean}
 */
goog.math.Box.intersectsWithPadding = function(a, b, padding) {
  return a.left <= b.right + padding && b.left <= a.right + padding && a.top <= b.bottom + padding && b.top <= a.bottom + padding;
};
/**
 * @return {!goog.math.Box}
 */
goog.math.Box.prototype.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
/**
 * @return {!goog.math.Box}
 */
goog.math.Box.prototype.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
/**
 * @return {!goog.math.Box}
 */
goog.math.Box.prototype.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
/**
 * @param {(number|goog.math.Coordinate)} tx
 * @param {number=} opt_ty
 * @return {!goog.math.Box}
 */
goog.math.Box.prototype.translate = function(tx, opt_ty) {
  if (tx instanceof goog.math.Coordinate) {
    this.left += tx.x;
    this.right += tx.x;
    this.top += tx.y;
    this.bottom += tx.y;
  } else {
    goog.asserts.assertNumber(tx);
    this.left += tx;
    this.right += tx;
    if (typeof opt_ty === "number") {
      this.top += opt_ty;
      this.bottom += opt_ty;
    }
  }
  return this;
};
/**
 * @param {number} sx
 * @param {number=} opt_sy
 * @return {!goog.math.Box}
 */
goog.math.Box.prototype.scale = function(sx, opt_sy) {
  var sy = typeof opt_sy === "number" ? opt_sy : sx;
  this.left *= sx;
  this.right *= sx;
  this.top *= sy;
  this.bottom *= sy;
  return this;
};

//# sourceMappingURL=goog.math.box.js.map
