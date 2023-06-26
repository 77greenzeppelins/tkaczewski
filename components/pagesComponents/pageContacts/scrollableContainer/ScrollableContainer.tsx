import React from 'react';
import PageContent from '../pageContent/PageContent';

interface Props {
  hintIsMobile: boolean;
}

const ScrollableContainer = ({ hintIsMobile }: Props) => {
  return hintIsMobile ? (
    <div data-container="ScrollableContainer-mobile">
      <PageContent transform={undefined} hintIsMobile={hintIsMobile} />
    </div>
  ) : (
    <div
      data-container="ScrollableContainer-desktop"
      className="relative w-[5px]"
    >
      <div className="h-screen bg-yellow-600" />
      <div className="h-screen bg-green-700" />
      <div className="h-screen bg-blue-600" />
    </div>
  );
};

export default ScrollableContainer;
