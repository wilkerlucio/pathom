goog.provide("goog.events.Listenable");
goog.provide("goog.events.ListenableKey");
goog.forwardDeclare("goog.events.EventLike");
goog.forwardDeclare("goog.events.EventTarget");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.events.EventId");
/** @interface */ goog.events.Listenable = function() {
};
/** @const @type {string} */ goog.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (Math.random() * 1e6 | 0);
/**
 * @param {function(new:goog.events.Listenable,...)} cls
 */
goog.events.Listenable.addImplementation = function(cls) {
  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;
};
/**
 * @param {Object} obj
 * @return {boolean}
 */
goog.events.Listenable.isImplementedBy = function(obj) {
  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);
};
/**
 * @param {(string|!goog.events.EventId<EVENTOBJ>)} type
 * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener
 * @param {boolean=} opt_useCapture
 * @param {SCOPE=} opt_listenerScope
 * @return {!goog.events.ListenableKey}
 * @template SCOPE
 * @template EVENTOBJ
 */
goog.events.Listenable.prototype.listen;
/**
 * @param {(string|!goog.events.EventId<EVENTOBJ>)} type
 * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener
 * @param {boolean=} opt_useCapture
 * @param {SCOPE=} opt_listenerScope
 * @return {!goog.events.ListenableKey}
 * @template SCOPE
 * @template EVENTOBJ
 */
goog.events.Listenable.prototype.listenOnce;
/**
 * @param {(string|!goog.events.EventId<EVENTOBJ>)} type
 * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener
 * @param {boolean=} opt_useCapture
 * @param {SCOPE=} opt_listenerScope
 * @return {boolean}
 * @template SCOPE
 * @template EVENTOBJ
 */
goog.events.Listenable.prototype.unlisten;
/**
 * @param {!goog.events.ListenableKey} key
 * @return {boolean}
 */
goog.events.Listenable.prototype.unlistenByKey;
/**
 * @param {goog.events.EventLike} e
 * @return {boolean}
 */
goog.events.Listenable.prototype.dispatchEvent;
/**
 * @param {string=} opt_type
 * @return {number}
 */
goog.events.Listenable.prototype.removeAllListeners;
/**
 * @return {goog.events.Listenable}
 */
goog.events.Listenable.prototype.getParentEventTarget;
/**
 * @param {(string|!goog.events.EventId<EVENTOBJ>)} type
 * @param {boolean} capture
 * @param {EVENTOBJ} eventObject
 * @return {boolean}
 * @template EVENTOBJ
 */
goog.events.Listenable.prototype.fireListeners;
/**
 * @param {(string|!goog.events.EventId)} type
 * @param {boolean} capture
 * @return {!Array<!goog.events.ListenableKey>}
 * @template EVENTOBJ
 */
goog.events.Listenable.prototype.getListeners;
/**
 * @param {(string|!goog.events.EventId<EVENTOBJ>)} type
 * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener
 * @param {boolean} capture
 * @param {SCOPE=} opt_listenerScope
 * @return {goog.events.ListenableKey}
 * @template SCOPE
 * @template EVENTOBJ
 */
goog.events.Listenable.prototype.getListener;
/**
 * @param {(string|!goog.events.EventId<EVENTOBJ>)=} opt_type
 * @param {boolean=} opt_capture
 * @return {boolean}
 * @template EVENTOBJ
 */
goog.events.Listenable.prototype.hasListener;
/** @interface */ goog.events.ListenableKey = function() {
};
/** @private @type {number} */ goog.events.ListenableKey.counter_ = 0;
/**
 * @return {number}
 */
goog.events.ListenableKey.reserveKey = function() {
  return ++goog.events.ListenableKey.counter_;
};
/** @type {(Object|goog.events.Listenable|goog.events.EventTarget)} */ goog.events.ListenableKey.prototype.src;
/** @type {string} */ goog.events.ListenableKey.prototype.type;
/** @type {(function(?):?|{handleEvent:function(?):?}|null)} */ goog.events.ListenableKey.prototype.listener;
/** @type {boolean} */ goog.events.ListenableKey.prototype.capture;
/** @type {(Object|undefined)} */ goog.events.ListenableKey.prototype.handler;
/** @type {number} */ goog.events.ListenableKey.prototype.key;

//# sourceMappingURL=goog.events.listenable.js.map
