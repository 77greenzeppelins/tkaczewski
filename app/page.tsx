// 'use client';
import React from 'react';
/**Components*/

import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';

/**------------------------------* */
export default function Home() {
  /**JSX**/
  return (
    <PageWrapper>
      <div className="w-full h-full pointer-events-auto">
        <div className="flex gap-x-10 justify-start items-center h-[400vh]">
          {' '}
          {/* <p className="select-none text-slate-200">Home</p>
          <p className="select-none text-sky-400">Home</p>
          <p className="text-blue-500 select-none">Home</p>
          <p className="text-blue-600 select-none">Home</p> */}
        </div>

        <div className="flex justify-center items-center h-[100vh] w-full" />
        <div className="flex justify-center items-center h-[100vh] w-full" />
        <div className="flex justify-center items-center h-[100vh] w-full" />

        <div className="flex justify-center items-center h-[50vh] w-full bg-corpo" />
      </div>
    </PageWrapper>
  );
}

{
  /* <div className="flex gap-3 justify-center items-center  h-[50vh] w-full bg-[#02040c]">
          <p className="select-none text-slate-200">Home</p>
          <p className="select-none text-sky-400">Home</p>
          <p className="select-none text-sky-500">Homeme</p>
          <p className="text-blue-500 select-none">Home</p>
          <p className="text-blue-600 select-none">Home</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-[#02040c]">
          <p className="text-gray-100 select-none">Contact Page</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-800">
          <p className="text-gray-100 select-none">3</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-700">
          <p className="text-gray-100 select-none">Contact Page</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-600">
          <p className="text-gray-100 select-none">5</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-500">
          <p className="text-gray-100 select-none">Contact Page</p>
        </div> */
}
