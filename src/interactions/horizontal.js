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
  const wraps = document.querySelectorAll(WRAP);
  wraps.forEach((wrap) => {
    //get elements
    const inner = wrap.querySelector(INNER);
    const track = wrap.querySelector(TRACK);
    const list = wrap.querySelector(LIST);
    const header = wrap.querySelector(HEADER);
    const items = [...wrap.querySelectorAll(ITEM)];

    if (!wrap || !inner || !track) return;

    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;

    function animation() {
      let timelines = [];
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
          markers: false,
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

      //Items stacking
      let tlItems = gsap.timeline({
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
      items.forEach((item, i) => {
        let total = items.length;
        let realIndex = i + 1;
        let difference = total - realIndex;
        const containerWidth = Number.parseFloat(track.offsetWidth);
        const itemWidth = containerWidth / (total - 1);

        // console.log(100 * difference - 300);
        tlItems.to(
          item,
          {
            x: (i) => itemWidth * difference,
            duration: difference,
          },
          i
        );
        //WORKING VERSION WITH PERCENTs
        // tlItems.to(
        //   item,
        //   {
        //     xPercent: (i) => 67 * difference,
        //     duration: difference,
        //   },
        //   i
        // );
      });
      timelines.push(tl);
      timelines.push(tlHeader);
      timelines.push(tlItems);
      return timelines;
    }
    let timelines = animation();

    let windowWidth = window.innerWidth;
    window.addEventListener('resize', function () {
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        window.location.reload();
        //input code you want run after the browser width is changed
        // timelines.forEach((tl) => {
        //   console.log(tl);
        //   tl.kill();
        // });
        // timelines = animation();
      }
    });
  });
};
