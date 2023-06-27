import React from 'react';
import PageContent from '../pageContent/PageContent';

interface Props {
  hintIsMobile: boolean;
}

const ScrollableContainer = ({ hintIsMobile }: Props) => {
  /**JSX**/
  return hintIsMobile ? (
    /*
    ___1. rendered if mobile
    ___2. 
    */
    <div data-container="ScrollableContainer-mobile">
      <PageContent
        hintIsMobile={hintIsMobile}
        //transform={undefined}
      />
    </div>
  ) : (
    <div
      data-container="ScrollableContainer-desktop"
      className="relative w-[0px]"
    >
      <div className="h-screen bg-yellow-600" />
      <div className="h-screen bg-green-700" />
      <div className="h-screen bg-blue-600" />
    </div>
  );
};

export default ScrollableContainer;
