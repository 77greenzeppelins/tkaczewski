import Link from 'next/link';
import React from 'react';
/**Components**/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';

/**------------------------**/
const PageContact = () => {
  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full bg-[#070707]">
        <div className="flex justify-center items-center  h-[100vh] w-full bg-[#070707]">
          <p className="select-none text-neutral-300">contact 1 / 100vh</p>
        </div>
        <div className="flex justify-center items-center h-[100vh] w-full bg-neutral-800">
          <p className="select-none text-neutral-300">contact 2 / 100vh</p>
        </div>
        <div className="flex justify-center items-center  h-[100vh] w-full bg-[#070707]">
          <p className="select-none text-neutral-300">contact 3 / 100vh</p>
        </div>
        <div className="flex justify-center items-center h-[100vh] w-full bg-neutral-800">
          <p className="select-none text-neutral-300">contact 4 / 100vh</p>
        </div>
        <div className="flex justify-center items-center  h-[100vh] w-full bg-[#070707]">
          <p className="select-none text-neutral-300">contact 5 / 100vh</p>
        </div>
        <div className="flex justify-center items-center h-[100vh] w-full bg-neutral-800">
          <p className="select-none text-neutral-300">contact 6 / 100vh</p>
        </div>
      </div>
    </LocomotiveTemplate>
  );
};

export default PageContact;
