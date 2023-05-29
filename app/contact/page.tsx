import React from 'react';
/**Components**/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';
import InstantContactButtons2D from '@/components/pagesComponents/pageContacts/instantContactButtons/InstantContactButtons2D';

/**------------------------**/
const PageContact = () => {
  /**JSX**/
  return (
    <PageWrapper>
      <div data-component="PageContact" className="w-full relative">
        <div className="sticky top-0 flex justify-center items-center h-[100vh] w-full -z-10">
          {' '}
          <InstantContactButtons2D />
        </div>
        <div className="flex justify-center items-center h-[100vh] w-full bg-dark z-10">
          <p className="select-none text-neutral-300 text-4xl">
            contact / 2 / 100vh
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PageContact;
