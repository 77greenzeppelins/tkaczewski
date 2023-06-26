'use client';
import React, { useEffect } from 'react';
/**Components**/
import StickyContainer from './stickyContainer/StickyContainer';
/**Hook**/
import useElementSize from '@/hooks/useElementSize';
/**Spring Staff**/
import { useSpring, easings, config } from '@react-spring/web';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';
/**Basic Data*/
import { basicConfigs } from '@/data/basicData';
import { ContactsDataSection, ScrollableContainer } from '@/components';
/*
this const allows to tweek "acceleration" of darkness; if 1 darknes is 100% when whole viewport was scrolled; if less then 1 darkness comes earlier;
*/
const speedupFactor = 0.125;

interface Props {
  hintIsMobile: boolean;
}
/**----------------------------------------**/
const PageContactsContent = ({ hintIsMobile }: Props) => {
  /**--------------------------**/
  const falseFlag = true;
  /**--------------------------**/

  /**Hook Section*/
  const [squareRef, { height }] = useElementSize(); // innerHeight * 2
  // console.log('PageContactsContent | height:', height);
  /*
  ___1. api for <InstantContactButtons> opacity
  */
  const [{ opacity }, comp1Api] = useSpring(() => ({
    opacity: 0,
  }));
  const [{ transform }, comp2Api] = useSpring(() => ({
    transform: 'translateY(100%)',
    // transform: 'translateX(100%)',
    // config: { mass: 5, friction: 120, tension: 120 },
  }));

  /** */
  useScroll(
    /*
    ___1. her we utilize some gesture state offers by useGesture
    ___2. value "y" => returns progress of scrolling; let's take such case: (a) scrollHeight property of scrollableContainer has value of 1654; (b) window.innerHeight is 827; (c) final value (at the end of scrolling) of y is 827;
    */
    ({
      xy: [x, y],
      direction: [dirX, dirY], // scroll down = progress = 1; otherwise -1
    }: {
      xy: number[];
      direction: number[];
    }) => {
      // console.log('dirY:', dirY);
      // console.log('y:', y);
      // console.log('window.innerHeight:', window.innerHeight);
      // console.log('height:', height);
      // console.log(
      //   'y / height - window.innerHeight:',
      //   (y / (height - window.innerHeight)) * -100
      // );

      //__________conditions section
      /*
      ___1. here we actually use "gesture state values" to set two boolean const that works as switcher when springValues are imperatively modified;
      ___2. if scroll down && scrolled more then half of the element scrollHeight property our cond1 is true
      */
      const cond1 =
        dirY === 1 && y >= height / basicConfigs.pageContact.viewports - 5;
      const cond2 =
        dirY === -1 && y < height / basicConfigs.pageContact.viewports; // /basicConfigs.pageContact.viewports;

      //__________springValues Modification section
      comp1Api.start({
        opacity:
          y / ((height / basicConfigs.pageContact.viewports) * speedupFactor),
      });
      comp2Api.start({
        // transform: `translateX(${cond1 ? 0 : cond2 ? 100 : 100}%)`,
        // transform: `translateY(${(y / (height - window.innerHeight)) * -300}%)`,
        transform: `translateY(${(y / height) * -400}%)`,

        // config: config.slow,
        // config: { mass: 5, friction: 120, tension: 120 },
        config: {
          duration: hintIsMobile ? 0 : 400,
          easing: easings.easeOutQuint,
        }, // value in ms
      });
    },
    //__________ ... section
    {
      enabled: true,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  // useEffect(() => {
  //   console.log('height:', height);
  // }, [height]);

  /**JSX**/
  return (
    <div
      data-container="PageContactsContent"
      ref={squareRef}
      className="relative"
    >
      <StickyContainer
        opacity={opacity}
        transform={transform}
        hintIsMobile={hintIsMobile}
      />

      <ScrollableContainer />

      {/* <ContactsDataSection transform={transform} /> */}

      {/* <div className="relative h-[100vh] bg-yellow-600 z-10" /> */}
    </div>
  );
};

export default PageContactsContent;

/**Spring Section**/
//___create SpringAnimation and api for imperative approach
//   const [comp1Styles, comp1Api] = useSpring(() => ({
//     opacity: 0,
//     config: config.stiff,
//   }));
//___trigger hook and get "scroll values"
//   useScroll({
//     // container: containerRef,
//     onChange: ({ value: { scrollYProgress, scrollY } }) => {
//       //___use imperative API and utilize "scroll values" (scrollYProgress, scrollY) for setting SpringValue (props like opacity etc.);
//       comp1Api.start({
//         /*
//    __1. first part of the condition tells that initiall 300px of scrolling doesn't change anything;
//    __2. secondt part of the condition tells that we want to speed up scrollProgress value = speed up the animation itself so that it ends befor user scrolls to the bottom; factor can change depending on "number of viewport" / how long is the page;
//    */
//         opacity: scrollY < 300 ? 0 : scrollYProgress * 4,
//       });
//       //___wtf...
//       //   console.log('scrollYProgress', scrollYProgress);
//       //   console.log('scrollY', scrollY);
//       //   console.log(`${scrollYProgress * -100}%`);
//     },
//     //___??
//     default: {
//       immediate: false,
//     },
//   });

//________________________________________________________momentum / inertia...
// function hasInertiaScrolling() {
//   const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
//   const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
//   const isChrome =
//     !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
//   return (isMac && !isChrome) || isIOS;
// }

// const momentumScrollListener = (event: WheelEvent) => {
//   event.preventDefault();
//   const deltaMode = event.deltaMode;
//   if (event.target) {
//     event.target.removeEventListener(event.type, momentumScrollListener);
//   }
//   if (deltaMode === 1) {
//     return true;
//   }
//   return false;
// };

//   const supportsMomentumScrolling =
//     typeof window !== 'undefined' &&
//     'onwheel' in window &&
//     momentumScrollListener;

// const momentumScrollListener = (event: WheelEvent) => {
//   event.preventDefault();
//   const deltaMode = event.deltaMode;
//   if (event.target) {
//     event.target.removeEventListener(event.type, momentumScrollListener);
//   }
//   if (deltaMode === 1) {
//     return true;
//   }
//   return false;
// };

// const supportsMomentumScrolling =
//   typeof window !== 'undefined' &&
//   'onwheel' in window &&
//   (momentumScrollListener as EventListenerOrEventListenerObject);
