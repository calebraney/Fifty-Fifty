(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:3000/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/utilities.js
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
  var getClipDirection = function(attributeValue) {
    let clipMask = attributeValue;
    const clipDirections = {
      left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      full: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    };
    if (attributeValue === "left") {
      clipMask = clipDirections.left;
    }
    if (attributeValue === "right") {
      clipMask = clipDirections.right;
    }
    if (attributeValue === "top") {
      clipMask = clipDirections.top;
    }
    if (attributeValue === "bottom") {
      clipMask = clipDirections.bottom;
    }
    if (attributeValue === "full") {
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
        list.addEventListener("click", function(e2) {
          const clickedEl = e2.target.closest(OPEN);
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

  // node_modules/countup.js/dist/countUp.min.js
  var t = function() {
    return t = Object.assign || function(t3) {
      for (var i2, n = 1, s = arguments.length; n < s; n++) for (var a in i2 = arguments[n]) Object.prototype.hasOwnProperty.call(i2, a) && (t3[a] = i2[a]);
      return t3;
    }, t.apply(this, arguments);
  };
  var i = function() {
    function i2(i3, n, s) {
      var a = this;
      this.endVal = n, this.options = s, this.version = "2.9.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t3) {
        a.startTime || (a.startTime = t3);
        var i4 = t3 - a.startTime;
        a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
        var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
        a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
      }, this.formatNumber = function(t3) {
        var i4, n2, s2, e2, o = t3 < 0 ? "-" : "";
        i4 = Math.abs(t3).toFixed(a.options.decimalPlaces);
        var r = (i4 += "").split(".");
        if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
          e2 = "";
          for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e2 = a.options.separator + e2), h++, e2 = n2[p - u - 1] + e2;
          n2 = e2;
        }
        return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t4) {
          return a.options.numerals[+t4];
        }), s2 = s2.replace(/[0-9]/g, function(t4) {
          return a.options.numerals[+t4];
        })), o + a.options.prefix + n2 + s2 + a.options.suffix;
      }, this.easeOutExpo = function(t3, i4, n2, s2) {
        return n2 * (1 - Math.pow(2, -10 * t3 / s2)) * 1024 / 1023 + i4;
      }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, n = null == n ? this.parse(this.el.innerHTML) : n, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
        return a.handleScroll(a);
      }), window.onscroll = function() {
        window.onScrollFns.forEach(function(t3) {
          return t3();
        });
      }, this.handleScroll(this)));
    }
    return i2.prototype.handleScroll = function(t3) {
      if (t3 && window && !t3.once) {
        var i3 = window.innerHeight + window.scrollY, n = t3.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
        a < i3 && a > window.scrollY && t3.paused ? (t3.paused = false, setTimeout(function() {
          return t3.start();
        }, t3.options.scrollSpyDelay), t3.options.scrollSpyOnce && (t3.once = true)) : (window.scrollY > a || s > i3) && !t3.paused && t3.reset();
      }
    }, i2.prototype.determineDirectionAndSmartEasing = function() {
      var t3 = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t3;
      var i3 = t3 - this.startVal;
      if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t3;
        var n = this.countDown ? 1 : -1;
        this.endVal = t3 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else this.endVal = t3, this.finalEndVal = null;
      null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, i2.prototype.start = function(t3) {
      this.error || (this.options.onStartCallback && this.options.onStartCallback(), t3 && (this.options.onCompleteCallback = t3), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i2.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i2.prototype.reset = function() {
      cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i2.prototype.update = function(t3) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t3), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i2.prototype.printValue = function(t3) {
      var i3;
      if (this.el) {
        var n = this.formattingFn(t3);
        if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render) this.options.plugin.render(this.el, n);
        else if ("INPUT" === this.el.tagName) this.el.value = n;
        else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, i2.prototype.ensureNumber = function(t3) {
      return "number" == typeof t3 && !isNaN(t3);
    }, i2.prototype.validateValue = function(t3) {
      var i3 = Number(t3);
      return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t3), null);
    }, i2.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i2.prototype.parse = function(t3) {
      var i3 = function(t4) {
        return t4.replace(/([.,'  ])/g, "\\$1");
      }, n = i3(this.options.separator), s = i3(this.options.decimal), a = t3.replace(new RegExp(n, "g"), "").replace(new RegExp(s, "g"), ".");
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

  // src/interactions/horizontal.js
  var horizontal = function(gsapContext) {
    const ANIMATION_ID = "horizontal";
    const WRAP = '[data-ix-horizontal="wrap"]';
    const INNER = '[data-ix-horizontal="inner"]';
    const TRACK = '[data-ix-horizontal="track"]';
    const LIST = '[data-ix-horizontal="list"]';
    const HEADER = '[data-ix-horizontal="header"]';
    const ITEM = '[data-ix-horizontal="item"]';
    const OPTION_AUTO_HEIGHT = "data-ix-horizontal-auto-height";
    const sections = document.querySelectorAll(WRAP);
    sections.forEach((section) => {
      const wrap = section;
      const inner = wrap.querySelector(INNER);
      const track = wrap.querySelector(TRACK);
      const list = wrap.querySelector(LIST);
      const header = wrap.querySelector(HEADER);
      const items = [...wrap.querySelectorAll(ITEM)];
      if (!wrap || !inner || !track) return;
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      function animation() {
        const setScrollDistance = function() {
          wrap.style.height = "calc(" + track.offsetWidth + "px + 100vh)";
        };
        let matchHeight = attr(true, wrap.getAttribute(OPTION_AUTO_HEIGHT));
        if (matchHeight) {
          setScrollDistance();
          ScrollTrigger.refresh();
          window.addEventListener("resize", setScrollDistance);
        }
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: "bottom bottom",
            scrub: true
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
        return tl;
      }
      animation();
    });
  };

  // node_modules/@studio-freight/lenis/dist/lenis.mjs
  function t2(t3, e2, i2) {
    return Math.max(t3, Math.min(e2, i2));
  }
  var Animate = class {
    advance(e2) {
      if (!this.isRunning) return;
      let i2 = false;
      if (this.lerp) this.value = (s = this.value, o = this.to, n = 60 * this.lerp, r = e2, function(t3, e3, i3) {
        return (1 - i3) * t3 + i3 * e3;
      }(s, o, 1 - Math.exp(-n * r))), Math.round(this.value) === this.to && (this.value = this.to, i2 = true);
      else {
        this.currentTime += e2;
        const s2 = t2(0, this.currentTime / this.duration, 1);
        i2 = s2 >= 1;
        const o2 = i2 ? 1 : this.easing(s2);
        this.value = this.from + (this.to - this.from) * o2;
      }
      var s, o, n, r;
      this.onUpdate?.(this.value, i2), i2 && this.stop();
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t3, e2, { lerp: i2 = 0.1, duration: s = 1, easing: o = (t4) => t4, onStart: n, onUpdate: r }) {
      this.from = this.value = t3, this.to = e2, this.lerp = i2, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = true, n?.(), this.onUpdate = r;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t3, content: e2, autoResize: i2 = true, debounce: s = 250 } = {}) {
      this.wrapper = t3, this.content = e2, i2 && (this.debouncedResize = /* @__PURE__ */ function(t4, e3) {
        let i3;
        return function() {
          let s2 = arguments, o = this;
          clearTimeout(i3), i3 = setTimeout(function() {
            t4.apply(o, s2);
          }, e3);
        };
      }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = () => {
      this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Emitter = class {
    constructor() {
      this.events = {};
    }
    emit(t3, ...e2) {
      let i2 = this.events[t3] || [];
      for (let t4 = 0, s = i2.length; t4 < s; t4++) i2[t4](...e2);
    }
    on(t3, e2) {
      return this.events[t3]?.push(e2) || (this.events[t3] = [e2]), () => {
        this.events[t3] = this.events[t3]?.filter((t4) => e2 !== t4);
      };
    }
    off(t3, e2) {
      this.events[t3] = this.events[t3]?.filter((t4) => e2 !== t4);
    }
    destroy() {
      this.events = {};
    }
  };
  var e = 100 / 6;
  var VirtualScroll = class {
    constructor(t3, { wheelMultiplier: e2 = 1, touchMultiplier: i2 = 1 }) {
      this.element = t3, this.wheelMultiplier = e2, this.touchMultiplier = i2, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t3, e2) {
      return this.emitter.on(t3, e2);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    onTouchStart = (t3) => {
      const { clientX: e2, clientY: i2 } = t3.targetTouches ? t3.targetTouches[0] : t3;
      this.touchStart.x = e2, this.touchStart.y = i2, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t3 });
    };
    onTouchMove = (t3) => {
      const { clientX: e2, clientY: i2 } = t3.targetTouches ? t3.targetTouches[0] : t3, s = -(e2 - this.touchStart.x) * this.touchMultiplier, o = -(i2 - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = e2, this.touchStart.y = i2, this.lastDelta = { x: s, y: o }, this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: t3 });
    };
    onTouchEnd = (t3) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t3 });
    };
    onWheel = (t3) => {
      let { deltaX: i2, deltaY: s, deltaMode: o } = t3;
      i2 *= 1 === o ? e : 2 === o ? this.windowWidth : 1, s *= 1 === o ? e : 2 === o ? this.windowHeight : 1, i2 *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i2, deltaY: s, event: t3 });
    };
    onWindowResize = () => {
      this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    };
  };
  var Lenis = class {
    constructor({ wrapper: t3 = window, content: e2 = document.documentElement, wheelEventsTarget: i2 = t3, eventsTarget: s = i2, smoothWheel: o = true, syncTouch: n = false, syncTouchLerp: r = 0.075, touchInertiaMultiplier: l = 35, duration: h, easing: a = (t4) => Math.min(1, 1.001 - Math.pow(2, -10 * t4)), lerp: c = !h && 0.1, infinite: d = false, orientation: p = "vertical", gestureOrientation: u = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = true, __experimental__naiveDimensions: S = false } = {}) {
      this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = ({ deltaX: t4, deltaY: e3, event: i3 }) => {
        if (i3.ctrlKey) return;
        const s2 = i3.type.includes("touch"), o2 = i3.type.includes("wheel");
        if (this.options.syncTouch && s2 && "touchstart" === i3.type && !this.isStopped && !this.isLocked) return void this.reset();
        const n2 = 0 === t4 && 0 === e3, r2 = "vertical" === this.options.gestureOrientation && 0 === e3 || "horizontal" === this.options.gestureOrientation && 0 === t4;
        if (n2 || r2) return;
        let l2 = i3.composedPath();
        if (l2 = l2.slice(0, l2.indexOf(this.rootElement)), l2.find((t5) => {
          var e4, i4, n3, r3, l3;
          return (null === (e4 = t5.hasAttribute) || void 0 === e4 ? void 0 : e4.call(t5, "data-lenis-prevent")) || s2 && (null === (i4 = t5.hasAttribute) || void 0 === i4 ? void 0 : i4.call(t5, "data-lenis-prevent-touch")) || o2 && (null === (n3 = t5.hasAttribute) || void 0 === n3 ? void 0 : n3.call(t5, "data-lenis-prevent-wheel")) || (null === (r3 = t5.classList) || void 0 === r3 ? void 0 : r3.contains("lenis")) && !(null === (l3 = t5.classList) || void 0 === l3 ? void 0 : l3.contains("lenis-stopped"));
        })) return;
        if (this.isStopped || this.isLocked) return void i3.preventDefault();
        if (this.isSmooth = this.options.syncTouch && s2 || this.options.smoothWheel && o2, !this.isSmooth) return this.isScrolling = false, void this.animate.stop();
        i3.preventDefault();
        let h2 = e3;
        "both" === this.options.gestureOrientation ? h2 = Math.abs(e3) > Math.abs(t4) ? e3 : t4 : "horizontal" === this.options.gestureOrientation && (h2 = t4);
        const a2 = s2 && this.options.syncTouch, c2 = s2 && "touchend" === i3.type && Math.abs(h2) > 5;
        c2 && (h2 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + h2, Object.assign({ programmatic: false }, a2 ? { lerp: c2 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
      }, this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const t4 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t4), this.emit();
        }
      }, window.lenisVersion = "1.0.42", t3 !== document.documentElement && t3 !== document.body || (t3 = window), this.options = { wrapper: t3, content: e2, wheelEventsTarget: i2, eventsTarget: s, smoothWheel: o, syncTouch: n, syncTouchLerp: r, touchInertiaMultiplier: l, duration: h, easing: a, lerp: c, infinite: d, gestureOrientation: u, orientation: p, touchMultiplier: m, wheelMultiplier: v, autoResize: g, __experimental__naiveDimensions: S }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: t3, content: e2, autoResize: g }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = n || o, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new VirtualScroll(s, { touchMultiplier: m, wheelMultiplier: v }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
    }
    on(t3, e2) {
      return this.emitter.on(t3, e2);
    }
    off(t3, e2) {
      return this.emitter.off(t3, e2);
    }
    setScroll(t3) {
      this.isHorizontal ? this.rootElement.scrollLeft = t3 : this.rootElement.scrollTop = t3;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped && (this.isStopped = false, this.reset());
    }
    stop() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }
    raf(t3) {
      const e2 = t3 - (this.time || t3);
      this.time = t3, this.animate.advance(1e-3 * e2);
    }
    scrollTo(e2, { offset: i2 = 0, immediate: s = false, lock: o = false, duration: n = this.options.duration, easing: r = this.options.easing, lerp: l = !n && this.options.lerp, onComplete: h, force: a = false, programmatic: c = true } = {}) {
      if (!this.isStopped && !this.isLocked || a) {
        if (["top", "left", "start"].includes(e2)) e2 = 0;
        else if (["bottom", "right", "end"].includes(e2)) e2 = this.limit;
        else {
          let t3;
          if ("string" == typeof e2 ? t3 = document.querySelector(e2) : (null == e2 ? void 0 : e2.nodeType) && (t3 = e2), t3) {
            if (this.options.wrapper !== window) {
              const t4 = this.options.wrapper.getBoundingClientRect();
              i2 -= this.isHorizontal ? t4.left : t4.top;
            }
            const s2 = t3.getBoundingClientRect();
            e2 = (this.isHorizontal ? s2.left : s2.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof e2) {
          if (e2 += i2, e2 = Math.round(e2), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e2 = t2(0, e2, this.limit), s) return this.animatedScroll = this.targetScroll = e2, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
          if (!c) {
            if (e2 === this.targetScroll) return;
            this.targetScroll = e2;
          }
          this.animate.fromTo(this.animatedScroll, e2, { duration: n, easing: r, lerp: l, onStart: () => {
            o && (this.isLocked = true), this.isScrolling = true;
          }, onUpdate: (t3, e3) => {
            this.isScrolling = true, this.velocity = t3 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t3, this.setScroll(this.scroll), c && (this.targetScroll = t3), e3 || this.emit(), e3 && (this.reset(), this.emit(), null == h || h(this), this.__preventNextScrollEvent = true, requestAnimationFrame(() => {
              delete this.__preventNextScrollEvent;
            }));
          } });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (t3 = this.animatedScroll, e2 = this.limit, (t3 % e2 + e2) % e2) : this.animatedScroll;
      var t3, e2;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t3) {
      this.__isSmooth !== t3 && (this.__isSmooth = t3, this.toggleClassName("lenis-smooth", t3));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t3) {
      this.__isScrolling !== t3 && (this.__isScrolling = t3, this.toggleClassName("lenis-scrolling", t3));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t3) {
      this.__isStopped !== t3 && (this.__isStopped = t3, this.toggleClassName("lenis-stopped", t3));
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(t3) {
      this.__isLocked !== t3 && (this.__isLocked = t3, this.toggleClassName("lenis-locked", t3));
    }
    get className() {
      let t3 = "lenis";
      return this.isStopped && (t3 += " lenis-stopped"), this.isLocked && (t3 += " lenis-locked"), this.isScrolling && (t3 += " lenis-scrolling"), this.isSmooth && (t3 += " lenis-smooth"), t3;
    }
    toggleClassName(t3, e2) {
      this.rootElement.classList.toggle(t3, e2), this.emitter.emit("className change", this);
    }
  };

  // src/interactions/lenis.js
  var initLenis = function() {
    const lenis = new Lenis({
      duration: 0.5,
      wheelMultiplier: 0.75,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
      easing: (t3) => t3 === 1 ? 1 : 1 - Math.pow(2, -10 * t3)
      // https://easings.net
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", () => {
      if (!ScrollTrigger) return;
      ScrollTrigger.update();
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 1e3);
    });
    gsap.ticker.lagSmoothing(0);
    let resizeTimeout;
    function refreshLenisTimeout(delay = 600) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          lenis.resize();
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
          lenis.stop();
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
          lenis.start();
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
          if (stopScroll3) lenis.stop();
          else lenis.start();
        });
      });
    }
    toggleScroll();
    return lenis;
  };

  // src/interactions/load.js
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
    wraps.forEach((wrap) => {
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const items = [...wrap.querySelectorAll(`[${ATTRIBUTE}]:not([${ATTRIBUTE}-run="false"])`)];
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
      tl.set(wrap, {
        autoAlpha: 1
      });
      const loadHeading = function(item2) {
        gsap.set(item2, { autoAlpha: 1 });
        const position = attr(0, item2.getAttribute(POSITION));
        if (item2.classList.contains("w-richtext")) {
          item2 = item2.children;
        }
        SplitText.create(item2, {
          type: "words",
          // linesClass: 'line',
          wordsClass: "word",
          // charsClass: "char",
          // mask: 'lines',
          autoSplit: true,
          onSplit: (self) => {
            return tl.from(
              self.words,
              {
                y: "50%",
                rotateX: 45,
                autoAlpha: 0,
                stagger: 0.075
              },
              position
            );
          }
        });
      };
      const loadImage = function(item2) {
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
            loadImage(item2);
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
    wraps.forEach((wrap) => {
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const lists = [...wrap.querySelectorAll(LIST)];
      let vertical = attr(false, wrap.getAttribute(VERTICAL));
      let reverse = attr(false, wrap.getAttribute(REVERSE));
      let duration = attr(DEFAULT_DURATION, wrap.getAttribute(DURATION));
      let durationDynamic = attr(false, wrap.getAttribute(DYNAMIC_DURATION));
      let durationPerItem = attr(DEFAULT_DYNAMIC_DURATION, wrap.getAttribute(DURATION_PER_ITEM));
      let itemCount = lists[0].childElementCount;
      if (itemCount === 1) {
        itemCount = lists[0].firstElementChild.childElementCount;
      }
      if (durationDynamic) {
        duration = itemCount * durationPerItem;
      }
      let hoverEffect = attr("none", wrap.getAttribute(HOVER_EFFECT));
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
        wrap.addEventListener("mouseenter", (event) => {
          tl.timeScale(2);
        });
        wrap.addEventListener("mouseleave", (event) => {
          tl.timeScale(1);
        });
      }
      if (hoverEffect === DECELERATE_ON_HOVER) {
        wrap.addEventListener("mouseenter", (event) => {
          tl.timeScale(0.5);
        });
        wrap.addEventListener("mouseleave", (event) => {
          tl.timeScale(1);
        });
      }
      if (hoverEffect === PAUSE_ON_HOVER) {
        wrap.addEventListener("mouseenter", (event) => {
          tl.pause();
        });
        wrap.addEventListener("mouseleave", (event) => {
          tl.play();
        });
      }
    });
  };

  // src/interactions/parallax.js
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
        type: "words",
        // 'chars, words, lines
        // linesClass: "line",
        wordsClass: "word",
        // charsClass: "char",
        // mask: 'lines',
        autoSplit: true,
        //have it auto adjust based on width
        // mask: 'lines',
        onSplit(self) {
          const tl = scrollInTL(item2);
          tween = defaultTween(self.words, tl, { stagger: "small" });
          const revertText = function(self2) {
            self2.revert();
          };
          tween.eventCallback("onComplete", revertText, [self]);
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
    wraps.forEach((wrap) => {
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false && wrap.getAttribute("data-ix-load-run") === "false") return;
      const items = [...wrap.querySelectorAll(`[${ATTRIBUTE}]:not([${ATTRIBUTE}-run="false"])`)];
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

  // src/index.js
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Local Script");
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (gsap.Flip !== void 0) {
      gsap.registerPlugin(Flip);
    }
    let lenis;
    const caseScroll = function(gsapContext) {
      const ANIMATION_ID = "casescroll";
      const WRAP = '[data-ix-casescroll="wrap"]';
      const ITEM = '[data-ix-casescroll="item"]';
      const IMAGE = '[data-ix-casescroll="image"]';
      const wraps = [...document.querySelectorAll(WRAP)];
      if (!wraps.length === 0) return;
      wraps.forEach((wrap) => {
        let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        const items = [...wrap.querySelectorAll(ITEM)];
        const images = [...wrap.querySelectorAll(IMAGE)];
        const ACTIVE_CLASS = "is-active";
        if (items.length === 0 || images.length === 0) return;
        const activateItem = function(index, activate = true) {
          const image = images[index];
          const item2 = items[index];
          if (activate) {
            image.classList.add(ACTIVE_CLASS);
            item2.classList.add(ACTIVE_CLASS);
          } else {
            image.classList.remove(ACTIVE_CLASS);
            item2.classList.remove(ACTIVE_CLASS);
          }
        };
        images.forEach((item2) => item2.classList.remove(ACTIVE_CLASS));
        activateItem(0);
        items.forEach((item2, index) => {
          const image = images[index];
          if (!item2 || !image) return;
          const imageTL = gsap.timeline({
            scrollTrigger: {
              trigger: item2,
              start: "top center",
              end: "bottom center",
              markers: false,
              scrub: true,
              onEnter: () => {
                activateItem(index);
              },
              onLeave: () => {
                if (index !== items.length - 1) {
                  activateItem(index, false);
                }
              },
              onEnterBack: () => {
                activateItem(index);
              },
              onLeaveBack: () => {
                if (index !== 0) {
                  activateItem(index, false);
                }
              }
            }
          });
        });
      });
    };
    const gsapInit = function() {
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
          if (!reduceMotion) {
            countUp(gsapContext);
            parallax(gsapContext);
            scrollIn(gsapContext);
            scrolling(gsapContext);
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
        item2.addEventListener("click", function(e2) {
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
})();
