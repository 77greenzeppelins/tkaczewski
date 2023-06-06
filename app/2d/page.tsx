'use client';

import React from 'react';
/**Components*/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';
import AskAI from '@/components/pagesComponents/page2D/askAI/AskAI';
import InView from '@/components/pagesComponents/page2D/inView/InView';
// import AnimatedTextHolder from '@/components/pagesComponents/page2D/inView/animatedText/AnimatedTextHolder';
import InViewContainer from '@/components/multipagesComponents/_containers/inViewContainer/InViewContainer';

export default function Page2D() {
  // console.log('...Page2D');
  return (
    <PageWrapper>
      <div className="w-full h-full ">
        <div className="flex gap-3 justify-center items-center h-[100vh] w-full bg-dark">
          <p className="text-2xl select-none text-sky-500">Page2D only...</p>
        </div>
        <div className="flex flex-col justify-between items-center h-[100vh] w-full">
          <InView />

          <InViewContainer />
        </div>
        <div className="flex justify-center items-center  h-[100vh] w-full bg-dark">
          {/* <AnimatedTextHolder /> */}
        </div>
        <div className="flex justify-center items-center h-[100vh] w-full">
          <AskAI />
        </div>
      </div>
    </PageWrapper>
  );
}
