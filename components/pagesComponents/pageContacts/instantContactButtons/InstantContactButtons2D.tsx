'use client';
import useWindowSize from '@/hooks/useWindowSize';
import React from 'react';

const InstantContactButtons2D = () => {
  /**---**/
  const { height } = useWindowSize();

  //   console.log('...width:', height);
  return (
    <div
      data-component="InstantContactButtons2D"
      className="relative w-full h-full "
    >
      <div className="flex justify-center h-[50%] w-full pt-[10vh]">
        <div
          className="bg-corpo opacity-50"
          style={{ width: height * 0.25, height: height * 0.3 }}
        ></div>
      </div>
      <div className="flex justify-center h-[50%] w-full pt-[10vh]">
        <div
          className="bg-corpo opacity-50"
          style={{ width: height * 0.25, height: height * 0.3 }}
        ></div>
      </div>
    </div>
  );
};

export default InstantContactButtons2D;
