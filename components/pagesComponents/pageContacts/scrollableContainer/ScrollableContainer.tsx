import React from 'react';
import PageContent from '../pageContent/PageContent';

/**TS**/
interface Props {
  hintIsMobile: boolean;
}

/**--------------------------------------------------------* */
const ScrollableContainer = ({ hintIsMobile }: Props) => {
  /**JSX**/
  return hintIsMobile ? (
    /*
    ___1. rendered if mobile
    ___2. 
    */
    <div
      data-layout="ScrollableContainer-mobile"
      //  className="relative"
    >
      <PageContent
        hintIsMobile={hintIsMobile}
        //transform={undefined}
      />
    </div>
  ) : (
    <div data-layout="ScrollableContainer-desktop" className="relative w-[0px]">
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
    </div>
  );
};

export default ScrollableContainer;
