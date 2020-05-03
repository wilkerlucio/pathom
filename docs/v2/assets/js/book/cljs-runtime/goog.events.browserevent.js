goog.provide("goog.events.BrowserEvent");
goog.provide("goog.events.BrowserEvent.MouseButton");
goog.provide("goog.events.BrowserEvent.PointerType");
goog.require("goog.debug");
goog.require("goog.events.BrowserFeature");
goog.require("goog.events.Event");
goog.require("goog.events.EventType");
goog.require("goog.reflect");
goog.require("goog.userAgent");
/** @define {boolean} */ goog.events.USE_LAYER_XY_AS_OFFSET_XY = goog.define("goog.events.USE_LAYER_XY_AS_OFFSET_XY", false);
/**
 * @constructor
 * @extends {goog.events.Event}
 * @param {Event=} opt_e
 * @param {EventTarget=} opt_currentTarget
 */
goog.events.BrowserEvent = function(opt_e, opt_currentTarget) {
  goog.events.BrowserEvent.base(this, "constructor", opt_e ? opt_e.type : "");
  /** @override @type {?Node} */ this.target = null;
  /** @override @type {(?Node|undefined)} */ this.currentTarget = null;
  /** @type {?Node} */ this.relatedTarget = null;
  /** @type {number} */ this.offsetX = 0;
  /** @type {number} */ this.offsetY = 0;
  /** @type {number} */ this.clientX = 0;
  /** @type {number} */ this.clientY = 0;
  /** @type {number} */ this.screenX = 0;
  /** @type {number} */ this.screenY = 0;
  /** @type {number} */ this.button = 0;
  /** @type {string} */ this.key = "";
  /** @type {number} */ this.keyCode = 0;
  /** @type {number} */ this.charCode = 0;
  /** @type {boolean} */ this.ctrlKey = false;
  /** @type {boolean} */ this.altKey = false;
  /** @type {boolean} */ this.shiftKey = false;
  /** @type {boolean} */ this.metaKey = false;
  /** @type {?Object} */ this.state = null;
  /** @type {boolean} */ this.platformModifierKey = false;
  /** @type {number} */ this.pointerId = 0;
  /** @type {string} */ this.pointerType = "";
  /** @private @type {?Event} */ this.event_ = null;
  if (opt_e) {
    this.init(opt_e, opt_currentTarget);
  }
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
/** @enum {number} */ goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
/** @enum {string} */ goog.events.BrowserEvent.PointerType = {MOUSE:"mouse", PEN:"pen", TOUCH:"touch"};
/**
 * @type {!Array<number>}
 * @deprecated Use `goog.events.BrowserEvent.IE_BUTTON_MAP` instead.
 */
goog.events.BrowserEvent.IEButtonMap = goog.debug.freeze([1, 4, 2]);
/** @const @type {!Array<number>} */ goog.events.BrowserEvent.IE_BUTTON_MAP = goog.events.BrowserEvent.IEButtonMap;
/** @const @type {!Object<number,goog.events.BrowserEvent.PointerType>} */ goog.events.BrowserEvent.IE_POINTER_TYPE_MAP = goog.debug.freeze({2:goog.events.BrowserEvent.PointerType.TOUCH, 3:goog.events.BrowserEvent.PointerType.PEN, 4:goog.events.BrowserEvent.PointerType.MOUSE});
/**
 * @param {Event} e
 * @param {EventTarget=} opt_currentTarget
 */
goog.events.BrowserEvent.prototype.init = function(e, opt_currentTarget) {
  var type = this.type = e.type;
  /** @type {?Touch} */ var relevantTouch = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
  this.target = /** @type {Node} */ (e.target) || e.srcElement;
  this.currentTarget = /** @type {Node} */ (opt_currentTarget);
  var relatedTarget = /** @type {Node} */ (e.relatedTarget);
  if (relatedTarget) {
    if (goog.userAgent.GECKO) {
      if (!goog.reflect.canAccessProperty(relatedTarget, "nodeName")) {
        relatedTarget = null;
      }
    }
  } else {
    if (type == goog.events.EventType.MOUSEOVER) {
      relatedTarget = e.fromElement;
    } else {
      if (type == goog.events.EventType.MOUSEOUT) {
        relatedTarget = e.toElement;
      }
    }
  }
  this.relatedTarget = relatedTarget;
  if (relevantTouch) {
    this.clientX = relevantTouch.clientX !== undefined ? relevantTouch.clientX : relevantTouch.pageX;
    this.clientY = relevantTouch.clientY !== undefined ? relevantTouch.clientY : relevantTouch.pageY;
    this.screenX = relevantTouch.screenX || 0;
    this.screenY = relevantTouch.screenY || 0;
  } else {
    if (goog.events.USE_LAYER_XY_AS_OFFSET_XY) {
      this.offsetX = e.layerX !== undefined ? e.layerX : e.offsetX;
      this.offsetY = e.layerY !== undefined ? e.layerY : e.offsetY;
    } else {
      this.offsetX = goog.userAgent.WEBKIT || e.offsetX !== undefined ? e.offsetX : e.layerX;
      this.offsetY = goog.userAgent.WEBKIT || e.offsetY !== undefined ? e.offsetY : e.layerY;
    }
    this.clientX = e.clientX !== undefined ? e.clientX : e.pageX;
    this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
    this.screenX = e.screenX || 0;
    this.screenY = e.screenY || 0;
  }
  this.button = e.button;
  this.keyCode = e.keyCode || 0;
  this.key = e.key || "";
  this.charCode = e.charCode || (type == "keypress" ? e.keyCode : 0);
  this.ctrlKey = e.ctrlKey;
  this.altKey = e.altKey;
  this.shiftKey = e.shiftKey;
  this.metaKey = e.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey;
  this.pointerId = e.pointerId || 0;
  this.pointerType = goog.events.BrowserEvent.getPointerType_(e);
  this.state = e.state;
  this.event_ = e;
  if (e.defaultPrevented) {
    this.preventDefault();
  }
};
/**
 * @param {goog.events.BrowserEvent.MouseButton} button
 * @return {boolean}
 */
goog.events.BrowserEvent.prototype.isButton = function(button) {
  if (!goog.events.BrowserFeature.HAS_W3C_BUTTON) {
    if (this.type == "click") {
      return button == goog.events.BrowserEvent.MouseButton.LEFT;
    } else {
      return !!(this.event_.button & goog.events.BrowserEvent.IE_BUTTON_MAP[button]);
    }
  } else {
    return this.event_.button == button;
  }
};
/**
 * @return {boolean}
 */
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey);
};
/** @override */ goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  if (this.event_.stopPropagation) {
    this.event_.stopPropagation();
  } else {
    this.event_.cancelBubble = true;
  }
};
/** @override */ goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var be = this.event_;
  if (!be.preventDefault) {
    be.returnValue = false;
    if (goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        var VK_F1 = 112;
        var VK_F12 = 123;
        if (be.ctrlKey || be.keyCode >= VK_F1 && be.keyCode <= VK_F12) {
          be.keyCode = -1;
        }
      } catch (ex) {
      }
    }
  } else {
    be.preventDefault();
  }
};
/**
 * @return {Event}
 */
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_;
};
/**
 * @private
 * @param {!Event} e
 * @return {string}
 */
goog.events.BrowserEvent.getPointerType_ = function(e) {
  if (typeof e.pointerType === "string") {
    return e.pointerType;
  }
  return goog.events.BrowserEvent.IE_POINTER_TYPE_MAP[e.pointerType] || "";
};

//# sourceMappingURL=goog.events.browserevent.js.map
