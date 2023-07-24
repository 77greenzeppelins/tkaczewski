import React from 'react';
/**Components**/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';
import PageContactsSSContainer from '@/components/pagesComponents/pageContacts/PageContactsSSContainer';

export const metadata = {
  title: 'tkaczewski | contacts',
  description: 'Provider of true take-offs in the Internet.',
};

/**------------------------**/
const PageContact = () => {
  /**JSX**/
  return (
    <PageWrapper>
      <PageContactsSSContainer />
    </PageWrapper>
  );
};

export default PageContact;
