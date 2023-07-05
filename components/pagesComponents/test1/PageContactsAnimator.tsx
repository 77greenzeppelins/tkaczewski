'use client';
import React from 'react';
/**Components**/
import { DirectContactsSection, OtherContactsSection } from '@/components';
import GitHubSectionTrans from '../pageContacts/pageContent/githubSection/GitHubSectionTrans';

/**----------------------------------------**/
const PageContactAnimator = () => {
  /**JSX**/
  return (
    <div data-container="PageContactsContent" className="relative">
      {/*-------------------------------------------------------------100vh*/}
      <div className="h-screen w-full border-b border-neutral-700" />
      {/* <div className="h-[20vh] w-full bg-gradient-to-b from-transparent to-dark" /> */}

      {/*-------------------------------------------------------------100vh*/}
      <div className="h-screen w-full border-b border-neutral-700">
        {/* <div
          className="h-[20vh] w-full bg-gradient-to-b from-transparent to-dark"
          
        /> */}
        <div className="h-full w-full wrapper-1 flex items-center ">
          <DirectContactsSection />
        </div>
      </div>

      {/*-------------------------------------------------------------100vh*/}
      <div className="h-screen w-full border-b border-neutral-700">
        <div className="h-full wrapper-1 flex items-center">
          <OtherContactsSection />
        </div>

        <div
          className="h-[20%] w-full "
          //___bg-gradient-to-b from-dark to-transparent
        />
      </div>

      {/*-------------------------------------------------------------100vh*/}
      <div className="h-screen w-full wrapper-1 border-b border-neutral-700">
        <GitHubSectionTrans />
      </div>
    </div>
  );
};

export default PageContactAnimator;
