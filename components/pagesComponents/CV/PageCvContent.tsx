import React from 'react';
/**Components**/
import HeroSection from './heroSection/HeroSection';
import AskAI from './askAI/AskAI';
// import { AskAI } from '@/components'; // gives error???
// import InView from './inView/InView';
// import InViewContainer from '@/components/multipagesComponents/_containers/inViewContainer/InViewContainer';

/**Basic Data*/
import { cvSections } from '@/data/textData';
import InfoSection from './infoSection/InfoSection';

/**---------------------------**/
const Page2DContent = () => {
  /**JSX**/
  return (
    <div className="w-full h-full">
      <HeroSection />
      {cvSections.map(({ header, body }) => (
        <InfoSection key={header} headerText={header} bodyText={body} />
      ))}

      <div className="flex justify-center items-center h-[100vh] w-full">
        <AskAI />
      </div>
    </div>
  );
};

export default Page2DContent;

{
  /* <div className="flex flex-col gap-y-10 justify-between items-center w-full">
        <InViewContainer />
        <InViewContainer />
        <InViewContainer />
        <InViewContainer />
      </div> */
}
{
  /* <div className="flex flex-col gap-y-10 justify-center items-center w-full bg-dark">
        <InView />
        <InView />
        <InView />
      </div> */
}
