// 'use client';
import React, { useEffect } from 'react';
import { HeroSectionPageCv, CvSection, AskAI } from '@/components';
/**Basic Data**/
import { cvSections } from '@/data/textData';
import { SpringValue, animated } from '@react-spring/web';

/**TS**/
interface Props {
  isMobile: boolean;
  transform?: SpringValue<string>;
  isVisibleOnDesktop?: boolean;
}

/**-------------------------------**/
const PageCvContent = ({
  isMobile,
  transform,
  isVisibleOnDesktop = false,
}: Props) => {
  //___
  // useEffect(() => {
  //   isMobile
  //     ? console.log('isMobile')
  //     : isVisibleOnDesktop
  //     ? console.log(' !isMobile && isVisibleOnDesktop')
  //     : console.log(' !isMobile && !isVisibleOnDesktop');
  // }, [isMobile, isVisibleOnDesktop]);

  /**JSX**/
  return (
    <animated.div
      data-component={`PageCvContent-${isMobile.toString()}`}
      style={{ transform }}
      aria-hidden={isMobile || isVisibleOnDesktop ? false : true}
      className={`${
        isMobile
          ? 'w-full h-full'
          : isVisibleOnDesktop
          ? 'relative w-full h-full pointer-events-none opacity-1'
          : 'relative w-full h-full pointer-events-none opacity-0'
      }`}
    >
      <HeroSectionPageCv />
      {cvSections.map(({ header, body }) => (
        <CvSection key={header} headerText={header} bodyText={body} />
      ))}
      {
        /*
      ___1. why this ternary operator?
      ___2. it's a sort of "fake way" of tweaking height to scroll on desktop
      ___3. I cut this layout by 100vh because <SmoothCvContainer> itself has 100vh;
      */
        // !isMobile && !isVisibleOnDesktop ? null : (
        <div className="flex justify-center items-center h-[100vh] w-full">
          <AskAI />
        </div>
        // )
      }
      {/* <div className="flex justify-center items-center h-[100vh] w-full">
        <AskAI />
      </div> */}
    </animated.div>
  );
};

export default PageCvContent;
