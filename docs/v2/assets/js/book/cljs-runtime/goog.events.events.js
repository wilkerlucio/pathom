goog.provide("goog.events");
goog.provide("goog.events.CaptureSimulationMode");
goog.provide("goog.events.Key");
goog.provide("goog.events.ListenableType");
goog.forwardDeclare("goog.debug.ErrorHandler");
goog.forwardDeclare("goog.events.EventWrapper");
goog.require("goog.asserts");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.BrowserFeature");
goog.require("goog.events.Listenable");
goog.require("goog.events.ListenerMap");
/** @typedef {(number|goog.events.ListenableKey)} */ goog.events.Key;
/** @typedef {(EventTarget|goog.events.Listenable)} */ goog.events.ListenableType;
/** @private @const @type {string} */ goog.events.LISTENER_MAP_PROP_ = "closure_lm_" + (Math.random() * 1e6 | 0);
/** @private @const */ goog.events.onString_ = "on";
/** @private @const @dict */ goog.events.onStringMap_ = {};
/** @enum {number} */ goog.events.CaptureSimulationMode = {OFF_AND_FAIL:0, OFF_AND_SILENT:1, ON:2};
/** @define {number} */ goog.events.CAPTURE_SIMULATION_MODE = goog.define("goog.events.CAPTURE_SIMULATION_MODE", 2);
/** @private @type {number} */ goog.events.listenerCountEstimate_ = 0;
/**
 * @param {(EventTarget|goog.events.Listenable)} src
 * @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 * @param {(function(this:T,EVENTOBJ):?|{handleEvent:function(?):?}|null)} listener
 * @param {(boolean|!AddEventListenerOptions)=} opt_options
 * @param {T=} opt_handler
 * @return {goog.events.Key}
 * @template T
 * @template EVENTOBJ
 */
goog.events.listen = function(src, type, listener, opt_options, opt_handler) {
  if (opt_options && opt_options.once) {
    return goog.events.listenOnce(src, type, listener, opt_options, opt_handler);
  }
  if (goog.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      goog.events.listen(src, type[i], listener, opt_options, opt_handler);
    }
    return null;
  }
  listener = goog.events.wrapListener(listener);
  if (goog.events.Listenable.isImplementedBy(src)) {
    var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
    return src.listen(/** @type {(string|!goog.events.EventId)} */ (type), listener, capture, opt_handler);
  } else {
    return goog.events.listen_(/** @type {!EventTarget} */ (src), type, listener, false, opt_options, opt_handler);
  }
};
/**
 * @private
 * @param {EventTarget} src
 * @param {(string|?goog.events.EventId<EVENTOBJ>)} type
 * @param {!Function} listener
 * @param {boolean} callOnce
 * @param {(boolean|!AddEventListenerOptions)=} opt_options
 * @param {Object=} opt_handler
 * @return {goog.events.ListenableKey}
 * @template EVENTOBJ
 */
goog.events.listen_ = function(src, type, listener, callOnce, opt_options, opt_handler) {
  if (!type) {
    throw new Error("Invalid event type");
  }
  var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
  if (capture && !goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
    if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_FAIL) {
      goog.asserts.fail("Can not register capture listener in IE8-.");
      return null;
    } else {
      if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_SILENT) {
        return null;
      }
    }
  }
  var listenerMap = goog.events.getListenerMap_(src);
  if (!listenerMap) {
    src[goog.events.LISTENER_MAP_PROP_] = listenerMap = new goog.events.ListenerMap(src);
  }
  var listenerObj = /** @type {goog.events.Listener} */ (listenerMap.add(type, listener, callOnce, capture, opt_handler));
  if (listenerObj.proxy) {
    return listenerObj;
  }
  var proxy = goog.events.getProxy();
  listenerObj.proxy = proxy;
  proxy.src = src;
  proxy.listener = listenerObj;
  if (src.addEventListener) {
    if (!goog.events.BrowserFeature.PASSIVE_EVENTS) {
      opt_options = capture;
    }
    if (opt_options === undefined) {
      opt_options = false;
    }
    src.addEventListener(type.toString(), proxy, opt_options);
  } else {
    if (src.attachEvent) {
      src.attachEvent(goog.events.getOnString_(type.toString()), proxy);
    } else {
      if (src.addListener && src.removeListener) {
        goog.asserts.assert(type === "change", "MediaQueryList only has a change event");
        src.addListener(proxy);
      } else {
        throw new Error("addEventListener and attachEvent are unavailable.");
      }
    }
  }
  goog.events.listenerCountEstimate_++;
  return listenerObj;
};
/**
 * @return {!Function}
 */
