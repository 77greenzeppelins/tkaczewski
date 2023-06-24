'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex justify-center w-full min-h-[40vh] wrapper-1 flex-col pt-[40px]">
      {' '}
      <div className="fc w-full">
        <p className="p-v-large text-light text-center font-serif">
          Oskar Tkaczewski
        </p>
      </div>
      <div className="fc w-full">
        <p className="p-regular  text-corpo font-serif">CURRICULUM VITAE</p>
      </div>
    </div>
  );
};

export default HeroSection;

{
  /* <div className="flex flex-wrap justify-center items-center h-[100vh] w-full columns-2 font-serif">
      <div className="fc w-full lg:w-1/2 h-[400px] lg:h-full ">
        <div className="flex justify-center flex-col w-[99%] h-[99%] border border-gray-700 ml-[5vw]">
          <p className="text-5xl select-none text-corpo">
            {page2DTexts.section1.part1[0]}
          </p>
          <p className="text-5xl select-none text-sky-500">
            {page2DTexts.section1.part1[1]}
          </p>
        </div>
      </div>
      <div className="fc w-full lg:w-1/2 h-[400px] lg:h-full "></div>
    </div> */
}
