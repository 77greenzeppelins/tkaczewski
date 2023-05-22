import React from 'react';
/**Components**/
// import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';

/**----------------**/
const PageCv = () => {
  /**JSX**/
  return (
    // <LocomotiveTemplate>
    <div
      // data-scroll-section
      className="w-full bg-[#02040c]"
    >
      <div className="flex justify-center items-center  h-[100vh] w-full ">
        <p className="select-none text-zinc-300">PageCv</p>
        <p className="select-none text-sky-400">PageCv</p>
        <p className="select-none text-sky-500">PageCv</p>
        <p className="text-blue-500 select-none">PageCv</p>
        <p className="text-blue-600 select-none">PageCv</p>
        <p className="text-blue-600 select-none">h-[100vh]</p>
      </div>
      <div className="flex gap-2 justify-center items-center h-[50vh] w-full bg-[#02040c]">
        <p className="select-none text-zinc-300">end / 50vh</p>
      </div>
      <div className="flex gap-2 justify-center items-center h-[200vh] w-full bg-[#02040c]">
        <p className="select-none text-zinc-300">end / 200vh</p>
      </div>
    </div>
    // </LocomotiveTemplate>
  );
};

export default PageCv;
