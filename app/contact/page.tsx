import Link from 'next/link';
import React from 'react';
/**Components**/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';

/**------------------------**/
const PageContact = () => {
  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full bg-[#070707]">
        <div className="flex justify-center items-center  h-[50vh] w-full bg-[#070707]">
          <p className="select-none text-neutral-300">1</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-[#070707]">
          <p className="select-none text-neutral-300">PageContact</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-neutral-800">
          <p className="select-none text-neutral-300">3</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-neutral-700">
          <p className="select-none text-neutral-300">PageContact</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-neutral-600">
          <p className="select-none text-neutral-300">5</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-neutral-500">
          <p className="select-none text-neutral-300">PageContact</p>
        </div>
      </div>
    </LocomotiveTemplate>
  );
};

export default PageContact;
