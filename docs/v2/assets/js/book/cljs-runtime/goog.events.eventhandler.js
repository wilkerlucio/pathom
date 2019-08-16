goog.provide("goog.events.EventHandler");
goog.require("goog.Disposable");
goog.require("goog.events");
goog.require("goog.object");
goog.forwardDeclare("goog.events.EventWrapper");
/**
 @constructor
 @extends {goog.Disposable}
 @param {SCOPE=} opt_scope
 @template SCOPE
 */
goog.events.EventHandler = function(opt_scope) {
  goog.Disposable.call(this);
  this.handler_ = opt_scope;
  /** @private @type {!Object<?,!goog.events.Key>} */ this.keys_ = {};
};
goog.inherits(goog.events.EventHandler, goog.Disposable);
/** @private @const @type {!Array<string>} */ goog.events.EventHandler.typeArray_ = [];
/**
 @this {THIS}
 @param {goog.events.ListenableType} src
 @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 @param {(function(this:SCOPE,EVENTOBJ):?|{handleEvent:function(?):?}|null)=} opt_fn
 @param {(boolean|!AddEventListenerOptions)=} opt_options
 @return {THIS}
 @template EVENTOBJ,THIS
 */
goog.events.EventHandler.prototype.listen = function(src, type, opt_fn, opt_options) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  return self.listen_(src, type, opt_fn, opt_options);
};
/**
 @this {THIS}
 @param {goog.events.ListenableType} src
 @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 @param {(function(this:T,EVENTOBJ):?|{handleEvent:function(this:T,?):?}|null|undefined)} fn
 @param {(boolean|!AddEventListenerOptions|undefined)} options
 @param {T} scope
 @return {THIS}
 @template T,EVENTOBJ,THIS
 */
goog.events.EventHandler.prototype.listenWithScope = function(src, type, fn, options, scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  return self.listen_(src, type, fn, options, scope);
};
/**
 @private
 @this {THIS}
 @param {goog.events.ListenableType} src
 @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 @param {(function(EVENTOBJ):?|{handleEvent:function(?):?}|null)=} opt_fn
 @param {(boolean|!AddEventListenerOptions)=} opt_options
 @param {Object=} opt_scope
 @return {THIS}
 @template EVENTOBJ,THIS
 */
goog.events.EventHandler.prototype.listen_ = function(src, type, opt_fn, opt_options, opt_scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  if (!goog.isArray(type)) {
    if (type) {
      goog.events.EventHandler.typeArray_[0] = type.toString();
    }
    type = goog.events.EventHandler.typeArray_;
  }
  for (var i = 0; i < type.length; i++) {
    var listenerObj = goog.events.listen(src, type[i], opt_fn || self.handleEvent, opt_options || false, opt_scope || self.handler_ || self);
    if (!listenerObj) {
      return self;
    }
    var key = listenerObj.key;
    self.keys_[key] = listenerObj;
  }
  return self;
};
/**
 @this {THIS}
 @param {goog.events.ListenableType} src
 @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 @param {(function(this:SCOPE,EVENTOBJ):?|{handleEvent:function(?):?}|null)=} opt_fn
 @param {(boolean|!AddEventListenerOptions)=} opt_options
 @return {THIS}
 @template EVENTOBJ,THIS
 */
goog.events.EventHandler.prototype.listenOnce = function(src, type, opt_fn, opt_options) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  return self.listenOnce_(src, type, opt_fn, opt_options);
};
/**
 @this {THIS}
 @param {goog.events.ListenableType} src
 @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 @param {(function(this:T,EVENTOBJ):?|{handleEvent:function(this:T,?):?}|null|undefined)} fn
 @param {(boolean|undefined)} capture
 @param {T} scope
 @return {THIS}
 @template T,EVENTOBJ,THIS
 */
goog.events.EventHandler.prototype.listenOnceWithScope = function(src, type, fn, capture, scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  return self.listenOnce_(src, type, fn, capture, scope);
};
/**
 @private
 @this {THIS}
 @param {goog.events.ListenableType} src
 @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 @param {(function(EVENTOBJ):?|{handleEvent:function(?):?}|null)=} opt_fn
 @param {(boolean|!AddEventListenerOptions)=} opt_options
 @param {Object=} opt_scope
 @return {THIS}
 @template EVENTOBJ,THIS
 */
