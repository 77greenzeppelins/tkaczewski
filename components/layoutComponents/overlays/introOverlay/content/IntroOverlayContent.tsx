import React from 'react';
/** Components**/
import IntroMessage from './message/IntroMessage';
import IntroTimers from './timers/IntroTimers';

/**---------------------------------**/
const IntroOverlayContent = () => {
  /**JSX**/
  return (
    <div className="w-full h-full wrapper-1">
      <div className="flex flex-col h-[80%] justify-center">
        <IntroMessage />
      </div>
      <div className="flex flex-col justify-evenly w-full h-[20%] ">
        <IntroTimers />
      </div>
    </div>
  );
};

export default IntroOverlayContent;
