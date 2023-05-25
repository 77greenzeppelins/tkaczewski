import Link from 'next/link';
import React from 'react';
/**Components**/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';

/**------------------------**/
const PageContact = () => {
  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full">
        <div className="flex justify-center items-center  h-[100vh] w-full">
          <p className="select-none text-neutral-300 text-4xl">
            contact / 1 / 100vh
          </p>
        </div>
        <div className="flex justify-center items-center h-[100vh] w-full bg-dark">
          <p className="select-none text-neutral-300 text-4xl">
            contact / 2 / 100vh
          </p>
        </div>
      </div>
    </LocomotiveTemplate>
  );
};

export default PageContact;
