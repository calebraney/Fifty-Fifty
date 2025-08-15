import { attr, checkBreakpoints } from '../utilities';
export const horizontal = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'horizontal';
  //selectors
  const WRAP = '[data-ix-horizontal="wrap"]';
  const INNER = '[data-ix-horizontal="inner"]';
  const TRACK = '[data-ix-horizontal="track"]';
  const LIST = '[data-ix-horizontal="list"]';

  const HEADER = '[data-ix-horizontal="header"]';
  const ITEM = '[data-ix-horizontal="item"]';

  //options
  const OPTION_AUTO_HEIGHT = 'data-ix-horizontal-auto-height';

  //elements
  const sections = document.querySelectorAll(WRAP);
  sections.forEach((section) => {
    //get elements
    const wrap = section;
    const inner = wrap.querySelector(INNER);
    const track = wrap.querySelector(TRACK);
    const list = wrap.querySelector(LIST);
    const header = wrap.querySelector(HEADER);
    const items = [...wrap.querySelectorAll(ITEM)];

    if (!wrap || !inner || !track) return;

    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;

    // function to set section height
    const setScrollDistance = function () {
      wrap.style.height = 'calc(' + track.offsetWidth + 'px + 100vh)';
    };
    //get option to see if height is matched
    let matchHeight = attr(true, wrap.getAttribute(OPTION_AUTO_HEIGHT));
    if (matchHeight) {
      setScrollDistance();
      ScrollTrigger.refresh();
      window.addEventListener('resize', setScrollDistance);
    }

    // create main horizontal scroll timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      defaults: { ease: 'none' },
    });
    tl.to(track, { xPercent: -100 });

    // get container left position
    function containerLeft() {
      return inner.offsetLeft + 'px';
    }
    // get container right position
    function containerRight() {
      return inner.offsetLeft + inner.offsetWidth + 'px';
    }
    console.log(inner.offsetLeft);
    //DEMO INNER TIMELINES
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        containerAnimation: tl,
        // start when the left side of the element hits the left side of the container
        start: 'left ' + inner.getBoundingClientRect().left,
        end: 'right ' + inner.getBoundingClientRect().right,
        scrub: true,
        markers: true,
      },
      defaults: { ease: 'none' },
    });
    console.log(containerRight());
    tl2.to(header, {
      x: track.offsetWidth,
    });

    //   //
    //   let tl3 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: wrap.querySelector(".scroll_horizontal_pin_wrap"),
    //       containerAnimation: tl,
    //       start: "left " + containerLeft(),
    //       end: "right " + containerRight(),
    //       scrub: true,
    //       // markers: true,
    //     },
    //     defaults: { ease: "none" },
    //   });
    //   tl3.to(wrap.querySelector(".scroll_horizontal_pin_element"), { xPercent: 100 });
    //   tl3.from(wrap.querySelector(".scroll_horizontal_img"), { scale: 0.5 }, "<");
  });
};
