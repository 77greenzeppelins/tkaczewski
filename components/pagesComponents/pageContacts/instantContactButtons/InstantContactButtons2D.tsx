'use client';
import useWindowSize from '@/hooks/useWindowSize';
import React from 'react';

const InstantContactButtons2D = () => {
  /*
  ___1. 3DObjects in canvas reacts (resizes) on viewPort height; this hook is required as these "buttons" have to follow 3DObjects size 
  */
  const { height } = useWindowSize();

  //   console.log('...width:', height);
  return (
    <div
      data-component="InstantContactButtons2D"
      className="sticky top-0 flex justify-center items-center h-[100vh] w-full -z-10"
    >
      <div className="relative w-full h-full ">
        <div className="flex justify-center h-[50%] w-full pt-[10vh]">
          <div
            // className="opacity-50 bg-corpo"
            style={{ width: height * 0.25, height: height * 0.3 }}
          ></div>
        </div>
        <div className="flex justify-center h-[50%] w-full pt-[10vh]">
          <div
            // className="opacity-50 bg-corpo"
            style={{ width: height * 0.25, height: height * 0.3 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InstantContactButtons2D;
