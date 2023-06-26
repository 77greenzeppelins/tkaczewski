import React from 'react';
/**Components**/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';
import PageContactsSSContainer from '@/components/pagesComponents/pageContacts/PageContactsSSContainer';
// import PageContactsContent from '@/components/pagesComponents/pageContacts/PageContactsContent';

/**------------------------**/
const PageContact = () => {
  /**JSX**/
  return (
    <PageWrapper>
      {/* <PageContactsContent /> */}
      <PageContactsSSContainer />
    </PageWrapper>
  );
};

export default PageContact;
