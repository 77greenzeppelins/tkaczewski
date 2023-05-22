'use client';

import React from 'react';
/**Components*/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';
import { PageProps } from '@/ts/typeScriptStaff';

export default function Page2D(props: PageProps) {
  /**...*/
  console.log('Page2D / props: ', props);

  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full h-full ">
        <div className="flex gap-3 justify-center items-center  h-[100vh] w-full bg-[#02040c]">
          <p className="select-none text-slate-200">Page2D</p>
          <p className="select-none text-sky-400">Page2D</p>
          <p className="select-none text-sky-500">Page2Dme</p>
          <p className="text-blue-500 select-none">Page2D</p>
          <p className="text-blue-600 select-none">Page2D</p>
        </div>

        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-800">
          <p className="text-gray-100 select-none">3</p>
        </div>
        <div className="flex justify-center items-center  h-[100vh] w-full ">
          {/* <p className="text-gray-100 select-none">Contact Page</p> */}
        </div>
        <div className="flex justify-center items-center  h-[100vh] w-full bg-gray-600">
          <p className="text-gray-100 select-none">5</p>
        </div>
      </div>
    </LocomotiveTemplate>
  );
}
