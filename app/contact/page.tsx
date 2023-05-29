import React from 'react';
/**Components**/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';

/**------------------------**/
const PageContact = () => {
  return (
    <PageWrapper>
      <div className="w-full">
        <div className="flex justify-center items-center  h-[100vh] w-full"></div>
        <div className="flex justify-center items-center h-[100vh] w-full bg-dark">
          <p className="select-none text-neutral-300 text-4xl">
            contact / 2 / 100vh
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PageContact;
