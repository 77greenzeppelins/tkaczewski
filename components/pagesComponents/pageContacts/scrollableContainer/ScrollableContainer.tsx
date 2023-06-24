import React from 'react';

const ScrollableContainer = () => {
  return (
    <div className="relative w-[10px]">
      <div className="h-screen bg-yellow-600" />
      <div className="h-screen bg-green-700" />
      <div className="h-screen bg-blue-600" />
    </div>
  );
};

export default ScrollableContainer;
