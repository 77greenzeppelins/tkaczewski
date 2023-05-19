'use client';

import React from 'react';
/**Components*/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';

export default function Page2D() {
  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full h-full bg-[#02040c]">
        <div className="flex gap-3 justify-center items-center  h-[50vh] w-full bg-[#02040c]">
          <p className="select-none text-slate-200">Page2D</p>
          <p className="select-none text-sky-400">Page2D</p>
          <p className="select-none text-sky-500">Page2Dme</p>
          <p className="select-none text-blue-500">Page2D</p>
          <p className="select-none text-blue-600">Page2D</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-[#02040c]">
          <p className="select-none text-gray-100">Contact Page</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-800">
          <p className="select-none text-gray-100">3</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-700">
          <p className="select-none text-gray-100">Contact Page</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-600">
          <p className="select-none text-gray-100">5</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-500">
          <p className="select-none text-gray-100">Contact Page</p>
        </div>
      </div>
    </LocomotiveTemplate>
  );
}
