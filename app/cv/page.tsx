import React from 'react';
/**Components**/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';

/**----------------**/
const PageCv = () => {
  /**JSX**/
  return (
    <PageWrapper>
      <div className="w-full">
        <div className="flex justify-center items-center h-[100vh] w-full ">
          <p className="select-none text-sky-400 text-5xl">PageCv</p>
        </div>
        <div className="flex gap-2 justify-center items-center h-[50vh] w-full bg-dark" />
        <div className="flex gap-2 justify-center items-center h-[50vh] w-full " />
        <div className="flex gap-2 justify-center items-center h-[100vh] w-full" />
        <div className="flex gap-2 justify-center items-center h-[100vh] w-full bg-dark" />
      </div>
    </PageWrapper>
  );
};

export default PageCv;