goog.events.getProxy = function() {
  var proxyCallbackFunction = goog.events.handleBrowserEvent_;
  var f = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function(eventObject) {
    return proxyCallbackFunction.call(f.src, f.listener, eventObject);
  } : function(eventObject) {
    var v = proxyCallbackFunction.call(f.src, f.listener, eventObject);
    if (!v) {
      return v;
    }
  };
  return f;
};
/**
 * @param {(EventTarget|goog.events.Listenable)} src
 * @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 * @param {(function(this:T,EVENTOBJ):?|{handleEvent:function(?):?}|null)} listener
 * @param {(boolean|!AddEventListenerOptions)=} opt_options
 * @param {T=} opt_handler
 * @return {goog.events.Key}
 * @template T
 * @template EVENTOBJ
 */
goog.events.listenOnce = function(src, type, listener, opt_options, opt_handler) {
  if (goog.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      goog.events.listenOnce(src, type[i], listener, opt_options, opt_handler);
    }
    return null;
  }
  listener = goog.events.wrapListener(listener);
  if (goog.events.Listenable.isImplementedBy(src)) {
    var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
    return src.listenOnce(/** @type {(string|!goog.events.EventId)} */ (type), listener, capture, opt_handler);
  } else {
    return goog.events.listen_(/** @type {!EventTarget} */ (src), type, listener, true, opt_options, opt_handler);
  }
};
/**
 * @param {(EventTarget|goog.events.Listenable)} src
 * @param {goog.events.EventWrapper} wrapper
 * @param {(function(this:T,?):?|{handleEvent:function(?):?}|null)} listener
 * @param {boolean=} opt_capt
 * @param {T=} opt_handler
 * @template T
 */
goog.events.listenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.listen(src, listener, opt_capt, opt_handler);
};
/**
 * @param {(EventTarget|goog.events.Listenable)} src
 * @param {(string|Array<string>|!goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>)} type
 * @param {(function(?):?|{handleEvent:function(?):?}|null)} listener
 * @param {(boolean|!EventListenerOptions)=} opt_options
 * @param {Object=} opt_handler
 * @return {?boolean}
 * @template EVENTOBJ
 */
goog.events.unlisten = function(src, type, listener, opt_options, opt_handler) {
  if (goog.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      goog.events.unlisten(src, type[i], listener, opt_options, opt_handler);
    }
    return null;
  }
  var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
  listener = goog.events.wrapListener(listener);
  if (goog.events.Listenable.isImplementedBy(src)) {
    return src.unlisten(/** @type {(string|!goog.events.EventId)} */ (type), listener, capture, opt_handler);
  }
  if (!src) {
    return false;
  }
  var listenerMap = goog.events.getListenerMap_(/** @type {!EventTarget} */ (src));
  if (listenerMap) {
    var listenerObj = listenerMap.getListener(/** @type {(string|!goog.events.EventId)} */ (type), listener, capture, opt_handler);
    if (listenerObj) {
      return goog.events.unlistenByKey(listenerObj);
    }
  }
  return false;
};
/**
 * @param {goog.events.Key} key
 * @return {boolean}
 */
