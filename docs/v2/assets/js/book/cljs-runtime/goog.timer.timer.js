goog.provide("goog.Timer");
goog.require("goog.Promise");
goog.require("goog.events.EventTarget");
/**
 * @constructor
 * @extends {goog.events.EventTarget}
 * @param {number=} opt_interval
 * @param {Object=} opt_timerObject
 */
goog.Timer = function(opt_interval, opt_timerObject) {
  goog.events.EventTarget.call(this);
  /** @private @type {number} */ this.interval_ = opt_interval || 1;
  /** @private @type {{setTimeout:!Function,clearTimeout:!Function}} */ this.timerObject_ = /** @type {{setTimeout,clearTimeout}} */ (opt_timerObject || goog.Timer.defaultTimerObject);
  /** @private @const @type {Function} */ this.boundTick_ = goog.bind(this.tick_, this);
  /** @private @type {number} */ this.last_ = goog.now();
};
goog.inherits(goog.Timer, goog.events.EventTarget);
/** @private @const @type {number} */ goog.Timer.MAX_TIMEOUT_ = 2147483647;
/** @private @const @type {number} */ goog.Timer.INVALID_TIMEOUT_ID_ = -1;
/** @type {boolean} */ goog.Timer.prototype.enabled = false;
/** @type {{setTimeout,clearTimeout}} */ goog.Timer.defaultTimerObject = goog.global;
/** @type {number} */ goog.Timer.intervalScale = 0.8;
/** @private @type {?number} */ goog.Timer.prototype.timer_ = null;
/**
 * @return {number}
 */
goog.Timer.prototype.getInterval = function() {
  return this.interval_;
};
/**
 * @param {number} interval
 */
goog.Timer.prototype.setInterval = function(interval) {
  this.interval_ = interval;
  if (this.timer_ && this.enabled) {
    this.stop();
    this.start();
  } else {
    if (this.timer_) {
      this.stop();
    }
  }
};
/** @private */ goog.Timer.prototype.tick_ = function() {
  if (this.enabled) {
    var elapsed = goog.now() - this.last_;
    if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {
      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - elapsed);
      return;
    }
    if (this.timer_) {
      this.timerObject_.clearTimeout(this.timer_);
      this.timer_ = null;
    }
    this.dispatchTick();
    if (this.enabled) {
      this.stop();
      this.start();
    }
  }
};
goog.Timer.prototype.dispatchTick = function() {
  this.dispatchEvent(goog.Timer.TICK);
};
goog.Timer.prototype.start = function() {
  this.enabled = true;
  if (!this.timer_) {
    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);
    this.last_ = goog.now();
  }
};
goog.Timer.prototype.stop = function() {
  this.enabled = false;
  if (this.timer_) {
    this.timerObject_.clearTimeout(this.timer_);
    this.timer_ = null;
  }
};
/** @override */ goog.Timer.prototype.disposeInternal = function() {
  goog.Timer.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.timerObject_;
};
/** @const */ goog.Timer.TICK = "tick";
/**
 * @param {(function(this:SCOPE)|{handleEvent:function()}|null)} listener
 * @param {number=} opt_delay
 * @param {SCOPE=} opt_handler
 * @return {number}
 * @template SCOPE
 */
goog.Timer.callOnce = function(listener, opt_delay, opt_handler) {
  if (goog.isFunction(listener)) {
    if (opt_handler) {
      listener = goog.bind(listener, opt_handler);
    }
  } else {
    if (listener && typeof listener.handleEvent == "function") {
      listener = goog.bind(listener.handleEvent, listener);
    } else {
      throw new Error("Invalid listener argument");
    }
  }
  if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) {
    return goog.Timer.INVALID_TIMEOUT_ID_;
  } else {
    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0);
  }
};
/**
 * @param {?number} timerId
 */
goog.Timer.clear = function(timerId) {
  goog.Timer.defaultTimerObject.clearTimeout(timerId);
};
/**
 * @param {number} delay
 * @param {(RESULT|goog.Thenable<RESULT>|Thenable)=} opt_result
 * @return {!goog.Promise<RESULT>}
 * @template RESULT
 */
goog.Timer.promise = function(delay, opt_result) {
  var timerKey = null;
  return (new goog.Promise(function(resolve, reject) {
    timerKey = goog.Timer.callOnce(function() {
      resolve(opt_result);
    }, delay);
    if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) {
      reject(new Error("Failed to schedule timer."));
    }
  })).thenCatch(function(error) {
    goog.Timer.clear(timerKey);
    throw error;
  });
};

//# sourceMappingURL=goog.timer.timer.js.map
