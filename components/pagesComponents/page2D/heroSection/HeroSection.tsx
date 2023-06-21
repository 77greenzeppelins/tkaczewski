'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-[100vh] w-full columns-2 ">
      <div className="fc w-full lg:w-1/2 h-[400px] lg:h-full ">
        <div className="flex justify-center flex-col w-[99%] h-[99%] border border-gray-700 ml-[5vw]"></div>
      </div>
      <div className="fc w-full lg:w-1/2 h-[400px] lg:h-full "></div>
    </div>
  );
};

export default HeroSection;
