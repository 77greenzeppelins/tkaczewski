import React from 'react';
/**Components**/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';

/**----------------**/
const PageCv = () => {
  /**JSX**/
  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full bg-[#050506]">
        <div className="flex justify-center items-center  h-[50vh] w-full bg-zinc-950">
          <p className="select-none text-zinc-300">1</p>
        </div>
        <div className="flex gap-2 justify-center items-center h-[50vh] w-full bg-[#050506]">
          <p className="select-none text-zinc-300">PageCv</p>
          <p className="select-none text-sky-400">PageCv</p>
          <p className="select-none text-sky-500">PageCv</p>
          <p className="select-none text-blue-500">PageCv</p>
          <p className="select-none text-blue-600">PageCv</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-zinc-800">
          <p className="select-none text-zinc-300">3</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-zinc-700">
          <p className="select-none text-zinc-300">PageCv</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-zinc-600">
          <p className="select-none text-zinc-300">5</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-zinc-500">
          <p className="select-none text-zinc-300">PageCv</p>
        </div>
      </div>
    </LocomotiveTemplate>
  );
};

export default PageCv;
