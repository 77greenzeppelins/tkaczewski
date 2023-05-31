'use client';

import React from 'react';
/**Components*/
import PageWrapper from '@/components/multipagesComponents/pageWrapper/PageWrapper';
import AskAI from '@/components/pagesComponents/page2D/askAI/AskAI';

export default function Page2D() {
  // console.log('...Page2D');
  return (
    <PageWrapper>
      <div data-scroll-section className="w-full h-full ">
        <div className="flex gap-3 justify-center items-center h-[100vh] w-full bg-dark">
          <p className="select-none text-sky-500 text-2xl">Page2D only...</p>
        </div>
        <div className="flex justify-center items-center  h-[100vh] w-full bg-dark" />

        <div className="flex justify-center items-center  h-[100vh] w-full bg-dark"></div>
        <div className="flex justify-center items-center h-[100vh] w-full">
          <AskAI />
        </div>
      </div>
    </PageWrapper>
  );
}
