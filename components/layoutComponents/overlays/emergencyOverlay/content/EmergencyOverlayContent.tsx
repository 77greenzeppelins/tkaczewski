'use client';
import React from 'react';
import NotHeightEnought from './notHeightEnought/NotHeightEnought';
import DeviceRotated from './deviceRotated/DeviceRotated';
/**Components**/
/**Hooks Staff**/
// import { useMediaQuery } from '@/hooks/useMediaQuery';
// import useWindowSize from '@/hooks/useWindowSize';

/*
___1. This is unique, emergency component; there are several scenarios when we want to mount it
*/

const EmergencyOverlayContent = () => {
  //___  case1: always when height is less then 350px
  //   const matches = useMediaQuery('(min-height: 350px)');
  //   const { height } = useWindowSize();

  //   console.log('matches:', matches);
  /**JSX**/
  return (
    <>
      {/* <NotHeightEnought /> */}
      <DeviceRotated />
    </>
  );
  //   return height > 350 ? null : (
  //     <div className="fixed fc text-medium text-light w-screen h-screen bg-dark">
  //       {/* <p>3D elements need at lest 500px</p> */}
  //       <NotHeightEnought />
  //     </div>
  //   );
};

export default EmergencyOverlayContent;
