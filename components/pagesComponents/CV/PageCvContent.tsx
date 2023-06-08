'use client';
import { animated, useSpring, useScroll } from '@react-spring/web';
import { useRef, useEffect, useState, useCallback } from 'react';
import { clamp } from '@react-spring/shared';
// import { useSpring, animated } from 'react-spring';
// import ScrollProgress from './ScrollProgress';

function PageCvContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  return (
    <div data-component="PageCvContent" ref={containerRef}>
      <animated.div className="h-[100vh] sticky top-0 bg-corpo" />
      <animated.div className="h-[100vh] bg-dark" />
      <animated.div className="h-[100vh]" />
      <animated.div className="h-[100vh]" />
      <animated.div className="h-[100vh]" />
      <animated.div className="h-[100vh]" />
    </div>
  );
}

export default PageCvContent;
