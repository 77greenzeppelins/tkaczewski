'use client';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

/**----------------------------**/
const CanvasOverlay = () => {
  /**...*/
  const path = usePathname();

  /*
  __1: a piece of "logic" to control overlays life cycles;
  __2: 
  */
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
    // console.log('...useEffect / path:', path);
    const timer = setTimeout(() => {
      setMounted(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [path]);

  /**JSX**/
  return (
    <AnimatePresence>
      {mounted ? (
        <div className="absolute w-screen h-screen bg-dark z-[9]" />
      ) : null}
    </AnimatePresence>
  );
  //   return mounted ? (
  //     <div className="absolute w-screen h-screen bg-dark z-[9]" />
  //   ) : null;
};

export default CanvasOverlay;
