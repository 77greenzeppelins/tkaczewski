import React from 'react';
/**Components**/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';
import InstantContactButtons2D from '@/components/pagesComponents/pageContacts/instantContactButtons/InstantContactButtons2D';
import ContactsDataSection from '@/components/pagesComponents/pageContacts/contactsData/ContactsDataSection';

/**------------------------**/
const PageContact = () => {
  /**JSX**/
  return (
    <PageWrapper>
      <div data-component="PageContact" className="relative w-full">
        <InstantContactButtons2D />
        <ContactsDataSection />
        <div className="h-[100vh] " />
        {/* <ContactsDataSection />
        <div className="h-[100vh] bg-corpo" /> */}
      </div>
    </PageWrapper>
  );
};

export default PageContact;
