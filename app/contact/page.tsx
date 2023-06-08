import React from 'react';
/**Components**/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';
import PageContactsContent from '@/components/pagesComponents/pageContacts/PageContactsContent';

/**------------------------**/
const PageContact = () => {
  /**JSX**/
  return (
    <PageWrapper>
      <PageContactsContent />
      {/* <div className="h-screen fc">
        <p className="text-5xl text-light">1</p>
      </div>
      <div className="h-screen bg-corpo fc">
        <p className="text-5xl text-light">2</p>
      </div> */}
      {/* <div className="h-screen bg-corpo" />
      <div className="h-screen " /> */}
    </PageWrapper>
  );
};

export default PageContact;