goog.events.unlistenByKey = function(key) {
  if (typeof key === "number") {
    return false;
  }
  var listener = key;
  if (!listener || listener.removed) {
    return false;
  }
  var src = listener.src;
  if (goog.events.Listenable.isImplementedBy(src)) {
    return /** @type {!goog.events.Listenable} */ (src).unlistenByKey(listener);
  }
  var type = listener.type;
  var proxy = listener.proxy;
  if (src.removeEventListener) {
    src.removeEventListener(type, proxy, listener.capture);
  } else {
    if (src.detachEvent) {
      src.detachEvent(goog.events.getOnString_(type), proxy);
    } else {
      if (src.addListener && src.removeListener) {
        src.removeListener(proxy);
      }
    }
  }
  goog.events.listenerCountEstimate_--;
  var listenerMap = goog.events.getListenerMap_(/** @type {!EventTarget} */ (src));
  if (listenerMap) {
    listenerMap.removeByKey(listener);
    if (listenerMap.getTypeCount() == 0) {
      listenerMap.src = null;
      src[goog.events.LISTENER_MAP_PROP_] = null;
    }
  } else {
    /** @type {!goog.events.Listener} */ (listener).markAsRemoved();
  }
  return true;
};
/**
 * @param {(EventTarget|goog.events.Listenable)} src
 * @param {goog.events.EventWrapper} wrapper
 * @param {(function(?):?|{handleEvent:function(?):?}|null)} listener
 * @param {boolean=} opt_capt
 * @param {Object=} opt_handler
 */
goog.events.unlistenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.unlisten(src, listener, opt_capt, opt_handler);
};
/**
 * @param {(Object|undefined)} obj
 * @param {(string|!goog.events.EventId)=} opt_type
 * @return {number}
 */
goog.events.removeAll = function(obj, opt_type) {
  if (!obj) {
    return 0;
  }
  if (goog.events.Listenable.isImplementedBy(obj)) {
    return /** @type {?} */ (obj).removeAllListeners(opt_type);
  }
  var listenerMap = goog.events.getListenerMap_(/** @type {!EventTarget} */ (obj));
  if (!listenerMap) {
    return 0;
  }
  var count = 0;
  var typeStr = opt_type && opt_type.toString();
  for (var type in listenerMap.listeners) {
    if (!typeStr || type == typeStr) {
      var listeners = listenerMap.listeners[type].concat();
      for (var i = 0; i < listeners.length; ++i) {
        if (goog.events.unlistenByKey(listeners[i])) {
          ++count;
        }
      }
    }
  }
  return count;
};
/**
 * @param {Object} obj
 * @param {(string|!goog.events.EventId)} type
 * @param {boolean} capture
 * @return {Array<!goog.events.Listener>}
 */
goog.events.getListeners = function(obj, type, capture) {
  if (goog.events.Listenable.isImplementedBy(obj)) {
    return /** @type {!goog.events.Listenable} */ (obj).getListeners(type, capture);
  } else {
    if (!obj) {
      return [];
    }
    var listenerMap = goog.events.getListenerMap_(/** @type {!EventTarget} */ (obj));
    return listenerMap ? listenerMap.getListeners(type, capture) : [];
  }
};
/**
 * @param {(EventTarget|goog.events.Listenable)} src
 * @param {(?string|!goog.events.EventId<EVENTOBJ>)} type
 * @param {(function(EVENTOBJ):?|{handleEvent:function(?):?}|null)} listener
 * @param {boolean=} opt_capt
 * @param {Object=} opt_handler
 * @return {goog.events.ListenableKey}
 * @template EVENTOBJ
 */
goog.events.getListener = function(src, type, listener, opt_capt, opt_handler) {
  type = /** @type {string} */ (type);
  listener = goog.events.wrapListener(listener);
  var capture = !!opt_capt;
  if (goog.events.Listenable.isImplementedBy(src)) {
    return src.getListener(type, listener, capture, opt_handler);
  }
  if (!src) {
    return null;
  }
  var listenerMap = goog.events.getListenerMap_(/** @type {!EventTarget} */ (src));
  if (listenerMap) {
    return listenerMap.getListener(type, listener, capture, opt_handler);
  }
  return null;
};
/**
 * @param {(EventTarget|goog.events.Listenable)} obj
 * @param {(string|!goog.events.EventId)=} opt_type
 * @param {boolean=} opt_capture
 * @return {boolean}
 */
