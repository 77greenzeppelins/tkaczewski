// 'use client';
import React from 'react';
import { HeroSectionPageCv, CvSection, AskAI } from '@/components';
/**Basic Data**/
import { cvSections } from '@/data/textData';
import { SpringValue, animated } from '@react-spring/web';

/**TS**/
interface Props {
  hintIsMobile: boolean;
  transform?: SpringValue<string>;
  isVisible?: boolean;
}

/**-------------------------------**/
const PageCvContent = ({
  hintIsMobile,
  transform,
  isVisible = false,
}: Props) => {
  /**JSX**/
  return (
    <animated.div
      data-component={`PageCvContent-${hintIsMobile.toString()}`}
      style={{ transform }}
      aria-hidden={hintIsMobile ? false : true}
      className={`${
        hintIsMobile
          ? 'w-full h-full'
          : isVisible
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
        !hintIsMobile && !isVisible ? null : (
          <div className="flex justify-center items-center h-[100vh] w-full">
            <AskAI />
          </div>
        )
      }
      {/* <div className="flex justify-center items-center h-[100vh] w-full">
        <AskAI />
      </div> */}
    </animated.div>
  );
};

export default PageCvContent;
