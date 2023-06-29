'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**Spring settings*/
import { useTransition, animated } from '@react-spring/web';
/**Basic Data**/
import { page3DConfigs } from '@/data/basicData';

/*
__1. whenever path changes this component appears for 1 sec.
__2. main task is to cover <canvas> content; 
__3. as it animates; canvas content is presented with opacity effect

----------------------------
*/
const CanvasOverlay = () => {
  /**...*/
  const path = usePathname();

  /*
  __1: a piece of "logic" to control overlays life cycles;
  __2: 
  */
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(false);
    }, page3DConfigs.canvasOverlayDelay);
    /*
    __1. it's a cleaner
    __2. why: setMounted(true) ? when user changes path this component should be mounted again so local state must be true ! 
    */
    return () => {
      setMounted(true);
      clearTimeout(timer);
    };
  }, [path]);

  const transitions = useTransition(mounted, {
    keys: mounted.toString(),
    from: { opacity: 1 },
    enter: { opacity: 1, config: { duration: 0 } },
    leave: { opacity: 0, config: { duration: 400 } },
    // config: { duration: 400 },
    exitBeforeEnter: true,
  });

  /**JSX**/
  return transitions(
    (style, isIntroOverlay) =>
      isIntroOverlay && (
        <animated.div
          data-component="IntroOverlay"
          style={style}
          className="absolute w-screen h-screen bg-dark z-[9] pointer-events-none"
        />
      )
  );
};

export default CanvasOverlay;
