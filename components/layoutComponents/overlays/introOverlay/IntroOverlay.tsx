'use client';
import React, { useEffect, useRef } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import IntroOverlayContent from './content/IntroOverlayContent';
/**Spring settings*/
import { useTransition, animated } from '@react-spring/web';
/***/
import { animationsDelays } from '@/data/basicData';

/**-----------------------------**/
const IntroOverlay = () => {
  /**GlobalContext  Section**/
  const { isIntroOverlay, setIsIntroOverlay } = useGlobalContext();
  /**reference for setTimeout() ID**/
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /*
  ---1. this lifeCycleHook allows to set component existence to a specific duration (circa 2.6 sec)
  */
  useEffect(() => {
    //___here we're setting the current property of the ref to the timer ID; this ID is returned value of setTimeout() method;
    timerRef.current = setTimeout(() => {
      setIsIntroOverlay(false);
      window.scrollTo(0, 0); //________________________?
    }, animationsDelays.introOverlayDurance);
    return () => {
      clearTimeout(timerRef.current as NodeJS.Timeout);
    };
  }, [setIsIntroOverlay]);

  /**Transition section**/

  const transitions = useTransition(isIntroOverlay, {
    // ref: transRef,
    // keys: null,
    keys: isIntroOverlay.toString(),
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 600 },
    exitBeforeEnter: true,
  });

  /**JSX**/
  return transitions(
    (style, isIntroOverlay) =>
      isIntroOverlay && (
        <animated.div
          data-component="IntroOverlay"
          style={style}
          className="fixed w-screen h-screen bg-dark z-[100]"
          //___pointer-events-none
        >
          <IntroOverlayContent />
        </animated.div>
      )
  );
};

export default IntroOverlay;

// return transitions((style, item) => (
//   <animated.div
//     data-component="IntroOverlay"
//     style={style}
//     className="absolute fc w-screen h-screen bg-yellow-600 z-[100] pointer-events-none"
//   >
//     {/* {item} */}
//     {state ? 'mounted ' : 'unmounted'}
//   </animated.div>
// ));
// return (
//   <div
//     data-component="IntroOverlay"
//     className="absolute fc w-screen h-screen bg-yellow-600 z-[100] pointer-events-none"
//   >
//     {isIntroOverlay ? 'mounted ' : 'unmounted'}
//   </div>
// );

/*
  ___1. checking various browsers I've noticed that mobile Edge renders the app in very odd way;
  ___2. I don't want my app to be displayed on this browser; to do this I check the userAgent string in the navigator object
  ___3. This code checks if the navigator.userAgent string contains the string "Edge/" followed by a version number. This indicates that the Edge browser is being used. It also checks if the window.navigator.maxTouchPoints property is greater than 0, which indicates that the device has touch input, such as a touchscreen or a touchpad.
  */
// const isMobileEdge =
//   typeof window !== 'undefined' &&
//   /Edge\/\d+/.test(navigator.userAgent) &&
//   window.navigator.maxTouchPoints > 0;

//  function isMobileEdge(userAgent: string): boolean {
//   const parser = new UAParser(userAgent);
//   const browserName = parser.getBrowser().name;
//   const isEdge = browserName.toLowerCase() === 'edge';
//   const isMobile = parser.getDevice().type === 'mobile';

//   return isEdge && isMobile;
// }
