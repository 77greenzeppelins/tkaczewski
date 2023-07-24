'use client';
import React, { useEffect, useState } from 'react';

import useWindowSize from '@/hooks/useWindowSize';
import useDebounce from '@/hooks/useDebounce';

export default function OverlayForResizing() {
  //   const isVisible = false;
  //   const [isHidden, setIsHidden] = useState<boolean>(!isVisible);
  //   const [counter, setCounter] = useState(0);

  const [makeVisible, setMakeVisible] = useState(false);
  const { width, height } = useWindowSize();
  const val = (width / height).toString();
  const debouncedValue = useDebounce<string>(val, 400);

  //
  //   useEffect(() => {
  //     window.addEventListener('resize', handleResize);
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, [handleResize, debouncedValue]);

  //   useEffect(() => {
  //     window.addEventListener('resize', handleResize);
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, [handleResize, debouncedValue]);
  /*
  ___1. make visible
  */
  useEffect(() => {
    setMakeVisible(true);
  }, [width, height]);

  /*
  ___1. make invisible
  */
  useEffect(() => {
    setMakeVisible(false);
    // setCounter(val => val + 1);
  }, [debouncedValue]);

  /**JSX**/
  return (
    <div
      data-component="OverlayForResizing"
      className={`fixed fc flex-col gap-y-4 left-0 right-0 h-screen  backdrop-blur-xl  pointer-events-none  z-[600]
      ${makeVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* <p className="p-v-large"> {isHidden ? ' invisible' : ' visible'}</p>
      <p>counter: {counter}</p>
       */}
      {/* <p>val: {val}</p> */}
      {/* <p className="p-v-large">{makeVisible ? 'YES' : 'NO'}</p> */}
    </div>
  );
}