goog.events.EventHandler.prototype.listenOnce_ = function(src, type, opt_fn, opt_options, opt_scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  if (goog.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      self.listenOnce_(src, type[i], opt_fn, opt_options, opt_scope);
    }
  } else {
    var listenerObj = goog.events.listenOnce(src, type, opt_fn || self.handleEvent, opt_options, opt_scope || self.handler_ || self);
    if (!listenerObj) {
      return self;
    }
    var key = listenerObj.key;
    self.keys_[key] = listenerObj;
  }
  return self;
};
/**
 @this {THIS}
 @param {(EventTarget|goog.events.EventTarget)} src
 @param {goog.events.EventWrapper} wrapper
 @param {(function(this:SCOPE,?):?|{handleEvent:function(?):?}|null)} listener
 @param {boolean=} opt_capt
 @return {THIS}
 @template THIS
 */
goog.events.EventHandler.prototype.listenWithWrapper = function(src, wrapper, listener, opt_capt) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  return self.listenWithWrapper_(src, wrapper, listener, opt_capt);
};
/**
 @this {THIS}
 @param {(EventTarget|goog.events.EventTarget)} src
 @param {goog.events.EventWrapper} wrapper
 @param {(function(this:T,?):?|{handleEvent:function(this:T,?):?}|null)} listener
 @param {(boolean|undefined)} capture
 @param {T} scope
 @return {THIS}
 @template T,THIS
 */
goog.events.EventHandler.prototype.listenWithWrapperAndScope = function(src, wrapper, listener, capture, scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  return self.listenWithWrapper_(src, wrapper, listener, capture, scope);
};
/**
 @private
 @this {THIS}
 @param {(EventTarget|goog.events.EventTarget)} src
 @param {goog.events.EventWrapper} wrapper
 @param {(function(?):?|{handleEvent:function(?):?}|null)} listener
 @param {boolean=} opt_capt
 @param {Object=} opt_scope
 @return {THIS}
 @template THIS
 */
goog.events.EventHandler.prototype.listenWithWrapper_ = function(src, wrapper, listener, opt_capt, opt_scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  wrapper.listen(src, listener, opt_capt, opt_scope || self.handler_ || self, self);
  return self;
};
/**
 @return {number}
 */
goog.events.EventHandler.prototype.getListenerCount = function() {
  var count = 0;
  for (var key in this.keys_) {
    if (Object.prototype.hasOwnProperty.call(this.keys_, key)) {
      count++;
    }
  }
  return count;
};
/**
 @this {THIS}
 @param {goog.events.ListenableType} src
 @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 @param {(function(this:?,EVENTOBJ):?|{handleEvent:function(?):?}|null)=} opt_fn
 @param {(boolean|!EventListenerOptions)=} opt_options
 @param {Object=} opt_scope
 @return {THIS}
 @template EVENTOBJ,THIS
 */
goog.events.EventHandler.prototype.unlisten = function(src, type, opt_fn, opt_options, opt_scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  if (goog.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      self.unlisten(src, type[i], opt_fn, opt_options, opt_scope);
    }
  } else {
    var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
    var listener = goog.events.getListener(src, type, opt_fn || self.handleEvent, capture, opt_scope || self.handler_ || self);
    if (listener) {
      goog.events.unlistenByKey(listener);
      delete self.keys_[listener.key];
    }
  }
  return self;
};
/**
 @this {THIS}
 @param {(EventTarget|goog.events.EventTarget)} src
 @param {goog.events.EventWrapper} wrapper
 @param {(function(?):?|{handleEvent:function(?):?}|null)} listener
 @param {boolean=} opt_capt
 @param {Object=} opt_scope
 @return {THIS}
 @template THIS
 */
goog.events.EventHandler.prototype.unlistenWithWrapper = function(src, wrapper, listener, opt_capt, opt_scope) {
  var self = /** @type {!goog.events.EventHandler} */ (this);
  wrapper.unlisten(src, listener, opt_capt, opt_scope || self.handler_ || self, self);
  return self;
};
goog.events.EventHandler.prototype.removeAll = function() {
  goog.object.forEach(this.keys_, function(listenerObj, key) {
    if (this.keys_.hasOwnProperty(key)) {
      goog.events.unlistenByKey(listenerObj);
    }
  }, this);
  this.keys_ = {};
};
/** @protected @override */ goog.events.EventHandler.prototype.disposeInternal = function() {
  goog.events.EventHandler.superClass_.disposeInternal.call(this);
  this.removeAll();
};
/**
 @param {goog.events.Event} e
 */
goog.events.EventHandler.prototype.handleEvent = function(e) {
  throw new Error("EventHandler.handleEvent not implemented");
};

//# sourceMappingURL=goog.events.eventhandler.js.map
