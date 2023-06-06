import React from 'react';
/** Components**/
import IntroMessage from './message/IntroMessage';
import IntroTimers from './timers/IntroTimers';
/** */
import { useSpring, animated } from '@react-spring/web';

/**---------------------------------**/
const IntroOverlayContent = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400 },
    delay: 200,
  });

  /**JSX**/
  return (
    <animated.div className="w-full h-full wrapper-1" style={props}>
      <div className="flex flex-col h-[70%] justify-center">
        <IntroMessage />
      </div>
      <div className="flex flex-col justify-evenly w-full h-[30%] pb-[40px]">
        <IntroTimers />
      </div>
    </animated.div>
  );
};

export default IntroOverlayContent;
