// 'use client';
import React from 'react';
import { HeroSectionPageCv, CvSection, AskAI } from '@/components';
/**Basic Data**/
import { cvSections } from '@/data/textData';

/**TS**/
interface Props {
  hintIsMobile: boolean;
}

/**-------------------------------**/
const PageCvContent = ({ hintIsMobile }: Props) => {
  /**JSX**/
  return (
    <div
      aria-hidden={hintIsMobile ? false : true}
      className={`${
        hintIsMobile
          ? 'w-full h-full'
          : 'relative w-full h-full pointer-events-none opacity-0'
      }`}
    >
      <HeroSectionPageCv />
      {cvSections.map(({ header, body }) => (
        <CvSection key={header} headerText={header} bodyText={body} />
      ))}
      <div className="flex justify-center items-center h-[100vh] w-full">
        <AskAI />
      </div>
    </div>
  );
};

export default PageCvContent;