goog.events.hasListener = function(obj, opt_type, opt_capture) {
  if (goog.events.Listenable.isImplementedBy(obj)) {
    return obj.hasListener(opt_type, opt_capture);
  }
  var listenerMap = goog.events.getListenerMap_(/** @type {!EventTarget} */ (obj));
  return !!listenerMap && listenerMap.hasListener(opt_type, opt_capture);
};
/**
 * @param {Object} e
 * @return {string}
 */
goog.events.expose = function(e) {
  var str = [];
  for (var key in e) {
    if (e[key] && e[key].id) {
      str.push(key + " \x3d " + e[key] + " (" + e[key].id + ")");
    } else {
      str.push(key + " \x3d " + e[key]);
    }
  }
  return str.join("\n");
};
/**
 * @private
 * @param {string} type
 * @return {string}
 */
goog.events.getOnString_ = function(type) {
  if (type in goog.events.onStringMap_) {
    return goog.events.onStringMap_[type];
  }
  return goog.events.onStringMap_[type] = goog.events.onString_ + type;
};
/**
 * @param {Object} obj
 * @param {(string|!goog.events.EventId)} type
 * @param {boolean} capture
 * @param {Object} eventObject
 * @return {boolean}
 */
goog.events.fireListeners = function(obj, type, capture, eventObject) {
  if (goog.events.Listenable.isImplementedBy(obj)) {
    return /** @type {!goog.events.Listenable} */ (obj).fireListeners(type, capture, eventObject);
  }
  return goog.events.fireListeners_(obj, type, capture, eventObject);
};
/**
 * @private
 * @param {Object} obj
 * @param {(string|!goog.events.EventId)} type
 * @param {boolean} capture
 * @param {Object} eventObject
 * @return {boolean}
 */
goog.events.fireListeners_ = function(obj, type, capture, eventObject) {
  /** @type {boolean} */ var retval = true;
  var listenerMap = goog.events.getListenerMap_(/** @type {EventTarget} */ (obj));
  if (listenerMap) {
    var listenerArray = listenerMap.listeners[type.toString()];
    if (listenerArray) {
      listenerArray = listenerArray.concat();
      for (var i = 0; i < listenerArray.length; i++) {
        var listener = listenerArray[i];
        if (listener && listener.capture == capture && !listener.removed) {
          var result = goog.events.fireListener(listener, eventObject);
          retval = retval && result !== false;
        }
      }
    }
  }
  return retval;
};
/**
 * @param {goog.events.Listener} listener
 * @param {Object} eventObject
 * @return {*}
 */
goog.events.fireListener = function(listener, eventObject) {
  var listenerFn = listener.listener;
  var listenerHandler = listener.handler || listener.src;
  if (listener.callOnce) {
    goog.events.unlistenByKey(listener);
  }
  return listenerFn.call(listenerHandler, eventObject);
};
/**
 * @return {number}
 * @deprecated This returns estimated count, now that Closure no longer stores a central listener registry. We still return an estimation to keep existing listener-related tests passing. In the near future, this function will be removed.
 */
goog.events.getTotalListenerCount = function() {
  return goog.events.listenerCountEstimate_;
};
/**
 * @param {goog.events.Listenable} src
 * @param {goog.events.EventLike} e
 * @return {boolean}
 */
goog.events.dispatchEvent = function(src, e) {
  goog.asserts.assert(goog.events.Listenable.isImplementedBy(src), "Can not use goog.events.dispatchEvent with " + "non-goog.events.Listenable instance.");
  return src.dispatchEvent(e);
};
/**
 * @param {goog.debug.ErrorHandler} errorHandler
 */
