'use client';
import React, { useEffect, useRef, useState } from 'react';
/**Hooks Staff**/
// import { useMediaQuery } from '@/hooks/useMediaQuery';
// import useWindowSize from '@/hooks/useWindowSize';
import { useTransition, animated } from '@react-spring/web';

/**----------------------------**/
const DeviceRotated = () => {
  // const [rotation, setRotation] = useState(0);
  // const [alteredRotation, setAlteredRotation] = useState(1);

  // const timerRef = useRef<NodeJS.Timeout | null>(null);

  /*
  ___1. this component should be mounted always when height is then 351px | someone plays with scrren and makes it very low;
  ___2. I don't know why I can't use "match" directly... problem: "Text content does not match server-rendered HTML" occures ==> it's a problem of hydration...
  */
  // const matches = useMediaQuery('(max-height: 350px)');

  // const { width, height } = useWindowSize();
  // const portrait = height > width;

  // useEffect(() => {
  //   setRotation(prev => prev + 1);
  //   // console.log('portrait', portrait);
  //   timerRef.current = setTimeout(() => {
  //     setAlteredRotation(prev => prev + 1);
  //   }, 400);

  //   return () => {
  //     clearTimeout(timerRef.current as NodeJS.Timeout);
  //   };
  // }, [portrait]);

  //__________________________
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsMounted(true);
      setTimeout(() => {
        setIsMounted(false);
      }, 1000);
    };

    if (typeof window !== 'undefined' && 'ScreenOrientation' in window) {
      const screenOrientation = window.screen.orientation;
      screenOrientation.addEventListener('change', handleOrientationChange);

      return () => {
        screenOrientation.removeEventListener(
          'change',
          handleOrientationChange
        );
      };
    }
  }, []);
  //__________________________

  // const mountingCondition = rotation !== alteredRotation && alteredRotation > 1;

  const transitions = useTransition(isMounted, {
    // ref: transRef,
    // keys: null,
    keys: isMounted.toString(),
    from: { opacity: 1 },
    enter: { opacity: 1, config: { duration: 0 } },
    leave: { opacity: 0, config: { duration: 600 } },
    // config: { duration: 600 },
    exitBeforeEnter: true,
  });

  //   console.log('rotation', rotation);
  //   console.log('alteredRotation', alteredRotation);

  return isMounted ? (
    <div className="fc flex-col gap-3 text-medium text-light w-screen h-screen bg-dark">
      {/* <p>rotation:{rotation}</p>
      <p>alteredRotation:{alteredRotation}</p> */}
      <p>isMounted:{isMounted.toString()}</p>
    </div>
  ) : null;

  // return transitions(
  //   (style, isMounted) =>
  //     isMounted && (
  //       <animated.div
  //         style={style}
  //         className="fc flex-col gap-3 text-medium text-light w-screen h-screen bg-dark"
  //       >
  //         <p>isMounted:{isMounted.toString()}</p>
  //       </animated.div>
  //     )
  // );
};

export default DeviceRotated;
