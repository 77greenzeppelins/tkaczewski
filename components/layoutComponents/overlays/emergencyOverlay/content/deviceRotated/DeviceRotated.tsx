'use client';
import React, { useEffect, useRef, useState } from 'react';
/**Hooks Staff**/
// import { useMediaQuery } from '@/hooks/useMediaQuery';
// import useWindowSize from '@/hooks/useWindowSize';
import { useTransition, animated } from '@react-spring/web';

/**----------------------------**/
const DeviceRotated = () => {
  /*
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      console.log('First timeout');
    }, 1000);

    const timeout2 = setTimeout(() => {
      console.log('Second timeout');
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  */
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

  // return isMounted ? (
  //   <div className="w-screen h-screen ">
  //     <div className="fc  flex-col w-full h-full text-medium text-lightbg-dark">
  //       <p>isMounted:{isMounted.toString()}</p>
  //     </div>
  //     {/* <p>rotation:{rotation}</p>
  //     <p>alteredRotation:{alteredRotation}</p> */}
  //   </div>
  // ) : null;

  return transitions((style, isMounted) => (
    <animated.div
      style={style}
      className="fc flex-col gap-3 text-medium text-light w-screen h-screen bg-dark"
    >
      <p>isMounted:{isMounted.toString()}</p>
    </animated.div>
  ));
};

export default DeviceRotated;
