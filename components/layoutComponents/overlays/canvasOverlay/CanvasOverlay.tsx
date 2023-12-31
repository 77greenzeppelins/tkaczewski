'use client';
import React, { useEffect, useRef, useState } from 'react';
/**Hook Staff*/
import { usePathname } from 'next/navigation';
/**Spring Staff*/
import { useTransition, animated } from '@react-spring/web';
/**Basic Data**/
import { page3DConfigs } from '@/data/basicData';

/*
__1. whenever path changes this component appears for 1 sec.
__2. main task is to cover <canvas> content; 
__3. as it animates; canvas content is presented with opacity effect
__4. imported in: layoutComponents | <AppContainer>

----------------------------
*/
const CanvasOverlay = () => {
  /**Patrh detector**/
  const path = usePathname();
  /****/
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  /*
  __1: a piece of "logic" to control overlays life cycles;
  __2: 
  */
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setMounted(false);
    }, page3DConfigs.canvasOverlayDelay);
    /*
    __1. it's a cleaner
    __2. why: setMounted(true) ? when user changes path this component should be mounted again so local state must be true ! 
    */
    return () => {
      setMounted(true);
      clearTimeout(timerRef.current as NodeJS.Timeout);
    };
  }, [path]);

  const transitions = useTransition(mounted, {
    // keys: mounted.toString(),
    from: { opacity: 1 },
    enter: { opacity: 1, config: { duration: 400 } },
    leave: { opacity: 0, config: { duration: 400 } },
    // config: { duration: 400 },
    // exitBeforeEnter: true,
  });

  /**JSX**/
  return transitions(
    (style, mounted) =>
      mounted && (
        <animated.div
          data-component="CanvasOverlay"
          style={style}
          className="absolute w-screen h-screen bg-dark z-[9] pointer-events-none"
        />
      )
  );
};

export default CanvasOverlay;
