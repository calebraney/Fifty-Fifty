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
    //Sticky Header
    let tlHeader = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        containerAnimation: tl,
        // start when the left side of the element hits the left side of the container
        start: 'left ' + inner.getBoundingClientRect().left,
        end: 'right ' + inner.getBoundingClientRect().right,
        scrub: true,
        // markers: true,
      },
      defaults: { ease: 'none' },
    });
    tlHeader.to(header, {
      x: track.offsetWidth,
    });
    // // ATTEMPTED ITEM STACKING
    // let stackOffset = 0;
    // items.forEach((item, i) => {
    //   //get the gap value
    //   const gap = getComputedStyle(item).getPropertyValue('--_gap---gap-size');
    //   const gapOffsetRem = Number.parseFloat(gap) * (i + 1);
    //   const card = item.children;
    //   const containerWidth = Number.parseFloat(track.offsetWidth);
    //   stackOffset = stackOffset + item.offsetWidth + Number.parseFloat(gap) * 16;
    //   console.log(item.offsetWidth);
    //   //update the stack offset
    //   if (i === 1) {
    //     console.log(gapOffsetRem);
    //     let tlItem = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: item,
    //         containerAnimation: tl,
    //         // start when the left side of the element hits the left side of the container
    //         start: 'left ' + inner.offsetLeft + 'px',
    //         end: `+= ${containerWidth - stackOffset}`,
    //         scrub: true,
    //         markers: true,
    //       },
    //       defaults: { ease: 'none' },
    //     });
    //     tlItem.to(card, {
    //       x: containerWidth - stackOffset,
    //     });
    //   }
    // });
  });
};
