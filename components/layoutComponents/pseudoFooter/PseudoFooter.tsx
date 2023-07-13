import React from 'react';
import PseudoFooterContent from './componentContent/PseudoFooterContent';

/**-------------------------**/
const PseudoFooter = () => {
  /**JSX**/
  return (
    <div
      data-container="PseudoFooter"
      className="fixed w-full bottom-0 left-0 right-0 z-[450] pointer-events-none wrapper-1 "
      //___border-t border-stone-800
    >
      <PseudoFooterContent />
    </div>
  );
};

export default PseudoFooter;
