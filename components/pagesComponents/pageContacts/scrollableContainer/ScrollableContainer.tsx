import { ContactsDataSection } from '@/components';
import React from 'react';
import PageContent from '../pageContent/PageContent';

interface Props {
  hintIsMobile: boolean;
}

const ScrollableContainer = ({ hintIsMobile }: Props) => {
  return hintIsMobile ? (
    <PageContent transform={undefined} hintIsMobile={hintIsMobile} />
  ) : (
    <div className="relative w-[10px]">
      <div className="h-screen bg-yellow-600" />
      <div className="h-screen bg-green-700" />
      <div className="h-screen bg-blue-600" />
    </div>
  );
};

export default ScrollableContainer;
