'use client';
import React from 'react';
/**Hook**/
import useWindowSize from '@/hooks/useWindowSize';

import DirectPhone from '@/components/multipagesComponents/_basicComponents/links/directContactLinks/DirectPhone';
import DirectEmail from '@/components/multipagesComponents/_basicComponents/links/directContactLinks/DirectEmail';

const InstantContactButtons2D = () => {
  /*
  ___1. 3DObjects in canvas reacts (resizes) on viewPort height; this hook is required as these "buttons" have to follow 3DObjects size 
  */
  const { height } = useWindowSize();

  /**Spring Section*/

  return (
    <div className="w-full h-full z-1">
      <div className="flex justify-center h-[50%] w-full pt-[10vh]">
        <div
          // className="pointer-events-auto"
          className="bg-corpo opacity-25"
          style={{ width: height * 0.25, height: height * 0.3 }}
        >
          <DirectPhone aStyle={'block w-full h-full'} hasLabel={false} />
        </div>
      </div>

      <div className="flex justify-center h-[50%] w-full pt-[10vh] ">
        <div
          // onClick={() => {
          //   console.log('...mail');
          // }}
          className="bg-corpo opacity-25"
          style={{ width: height * 0.25, height: height * 0.3 }}
        >
          <DirectEmail aStyle={'block w-full h-full'} hasLabel={false} />
        </div>
      </div>
      {/* <animated.div
        // style={scrollDrivenStyles}
        style={{ opacity: opacity }}
        className="absolute inset-0 bg-dark pointer-events-none"
      /> */}
    </div>
  );
};

export default InstantContactButtons2D;
