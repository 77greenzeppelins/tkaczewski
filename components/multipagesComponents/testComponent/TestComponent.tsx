'use client';
import React, { useCallback, useEffect, useState } from 'react';

const TestComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [size, setSize] = useState('');

  //   const onScroll = useCallback(() => {
  //     const { pageYOffset, scrollY } = window;
  //     console.log('yOffset', pageYOffset, 'scrollY', scrollY);
  //     setScrollY(window.pageYOffset);
  //   }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 800) {
        console.log('window.innerWidth > 800');
        setSize('more then 800');
      } else {
        console.log('window.innerWidth < 800');
        setSize('less then 800');
      }
    };

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
    <div className="fixed flex flex-col gap-4 top-[50vh] right-10">
      <p className=" select-none text-sky-500">Height: {scrollY}</p>
      <button
        className="select-none text-sky-400"
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
