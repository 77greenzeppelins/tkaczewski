'use client';
import React from 'react';
/**Components**/
import EmergencyOverlayContent from './content/EmergencyOverlayContent';

const EmergencyOverlay = () => {
  return (
    <div
      data-component="EmergencyOverlay"
      className="fixed w-full h-full bottom-0 left-0 right-0 pointer-events-none z-[100]"
    >
      <EmergencyOverlayContent />
    </div>
  );
};

export default EmergencyOverlay;
