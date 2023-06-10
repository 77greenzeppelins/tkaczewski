'use client';
import { animated } from '@react-spring/web';
import { useRef } from 'react';

/**------------------------**/
function PageIOContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  /**JSX**/
  return (
    <div data-component="PageCvContent" ref={containerRef}>
      <animated.div className="h-[100vh] bg-[#3730a3]" />
      <animated.div className="h-[100vh] bg-dark" />
      <animated.div className="h-[100vh]" />
      <animated.div className="h-[100vh]" />
      <animated.div className="h-[100vh]" />
      <animated.div className="h-[100vh]" />
    </div>
  );
}

export default PageIOContent;
