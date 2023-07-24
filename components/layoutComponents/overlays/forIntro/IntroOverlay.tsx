'use client';

import React, { useEffect, useRef, useState } from 'react';
/**Components**/
import IntroOverlayContent from '../introOverlay/content/IntroOverlayContent';
/**Spring Staff**/
import { animated, useTransition } from '@react-spring/web';
/**BasicData**/
import { animationsDelays } from '@/data/basicData';

export default function IntroOverlay() {
  /**reference for setTimeout() ID**/
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isIntroOverlay, setIsIntroOverlay] = useState(true);

  /*
  ___1. this lifeCycleHook allows to set component existence to a specific duration (circa 2.6 sec); 
  ___2. overlay should be triggered: [1] during initial render and exist for 2.6 sec.; [2] when page was refresed
  */
  useEffect(() => {
    /*
    ___1.here we're setting the current property of the ref to the timer ID; this ID is returned value of setTimeout() method;
    ___2. why "window.scrollTo(0, 0)" ? seems to solve a problem that occures when page is refreshing ==> [1] in one scenario, if there are no 3D elements or fakeScrollableContainer all seems to work correctly; [2] on pages where 2D & 3D coexist and fakeScrollableContainer come into a scene we have sytuaction that page refresh changes position of 3D components but 2D staff sticks to scrollBar position ==> lack of coordination and bad UX;
    */
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
          className="fixed z-[700] left-0 right-0 h-screen  bg-dark pointer-events-none "
        >
          <IntroOverlayContent />
          {/* <p className="font-serif fc p-v-large text-corpo">INTRO</p> */}
        </animated.div>
      )
  );
}
