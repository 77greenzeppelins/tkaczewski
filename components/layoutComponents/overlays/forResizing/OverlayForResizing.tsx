'use client';
import React, { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import useWindowSize from '@/hooks/useWindowSize';

export default function OverlayForResizing() {
  const [makeVisible, setMakeVisible] = useState(false);
  const { width, height } = useWindowSize();
  const val = (width / height).toString();
  const debouncedValue = useDebounce<string>(val, height * 2.9);
  /*
  ___1. why such condition? If starting aR is close to 1 (device has square-like shape) and "resizing" is subtle don't trigger <OverlayForResizing> 
  */
  const aR = width / height;
  const condition = aR < 0.8 || aR > 1.2;

  /*
  ___1. let overlay be visible!
  */
  useEffect(() => {
    setMakeVisible(true);
    window.scrollTo(0, 0);

    // if (condition) {
    //   setMakeVisible(true);
    //   window.scrollTo(0, 0);
    // }
  }, [width, height, condition]);
  /*
  ___1. let overlay be invisible!
  */
  useEffect(() => {
    // window.scrollTo(0, 0);
    setMakeVisible(false);
    // setCounter(val => val + 1);
  }, [debouncedValue]);

  // useEffect(() => {
  //   console.log('aR:', aR);
  // }, [aR]);

  /**JSX**/
  return (
    <div
      className={`fixed fc flex-col gap-y-4 z-[600] left-0 right-0 h-screen  backdrop-blur-xl backdrop-grayscale pointer-events-none 
      ${makeVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* <p className="p-v-large"> {isHidden ? ' invisible' : ' visible'}</p>
      <p>counter: {counter}</p>
      <p className="p-v-large">{makeVisible ? 'YES' : 'NO'}</p> */}
      {/* <p>val: {val}</p> */}
    </div>
  );
}
