'use client';
import { PageCvContent } from '@/components';
import React from 'react';
/**Components**/

/**Basic Data*/
/**TS**/
interface Props {
  hintIsMobile: boolean;
}

/**---------------------------**/
const PageCvAnimator = ({ hintIsMobile }: Props) => {
  /**JSX**/
  return (
    <div
      className="relative w-full h-full"
      // className="w-full h-full pointer-events-none opacity-0"
    >
      <PageCvContent hintIsMobile={hintIsMobile} />
    </div>
  );
};

export default PageCvAnimator;

{
  /* <HeroSection />;
{
  cvSections.map(({ header, body }) => (
    <InfoSection key={header} headerText={header} bodyText={body} />
  ));
}

<div className="flex justify-center items-center h-[100vh] w-full">
  <AskAI />
</div>; */
}

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
