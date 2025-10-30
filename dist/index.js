(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      new EventSource(`http://localhost:3000/esbuild`).addEventListener(
        "change",
        () => location.reload()
      );
    }
  });

  // node_modules/rangetouch/dist/rangetouch.js
  var require_rangetouch = __commonJS({
    "node_modules/rangetouch/dist/rangetouch.js"(exports, module) {
      init_live_reload();
      !function(e, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define("RangeTouch", t2) : (e = e || self).RangeTouch = t2();
      }(exports, function() {
        "use strict";
        function e(e2, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
          }
        }
        function t2(e2, t3, n2) {
          return t3 in e2 ? Object.defineProperty(e2, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t3] = n2, e2;
        }
        function n(e2, t3) {
          var n2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(e2);
            t3 && (r2 = r2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function r(e2) {
          for (var r2 = 1; r2 < arguments.length; r2++) {
            var i3 = null != arguments[r2] ? arguments[r2] : {};
            r2 % 2 ? n(Object(i3), true).forEach(function(n2) {
              t2(e2, n2, i3[n2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(i3)) : n(Object(i3)).forEach(function(t3) {
              Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(i3, t3));
            });
          }
          return e2;
        }
        var i2 = { addCSS: true, thumbWidth: 15, watch: true };
        function u(e2, t3) {
          return function() {
            return Array.from(document.querySelectorAll(t3)).includes(this);
          }.call(e2, t3);
        }
        var o = function(e2) {
          return null != e2 ? e2.constructor : null;
        }, c = function(e2, t3) {
          return !!(e2 && t3 && e2 instanceof t3);
        }, l = function(e2) {
          return null == e2;
        }, a = function(e2) {
          return o(e2) === Object;
        }, s = function(e2) {
          return o(e2) === String;
        }, f = function(e2) {
          return Array.isArray(e2);
        }, h = function(e2) {
          return c(e2, NodeList);
        }, d = s, y = f, b = h, m = function(e2) {
          return c(e2, Element);
        }, g = function(e2) {
          return c(e2, Event);
        }, p = function(e2) {
          return l(e2) || (s(e2) || f(e2) || h(e2)) && !e2.length || a(e2) && !Object.keys(e2).length;
        };
        function v(e2, t3) {
          if (1 > t3) {
            var n2 = function(e3) {
              var t4 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t4 ? Math.max(0, (t4[1] ? t4[1].length : 0) - (t4[2] ? +t4[2] : 0)) : 0;
            }(t3);
            return parseFloat(e2.toFixed(n2));
          }
          return Math.round(e2 / t3) * t3;
        }
        return function() {
          function t3(e2, n3) {
            (function(e3, t4) {
              if (!(e3 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            })(this, t3), m(e2) ? this.element = e2 : d(e2) && (this.element = document.querySelector(e2)), m(this.element) && p(this.element.rangeTouch) && (this.config = r({}, i2, {}, n3), this.init());
          }
          return n2 = t3, c2 = [{ key: "setup", value: function(e2) {
            var n3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, o3 = null;
            if (p(e2) || d(e2) ? o3 = Array.from(document.querySelectorAll(d(e2) ? e2 : 'input[type="range"]')) : m(e2) ? o3 = [e2] : b(e2) ? o3 = Array.from(e2) : y(e2) && (o3 = e2.filter(m)), p(o3)) return null;
            var c3 = r({}, i2, {}, n3);
            if (d(e2) && c3.watch) {
              var l2 = new MutationObserver(function(n4) {
                Array.from(n4).forEach(function(n5) {
                  Array.from(n5.addedNodes).forEach(function(n6) {
                    m(n6) && u(n6, e2) && new t3(n6, c3);
                  });
                });
              });
              l2.observe(document.body, { childList: true, subtree: true });
            }
            return o3.map(function(e3) {
              return new t3(e3, n3);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }], (o2 = [{ key: "init", value: function() {
            t3.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            t3.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e2) {
            var t4 = this, n3 = e2 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e3) {
              t4.element[n3](e3, function(e4) {
                return t4.set(e4);
              }, false);
            });
          } }, { key: "get", value: function(e2) {
            if (!t3.enabled || !g(e2)) return null;
            var n3, r2 = e2.target, i3 = e2.changedTouches[0], u2 = parseFloat(r2.getAttribute("min")) || 0, o3 = parseFloat(r2.getAttribute("max")) || 100, c3 = parseFloat(r2.getAttribute("step")) || 1, l2 = r2.getBoundingClientRect(), a2 = 100 / l2.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (n3 = 100 / l2.width * (i3.clientX - l2.left)) ? n3 = 0 : 100 < n3 && (n3 = 100), 50 > n3 ? n3 -= (100 - 2 * n3) * a2 : 50 < n3 && (n3 += 2 * (n3 - 50) * a2), u2 + v(n3 / 100 * (o3 - u2), c3);
          } }, { key: "set", value: function(e2) {
            t3.enabled && g(e2) && !e2.target.disabled && (e2.preventDefault(), e2.target.value = this.get(e2), function(e3, t4) {
              if (e3 && t4) {
                var n3 = new Event(t4, { bubbles: true });
                e3.dispatchEvent(n3);
              }
            }(e2.target, "touchend" === e2.type ? "change" : "input"));
          } }]) && e(n2.prototype, o2), c2 && e(n2, c2), t3;
          var n2, o2, c2;
        }();
      });
    }
  });

  // node_modules/loadjs/dist/loadjs.umd.js
  var require_loadjs_umd = __commonJS({
    "node_modules/loadjs/dist/loadjs.umd.js"(exports, module) {
      init_live_reload();
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.loadjs = factory();
        }
      })(exports, function() {
        var devnull = function() {
        }, bundleIdCache = {}, bundleResultCache = {}, bundleCallbackQueue = {};
        function subscribe(bundleIds, callbackFn) {
          bundleIds = bundleIds.push ? bundleIds : [bundleIds];
          var depsNotFound = [], i2 = bundleIds.length, numWaiting = i2, fn, bundleId, r, q;
          fn = function(bundleId2, pathsNotFound) {
            if (pathsNotFound.length) depsNotFound.push(bundleId2);
            numWaiting--;
            if (!numWaiting) callbackFn(depsNotFound);
          };
          while (i2--) {
            bundleId = bundleIds[i2];
            r = bundleResultCache[bundleId];
            if (r) {
              fn(bundleId, r);
              continue;
            }
            q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
            q.push(fn);
          }
        }
        function publish(bundleId, pathsNotFound) {
          if (!bundleId) return;
          var q = bundleCallbackQueue[bundleId];
          bundleResultCache[bundleId] = pathsNotFound;
          if (!q) return;
          while (q.length) {
            q[0](bundleId, pathsNotFound);
            q.splice(0, 1);
          }
        }
        function executeCallbacks(args, depsNotFound) {
          if (args.call) args = { success: args };
          if (depsNotFound.length) (args.error || devnull)(depsNotFound);
          else (args.success || devnull)(args);
        }
        function loadFile(path, callbackFn, args, numTries) {
          var doc = document, async = args.async, maxTries = (args.numRetries || 0) + 1, beforeCallbackFn = args.before || devnull, pathname = path.replace(/[\?|#].*$/, ""), pathStripped = path.replace(/^(css|img|module|nomodule)!/, ""), isLegacyIECss, hasModuleSupport, e;
          numTries = numTries || 0;
          if (/(^css!|\.css$)/.test(pathname)) {
            e = doc.createElement("link");
            e.rel = "stylesheet";
            e.href = pathStripped;
            isLegacyIECss = "hideFocus" in e;
            if (isLegacyIECss && e.relList) {
              isLegacyIECss = 0;
              e.rel = "preload";
              e.as = "style";
            }
          } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
            e = doc.createElement("img");
            e.src = pathStripped;
          } else {
            e = doc.createElement("script");
            e.src = pathStripped;
            e.async = async === void 0 ? true : async;
            hasModuleSupport = "noModule" in e;
            if (/^module!/.test(pathname)) {
              if (!hasModuleSupport) return callbackFn(path, "l");
              e.type = "module";
            } else if (/^nomodule!/.test(pathname) && hasModuleSupport) return callbackFn(path, "l");
          }
          e.onload = e.onerror = e.onbeforeload = function(ev) {
            var result = ev.type[0];
            if (isLegacyIECss) {
              try {
                if (!e.sheet.cssText.length) result = "e";
              } catch (x) {
                if (x.code != 18) result = "e";
              }
            }
            if (result == "e") {
              numTries += 1;
              if (numTries < maxTries) {
                return loadFile(path, callbackFn, args, numTries);
              }
            } else if (e.rel == "preload" && e.as == "style") {
              return e.rel = "stylesheet";
            }
            callbackFn(path, result, ev.defaultPrevented);
          };
          if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
        }
        function loadFiles(paths, callbackFn, args) {
          paths = paths.push ? paths : [paths];
          var numWaiting = paths.length, x = numWaiting, pathsNotFound = [], fn, i2;
          fn = function(path, result, defaultPrevented) {
            if (result == "e") pathsNotFound.push(path);
            if (result == "b") {
              if (defaultPrevented) pathsNotFound.push(path);
              else return;
            }
            numWaiting--;
            if (!numWaiting) callbackFn(pathsNotFound);
          };
          for (i2 = 0; i2 < x; i2++) loadFile(paths[i2], fn, args);
        }
        function loadjs2(paths, arg1, arg2) {
          var bundleId, args;
          if (arg1 && arg1.trim) bundleId = arg1;
          args = (bundleId ? arg2 : arg1) || {};
          if (bundleId) {
            if (bundleId in bundleIdCache) {
              throw "LoadJS";
            } else {
              bundleIdCache[bundleId] = true;
            }
          }
          function loadFn(resolve, reject) {
            loadFiles(paths, function(pathsNotFound) {
              executeCallbacks(args, pathsNotFound);
              if (resolve) {
                executeCallbacks({ success: resolve, error: reject }, pathsNotFound);
              }
              publish(bundleId, pathsNotFound);
            }, args);
          }
          if (args.returnPromise) return new Promise(loadFn);
          else loadFn();
        }
        loadjs2.ready = function ready2(deps, args) {
          subscribe(deps, function(depsNotFound) {
            executeCallbacks(args, depsNotFound);
          });
          return loadjs2;
        };
        loadjs2.done = function done(bundleId) {
          publish(bundleId, []);
        };
        loadjs2.reset = function reset() {
          bundleIdCache = {};
          bundleResultCache = {};
          bundleCallbackQueue = {};
        };
        loadjs2.isDefined = function isDefined(bundleId) {
          return bundleId in bundleIdCache;
        };
        return loadjs2;
      });
    }
  });

  // src/index.js
  init_live_reload();

  // src/utilities.js
  init_live_reload();
  var attr = function(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  };
  var attrIfSet = function(item2, attributeName, defaultValue) {
    const hasAttribute = item2.hasAttribute(attributeName);
    const attributeValue = attr(defaultValue, item2.getAttribute(attributeName));
    if (hasAttribute) {
      return attributeValue;
    } else {
      return;
    }
  };
  var checkBreakpoints = function(item2, animationID, gsapContext) {
    if (!item2 || !animationID || !gsapContext) {
      console.error(`GSAP checkBreakpoints Error in ${animationID}`);
      return;
    }
    let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
    if (isMobile === void 0 || isTablet === void 0 || isDesktop === void 0) {
      console.error(`GSAP Match Media Conditions Not Defined`);
      return;
    }
    const RUN_DESKTOP = `data-ix-${animationID}-desktop`;
    const RUN_TABLET = `data-ix-${animationID}-tablet`;
    const RUN_MOBILE = `data-ix-${animationID}-mobile`;
    const RUN_ALL = `data-ix-${animationID}-run`;
    runAll = attr(true, item2.getAttribute(RUN_ALL));
    runMobile = attr(true, item2.getAttribute(RUN_MOBILE));
    runTablet = attr(true, item2.getAttribute(RUN_TABLET));
    runDesktop = attr(true, item2.getAttribute(RUN_DESKTOP));
    if (runAll === false) return false;
    if (runMobile === false && isMobile) return false;
    if (runTablet === false && isTablet) return false;
    if (runDesktop === false && isDesktop) return false;
    return true;
  };
  var getClipDirection = function(clipKeyword) {
    let clipMask = clipKeyword;
    const clipDirections = {
      left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      full: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    };
    if (clipKeyword === "left") {
      clipMask = clipDirections.left;
    }
    if (clipKeyword === "right") {
      clipMask = clipDirections.right;
    }
    if (clipKeyword === "top") {
      clipMask = clipDirections.top;
    }
    if (clipKeyword === "bottom") {
      clipMask = clipDirections.bottom;
    }
    if (clipKeyword === "full") {
      clipMask = clipDirections.full;
    }
    return clipMask;
  };
  function getNonContentsChildren(item2) {
    if (!item2 || !(item2 instanceof Element)) return [];
    const result = [];
    function processChildren(parent) {
      const children = Array.from(parent.children);
      for (const child of children) {
        const display = window.getComputedStyle(child).display;
        if (display === "contents") {
          processChildren(child);
        } else {
          result.push(child);
        }
      }
    }
    processChildren(item2);
    return result;
  }

  // src/interactions/accordion.js
  init_live_reload();
  var accordion = function(gsapContext) {
    const ANIMATION_ID = "accordion";
    const WRAP = '[data-ix-accordion="wrap"]';
    const ITEM = '[data-ix-accordion="item"]';
    const OPEN = '[data-ix-accordion="open"]';
    const OPTION_FIRST_OPEN = "data-ix-accordion-first-open";
    const OPTION_ONE_ACTIVE = "data-ix-accordion-one-active";
    const OPTION_KEEP_ONE_OPEN = "data-ix-accordion-keep-one-open";
    const OPTION_HOVER_OPEN = "data-ix-accordion-hover";
    const ACTIVE_CLASS = "is-active";
    const accordionLists = gsap.utils.toArray(WRAP);
    const openAccordion = function(item2, open = true) {
      if (open === true) {
        item2.classList.add(ACTIVE_CLASS);
      } else {
        item2.classList.remove(ACTIVE_CLASS);
      }
    };
    if (accordionLists.length === 0 || accordionLists === void 0) return;
    accordionLists.forEach((list) => {
      let runOnBreakpoint = checkBreakpoints(list, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let firstOpen = attr(false, list.getAttribute(OPTION_FIRST_OPEN));
      let oneActive = attr(false, list.getAttribute(OPTION_ONE_ACTIVE));
      let keepOneOpen = attr(false, list.getAttribute(OPTION_KEEP_ONE_OPEN));
      let hoverOnly = attr(false, list.getAttribute(OPTION_HOVER_OPEN));
      const accordionItems = Array.from(list.querySelectorAll(ITEM));
      if (accordionItems.length === 0) return;
      const firstItem = list.firstElementChild;
      if (firstOpen) {
        openAccordion(firstItem);
      }
      if (!hoverOnly) {
        list.addEventListener("click", function(e) {
          const clickedEl = e.target.closest(OPEN);
          if (!clickedEl) return;
          const clickedItem = clickedEl.closest(ITEM);
          let clickedItemAlreadyActive = clickedItem.classList.contains(ACTIVE_CLASS);
          if (!clickedItemAlreadyActive) {
            if (oneActive) {
              accordionItems.forEach((item2) => {
                if (item2 === clickedItem) {
                  openAccordion(item2);
                } else {
                  openAccordion(item2, false);
                }
              });
            }
            if (!oneActive) {
              openAccordion(clickedItem);
            }
          }
          if (clickedItemAlreadyActive && !keepOneOpen) {
            openAccordion(clickedItem, false);
          }
          if (clickedItemAlreadyActive && keepOneOpen) {
            const activeItems = accordionItems.filter(function(item2) {
              return item2.classList.contains(activeClass);
            });
            if (activeItems.length > 1) {
              openAccordion(item, false);
            }
          }
        });
      }
      if (hoverOnly) {
        accordionItems.forEach((item2) => {
          item2.addEventListener("mouseover", function() {
            openAccordion(item2);
          });
          item2.addEventListener("mouseout", function() {
            openAccordion(item2, false);
          });
        });
      }
    });
  };

  // src/interactions/click-active.js
  init_live_reload();

  // src/interactions/count-up.js
  init_live_reload();

  // node_modules/countup.js/dist/countUp.min.js
  init_live_reload();
  var t = function() {
    return t = Object.assign || function(t2) {
      for (var i2, n = 1, s = arguments.length; n < s; n++) for (var a in i2 = arguments[n]) Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
      return t2;
    }, t.apply(this, arguments);
  };
  var i = function() {
    function i2(i3, n, s) {
      var a = this;
      this.endVal = n, this.options = s, this.version = "2.9.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
        a.startTime || (a.startTime = t2);
        var i4 = t2 - a.startTime;
        a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
        var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
        a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
      }, this.formatNumber = function(t2) {
        var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
        i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
        var r = (i4 += "").split(".");
        if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
          e = "";
          for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
          n2 = e;
        }
        return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        }), s2 = s2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        })), o + a.options.prefix + n2 + s2 + a.options.suffix;
      }, this.easeOutExpo = function(t2, i4, n2, s2) {
        return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
      }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, n = null == n ? this.parse(this.el.innerHTML) : n, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
        return a.handleScroll(a);
      }), window.onscroll = function() {
        window.onScrollFns.forEach(function(t2) {
          return t2();
        });
      }, this.handleScroll(this)));
    }
    return i2.prototype.handleScroll = function(t2) {
      if (t2 && window && !t2.once) {
        var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
        a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
          return t2.start();
        }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
      }
    }, i2.prototype.determineDirectionAndSmartEasing = function() {
      var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t2;
      var i3 = t2 - this.startVal;
      if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t2;
        var n = this.countDown ? 1 : -1;
        this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else this.endVal = t2, this.finalEndVal = null;
      null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, i2.prototype.start = function(t2) {
      this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i2.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i2.prototype.reset = function() {
      cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i2.prototype.update = function(t2) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i2.prototype.printValue = function(t2) {
      var i3;
      if (this.el) {
        var n = this.formattingFn(t2);
        if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render) this.options.plugin.render(this.el, n);
        else if ("INPUT" === this.el.tagName) this.el.value = n;
        else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, i2.prototype.ensureNumber = function(t2) {
      return "number" == typeof t2 && !isNaN(t2);
    }, i2.prototype.validateValue = function(t2) {
      var i3 = Number(t2);
      return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
    }, i2.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i2.prototype.parse = function(t2) {
      var i3 = function(t3) {
        return t3.replace(/([.,'  ])/g, "\\$1");
      }, n = i3(this.options.separator), s = i3(this.options.decimal), a = t2.replace(new RegExp(n, "g"), "").replace(new RegExp(s, "g"), ".");
      return parseFloat(a);
    }, i2;
  }();

  // src/interactions/count-up.js
  var countUp = function(gsapContext) {
    const ANIMATION_ID = "countup";
    const ITEM = '[data-ix-countup="item"]';
    const TEXT = '[data-ix-countup="text"]';
    const OPTION_START = "data-ix-countup-start";
    const OPTION_DURATION = "data-ix-countup-duration";
    const OPTION_ACTIVE_CLASS = "data-ix-countup-active";
    const ACTIVE_CLASS = "is-active";
    const items = document.querySelectorAll(ITEM);
    items.forEach((item2) => {
      const parent = item2.parentElement;
      let textEl = item2;
      if (item2.querySelector(TEXT)) {
        textEl = item2.querySelector(TEXT);
      }
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const number = +textEl.textContent;
      if (!number || Number.isNaN(number)) return;
      decimalPoints = countDecimalPoints(number);
      let duration = attr(2.5, item2.getAttribute(OPTION_DURATION));
      let start = attr("top bottom", item2.getAttribute(OPTION_START));
      let activeClass2 = attr(ACTIVE_CLASS, item2.getAttribute(OPTION_ACTIVE_CLASS));
      const countUp2 = new i(textEl, number, {
        useGrouping: false,
        decimalPlaces: decimalPoints,
        duration
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item2,
          start,
          end: "top 10%",
          scrub: true,
          onEnter: () => {
            countUp2.start();
            parent.classList.add(activeClass2);
            setTimeout(() => {
              parent.classList.remove(activeClass2);
            }, duration * 1e3);
          }
        }
      });
    });
  };
  function countDecimalPoints(number) {
    const numberString = number.toString();
    const parts = numberString.split(".");
    if (parts.length === 1) {
      return 0;
    }
    return parts[1].length;
  }

  // src/interactions/cursor.js
  init_live_reload();

  // src/interactions/horizontal.js
  init_live_reload();
  var horizontal = function(gsapContext) {
    const ANIMATION_ID = "horizontal";
    const WRAP = '[data-ix-horizontal="wrap"]';
    const INNER = '[data-ix-horizontal="inner"]';
    const TRACK = '[data-ix-horizontal="track"]';
    const LIST = '[data-ix-horizontal="list"]';
    const HEADER = '[data-ix-horizontal="header"]';
    const ITEM = '[data-ix-horizontal="item"]';
    const OPTION_AUTO_HEIGHT = "data-ix-horizontal-auto-height";
    const wraps = document.querySelectorAll(WRAP);
    wraps.forEach((wrap2) => {
      const inner = wrap2.querySelector(INNER);
      const track = wrap2.querySelector(TRACK);
      const list = wrap2.querySelector(LIST);
      const header = wrap2.querySelector(HEADER);
      const items = [...wrap2.querySelectorAll(ITEM)];
      if (!wrap2 || !inner || !track) return;
      let runOnBreakpoint = checkBreakpoints(wrap2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      function animation() {
        let timelines2 = [];
        const setScrollDistance = function() {
          wrap2.style.height = "calc(" + track.offsetWidth + "px + 100vh)";
        };
        let matchHeight = attr(true, wrap2.getAttribute(OPTION_AUTO_HEIGHT));
        if (matchHeight) {
          setScrollDistance();
          ScrollTrigger.refresh();
          window.addEventListener("resize", setScrollDistance);
        }
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap2,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false
          },
          defaults: { ease: "none" }
        });
        tl.to(track, { xPercent: -100 });
        function containerLeft() {
          return inner.offsetLeft + "px";
        }
        function containerRight() {
          return inner.offsetLeft + inner.offsetWidth + "px";
        }
        let tlHeader = gsap.timeline({
          scrollTrigger: {
            trigger: list,
            containerAnimation: tl,
            // start when the left side of the element hits the left side of the container
            start: "left " + inner.getBoundingClientRect().left,
            end: "right " + inner.getBoundingClientRect().right,
            scrub: true
            // markers: true,
          },
          defaults: { ease: "none" }
        });
        tlHeader.to(header, {
          x: track.offsetWidth
        });
        let tlItems = gsap.timeline({
          scrollTrigger: {
            trigger: list,
            containerAnimation: tl,
            // start when the left side of the element hits the left side of the container
            start: "left " + inner.getBoundingClientRect().left,
            end: "right " + inner.getBoundingClientRect().right,
            scrub: true
            // markers: true,
          },
          defaults: { ease: "none" }
        });
        items.forEach((item2, i2) => {
          let total = items.length;
          let realIndex = i2 + 1;
          let difference = total - realIndex;
          const containerWidth = Number.parseFloat(track.offsetWidth);
          const itemWidth = containerWidth / (total - 1);
          tlItems.to(
            item2,
            {
              x: (i3) => itemWidth * difference,
              duration: difference
            },
            i2
          );
        });
        timelines2.push(tl);
        timelines2.push(tlHeader);
        timelines2.push(tlItems);
        return timelines2;
      }
      let timelines = animation();
      let windowWidth = window.innerWidth;
      window.addEventListener("resize", function() {
        if (window.innerWidth !== windowWidth) {
          windowWidth = window.innerWidth;
          window.location.reload();
        }
      });
    });
  };

  // src/interactions/lenis.js
  init_live_reload();

  // node_modules/lenis/dist/lenis.mjs
  init_live_reload();
  var version = "1.3.13";
  function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max));
  }
  function lerp(x, y, t2) {
    return (1 - t2) * x + t2 * y;
  }
  function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
  }
  function modulo(n, d) {
    return (n % d + d) % d;
  }
  var Animate = class {
    isRunning = false;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    // These are instanciated in the fromTo method
    lerp;
    duration;
    easing;
    onUpdate;
    /**
     * Advance the animation by the given delta time
     *
     * @param deltaTime - The time in seconds to advance the animation
     */
    advance(deltaTime) {
      if (!this.isRunning) return;
      let completed = false;
      if (this.duration && this.easing) {
        this.currentTime += deltaTime;
        const linearProgress = clamp(0, this.currentTime / this.duration, 1);
        completed = linearProgress >= 1;
        const easedProgress = completed ? 1 : this.easing(linearProgress);
        this.value = this.from + (this.to - this.from) * easedProgress;
      } else if (this.lerp) {
        this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
        if (Math.round(this.value) === this.to) {
          this.value = this.to;
          completed = true;
        }
      } else {
        this.value = this.to;
        completed = true;
      }
      if (completed) {
        this.stop();
      }
      this.onUpdate?.(this.value, completed);
    }
    /** Stop the animation */
    stop() {
      this.isRunning = false;
    }
    /**
     * Set up the animation from a starting value to an ending value
     * with optional parameters for lerping, duration, easing, and onUpdate callback
     *
     * @param from - The starting value
     * @param to - The ending value
     * @param options - Options for the animation
     */
    fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
      this.from = this.value = from;
      this.to = to;
      this.lerp = lerp2;
      this.duration = duration;
      this.easing = easing;
      this.currentTime = 0;
      this.isRunning = true;
      onStart?.();
      this.onUpdate = onUpdate;
    }
  };
  function debounce(callback, delay) {
    let timer;
    return function(...args) {
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = void 0;
        callback.apply(context, args);
      }, delay);
    };
  }
  var Dimensions = class {
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
      this.wrapper = wrapper;
      this.content = content;
      if (autoResize) {
        this.debouncedResize = debounce(this.resize, debounceValue);
        if (this.wrapper instanceof Window) {
          window.addEventListener("resize", this.debouncedResize, false);
        } else {
          this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
          this.wrapperResizeObserver.observe(this.wrapper);
        }
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
        this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    // These are instanciated in the constructor as they need information from the options
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
      this.wrapperResizeObserver?.disconnect();
      this.contentResizeObserver?.disconnect();
      if (this.wrapper === window && this.debouncedResize) {
        window.removeEventListener("resize", this.debouncedResize, false);
      }
    }
    resize = () => {
      this.onWrapperResize();
      this.onContentResize();
    };
    onWrapperResize = () => {
      if (this.wrapper instanceof Window) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      } else {
        this.width = this.wrapper.clientWidth;
        this.height = this.wrapper.clientHeight;
      }
    };
    onContentResize = () => {
      if (this.wrapper instanceof Window) {
        this.scrollHeight = this.content.scrollHeight;
        this.scrollWidth = this.content.scrollWidth;
      } else {
        this.scrollHeight = this.wrapper.scrollHeight;
        this.scrollWidth = this.wrapper.scrollWidth;
      }
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height
      };
    }
  };
  var Emitter = class {
    events = {};
    /**
     * Emit an event with the given data
     * @param event Event name
     * @param args Data to pass to the event handlers
     */
    emit(event, ...args) {
      let callbacks = this.events[event] || [];
      for (let i2 = 0, length = callbacks.length; i2 < length; i2++) {
        callbacks[i2]?.(...args);
      }
    }
    /**
     * Add a callback to the event
     * @param event Event name
     * @param cb Callback function
     * @returns Unsubscribe function
     */
    on(event, cb) {
      this.events[event]?.push(cb) || (this.events[event] = [cb]);
      return () => {
        this.events[event] = this.events[event]?.filter((i2) => cb !== i2);
      };
    }
    /**
     * Remove a callback from the event
     * @param event Event name
     * @param callback Callback function
     */
    off(event, callback) {
      this.events[event] = this.events[event]?.filter((i2) => callback !== i2);
    }
    /**
     * Remove all event listeners and clean up
     */
    destroy() {
      this.events = {};
    }
  };
  var LINE_HEIGHT = 100 / 6;
  var listenerOptions = { passive: false };
  var VirtualScroll = class {
    constructor(element, options = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      this.element = element;
      this.options = options;
      window.addEventListener("resize", this.onWindowResize, false);
      this.onWindowResize();
      this.element.addEventListener("wheel", this.onWheel, listenerOptions);
      this.element.addEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.addEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    touchStart = {
      x: 0,
      y: 0
    };
    lastDelta = {
      x: 0,
      y: 0
    };
    window = {
      width: 0,
      height: 0
    };
    emitter = new Emitter();
    /**
     * Add an event listener for the given event and callback
     *
     * @param event Event name
     * @param callback Callback function
     */
    on(event, callback) {
      return this.emitter.on(event, callback);
    }
    /** Remove all event listeners and clean up */
    destroy() {
      this.emitter.destroy();
      window.removeEventListener("resize", this.onWindowResize, false);
      this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
      this.element.removeEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchend",
        this.onTouchEnd,
        listenerOptions
      );
    }
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    onTouchStart = (event) => {
      const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: 0,
        y: 0
      };
      this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event
      });
    };
    /** Event handler for 'touchmove' event */
    onTouchMove = (event) => {
      const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
      const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
      const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: deltaX,
        y: deltaY
      };
      this.emitter.emit("scroll", {
        deltaX,
        deltaY,
        event
      });
    };
    onTouchEnd = (event) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event
      });
    };
    /** Event handler for 'wheel' event */
    onWheel = (event) => {
      let { deltaX, deltaY, deltaMode } = event;
      const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
      const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
      deltaX *= multiplierX;
      deltaY *= multiplierY;
      deltaX *= this.options.wheelMultiplier;
      deltaY *= this.options.wheelMultiplier;
      this.emitter.emit("scroll", { deltaX, deltaY, event });
    };
    onWindowResize = () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  };
  var defaultEasing = (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2));
  var Lenis = class {
    _isScrolling = false;
    // true when scroll is animating
    _isStopped = false;
    // true if user should not be able to scroll - enable/disable programmatically
    _isLocked = false;
    // same as isStopped but enabled/disabled when scroll reaches target
    _preventNextNativeScrollEvent = false;
    _resetVelocityTimeout = null;
    __rafID = null;
    /**
     * Whether or not the user is touching the screen
     */
    isTouching;
    /**
     * The time in ms since the lenis instance was created
     */
    time = 0;
    /**
     * User data that will be forwarded through the scroll event
     *
     * @example
     * lenis.scrollTo(100, {
     *   userData: {
     *     foo: 'bar'
     *   }
     * })
     */
    userData = {};
    /**
     * The last velocity of the scroll
     */
    lastVelocity = 0;
    /**
     * The current velocity of the scroll
     */
    velocity = 0;
    /**
     * The direction of the scroll
     */
    direction = 0;
    /**
     * The options passed to the lenis instance
     */
    options;
    /**
     * The target scroll value
     */
    targetScroll;
    /**
     * The animated scroll value
     */
    animatedScroll;
    // These are instanciated here as they don't need information from the options
    animate = new Animate();
    emitter = new Emitter();
    // These are instanciated in the constructor as they need information from the options
    dimensions;
    // This is not private because it's used in the Snap class
    virtualScroll;
    constructor({
      wrapper = window,
      content = document.documentElement,
      eventsTarget = wrapper,
      smoothWheel = true,
      syncTouch = false,
      syncTouchLerp = 0.075,
      touchInertiaExponent = 1.7,
      duration,
      // in seconds
      easing,
      lerp: lerp2 = 0.1,
      infinite = false,
      orientation = "vertical",
      // vertical, horizontal
      gestureOrientation = orientation === "horizontal" ? "both" : "vertical",
      // vertical, horizontal, both
      touchMultiplier = 1,
      wheelMultiplier = 1,
      autoResize = true,
      prevent,
      virtualScroll,
      overscroll = true,
      autoRaf = false,
      anchors = false,
      autoToggle = false,
      // https://caniuse.com/?search=transition-behavior
      allowNestedScroll = false,
      __experimental__naiveDimensions = false
    } = {}) {
      window.lenisVersion = version;
      if (!wrapper || wrapper === document.documentElement) {
        wrapper = window;
      }
      if (typeof duration === "number" && typeof easing !== "function") {
        easing = defaultEasing;
      } else if (typeof easing === "function" && typeof duration !== "number") {
        duration = 1;
      }
      this.options = {
        wrapper,
        content,
        eventsTarget,
        smoothWheel,
        syncTouch,
        syncTouchLerp,
        touchInertiaExponent,
        duration,
        easing,
        lerp: lerp2,
        infinite,
        gestureOrientation,
        orientation,
        touchMultiplier,
        wheelMultiplier,
        autoResize,
        prevent,
        virtualScroll,
        overscroll,
        autoRaf,
        anchors,
        autoToggle,
        allowNestedScroll,
        __experimental__naiveDimensions
      };
      this.dimensions = new Dimensions(wrapper, content, { autoResize });
      this.updateClassName();
      this.targetScroll = this.animatedScroll = this.actualScroll;
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
      this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: true
      });
      if (this.options.anchors && this.options.wrapper === window) {
        this.options.wrapper.addEventListener(
          "click",
          this.onClick,
          false
        );
      }
      this.options.wrapper.addEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      this.virtualScroll = new VirtualScroll(eventsTarget, {
        touchMultiplier,
        wheelMultiplier
      });
      this.virtualScroll.on("scroll", this.onVirtualScroll);
      if (this.options.autoToggle) {
        this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
          passive: true
        });
      }
      if (this.options.autoRaf) {
        this.__rafID = requestAnimationFrame(this.raf);
      }
    }
    /**
     * Destroy the lenis instance, remove all event listeners and clean up the class name
     */
    destroy() {
      this.emitter.destroy();
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        false
      );
      this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: true
      });
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      if (this.options.anchors && this.options.wrapper === window) {
        this.options.wrapper.removeEventListener(
          "click",
          this.onClick,
          false
        );
      }
      this.virtualScroll.destroy();
      this.dimensions.destroy();
      this.cleanUpClassName();
      if (this.__rafID) {
        cancelAnimationFrame(this.__rafID);
      }
    }
    on(event, callback) {
      return this.emitter.on(event, callback);
    }
    off(event, callback) {
      return this.emitter.off(event, callback);
    }
    onScrollEnd = (e) => {
      if (!(e instanceof CustomEvent)) {
        if (this.isScrolling === "smooth" || this.isScrolling === false) {
          e.stopPropagation();
        }
      }
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent("scrollend", {
          bubbles: this.options.wrapper === window,
          // cancelable: false,
          detail: {
            lenisScrollEnd: true
          }
        })
      );
    };
    onTransitionEnd = (event) => {
      if (event.propertyName.includes("overflow")) {
        const property = this.isHorizontal ? "overflow-x" : "overflow-y";
        const overflow = getComputedStyle(this.rootElement)[property];
        if (["hidden", "clip"].includes(overflow)) {
          this.internalStop();
        } else {
          this.internalStart();
        }
      }
    };
    setScroll(scroll) {
      if (this.isHorizontal) {
        this.options.wrapper.scrollTo({ left: scroll, behavior: "instant" });
      } else {
        this.options.wrapper.scrollTo({ top: scroll, behavior: "instant" });
      }
    }
    onClick = (event) => {
      const path = event.composedPath();
      const anchor = path.find(
        (node) => node instanceof HTMLAnchorElement && node.getAttribute("href")?.includes("#")
      );
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href) {
          const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
          const target = `#${href.split("#")[1]}`;
          this.scrollTo(target, options);
        }
      }
    };
    onPointerDown = (event) => {
      if (event.button === 1) {
        this.reset();
      }
    };
    onVirtualScroll = (data) => {
      if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false)
        return;
      const { deltaX, deltaY, event } = data;
      this.emitter.emit("virtual-scroll", { deltaX, deltaY, event });
      if (event.ctrlKey) return;
      if (event.lenisStopPropagation) return;
      const isTouch = event.type.includes("touch");
      const isWheel = event.type.includes("wheel");
      this.isTouching = event.type === "touchstart" || event.type === "touchmove";
      const isClickOrTap = deltaX === 0 && deltaY === 0;
      const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked;
      if (isTapToStop) {
        this.reset();
        return;
      }
      const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
      if (isClickOrTap || isUnknownGesture) {
        return;
      }
      let composedPath = event.composedPath();
      composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
      const prevent = this.options.prevent;
      if (!!composedPath.find(
        (node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(node, { deltaX, deltaY }))
      ))
        return;
      if (this.isStopped || this.isLocked) {
        if (event.cancelable) {
          event.preventDefault();
        }
        return;
      }
      const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
      if (!isSmooth) {
        this.isScrolling = "native";
        this.animate.stop();
        event.lenisStopPropagation = true;
        return;
      }
      let delta = deltaY;
      if (this.options.gestureOrientation === "both") {
        delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
      } else if (this.options.gestureOrientation === "horizontal") {
        delta = deltaX;
      }
      if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
        event.lenisStopPropagation = true;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      const isSyncTouch = isTouch && this.options.syncTouch;
      const isTouchEnd = isTouch && event.type === "touchend";
      const hasTouchInertia = isTouchEnd;
      if (hasTouchInertia) {
        delta = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent);
      }
      this.scrollTo(this.targetScroll + delta, {
        programmatic: false,
        ...isSyncTouch ? {
          lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
          // immediate: !hasTouchInertia,
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    };
    /**
     * Force lenis to recalculate the dimensions
     */
    resize() {
      this.dimensions.resize();
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.emit();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    onNativeScroll = () => {
      if (this._resetVelocityTimeout !== null) {
        clearTimeout(this._resetVelocityTimeout);
        this._resetVelocityTimeout = null;
      }
      if (this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = false;
        return;
      }
      if (this.isScrolling === false || this.isScrolling === "native") {
        const lastScroll = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity;
        this.velocity = this.animatedScroll - lastScroll;
        this.direction = Math.sign(
          this.animatedScroll - lastScroll
        );
        if (!this.isStopped) {
          this.isScrolling = "native";
        }
        this.emit();
        if (this.velocity !== 0) {
          this._resetVelocityTimeout = setTimeout(() => {
            this.lastVelocity = this.velocity;
            this.velocity = 0;
            this.isScrolling = false;
            this.emit();
          }, 400);
        }
      }
    };
    reset() {
      this.isLocked = false;
      this.isScrolling = false;
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.lastVelocity = this.velocity = 0;
      this.animate.stop();
    }
    /**
     * Start lenis scroll after it has been stopped
     */
    start() {
      if (!this.isStopped) return;
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
    internalStart() {
      if (!this.isStopped) return;
      this.reset();
      this.isStopped = false;
      this.emit();
    }
    /**
     * Stop lenis scroll
     */
    stop() {
      if (this.isStopped) return;
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
    internalStop() {
      if (this.isStopped) return;
      this.reset();
      this.isStopped = true;
      this.emit();
    }
    /**
     * RequestAnimationFrame for lenis
     *
     * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
     */
    raf = (time) => {
      const deltaTime = time - (this.time || time);
      this.time = time;
      this.animate.advance(deltaTime * 1e-3);
      if (this.options.autoRaf) {
        this.__rafID = requestAnimationFrame(this.raf);
      }
    };
    /**
     * Scroll to a target value
     *
     * @param target The target value to scroll to
     * @param options The options for the scroll
     *
     * @example
     * lenis.scrollTo(100, {
     *   offset: 100,
     *   duration: 1,
     *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
     *   lerp: 0.1,
     *   onStart: () => {
     *     console.log('onStart')
     *   },
     *   onComplete: () => {
     *     console.log('onComplete')
     *   },
     * })
     */
    scrollTo(target, {
      offset = 0,
      immediate = false,
      lock = false,
      duration = this.options.duration,
      easing = this.options.easing,
      lerp: lerp2 = this.options.lerp,
      onStart,
      onComplete,
      force = false,
      // scroll even if stopped
      programmatic = true,
      // called from outside of the class
      userData
    } = {}) {
      if ((this.isStopped || this.isLocked) && !force) return;
      if (typeof target === "string" && ["top", "left", "start", "#"].includes(target)) {
        target = 0;
      } else if (typeof target === "string" && ["bottom", "right", "end"].includes(target)) {
        target = this.limit;
      } else {
        let node;
        if (typeof target === "string") {
          node = document.querySelector(target);
          if (!node) {
            if (target === "#top") {
              target = 0;
            } else {
              console.warn("Lenis: Target not found", target);
            }
          }
        } else if (target instanceof HTMLElement && target?.nodeType) {
          node = target;
        }
        if (node) {
          if (this.options.wrapper !== window) {
            const wrapperRect = this.rootElement.getBoundingClientRect();
            offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
          }
          const rect = node.getBoundingClientRect();
          target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
        }
      }
      if (typeof target !== "number") return;
      target += offset;
      target = Math.round(target);
      if (this.options.infinite) {
        if (programmatic) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const distance = target - this.animatedScroll;
          if (distance > this.limit / 2) {
            target = target - this.limit;
          } else if (distance < -this.limit / 2) {
            target = target + this.limit;
          }
        }
      } else {
        target = clamp(0, target, this.limit);
      }
      if (target === this.targetScroll) {
        onStart?.(this);
        onComplete?.(this);
        return;
      }
      this.userData = userData ?? {};
      if (immediate) {
        this.animatedScroll = this.targetScroll = target;
        this.setScroll(this.scroll);
        this.reset();
        this.preventNextNativeScrollEvent();
        this.emit();
        onComplete?.(this);
        this.userData = {};
        requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      if (!programmatic) {
        this.targetScroll = target;
      }
      if (typeof duration === "number" && typeof easing !== "function") {
        easing = defaultEasing;
      } else if (typeof easing === "function" && typeof duration !== "number") {
        duration = 1;
      }
      this.animate.fromTo(this.animatedScroll, target, {
        duration,
        easing,
        lerp: lerp2,
        onStart: () => {
          if (lock) this.isLocked = true;
          this.isScrolling = "smooth";
          onStart?.(this);
        },
        onUpdate: (value, completed) => {
          this.isScrolling = "smooth";
          this.lastVelocity = this.velocity;
          this.velocity = value - this.animatedScroll;
          this.direction = Math.sign(this.velocity);
          this.animatedScroll = value;
          this.setScroll(this.scroll);
          if (programmatic) {
            this.targetScroll = value;
          }
          if (!completed) this.emit();
          if (completed) {
            this.reset();
            this.emit();
            onComplete?.(this);
            this.userData = {};
            requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            });
            this.preventNextNativeScrollEvent();
          }
        }
      });
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = true;
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = false;
      });
    }
    checkNestedScroll(node, { deltaX, deltaY }) {
      const time = Date.now();
      const cache = node._lenis ??= {};
      let hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
      const gestureOrientation = this.options.gestureOrientation;
      if (time - (cache.time ?? 0) > 2e3) {
        cache.time = Date.now();
        const computedStyle = window.getComputedStyle(node);
        cache.computedStyle = computedStyle;
        const overflowXString = computedStyle.overflowX;
        const overflowYString = computedStyle.overflowY;
        hasOverflowX = ["auto", "overlay", "scroll"].includes(overflowXString);
        hasOverflowY = ["auto", "overlay", "scroll"].includes(overflowYString);
        cache.hasOverflowX = hasOverflowX;
        cache.hasOverflowY = hasOverflowY;
        if (!hasOverflowX && !hasOverflowY) return false;
        if (gestureOrientation === "vertical" && !hasOverflowY) return false;
        if (gestureOrientation === "horizontal" && !hasOverflowX) return false;
        scrollWidth = node.scrollWidth;
        scrollHeight = node.scrollHeight;
        clientWidth = node.clientWidth;
        clientHeight = node.clientHeight;
        isScrollableX = scrollWidth > clientWidth;
        isScrollableY = scrollHeight > clientHeight;
        cache.isScrollableX = isScrollableX;
        cache.isScrollableY = isScrollableY;
        cache.scrollWidth = scrollWidth;
        cache.scrollHeight = scrollHeight;
        cache.clientWidth = clientWidth;
        cache.clientHeight = clientHeight;
      } else {
        isScrollableX = cache.isScrollableX;
        isScrollableY = cache.isScrollableY;
        hasOverflowX = cache.hasOverflowX;
        hasOverflowY = cache.hasOverflowY;
        scrollWidth = cache.scrollWidth;
        scrollHeight = cache.scrollHeight;
        clientWidth = cache.clientWidth;
        clientHeight = cache.clientHeight;
      }
      if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) {
        return false;
      }
      if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY))
        return false;
      if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX))
        return false;
      let orientation;
      if (gestureOrientation === "horizontal") {
        orientation = "x";
      } else if (gestureOrientation === "vertical") {
        orientation = "y";
      } else {
        const isScrollingX = deltaX !== 0;
        const isScrollingY = deltaY !== 0;
        if (isScrollingX && hasOverflowX && isScrollableX) {
          orientation = "x";
        }
        if (isScrollingY && hasOverflowY && isScrollableY) {
          orientation = "y";
        }
      }
      if (!orientation) return false;
      let scroll, maxScroll, delta, hasOverflow, isScrollable;
      if (orientation === "x") {
        scroll = node.scrollLeft;
        maxScroll = scrollWidth - clientWidth;
        delta = deltaX;
        hasOverflow = hasOverflowX;
        isScrollable = isScrollableX;
      } else if (orientation === "y") {
        scroll = node.scrollTop;
        maxScroll = scrollHeight - clientHeight;
        delta = deltaY;
        hasOverflow = hasOverflowY;
        isScrollable = isScrollableY;
      } else {
        return false;
      }
      const willScroll = delta > 0 ? scroll < maxScroll : scroll > 0;
      return willScroll && hasOverflow && isScrollable;
    }
    /**
     * The root element on which lenis is instanced
     */
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
     * The limit which is the maximum scroll value
     */
    get limit() {
      if (this.options.__experimental__naiveDimensions) {
        if (this.isHorizontal) {
          return this.rootElement.scrollWidth - this.rootElement.clientWidth;
        } else {
          return this.rootElement.scrollHeight - this.rootElement.clientHeight;
        }
      } else {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
    }
    /**
     * Whether or not the scroll is horizontal
     */
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    /**
     * The actual scroll value
     */
    get actualScroll() {
      const wrapper = this.options.wrapper;
      return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
    }
    /**
     * The current scroll value
     */
    get scroll() {
      return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
     * The progress of the scroll relative to the limit
     */
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
     * Current scroll state
     */
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(value) {
      if (this._isScrolling !== value) {
        this._isScrolling = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is stopped
     */
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(value) {
      if (this._isStopped !== value) {
        this._isStopped = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is locked
     */
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(value) {
      if (this._isLocked !== value) {
        this._isLocked = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is smooth scrolling
     */
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    /**
     * The class name applied to the wrapper element
     */
    get className() {
      let className = "lenis";
      if (this.options.autoToggle) className += " lenis-autoToggle";
      if (this.isStopped) className += " lenis-stopped";
      if (this.isLocked) className += " lenis-locked";
      if (this.isScrolling) className += " lenis-scrolling";
      if (this.isScrolling === "smooth") className += " lenis-smooth";
      return className;
    }
    updateClassName() {
      this.cleanUpClassName();
      this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
  };

  // src/interactions/lenis.js
  var initLenis = function() {
    const lenis2 = new Lenis({
      duration: 0.5,
      wheelMultiplier: 0.75,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
      easing: (t2) => t2 === 1 ? 1 : 1 - Math.pow(2, -10 * t2)
      // https://easings.net
    });
    function raf(time) {
      lenis2.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis2.on("scroll", () => {
      if (!ScrollTrigger) return;
      ScrollTrigger.update();
    });
    gsap.ticker.add((time) => {
      lenis2.raf(time * 1e3);
    });
    gsap.ticker.lagSmoothing(0);
    let resizeTimeout;
    function refreshLenisTimeout(delay = 600) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          lenis2.resize();
          console.log("refresh");
        });
      }, delay);
    }
    function refreshScroll() {
      const triggers = [...document.querySelectorAll('[data-scroll="refresh"]')];
      if (triggers.length === 0) return;
      triggers.forEach((item2) => {
        if (!item2) return;
        item2.addEventListener("click", (event) => {
          refreshLenisTimeout();
        });
      });
    }
    refreshScroll();
    function refreshScrollOnLazyLoad() {
      const images = [...document.querySelectorAll("img[loading='lazy']")];
      if (images.length === 0) return;
      images.forEach((img) => {
        img.addEventListener("load", refreshLenisTimeout);
      });
    }
    function stopScroll2() {
      const stopScrollLinks = document.querySelectorAll('[data-scroll="stop"]');
      if (stopScrollLinks == null) {
        return;
      }
      stopScrollLinks.forEach((item2) => {
        item2.addEventListener("click", (event) => {
          lenis2.stop();
        });
      });
    }
    stopScroll2();
    function startScroll2() {
      const startScrollLinks = document.querySelectorAll('[data-scroll="start"]');
      if (startScrollLinks == null) {
        return;
      }
      startScrollLinks.forEach((item2) => {
        item2.addEventListener("click", (event) => {
          lenis2.start();
        });
      });
    }
    startScroll2();
    function toggleScroll() {
      const toggleScrollLinks = document.querySelectorAll('[data-scroll="toggle"]');
      if (toggleScrollLinks == null) {
        return;
      }
      toggleScrollLinks.forEach((item2) => {
        let stopScroll3 = false;
        item2.addEventListener("click", (event) => {
          stopScroll3 = !stopScroll3;
          if (stopScroll3) lenis2.stop();
          else lenis2.start();
        });
      });
    }
    toggleScroll();
    return lenis2;
  };

  // src/interactions/load.js
  init_live_reload();
  var load = function(gsapContext) {
    const ANIMATION_ID = "load";
    const ATTRIBUTE = "data-ix-load";
    const WRAP = "wrap";
    const HEADING = "heading";
    const ITEM = "item";
    const IMAGE = "image";
    const LINE = "line";
    const STAGGER = "stagger";
    const POSITION = "data-ix-load-position";
    const DEFAULT_STAGGER = "<0.2";
    let totalDuration = 0;
    let loadTimelines = [];
    const wraps = gsap.utils.toArray(`[${ATTRIBUTE}="${WRAP}"]`);
    wraps.forEach((wrap2) => {
      let runOnBreakpoint = checkBreakpoints(wrap2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const items = [...wrap2.querySelectorAll(`[${ATTRIBUTE}]:not([${ATTRIBUTE}-run="false"])`)];
      if (items.length === 0) return;
      let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
      const tl = gsap.timeline({
        delay: totalDuration,
        paused: true,
        defaults: {
          ease: "power1.out",
          duration: 0.8
        }
      });
      tl.set(wrap2, {
        clearProps: "visibility",
        //chat gpt suggestion
        autoAlpha: 1
      });
      const loadHeading = function(item2) {
        gsap.set(item2, { autoAlpha: 1 });
        const position = attr(0, item2.getAttribute(POSITION));
        if (item2.classList.contains("w-richtext")) {
          item2 = item2.children;
        }
        SplitText.create(item2, {
          type: "lines",
          linesClass: "line",
          // wordsClass: 'word',
          // charsClass: "char",
          // mask: 'lines',
          autoSplit: true,
          onSplit: (self2) => {
            return tl.from(
              self2.lines,
              {
                y: "50%",
                rotateX: 45,
                autoAlpha: 0,
                stagger: 0.2
              },
              position
            );
          }
        });
      };
      const loadImage2 = function(item2) {
        const position = attr(DEFAULT_STAGGER, item2.getAttribute(POSITION));
        tl.fromTo(item2, { autoAlpha: 0 }, { autoAlpha: 1 }, position);
      };
      const loadLine = function(item2) {
        const position = attr(DEFAULT_STAGGER, item2.getAttribute(POSITION));
        tl.fromTo(
          item2,
          { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          position
        );
      };
      const loadItem = function(item2) {
        const position = attr(DEFAULT_STAGGER, item2.getAttribute(POSITION));
        tl.fromTo(item2, { autoAlpha: 0, y: "2rem" }, { autoAlpha: 1, y: "0rem" }, position);
      };
      const loadStagger = function(item2) {
        if (!item2) return;
        const children = gsap.utils.toArray(item2.children);
        if (children.length === 0) return;
        children.forEach((child, index) => {
          if (index === 0) {
            gsap.set(item2, { autoAlpha: 1 });
          }
          loadItem(child);
        });
      };
      const loadSimple = function(item2) {
        if (!item2) return;
        tl.fromTo(
          item2,
          {
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            ease: "power1.out",
            duration: 1.2
          },
          "<"
        );
      };
      items.forEach((item2) => {
        if (!item2) return;
        const loadType = item2.getAttribute(ATTRIBUTE);
        if (reduceMotion) {
          if (loadType === STAGGER) {
            loadSimple(item2.children);
          } else {
            loadSimple(item2);
          }
        } else {
          if (loadType === HEADING) {
            loadHeading(item2);
          }
          if (loadType === IMAGE) {
            loadImage2(item2);
          }
          if (loadType === LINE) {
            loadLine(item2);
          }
          if (loadType === ITEM) {
            loadItem(item2);
          }
          if (loadType === STAGGER) {
            loadStagger(item2);
          }
        }
      });
      totalDuration = totalDuration + tl.duration() - 0.4;
      tl.play();
      loadTimelines.push(tl);
    });
  };

  // src/interactions/marquee.js
  init_live_reload();
  var marquee = function(gsapContext) {
    const ANIMATION_ID = "marquee";
    const WRAP = '[data-ix-marquee="wrap"]';
    const LIST = '[data-ix-marquee="list"]';
    const VERTICAL = "data-ix-marquee-vertical";
    const REVERSE = "data-ix-marquee-reverse";
    const DURATION = "data-ix-marquee-duration";
    const DYNAMIC_DURATION = "data-ix-marquee-duration-dynamic";
    const DURATION_PER_ITEM = "data-ix-marquee-duration-per-item";
    const HOVER_EFFECT = "data-ix-marquee-hover";
    const ACCELERATE_ON_HOVER = "accelerate";
    const DECELERATE_ON_HOVER = "decelerate";
    const PAUSE_ON_HOVER = "pause";
    const DEFAULT_DURATION = 30;
    const DEFAULT_DYNAMIC_DURATION = 5;
    const wraps = document.querySelectorAll(WRAP);
    if (wraps.length === 0) return;
    wraps.forEach((wrap2) => {
      let runOnBreakpoint = checkBreakpoints(wrap2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const lists = [...wrap2.querySelectorAll(LIST)];
      let vertical = attr(false, wrap2.getAttribute(VERTICAL));
      let reverse = attr(false, wrap2.getAttribute(REVERSE));
      let duration = attr(DEFAULT_DURATION, wrap2.getAttribute(DURATION));
      let durationDynamic = attr(false, wrap2.getAttribute(DYNAMIC_DURATION));
      let durationPerItem = attr(DEFAULT_DYNAMIC_DURATION, wrap2.getAttribute(DURATION_PER_ITEM));
      let itemCount = lists[0].childElementCount;
      if (itemCount === 1) {
        itemCount = lists[0].firstElementChild.childElementCount;
      }
      if (durationDynamic) {
        duration = itemCount * durationPerItem;
      }
      let hoverEffect = attr("none", wrap2.getAttribute(HOVER_EFFECT));
      let direction = 1;
      if (reverse) {
        direction = -1;
      }
      let tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none"
        }
      });
      tl.fromTo(
        lists,
        {
          xPercent: 0,
          yPercent: 0
        },
        {
          // if vertical is true move yPercent, otherwise move x percent
          xPercent: vertical ? 0 : -100 * direction,
          yPercent: vertical ? -100 * direction : 0,
          duration
        }
      );
      if (hoverEffect === ACCELERATE_ON_HOVER) {
        wrap2.addEventListener("mouseenter", (event) => {
          tl.timeScale(2);
        });
        wrap2.addEventListener("mouseleave", (event) => {
          tl.timeScale(1);
        });
      }
      if (hoverEffect === DECELERATE_ON_HOVER) {
        wrap2.addEventListener("mouseenter", (event) => {
          tl.timeScale(0.5);
        });
        wrap2.addEventListener("mouseleave", (event) => {
          tl.timeScale(1);
        });
      }
      if (hoverEffect === PAUSE_ON_HOVER) {
        wrap2.addEventListener("mouseenter", (event) => {
          tl.pause();
        });
        wrap2.addEventListener("mouseleave", (event) => {
          tl.play();
        });
      }
    });
  };

  // src/interactions/parallax.js
  init_live_reload();
  var parallax = function(gsapContext) {
    const ANIMATION_ID = "parallax";
    const WRAP = `[data-ix-parallax="wrap"]`;
    const SECTION = `[data-ix-parallax="section"]`;
    const TRIGGER = `[data-ix-parallax="trigger"]`;
    const TYPE = "data-ix-parallax-type";
    const AMOUNT = "data-ix-parallax-amount";
    const parallaxItems = gsap.utils.toArray(WRAP);
    parallaxItems.forEach((parallaxItem) => {
      const section = parallaxItem.querySelector(SECTION);
      const trigger = parallaxItem.querySelector(TRIGGER);
      if (!parallaxItem || !section || !trigger) return;
      let animationType = "uncover";
      animationType = attr("uncover", parallaxItem.getAttribute(TYPE));
      moveAmount = attr(50, parallaxItem.getAttribute(AMOUNT));
      let runOnBreakpoint = checkBreakpoints(parallaxItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const settings = {
        scrub: true,
        start: "top bottom",
        end: "top top",
        moveStart: "-100vh",
        moveEnd: "0vh"
      };
      if (animationType === "cover") {
        settings.start = "bottom bottom";
        settings.end = "bottom top";
        settings.moveStart = "0vh";
        settings.moveEnd = "100vh";
      }
      if (animationType === "parallax") {
        settings.moveStart = `-${moveAmount}vh`;
        settings.moveEnd = "0vh";
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          markers: false,
          start: settings.start,
          end: settings.end,
          scrub: settings.scrub
        },
        defaults: {
          duration: 1,
          ease: "none"
        },
        onStart: () => {
          ScrollTrigger.refresh();
        }
      });
      tl.fromTo(
        section,
        {
          y: settings.moveStart
        },
        {
          y: settings.moveEnd
        }
      );
    });
  };

  // src/interactions/scroll-in.js
  init_live_reload();
  var scrollIn = function(gsapContext) {
    const ANIMATION_ID = "scrollin";
    const ATTRIBUTE = "data-ix-scrollin";
    const ELEMENT = "data-ix-scrollin";
    const WRAP = "wrap";
    const HEADING = "heading";
    const ITEM = "item";
    const CONTAINER = "container";
    const STAGGER = "stagger";
    const RICH_TEXT = "rich-text";
    const IMAGE_WRAP = "image-wrap";
    const IMAGE = "image";
    const LINE = "line";
    const SCROLL_TOGGLE_ACTIONS = "data-ix-scrollin-toggle-actions";
    const SCROLL_SCRUB = "data-ix-scrollin-scrub";
    const SCROLL_START = "data-ix-scrollin-start";
    const SCROLL_END = "data-ix-scrollin-end";
    const CLIP_DIRECTION = "data-ix-scrollin-clip-direction";
    const SCROLL_STAGGER = "data-ix-scrollin-stagger";
    const EASE_SMALL = 0.1;
    const EASE_LARGE = 0.3;
    const DURATION = 0.6;
    const EASE = "power1.out";
    const scrollInTL = function(item2) {
      const settings = {
        scrub: false,
        toggleActions: "play none none none",
        start: "top 90%",
        end: "top 75%"
      };
      settings.toggleActions = attr(settings.toggleActions, item2.getAttribute(SCROLL_TOGGLE_ACTIONS));
      settings.scrub = attr(settings.scrub, item2.getAttribute(SCROLL_SCRUB));
      settings.start = attr(settings.start, item2.getAttribute(SCROLL_START));
      settings.end = attr(settings.end, item2.getAttribute(SCROLL_END));
      const tl = gsap.timeline({
        defaults: {
          duration: DURATION,
          ease: EASE
        },
        scrollTrigger: {
          trigger: item2,
          start: settings.start,
          end: settings.end,
          toggleActions: settings.toggleActions,
          scrub: settings.scrub
        }
      });
      return tl;
    };
    const defaultTween = function(item2, tl, options = {}) {
      const varsFrom = {
        autoAlpha: 0,
        y: "2rem"
      };
      const varsTo = {
        autoAlpha: 1,
        y: "0rem"
      };
      if (options.stagger) {
        varsTo.stagger = { each: options.stagger, from: "start" };
      }
      if (options.stagger === "small") {
        varsTo.stagger = { each: EASE_SMALL, from: "start" };
      }
      if (options.stagger === "large") {
        varsTo.stagger = { each: EASE_LARGE, from: "start" };
      }
      const tween2 = tl.fromTo(item2, varsFrom, varsTo);
      return tween2;
    };
    const scrollInHeading = function(item2) {
      if (item2.classList.contains("w-richtext")) {
        item2 = item2.firstChild;
      }
      SplitText.create(item2, {
        type: "lines, words",
        // 'chars, words, lines
        linesClass: "line",
        // wordsClass: 'word',
        // charsClass: "char",
        // mask: 'lines',
        autoSplit: true,
        //have it auto adjust based on width
        // mask: 'lines',
        onSplit(self2) {
          const tl = scrollInTL(item2);
          tween = defaultTween(self2.lines, tl, { stagger: 0.2 });
          const revertText = function(self3) {
            self3.revert();
          };
          tween.eventCallback("onComplete", revertText, [self2]);
          return tween;
        }
      });
    };
    const scrollInItem = function(item2) {
      if (!item2) return;
      if (item2.classList.contains("w-richtext")) {
        const children = gsap.utils.toArray(item2.children);
        if (children.length === 0) return;
        children.forEach((child) => {
          const tl = scrollInTL(child);
          const tween2 = defaultTween(child, tl);
        });
      } else {
        const tl = scrollInTL(item2);
        const tween2 = defaultTween(item2, tl);
      }
    };
    const scrollInImage = function(item2) {
      if (!item2) return;
      const parent = item2.parentElement;
      const tl = scrollInTL(item2);
      tl.fromTo(
        item2,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }
      );
    };
    const scrollInLine = function(item2) {
      if (!item2) return;
      const clipAttr = attr("left", item2.getAttribute(CLIP_DIRECTION));
      const clipStart = getClipDirection(clipAttr);
      const clipEnd = getClipDirection("full");
      const tl = scrollInTL(item2);
      tl.fromTo(
        item2,
        {
          clipPath: clipStart
        },
        {
          clipPath: clipEnd
        }
      );
    };
    const scrollInContainer = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const tl = scrollInTL(child);
        const tween2 = defaultTween(child, tl);
      });
    };
    const scrollInStagger = function(item2) {
      if (!item2) return;
      const staggerAmount = attr(EASE_LARGE, item2.getAttribute(SCROLL_STAGGER));
      let children = getNonContentsChildren(item2);
      if (children.length === 0) return;
      const tl = scrollInTL(item2);
      const tween2 = defaultTween(children, tl, { stagger: staggerAmount });
    };
    const scrollInRichText = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const childTag = child.tagName;
        if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(childTag)) {
          scrollInHeading(child);
        }
        if (childTag === "FIGURE") {
          scrollInImage(child);
        } else {
          scrollInItem(child);
        }
      });
    };
    const wraps = [...document.querySelectorAll(`[${ATTRIBUTE}="${WRAP}"]`)];
    if (wraps.length === 0) return;
    wraps.forEach((wrap2) => {
      let runOnBreakpoint = checkBreakpoints(wrap2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false && wrap2.getAttribute("data-ix-load-run") === "false") return;
      const items = [...wrap2.querySelectorAll(`[${ATTRIBUTE}]:not([${ATTRIBUTE}-run="false"])`)];
      if (items.length === 0) return;
      items.forEach((item2) => {
        if (!item2) return;
        const scrollInType = item2.getAttribute(ELEMENT);
        if (scrollInType === HEADING) {
          scrollInHeading(item2);
        }
        if (scrollInType === ITEM) {
          scrollInItem(item2);
        }
        if (scrollInType === IMAGE) {
          scrollInImage(item2);
        }
        if (scrollInType === LINE) {
          scrollInLine(item2);
        }
        if (scrollInType === CONTAINER) {
          scrollInContainer(item2);
        }
        if (scrollInType === STAGGER) {
          scrollInStagger(item2);
        }
        if (scrollInType === RICH_TEXT) {
          scrollInRichText(item2);
        }
      });
    });
  };

  // src/interactions/scrolling.js
  init_live_reload();
  var scrolling = function(gsapContext) {
    const ANIMATION_ID = "scrolling";
    const WRAP = `[data-ix-scrolling="wrap"]`;
    const TRIGGER = `[data-ix-scrolling="trigger"]`;
    const LAYER = '[data-ix-scrolling="layer"]';
    const START = "data-ix-scrolling-start";
    const END = "data-ix-scrolling-end";
    const TABLET_START = "data-ix-scrolling-start-tablet";
    const TABLET_END = "data-ix-scrolling-end-tablet";
    const MOBILE_START = "data-ix-scrolling-start-mobile";
    const MOBILE_END = "data-ix-scrolling-end-mobile";
    const SCRUB = "data-ix-scrolling-scrub";
    const POSITION = "data-ix-scrolling-position";
    const DURATION = "data-ix-scrolling-duration";
    const EASE = "data-ix-scrolling-ease";
    const X_START = "data-ix-scrolling-x-start";
    const X_END = "data-ix-scrolling-x-end";
    const Y_START = "data-ix-scrolling-y-start";
    const Y_END = "data-ix-scrolling-y-end";
    const SCALE_START = "data-ix-scrolling-scale-start";
    const SCALE_END = "data-ix-scrolling-scale-end";
    const SCALE_X_START = "data-ix-scrolling-scale-x-start";
    const SCALE_X_END = "data-ix-scrolling-scale-x-end";
    const SCALE_Y_START = "data-ix-scrolling-scale-y-start";
    const SCALE_Y_END = "data-ix-scrolling-scale-y-end";
    const WIDTH_START = "data-ix-scrolling-width-start";
    const WIDTH_END = "data-ix-scrolling-width-end";
    const HEIGHT_START = "data-ix-scrolling-height-start";
    const HEIGHT_END = "data-ix-scrolling-height-end";
    const ROTATE_X_START = "data-ix-scrolling-rotate-x-start";
    const ROTATE_X_END = "data-ix-scrolling-rotate-x-end";
    const ROTATE_Y_START = "data-ix-scrolling-rotate-y-start";
    const ROTATE_Y_END = "data-ix-scrolling-rotate-y-end";
    const ROTATE_Z_START = "data-ix-scrolling-rotate-z-start";
    const ROTATE_Z_END = "data-ix-scrolling-rotate-z-end";
    const OPACITY_START = "data-ix-scrolling-opacity-start";
    const OPACITY_END = "data-ix-scrolling-opacity-end";
    const RADIUS_START = "data-ix-scrolling-radius-start";
    const RADIUS_END = "data-ix-scrolling-radius-end";
    const CLIP_START = "data-ix-scrolling-clip-start";
    const CLIP_END = "data-ix-scrolling-clip-end";
    const scrollingItems = gsap.utils.toArray(WRAP);
    scrollingItems.forEach((scrollingItem) => {
      const layers = scrollingItem.querySelectorAll(LAYER);
      if (!scrollingItem || layers.length === 0) return;
      let trigger = scrollingItem.querySelector(TRIGGER);
      if (!trigger) {
        trigger = scrollingItem;
      }
      let runOnBreakpoint = checkBreakpoints(scrollingItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
      const tlSettings = {
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        ease: "none"
      };
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(START));
      tlSettings.end = attr(tlSettings.end, scrollingItem.getAttribute(END));
      tlSettings.scrub = attr(tlSettings.scrub, scrollingItem.getAttribute(SCRUB));
      tlSettings.ease = attr(tlSettings.ease, scrollingItem.getAttribute(EASE));
      if (isTablet && scrollingItem.getAttribute(TABLET_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_START));
      }
      if (isTablet && scrollingItem.getAttribute(TABLET_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_END));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_START));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_END));
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: tlSettings.start,
          end: tlSettings.end,
          scrub: tlSettings.scrub,
          markers: false
        },
        defaults: {
          duration: 1,
          ease: tlSettings.ease
        }
      });
      layers.forEach((layer) => {
        if (!layer) return;
        const varsFrom = {};
        const varsTo = {};
        varsFrom.x = attrIfSet(layer, X_START, "0%");
        varsTo.x = attrIfSet(layer, X_END, "0%");
        varsFrom.y = attrIfSet(layer, Y_START, "0%");
        varsTo.y = attrIfSet(layer, Y_END, "0%");
        varsFrom.scale = attrIfSet(layer, SCALE_START, 1);
        varsTo.scale = attrIfSet(layer, SCALE_END, 1);
        varsFrom.scaleX = attrIfSet(layer, SCALE_X_START, 1);
        varsTo.scaleX = attrIfSet(layer, SCALE_X_END, 1);
        varsFrom.scaleY = attrIfSet(layer, SCALE_Y_START, 1);
        varsTo.scaleY = attrIfSet(layer, SCALE_Y_END, 1);
        varsFrom.width = attrIfSet(layer, WIDTH_START, "0%");
        varsTo.width = attrIfSet(layer, WIDTH_END, "0%");
        varsFrom.height = attrIfSet(layer, HEIGHT_START, "0%");
        varsTo.height = attrIfSet(layer, HEIGHT_END, "0%");
        varsFrom.rotateX = attrIfSet(layer, ROTATE_X_START, 0);
        varsTo.rotateX = attrIfSet(layer, ROTATE_X_END, 0);
        varsFrom.rotateY = attrIfSet(layer, ROTATE_Y_START, 0);
        varsTo.rotateY = attrIfSet(layer, ROTATE_Y_END, 0);
        varsFrom.rotateZ = attrIfSet(layer, ROTATE_Z_START, 0);
        varsTo.rotateZ = attrIfSet(layer, ROTATE_Z_END, 0);
        varsFrom.opacity = attrIfSet(layer, OPACITY_START, 0);
        varsTo.opacity = attrIfSet(layer, OPACITY_END, 0);
        varsFrom.borderRadius = attrIfSet(layer, RADIUS_START, "string");
        varsTo.borderRadius = attrIfSet(layer, RADIUS_END, "string");
        const clipStart = attrIfSet(layer, CLIP_START, "left");
        const clipEnd = attrIfSet(layer, CLIP_END, "full");
        varsFrom.clipPath = getClipDirection(clipStart);
        varsTo.clipPath = getClipDirection(clipEnd);
        const position = attr("<", layer.getAttribute(POSITION));
        const duration = attr(1, layer.getAttribute(DURATION));
        varsTo.ease = attr(layer, EASE, "none");
        let tween2 = tl.fromTo(layer, varsFrom, varsTo, position);
      });
    });
  };

  // src/interactions/slider.js
  init_live_reload();
  var sliderComponent = function() {
    const ANIMATION_ID = "slider";
    const ATTRIBUTE = "data-ix-slider";
    const SLIDER = "[data-ix-slider='component']";
    const NEXT = "[data-ix-slider='next']";
    const PREVIOUS = "[data-ix-slider='previous']";
    const PAGINATION = ".slider_bullet_list";
    const PAGINATION_BUTTON = "slider_bullet_item";
    const SCROLLBAR = ".slider_scrollbar";
    const SCROLLBAR_HANDLE = "slider_scrollbar_handle";
    const FOLLOW_FINGER = "data-ix-slider-follow-finger";
    const MOUSEWHEEL = "data-ix-slider-mousewheel";
    const FREE_MODE = "data-ix-slider-free-mode";
    const SLIDE_TO_CLICKED = "data-ix-slider-slide-to-clicked";
    const LOOP = "data-ix-slider-loop";
    const SPEED = "data-ix-slider-speed";
    const ACTIVE_CLASS = "is-active";
    const sliders = document.querySelectorAll(`${SLIDER}:not(${SLIDER} ${SLIDER})`);
    sliders.forEach((component) => {
      if (component.dataset.scriptInitialized) return;
      component.dataset.scriptInitialized = "true";
      const swiperElement = component.querySelector(".slider_element");
      const swiperWrapper = component.querySelector(".slider_list");
      if (!swiperElement || !swiperWrapper) return;
      function removeCMSList(slot) {
        const dynList = Array.from(slot.children).find(
          (child) => child.classList.contains("w-dyn-list")
        );
        if (!dynList) return;
        const nestedItems = dynList?.firstElementChild?.children;
        if (!nestedItems) return;
        const staticWrapper = [...slot.children];
        [...nestedItems].forEach(
          (el) => el.firstElementChild && slot.appendChild(el.firstElementChild)
        );
        staticWrapper.forEach((el) => el.remove());
      }
      removeCMSList(swiperWrapper);
      [...swiperWrapper.children].forEach((el) => el.classList.add("swiper-slide"));
      const followFinger = attr(true, swiperElement.getAttribute(FOLLOW_FINGER));
      const freeMode = attr(true, swiperElement.getAttribute(FREE_MODE));
      const mousewheel = attr(true, swiperElement.getAttribute(MOUSEWHEEL));
      const slideToClickedSlide = attr(false, swiperElement.getAttribute(SLIDE_TO_CLICKED));
      const loopMode = attr(false, swiperElement.getAttribute(LOOP));
      const speed = attr(600, swiperElement.getAttribute(SPEED));
      new Swiper(swiperElement, {
        slidesPerView: "auto",
        followFinger,
        freeMode,
        slideToClickedSlide,
        centeredSlides: false,
        autoHeight: false,
        loop: loopMode,
        //   loopAdditionalSlides: 0,
        speed,
        mousewheel: {
          enabled: mousewheel,
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        navigation: {
          nextEl: component.querySelector(NEXT),
          prevEl: component.querySelector(PREVIOUS)
        },
        pagination: {
          el: component.querySelector(`${PAGINATION}`),
          bulletActiveClass: ACTIVE_CLASS,
          bulletClass: `${PAGINATION_BUTTON}`,
          bulletElement: "button",
          clickable: true
        },
        scrollbar: {
          el: component.querySelector(SCROLLBAR),
          draggable: true,
          dragClass: SCROLLBAR_HANDLE,
          snapOnRelease: true
        },
        slideActiveClass: ACTIVE_CLASS,
        slideDuplicateActiveClass: ACTIVE_CLASS
      });
    });
  };

  // src/interactions/video-plyr.js
  init_live_reload();

  // node_modules/plyr/src/js/plyr.js
  init_live_reload();

  // node_modules/plyr/src/js/captions.js
  init_live_reload();

  // node_modules/plyr/src/js/controls.js
  init_live_reload();
  var import_rangetouch = __toESM(require_rangetouch(), 1);

  // node_modules/plyr/src/js/html5.js
  init_live_reload();

  // node_modules/plyr/src/js/support.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/animation.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/is.js
  init_live_reload();
  var getConstructor = (input) => input !== null && typeof input !== "undefined" ? input.constructor : null;
  var instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);
  var isNullOrUndefined = (input) => input === null || typeof input === "undefined";
  var isObject = (input) => getConstructor(input) === Object;
  var isNumber = (input) => getConstructor(input) === Number && !Number.isNaN(input);
  var isString = (input) => getConstructor(input) === String;
  var isBoolean = (input) => getConstructor(input) === Boolean;
  var isFunction = (input) => typeof input === "function";
  var isArray = (input) => Array.isArray(input);
  var isWeakMap = (input) => instanceOf(input, WeakMap);
  var isNodeList = (input) => instanceOf(input, NodeList);
  var isTextNode = (input) => getConstructor(input) === Text;
  var isEvent = (input) => instanceOf(input, Event);
  var isKeyboardEvent = (input) => instanceOf(input, KeyboardEvent);
  var isCue = (input) => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);
  var isTrack = (input) => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);
  var isPromise = (input) => instanceOf(input, Promise) && isFunction(input.then);
  function isElement(input) {
    return input !== null && typeof input === "object" && input.nodeType === 1 && typeof input.style === "object" && typeof input.ownerDocument === "object";
  }
  function isEmpty(input) {
    return isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;
  }
  function isUrl(input) {
    if (instanceOf(input, window.URL)) {
      return true;
    }
    if (!isString(input)) {
      return false;
    }
    let string = input;
    if (!input.startsWith("http://") || !input.startsWith("https://")) {
      string = `http://${input}`;
    }
    try {
      return !isEmpty(new URL(string).hostname);
    } catch {
      return false;
    }
  }
  var is_default = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction,
    array: isArray,
    weakMap: isWeakMap,
    nodeList: isNodeList,
    element: isElement,
    textNode: isTextNode,
    event: isEvent,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    promise: isPromise,
    url: isUrl,
    empty: isEmpty
  };

  // node_modules/plyr/src/js/utils/animation.js
  var transitionEndEvent = (() => {
    const element = document.createElement("span");
    const events = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    const type = Object.keys(events).find((event) => element.style[event] !== void 0);
    return is_default.string(type) ? events[type] : false;
  })();
  function repaint(element, delay) {
    setTimeout(() => {
      try {
        element.hidden = true;
        element.offsetHeight;
        element.hidden = false;
      } catch {
      }
    }, delay);
  }

  // node_modules/plyr/src/js/utils/elements.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/objects.js
  init_live_reload();
  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  }
  function getDeep(object, path) {
    return path.split(".").reduce((obj, key) => obj && obj[key], object);
  }
  function extend(target = {}, ...sources) {
    if (!sources.length) {
      return target;
    }
    const source2 = sources.shift();
    if (!is_default.object(source2)) {
      return target;
    }
    Object.keys(source2).forEach((key) => {
      if (is_default.object(source2[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, { [key]: {} });
        }
        extend(target[key], source2[key]);
      } else {
        Object.assign(target, { [key]: source2[key] });
      }
    });
    return extend(target, ...sources);
  }

  // node_modules/plyr/src/js/utils/elements.js
  function wrap(elements, wrapper) {
    const targets = elements.length ? elements : [elements];
    Array.from(targets).reverse().forEach((element, index) => {
      const child = index > 0 ? wrapper.cloneNode(true) : wrapper;
      const parent = element.parentNode;
      const sibling = element.nextSibling;
      child.appendChild(element);
      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    });
  }
  function setAttributes(element, attributes) {
    if (!is_default.element(element) || is_default.empty(attributes)) return;
    Object.entries(attributes).filter(([, value]) => !is_default.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
  }
  function createElement(type, attributes, text) {
    const element = document.createElement(type);
    if (is_default.object(attributes)) {
      setAttributes(element, attributes);
    }
    if (is_default.string(text)) {
      element.textContent = text;
    }
    return element;
  }
  function insertAfter(element, target) {
    if (!is_default.element(element) || !is_default.element(target)) return;
    target.parentNode.insertBefore(element, target.nextSibling);
  }
  function insertElement(type, parent, attributes, text) {
    if (!is_default.element(parent)) return;
    parent.appendChild(createElement(type, attributes, text));
  }
  function removeElement(element) {
    if (is_default.nodeList(element) || is_default.array(element)) {
      Array.from(element).forEach(removeElement);
      return;
    }
    if (!is_default.element(element) || !is_default.element(element.parentNode)) {
      return;
    }
    element.parentNode.removeChild(element);
  }
  function emptyElement(element) {
    if (!is_default.element(element)) return;
    let { length } = element.childNodes;
    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  }
  function replaceElement(newChild, oldChild) {
    if (!is_default.element(oldChild) || !is_default.element(oldChild.parentNode) || !is_default.element(newChild)) return null;
    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  }
  function getAttributesFromSelector(sel, existingAttributes) {
    if (!is_default.string(sel) || is_default.empty(sel)) return {};
    const attributes = {};
    const existing = extend({}, existingAttributes);
    sel.split(",").forEach((s) => {
      const selector = s.trim();
      const className = selector.replace(".", "");
      const stripped = selector.replace(/[[\]]/g, "");
      const parts = stripped.split("=");
      const [key] = parts;
      const value = parts.length > 1 ? parts[1].replace(/["']/g, "") : "";
      const start = selector.charAt(0);
      switch (start) {
        case ".":
          if (is_default.string(existing.class)) {
            attributes.class = `${existing.class} ${className}`;
          } else {
            attributes.class = className;
          }
          break;
        case "#":
          attributes.id = selector.replace("#", "");
          break;
        case "[":
          attributes[key] = value;
          break;
        default:
          break;
      }
    });
    return extend(existing, attributes);
  }
  function toggleHidden(element, hidden) {
    if (!is_default.element(element)) return;
    let hide = hidden;
    if (!is_default.boolean(hide)) {
      hide = !element.hidden;
    }
    element.hidden = hide;
  }
  function toggleClass(element, className, force) {
    if (is_default.nodeList(element)) {
      return Array.from(element).map((e) => toggleClass(e, className, force));
    }
    if (is_default.element(element)) {
      let method = "toggle";
      if (typeof force !== "undefined") {
        method = force ? "add" : "remove";
      }
      element.classList[method](className);
      return element.classList.contains(className);
    }
    return false;
  }
  function hasClass(element, className) {
    return is_default.element(element) && element.classList.contains(className);
  }
  function matches(element, selector) {
    const { prototype } = Element;
    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }
    const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
    return method.call(element, selector);
  }
  function closest(element, selector) {
    const { prototype } = Element;
    function closestElement() {
      let el = this;
      do {
        if (matches.matches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    }
    const method = prototype.closest || closestElement;
    return method.call(element, selector);
  }
  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  }
  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  }
  function setFocus(element = null, focusVisible = false) {
    if (!is_default.element(element)) return;
    element.focus({ preventScroll: true, focusVisible });
  }

  // node_modules/plyr/src/js/support.js
  var defaultCodecs = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  };
  var support = {
    // Basic support
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    // Check for support
    // Basic functionality vs full UI
    check(type, provider) {
      const api = support[type] || provider !== "html5";
      const ui2 = api && support.rangeInput;
      return {
        api,
        ui: ui2
      };
    },
    // Picture-in-picture support
    pip: (() => {
      return document.pictureInPictureEnabled && !createElement("video").disablePictureInPicture;
    })(),
    // Airplay support
    // Safari only currently
    airplay: is_default.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: "playsInline" in document.createElement("video"),
    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime(input) {
      if (is_default.empty(input)) {
        return false;
      }
      const [mediaType] = input.split("/");
      let type = input;
      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      }
      if (Object.keys(defaultCodecs).includes(type)) {
        type += `; codecs="${defaultCodecs[input]}"`;
      }
      try {
        return Boolean(type && this.media.canPlayType(type).replace(/no/, ""));
      } catch {
        return false;
      }
    },
    // Check for textTracks support
    textTracks: "textTracks" in document.createElement("video"),
    // <input type="range"> Sliders
    rangeInput: (() => {
      const range = document.createElement("input");
      range.type = "range";
      return range.type === "range";
    })(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: "ontouchstart" in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  };
  var support_default = support;

  // node_modules/plyr/src/js/utils/events.js
  init_live_reload();
  var supportsPassiveListeners = (() => {
    let supported = false;
    try {
      const options = Object.defineProperty({}, "passive", {
        get() {
          supported = true;
          return null;
        }
      });
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch {
    }
    return supported;
  })();
  function toggleListener(element, event, callback, toggle = false, passive = true, capture = false) {
    if (!element || !("addEventListener" in element) || is_default.empty(event) || !is_default.function(callback)) {
      return;
    }
    const events = event.split(" ");
    let options = capture;
    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive,
        // Whether the listener is a capturing listener or not
        capture
      };
    }
    events.forEach((type) => {
      if (this && this.eventListeners && toggle) {
        this.eventListeners.push({ element, type, callback, options });
      }
      element[toggle ? "addEventListener" : "removeEventListener"](type, callback, options);
    });
  }
  function on(element, events = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, true, passive, capture);
  }
  function off(element, events = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, false, passive, capture);
  }
  function once(element, events = "", callback, passive = true, capture = false) {
    const onceCallback = (...args) => {
      off(element, events, onceCallback, passive, capture);
      callback.apply(this, args);
    };
    toggleListener.call(this, element, events, onceCallback, true, passive, capture);
  }
  function triggerEvent(element, type = "", bubbles = false, detail = {}) {
    if (!is_default.element(element) || is_default.empty(type)) {
      return;
    }
    const event = new CustomEvent(type, {
      bubbles,
      detail: { ...detail, plyr: this }
    });
    element.dispatchEvent(event);
  }
  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach((item2) => {
        const { element, type, callback, options } = item2;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  }
  function ready() {
    return new Promise(
      (resolve) => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, "ready", resolve)
    ).then(() => {
    });
  }

  // node_modules/plyr/src/js/utils/promise.js
  init_live_reload();
  function silencePromise(value) {
    if (is_default.promise(value)) {
      value.then(null, () => {
      });
    }
  }

  // node_modules/plyr/src/js/utils/style.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/arrays.js
  init_live_reload();
  function dedupe(array) {
    if (!is_default.array(array)) {
      return array;
    }
    return array.filter((item2, index) => array.indexOf(item2) === index);
  }
  function closest2(array, value) {
    if (!is_default.array(array) || !array.length) {
      return null;
    }
    return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
  }

  // node_modules/plyr/src/js/utils/style.js
  function supportsCSS(declaration) {
    if (!window || !window.CSS) {
      return false;
    }
    return window.CSS.supports(declaration);
  }
  var standardRatios = [
    [1, 1],
    [4, 3],
    [3, 4],
    [5, 4],
    [4, 5],
    [3, 2],
    [2, 3],
    [16, 10],
    [10, 16],
    [16, 9],
    [9, 16],
    [21, 9],
    [9, 21],
    [32, 9],
    [9, 32]
  ].reduce((out, [x, y]) => ({ ...out, [x / y]: [x, y] }), {});
  function validateAspectRatio(input) {
    if (!is_default.array(input) && (!is_default.string(input) || !input.includes(":"))) {
      return false;
    }
    const ratio = is_default.array(input) ? input : input.split(":");
    return ratio.map(Number).every(is_default.number);
  }
  function reduceAspectRatio(ratio) {
    if (!is_default.array(ratio) || !ratio.every(is_default.number)) {
      return null;
    }
    const [width, height] = ratio;
    const getDivider = (w, h) => h === 0 ? w : getDivider(h, w % h);
    const divider = getDivider(width, height);
    return [width / divider, height / divider];
  }
  function getAspectRatio(input) {
    const parse = (ratio2) => validateAspectRatio(ratio2) ? ratio2.split(":").map(Number) : null;
    let ratio = parse(input);
    if (ratio === null) {
      ratio = parse(this.config.ratio);
    }
    if (ratio === null && !is_default.empty(this.embed) && is_default.array(this.embed.ratio)) {
      ({ ratio } = this.embed);
    }
    if (ratio === null && this.isHTML5) {
      const { videoWidth, videoHeight } = this.media;
      ratio = [videoWidth, videoHeight];
    }
    return reduceAspectRatio(ratio);
  }
  function setAspectRatio(input) {
    if (!this.isVideo) {
      return {};
    }
    const { wrapper } = this.elements;
    const ratio = getAspectRatio.call(this, input);
    if (!is_default.array(ratio)) {
      return {};
    }
    const [x, y] = reduceAspectRatio(ratio);
    const useNative = supportsCSS(`aspect-ratio: ${x}/${y}`);
    const padding = 100 / x * y;
    if (useNative) {
      wrapper.style.aspectRatio = `${x}/${y}`;
    } else {
      wrapper.style.paddingBottom = `${padding}%`;
    }
    if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      const height = 100 / this.media.offsetWidth * Number.parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
      const offset = (height - padding) / (height / 50);
      if (this.fullscreen.active) {
        wrapper.style.paddingBottom = null;
      } else {
        this.media.style.transform = `translateY(-${offset}%)`;
      }
    } else if (this.isHTML5) {
      wrapper.classList.add(this.config.classNames.videoFixedRatio);
    }
    return { padding, ratio };
  }
  function roundAspectRatio(x, y, tolerance = 0.05) {
    const ratio = x / y;
    const closestRatio = closest2(Object.keys(standardRatios), ratio);
    if (Math.abs(closestRatio - ratio) <= tolerance) {
      return standardRatios[closestRatio];
    }
    return [x, y];
  }
  function getViewportSize() {
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return [width, height];
  }

  // node_modules/plyr/src/js/html5.js
  var html5 = {
    getSources() {
      if (!this.isHTML5) {
        return [];
      }
      const sources = Array.from(this.media.querySelectorAll("source"));
      return sources.filter((source2) => {
        const type = source2.getAttribute("type");
        if (is_default.empty(type)) {
          return true;
        }
        return support_default.mime.call(this, type);
      });
    },
    // Get quality levels
    getQualityOptions() {
      if (this.config.quality.forced) {
        return this.config.quality.options;
      }
      return html5.getSources.call(this).map((source2) => Number(source2.getAttribute("size"))).filter(Boolean);
    },
    setup() {
      if (!this.isHTML5) {
        return;
      }
      const player = this;
      player.options.speed = player.config.speed.options;
      if (!is_default.empty(this.config.ratio)) {
        setAspectRatio.call(player);
      }
      Object.defineProperty(player.media, "quality", {
        get() {
          const sources = html5.getSources.call(player);
          const source2 = sources.find((s) => s.getAttribute("src") === player.source);
          return source2 && Number(source2.getAttribute("size"));
        },
        set(input) {
          if (player.quality === input) {
            return;
          }
          if (player.config.quality.forced && is_default.function(player.config.quality.onChange)) {
            player.config.quality.onChange(input);
          } else {
            const sources = html5.getSources.call(player);
            const source2 = sources.find((s) => Number(s.getAttribute("size")) === input);
            if (!source2) {
              return;
            }
            const { currentTime, paused, preload, readyState, playbackRate } = player.media;
            player.media.src = source2.getAttribute("src");
            if (preload !== "none" || readyState) {
              player.once("loadedmetadata", () => {
                player.speed = playbackRate;
                player.currentTime = currentTime;
                if (!paused) {
                  silencePromise(player.play());
                }
              });
              player.media.load();
            }
          }
          triggerEvent.call(player, player.media, "qualitychange", false, {
            quality: input
          });
        }
      });
    },
    // Cancel current network requests
    // See https://github.com/sampotts/plyr/issues/174
    cancelRequests() {
      if (!this.isHTML5) {
        return;
      }
      removeElement(html5.getSources.call(this));
      this.media.setAttribute("src", this.config.blankVideo);
      this.media.load();
      this.debug.log("Cancelled network requests");
    }
  };
  var html5_default = html5;

  // node_modules/plyr/src/js/utils/browser.js
  init_live_reload();
  var isIE = Boolean(window.document.documentMode);
  var isEdge = /Edge/.test(navigator.userAgent);
  var isWebKit = "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent);
  var isIPhone = /iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  var isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  var isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  var browser_default = {
    isIE,
    isEdge,
    isWebKit,
    isIPhone,
    isIPadOS,
    isIos
  };

  // node_modules/plyr/src/js/utils/i18n.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/strings.js
  init_live_reload();
  function generateId(prefix) {
    return `${prefix}-${Math.floor(Math.random() * 1e4)}`;
  }
  function format(input, ...args) {
    if (is_default.empty(input)) return input;
    return input.toString().replace(/\{(\d+)\}/g, (_, i2) => args[i2].toString());
  }
  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }
    return (current / max * 100).toFixed(2);
  }
  function replaceAll(input = "", find = "", replace = "") {
    return input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), replace.toString());
  }
  function toTitleCase(input = "") {
    return input.toString().replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  }
  function toPascalCase(input = "") {
    let string = input.toString();
    string = replaceAll(string, "-", " ");
    string = replaceAll(string, "_", " ");
    string = toTitleCase(string);
    return replaceAll(string, " ", "");
  }
  function toCamelCase(input = "") {
    let string = input.toString();
    string = toPascalCase(string);
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  function stripHTML(source2) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    fragment.appendChild(element);
    element.innerHTML = source2;
    return fragment.firstChild.textContent;
  }
  function getHTML(element) {
    const wrapper = document.createElement("div");
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }

  // node_modules/plyr/src/js/utils/i18n.js
  var resources = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  };
  var i18n = {
    get(key = "", config = {}) {
      if (is_default.empty(key) || is_default.empty(config)) {
        return "";
      }
      let string = getDeep(config.i18n, key);
      if (is_default.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }
        return "";
      }
      const replace = {
        "{seektime}": config.seekTime,
        "{title}": config.title
      };
      Object.entries(replace).forEach(([k, v]) => {
        string = replaceAll(string, k, v);
      });
      return string;
    }
  };
  var i18n_default = i18n;

  // node_modules/plyr/src/js/utils/load-sprite.js
  init_live_reload();

  // node_modules/plyr/src/js/storage.js
  init_live_reload();
  var Storage = class _Storage {
    constructor(player) {
      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    }
    // Check for actual support (see if we can use it)
    static get supported() {
      try {
        if (!("localStorage" in window)) return false;
        const test = "___test";
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    get = (key) => {
      if (!_Storage.supported || !this.enabled) {
        return null;
      }
      const store = window.localStorage.getItem(this.key);
      if (is_default.empty(store)) return null;
      const json = JSON.parse(store);
      return is_default.string(key) && key.length ? json[key] : json;
    };
    set = (object) => {
      if (!_Storage.supported || !this.enabled) {
        return;
      }
      if (!is_default.object(object)) {
        return;
      }
      let storage = this.get();
      if (is_default.empty(storage)) {
        storage = {};
      }
      extend(storage, object);
      try {
        window.localStorage.setItem(this.key, JSON.stringify(storage));
      } catch {
      }
    };
  };
  var storage_default = Storage;

  // node_modules/plyr/src/js/utils/fetch.js
  init_live_reload();
  function fetch(url, responseType = "text", withCredentials = false) {
    return new Promise((resolve, reject) => {
      try {
        const request = new XMLHttpRequest();
        if (!("withCredentials" in request)) return;
        if (withCredentials) {
          request.withCredentials = true;
        }
        request.addEventListener("load", () => {
          if (responseType === "text") {
            try {
              resolve(JSON.parse(request.responseText));
            } catch {
              resolve(request.responseText);
            }
          } else {
            resolve(request.response);
          }
        });
        request.addEventListener("error", () => {
          throw new Error(request.status);
        });
        request.open("GET", url, true);
        request.responseType = responseType;
        request.send();
      } catch (error) {
        reject(error);
      }
    });
  }

  // node_modules/plyr/src/js/utils/load-sprite.js
  function loadSprite(url, id) {
    if (!is_default.string(url)) {
      return;
    }
    const prefix = "cache";
    const hasId = is_default.string(id);
    let isCached = false;
    const exists = () => document.getElementById(id) !== null;
    const update = (container, data) => {
      container.innerHTML = data;
      if (hasId && exists()) {
        return;
      }
      document.body.insertAdjacentElement("afterbegin", container);
    };
    if (!hasId || !exists()) {
      const useStorage = storage_default.supported;
      const container = document.createElement("div");
      container.setAttribute("hidden", "");
      if (hasId) {
        container.setAttribute("id", id);
      }
      if (useStorage) {
        const cached = window.localStorage.getItem(`${prefix}-${id}`);
        isCached = cached !== null;
        if (isCached) {
          const data = JSON.parse(cached);
          update(container, data.content);
        }
      }
      fetch(url).then((result) => {
        if (is_default.empty(result)) {
          return;
        }
        if (useStorage) {
          try {
            window.localStorage.setItem(
              `${prefix}-${id}`,
              JSON.stringify({
                content: result
              })
            );
          } catch {
          }
        }
        update(container, result);
      }).catch(() => {
      });
    }
  }

  // node_modules/plyr/src/js/utils/time.js
  init_live_reload();
  var getHours = (value) => Math.trunc(value / 60 / 60 % 60, 10);
  var getMinutes = (value) => Math.trunc(value / 60 % 60, 10);
  var getSeconds = (value) => Math.trunc(value % 60, 10);
  function formatTime(time = 0, displayHours = false, inverted = false) {
    if (!is_default.number(time)) {
      return formatTime(void 0, displayHours, inverted);
    }
    const format2 = (value) => `0${value}`.slice(-2);
    let hours = getHours(time);
    const mins = getMinutes(time);
    const secs = getSeconds(time);
    if (displayHours || hours > 0) {
      hours = `${hours}:`;
    } else {
      hours = "";
    }
    return `${inverted && time > 0 ? "-" : ""}${hours}${format2(mins)}:${format2(secs)}`;
  }

  // node_modules/plyr/src/js/controls.js
  var controls = {
    // Get icon URL
    getIconUrl() {
      const url = new URL(this.config.iconUrl, window.location);
      const host = window.location.host ? window.location.host : window.top.location.host;
      const cors = url.host !== host || browser_default.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors
      };
    },
    // Find the UI controls
    findElements() {
      try {
        this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper);
        this.elements.buttons = {
          play: getElements.call(this, this.config.selectors.buttons.play),
          pause: getElement.call(this, this.config.selectors.buttons.pause),
          restart: getElement.call(this, this.config.selectors.buttons.restart),
          rewind: getElement.call(this, this.config.selectors.buttons.rewind),
          fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
          mute: getElement.call(this, this.config.selectors.buttons.mute),
          pip: getElement.call(this, this.config.selectors.buttons.pip),
          airplay: getElement.call(this, this.config.selectors.buttons.airplay),
          settings: getElement.call(this, this.config.selectors.buttons.settings),
          captions: getElement.call(this, this.config.selectors.buttons.captions),
          fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
        };
        this.elements.progress = getElement.call(this, this.config.selectors.progress);
        this.elements.inputs = {
          seek: getElement.call(this, this.config.selectors.inputs.seek),
          volume: getElement.call(this, this.config.selectors.inputs.volume)
        };
        this.elements.display = {
          buffer: getElement.call(this, this.config.selectors.display.buffer),
          currentTime: getElement.call(this, this.config.selectors.display.currentTime),
          duration: getElement.call(this, this.config.selectors.display.duration)
        };
        if (is_default.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`);
        }
        return true;
      } catch (error) {
        this.debug.warn("It looks like there is a problem with your custom controls HTML", error);
        this.toggleNativeControls(true);
        return false;
      }
    },
    // Create <svg> icon
    createIcon(type, attributes) {
      const namespace = "http://www.w3.org/2000/svg";
      const iconUrl = controls.getIconUrl.call(this);
      const iconPath = `${!iconUrl.cors ? iconUrl.url : ""}#${this.config.iconPrefix}`;
      const icon = document.createElementNS(namespace, "svg");
      setAttributes(
        icon,
        extend(attributes, {
          "aria-hidden": "true",
          "focusable": "false"
        })
      );
      const use = document.createElementNS(namespace, "use");
      const path = `${iconPath}-${type}`;
      if ("href" in use) {
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", path);
      }
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", path);
      icon.appendChild(use);
      return icon;
    },
    // Create hidden text label
    createLabel(key, attr2 = {}) {
      const text = i18n_default.get(key, this.config);
      const attributes = { ...attr2, class: [attr2.class, this.config.classNames.hidden].filter(Boolean).join(" ") };
      return createElement("span", attributes, text);
    },
    // Create a badge
    createBadge(text) {
      if (is_default.empty(text)) {
        return null;
      }
      const badge = createElement("span", {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(
        createElement(
          "span",
          {
            class: this.config.classNames.menu.badge
          },
          text
        )
      );
      return badge;
    },
    // Create a <button>
    createButton(buttonType, attr2) {
      const attributes = extend({}, attr2);
      let type = toCamelCase(buttonType);
      const props = {
        element: "button",
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ["element", "icon", "label"].forEach((key) => {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      });
      if (props.element === "button" && !Object.keys(attributes).includes("type")) {
        attributes.type = "button";
      }
      if (Object.keys(attributes).includes("class")) {
        if (!attributes.class.split(" ").includes(this.config.classNames.control)) {
          extend(attributes, {
            class: `${attributes.class} ${this.config.classNames.control}`
          });
        }
      } else {
        attributes.class = this.config.classNames.control;
      }
      switch (buttonType) {
        case "play":
          props.toggle = true;
          props.label = "play";
          props.labelPressed = "pause";
          props.icon = "play";
          props.iconPressed = "pause";
          break;
        case "mute":
          props.toggle = true;
          props.label = "mute";
          props.labelPressed = "unmute";
          props.icon = "volume";
          props.iconPressed = "muted";
          break;
        case "captions":
          props.toggle = true;
          props.label = "enableCaptions";
          props.labelPressed = "disableCaptions";
          props.icon = "captions-off";
          props.iconPressed = "captions-on";
          break;
        case "fullscreen":
          props.toggle = true;
          props.label = "enterFullscreen";
          props.labelPressed = "exitFullscreen";
          props.icon = "enter-fullscreen";
          props.iconPressed = "exit-fullscreen";
          break;
        case "play-large":
          attributes.class += ` ${this.config.classNames.control}--overlaid`;
          type = "play";
          props.label = "play";
          props.icon = "play";
          break;
        default:
          if (is_default.empty(props.label)) {
            props.label = type;
          }
          if (is_default.empty(props.icon)) {
            props.icon = buttonType;
          }
      }
      const button = createElement(props.element);
      if (props.toggle) {
        button.appendChild(
          controls.createIcon.call(this, props.iconPressed, {
            class: "icon--pressed"
          })
        );
        button.appendChild(
          controls.createIcon.call(this, props.icon, {
            class: "icon--not-pressed"
          })
        );
        button.appendChild(
          controls.createLabel.call(this, props.labelPressed, {
            class: "label--pressed"
          })
        );
        button.appendChild(
          controls.createLabel.call(this, props.label, {
            class: "label--not-pressed"
          })
        );
      } else {
        button.appendChild(controls.createIcon.call(this, props.icon));
        button.appendChild(controls.createLabel.call(this, props.label));
      }
      extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
      setAttributes(button, attributes);
      if (type === "play") {
        if (!is_default.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }
        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }
      return button;
    },
    // Create an <input type='range'>
    createRange(type, attributes) {
      const input = createElement(
        "input",
        extend(
          getAttributesFromSelector(this.config.selectors.inputs[type]),
          {
            "type": "range",
            "min": 0,
            "max": 100,
            "step": 0.01,
            "value": 0,
            "autocomplete": "off",
            // A11y fixes for https://github.com/sampotts/plyr/issues/905
            "role": "slider",
            "aria-label": i18n_default.get(type, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
          },
          attributes
        )
      );
      this.elements.inputs[type] = input;
      controls.updateRangeFill.call(this, input);
      import_rangetouch.default.setup(input);
      return input;
    },
    // Create a <progress>
    createProgress(type, attributes) {
      const progress = createElement(
        "progress",
        extend(
          getAttributesFromSelector(this.config.selectors.display[type]),
          {
            "min": 0,
            "max": 100,
            "value": 0,
            "role": "progressbar",
            "aria-hidden": true
          },
          attributes
        )
      );
      if (type !== "volume") {
        progress.appendChild(createElement("span", null, "0"));
        const suffixKey = {
          played: "played",
          buffer: "buffered"
        }[type];
        const suffix = suffixKey ? i18n_default.get(suffixKey, this.config) : "";
        progress.textContent = `% ${suffix.toLowerCase()}`;
      }
      this.elements.display[type] = progress;
      return progress;
    },
    // Create time display
    createTime(type, attrs) {
      const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
      const container = createElement(
        "div",
        extend(attributes, {
          "class": `${attributes.class ? attributes.class : ""} ${this.config.classNames.display.time} `.trim(),
          "aria-label": i18n_default.get(type, this.config),
          "role": "timer"
        }),
        "00:00"
      );
      this.elements.display[type] = container;
      return container;
    },
    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts(menuItem, type) {
      on.call(
        this,
        menuItem,
        "keydown keyup",
        (event) => {
          if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(event.key)) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          if (event.type === "keydown") {
            return;
          }
          const isRadioButton = matches(menuItem, '[role="menuitemradio"]');
          if (!isRadioButton && [" ", "ArrowRight"].includes(event.key)) {
            controls.showMenuPanel.call(this, type, true);
          } else {
            let target;
            if (event.key !== " ") {
              if (event.key === "ArrowDown" || isRadioButton && event.key === "ArrowRight") {
                target = menuItem.nextElementSibling;
                if (!is_default.element(target)) {
                  target = menuItem.parentNode.firstElementChild;
                }
              } else {
                target = menuItem.previousElementSibling;
                if (!is_default.element(target)) {
                  target = menuItem.parentNode.lastElementChild;
                }
              }
              setFocus.call(this, target, true);
            }
          }
        },
        false
      );
      on.call(this, menuItem, "keyup", (event) => {
        if (event.key !== "Return") return;
        controls.focusFirstMenuItem.call(this, null, true);
      });
    },
    // Create a settings menu item
    createMenuItem({ value, list, type, title, badge = null, checked = false }) {
      const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      const menuItem = createElement(
        "button",
        extend(attributes, {
          "type": "button",
          "role": "menuitemradio",
          "class": `${this.config.classNames.control} ${attributes.class ? attributes.class : ""}`.trim(),
          "aria-checked": checked,
          value
        })
      );
      const flex = createElement("span");
      flex.innerHTML = title;
      if (is_default.element(badge)) {
        flex.appendChild(badge);
      }
      menuItem.appendChild(flex);
      Object.defineProperty(menuItem, "checked", {
        enumerable: true,
        get() {
          return menuItem.getAttribute("aria-checked") === "true";
        },
        set(check) {
          if (check) {
            Array.from(menuItem.parentNode.children).filter((node) => matches(node, '[role="menuitemradio"]')).forEach((node) => node.setAttribute("aria-checked", "false"));
          }
          menuItem.setAttribute("aria-checked", check ? "true" : "false");
        }
      });
      this.listeners.bind(
        menuItem,
        "click keyup",
        (event) => {
          if (is_default.keyboardEvent(event) && event.key !== " ") {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          menuItem.checked = true;
          switch (type) {
            case "language":
              this.currentTrack = Number(value);
              break;
            case "quality":
              this.quality = value;
              break;
            case "speed":
              this.speed = Number.parseFloat(value);
              break;
            default:
              break;
          }
          controls.showMenuPanel.call(this, "home", is_default.keyboardEvent(event));
        },
        type,
        false
      );
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },
    // Format a time for display
    formatTime(time = 0, inverted = false) {
      if (!is_default.number(time)) {
        return time;
      }
      const forceHours = getHours(this.duration) > 0;
      return formatTime(time, forceHours, inverted);
    },
    // Update the displayed time
    updateTimeDisplay(target = null, time = 0, inverted = false) {
      if (!is_default.element(target) || !is_default.number(time)) {
        return;
      }
      target.textContent = controls.formatTime(time, inverted);
    },
    // Update volume UI and storage
    updateVolume() {
      if (!this.supported.ui) {
        return;
      }
      if (is_default.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      }
      if (is_default.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },
    // Update seek value and lower fill
    setRange(target, value = 0) {
      if (!is_default.element(target)) {
        return;
      }
      target.value = value;
      controls.updateRangeFill.call(this, target);
    },
    // Update <progress> elements
    updateProgress(event) {
      if (!this.supported.ui || !is_default.event(event)) {
        return;
      }
      let value = 0;
      const setProgress = (target, input) => {
        const val = is_default.number(input) ? input : 0;
        const progress = is_default.element(target) ? target : this.elements.display.buffer;
        if (is_default.element(progress)) {
          progress.value = val;
          const label = progress.getElementsByTagName("span")[0];
          if (is_default.element(label)) {
            label.childNodes[0].nodeValue = val;
          }
        }
      };
      if (event) {
        switch (event.type) {
          case "timeupdate":
          case "seeking":
          case "seeked":
            value = getPercentage(this.currentTime, this.duration);
            if (event.type === "timeupdate") {
              controls.setRange.call(this, this.elements.inputs.seek, value);
            }
            break;
          case "playing":
          case "progress":
            setProgress(this.elements.display.buffer, this.buffered * 100);
            break;
          default:
            break;
        }
      }
    },
    // Webkit polyfill for lower fill range
    updateRangeFill(target) {
      const range = is_default.event(target) ? target.target : target;
      if (!is_default.element(range) || range.getAttribute("type") !== "range") {
        return;
      }
      if (matches(range, this.config.selectors.inputs.seek)) {
        range.setAttribute("aria-valuenow", this.currentTime);
        const currentTime = controls.formatTime(this.currentTime);
        const duration = controls.formatTime(this.duration);
        const format2 = i18n_default.get("seekLabel", this.config);
        range.setAttribute(
          "aria-valuetext",
          format2.replace("{currentTime}", currentTime).replace("{duration}", duration)
        );
      } else if (matches(range, this.config.selectors.inputs.volume)) {
        const percent = range.value * 100;
        range.setAttribute("aria-valuenow", percent);
        range.setAttribute("aria-valuetext", `${percent.toFixed(1)}%`);
      } else {
        range.setAttribute("aria-valuenow", range.value);
      }
      if (!browser_default.isWebKit && !browser_default.isIPadOS) {
        return;
      }
      range.style.setProperty("--value", `${range.value / range.max * 100}%`);
    },
    // Update hover tooltip for seeking
    updateSeekTooltip(event) {
      if (!this.config.tooltips.seek || !is_default.element(this.elements.inputs.seek) || !is_default.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      }
      const tipElement = this.elements.display.seekTooltip;
      const visible = `${this.config.classNames.tooltip}--visible`;
      const toggle = (show) => toggleClass(tipElement, visible, show);
      if (this.touch) {
        toggle(false);
        return;
      }
      let percent = 0;
      const clientRect = this.elements.progress.getBoundingClientRect();
      if (is_default.event(event)) {
        const scrollLeft = event.pageX - event.clientX;
        percent = 100 / clientRect.width * (event.pageX - clientRect.left - scrollLeft);
      } else if (hasClass(tipElement, visible)) {
        percent = Number.parseFloat(tipElement.style.left, 10);
      } else {
        return;
      }
      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }
      const time = this.duration / 100 * percent;
      tipElement.textContent = controls.formatTime(time);
      const point = this.config.markers?.points?.find(({ time: t2 }) => t2 === Math.round(time));
      if (point) {
        tipElement.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
      }
      tipElement.style.left = `${percent}%`;
      if (is_default.event(event) && ["mouseenter", "mouseleave"].includes(event.type)) {
        toggle(event.type === "mouseenter");
      }
    },
    // Handle time change event
    timeUpdate(event) {
      const invert = !is_default.element(this.elements.display.duration) && this.config.invertTime;
      controls.updateTimeDisplay.call(
        this,
        this.elements.display.currentTime,
        invert ? this.duration - this.currentTime : this.currentTime,
        invert
      );
      if (event && event.type === "timeupdate" && this.media.seeking) {
        return;
      }
      controls.updateProgress.call(this, event);
    },
    // Show the duration on metadataloaded or durationchange events
    durationUpdate() {
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      }
      if (this.duration >= 2 ** 32) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      }
      if (is_default.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
      }
      const hasDuration = is_default.element(this.elements.display.duration);
      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      }
      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      }
      if (this.config.markers.enabled) {
        controls.setMarkers.call(this);
      }
      controls.updateSeekTooltip.call(this);
    },
    // Hide/show a tab
    toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.settings.buttons[setting], !toggle);
    },
    // Update the selected setting
    updateSetting(setting, container, input) {
      const pane = this.elements.settings.panels[setting];
      let value = null;
      let list = container;
      if (setting === "captions") {
        value = this.currentTrack;
      } else {
        value = !is_default.empty(input) ? input : this[setting];
        if (is_default.empty(value)) {
          value = this.config[setting].default;
        }
        if (!is_default.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn(`Unsupported value of '${value}' for ${setting}`);
          return;
        }
        if (!this.config[setting].options.includes(value)) {
          this.debug.warn(`Disabled value of '${value}' for ${setting}`);
          return;
        }
      }
      if (!is_default.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      }
      if (!is_default.element(list)) {
        return;
      }
      const label = this.elements.settings.buttons[setting].querySelector(`.${this.config.classNames.menu.value}`);
      label.innerHTML = controls.getLabel.call(this, setting, value);
      const target = list && list.querySelector(`[value="${value}"]`);
      if (is_default.element(target)) {
        target.checked = true;
      }
    },
    // Translate a value into a nice label
    getLabel(setting, value) {
      switch (setting) {
        case "speed":
          return value === 1 ? i18n_default.get("normal", this.config) : `${value}&times;`;
        case "quality":
          if (is_default.number(value)) {
            const label = i18n_default.get(`qualityLabel.${value}`, this.config);
            if (!label.length) {
              return `${value}p`;
            }
            return label;
          }
          return toTitleCase(value);
        case "captions":
          return captions_default.getLabel.call(this);
        default:
          return null;
      }
    },
    // Set the quality menu
    setQualityMenu(options) {
      if (!is_default.element(this.elements.settings.panels.quality)) {
        return;
      }
      const type = "quality";
      const list = this.elements.settings.panels.quality.querySelector('[role="menu"]');
      if (is_default.array(options)) {
        this.options.quality = dedupe(options).filter((quality) => this.config.quality.options.includes(quality));
      }
      const toggle = !is_default.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const getBadge = (quality) => {
        const label = i18n_default.get(`qualityBadge.${quality}`, this.config);
        if (!label.length) {
          return null;
        }
        return controls.createBadge.call(this, label);
      };
      this.options.quality.sort((a, b) => {
        const sorting = this.config.quality.options;
        return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
      }).forEach((quality) => {
        controls.createMenuItem.call(this, {
          value: quality,
          list,
          type,
          title: controls.getLabel.call(this, "quality", quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Set the looping options
    /* setLoopMenu() {
            // Menu required
            if (!is.element(this.elements.settings.panels.loop)) {
                return;
            }
    
            const options = ['start', 'end', 'all', 'reset'];
            const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
    
            // Show the pane and tab
            toggleHidden(this.elements.settings.buttons.loop, false);
            toggleHidden(this.elements.settings.panels.loop, false);
    
            // Toggle the pane and tab
            const toggle = !is.empty(this.loop.options);
            controls.toggleMenuButton.call(this, 'loop', toggle);
    
            // Empty the menu
            emptyElement(list);
    
            options.forEach(option => {
                const item = createElement('li');
    
                const button = createElement(
                    'button',
                    extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                        type: 'button',
                        class: this.config.classNames.control,
                        'data-plyr-loop-action': option,
                    }),
                    i18n.get(option, this.config)
                );
    
                if (['start', 'end'].includes(option)) {
                    const badge = controls.createBadge.call(this, '00:00');
                    button.appendChild(badge);
                }
    
                item.appendChild(button);
                list.appendChild(item);
            });
        }, */
    // Get current selected caption language
    // TODO: rework this to user the getter in the API?
    // Set a list of available captions languages
    setCaptionsMenu() {
      if (!is_default.element(this.elements.settings.panels.captions)) {
        return;
      }
      const type = "captions";
      const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
      const tracks = captions_default.getTracks.call(this);
      const toggle = Boolean(tracks.length);
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const options = tracks.map((track, value) => ({
        value,
        checked: this.captions.toggled && this.currentTrack === value,
        title: captions_default.getLabel.call(this, track),
        badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
        list,
        type: "language"
      }));
      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n_default.get("disabled", this.config),
        list,
        type: "language"
      });
      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },
    // Set a list of available captions languages
    setSpeedMenu() {
      if (!is_default.element(this.elements.settings.panels.speed)) {
        return;
      }
      const type = "speed";
      const list = this.elements.settings.panels.speed.querySelector('[role="menu"]');
      this.options.speed = this.options.speed.filter((o) => o >= this.minimumSpeed && o <= this.maximumSpeed);
      const toggle = !is_default.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      this.options.speed.forEach((speed) => {
        controls.createMenuItem.call(this, {
          value: speed,
          list,
          type,
          title: controls.getLabel.call(this, "speed", speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Check if we need to hide/show the settings menu
    checkMenu() {
      const { buttons } = this.elements.settings;
      const visible = !is_default.empty(buttons) && Object.values(buttons).some((button) => !button.hidden);
      toggleHidden(this.elements.settings.menu, !visible);
    },
    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem(pane, focusVisible = false) {
      if (this.elements.settings.popup.hidden) {
        return;
      }
      let target = pane;
      if (!is_default.element(target)) {
        target = Object.values(this.elements.settings.panels).find((p) => !p.hidden);
      }
      const firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, focusVisible);
    },
    // Show/hide menu
    toggleMenu(input) {
      const { popup } = this.elements.settings;
      const button = this.elements.buttons.settings;
      if (!is_default.element(popup) || !is_default.element(button)) {
        return;
      }
      const { hidden } = popup;
      let show = hidden;
      if (is_default.boolean(input)) {
        show = input;
      } else if (is_default.keyboardEvent(input) && input.key === "Escape") {
        show = false;
      } else if (is_default.event(input)) {
        const target = is_default.function(input.composedPath) ? input.composedPath()[0] : input.target;
        const isMenuItem = popup.contains(target);
        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      }
      button.setAttribute("aria-expanded", show);
      toggleHidden(popup, !show);
      toggleClass(this.elements.container, this.config.classNames.menu.open, show);
      if (show && is_default.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        setFocus.call(this, button, is_default.keyboardEvent(input));
      }
    },
    // Get the natural size of a menu panel
    getMenuSize(tab) {
      const clone = tab.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.opacity = 0;
      clone.removeAttribute("hidden");
      tab.parentNode.appendChild(clone);
      const width = clone.scrollWidth;
      const height = clone.scrollHeight;
      removeElement(clone);
      return {
        width,
        height
      };
    },
    // Show a panel in the menu
    showMenuPanel(type = "", focusVisible = false) {
      const target = this.elements.container.querySelector(`#plyr-settings-${this.id}-${type}`);
      if (!is_default.element(target)) {
        return;
      }
      const container = target.parentNode;
      const current = Array.from(container.children).find((node) => !node.hidden);
      if (support_default.transitions && !support_default.reducedMotion) {
        container.style.width = `${current.scrollWidth}px`;
        container.style.height = `${current.scrollHeight}px`;
        const size = controls.getMenuSize.call(this, target);
        const restore = (event) => {
          if (event.target !== container || !["width", "height"].includes(event.propertyName)) {
            return;
          }
          container.style.width = "";
          container.style.height = "";
          off.call(this, container, transitionEndEvent, restore);
        };
        on.call(this, container, transitionEndEvent, restore);
        container.style.width = `${size.width}px`;
        container.style.height = `${size.height}px`;
      }
      toggleHidden(current, true);
      toggleHidden(target, false);
      controls.focusFirstMenuItem.call(this, target, focusVisible);
    },
    // Set the download URL
    setDownloadUrl() {
      const button = this.elements.buttons.download;
      if (!is_default.element(button)) {
        return;
      }
      button.setAttribute("href", this.download);
    },
    // Build the default HTML
    create(data) {
      const {
        bindMenuItemShortcuts,
        createButton,
        createProgress,
        createRange,
        createTime,
        setQualityMenu,
        setSpeedMenu,
        showMenuPanel
      } = controls;
      this.elements.controls = null;
      if (is_default.array(this.config.controls) && this.config.controls.includes("play-large")) {
        this.elements.container.appendChild(createButton.call(this, "play-large"));
      }
      const container = createElement("div", getAttributesFromSelector(this.config.selectors.controls.wrapper));
      this.elements.controls = container;
      const defaultAttributes = { class: "plyr__controls__item" };
      dedupe(is_default.array(this.config.controls) ? this.config.controls : []).forEach((control) => {
        if (control === "restart") {
          container.appendChild(createButton.call(this, "restart", defaultAttributes));
        }
        if (control === "rewind") {
          container.appendChild(createButton.call(this, "rewind", defaultAttributes));
        }
        if (control === "play") {
          container.appendChild(createButton.call(this, "play", defaultAttributes));
        }
        if (control === "fast-forward") {
          container.appendChild(createButton.call(this, "fast-forward", defaultAttributes));
        }
        if (control === "progress") {
          const progressContainer = createElement("div", {
            class: `${defaultAttributes.class} plyr__progress__container`
          });
          const progress = createElement("div", getAttributesFromSelector(this.config.selectors.progress));
          progress.appendChild(
            createRange.call(this, "seek", {
              id: `plyr-seek-${data.id}`
            })
          );
          progress.appendChild(createProgress.call(this, "buffer"));
          if (this.config.tooltips.seek) {
            const tooltip = createElement(
              "span",
              {
                class: this.config.classNames.tooltip
              },
              "00:00"
            );
            progress.appendChild(tooltip);
            this.elements.display.seekTooltip = tooltip;
          }
          this.elements.progress = progress;
          progressContainer.appendChild(this.elements.progress);
          container.appendChild(progressContainer);
        }
        if (control === "current-time") {
          container.appendChild(createTime.call(this, "currentTime", defaultAttributes));
        }
        if (control === "duration") {
          container.appendChild(createTime.call(this, "duration", defaultAttributes));
        }
        if (control === "mute" || control === "volume") {
          let { volume } = this.elements;
          if (!is_default.element(volume) || !container.contains(volume)) {
            volume = createElement(
              "div",
              extend({}, defaultAttributes, {
                class: `${defaultAttributes.class} plyr__volume`.trim()
              })
            );
            this.elements.volume = volume;
            container.appendChild(volume);
          }
          if (control === "mute") {
            volume.appendChild(createButton.call(this, "mute"));
          }
          if (control === "volume" && !browser_default.isIos && !browser_default.isIPadOS) {
            const attributes = {
              max: 1,
              step: 0.05,
              value: this.config.volume
            };
            volume.appendChild(
              createRange.call(
                this,
                "volume",
                extend(attributes, {
                  id: `plyr-volume-${data.id}`
                })
              )
            );
          }
        }
        if (control === "captions") {
          container.appendChild(createButton.call(this, "captions", defaultAttributes));
        }
        if (control === "settings" && !is_default.empty(this.config.settings)) {
          const wrapper = createElement(
            "div",
            extend({}, defaultAttributes, {
              class: `${defaultAttributes.class} plyr__menu`.trim(),
              hidden: ""
            })
          );
          wrapper.appendChild(
            createButton.call(this, "settings", {
              "aria-haspopup": true,
              "aria-controls": `plyr-settings-${data.id}`,
              "aria-expanded": false
            })
          );
          const popup = createElement("div", {
            class: "plyr__menu__container",
            id: `plyr-settings-${data.id}`,
            hidden: ""
          });
          const inner = createElement("div");
          const home = createElement("div", {
            id: `plyr-settings-${data.id}-home`
          });
          const menu = createElement("div", {
            role: "menu"
          });
          home.appendChild(menu);
          inner.appendChild(home);
          this.elements.settings.panels.home = home;
          this.config.settings.forEach((type) => {
            const menuItem = createElement(
              "button",
              extend(getAttributesFromSelector(this.config.selectors.buttons.settings), {
                "type": "button",
                "class": `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                "role": "menuitem",
                "aria-haspopup": true,
                "hidden": ""
              })
            );
            bindMenuItemShortcuts.call(this, menuItem, type);
            on.call(this, menuItem, "click", () => {
              showMenuPanel.call(this, type, false);
            });
            const flex = createElement("span", null, i18n_default.get(type, this.config));
            const value = createElement("span", {
              class: this.config.classNames.menu.value
            });
            value.innerHTML = data[type];
            flex.appendChild(value);
            menuItem.appendChild(flex);
            menu.appendChild(menuItem);
            const pane = createElement("div", {
              id: `plyr-settings-${data.id}-${type}`,
              hidden: ""
            });
            const backButton = createElement("button", {
              type: "button",
              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
            });
            backButton.appendChild(
              createElement(
                "span",
                {
                  "aria-hidden": true
                },
                i18n_default.get(type, this.config)
              )
            );
            backButton.appendChild(
              createElement(
                "span",
                {
                  class: this.config.classNames.hidden
                },
                i18n_default.get("menuBack", this.config)
              )
            );
            on.call(
              this,
              pane,
              "keydown",
              (event) => {
                if (event.key !== "ArrowLeft") return;
                event.preventDefault();
                event.stopPropagation();
                showMenuPanel.call(this, "home", true);
              },
              false
            );
            on.call(this, backButton, "click", () => {
              showMenuPanel.call(this, "home", false);
            });
            pane.appendChild(backButton);
            pane.appendChild(
              createElement("div", {
                role: "menu"
              })
            );
            inner.appendChild(pane);
            this.elements.settings.buttons[type] = menuItem;
            this.elements.settings.panels[type] = pane;
          });
          popup.appendChild(inner);
          wrapper.appendChild(popup);
          container.appendChild(wrapper);
          this.elements.settings.popup = popup;
          this.elements.settings.menu = wrapper;
        }
        if (control === "pip" && support_default.pip) {
          container.appendChild(createButton.call(this, "pip", defaultAttributes));
        }
        if (control === "airplay" && support_default.airplay) {
          container.appendChild(createButton.call(this, "airplay", defaultAttributes));
        }
        if (control === "download") {
          const attributes = extend({}, defaultAttributes, {
            element: "a",
            href: this.download,
            target: "_blank"
          });
          if (this.isHTML5) {
            attributes.download = "";
          }
          const { download } = this.config.urls;
          if (!is_default.url(download) && this.isEmbed) {
            extend(attributes, {
              icon: `logo-${this.provider}`,
              label: this.provider
            });
          }
          container.appendChild(createButton.call(this, "download", attributes));
        }
        if (control === "fullscreen") {
          container.appendChild(createButton.call(this, "fullscreen", defaultAttributes));
        }
      });
      if (this.isHTML5) {
        setQualityMenu.call(this, html5_default.getQualityOptions.call(this));
      }
      setSpeedMenu.call(this);
      return container;
    },
    // Insert controls
    inject() {
      if (this.config.loadSprite) {
        const icon = controls.getIconUrl.call(this);
        if (icon.cors) {
          loadSprite(icon.url, "sprite-plyr");
        }
      }
      this.id = Math.floor(Math.random() * 1e4);
      let container = null;
      this.elements.controls = null;
      const props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      let update = true;
      if (is_default.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this, props);
      }
      if (!this.config.controls) {
        this.config.controls = [];
      }
      if (is_default.element(this.config.controls) || is_default.string(this.config.controls)) {
        container = this.config.controls;
      } else {
        container = controls.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: captions_default.getLabel.call(this)
          // TODO: Looping
          // loop: 'None',
        });
        update = false;
      }
      const replace = (input) => {
        let result = input;
        Object.entries(props).forEach(([key, value]) => {
          result = replaceAll(result, `{${key}}`, value);
        });
        return result;
      };
      if (update) {
        if (is_default.string(this.config.controls)) {
          container = replace(container);
        }
      }
      let target;
      if (is_default.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      }
      if (!is_default.element(target)) {
        target = this.elements.container;
      }
      const insertMethod = is_default.element(container) ? "insertAdjacentElement" : "insertAdjacentHTML";
      target[insertMethod]("afterbegin", container);
      if (!is_default.element(this.elements.controls)) {
        controls.findElements.call(this);
      }
      if (!is_default.empty(this.elements.buttons)) {
        const addProperty = (button) => {
          const className = this.config.classNames.controlPressed;
          button.setAttribute("aria-pressed", "false");
          Object.defineProperty(button, "pressed", {
            configurable: true,
            enumerable: true,
            get() {
              return hasClass(button, className);
            },
            set(pressed = false) {
              toggleClass(button, className, pressed);
              button.setAttribute("aria-pressed", pressed ? "true" : "false");
            }
          });
        };
        Object.values(this.elements.buttons).filter(Boolean).forEach((button) => {
          if (is_default.array(button) || is_default.nodeList(button)) {
            Array.from(button).filter(Boolean).forEach(addProperty);
          } else {
            addProperty(button);
          }
        });
      }
      if (browser_default.isEdge) {
        repaint(target);
      }
      if (this.config.tooltips.controls) {
        const { classNames, selectors } = this.config;
        const selector = `${selectors.controls.wrapper} ${selectors.labels} .${classNames.hidden}`;
        const labels = getElements.call(this, selector);
        Array.from(labels).forEach((label) => {
          toggleClass(label, this.config.classNames.hidden, false);
          toggleClass(label, this.config.classNames.tooltip, true);
        });
      }
    },
    // Set media metadata
    setMediaMetadata() {
      try {
        if ("mediaSession" in navigator) {
          navigator.mediaSession.metadata = new window.MediaMetadata({
            title: this.config.mediaMetadata.title,
            artist: this.config.mediaMetadata.artist,
            album: this.config.mediaMetadata.album,
            artwork: this.config.mediaMetadata.artwork
          });
        }
      } catch {
      }
    },
    // Add markers
    setMarkers() {
      if (!this.duration || this.elements.markers) return;
      const points = this.config.markers?.points?.filter(({ time }) => time > 0 && time < this.duration);
      if (!points?.length) return;
      const containerFragment = document.createDocumentFragment();
      const pointsFragment = document.createDocumentFragment();
      let tipElement = null;
      const tipVisible = `${this.config.classNames.tooltip}--visible`;
      const toggleTip = (show) => toggleClass(tipElement, tipVisible, show);
      points.forEach((point) => {
        const markerElement = createElement(
          "span",
          {
            class: this.config.classNames.marker
          },
          ""
        );
        const left = `${point.time / this.duration * 100}%`;
        if (tipElement) {
          markerElement.addEventListener("mouseenter", () => {
            if (point.label) return;
            tipElement.style.left = left;
            tipElement.innerHTML = point.label;
            toggleTip(true);
          });
          markerElement.addEventListener("mouseleave", () => {
            toggleTip(false);
          });
        }
        markerElement.addEventListener("click", () => {
          this.currentTime = point.time;
        });
        markerElement.style.left = left;
        pointsFragment.appendChild(markerElement);
      });
      containerFragment.appendChild(pointsFragment);
      if (!this.config.tooltips.seek) {
        tipElement = createElement(
          "span",
          {
            class: this.config.classNames.tooltip
          },
          ""
        );
        containerFragment.appendChild(tipElement);
      }
      this.elements.markers = {
        points: pointsFragment,
        tip: tipElement
      };
      this.elements.progress.appendChild(containerFragment);
    }
  };
  var controls_default = controls;

  // node_modules/plyr/src/js/utils/urls.js
  init_live_reload();
  function parseUrl(input, safe = true) {
    let url = input;
    if (safe) {
      const parser = document.createElement("a");
      parser.href = url;
      url = parser.href;
    }
    try {
      return new URL(url);
    } catch {
      return null;
    }
  }
  function buildUrlParams(input) {
    const params = new URLSearchParams();
    if (is_default.object(input)) {
      Object.entries(input).forEach(([key, value]) => {
        params.set(key, value);
      });
    }
    return params;
  }

  // node_modules/plyr/src/js/captions.js
  var captions = {
    // Setup captions
    setup() {
      if (!this.supported.ui) {
        return;
      }
      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support_default.textTracks) {
        if (is_default.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
          controls_default.setCaptionsMenu.call(this);
        }
        return;
      }
      if (!is_default.element(this.elements.captions)) {
        this.elements.captions = createElement("div", getAttributesFromSelector(this.config.selectors.captions));
        this.elements.captions.setAttribute("dir", "auto");
        insertAfter(this.elements.captions, this.elements.wrapper);
      }
      if (browser_default.isIE && window.URL) {
        const elements = this.media.querySelectorAll("track");
        Array.from(elements).forEach((track) => {
          const src = track.getAttribute("src");
          const url = parseUrl(src);
          if (url !== null && url.hostname !== window.location.href.hostname && ["http:", "https:"].includes(url.protocol)) {
            fetch(src, "blob").then((blob) => {
              track.setAttribute("src", window.URL.createObjectURL(blob));
            }).catch(() => {
              removeElement(track);
            });
          }
        });
      }
      const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
      const languages = dedupe(browserLanguages.map((language2) => language2.split("-")[0]));
      let language = (this.storage.get("language") || this.captions.language || this.config.captions.language || "auto").toLowerCase();
      if (language === "auto") {
        [language] = languages;
      }
      let active = this.storage.get("captions") || this.captions.active;
      if (!is_default.boolean(active)) {
        ({ active } = this.config.captions);
      }
      Object.assign(this.captions, {
        toggled: false,
        active,
        language,
        languages
      });
      if (this.isHTML5) {
        const trackEvents = this.config.captions.update ? "addtrack removetrack" : "removetrack";
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      }
      setTimeout(captions.update.bind(this), 0);
    },
    // Update available language options in settings based on tracks
    update() {
      const tracks = captions.getTracks.call(this, true);
      const { active, language, meta, currentTrackNode } = this.captions;
      const languageExists = Boolean(tracks.find((track) => track.language === language));
      if (this.isHTML5 && this.isVideo) {
        tracks.filter((track) => !meta.get(track)).forEach((track) => {
          this.debug.log("Track added", track);
          meta.set(track, {
            default: track.mode === "showing"
          });
          if (track.mode === "showing") {
            track.mode = "hidden";
          }
          on.call(this, track, "cuechange", () => captions.updateCues.call(this));
        });
      }
      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      }
      if (this.elements) {
        toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is_default.empty(tracks));
      }
      if (is_default.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
        controls_default.setCaptionsMenu.call(this);
      }
    },
    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle(input, passive = true) {
      if (!this.supported.ui) {
        return;
      }
      const { toggled } = this.captions;
      const activeClass2 = this.config.classNames.captions.active;
      const active = is_default.nullOrUndefined(input) ? !toggled : input;
      if (active !== toggled) {
        if (!passive) {
          this.captions.active = active;
          this.storage.set({ captions: active });
        }
        if (!this.language && active && !passive) {
          const tracks = captions.getTracks.call(this);
          const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
          this.captions.language = track.language;
          captions.set.call(this, tracks.indexOf(track));
          return;
        }
        if (this.elements.buttons.captions) {
          this.elements.buttons.captions.pressed = active;
        }
        toggleClass(this.elements.container, activeClass2, active);
        this.captions.toggled = active;
        controls_default.updateSetting.call(this, "captions");
        triggerEvent.call(this, this.media, active ? "captionsenabled" : "captionsdisabled");
      }
      setTimeout(() => {
        if (active && this.captions.toggled) {
          this.captions.currentTrackNode.mode = "hidden";
        }
      });
    },
    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set(index, passive = true) {
      const tracks = captions.getTracks.call(this);
      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }
      if (!is_default.number(index)) {
        this.debug.warn("Invalid caption argument", index);
        return;
      }
      if (!(index in tracks)) {
        this.debug.warn("Track not found", index);
        return;
      }
      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        const track = tracks[index];
        const { language } = track || {};
        this.captions.currentTrackNode = track;
        controls_default.updateSetting.call(this, "captions");
        if (!passive) {
          this.captions.language = language;
          this.storage.set({ language });
        }
        if (this.isVimeo) {
          this.embed.enableTextTrack(language);
        }
        triggerEvent.call(this, this.media, "languagechange");
      }
      captions.toggle.call(this, true, passive);
      if (this.isHTML5 && this.isVideo) {
        captions.updateCues.call(this);
      }
    },
    // Set captions by language
    // Used internally for the language setter with the passive option forced to false
    setLanguage(input, passive = true) {
      if (!is_default.string(input)) {
        this.debug.warn("Invalid language argument", input);
        return;
      }
      const language = input.toLowerCase();
      this.captions.language = language;
      const tracks = captions.getTracks.call(this);
      const track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },
    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks(update = false) {
      const tracks = Array.from((this.media || {}).textTracks || []);
      return tracks.filter((track) => !this.isHTML5 || update || this.captions.meta.has(track)).filter((track) => ["captions", "subtitles"].includes(track.kind));
    },
    // Match tracks based on languages and get the first
    findTrack(languages, force = false) {
      const tracks = captions.getTracks.call(this);
      const sortIsDefault = (track2) => Number((this.captions.meta.get(track2) || {}).default);
      const sorted = Array.from(tracks).sort((a, b) => sortIsDefault(b) - sortIsDefault(a));
      let track;
      languages.every((language) => {
        track = sorted.find((t2) => t2.language === language);
        return !track;
      });
      return track || (force ? sorted[0] : void 0);
    },
    // Get the current track
    getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },
    // Get UI label for track
    getLabel(track) {
      let currentTrack = track;
      if (!is_default.track(currentTrack) && support_default.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }
      if (is_default.track(currentTrack)) {
        if (!is_default.empty(currentTrack.label)) {
          return currentTrack.label;
        }
        if (!is_default.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }
        return i18n_default.get("enabled", this.config);
      }
      return i18n_default.get("disabled", this.config);
    },
    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues(input) {
      if (!this.supported.ui) {
        return;
      }
      if (!is_default.element(this.elements.captions)) {
        this.debug.warn("No captions element to render to");
        return;
      }
      if (!is_default.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn("updateCues: Invalid input", input);
        return;
      }
      let cues = input;
      if (!cues) {
        const track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map((cue) => cue.getCueAsHTML()).map(getHTML);
      }
      const content = cues.map((cueText) => cueText.trim()).join("\n");
      const changed = content !== this.elements.captions.innerHTML;
      if (changed) {
        emptyElement(this.elements.captions);
        const caption = createElement("span", getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption);
        triggerEvent.call(this, this.media, "cuechange");
      }
    }
  };
  var captions_default = captions;

  // node_modules/plyr/src/js/config/defaults.js
  init_live_reload();
  var defaults = {
    // Disable
    enabled: true,
    // Custom media title
    title: "",
    // Logging to console
    debug: false,
    // Auto play (if supported)
    autoplay: false,
    // Only allow one media playing at once (vimeo only)
    autopause: true,
    // Allow inline playback on iOS
    playsinline: true,
    // Default time to skip when rewind/fast forward
    seekTime: 10,
    // Default volume
    volume: 1,
    muted: false,
    // Pass a custom duration
    duration: null,
    // Display the media duration on load in the current time position
    // If you have opted to display both duration and currentTime, this is ignored
    displayDuration: true,
    // Invert the current time to be a countdown
    invertTime: true,
    // Clicking the currentTime inverts it's value to show time left rather than elapsed
    toggleInvert: true,
    // Force an aspect ratio
    // The format must be `'w:h'` (e.g. `'16:9'`)
    ratio: null,
    // Click video container to play/pause
    clickToPlay: true,
    // Auto hide the controls
    hideControls: true,
    // Reset to start when playback ended
    resetOnEnd: false,
    // Disable the standard context menu
    disableContextMenu: true,
    // Sprite (for icons)
    loadSprite: true,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.8.3/plyr.svg",
    // Blank video (used to prevent errors on source change)
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    // Quality default
    quality: {
      default: 576,
      // The options to display in the UI, if available for the source media
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: false,
      onChange: null
    },
    // Set loops
    loop: {
      active: false
      // start: null,
      // end: null,
    },
    // Speed default and options to display
    speed: {
      selected: 1,
      // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    // Keyboard shortcut settings
    keyboard: {
      focused: true,
      global: false
    },
    // Display tooltips
    tooltips: {
      controls: false,
      seek: true
    },
    // Captions settings
    captions: {
      active: false,
      language: "auto",
      // Listen to new tracks added after Plyr is initialized.
      // This is needed for streaming captions, but may result in unselectable options
      update: false
    },
    // Fullscreen settings
    fullscreen: {
      enabled: true,
      // Allow fullscreen?
      fallback: true,
      // Fallback using full viewport/window
      iosNative: false
      // Use the native fullscreen in iOS (disables custom controls)
      // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
      // Non-ancestors of the player element will be ignored
      // container: null, // defaults to the player element
    },
    // Local storage
    storage: {
      enabled: true,
      key: "plyr"
    },
    // Default controls
    controls: [
      "play-large",
      // 'restart',
      // 'rewind',
      "play",
      // 'fast-forward',
      "progress",
      "current-time",
      // 'duration',
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      // 'download',
      "fullscreen"
    ],
    settings: ["captions", "quality", "speed"],
    // Localisation
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    // URLs
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/oembed.json?url={0}"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    // Custom control listeners
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    // Events to watch and bubble
    events: [
      // Events to watch on HTML5 media elements and bubble
      // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
      "ended",
      "progress",
      "stalled",
      "playing",
      "waiting",
      "canplay",
      "canplaythrough",
      "loadstart",
      "loadeddata",
      "loadedmetadata",
      "timeupdate",
      "volumechange",
      "play",
      "pause",
      "error",
      "seeking",
      "seeked",
      "emptied",
      "ratechange",
      "cuechange",
      // Custom events
      "download",
      "enterfullscreen",
      "exitfullscreen",
      "captionsenabled",
      "captionsdisabled",
      "languagechange",
      "controlshidden",
      "controlsshown",
      "ready",
      // YouTube
      "statechange",
      // Quality
      "qualitychange",
      // Ads
      "adsloaded",
      "adscontentpause",
      "adscontentresume",
      "adstarted",
      "adsmidpoint",
      "adscomplete",
      "adsallcomplete",
      "adsimpression",
      "adsclick"
    ],
    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        // Used later
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption"
    },
    // Class hooks added to the player in different states
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      marker: "plyr__progress__marker",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      previewThumbnails: {
        // Tooltip thumbs
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        // Scrubbing
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
      }
    },
    // Embed attributes
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id",
        hash: "data-plyr-embed-hash"
      }
    },
    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
      enabled: false,
      publisherId: "",
      tagUrl: ""
    },
    // Preview Thumbnails plugin
    previewThumbnails: {
      enabled: false,
      src: "",
      withCredentials: false
    },
    // Vimeo plugin
    vimeo: {
      byline: false,
      portrait: false,
      title: false,
      speed: true,
      transparent: false,
      // Custom settings from Plyr
      customControls: true,
      referrerPolicy: null,
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false
    },
    // YouTube plugin
    youtube: {
      rel: 0,
      // No related vids
      showinfo: 0,
      // Hide info
      iv_load_policy: 3,
      // Hide annotations
      modestbranding: 1,
      // Hide logos as much as possible (they still show one in the corner when paused)
      // Custom settings from Plyr
      customControls: true,
      noCookie: false
      // Whether to use an alternative version of YouTube without cookies
    },
    // Media Metadata
    mediaMetadata: {
      title: "",
      artist: "",
      album: "",
      artwork: []
    },
    // Markers
    markers: {
      enabled: false,
      points: []
    }
  };
  var defaults_default = defaults;

  // node_modules/plyr/src/js/config/states.js
  init_live_reload();
  var pip = {
    active: "picture-in-picture",
    inactive: "inline"
  };

  // node_modules/plyr/src/js/config/types.js
  init_live_reload();
  var providers = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  };
  var types = {
    audio: "audio",
    video: "video"
  };
  function getProviderByUrl(url) {
    if (/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
      return providers.youtube;
    }
    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
      return providers.vimeo;
    }
    return null;
  }

  // node_modules/plyr/src/js/console.js
  init_live_reload();
  function noop() {
  }
  var Console = class {
    constructor(enabled = false) {
      this.enabled = window.console && enabled;
      if (this.enabled) {
        this.log("Debugging enabled");
      }
    }
    get log() {
      return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
    }
    get warn() {
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
    }
    get error() {
      return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
    }
  };

  // node_modules/plyr/src/js/fullscreen.js
  init_live_reload();
  var Fullscreen = class _Fullscreen {
    constructor(player) {
      this.player = player;
      this.prefix = _Fullscreen.prefix;
      this.property = _Fullscreen.property;
      this.scrollPosition = { x: 0, y: 0 };
      this.forceFallback = player.config.fullscreen.fallback === "force";
      this.player.elements.fullscreen = player.config.fullscreen.container && closest(this.player.elements.container, player.config.fullscreen.container);
      on.call(
        this.player,
        document,
        this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`,
        () => {
          this.onChange();
        }
      );
      on.call(this.player, this.player.elements.container, "dblclick", (event) => {
        if (is_default.element(this.player.elements.controls) && this.player.elements.controls.contains(event.target)) {
          return;
        }
        this.player.listeners.proxy(event, this.toggle, "fullscreen");
      });
      on.call(this, this.player.elements.container, "keydown", (event) => this.trapFocus(event));
      this.update();
    }
    // Determine if native supported
    static get nativeSupported() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    }
    // If we're actually using native
    get useNative() {
      return _Fullscreen.nativeSupported && !this.forceFallback;
    }
    // Get the prefix for handlers
    static get prefix() {
      if (is_default.function(document.exitFullscreen)) return "";
      let value = "";
      const prefixes = ["webkit", "moz", "ms"];
      prefixes.some((pre) => {
        if (is_default.function(document[`${pre}ExitFullscreen`]) || is_default.function(document[`${pre}CancelFullScreen`])) {
          value = pre;
          return true;
        }
        return false;
      });
      return value;
    }
    static get property() {
      return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
    }
    // Determine if fullscreen is supported
    get supported() {
      return [
        // Fullscreen is enabled in config
        this.player.config.fullscreen.enabled,
        // Must be a video
        this.player.isVideo,
        // Either native is supported or fallback enabled
        _Fullscreen.nativeSupported || this.player.config.fullscreen.fallback,
        // YouTube has no way to trigger fullscreen, so on devices with no native support, playsinline
        // must be enabled and iosNative fullscreen must be disabled to offer the fullscreen fallback
        !this.player.isYouTube || _Fullscreen.nativeSupported || !browser_default.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
      ].every(Boolean);
    }
    // Get active state
    get active() {
      if (!this.supported) return false;
      if (!_Fullscreen.nativeSupported || this.forceFallback) {
        return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
      }
      const element = !this.prefix ? this.target.getRootNode().fullscreenElement : this.target.getRootNode()[`${this.prefix}${this.property}Element`];
      return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
    }
    // Get target element
    get target() {
      return browser_default.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
    }
    onChange = () => {
      if (!this.supported) return;
      const button = this.player.elements.buttons.fullscreen;
      if (is_default.element(button)) {
        button.pressed = this.active;
      }
      const target = this.target === this.player.media ? this.target : this.player.elements.container;
      triggerEvent.call(this.player, target, this.active ? "enterfullscreen" : "exitfullscreen", true);
    };
    toggleFallback = (toggle = false) => {
      if (toggle) {
        this.scrollPosition = {
          x: window.scrollX ?? 0,
          y: window.scrollY ?? 0
        };
      } else {
        window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
      }
      document.body.style.overflow = toggle ? "hidden" : "";
      toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle);
      if (browser_default.isIos) {
        let viewport = document.head.querySelector('meta[name="viewport"]');
        const property = "viewport-fit=cover";
        if (!viewport) {
          viewport = document.createElement("meta");
          viewport.setAttribute("name", "viewport");
        }
        const hasProperty = is_default.string(viewport.content) && viewport.content.includes(property);
        if (toggle) {
          this.cleanupViewport = !hasProperty;
          if (!hasProperty) viewport.content += `,${property}`;
        } else if (this.cleanupViewport) {
          viewport.content = viewport.content.split(",").filter((part) => part.trim() !== property).join(",");
        }
      }
      this.onChange();
    };
    // Trap focus inside container
    trapFocus = (event) => {
      if (browser_default.isIos || browser_default.isIPadOS || !this.active || event.key !== "Tab") return;
      const focused = document.activeElement;
      const focusable = getElements.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]");
      const [first] = focusable;
      const last = focusable[focusable.length - 1];
      if (focused === last && !event.shiftKey) {
        first.focus();
        event.preventDefault();
      } else if (focused === first && event.shiftKey) {
        last.focus();
        event.preventDefault();
      }
    };
    // Update UI
    update = () => {
      if (this.supported) {
        let mode;
        if (this.forceFallback) mode = "Fallback (forced)";
        else if (_Fullscreen.nativeSupported) mode = "Native";
        else mode = "Fallback";
        this.player.debug.log(`${mode} fullscreen enabled`);
      } else {
        this.player.debug.log("Fullscreen not supported and fallback disabled");
      }
      toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
    };
    // Make an element fullscreen
    enter = () => {
      if (!this.supported) return;
      if (browser_default.isIos && this.player.config.fullscreen.iosNative) {
        if (this.player.isVimeo) {
          this.player.embed.requestFullscreen();
        } else {
          this.target.webkitEnterFullscreen();
        }
      } else if (!_Fullscreen.nativeSupported || this.forceFallback) {
        this.toggleFallback(true);
      } else if (!this.prefix) {
        this.target.requestFullscreen({ navigationUI: "hide" });
      } else if (!is_default.empty(this.prefix)) {
        this.target[`${this.prefix}Request${this.property}`]();
      }
    };
    // Bail from fullscreen
    exit = () => {
      if (!this.supported) return;
      if (browser_default.isIos && this.player.config.fullscreen.iosNative) {
        if (this.player.isVimeo) {
          this.player.embed.exitFullscreen();
        } else {
          this.target.webkitEnterFullscreen();
        }
        silencePromise(this.player.play());
      } else if (!_Fullscreen.nativeSupported || this.forceFallback) {
        this.toggleFallback(false);
      } else if (!this.prefix) {
        (document.cancelFullScreen || document.exitFullscreen).call(document);
      } else if (!is_default.empty(this.prefix)) {
        const action = this.prefix === "moz" ? "Cancel" : "Exit";
        document[`${this.prefix}${action}${this.property}`]();
      }
    };
    // Toggle state
    toggle = () => {
      if (!this.active) this.enter();
      else this.exit();
    };
  };
  var fullscreen_default = Fullscreen;

  // node_modules/plyr/src/js/listeners.js
  init_live_reload();

  // node_modules/plyr/src/js/ui.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/load-image.js
  init_live_reload();
  function loadImage(src, minWidth = 1) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const handler = () => {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };
      Object.assign(image, { onload: handler, onerror: handler, src });
    });
  }

  // node_modules/plyr/src/js/ui.js
  var ui = {
    addStyleHook() {
      toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), true);
      toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    // Toggle native HTML5 media controls
    toggleNativeControls(toggle = false) {
      if (toggle && this.isHTML5) {
        this.media.setAttribute("controls", "");
      } else {
        this.media.removeAttribute("controls");
      }
    },
    // Setup the UI
    build() {
      this.listeners.media();
      if (!this.supported.ui) {
        this.debug.warn(`Basic support only for ${this.provider} ${this.type}`);
        ui.toggleNativeControls.call(this, true);
        return;
      }
      if (!is_default.element(this.elements.controls)) {
        controls_default.inject.call(this);
        this.listeners.controls();
      }
      ui.toggleNativeControls.call(this);
      if (this.isHTML5) {
        captions_default.setup.call(this);
      }
      this.volume = null;
      this.muted = null;
      this.loop = null;
      this.quality = null;
      this.speed = null;
      controls_default.updateVolume.call(this);
      controls_default.timeUpdate.call(this);
      controls_default.durationUpdate.call(this);
      ui.checkPlaying.call(this);
      toggleClass(
        this.elements.container,
        this.config.classNames.pip.supported,
        support_default.pip && this.isHTML5 && this.isVideo
      );
      toggleClass(this.elements.container, this.config.classNames.airplay.supported, support_default.airplay && this.isHTML5);
      toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch);
      this.ready = true;
      setTimeout(() => {
        triggerEvent.call(this, this.media, "ready");
      }, 0);
      ui.setTitle.call(this);
      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(() => {
        });
      }
      if (this.config.duration) {
        controls_default.durationUpdate.call(this);
      }
      if (this.config.mediaMetadata) {
        controls_default.setMediaMetadata.call(this);
      }
    },
    // Setup aria attribute for play and iframe title
    setTitle() {
      let label = i18n_default.get("play", this.config);
      if (is_default.string(this.config.title) && !is_default.empty(this.config.title)) {
        label += `, ${this.config.title}`;
      }
      Array.from(this.elements.buttons.play || []).forEach((button) => {
        button.setAttribute("aria-label", label);
      });
      if (this.isEmbed) {
        const iframe = getElement.call(this, "iframe");
        if (!is_default.element(iframe)) {
          return;
        }
        const title = !is_default.empty(this.config.title) ? this.config.title : "video";
        const format2 = i18n_default.get("frameTitle", this.config);
        iframe.setAttribute("title", format2.replace("{title}", title));
      }
    },
    // Toggle poster
    togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },
    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster(poster, passive = true) {
      if (passive && this.poster) {
        return Promise.reject(new Error("Poster already set"));
      }
      this.media.setAttribute("data-poster", poster);
      this.elements.poster.removeAttribute("hidden");
      return ready.call(this).then(() => loadImage(poster)).catch((error) => {
        if (poster === this.poster) {
          ui.togglePoster.call(this, false);
        }
        throw error;
      }).then(() => {
        if (poster !== this.poster) {
          throw new Error("setPoster cancelled by later call to setPoster");
        }
      }).then(() => {
        Object.assign(this.elements.poster.style, {
          backgroundImage: `url('${poster}')`,
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ""
        });
        ui.togglePoster.call(this, true);
        return poster;
      });
    },
    // Check playing state
    checkPlaying(event) {
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped);
      Array.from(this.elements.buttons.play || []).forEach((target) => {
        Object.assign(target, { pressed: this.playing });
        target.setAttribute("aria-label", i18n_default.get(this.playing ? "pause" : "play", this.config));
      });
      if (is_default.event(event) && event.type === "timeupdate") {
        return;
      }
      ui.toggleControls.call(this);
    },
    // Check if media is loading
    checkLoading(event) {
      this.loading = ["stalled", "waiting"].includes(event.type);
      clearTimeout(this.timers.loading);
      this.timers.loading = setTimeout(
        () => {
          toggleClass(this.elements.container, this.config.classNames.loading, this.loading);
          ui.toggleControls.call(this);
        },
        this.loading ? 250 : 0
      );
    },
    // Toggle controls based on state and `force` argument
    toggleControls(force) {
      const { controls: controlsElement } = this.elements;
      if (controlsElement && this.config.hideControls) {
        const recentTouchSeek = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(
          Boolean(
            force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek
          )
        );
      }
    },
    // Migrate any custom properties from the media to the parent
    migrateStyles() {
      Object.values({ ...this.media.style }).filter((key) => !is_default.empty(key) && is_default.string(key) && key.startsWith("--plyr")).forEach((key) => {
        this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key));
        this.media.style.removeProperty(key);
      });
      if (is_default.empty(this.media.style)) {
        this.media.removeAttribute("style");
      }
    }
  };
  var ui_default = ui;

  // node_modules/plyr/src/js/listeners.js
  var Listeners = class {
    constructor(player) {
      this.player = player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    }
    // Handle key presses
    handleKey(event) {
      const { player } = this;
      const { elements } = player;
      const { key, type, altKey, ctrlKey, metaKey, shiftKey } = event;
      const pressed = type === "keydown";
      const repeat = pressed && key === this.lastKey;
      if (altKey || ctrlKey || metaKey || shiftKey) {
        return;
      }
      if (!key) {
        return;
      }
      const seekByIncrement = (increment) => {
        player.currentTime = player.duration / 10 * increment;
      };
      if (pressed) {
        const focused = document.activeElement;
        if (is_default.element(focused)) {
          const { editable } = player.config.selectors;
          const { seek } = elements.inputs;
          if (focused !== seek && matches(focused, editable)) {
            return;
          }
          if (event.key === " " && matches(focused, 'button, [role^="menuitem"]')) {
            return;
          }
        }
        const preventDefault = [
          " ",
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "c",
          "f",
          "k",
          "l",
          "m"
        ];
        if (preventDefault.includes(key)) {
          event.preventDefault();
          event.stopPropagation();
        }
        switch (key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            if (!repeat) {
              seekByIncrement(Number.parseInt(key, 10));
            }
            break;
          case " ":
          case "k":
            if (!repeat) {
              silencePromise(player.togglePlay());
            }
            break;
          case "ArrowUp":
            player.increaseVolume(0.1);
            break;
          case "ArrowDown":
            player.decreaseVolume(0.1);
            break;
          case "m":
            if (!repeat) {
              player.muted = !player.muted;
            }
            break;
          case "ArrowRight":
            player.forward();
            break;
          case "ArrowLeft":
            player.rewind();
            break;
          case "f":
            player.fullscreen.toggle();
            break;
          case "c":
            if (!repeat) {
              player.toggleCaptions();
            }
            break;
          case "l":
            player.loop = !player.loop;
            break;
          default:
            break;
        }
        if (key === "Escape" && !player.fullscreen.usingNative && player.fullscreen.active) {
          player.fullscreen.toggle();
        }
        this.lastKey = key;
      } else {
        this.lastKey = null;
      }
    }
    // Toggle menu
    toggleMenu(event) {
      controls_default.toggleMenu.call(this.player, event);
    }
    // Device is touch enabled
    firstTouch = () => {
      const { player } = this;
      const { elements } = player;
      player.touch = true;
      toggleClass(elements.container, player.config.classNames.isTouch, true);
    };
    // Global window & document listeners
    global = (toggle = true) => {
      const { player } = this;
      if (player.config.keyboard.global) {
        toggleListener.call(player, window, "keydown keyup", this.handleKey, toggle, false);
      }
      toggleListener.call(player, document.body, "click", this.toggleMenu, toggle);
      once.call(player, document.body, "touchstart", this.firstTouch);
    };
    // Container listeners
    container = () => {
      const { player } = this;
      const { config, elements, timers } = player;
      if (!config.keyboard.global && config.keyboard.focused) {
        on.call(player, elements.container, "keydown keyup", this.handleKey, false);
      }
      on.call(
        player,
        elements.container,
        "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
        (event) => {
          const { controls: controlsElement } = elements;
          if (controlsElement && event.type === "enterfullscreen") {
            controlsElement.pressed = false;
            controlsElement.hover = false;
          }
          const show = ["touchstart", "touchmove", "mousemove"].includes(event.type);
          let delay = 0;
          if (show) {
            ui_default.toggleControls.call(player, true);
            delay = player.touch ? 3e3 : 2e3;
          }
          clearTimeout(timers.controls);
          timers.controls = setTimeout(() => ui_default.toggleControls.call(player, false), delay);
        }
      );
      const setGutter = () => {
        if (!player.isVimeo || player.config.vimeo.premium) {
          return;
        }
        const target = elements.wrapper;
        const { active } = player.fullscreen;
        const [videoWidth, videoHeight] = getAspectRatio.call(player);
        const useNativeAspectRatio = supportsCSS(`aspect-ratio: ${videoWidth} / ${videoHeight}`);
        if (!active) {
          if (useNativeAspectRatio) {
            target.style.width = null;
            target.style.height = null;
          } else {
            target.style.maxWidth = null;
            target.style.margin = null;
          }
          return;
        }
        const [viewportWidth, viewportHeight] = getViewportSize();
        const overflow = viewportWidth / viewportHeight > videoWidth / videoHeight;
        if (useNativeAspectRatio) {
          target.style.width = overflow ? "auto" : "100%";
          target.style.height = overflow ? "100%" : "auto";
        } else {
          target.style.maxWidth = overflow ? `${viewportHeight / videoHeight * videoWidth}px` : null;
          target.style.margin = overflow ? "0 auto" : null;
        }
      };
      const resized = () => {
        clearTimeout(timers.resized);
        timers.resized = setTimeout(setGutter, 50);
      };
      on.call(player, elements.container, "enterfullscreen exitfullscreen", (event) => {
        const { target } = player.fullscreen;
        if (target !== elements.container) {
          return;
        }
        if (!player.isEmbed && is_default.empty(player.config.ratio)) {
          return;
        }
        setGutter();
        const method = event.type === "enterfullscreen" ? on : off;
        method.call(player, window, "resize", resized);
      });
    };
    // Listen for media events
    media = () => {
      const { player } = this;
      const { elements } = player;
      on.call(player, player.media, "timeupdate seeking seeked", (event) => controls_default.timeUpdate.call(player, event));
      on.call(player, player.media, "durationchange loadeddata loadedmetadata", (event) => controls_default.durationUpdate.call(player, event));
      on.call(player, player.media, "ended", () => {
        if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
          player.restart();
          player.pause();
        }
      });
      on.call(player, player.media, "progress playing seeking seeked", (event) => controls_default.updateProgress.call(player, event));
      on.call(player, player.media, "volumechange", (event) => controls_default.updateVolume.call(player, event));
      on.call(player, player.media, "playing play pause ended emptied timeupdate", (event) => ui_default.checkPlaying.call(player, event));
      on.call(player, player.media, "waiting canplay seeked playing", (event) => ui_default.checkLoading.call(player, event));
      if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
        const wrapper = getElement.call(player, `.${player.config.classNames.video}`);
        if (!is_default.element(wrapper)) {
          return;
        }
        on.call(player, elements.container, "click", (event) => {
          const targets = [elements.container, wrapper];
          if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
            return;
          }
          if (player.touch && player.config.hideControls) {
            return;
          }
          if (player.ended) {
            this.proxy(event, player.restart, "restart");
            this.proxy(
              event,
              () => {
                silencePromise(player.play());
              },
              "play"
            );
          } else {
            this.proxy(
              event,
              () => {
                silencePromise(player.togglePlay());
              },
              "play"
            );
          }
        });
      }
      if (player.supported.ui && player.config.disableContextMenu) {
        on.call(
          player,
          elements.wrapper,
          "contextmenu",
          (event) => {
            event.preventDefault();
          },
          false
        );
      }
      on.call(player, player.media, "volumechange", () => {
        player.storage.set({
          volume: player.volume,
          muted: player.muted
        });
      });
      on.call(player, player.media, "ratechange", () => {
        controls_default.updateSetting.call(player, "speed");
        player.storage.set({ speed: player.speed });
      });
      on.call(player, player.media, "qualitychange", (event) => {
        controls_default.updateSetting.call(player, "quality", null, event.detail.quality);
      });
      on.call(player, player.media, "ready qualitychange", () => {
        controls_default.setDownloadUrl.call(player);
      });
      const proxyEvents = player.config.events.concat(["keyup", "keydown"]).join(" ");
      on.call(player, player.media, proxyEvents, (event) => {
        let { detail = {} } = event;
        if (event.type === "error") {
          detail = player.media.error;
        }
        triggerEvent.call(player, elements.container, event.type, true, detail);
      });
    };
    // Run default and custom handlers
    proxy = (event, defaultHandler, customHandlerKey) => {
      const { player } = this;
      const customHandler = player.config.listeners[customHandlerKey];
      const hasCustomHandler = is_default.function(customHandler);
      let returned = true;
      if (hasCustomHandler) {
        returned = customHandler.call(player, event);
      }
      if (returned !== false && is_default.function(defaultHandler)) {
        defaultHandler.call(player, event);
      }
    };
    // Trigger custom and default handlers
    bind = (element, type, defaultHandler, customHandlerKey, passive = true) => {
      const { player } = this;
      const customHandler = player.config.listeners[customHandlerKey];
      const hasCustomHandler = is_default.function(customHandler);
      on.call(
        player,
        element,
        type,
        (event) => this.proxy(event, defaultHandler, customHandlerKey),
        passive && !hasCustomHandler
      );
    };
    // Listen for control events
    controls = () => {
      const { player } = this;
      const { elements } = player;
      const inputEvent = browser_default.isIE ? "change" : "input";
      if (elements.buttons.play) {
        Array.from(elements.buttons.play).forEach((button) => {
          this.bind(
            button,
            "click",
            () => {
              silencePromise(player.togglePlay());
            },
            "play"
          );
        });
      }
      this.bind(elements.buttons.restart, "click", player.restart, "restart");
      this.bind(
        elements.buttons.rewind,
        "click",
        () => {
          player.lastSeekTime = Date.now();
          player.rewind();
        },
        "rewind"
      );
      this.bind(
        elements.buttons.fastForward,
        "click",
        () => {
          player.lastSeekTime = Date.now();
          player.forward();
        },
        "fastForward"
      );
      this.bind(
        elements.buttons.mute,
        "click",
        () => {
          player.muted = !player.muted;
        },
        "mute"
      );
      this.bind(elements.buttons.captions, "click", () => player.toggleCaptions());
      this.bind(
        elements.buttons.download,
        "click",
        () => {
          triggerEvent.call(player, player.media, "download");
        },
        "download"
      );
      this.bind(
        elements.buttons.fullscreen,
        "click",
        () => {
          player.fullscreen.toggle();
        },
        "fullscreen"
      );
      this.bind(
        elements.buttons.pip,
        "click",
        () => {
          player.pip = "toggle";
        },
        "pip"
      );
      this.bind(elements.buttons.airplay, "click", player.airplay, "airplay");
      this.bind(
        elements.buttons.settings,
        "click",
        (event) => {
          event.stopPropagation();
          event.preventDefault();
          controls_default.toggleMenu.call(player, event);
        },
        null,
        false
      );
      this.bind(
        elements.buttons.settings,
        "keyup",
        (event) => {
          if (![" ", "Enter"].includes(event.key)) {
            return;
          }
          if (event.key === "Enter") {
            controls_default.focusFirstMenuItem.call(player, null, true);
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          controls_default.toggleMenu.call(player, event);
        },
        null,
        false
        // Can't be passive as we're preventing default
      );
      this.bind(elements.settings.menu, "keydown", (event) => {
        if (event.key === "Escape") {
          controls_default.toggleMenu.call(player, event);
        }
      });
      this.bind(elements.inputs.seek, "mousedown mousemove", (event) => {
        const rect = elements.progress.getBoundingClientRect();
        const scrollLeft = event.pageX - event.clientX;
        const percent = 100 / rect.width * (event.pageX - rect.left - scrollLeft);
        event.currentTarget.setAttribute("seek-value", percent);
      });
      this.bind(elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (event) => {
        const seek = event.currentTarget;
        const attribute = "play-on-seeked";
        if (is_default.keyboardEvent(event) && !["ArrowLeft", "ArrowRight"].includes(event.key)) {
          return;
        }
        player.lastSeekTime = Date.now();
        const play = seek.hasAttribute(attribute);
        const done = ["mouseup", "touchend", "keyup"].includes(event.type);
        if (play && done) {
          seek.removeAttribute(attribute);
          silencePromise(player.play());
        } else if (!done && player.playing) {
          seek.setAttribute(attribute, "");
          player.pause();
        }
      });
      if (browser_default.isIos) {
        const inputs = getElements.call(player, 'input[type="range"]');
        Array.from(inputs).forEach((input) => this.bind(input, inputEvent, (event) => repaint(event.target)));
      }
      this.bind(
        elements.inputs.seek,
        inputEvent,
        (event) => {
          const seek = event.currentTarget;
          let seekTo = seek.getAttribute("seek-value");
          if (is_default.empty(seekTo)) {
            seekTo = seek.value;
          }
          seek.removeAttribute("seek-value");
          player.currentTime = seekTo / seek.max * player.duration;
        },
        "seek"
      );
      this.bind(elements.progress, "mouseenter mouseleave mousemove", (event) => controls_default.updateSeekTooltip.call(player, event));
      this.bind(elements.progress, "mousemove touchmove", (event) => {
        const { previewThumbnails } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.startMove(event);
        }
      });
      this.bind(elements.progress, "mouseleave touchend click", () => {
        const { previewThumbnails } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.endMove(false, true);
        }
      });
      this.bind(elements.progress, "mousedown touchstart", (event) => {
        const { previewThumbnails } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.startScrubbing(event);
        }
      });
      this.bind(elements.progress, "mouseup touchend", (event) => {
        const { previewThumbnails } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.endScrubbing(event);
        }
      });
      if (browser_default.isWebKit) {
        Array.from(getElements.call(player, 'input[type="range"]')).forEach((element) => {
          this.bind(element, "input", (event) => controls_default.updateRangeFill.call(player, event.target));
        });
      }
      if (player.config.toggleInvert && !is_default.element(elements.display.duration)) {
        this.bind(elements.display.currentTime, "click", () => {
          if (player.currentTime === 0) {
            return;
          }
          player.config.invertTime = !player.config.invertTime;
          controls_default.timeUpdate.call(player);
        });
      }
      this.bind(
        elements.inputs.volume,
        inputEvent,
        (event) => {
          player.volume = event.target.value;
        },
        "volume"
      );
      this.bind(elements.controls, "mouseenter mouseleave", (event) => {
        elements.controls.hover = !player.touch && event.type === "mouseenter";
      });
      if (elements.fullscreen) {
        Array.from(elements.fullscreen.children).filter((c) => !c.contains(elements.container)).forEach((child) => {
          this.bind(child, "mouseenter mouseleave", (event) => {
            if (elements.controls) {
              elements.controls.hover = !player.touch && event.type === "mouseenter";
            }
          });
        });
      }
      this.bind(elements.controls, "mousedown mouseup touchstart touchend touchcancel", (event) => {
        elements.controls.pressed = ["mousedown", "touchstart"].includes(event.type);
      });
      this.bind(elements.controls, "focusin", () => {
        const { config, timers } = player;
        toggleClass(elements.controls, config.classNames.noTransition, true);
        ui_default.toggleControls.call(player, true);
        setTimeout(() => {
          toggleClass(elements.controls, config.classNames.noTransition, false);
        }, 0);
        const delay = this.touch ? 3e3 : 4e3;
        clearTimeout(timers.controls);
        timers.controls = setTimeout(() => ui_default.toggleControls.call(player, false), delay);
      });
      this.bind(
        elements.inputs.volume,
        "wheel",
        (event) => {
          const inverted = event.webkitDirectionInvertedFromDevice;
          const [x, y] = [event.deltaX, -event.deltaY].map((value) => inverted ? -value : value);
          const direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y);
          player.increaseVolume(direction / 50);
          const { volume } = player.media;
          if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
            event.preventDefault();
          }
        },
        "volume",
        false
      );
    };
  };
  var listeners_default = Listeners;

  // node_modules/plyr/src/js/media.js
  init_live_reload();

  // node_modules/plyr/src/js/plugins/vimeo.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/load-script.js
  init_live_reload();
  var import_loadjs = __toESM(require_loadjs_umd(), 1);
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      (0, import_loadjs.default)(url, {
        success: resolve,
        error: reject
      });
    });
  }

  // node_modules/plyr/src/js/plugins/vimeo.js
  function parseId(url) {
    if (is_default.empty(url)) {
      return null;
    }
    if (is_default.number(Number(url))) {
      return url;
    }
    const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
    const match = url.match(regex);
    return match ? match[2] : url;
  }
  function parseHash(url) {
    const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*h=|\/)+([\d,a-f]+)/;
    const found = url.match(regex);
    return found && found.length === 5 ? found[4] : null;
  }
  function assurePlaybackState(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? "play" : "pause");
    }
  }
  var vimeo = {
    setup() {
      const player = this;
      toggleClass(player.elements.wrapper, player.config.classNames.embed, true);
      player.options.speed = player.config.speed.options;
      setAspectRatio.call(player);
      if (!is_default.object(window.Vimeo)) {
        loadScript(player.config.urls.vimeo.sdk).then(() => {
          vimeo.ready.call(player);
        }).catch((error) => {
          player.debug.warn("Vimeo SDK (player.js) failed to load", error);
        });
      } else {
        vimeo.ready.call(player);
      }
    },
    // API Ready
    ready() {
      const player = this;
      const config = player.config.vimeo;
      const { premium, referrerPolicy, ...frameParams } = config;
      let source2 = player.media.getAttribute("src");
      let hash = "";
      if (is_default.empty(source2)) {
        source2 = player.media.getAttribute(player.config.attributes.embed.id);
        hash = player.media.getAttribute(player.config.attributes.embed.hash);
      } else {
        hash = parseHash(source2);
      }
      const hashParam = hash ? { h: hash } : {};
      if (premium) {
        Object.assign(frameParams, {
          controls: false,
          sidedock: false
        });
      }
      const params = buildUrlParams({
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        muted: player.muted,
        gesture: "media",
        playsinline: player.config.playsinline,
        // hash has to be added to iframe-URL
        ...hashParam,
        ...frameParams
      });
      const id = parseId(source2);
      const iframe = createElement("iframe");
      const src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute("src", src);
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "allow",
        ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")
      );
      if (!is_default.empty(referrerPolicy)) {
        iframe.setAttribute("referrerPolicy", referrerPolicy);
      }
      if (premium || !config.customControls) {
        iframe.setAttribute("data-poster", player.poster);
        player.media = replaceElement(iframe, player.media);
      } else {
        const wrapper = createElement("div", {
          "class": player.config.classNames.embedContainer,
          "data-poster": player.poster
        });
        wrapper.appendChild(iframe);
        player.media = replaceElement(wrapper, player.media);
      }
      if (!config.customControls) {
        fetch(format(player.config.urls.vimeo.api, src)).then((response) => {
          if (is_default.empty(response) || !response.thumbnail_url) {
            return;
          }
          ui_default.setPoster.call(player, response.thumbnail_url).catch(() => {
          });
        });
      }
      player.embed = new window.Vimeo.Player(iframe, {
        autopause: player.config.autopause,
        muted: player.muted
      });
      player.media.paused = true;
      player.media.currentTime = 0;
      if (player.supported.ui) {
        player.embed.disableTextTrack();
      }
      player.media.play = () => {
        assurePlaybackState.call(player, true);
        return player.embed.play();
      };
      player.media.pause = () => {
        assurePlaybackState.call(player, false);
        return player.embed.pause();
      };
      player.media.stop = () => {
        player.pause();
        player.currentTime = 0;
      };
      let { currentTime } = player.media;
      Object.defineProperty(player.media, "currentTime", {
        get() {
          return currentTime;
        },
        set(time) {
          const { embed, media: media2, paused, volume: volume2 } = player;
          const restorePause = paused && !embed.hasPlayed;
          media2.seeking = true;
          triggerEvent.call(player, media2, "seeking");
          Promise.resolve(restorePause && embed.setVolume(0)).then(() => embed.setCurrentTime(time)).then(() => restorePause && embed.pause()).then(() => restorePause && embed.setVolume(volume2)).catch(() => {
          });
        }
      });
      let speed = player.config.speed.selected;
      Object.defineProperty(player.media, "playbackRate", {
        get() {
          return speed;
        },
        set(input) {
          player.embed.setPlaybackRate(input).then(() => {
            speed = input;
            triggerEvent.call(player, player.media, "ratechange");
          }).catch(() => {
            player.options.speed = [1];
          });
        }
      });
      let { volume } = player.config;
      Object.defineProperty(player.media, "volume", {
        get() {
          return volume;
        },
        set(input) {
          player.embed.setVolume(input).then(() => {
            volume = input;
            triggerEvent.call(player, player.media, "volumechange");
          });
        }
      });
      let { muted } = player.config;
      Object.defineProperty(player.media, "muted", {
        get() {
          return muted;
        },
        set(input) {
          const toggle = is_default.boolean(input) ? input : false;
          player.embed.setMuted(toggle ? true : player.config.muted).then(() => {
            muted = toggle;
            triggerEvent.call(player, player.media, "volumechange");
          });
        }
      });
      let { loop } = player.config;
      Object.defineProperty(player.media, "loop", {
        get() {
          return loop;
        },
        set(input) {
          const toggle = is_default.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(() => {
            loop = toggle;
          });
        }
      });
      let currentSrc;
      player.embed.getVideoUrl().then((value) => {
        currentSrc = value;
        controls_default.setDownloadUrl.call(player);
      }).catch((error) => {
        this.debug.warn(error);
      });
      Object.defineProperty(player.media, "currentSrc", {
        get() {
          return currentSrc;
        }
      });
      Object.defineProperty(player.media, "ended", {
        get() {
          return player.currentTime === player.duration;
        }
      });
      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then((dimensions) => {
        const [width, height] = dimensions;
        player.embed.ratio = roundAspectRatio(width, height);
        setAspectRatio.call(this);
      });
      player.embed.setAutopause(player.config.autopause).then((state) => {
        player.config.autopause = state;
      });
      player.embed.getVideoTitle().then((title) => {
        player.config.title = title;
        ui_default.setTitle.call(this);
      });
      player.embed.getCurrentTime().then((value) => {
        currentTime = value;
        triggerEvent.call(player, player.media, "timeupdate");
      });
      player.embed.getDuration().then((value) => {
        player.media.duration = value;
        triggerEvent.call(player, player.media, "durationchange");
      });
      player.embed.getTextTracks().then((tracks) => {
        player.media.textTracks = tracks;
        captions_default.setup.call(player);
      });
      player.embed.on("cuechange", ({ cues = [] }) => {
        const strippedCues = cues.map((cue) => stripHTML(cue.text));
        captions_default.updateCues.call(player, strippedCues);
      });
      player.embed.on("loaded", () => {
        player.embed.getPaused().then((paused) => {
          assurePlaybackState.call(player, !paused);
          if (!paused) {
            triggerEvent.call(player, player.media, "playing");
          }
        });
        if (is_default.element(player.embed.element) && player.supported.ui) {
          const frame = player.embed.element;
          frame.setAttribute("tabindex", -1);
        }
      });
      player.embed.on("bufferstart", () => {
        triggerEvent.call(player, player.media, "waiting");
      });
      player.embed.on("bufferend", () => {
        triggerEvent.call(player, player.media, "playing");
      });
      player.embed.on("play", () => {
        assurePlaybackState.call(player, true);
        triggerEvent.call(player, player.media, "playing");
      });
      player.embed.on("pause", () => {
        assurePlaybackState.call(player, false);
      });
      player.embed.on("timeupdate", (data) => {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent.call(player, player.media, "timeupdate");
      });
      player.embed.on("progress", (data) => {
        player.media.buffered = data.percent;
        triggerEvent.call(player, player.media, "progress");
        if (Number.parseInt(data.percent, 10) === 1) {
          triggerEvent.call(player, player.media, "canplaythrough");
        }
        player.embed.getDuration().then((value) => {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent.call(player, player.media, "durationchange");
          }
        });
      });
      player.embed.on("seeked", () => {
        player.media.seeking = false;
        triggerEvent.call(player, player.media, "seeked");
      });
      player.embed.on("ended", () => {
        player.media.paused = true;
        triggerEvent.call(player, player.media, "ended");
      });
      player.embed.on("error", (detail) => {
        player.media.error = detail;
        triggerEvent.call(player, player.media, "error");
      });
      if (config.customControls) {
        setTimeout(() => ui_default.build.call(player), 0);
      }
    }
  };
  var vimeo_default = vimeo;

  // node_modules/plyr/src/js/plugins/youtube.js
  init_live_reload();
  function parseId2(url) {
    if (is_default.empty(url)) {
      return null;
    }
    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regex);
    return match && match[2] ? match[2] : url;
  }
  function assurePlaybackState2(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? "play" : "pause");
    }
  }
  function getHost(config) {
    if (config.noCookie) {
      return "https://www.youtube-nocookie.com";
    }
    if (window.location.protocol === "http:") {
      return "http://www.youtube.com";
    }
    return void 0;
  }
  var youtube = {
    setup() {
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true);
      if (is_default.object(window.YT) && is_default.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        const callback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (is_default.function(callback)) {
            callback();
          }
          youtube.ready.call(this);
        };
        loadScript(this.config.urls.youtube.sdk).catch((error) => {
          this.debug.warn("YouTube API failed to load", error);
        });
      }
    },
    // Get the media title
    getTitle(videoId) {
      const url = format(this.config.urls.youtube.api, videoId);
      fetch(url).then((data) => {
        if (is_default.object(data)) {
          const { title, height, width } = data;
          this.config.title = title;
          ui_default.setTitle.call(this);
          this.embed.ratio = roundAspectRatio(width, height);
        }
        setAspectRatio.call(this);
      }).catch(() => {
        setAspectRatio.call(this);
      });
    },
    // API ready
    ready() {
      const player = this;
      const config = player.config.youtube;
      const currentId = player.media && player.media.getAttribute("id");
      if (!is_default.empty(currentId) && currentId.startsWith("youtube-")) {
        return;
      }
      let source2 = player.media.getAttribute("src");
      if (is_default.empty(source2)) {
        source2 = player.media.getAttribute(this.config.attributes.embed.id);
      }
      const videoId = parseId2(source2);
      const id = generateId(player.provider);
      const container = createElement("div", { id, "data-poster": config.customControls ? player.poster : void 0 });
      player.media = replaceElement(container, player.media);
      if (config.customControls) {
        const posterSrc = (s) => `https://i.ytimg.com/vi/${videoId}/${s}default.jpg`;
        loadImage(posterSrc("maxres"), 121).catch(() => loadImage(posterSrc("sd"), 121)).catch(() => loadImage(posterSrc("hq"))).then((image) => ui_default.setPoster.call(player, image.src)).then((src) => {
          if (!src.includes("maxres")) {
            player.elements.poster.style.backgroundSize = "cover";
          }
        }).catch(() => {
        });
      }
      player.embed = new window.YT.Player(player.media, {
        videoId,
        host: getHost(config),
        playerVars: extend(
          {},
          {
            // Autoplay
            autoplay: player.config.autoplay ? 1 : 0,
            // iframe interface language
            hl: player.config.hl,
            // Only show controls if not fully supported or opted out
            controls: player.supported.ui && config.customControls ? 0 : 1,
            // Disable keyboard as we handle it
            disablekb: 1,
            // Allow iOS inline playback
            playsinline: player.config.playsinline && !player.config.fullscreen.iosNative ? 1 : 0,
            // Captions are flaky on YouTube
            cc_load_policy: player.captions.active ? 1 : 0,
            cc_lang_pref: player.config.captions.language,
            // Tracking for stats
            widget_referrer: window ? window.location.href : null
          },
          config
        ),
        events: {
          onError(event) {
            if (!player.media.error) {
              const code = event.data;
              const message = {
                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                101: "The owner of the requested video does not allow it to be played in embedded players.",
                150: "The owner of the requested video does not allow it to be played in embedded players."
              }[code] || "An unknown error occurred";
              player.media.error = { code, message };
              triggerEvent.call(player, player.media, "error");
            }
          },
          onPlaybackRateChange(event) {
            const instance = event.target;
            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent.call(player, player.media, "ratechange");
          },
          onReady(event) {
            if (is_default.function(player.media.play)) {
              return;
            }
            const instance = event.target;
            youtube.getTitle.call(player, videoId);
            player.media.play = () => {
              assurePlaybackState2.call(player, true);
              instance.playVideo();
            };
            player.media.pause = () => {
              assurePlaybackState2.call(player, false);
              instance.pauseVideo();
            };
            player.media.stop = () => {
              instance.stopVideo();
            };
            player.media.duration = instance.getDuration();
            player.media.paused = true;
            player.media.currentTime = 0;
            Object.defineProperty(player.media, "currentTime", {
              get() {
                return Number(instance.getCurrentTime());
              },
              set(time) {
                if (player.paused && !player.embed.hasPlayed) {
                  player.embed.mute();
                }
                player.media.seeking = true;
                triggerEvent.call(player, player.media, "seeking");
                instance.seekTo(time);
              }
            });
            Object.defineProperty(player.media, "playbackRate", {
              get() {
                return instance.getPlaybackRate();
              },
              set(input) {
                instance.setPlaybackRate(input);
              }
            });
            let { volume } = player.config;
            Object.defineProperty(player.media, "volume", {
              get() {
                return volume;
              },
              set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, "volumechange");
              }
            });
            let { muted } = player.config;
            Object.defineProperty(player.media, "muted", {
              get() {
                return muted;
              },
              set(input) {
                const toggle = is_default.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? "mute" : "unMute"]();
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, "volumechange");
              }
            });
            Object.defineProperty(player.media, "currentSrc", {
              get() {
                return instance.getVideoUrl();
              }
            });
            Object.defineProperty(player.media, "ended", {
              get() {
                return player.currentTime === player.duration;
              }
            });
            const speeds = instance.getAvailablePlaybackRates();
            player.options.speed = speeds.filter((s) => player.config.speed.options.includes(s));
            if (player.supported.ui && config.customControls) {
              player.media.setAttribute("tabindex", -1);
            }
            triggerEvent.call(player, player.media, "timeupdate");
            triggerEvent.call(player, player.media, "durationchange");
            clearInterval(player.timers.buffering);
            player.timers.buffering = setInterval(() => {
              player.media.buffered = instance.getVideoLoadedFraction();
              if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                triggerEvent.call(player, player.media, "progress");
              }
              player.media.lastBuffered = player.media.buffered;
              if (player.media.buffered === 1) {
                clearInterval(player.timers.buffering);
                triggerEvent.call(player, player.media, "canplaythrough");
              }
            }, 200);
            if (config.customControls) {
              setTimeout(() => ui_default.build.call(player), 50);
            }
          },
          onStateChange(event) {
            const instance = event.target;
            clearInterval(player.timers.playing);
            const seeked = player.media.seeking && [1, 2].includes(event.data);
            if (seeked) {
              player.media.seeking = false;
              triggerEvent.call(player, player.media, "seeked");
            }
            switch (event.data) {
              case -1:
                triggerEvent.call(player, player.media, "timeupdate");
                player.media.buffered = instance.getVideoLoadedFraction();
                triggerEvent.call(player, player.media, "progress");
                break;
              case 0:
                assurePlaybackState2.call(player, false);
                if (player.media.loop) {
                  instance.stopVideo();
                  instance.playVideo();
                } else {
                  triggerEvent.call(player, player.media, "ended");
                }
                break;
              case 1:
                if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState2.call(player, true);
                  triggerEvent.call(player, player.media, "playing");
                  player.timers.playing = setInterval(() => {
                    triggerEvent.call(player, player.media, "timeupdate");
                  }, 50);
                  if (player.media.duration !== instance.getDuration()) {
                    player.media.duration = instance.getDuration();
                    triggerEvent.call(player, player.media, "durationchange");
                  }
                }
                break;
              case 2:
                if (!player.muted) {
                  player.embed.unMute();
                }
                assurePlaybackState2.call(player, false);
                break;
              case 3:
                triggerEvent.call(player, player.media, "waiting");
                break;
              default:
                break;
            }
            triggerEvent.call(player, player.elements.container, "statechange", false, {
              code: event.data
            });
          }
        }
      });
    }
  };
  var youtube_default = youtube;

  // node_modules/plyr/src/js/media.js
  var media = {
    // Setup media
    setup() {
      if (!this.media) {
        this.debug.warn("No media element found!");
        return;
      }
      toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true);
      toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true);
      if (this.isEmbed) {
        toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true);
      }
      if (this.isVideo) {
        this.elements.wrapper = createElement("div", {
          class: this.config.classNames.video
        });
        wrap(this.media, this.elements.wrapper);
        this.elements.poster = createElement("div", {
          class: this.config.classNames.poster
        });
        this.elements.wrapper.appendChild(this.elements.poster);
      }
      if (this.isHTML5) {
        html5_default.setup.call(this);
      } else if (this.isYouTube) {
        youtube_default.setup.call(this);
      } else if (this.isVimeo) {
        vimeo_default.setup.call(this);
      }
    }
  };
  var media_default = media;

  // node_modules/plyr/src/js/plugins/ads.js
  init_live_reload();
  function destroy(instance) {
    if (instance.manager) {
      instance.manager.destroy();
    }
    if (instance.elements.displayContainer) {
      instance.elements.displayContainer.destroy();
    }
    instance.elements.container.remove();
  }
  var Ads = class {
    /**
     * Ads constructor.
     * @param {object} player
     * @return {Ads}
     */
    constructor(player) {
      this.player = player;
      this.config = player.config.ads;
      this.playing = false;
      this.initialized = false;
      this.elements = {
        container: null,
        displayContainer: null
      };
      this.manager = null;
      this.loader = null;
      this.cuePoints = null;
      this.events = {};
      this.safetyTimer = null;
      this.countdownTimer = null;
      this.managerPromise = new Promise((resolve, reject) => {
        this.on("loaded", resolve);
        this.on("error", reject);
      });
      this.load();
    }
    get enabled() {
      const { config } = this;
      return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is_default.empty(config.publisherId) || is_default.url(config.tagUrl));
    }
    /**
     * Load the IMA SDK
     */
    load = () => {
      if (!this.enabled) {
        return;
      }
      if (!is_default.object(window.google) || !is_default.object(window.google.ima)) {
        loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
          this.ready();
        }).catch(() => {
          this.trigger("error", new Error("Google IMA SDK failed to load"));
        });
      } else {
        this.ready();
      }
    };
    /**
     * Get the ads instance ready
     */
    ready = () => {
      if (!this.enabled) {
        destroy(this);
      }
      this.startSafetyTimer(12e3, "ready()");
      this.managerPromise.then(() => {
        this.clearSafetyTimer("onAdsManagerLoaded()");
      });
      this.listeners();
      this.setupIMA();
    };
    // Build the tag URL
    get tagUrl() {
      const { config } = this;
      if (is_default.url(config.tagUrl)) {
        return config.tagUrl;
      }
      const params = {
        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
        AV_CHANNELID: "5a0458dc28a06145e4519d21",
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: config.publisherId
      };
      const base = "https://go.aniview.com/api/adserver6/vast/";
      return `${base}?${buildUrlParams(params)}`;
    }
    /**
     * In order for the SDK to display ads for our video, we need to tell it where to put them,
     * so here we define our ad container. This div is set up to render on top of the video player.
     * Using the code below, we tell the SDK to render ads within that div. We also provide a
     * handle to the content video player - the SDK will poll the current time of our player to
     * properly place mid-rolls. After we create the ad display container, we initialize it. On
     * mobile devices, this initialization is done as the result of a user action.
     */
    setupIMA = () => {
      this.elements.container = createElement("div", {
        class: this.player.config.classNames.ads
      });
      this.player.elements.container.appendChild(this.elements.container);
      google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
      google.ima.settings.setLocale(this.player.config.ads.language);
      google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline);
      this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media);
      this.loader = new google.ima.AdsLoader(this.elements.displayContainer);
      this.loader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        (event) => this.onAdsManagerLoaded(event),
        false
      );
      this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error), false);
      this.requestAds();
    };
    /**
     * Request advertisements
     */
    requestAds = () => {
      const { container } = this.player.elements;
      try {
        const request = new google.ima.AdsRequest();
        request.adTagUrl = this.tagUrl;
        request.linearAdSlotWidth = container.offsetWidth;
        request.linearAdSlotHeight = container.offsetHeight;
        request.nonLinearAdSlotWidth = container.offsetWidth;
        request.nonLinearAdSlotHeight = container.offsetHeight;
        request.forceNonLinearFullSlot = false;
        request.setAdWillPlayMuted(!this.player.muted);
        this.loader.requestAds(request);
      } catch (error) {
        this.onAdError(error);
      }
    };
    /**
     * Update the ad countdown
     * @param {boolean} start
     */
    pollCountdown = (start = false) => {
      if (!start) {
        clearInterval(this.countdownTimer);
        this.elements.container.removeAttribute("data-badge-text");
        return;
      }
      const update = () => {
        const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
        const label = `${i18n_default.get("advertisement", this.player.config)} - ${time}`;
        this.elements.container.setAttribute("data-badge-text", label);
      };
      this.countdownTimer = setInterval(update, 100);
    };
    /**
     * This method is called whenever the ads are ready inside the AdDisplayContainer
     * @param {Event} event - adsManagerLoadedEvent
     */
    onAdsManagerLoaded = (event) => {
      if (!this.enabled) {
        return;
      }
      const settings = new google.ima.AdsRenderingSettings();
      settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
      settings.enablePreloading = true;
      this.manager = event.getAdsManager(this.player, settings);
      this.cuePoints = this.manager.getCuePoints();
      this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error));
      Object.keys(google.ima.AdEvent.Type).forEach((type) => {
        this.manager.addEventListener(google.ima.AdEvent.Type[type], (e) => this.onAdEvent(e));
      });
      this.trigger("loaded");
    };
    addCuePoints = () => {
      if (!is_default.empty(this.cuePoints)) {
        this.cuePoints.forEach((cuePoint) => {
          if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
            const seekElement = this.player.elements.progress;
            if (is_default.element(seekElement)) {
              const cuePercentage = 100 / this.player.duration * cuePoint;
              const cue = createElement("span", {
                class: this.player.config.classNames.cues
              });
              cue.style.left = `${cuePercentage.toString()}%`;
              seekElement.appendChild(cue);
            }
          }
        });
      }
    };
    /**
     * This is where all the event handling takes place. Retrieve the ad from the event. Some
     * events (e.g. ALL_ADS_COMPLETED) don't have the ad object associated
     * https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdEvent.Type
     * @param {Event} event
     */
    onAdEvent = (event) => {
      const { container } = this.player.elements;
      const ad = event.getAd();
      const adData = event.getAdData();
      const dispatchEvent = (type) => {
        triggerEvent.call(this.player, this.player.media, `ads${type.replace(/_/g, "").toLowerCase()}`);
      };
      dispatchEvent(event.type);
      switch (event.type) {
        case google.ima.AdEvent.Type.LOADED:
          this.trigger("loaded");
          this.pollCountdown(true);
          if (!ad.isLinear()) {
            ad.width = container.offsetWidth;
            ad.height = container.offsetHeight;
          }
          break;
        case google.ima.AdEvent.Type.STARTED:
          this.manager.setVolume(this.player.volume);
          break;
        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          if (this.player.ended) {
            this.loadAds();
          } else {
            this.loader.contentComplete();
          }
          break;
        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
          this.pauseContent();
          break;
        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
          this.pollCountdown();
          this.resumeContent();
          break;
        case google.ima.AdEvent.Type.LOG:
          if (adData.adError) {
            this.player.debug.warn(`Non-fatal ad error: ${adData.adError.getMessage()}`);
          }
          break;
        default:
          break;
      }
    };
    /**
     * Any ad error handling comes through here
     * @param {Event} event
     */
    onAdError = (event) => {
      this.cancel();
      this.player.debug.warn("Ads error", event);
    };
    /**
     * Setup hooks for Plyr and window events. This ensures
     * the mid- and post-roll launch at the correct time. And
     * resize the advertisement when the player resizes
     */
    listeners = () => {
      const { container } = this.player.elements;
      let time;
      this.player.on("canplay", () => {
        this.addCuePoints();
      });
      this.player.on("ended", () => {
        this.loader.contentComplete();
      });
      this.player.on("timeupdate", () => {
        time = this.player.currentTime;
      });
      this.player.on("seeked", () => {
        const seekedTime = this.player.currentTime;
        if (is_default.empty(this.cuePoints)) {
          return;
        }
        this.cuePoints.forEach((cuePoint, index) => {
          if (time < cuePoint && cuePoint < seekedTime) {
            this.manager.discardAdBreak();
            this.cuePoints.splice(index, 1);
          }
        });
      });
      window.addEventListener("resize", () => {
        if (this.manager) {
          this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
        }
      });
    };
    /**
     * Initialize the adsManager and start playing advertisements
     */
    play = () => {
      const { container } = this.player.elements;
      if (!this.managerPromise) {
        this.resumeContent();
      }
      this.managerPromise.then(() => {
        this.manager.setVolume(this.player.volume);
        this.elements.displayContainer.initialize();
        try {
          if (!this.initialized) {
            this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
            this.manager.start();
          }
          this.initialized = true;
        } catch (adError) {
          this.onAdError(adError);
        }
      }).catch(() => {
      });
    };
    /**
     * Resume our video
     */
    resumeContent = () => {
      this.elements.container.style.zIndex = "";
      this.playing = false;
      silencePromise(this.player.media.play());
    };
    /**
     * Pause our video
     */
    pauseContent = () => {
      this.elements.container.style.zIndex = 3;
      this.playing = true;
      this.player.media.pause();
    };
    /**
     * Destroy the adsManager so we can grab new ads after this. If we don't then we're not
     * allowed to call new ads based on google policies, as they interpret this as an accidental
     * video requests. https://developers.google.com/interactive-
     * media-ads/docs/sdks/android/faq#8
     */
    cancel = () => {
      if (this.initialized) {
        this.resumeContent();
      }
      this.trigger("error");
      this.loadAds();
    };
    /**
     * Re-create our adsManager
     */
    loadAds = () => {
      this.managerPromise.then(() => {
        if (this.manager) {
          this.manager.destroy();
        }
        this.managerPromise = new Promise((resolve) => {
          this.on("loaded", resolve);
          this.player.debug.log(this.manager);
        });
        this.initialized = false;
        this.requestAds();
      }).catch(() => {
      });
    };
    /**
     * Handles callbacks after an ad event was invoked
     * @param {string} event - Event type
     * @param args
     */
    trigger = (event, ...args) => {
      const handlers = this.events[event];
      if (is_default.array(handlers)) {
        handlers.forEach((handler) => {
          if (is_default.function(handler)) {
            handler.apply(this, args);
          }
        });
      }
    };
    /**
     * Add event listeners
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     * @return {Ads}
     */
    on = (event, callback) => {
      if (!is_default.array(this.events[event])) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
      return this;
    };
    /**
     * Setup a safety timer for when the ad network doesn't respond for whatever reason.
     * The advertisement has 12 seconds to get its things together. We stop this timer when the
     * advertisement is playing, or when a user action is required to start, then we clear the
     * timer on ad ready
     * @param {number} time
     * @param {string} from
     */
    startSafetyTimer = (time, from) => {
      this.player.debug.log(`Safety timer invoked from: ${from}`);
      this.safetyTimer = setTimeout(() => {
        this.cancel();
        this.clearSafetyTimer("startSafetyTimer()");
      }, time);
    };
    /**
     * Clear our safety timer(s)
     * @param {string} from
     */
    clearSafetyTimer = (from) => {
      if (!is_default.nullOrUndefined(this.safetyTimer)) {
        this.player.debug.log(`Safety timer cleared from: ${from}`);
        clearTimeout(this.safetyTimer);
        this.safetyTimer = null;
      }
    };
  };
  var ads_default = Ads;

  // node_modules/plyr/src/js/plugins/preview-thumbnails.js
  init_live_reload();

  // node_modules/plyr/src/js/utils/numbers.js
  init_live_reload();
  function clamp2(input = 0, min = 0, max = 255) {
    return Math.min(Math.max(input, min), max);
  }

  // node_modules/plyr/src/js/plugins/preview-thumbnails.js
  function parseVtt(vttDataString) {
    const processedList = [];
    const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
    frames.forEach((frame) => {
      const result = {};
      const lines = frame.split(/\r\n|\n|\r/);
      lines.forEach((line) => {
        if (!is_default.number(result.startTime)) {
          const matchTimes = line.match(
            /(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})( ?--> ?)(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/
          );
          if (matchTimes) {
            result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number(`0.${matchTimes[4]}`);
            result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number(`0.${matchTimes[9]}`);
          }
        } else if (!is_default.empty(line.trim()) && is_default.empty(result.text)) {
          const lineSplit = line.trim().split("#xywh=");
          [result.text] = lineSplit;
          if (lineSplit[1]) {
            [result.x, result.y, result.w, result.h] = lineSplit[1].split(",");
          }
        }
      });
      if (result.text) {
        processedList.push(result);
      }
    });
    return processedList;
  }
  function fitRatio(ratio, outer) {
    const targetRatio = outer.width / outer.height;
    const result = {};
    if (ratio > targetRatio) {
      result.width = outer.width;
      result.height = 1 / ratio * outer.width;
    } else {
      result.height = outer.height;
      result.width = ratio * outer.height;
    }
    return result;
  }
  var PreviewThumbnails = class {
    /**
     * PreviewThumbnails constructor.
     * @param {Plyr} player
     * @return {PreviewThumbnails}
     */
    constructor(player) {
      this.player = player;
      this.thumbnails = [];
      this.loaded = false;
      this.lastMouseMoveTime = Date.now();
      this.mouseDown = false;
      this.loadedImages = [];
      this.elements = {
        thumb: {},
        scrubbing: {}
      };
      this.load();
    }
    get enabled() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
    }
    load = () => {
      if (this.player.elements.display.seekTooltip) {
        this.player.elements.display.seekTooltip.hidden = this.enabled;
      }
      if (!this.enabled) return;
      this.getThumbnails().then(() => {
        if (!this.enabled) {
          return;
        }
        this.render();
        this.determineContainerAutoSizing();
        this.listeners();
        this.loaded = true;
      });
    };
    // Download VTT files and parse them
    getThumbnails = () => {
      return new Promise((resolve) => {
        const { src } = this.player.config.previewThumbnails;
        if (is_default.empty(src)) {
          throw new Error("Missing previewThumbnails.src config attribute");
        }
        const sortAndResolve = () => {
          this.thumbnails.sort((x, y) => x.height - y.height);
          this.player.debug.log("Preview thumbnails", this.thumbnails);
          resolve();
        };
        if (is_default.function(src)) {
          src((thumbnails) => {
            this.thumbnails = thumbnails;
            sortAndResolve();
          });
        } else {
          const urls = is_default.string(src) ? [src] : src;
          const promises = urls.map((u) => this.getThumbnail(u));
          Promise.all(promises).then(sortAndResolve);
        }
      });
    };
    // Process individual VTT file
    getThumbnail = (url) => {
      return new Promise((resolve) => {
        fetch(url, void 0, this.player.config.previewThumbnails.withCredentials).then((response) => {
          const thumbnail = {
            frames: parseVtt(response),
            height: null,
            urlPrefix: ""
          };
          if (!thumbnail.frames[0].text.startsWith("/") && !thumbnail.frames[0].text.startsWith("http://") && !thumbnail.frames[0].text.startsWith("https://")) {
            thumbnail.urlPrefix = url.substring(0, url.lastIndexOf("/") + 1);
          }
          const tempImage = new Image();
          tempImage.onload = () => {
            thumbnail.height = tempImage.naturalHeight;
            thumbnail.width = tempImage.naturalWidth;
            this.thumbnails.push(thumbnail);
            resolve();
          };
          tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
        });
      });
    };
    startMove = (event) => {
      if (!this.loaded) return;
      if (!is_default.event(event) || !["touchmove", "mousemove"].includes(event.type)) return;
      if (!this.player.media.duration) return;
      if (event.type === "touchmove") {
        this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
      } else {
        const clientRect = this.player.elements.progress.getBoundingClientRect();
        const percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
        this.seekTime = this.player.media.duration * (percentage / 100);
        if (this.seekTime < 0) {
          this.seekTime = 0;
        }
        if (this.seekTime > this.player.media.duration - 1) {
          this.seekTime = this.player.media.duration - 1;
        }
        this.mousePosX = event.pageX;
        this.elements.thumb.time.textContent = formatTime(this.seekTime);
        const point = this.player.config.markers?.points?.find(({ time: t2 }) => t2 === Math.round(this.seekTime));
        if (point) {
          this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
        }
      }
      this.showImageAtCurrentTime();
    };
    endMove = () => {
      this.toggleThumbContainer(false, true);
    };
    startScrubbing = (event) => {
      if (is_default.nullOrUndefined(event.button) || event.button === false || event.button === 0) {
        this.mouseDown = true;
        if (this.player.media.duration) {
          this.toggleScrubbingContainer(true);
          this.toggleThumbContainer(false, true);
          this.showImageAtCurrentTime();
        }
      }
    };
    endScrubbing = () => {
      this.mouseDown = false;
      if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
        this.toggleScrubbingContainer(false);
      } else {
        once.call(this.player, this.player.media, "timeupdate", () => {
          if (!this.mouseDown) {
            this.toggleScrubbingContainer(false);
          }
        });
      }
    };
    /**
     * Setup hooks for Plyr and window events
     */
    listeners = () => {
      this.player.on("play", () => {
        this.toggleThumbContainer(false, true);
      });
      this.player.on("seeked", () => {
        this.toggleThumbContainer(false);
      });
      this.player.on("timeupdate", () => {
        this.lastTime = this.player.media.currentTime;
      });
    };
    /**
     * Create HTML elements for image containers
     */
    render = () => {
      this.elements.thumb.container = createElement("div", {
        class: this.player.config.classNames.previewThumbnails.thumbContainer
      });
      this.elements.thumb.imageContainer = createElement("div", {
        class: this.player.config.classNames.previewThumbnails.imageContainer
      });
      this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
      const timeContainer = createElement("div", {
        class: this.player.config.classNames.previewThumbnails.timeContainer
      });
      this.elements.thumb.time = createElement("span", {}, "00:00");
      timeContainer.appendChild(this.elements.thumb.time);
      this.elements.thumb.imageContainer.appendChild(timeContainer);
      if (is_default.element(this.player.elements.progress)) {
        this.player.elements.progress.appendChild(this.elements.thumb.container);
      }
      this.elements.scrubbing.container = createElement("div", {
        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
      });
      this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
    };
    destroy = () => {
      if (this.elements.thumb.container) {
        this.elements.thumb.container.remove();
      }
      if (this.elements.scrubbing.container) {
        this.elements.scrubbing.container.remove();
      }
    };
    showImageAtCurrentTime = () => {
      if (this.mouseDown) {
        this.setScrubbingContainerSize();
      } else {
        this.setThumbContainerSizeAndPos();
      }
      const thumbNum = this.thumbnails[0].frames.findIndex(
        (frame) => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime
      );
      const hasThumb = thumbNum >= 0;
      let qualityIndex = 0;
      if (!this.mouseDown) {
        this.toggleThumbContainer(hasThumb);
      }
      if (!hasThumb) {
        return;
      }
      this.thumbnails.forEach((thumbnail, index) => {
        if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
          qualityIndex = index;
        }
      });
      if (thumbNum !== this.showingThumb) {
        this.showingThumb = thumbNum;
        this.loadImage(qualityIndex);
      }
    };
    // Show the image that's currently specified in this.showingThumb
    loadImage = (qualityIndex = 0) => {
      const thumbNum = this.showingThumb;
      const thumbnail = this.thumbnails[qualityIndex];
      const { urlPrefix } = thumbnail;
      const frame = thumbnail.frames[thumbNum];
      const thumbFilename = thumbnail.frames[thumbNum].text;
      const thumbUrl = urlPrefix + thumbFilename;
      if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
        if (this.loadingImage && this.usingSprites) {
          this.loadingImage.onload = null;
        }
        const previewImage = new Image();
        previewImage.src = thumbUrl;
        previewImage.dataset.index = thumbNum;
        previewImage.dataset.filename = thumbFilename;
        this.showingThumbFilename = thumbFilename;
        this.player.debug.log(`Loading image: ${thumbUrl}`);
        previewImage.onload = () => this.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);
        this.loadingImage = previewImage;
        this.removeOldImages(previewImage);
      } else {
        this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
        this.currentImageElement.dataset.index = thumbNum;
        this.removeOldImages(this.currentImageElement);
      }
    };
    showImage = (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
      this.player.debug.log(
        `Showing thumb: ${thumbFilename}. num: ${thumbNum}. qual: ${qualityIndex}. newimg: ${newImage}`
      );
      this.setImageSizeAndOffset(previewImage, frame);
      if (newImage) {
        this.currentImageContainer.appendChild(previewImage);
        this.currentImageElement = previewImage;
        if (!this.loadedImages.includes(thumbFilename)) {
          this.loadedImages.push(thumbFilename);
        }
      }
      this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
    };
    // Remove all preview images that aren't the designated current image
    removeOldImages = (currentImage) => {
      Array.from(this.currentImageContainer.children).forEach((image) => {
        if (image.tagName.toLowerCase() !== "img") {
          return;
        }
        const removeDelay = this.usingSprites ? 500 : 1e3;
        if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
          image.dataset.deleting = true;
          const { currentImageContainer } = this;
          setTimeout(() => {
            currentImageContainer.removeChild(image);
            this.player.debug.log(`Removing thumb: ${image.dataset.filename}`);
          }, removeDelay);
        }
      });
    };
    // Preload images before and after the current one. Only if the user is still hovering/seeking the same frame
    // This will only preload the lowest quality
    preloadNearby = (thumbNum, forward = true) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;
          if (this.showingThumbFilename === oldThumbFilename) {
            let thumbnailsClone;
            if (forward) {
              thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
            } else {
              thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
            }
            let foundOne = false;
            thumbnailsClone.forEach((frame) => {
              const newThumbFilename = frame.text;
              if (newThumbFilename !== oldThumbFilename) {
                if (!this.loadedImages.includes(newThumbFilename)) {
                  foundOne = true;
                  this.player.debug.log(`Preloading thumb filename: ${newThumbFilename}`);
                  const { urlPrefix } = this.thumbnails[0];
                  const thumbURL = urlPrefix + newThumbFilename;
                  const previewImage = new Image();
                  previewImage.src = thumbURL;
                  previewImage.onload = () => {
                    this.player.debug.log(`Preloaded thumb filename: ${newThumbFilename}`);
                    if (!this.loadedImages.includes(newThumbFilename)) this.loadedImages.push(newThumbFilename);
                    resolve();
                  };
                }
              }
            });
            if (!foundOne) {
              resolve();
            }
          }
        }, 300);
      });
    };
    // If user has been hovering current image for half a second, look for a higher quality one
    getHigherQuality = (currentQualityIndex, previewImage, frame, thumbFilename) => {
      if (currentQualityIndex < this.thumbnails.length - 1) {
        let previewImageHeight = previewImage.naturalHeight;
        if (this.usingSprites) {
          previewImageHeight = frame.h;
        }
        if (previewImageHeight < this.thumbContainerHeight) {
          setTimeout(() => {
            if (this.showingThumbFilename === thumbFilename) {
              this.player.debug.log(`Showing higher quality thumb for: ${thumbFilename}`);
              this.loadImage(currentQualityIndex + 1);
            }
          }, 300);
        }
      }
    };
    get currentImageContainer() {
      return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
    }
    get usingSprites() {
      return Object.keys(this.thumbnails[0].frames[0]).includes("w");
    }
    get thumbAspectRatio() {
      if (this.usingSprites) {
        return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
      }
      return this.thumbnails[0].width / this.thumbnails[0].height;
    }
    get thumbContainerHeight() {
      if (this.mouseDown) {
        const { height } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        return height;
      }
      if (this.sizeSpecifiedInCSS) {
        return this.elements.thumb.imageContainer.clientHeight;
      }
      return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }
    get currentImageElement() {
      return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
    }
    set currentImageElement(element) {
      if (this.mouseDown) {
        this.currentScrubbingImageElement = element;
      } else {
        this.currentThumbnailImageElement = element;
      }
    }
    toggleThumbContainer = (toggle = false, clearShowing = false) => {
      const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
      this.elements.thumb.container.classList.toggle(className, toggle);
      if (!toggle && clearShowing) {
        this.showingThumb = null;
        this.showingThumbFilename = null;
      }
    };
    toggleScrubbingContainer = (toggle = false) => {
      const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
      this.elements.scrubbing.container.classList.toggle(className, toggle);
      if (!toggle) {
        this.showingThumb = null;
        this.showingThumbFilename = null;
      }
    };
    determineContainerAutoSizing = () => {
      if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
        this.sizeSpecifiedInCSS = true;
      }
    };
    // Set the size to be about a quarter of the size of video. Unless option dynamicSize === false, in which case it needs to be set in CSS
    setThumbContainerSizeAndPos = () => {
      const { imageContainer } = this.elements.thumb;
      if (!this.sizeSpecifiedInCSS) {
        const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
        imageContainer.style.height = `${this.thumbContainerHeight}px`;
        imageContainer.style.width = `${thumbWidth}px`;
      } else if (imageContainer.clientHeight > 20 && imageContainer.clientWidth < 20) {
        const thumbWidth = Math.floor(imageContainer.clientHeight * this.thumbAspectRatio);
        imageContainer.style.width = `${thumbWidth}px`;
      } else if (imageContainer.clientHeight < 20 && imageContainer.clientWidth > 20) {
        const thumbHeight = Math.floor(imageContainer.clientWidth / this.thumbAspectRatio);
        imageContainer.style.height = `${thumbHeight}px`;
      }
      this.setThumbContainerPos();
    };
    setThumbContainerPos = () => {
      const scrubberRect = this.player.elements.progress.getBoundingClientRect();
      const containerRect = this.player.elements.container.getBoundingClientRect();
      const { container } = this.elements.thumb;
      const min = containerRect.left - scrubberRect.left + 10;
      const max = containerRect.right - scrubberRect.left - container.clientWidth - 10;
      const position = this.mousePosX - scrubberRect.left - container.clientWidth / 2;
      const clamped = clamp2(position, min, max);
      container.style.left = `${clamped}px`;
      container.style.setProperty("--preview-arrow-offset", `${position - clamped}px`);
    };
    // Can't use 100% width, in case the video is a different aspect ratio to the video container
    setScrubbingContainerSize = () => {
      const { width, height } = fitRatio(this.thumbAspectRatio, {
        width: this.player.media.clientWidth,
        height: this.player.media.clientHeight
      });
      this.elements.scrubbing.container.style.width = `${width}px`;
      this.elements.scrubbing.container.style.height = `${height}px`;
    };
    // Sprites need to be offset to the correct location
    setImageSizeAndOffset = (previewImage, frame) => {
      if (!this.usingSprites) return;
      const multiplier = this.thumbContainerHeight / frame.h;
      previewImage.style.height = `${previewImage.naturalHeight * multiplier}px`;
      previewImage.style.width = `${previewImage.naturalWidth * multiplier}px`;
      previewImage.style.left = `-${frame.x * multiplier}px`;
      previewImage.style.top = `-${frame.y * multiplier}px`;
    };
  };
  var preview_thumbnails_default = PreviewThumbnails;

  // node_modules/plyr/src/js/source.js
  init_live_reload();
  var source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements(type, attributes) {
      if (is_default.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is_default.array(attributes)) {
        attributes.forEach((attribute) => {
          insertElement(type, this.media, attribute);
        });
      }
    },
    // Update source
    // Sources are not checked for support so be careful
    change(input) {
      if (!getDeep(input, "sources.length")) {
        this.debug.warn("Invalid source format");
        return;
      }
      html5_default.cancelRequests.call(this);
      this.destroy(() => {
        this.options.quality = [];
        removeElement(this.media);
        this.media = null;
        if (is_default.element(this.elements.container)) {
          this.elements.container.removeAttribute("class");
        }
        const { sources, type } = input;
        const [{ provider = providers.html5, src }] = sources;
        const tagName = provider === "html5" ? type : "div";
        const attributes = provider === "html5" ? {} : { src };
        Object.assign(this, {
          provider,
          type,
          // Check for support
          supported: support_default.check(type, provider, this.config.playsinline),
          // Create new element
          media: createElement(tagName, attributes)
        });
        this.elements.container.appendChild(this.media);
        if (is_default.boolean(input.autoplay)) {
          this.config.autoplay = input.autoplay;
        }
        if (this.isHTML5) {
          if (this.config.crossorigin) {
            this.media.setAttribute("crossorigin", "");
          }
          if (this.config.autoplay) {
            this.media.setAttribute("autoplay", "");
          }
          if (!is_default.empty(input.poster)) {
            this.poster = input.poster;
          }
          if (this.config.loop.active) {
            this.media.setAttribute("loop", "");
          }
          if (this.config.muted) {
            this.media.setAttribute("muted", "");
          }
          if (this.config.playsinline) {
            this.media.setAttribute("playsinline", "");
          }
        }
        ui_default.addStyleHook.call(this);
        if (this.isHTML5) {
          source.insertElements.call(this, "source", sources);
        }
        this.config.title = input.title;
        media_default.setup.call(this);
        if (this.isHTML5) {
          if (Object.keys(input).includes("tracks")) {
            source.insertElements.call(this, "track", input.tracks);
          }
        }
        if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
          ui_default.build.call(this);
        }
        if (this.isHTML5) {
          this.media.load();
        }
        if (!is_default.empty(input.previewThumbnails)) {
          Object.assign(this.config.previewThumbnails, input.previewThumbnails);
          if (this.previewThumbnails && this.previewThumbnails.loaded) {
            this.previewThumbnails.destroy();
            this.previewThumbnails = null;
          }
          if (this.config.previewThumbnails.enabled) {
            this.previewThumbnails = new preview_thumbnails_default(this);
          }
        }
        this.fullscreen.update();
      }, true);
    }
  };
  var source_default = source;

  // node_modules/plyr/src/js/plyr.js
  var Plyr = class _Plyr {
    constructor(target, options) {
      this.timers = {};
      this.ready = false;
      this.loading = false;
      this.failed = false;
      this.touch = support_default.touch;
      this.media = target;
      if (is_default.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      }
      if (window.jQuery && this.media instanceof jQuery || is_default.nodeList(this.media) || is_default.array(this.media)) {
        this.media = this.media[0];
      }
      this.config = extend(
        {},
        defaults_default,
        _Plyr.defaults,
        options || {},
        (() => {
          try {
            return JSON.parse(this.media.getAttribute("data-plyr-config"));
          } catch {
            return {};
          }
        })()
      );
      this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      };
      this.captions = {
        active: null,
        currentTrack: -1,
        meta: /* @__PURE__ */ new WeakMap()
      };
      this.fullscreen = {
        active: false
      };
      this.options = {
        speed: [],
        quality: []
      };
      this.debug = new Console(this.config.debug);
      this.debug.log("Config", this.config);
      this.debug.log("Support", support_default);
      if (is_default.nullOrUndefined(this.media) || !is_default.element(this.media)) {
        this.debug.error("Setup failed: no suitable element passed");
        return;
      }
      if (this.media.plyr) {
        this.debug.warn("Target already setup");
        return;
      }
      if (!this.config.enabled) {
        this.debug.error("Setup failed: disabled by config");
        return;
      }
      if (!support_default.check().api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      const clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone;
      const type = this.media.tagName.toLowerCase();
      let iframe = null;
      let url = null;
      switch (type) {
        case "div":
          iframe = this.media.querySelector("iframe");
          if (is_default.element(iframe)) {
            url = parseUrl(iframe.getAttribute("src"));
            this.provider = getProviderByUrl(url.toString());
            this.elements.container = this.media;
            this.media = iframe;
            this.elements.container.className = "";
            if (url.search.length) {
              const truthy = ["1", "true"];
              if (truthy.includes(url.searchParams.get("autoplay"))) {
                this.config.autoplay = true;
              }
              if (truthy.includes(url.searchParams.get("loop"))) {
                this.config.loop.active = true;
              }
              if (this.isYouTube) {
                this.config.playsinline = truthy.includes(url.searchParams.get("playsinline"));
                this.config.youtube.hl = url.searchParams.get("hl");
              } else {
                this.config.playsinline = true;
              }
            }
          } else {
            this.provider = this.media.getAttribute(this.config.attributes.embed.provider);
            this.media.removeAttribute(this.config.attributes.embed.provider);
          }
          if (is_default.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
            this.debug.error("Setup failed: Invalid provider");
            return;
          }
          this.type = types.video;
          break;
        case "video":
        case "audio":
          this.type = type;
          this.provider = providers.html5;
          if (this.media.hasAttribute("crossorigin")) {
            this.config.crossorigin = true;
          }
          if (this.media.hasAttribute("autoplay")) {
            this.config.autoplay = true;
          }
          if (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) {
            this.config.playsinline = true;
          }
          if (this.media.hasAttribute("muted")) {
            this.config.muted = true;
          }
          if (this.media.hasAttribute("loop")) {
            this.config.loop.active = true;
          }
          break;
        default:
          this.debug.error("Setup failed: unsupported type");
          return;
      }
      this.supported = support_default.check(this.type, this.provider);
      if (!this.supported.api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      this.eventListeners = [];
      this.listeners = new listeners_default(this);
      this.storage = new storage_default(this);
      this.media.plyr = this;
      if (!is_default.element(this.elements.container)) {
        this.elements.container = createElement("div");
        wrap(this.media, this.elements.container);
      }
      ui_default.migrateStyles.call(this);
      ui_default.addStyleHook.call(this);
      media_default.setup.call(this);
      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(" "), (event) => {
          this.debug.log(`event: ${event.type}`);
        });
      }
      this.fullscreen = new fullscreen_default(this);
      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        ui_default.build.call(this);
      }
      this.listeners.container();
      this.listeners.global();
      if (this.config.ads.enabled) {
        this.ads = new ads_default(this);
      }
      if (this.isHTML5 && this.config.autoplay) {
        this.once("canplay", () => silencePromise(this.play()));
      }
      this.lastSeekTime = 0;
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new preview_thumbnails_default(this);
      }
    }
    // ---------------------------------------
    // API
    // ---------------------------------------
    /**
     * Types and provider helpers
     */
    get isHTML5() {
      return this.provider === providers.html5;
    }
    get isEmbed() {
      return this.isYouTube || this.isVimeo;
    }
    get isYouTube() {
      return this.provider === providers.youtube;
    }
    get isVimeo() {
      return this.provider === providers.vimeo;
    }
    get isVideo() {
      return this.type === types.video;
    }
    get isAudio() {
      return this.type === types.audio;
    }
    /**
     * Play the media, or play the advertisement (if they are not blocked)
     */
    play = () => {
      if (!is_default.function(this.media.play)) {
        return null;
      }
      if (this.ads && this.ads.enabled) {
        this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
      }
      return this.media.play();
    };
    /**
     * Pause the media
     */
    pause = () => {
      if (!this.playing || !is_default.function(this.media.pause)) {
        return null;
      }
      return this.media.pause();
    };
    /**
     * Get playing state
     */
    get playing() {
      return Boolean(this.ready && !this.paused && !this.ended);
    }
    /**
     * Get paused state
     */
    get paused() {
      return Boolean(this.media.paused);
    }
    /**
     * Get stopped state
     */
    get stopped() {
      return Boolean(this.paused && this.currentTime === 0);
    }
    /**
     * Get ended state
     */
    get ended() {
      return Boolean(this.media.ended);
    }
    /**
     * Toggle playback based on current status
     * @param {boolean} input
     */
    togglePlay = (input) => {
      const toggle = is_default.boolean(input) ? input : !this.playing;
      if (toggle) {
        return this.play();
      }
      return this.pause();
    };
    /**
     * Stop playback
     */
    stop = () => {
      if (this.isHTML5) {
        this.pause();
        this.restart();
      } else if (is_default.function(this.media.stop)) {
        this.media.stop();
      }
    };
    /**
     * Restart playback
     */
    restart = () => {
      this.currentTime = 0;
    };
    /**
     * Rewind
     * @param {number} seekTime - how far to rewind in seconds. Defaults to the config.seekTime
     */
    rewind = (seekTime) => {
      this.currentTime -= is_default.number(seekTime) ? seekTime : this.config.seekTime;
    };
    /**
     * Fast forward
     * @param {number} seekTime - how far to fast forward in seconds. Defaults to the config.seekTime
     */
    forward = (seekTime) => {
      this.currentTime += is_default.number(seekTime) ? seekTime : this.config.seekTime;
    };
    /**
     * Seek to a time
     * @param {number} input - where to seek to in seconds. Defaults to 0 (the start)
     */
    set currentTime(input) {
      if (!this.duration) {
        return;
      }
      const inputIsValid = is_default.number(input) && input > 0;
      this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0;
      this.debug.log(`Seeking to ${this.currentTime} seconds`);
    }
    /**
     * Get current time
     */
    get currentTime() {
      return Number(this.media.currentTime);
    }
    /**
     * Get buffered
     */
    get buffered() {
      const { buffered } = this.media;
      if (is_default.number(buffered)) {
        return buffered;
      }
      if (buffered && buffered.length && this.duration > 0) {
        return buffered.end(0) / this.duration;
      }
      return 0;
    }
    /**
     * Get seeking status
     */
    get seeking() {
      return Boolean(this.media.seeking);
    }
    /**
     * Get the duration of the current media
     */
    get duration() {
      const fauxDuration = Number.parseFloat(this.config.duration);
      const realDuration = (this.media || {}).duration;
      const duration = !is_default.number(realDuration) || realDuration === Infinity ? 0 : realDuration;
      return fauxDuration || duration;
    }
    /**
     * Set the player volume
     * @param {number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
     */
    set volume(value) {
      let volume = value;
      const max = 1;
      const min = 0;
      if (is_default.string(volume)) {
        volume = Number(volume);
      }
      if (!is_default.number(volume)) {
        volume = this.storage.get("volume");
      }
      if (!is_default.number(volume)) {
        ({ volume } = this.config);
      }
      if (volume > max) {
        volume = max;
      }
      if (volume < min) {
        volume = min;
      }
      this.config.volume = volume;
      this.media.volume = volume;
      if (!is_default.empty(value) && this.muted && volume > 0) {
        this.muted = false;
      }
    }
    /**
     * Get the current player volume
     */
    get volume() {
      return Number(this.media.volume);
    }
    /**
     * Increase volume
     * @param {boolean} step - How much to decrease by (between 0 and 1)
     */
    increaseVolume = (step) => {
      const volume = this.media.muted ? 0 : this.volume;
      this.volume = volume + (is_default.number(step) ? step : 0);
    };
    /**
     * Decrease volume
     * @param {boolean} step - How much to decrease by (between 0 and 1)
     */
    decreaseVolume = (step) => {
      this.increaseVolume(-step);
    };
    /**
     * Set muted state
     * @param {boolean} mute
     */
    set muted(mute) {
      let toggle = mute;
      if (!is_default.boolean(toggle)) {
        toggle = this.storage.get("muted");
      }
      if (!is_default.boolean(toggle)) {
        toggle = this.config.muted;
      }
      this.config.muted = toggle;
      this.media.muted = toggle;
    }
    /**
     * Get current muted state
     */
    get muted() {
      return Boolean(this.media.muted);
    }
    /**
     * Check if the media has audio
     */
    get hasAudio() {
      if (!this.isHTML5) {
        return true;
      }
      if (this.isAudio) {
        return true;
      }
      return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
    }
    /**
     * Set playback speed
     * @param {number} input - the speed of playback (0.5-2.0)
     */
    set speed(input) {
      let speed = null;
      if (is_default.number(input)) {
        speed = input;
      }
      if (!is_default.number(speed)) {
        speed = this.storage.get("speed");
      }
      if (!is_default.number(speed)) {
        speed = this.config.speed.selected;
      }
      const { minimumSpeed: min, maximumSpeed: max } = this;
      speed = clamp2(speed, min, max);
      this.config.speed.selected = speed;
      setTimeout(() => {
        if (this.media) {
          this.media.playbackRate = speed;
        }
      }, 0);
    }
    /**
     * Get current playback speed
     */
    get speed() {
      return Number(this.media.playbackRate);
    }
    /**
     * Get the minimum allowed speed
     */
    get minimumSpeed() {
      if (this.isYouTube) {
        return Math.min(...this.options.speed);
      }
      if (this.isVimeo) {
        return 0.5;
      }
      return 0.0625;
    }
    /**
     * Get the maximum allowed speed
     */
    get maximumSpeed() {
      if (this.isYouTube) {
        return Math.max(...this.options.speed);
      }
      if (this.isVimeo) {
        return 2;
      }
      return 16;
    }
    /**
     * Set playback quality
     * Currently HTML5 & YouTube only
     * @param {number} input - Quality level
     */
    set quality(input) {
      const config = this.config.quality;
      const options = this.options.quality;
      if (!options.length) {
        return;
      }
      let quality = [
        !is_default.empty(input) && Number(input),
        this.storage.get("quality"),
        config.selected,
        config.default
      ].find(is_default.number);
      let updateStorage = true;
      if (!options.includes(quality)) {
        const value = closest2(options, quality);
        this.debug.warn(`Unsupported quality option: ${quality}, using ${value} instead`);
        quality = value;
        updateStorage = false;
      }
      config.selected = quality;
      this.media.quality = quality;
      if (updateStorage) {
        this.storage.set({ quality });
      }
    }
    /**
     * Get current quality level
     */
    get quality() {
      return this.media.quality;
    }
    /**
     * Toggle loop
     * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
     * @param {boolean} input - Whether to loop or not
     */
    set loop(input) {
      const toggle = is_default.boolean(input) ? input : this.config.loop.active;
      this.config.loop.active = toggle;
      this.media.loop = toggle;
    }
    /**
     * Get current loop state
     */
    get loop() {
      return Boolean(this.media.loop);
    }
    /**
     * Set new media source
     * @param {object} input - The new source object (see docs)
     */
    set source(input) {
      source_default.change.call(this, input);
    }
    /**
     * Get current source
     */
    get source() {
      return this.media.currentSrc;
    }
    /**
     * Get a download URL (either source or custom)
     */
    get download() {
      const { download } = this.config.urls;
      return is_default.url(download) ? download : this.source;
    }
    /**
     * Set the download URL
     */
    set download(input) {
      if (!is_default.url(input)) {
        return;
      }
      this.config.urls.download = input;
      controls_default.setDownloadUrl.call(this);
    }
    /**
     * Set the poster image for a video
     * @param {string} input - the URL for the new poster image
     */
    set poster(input) {
      if (!this.isVideo) {
        this.debug.warn("Poster can only be set for video");
        return;
      }
      ui_default.setPoster.call(this, input, false).catch(() => {
      });
    }
    /**
     * Get the current poster image
     */
    get poster() {
      if (!this.isVideo) {
        return null;
      }
      return this.media.getAttribute("poster") || this.media.getAttribute("data-poster");
    }
    /**
     * Get the current aspect ratio in use
     */
    get ratio() {
      if (!this.isVideo) {
        return null;
      }
      const ratio = reduceAspectRatio(getAspectRatio.call(this));
      return is_default.array(ratio) ? ratio.join(":") : ratio;
    }
    /**
     * Set video aspect ratio
     */
    set ratio(input) {
      if (!this.isVideo) {
        this.debug.warn("Aspect ratio can only be set for video");
        return;
      }
      if (!is_default.string(input) || !validateAspectRatio(input)) {
        this.debug.error(`Invalid aspect ratio specified (${input})`);
        return;
      }
      this.config.ratio = reduceAspectRatio(input);
      setAspectRatio.call(this);
    }
    /**
     * Set the autoplay state
     * @param {boolean} input - Whether to autoplay or not
     */
    set autoplay(input) {
      this.config.autoplay = is_default.boolean(input) ? input : this.config.autoplay;
    }
    /**
     * Get the current autoplay state
     */
    get autoplay() {
      return Boolean(this.config.autoplay);
    }
    /**
     * Toggle captions
     * @param {boolean} input - Whether to enable captions
     */
    toggleCaptions(input) {
      captions_default.toggle.call(this, input, false);
    }
    /**
     * Set the caption track by index
     * @param {number} input - Caption index
     */
    set currentTrack(input) {
      captions_default.set.call(this, input, false);
      captions_default.setup.call(this);
    }
    /**
     * Get the current caption track index (-1 if disabled)
     */
    get currentTrack() {
      const { toggled, currentTrack } = this.captions;
      return toggled ? currentTrack : -1;
    }
    /**
     * Set the wanted language for captions
     * Since tracks can be added later it won't update the actual caption track until there is a matching track
     * @param {string} input - Two character ISO language code (e.g. EN, FR, PT, etc)
     */
    set language(input) {
      captions_default.setLanguage.call(this, input, false);
    }
    /**
     * Get the current track's language
     */
    get language() {
      return (captions_default.getCurrentTrack.call(this) || {}).language;
    }
    /**
     * Toggle picture-in-picture playback on WebKit/MacOS
     * TODO: update player with state, support, enabled
     * TODO: detect outside changes
     */
    set pip(input) {
      if (!support_default.pip) {
        return;
      }
      const toggle = is_default.boolean(input) ? input : !this.pip;
      if (is_default.function(this.media.webkitSetPresentationMode)) {
        this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
      }
      if (is_default.function(this.media.requestPictureInPicture)) {
        if (!this.pip && toggle) {
          this.media.requestPictureInPicture();
        } else if (this.pip && !toggle) {
          document.exitPictureInPicture();
        }
      }
    }
    /**
     * Get the current picture-in-picture state
     */
    get pip() {
      if (!support_default.pip) {
        return null;
      }
      if (!is_default.empty(this.media.webkitPresentationMode)) {
        return this.media.webkitPresentationMode === pip.active;
      }
      return this.media === document.pictureInPictureElement;
    }
    /**
     * Sets the preview thumbnails for the current source
     */
    setPreviewThumbnails(thumbnailSource) {
      if (this.previewThumbnails && this.previewThumbnails.loaded) {
        this.previewThumbnails.destroy();
        this.previewThumbnails = null;
      }
      Object.assign(this.config.previewThumbnails, thumbnailSource);
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new preview_thumbnails_default(this);
      }
    }
    /**
     * Trigger the airplay dialog
     * TODO: update player with state, support, enabled
     */
    airplay = () => {
      if (support_default.airplay) {
        this.media.webkitShowPlaybackTargetPicker();
      }
    };
    /**
     * Toggle the player controls
     * @param {boolean} [toggle] - Whether to show the controls
     */
    toggleControls = (toggle) => {
      if (this.supported.ui && !this.isAudio) {
        const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls);
        const force = typeof toggle === "undefined" ? void 0 : !toggle;
        const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force);
        if (hiding && is_default.array(this.config.controls) && this.config.controls.includes("settings") && !is_default.empty(this.config.settings)) {
          controls_default.toggleMenu.call(this, false);
        }
        if (hiding !== isHidden) {
          const eventName = hiding ? "controlshidden" : "controlsshown";
          triggerEvent.call(this, this.media, eventName);
        }
        return !hiding;
      }
      return false;
    };
    /**
     * Add event listeners
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     */
    on = (event, callback) => {
      on.call(this, this.elements.container, event, callback);
    };
    /**
     * Add event listeners once
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     */
    once = (event, callback) => {
      once.call(this, this.elements.container, event, callback);
    };
    /**
     * Remove event listeners
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     */
    off = (event, callback) => {
      off(this.elements.container, event, callback);
    };
    /**
     * Destroy an instance
     * Event listeners are removed when elements are removed
     * http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
     * @param {Function} callback - Callback for when destroy is complete
     * @param {boolean} soft - Whether it's a soft destroy (for source changes etc)
     */
    destroy = (callback, soft = false) => {
      if (!this.ready) {
        return;
      }
      const done = () => {
        document.body.style.overflow = "";
        this.embed = null;
        if (soft) {
          if (Object.keys(this.elements).length) {
            removeElement(this.elements.buttons.play);
            removeElement(this.elements.captions);
            removeElement(this.elements.controls);
            removeElement(this.elements.wrapper);
            this.elements.buttons.play = null;
            this.elements.captions = null;
            this.elements.controls = null;
            this.elements.wrapper = null;
          }
          if (is_default.function(callback)) {
            callback();
          }
        } else {
          unbindListeners.call(this);
          html5_default.cancelRequests.call(this);
          replaceElement(this.elements.original, this.elements.container);
          triggerEvent.call(this, this.elements.original, "destroyed", true);
          if (is_default.function(callback)) {
            callback.call(this.elements.original);
          }
          this.ready = false;
          setTimeout(() => {
            this.elements = null;
            this.media = null;
          }, 200);
        }
      };
      this.stop();
      clearTimeout(this.timers.loading);
      clearTimeout(this.timers.controls);
      clearTimeout(this.timers.resized);
      if (this.isHTML5) {
        ui_default.toggleNativeControls.call(this, true);
        done();
      } else if (this.isYouTube) {
        clearInterval(this.timers.buffering);
        clearInterval(this.timers.playing);
        if (this.embed !== null && is_default.function(this.embed.destroy)) {
          this.embed.destroy();
        }
        done();
      } else if (this.isVimeo) {
        if (this.embed !== null) {
          this.embed.unload().then(done);
        }
        setTimeout(done, 200);
      }
    };
    /**
     * Check for support for a mime type (HTML5 only)
     * @param {string} type - Mime type
     */
    supports = (type) => support_default.mime.call(this, type);
    /**
     * Check for support
     * @param {string} type - Player type (audio/video)
     * @param {string} provider - Provider (html5/youtube/vimeo)
     */
    static supported(type, provider) {
      return support_default.check(type, provider);
    }
    /**
     * Load an SVG sprite into the page
     * @param {string} url - URL for the SVG sprite
     * @param {string} [id] - Unique ID
     */
    static loadSprite(url, id) {
      return loadSprite(url, id);
    }
    /**
     * Setup multiple instances
     * @param {*} selector
     * @param {object} options
     */
    static setup(selector, options = {}) {
      let targets = null;
      if (is_default.string(selector)) {
        targets = Array.from(document.querySelectorAll(selector));
      } else if (is_default.nodeList(selector)) {
        targets = Array.from(selector);
      } else if (is_default.array(selector)) {
        targets = selector.filter(is_default.element);
      }
      if (is_default.empty(targets)) {
        return null;
      }
      return targets.map((t2) => new _Plyr(t2, options));
    }
  };
  Plyr.defaults = cloneDeep(defaults_default);
  var plyr_default = Plyr;

  // src/interactions/video-plyr.js
  var videoPlyr = function() {
    const COMPONENT = ".plyr_component";
    const VIDEO_CLASS = ".plyr_video";
    const COVER_CLASS = ".plyr_cover";
    const HIDE_COVER_CLASS = "hide-cover";
    const PAUSE_TRIGGER_CLASS = ".plyr_pause-trigger";
    const CONTAIN_CLASS = "contain-video";
    const settings = {
      autoplay: false,
      loop: false,
      mute: false,
      hideControls: true
    };
    const PLAYING_CLASS = ".plyr--playing";
    const players = [];
    const components = [...document.querySelectorAll(COMPONENT)];
    if (components.length === 0) return;
    components.forEach((component, index) => {
      const video = component.querySelector(VIDEO_CLASS);
      const cover = component.querySelector(COVER_CLASS);
      const pauseTrigger = component.querySelector(PAUSE_TRIGGER_CLASS);
      const loopSetting = attr(settings.loop, component.getAttribute("data-player-loop"));
      let muteSetting = attr(settings.mute, component.getAttribute("data-player-mute"));
      const showCoverOnPause = attr(false, component.getAttribute("data-player-show-cover-on-pause"));
      let player = new plyr_default(video, {
        controls: ["play", "progress", "current-time", "mute", "fullscreen"],
        hideControls: settings.hideControls,
        loop: { active: loopSetting },
        resetOnEnd: true
      });
      players.push(player);
      if (cover) {
        cover.addEventListener("click", () => {
          player.play();
        });
      }
      player.on("ended", (event) => {
        component.classList.remove(HIDE_COVER_CLASS);
      });
      if (showCoverOnPause) {
        player.on("pause", (event) => {
          component.classList.remove(HIDE_COVER_CLASS);
        });
      }
      player.on("play", (event) => {
        components.forEach((item2, index2) => {
          item2.classList.remove(HIDE_COVER_CLASS);
          if (item2 !== component) {
            const player2 = players[index2];
            player2.pause();
          }
        });
        component.classList.add(HIDE_COVER_CLASS);
        let prevPlayingComponent = document.querySelector(PLAYING_CLASS).closest(COMPONENT);
        if (prevPlayingComponent && prevPlayingComponent !== component) {
          prevPlayingComponent.find(PAUSE_TRIGGER_CLASS)[0].click();
        }
      });
      pauseTrigger.addEventListener("click", () => {
        player.pause();
      });
      player.on("ended", (event) => {
        if (player.fullscreen.active) {
          player.fullscreen.exit();
        }
      });
      player.on("enterfullscreen", (event) => {
        component.classList.add(CONTAIN_CLASS);
      });
      player.on("exitfullscreen", (event) => {
        component.classList.remove(CONTAIN_CLASS);
      });
    });
    return [players, components];
  };

  // src/index.js
  var lenis;
  var gsapInit;
  var gsapInitiated = 0;
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Local Script");
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (gsap.Flip !== void 0) {
      gsap.registerPlugin(Flip);
    }
    const pathHover = function(gsapContext) {
      const ANIMATION_ID = "banner";
      const WRAP = '[data-ix-pathhover="wrap"]';
      const PATH = '[data-ix-pathhover="path"]';
      const DURATION = "data-ix-pathhover-duration";
      const wraps = document.querySelectorAll(WRAP);
      wraps.forEach((wrap2) => {
        const paths = [...wrap2.querySelectorAll(PATH)];
        if (!wrap2 || paths.length === 0) return;
        let runOnBreakpoint = checkBreakpoints(wrap2, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        let duration = attr(1.2, wrap2.getAttribute(DURATION));
        let tl = gsap.timeline({
          paused: true
        });
        tl.fromTo(
          paths,
          {
            drawSVG: "0%"
          },
          {
            drawSVG: "0% 100%",
            duration,
            ease: "power2.inOut"
          }
        );
        wrap2.addEventListener("mouseenter", () => {
          tl.play();
        });
        wrap2.addEventListener("mouseleave", () => {
          tl.reverse();
        });
      });
    };
    const banner = function(gsapContext) {
      const ANIMATION_ID = "banner";
      const WRAP = '[data-ix-banner="wrap"]';
      const TRACK = '[data-ix-banner="track"]';
      const START = "data-ix-banner-start";
      const END = "data-ix-banner-end";
      const wraps = [...document.querySelectorAll(WRAP)];
      wraps.forEach((wrap2) => {
        const track = wrap2.querySelector(TRACK);
        if (!wrap2 || !track) return;
        let runOnBreakpoint = checkBreakpoints(wrap2, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        let start = attr("center 80%", wrap2.getAttribute(START));
        let end = attr("center 20%", wrap2.getAttribute(END));
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap2,
            start,
            end,
            scrub: 1,
            markers: false
          }
        });
        tl.to(track, { xPercent: -100, ease: "none", duration: 1 });
      });
    };
    const videoScroll = function(gsapContext) {
      const ANIMATION_ID = "videoscroll";
      const WRAP = '[data-ix-videoscroll="wrap"]';
      const VIDEO = '[data-ix-videoscroll="video"]';
      const START = "data-ix-videoscroll-start";
      const END = "data-ix-videoscroll-end";
      const wraps = [...document.querySelectorAll(WRAP)];
      wraps.forEach((wrap2) => {
        const video = wrap2.querySelector(VIDEO);
        if (!wrap2 || !video) return;
        let runOnBreakpoint = checkBreakpoints(video, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        let start = attr("top bottom", wrap2.getAttribute(START));
        let end = attr("bottom top", wrap2.getAttribute(END));
        video.addEventListener("loadedmetadata", () => {
          const duration = video.duration;
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrap2,
              start,
              end,
              scrub: 1,
              markers: false
            }
          });
          tl.to(video, { currentTime: duration, ease: "none" });
        });
      });
    };
    const caseScroll = function(gsapContext) {
      const ANIMATION_ID = "casescroll";
      const WRAP = '[data-ix-casescroll="wrap"]';
      const ITEM = '[data-ix-casescroll="item"]';
      const IMAGE = '[data-ix-casescroll="image"]';
      const wraps = [...document.querySelectorAll(WRAP)];
      if (!wraps.length === 0) return;
      wraps.forEach((wrap2) => {
        let runOnBreakpoint = checkBreakpoints(wrap2, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        const items = [...wrap2.querySelectorAll(ITEM)];
        const images = [...wrap2.querySelectorAll(IMAGE)];
        const ACTIVE_CLASS = "is-active";
        if (items.length === 0 || images.length === 0) return;
        items.forEach((item2, index) => {
          const image = images[index];
          if (!item2 || !image) return;
          image.style.zIndex = `${-20 + index}`;
          if (index !== 0) {
            const tlIn = gsap.timeline({
              scrollTrigger: {
                trigger: item2,
                start: "top 70%",
                end: "top center",
                markers: false,
                scrub: true,
                onEnter: () => {
                  image.classList.add(ACTIVE_CLASS);
                },
                onLeaveBack: () => {
                  image.classList.remove(ACTIVE_CLASS);
                }
              },
              defaults: { ease: "power1.inOut", duration: 1 }
            });
            tlIn.fromTo(image, { opacity: 0 }, { opacity: 1 });
          } else {
            image.style.opacity = 1;
          }
          if (index !== items.length - 1) {
            const tlOut = gsap.timeline({
              scrollTrigger: {
                trigger: item2,
                start: "bottom 70%",
                end: "bottom center",
                markers: false,
                scrub: true,
                onLeave: () => {
                  image.classList.remove(ACTIVE_CLASS);
                },
                onEnterBack: () => {
                  image.classList.add(ACTIVE_CLASS);
                }
              },
              defaults: { ease: "power1.inOut", duration: 1 }
            });
            tlOut.to(image, {
              opacity: 0
            });
          }
        });
      });
    };
    gsapInit = function() {
      gsapInitiated++;
      console.log(gsapInitiated);
      let mm = gsap.matchMedia();
      mm.add(
        {
          //This is the conditions object
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px)  and (max-width: 991px)",
          isDesktop: "(min-width: 992px)",
          reduceMotion: "(prefers-reduced-motion: reduce)"
        },
        (gsapContext) => {
          let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
          lenis = initLenis();
          accordion(gsapContext);
          marquee(gsapContext);
          sliderComponent();
          load(gsapContext);
          horizontal(gsapContext);
          caseScroll(gsapContext);
          banner(gsapContext);
          pathHover(gsapContext);
          videoPlyr();
          if (!reduceMotion) {
            countUp(gsapContext);
            parallax(gsapContext);
            scrollIn(gsapContext);
            scrolling(gsapContext);
            videoScroll(gsapContext);
          }
        }
      );
    };
    gsapInit();
    const scrollReset = function() {
      const RESET_EL = "[data-ix-reset]";
      const RESET_TIME = "data-ix-reset-time";
      const resetScrollTriggers = document.querySelectorAll(RESET_EL);
      resetScrollTriggers.forEach(function(item2) {
        item2.addEventListener("click", function(e) {
          ScrollTrigger.refresh();
          if (item2.hasAttribute(RESET_TIME)) {
            let time = attr(1e3, item2.getAttribute(RESET_TIME));
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, time);
          }
        });
      });
    };
    scrollReset();
    const updaterFooterYear = function() {
      const YEAR_SELECTOR = "[data-footer-year]";
      const yearSpan = document.querySelector(YEAR_SELECTOR);
      if (!yearSpan) return;
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      yearSpan.innerText = currentYear.toString();
    };
    updaterFooterYear();
  });
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      gsapInit(true);
    }
  });
})();
