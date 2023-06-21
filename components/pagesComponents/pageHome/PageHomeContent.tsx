'use client';
import React, { useEffect, useRef } from 'react';
import { InstantContactButtons2D } from '@/components';
import useScrollPosition from '@/hooks/useScrollPosition';

/**----------------------------------------**/
const PageHomeContent = () => {
  // const scrollProgress = useRef(window.scrollY);
  // useEffect(() => {
  //   console.log('scrollProgress.current:', scrollProgress.current);
  //   console.log('window.scrollY:', window.scrollY);
  // }, []);

  const scrollYPosition = useScrollPosition();
  console.log('scrollYPosition.val:', scrollYPosition.val);
  if (typeof window !== 'undefined') {
    console.log('window.innerHeight:', window.innerHeight);
  }

  /**JSX**/
  return (
    <div data-container="PageHomeContent">
      <div className=" h-[600vh]" />
      <div className="flex justify-center items-center h-[100vh] w-full">
        <InstantContactButtons2D />
      </div>
    </div>
  );
};

export default PageHomeContent;
