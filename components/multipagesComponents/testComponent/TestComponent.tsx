'use client';
import React, { useCallback, useEffect, useState } from 'react';

const TestComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  //   const onScroll = useCallback(() => {
  //     const { pageYOffset, scrollY } = window;
  //     console.log('yOffset', pageYOffset, 'scrollY', scrollY);
  //     setScrollY(window.pageYOffset);
  //   }, []);

  useEffect(() => {
    const onScroll = () => {
      const { pageYOffset, scrollY } = window;
      console.log('yOffset', pageYOffset, 'scrollY', scrollY);
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', onScroll); //, { passive: true }
    //document.body.
    //___remove event on unmount to prevent a memory leak
    () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**JSX**/
  return (
    <div
      data-compoent="TestComponent"
      className="fixed flex flex-col gap-4 top-[50vh] right-10"
    >
      <p className="fc w-[200px] select-none text-sky-500">
        Height: {Math.trunc(scrollY)}
      </p>
      <button
        className="select-none text-sky-400 rounded-sm border border-corpo py-1  cursor-grab"
        onClick={() => {
          console.log('...BUTTON');
        }}
      >
        BUTTON
      </button>
    </div>
  );
};

export default TestComponent;
