'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**Framer Motion**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { page3DConfigs } from '@/data/basicData';

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
    }, page3DConfigs.canvasOverlayDelay);
    return () => clearTimeout(timer);
  }, [path]);

  /**JSX**/
  return (
    <AnimatePresence>
      {mounted ? (
        <motion.div
          className="absolute w-screen h-screen bg-dark z-[9]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
        />
      ) : null}
    </AnimatePresence>
  );
  //   return mounted ? (
  //     <div className="absolute w-screen h-screen bg-dark z-[9]" />
  //   ) : null;
};

export default CanvasOverlay;
