goog.provide("goog.window");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.labs.userAgent.platform");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.require("goog.userAgent");
/** @type {number} */ goog.window.DEFAULT_POPUP_HEIGHT = 500;
/** @type {number} */ goog.window.DEFAULT_POPUP_WIDTH = 690;
/** @type {string} */ goog.window.DEFAULT_POPUP_TARGET = "google_popup";
/**
 * @private
 * @return {!Window}
 * @suppress {checkTypes}
 */
goog.window.createFakeWindow_ = function() {
  return (/** @type {!Window} */ ({}));
};
/**
 * @param {(!goog.html.SafeUrl|string|!Object|null)} linkRef
 * @param {?Object=} opt_options
 * @param {?Window=} opt_parentWin
 * @return {?Window}
 */
goog.window.open = function(linkRef, opt_options, opt_parentWin) {
  if (!opt_options) {
    opt_options = {};
  }
  var parentWin = opt_parentWin || window;
  /** @type {!goog.html.SafeUrl} */ var safeLinkRef;
  if (linkRef instanceof goog.html.SafeUrl) {
    safeLinkRef = linkRef;
  } else {
    /**
     * @type {(string|!goog.string.TypedString)}
     * @suppress {missingProperties}
     */
    var url = typeof linkRef.href != "undefined" ? linkRef.href : String(linkRef);
    safeLinkRef = goog.html.SafeUrl.sanitize(url);
  }
  /**
   * @suppress {strictMissingProperties}
   */
  var target = opt_options.target || linkRef.target;
  var sb = [];
  for (var option in opt_options) {
    switch(option) {
      case "width":
      case "height":
      case "top":
      case "left":
        sb.push(option + "\x3d" + opt_options[option]);
        break;
      case "target":
      case "noopener":
      case "noreferrer":
        break;
      default:
        sb.push(option + "\x3d" + (opt_options[option] ? 1 : 0));
    }
  }
  var optionString = sb.join(",");
  var newWin;
  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator && parentWin.navigator["standalone"] && target && target != "_self") {
    var a = goog.dom.createElement(goog.dom.TagName.A);
    goog.dom.safe.setAnchorHref(a, safeLinkRef);
    a.setAttribute("target", target);
    if (opt_options["noreferrer"]) {
      a.setAttribute("rel", "noreferrer");
    }
    var click = /** @type {!MouseEvent} */ (document.createEvent("MouseEvent"));
    click.initMouseEvent("click", true, true, parentWin, 1);
    a.dispatchEvent(click);
    newWin = goog.window.createFakeWindow_();
  } else {
    if (opt_options["noreferrer"]) {
      newWin = parentWin.open("", target, optionString);
      var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);
      if (newWin) {
        if (goog.userAgent.EDGE_OR_IE) {
          if (goog.string.contains(sanitizedLinkRef, ";")) {
            sanitizedLinkRef = "'" + sanitizedLinkRef.replace(/'/g, "%27") + "'";
          }
        }
        newWin.opener = null;
        var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("b/12014412, meta tag with sanitized URL"), '\x3cmeta name\x3d"referrer" content\x3d"no-referrer"\x3e' + '\x3cmeta http-equiv\x3d"refresh" content\x3d"0; url\x3d' + goog.string.htmlEscape(sanitizedLinkRef) + '"\x3e');
        var newDoc = newWin.document;
        if (newDoc) {
          goog.dom.safe.documentWrite(newDoc, safeHtml);
          newDoc.close();
        }
      }
    } else {
      newWin = parentWin.open(goog.html.SafeUrl.unwrap(safeLinkRef), target, optionString);
      if (newWin && opt_options["noopener"]) {
        newWin.opener = null;
      }
    }
  }
  return newWin;
};
/**
 * @param {string=} opt_message
 * @param {?Object=} opt_options
 * @param {?Window=} opt_parentWin
 * @return {?Window}
 */
goog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {
  var loadingMessage;
  if (!opt_message) {
    loadingMessage = "";
  } else {
    loadingMessage = goog.string.escapeString(goog.string.htmlEscape(opt_message));
  }
  var url = goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("b/12014412, encoded string in javascript: URL"), 'javascript:"' + encodeURI(loadingMessage) + '"');
  return (/** @type {?Window} */ (goog.window.open(url, opt_options, opt_parentWin)));
};
/**
 * @param {(?goog.html.SafeUrl|string|?Object)} linkRef
 * @param {?Object=} opt_options
 * @return {boolean}
 */
goog.window.popup = function(linkRef, opt_options) {
  if (!opt_options) {
    opt_options = {};
  }
  opt_options["target"] = opt_options["target"] || linkRef["target"] || goog.window.DEFAULT_POPUP_TARGET;
  opt_options["width"] = opt_options["width"] || goog.window.DEFAULT_POPUP_WIDTH;
  opt_options["height"] = opt_options["height"] || goog.window.DEFAULT_POPUP_HEIGHT;
  var newWin = goog.window.open(linkRef, opt_options);
  if (!newWin) {
    return true;
  }
  newWin.focus();
  return false;
};

//# sourceMappingURL=goog.window.window.js.map
