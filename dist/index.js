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
      const child = item2.firstChild;
      const tl = scrollInTL(item2);
      tl.fromTo(
        child,
        {
          scale: 1.2
        },
        {
          scale: 1,
          duration: 1
        }
      );
      tl.fromTo(
        item2,
        {
          scale: 0.9
        },
        {
          scale: 1,
          duration: 1
        },
        "<"
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
    const wraps = gsap.utils.toArray(`[${ATTRIBUTE}="${WRAP}"]`);
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

  // src/interactions/slider.js
  var sliderComponent = function() {
    const ANIMATION_ID = "slider";
    const ATTRIBUTE = "data-ix-slider";
    const SLIDER = "[data-ix-slider='component']";
    const NEXT = "[data-ix-slider='next']";
    const PREVIOUS = "[data-ix-slider='previous']";
    const PAGINATION = ".slider_bullet_list";
    const PAGINATION_BUTTON = "slider_bullet_item";
    const FOLLOW_FINGER = "data-ix-slider-follow-finger";
    const MOUSEWHEEL = "data-ix-slider-mousewheel";
    const FREE_MODE = "data-ix-slider-free-mode";
    const SLIDE_TO_CLICKED = "data-ix-slider-slide-to-clicked";
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
      const speed = attr(600, swiperElement.getAttribute(SPEED));
      new Swiper(swiperElement, {
        slidesPerView: "auto",
        followFinger,
        loopAdditionalSlides: 10,
        freeMode,
        slideToClickedSlide,
        centeredSlides: false,
        autoHeight: false,
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
        slideActiveClass: ACTIVE_CLASS,
        slideDuplicateActiveClass: ACTIVE_CLASS
      });
    });
  };

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
          if (clickedItemAlreadyActive && keepOneActive) {
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

  // src/index.js
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Local Script");
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (gsap.Flip !== void 0) {
      gsap.registerPlugin(Flip);
    }
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
          accordion(gsapContext);
          marquee(gsapContext);
          sliderComponent();
          if (!reduceMotion) {
            scrollIn(gsapContext);
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
})();
