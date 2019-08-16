goog.provide("goog.Throttle");
goog.provide("goog.async.Throttle");
goog.require("goog.Disposable");
goog.require("goog.Timer");
/**
 @final
 @struct
 @constructor
 @extends {goog.Disposable}
 @param {function(this:T,...?)} listener
 @param {number} interval
 @param {T=} opt_handler
 @template T
 */
goog.async.Throttle = function(listener, interval, opt_handler) {
  goog.async.Throttle.base(this, "constructor");
  /** @private @type {function(this:T,...?)} */ this.listener_ = opt_handler != null ? goog.bind(listener, opt_handler) : listener;
  /** @private @type {number} */ this.interval_ = interval;
  /** @private @type {Function} */ this.callback_ = goog.bind(this.onTimer_, this);
  /** @private @type {!IArrayLike} */ this.args_ = [];
};
goog.inherits(goog.async.Throttle, goog.Disposable);
/**
 @final
 @constructor
 @deprecated Use goog.async.Throttle instead.
 */
goog.Throttle = goog.async.Throttle;
/** @private @type {boolean} */ goog.async.Throttle.prototype.shouldFire_ = false;
/** @private @type {number} */ goog.async.Throttle.prototype.pauseCount_ = 0;
/** @private @type {?number} */ goog.async.Throttle.prototype.timer_ = null;
/**
 @param {...?} var_args
 */
goog.async.Throttle.prototype.fire = function(var_args) {
  this.args_ = arguments;
  if (!this.timer_ && !this.pauseCount_) {
    this.doAction_();
  } else {
    this.shouldFire_ = true;
  }
};
goog.async.Throttle.prototype.stop = function() {
  if (this.timer_) {
    goog.Timer.clear(this.timer_);
    this.timer_ = null;
    this.shouldFire_ = false;
    this.args_ = [];
  }
};
goog.async.Throttle.prototype.pause = function() {
  this.pauseCount_++;
};
goog.async.Throttle.prototype.resume = function() {
  this.pauseCount_--;
  if (!this.pauseCount_ && this.shouldFire_ && !this.timer_) {
    this.shouldFire_ = false;
    this.doAction_();
  }
};
/** @override */ goog.async.Throttle.prototype.disposeInternal = function() {
  goog.async.Throttle.base(this, "disposeInternal");
  this.stop();
};
/** @private */ goog.async.Throttle.prototype.onTimer_ = function() {
  this.timer_ = null;
  if (this.shouldFire_ && !this.pauseCount_) {
    this.shouldFire_ = false;
    this.doAction_();
  }
};
/** @private */ goog.async.Throttle.prototype.doAction_ = function() {
  this.timer_ = goog.Timer.callOnce(this.callback_, this.interval_);
  this.listener_.apply(null, this.args_);
};

//# sourceMappingURL=goog.async.throttle.js.map
