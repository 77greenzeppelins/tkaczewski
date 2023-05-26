'use client';
import useScrollPosition from '@/hooks/useScrollPosition';
import React from 'react';

const TestComponent = () => {
  const scrollYPosition = useScrollPosition();

  /**JSX**/
  return (
    <div
      data-compoent="TestComponent"
      className="fixed flex flex-col gap-4 top-[50vh] right-10"
    >
      <button
        className="select-none text-sky-400 rounded-sm border border-corpo py-1  cursor-grab"
        onClick={() => {
          console.log('...BUTTON');
        }}
      >
        <p className="fc w-[200px] select-none text-sky-500">
          Height: {Math.trunc(scrollYPosition.val)}
        </p>
      </button>
    </div>
  );
};

export default TestComponent;
