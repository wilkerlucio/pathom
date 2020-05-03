goog.provide("goog.events.Event");
goog.provide("goog.events.EventLike");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.Disposable");
goog.require("goog.events.EventId");
/** @typedef {(string|Object|goog.events.Event|goog.events.EventId)} */ goog.events.EventLike;
/**
 * @constructor
 * @param {(string|!goog.events.EventId)} type
 * @param {Object=} opt_target
 * @suppress {underscore}
 */
goog.events.Event = function(type, opt_target) {
  /** @type {string} */ this.type = type instanceof goog.events.EventId ? String(type) : type;
  /** @type {(Object|undefined)} */ this.target = opt_target;
  /** @type {(Object|undefined)} */ this.currentTarget = this.target;
  /** @public @type {boolean} */ this.propagationStopped_ = false;
  /** @type {boolean} */ this.defaultPrevented = false;
  /** @public @type {boolean} */ this.returnValue_ = true;
};
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = true;
};
goog.events.Event.prototype.preventDefault = function() {
  this.defaultPrevented = true;
  this.returnValue_ = false;
};
/**
 * @param {!goog.events.Event} e
 */
goog.events.Event.stopPropagation = function(e) {
  e.stopPropagation();
};
/**
 * @param {!goog.events.Event} e
 */
goog.events.Event.preventDefault = function(e) {
  e.preventDefault();
};

//# sourceMappingURL=goog.events.event.js.map
