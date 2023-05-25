'use client';

import React from 'react';
/**Components*/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';

export default function Page2D() {
  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full h-full ">
        <div className="flex gap-3 justify-center items-center h-[50vh] w-full">
          <p className="select-none text-sky-500 text-2xl">Page2Dme</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full" />

        <div className="flex justify-center items-center  h-[100vh] w-full bg-dark" />
        <div className="flex justify-center items-center  h-[100vh] w-full" />
      </div>
    </LocomotiveTemplate>
  );
}
