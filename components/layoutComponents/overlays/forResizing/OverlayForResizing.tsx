'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import useWindowSize from '@/hooks/useWindowSize';

export default function OverlayForResizing() {
  const [makeVisible, setMakeVisible] = useState(false);
  const { width, height } = useWindowSize();
  const val = (width / height).toString();
  const aR = width / height;
  const debouncedValue = useDebounce<string>(val, 400);
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
      className={`fixed fc flex-col gap-y-4 z-[600] left-0 right-0 h-screen  backdrop-blur-xl  pointer-events-none 
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
