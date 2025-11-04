import { attr, startScroll, stopScroll, checkBreakpoints, getClipDirection } from './utilities';
import { accordion } from './interactions/accordion';
import { clickActive } from './interactions/click-active';
import { countUp } from './interactions/count-up';
import { cursor } from './interactions/cursor';
import { horizontal } from './interactions/horizontal';
import { initLenis } from './interactions/lenis';
import { load } from './interactions/load';
import { marquee } from './interactions/marquee';
import { parallax } from './interactions/parallax';
import { scrollIn } from './interactions/scroll-in';
import { scrolling } from './interactions/scrolling';
import { sliderComponent } from './interactions/slider';

//////////////////////////////
//Global Variables
let lenis;
let gsapInit;
let gsapInitiated = 0;

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script');
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }

  const pathHover = function (gsapContext) {
    //animation ID
    const ANIMATION_ID = 'banner';
    //selectors
    const WRAP = '[data-ix-pathhover="wrap"]';
    const PATH = '[data-ix-pathhover="path"]';
    //options
    const DURATION = 'data-ix-pathhover-duration';

    //elements
    const wraps = document.querySelectorAll(WRAP);
    wraps.forEach((wrap) => {
      //get elements
      const paths = [...wrap.querySelectorAll(PATH)];

      if (!wrap || paths.length === 0) return;

      //check breakpoints and quit function if set on specific breakpoints
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let duration = attr(1.2, wrap.getAttribute(DURATION));

      // create main horizontal scroll timeline
      let tl = gsap.timeline({
        paused: true,
      });
      tl.fromTo(
        paths,
        {
          drawSVG: '0%',
        },
        {
          drawSVG: '0% 100%',
          duration: duration,
          ease: 'power2.inOut',
        }
      );

      wrap.addEventListener('mouseenter', () => {
        tl.play();
      });
      wrap.addEventListener('mouseleave', () => {
        tl.reverse();
      });
    });
  };

  const banner = function (gsapContext) {
    //animation ID
    const ANIMATION_ID = 'banner';
    //selectors
    const WRAP = '[data-ix-banner="wrap"]';
    const TRACK = '[data-ix-banner="track"]';
    //options
    const START = 'data-ix-banner-start';
    const END = 'data-ix-banner-end';

    //elements
    const wraps = [...document.querySelectorAll(WRAP)];
    wraps.forEach((wrap) => {
      //get elements
      const track = wrap.querySelector(TRACK);

      if (!wrap || !track) return;

      //check breakpoints and quit function if set on specific breakpoints
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;

      let start = attr('center 80%', wrap.getAttribute(START));
      let end = attr('center 20%', wrap.getAttribute(END));

      // create main horizontal scroll timeline
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: start,
          end: end,
          scrub: 1,
          markers: false,
        },
      });
      tl.to(track, { xPercent: -100, ease: 'none', duration: 1 });
    });
  };

  const videoScroll = function (gsapContext) {
    //animation ID
    const ANIMATION_ID = 'videoscroll';
    //selectors
    const WRAP = '[data-ix-videoscroll="wrap"]';
    const VIDEO = '[data-ix-videoscroll="video"]';
    //options
    const START = 'data-ix-videoscroll-start';
    const END = 'data-ix-videoscroll-end';

    //elements
    const wraps = [...document.querySelectorAll(WRAP)];
    wraps.forEach((wrap) => {
      //get elements
      const video = wrap.querySelector(VIDEO);

      if (!wrap || !video) return;

      //check breakpoints and quit function if set on specific breakpoints
      let runOnBreakpoint = checkBreakpoints(video, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;

      let start = attr('top bottom', wrap.getAttribute(START));
      let end = attr('bottom top', wrap.getAttribute(END));

      // once video loads create timeline
      video.addEventListener('loadedmetadata', () => {
        const duration = video.duration;
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: start,
            end: end,
            scrub: 1,
            markers: false,
          },
        });
        tl.to(video, { currentTime: duration, ease: 'none' });
      });
    });
  };
  const caseScroll = function (gsapContext) {
    const ANIMATION_ID = 'casescroll';

    const WRAP = '[data-ix-casescroll="wrap"]';
    const ITEM = '[data-ix-casescroll="item"]';
    const IMAGE = '[data-ix-casescroll="image"]';

    const wraps = [...document.querySelectorAll(WRAP)];
    if (!wraps.length === 0) return;
    wraps.forEach((wrap) => {
      //check breakpoints and quit function if set on specific breakpoints
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      //within each section
      const items = [...wrap.querySelectorAll(ITEM)];
      const images = [...wrap.querySelectorAll(IMAGE)];
      const ACTIVE_CLASS = 'is-active';
      // for each tab link add an event listener that will scroll to the correct id
      if (items.length === 0 || images.length === 0) return;

      // images.forEach((item) => item.classList.remove(ACTIVE_CLASS));
      // //activate first item
      // activateItem(0);
      // animate each item
      items.forEach((item, index) => {
        const image = images[index];
        if (!item || !image) return;
        image.style.zIndex = `${-20 + index}`;
        if (index !== 0) {
          const tlIn = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: 'top 70%',
              end: 'top center',
              markers: false,
              scrub: true,
              onEnter: () => {
                image.classList.add(ACTIVE_CLASS);
              },
              onLeaveBack: () => {
                image.classList.remove(ACTIVE_CLASS);
              },
            },
            defaults: { ease: 'power1.inOut', duration: 1 },
          });
          tlIn.fromTo(image, { opacity: 0 }, { opacity: 1 });
        } else {
          image.style.opacity = 1;
        }

        if (index !== items.length - 1) {
          const tlOut = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: 'bottom 70%',
              end: 'bottom center',
              markers: false,
              scrub: true,
              onLeave: () => {
                image.classList.remove(ACTIVE_CLASS);
              },
              onEnterBack: () => {
                image.classList.add(ACTIVE_CLASS);
              },
            },
            defaults: { ease: 'power1.inOut', duration: 1 },
          });
          tlOut.to(image, {
            opacity: 0,
          });
        }
      });

      /*
      //utility class to activate or de-activate item
      const activateItem = function (index, activate = true) {
        //get the matching items
        const image = images[index];
        const item = items[index];

        // const tab = tabLinks[index]
        if (activate) {
          image.classList.add(ACTIVE_CLASS);
          item.classList.add(ACTIVE_CLASS);
        } else {
          image.classList.remove(ACTIVE_CLASS);
          item.classList.remove(ACTIVE_CLASS);
        }
      };
      // remove all active classes
      images.forEach((item) => item.classList.remove(ACTIVE_CLASS));
      //activate first item
      activateItem(0);
      // animate each item
      items.forEach((item, index) => {
        const image = images[index];
        if (!item || !image) return;
        const imageTL = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top center',
            end: 'bottom center',
            markers: false,
            scrub: true,
            onEnter: () => {
              activateItem(index);
            },
            onLeave: () => {
              // don't remove class on leave of the last item
              if (index !== items.length - 1) {
                activateItem(index, false);
              }
            },
            onEnterBack: () => {
              activateItem(index);
            },
            onLeaveBack: () => {
              // don't remove class on leaveback of the first item
              if (index !== 0) {
                activateItem(index, false);
              }
            },
          },
        });
      });
      */
    });
  };

  //////////////////////////////
  //Control Functions on page load
  gsapInit = function () {
    gsapInitiated++;
    console.log(gsapInitiated);
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        //functional interactions
        lenis = initLenis();
        accordion(gsapContext);
        marquee(gsapContext);
        sliderComponent();
        load(gsapContext);
        horizontal(gsapContext);
        caseScroll(gsapContext);
        banner(gsapContext);
        pathHover(gsapContext);

        //conditional interactions
        if (!reduceMotion) {
          countUp(gsapContext);
          // parallax(gsapContext);
          scrollIn(gsapContext);
          scrolling(gsapContext);
          videoScroll(gsapContext);
        }
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();

  const updaterFooterYear = function () {
    // set the fs-hacks selector
    const YEAR_SELECTOR = '[data-footer-year]';
    // get the the span element
    const yearSpan = document.querySelector(YEAR_SELECTOR);
    if (!yearSpan) return;
    // get the current year
    const currentYear = new Date().getFullYear();
    // set the year span element's text to the current year
    yearSpan.innerText = currentYear.toString();
  };
  updaterFooterYear();
});

// Fix invisible hero when returning via back/forward navigation (bfcache)
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    // Re-run GSAP init but prevent double initialization
    gsapInit(true); // pass a flag to indicate restore mode
  }
});
