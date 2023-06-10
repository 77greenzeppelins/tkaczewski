import React from 'react';
/**Components**/
import HeroSection from './heroSection/HeroSection';
import InView from './inView/InView';
import InViewContainer from '@/components/multipagesComponents/_containers/inViewContainer/InViewContainer';
import AskAI from './askAI/AskAI';

/**---------------------------**/
const Page2DContent = () => {
  /**JSX**/
  return (
    <div className="w-full h-full ">
      <HeroSection />
      <div className="flex flex-col gap-y-10 justify-between items-center w-full">
        <InViewContainer />
        <InViewContainer />
        <InViewContainer />
        <InViewContainer />
      </div>
      <div className="flex flex-col gap-y-10 justify-center items-center w-full bg-dark">
        <InView />
        <InView />
        <InView />
      </div>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <AskAI />
      </div>
    </div>
  );
};

export default Page2DContent;
