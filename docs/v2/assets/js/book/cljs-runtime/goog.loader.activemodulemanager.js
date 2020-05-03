goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.loader.activeModuleManager");
  goog.module.declareLegacyNamespace();
  /** @const */ var AbstractModuleManager = goog.require("goog.loader.AbstractModuleManager");
  /** @const */ var asserts = goog.require("goog.asserts");
  /** @type {?AbstractModuleManager} */ var moduleManager = null;
  /** @type {?function():!AbstractModuleManager} */ var getDefault = null;
  /**
   * @return {!AbstractModuleManager}
   */
  function get() {
    if (!moduleManager && getDefault) {
      moduleManager = getDefault();
    }
    asserts.assert(moduleManager != null, "The module manager has not yet been set.");
    return moduleManager;
  }
  /**
   * @param {!AbstractModuleManager} newModuleManager
   */
  function set(newModuleManager) {
    asserts.assert(moduleManager == null, "The module manager cannot be redefined.");
    moduleManager = newModuleManager;
  }
  /**
   * @param {function():!AbstractModuleManager} fn
   */
  function setDefault(fn) {
    getDefault = fn;
  }
  /** @const */ var reset = function() {
    moduleManager = null;
  };
  exports = {get:get, set:set, setDefault:setDefault, reset:reset};
  return exports;
});

//# sourceMappingURL=goog.loader.activemodulemanager.js.map
