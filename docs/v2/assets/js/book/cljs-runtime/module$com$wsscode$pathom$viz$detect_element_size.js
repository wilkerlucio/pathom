var attachEvent$$module$com$wsscode$pathom$viz$detect_element_size = document.attachEvent;
var isIE$$module$com$wsscode$pathom$viz$detect_element_size = navigator.userAgent.match(/Trident/);
var requestFrame$$module$com$wsscode$pathom$viz$detect_element_size = function() {
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
    return window.setTimeout(fn, 20);
  };
  return function(fn) {
    return raf(fn);
  };
}();
var cancelFrame$$module$com$wsscode$pathom$viz$detect_element_size = function() {
  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
  return function(id) {
    return cancel(id);
  };
}();
function resizeListener$$module$com$wsscode$pathom$viz$detect_element_size(e) {
  var win = e.target || e.srcElement;
  if (win.__resizeRAF__) {
    cancelFrame$$module$com$wsscode$pathom$viz$detect_element_size(win.__resizeRAF__);
  }
  win.__resizeRAF__ = requestFrame$$module$com$wsscode$pathom$viz$detect_element_size(function() {
    var trigger = win.__resizeTrigger__;
    trigger.__resizeListeners__.forEach(function(fn) {
      fn.call(trigger, e);
    });
  });
}
function objectLoad$$module$com$wsscode$pathom$viz$detect_element_size(e) {
  this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
  this.contentDocument.defaultView.addEventListener("resize", resizeListener$$module$com$wsscode$pathom$viz$detect_element_size);
}
function addResizeListener$$module$com$wsscode$pathom$viz$detect_element_size(element, fn) {
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    if (attachEvent$$module$com$wsscode$pathom$viz$detect_element_size) {
      element.__resizeTrigger__ = element;
      element.attachEvent("onresize", resizeListener$$module$com$wsscode$pathom$viz$detect_element_size);
    } else {
      if (getComputedStyle(element).position == "static") {
        element.style.position = "relative";
      }
      var obj = element.__resizeTrigger__ = document.createElement("object");
      obj.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
      obj.__resizeElement__ = element;
      obj.onload = objectLoad$$module$com$wsscode$pathom$viz$detect_element_size;
      obj.type = "text/html";
      if (isIE$$module$com$wsscode$pathom$viz$detect_element_size) {
        element.appendChild(obj);
      }
      obj.data = "about:blank";
      if (!isIE$$module$com$wsscode$pathom$viz$detect_element_size) {
        element.appendChild(obj);
      }
    }
  }
  element.__resizeListeners__.push(fn);
}
function removeResizeListener$$module$com$wsscode$pathom$viz$detect_element_size(element, fn) {
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    if (attachEvent$$module$com$wsscode$pathom$viz$detect_element_size) {
      element.detachEvent("onresize", resizeListener$$module$com$wsscode$pathom$viz$detect_element_size);
    } else {
      element.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize", resizeListener$$module$com$wsscode$pathom$viz$detect_element_size);
      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
    }
  }
}
/** @const */ var module$com$wsscode$pathom$viz$detect_element_size = {};
/** @const */ module$com$wsscode$pathom$viz$detect_element_size.addResizeListener = addResizeListener$$module$com$wsscode$pathom$viz$detect_element_size;
/** @const */ module$com$wsscode$pathom$viz$detect_element_size.removeResizeListener = removeResizeListener$$module$com$wsscode$pathom$viz$detect_element_size;

$CLJS.module$com$wsscode$pathom$viz$detect_element_size=module$com$wsscode$pathom$viz$detect_element_size;
//# sourceMappingURL=module$com$wsscode$pathom$viz$detect_element_size.js.map