goog.events.protectBrowserEventEntryPoint = function(errorHandler) {
  goog.events.handleBrowserEvent_ = errorHandler.protectEntryPoint(goog.events.handleBrowserEvent_);
};
/**
 * @private
 * @this {EventTarget}
 * @param {goog.events.Listener} listener
 * @param {Event=} opt_evt
 * @return {*}
 */
goog.events.handleBrowserEvent_ = function(listener, opt_evt) {
  if (listener.removed) {
    return true;
  }
  if (!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
    var ieEvent = opt_evt || /** @type {Event} */ (goog.getObjectByName("window.event"));
    var evt = new goog.events.BrowserEvent(ieEvent, this);
    /** @type {*} */ var retval = true;
    if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.ON) {
      if (!goog.events.isMarkedIeEvent_(ieEvent)) {
        goog.events.markIeEvent_(ieEvent);
        var ancestors = [];
        for (var parent = evt.currentTarget; parent; parent = parent.parentNode) {
          ancestors.push(parent);
        }
        var type = listener.type;
        for (var i = ancestors.length - 1; !evt.propagationStopped_ && i >= 0; i--) {
          evt.currentTarget = ancestors[i];
          var result = goog.events.fireListeners_(ancestors[i], type, true, evt);
          retval = retval && result;
        }
        for (var i = 0; !evt.propagationStopped_ && i < ancestors.length; i++) {
          evt.currentTarget = ancestors[i];
          var result = goog.events.fireListeners_(ancestors[i], type, false, evt);
          retval = retval && result;
        }
      }
    } else {
      retval = goog.events.fireListener(listener, evt);
    }
    return retval;
  }
  return goog.events.fireListener(listener, new goog.events.BrowserEvent(opt_evt, this));
};
/**
 * @private
 * @param {Event} e
 */
goog.events.markIeEvent_ = function(e) {
  var useReturnValue = false;
  if (e.keyCode == 0) {
    try {
      e.keyCode = -1;
      return;
    } catch (ex) {
      useReturnValue = true;
    }
  }
  if (useReturnValue || /** @type {(boolean|undefined)} */ (e.returnValue) == undefined) {
    e.returnValue = true;
  }
};
/**
 * @private
 * @param {Event} e
 * @return {boolean}
 */
goog.events.isMarkedIeEvent_ = function(e) {
  return e.keyCode < 0 || e.returnValue != undefined;
};
/** @private @type {number} */ goog.events.uniqueIdCounter_ = 0;
/**
 * @idGenerator {unique}
 * @param {string} identifier
 * @return {string}
 */
goog.events.getUniqueId = function(identifier) {
  return identifier + "_" + goog.events.uniqueIdCounter_++;
};
/**
 * @private
 * @param {EventTarget} src
 * @return {goog.events.ListenerMap}
 */
goog.events.getListenerMap_ = function(src) {
  var listenerMap = src[goog.events.LISTENER_MAP_PROP_];
  return listenerMap instanceof goog.events.ListenerMap ? listenerMap : null;
};
/** @private @const @type {string} */ goog.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (Math.random() * 1e9 >>> 0);
/**
 * @param {(Object|Function)} listener
 * @return {!Function}
 */
goog.events.wrapListener = function(listener) {
  goog.asserts.assert(listener, "Listener can not be null.");
  if (goog.isFunction(listener)) {
    return listener;
  }
  goog.asserts.assert(listener.handleEvent, "An object listener must have handleEvent method.");
  if (!listener[goog.events.LISTENER_WRAPPER_PROP_]) {
    listener[goog.events.LISTENER_WRAPPER_PROP_] = function(e) {
      return /** @type {?} */ (listener).handleEvent(e);
    };
  }
  return listener[goog.events.LISTENER_WRAPPER_PROP_];
};
goog.debug.entryPointRegistry.register(/**
 * @param {function(!Function):!Function} transformer
 */
function(transformer) {
  goog.events.handleBrowserEvent_ = transformer(goog.events.handleBrowserEvent_);
});

//# sourceMappingURL=goog.events.events.js.map
