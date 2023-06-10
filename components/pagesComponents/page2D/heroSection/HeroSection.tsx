'use client';

import React from 'react';
//pages3DPositions.page2D.x
import { page2DTexts } from '@/data/textData';

const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-[100vh] w-full columns-2 ">
      <div className="fc w-full lg:w-1/2 h-[400px] lg:h-full ">
        <div className="flex justify-center flex-col w-[99%] h-[99%] border border-gray-700 ml-[5vw]">
          <p className="text-5xl select-none text-sky-500">
            {page2DTexts.section1.part1[0]}
          </p>
          <p className="text-5xl select-none text-sky-500">
            {page2DTexts.section1.part1[1]}
          </p>
        </div>
      </div>
      <div className="fc w-full lg:w-1/2 h-[400px] lg:h-full "></div>
    </div>
  );
};

export default HeroSection;
