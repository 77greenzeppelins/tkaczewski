'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { LocomotiveScrollProvider, Scroll } from 'react-locomotive-scroll';

/**TS**/
interface Props {
  children: React.ReactNode;
}

/**---------------------------------------------------**/
const LocomotiveTemplate = ({ children }: Props) => {
  //___
  const containerRef = React.useRef(null);
  // console.log(scroll);
  /**JSX* */
  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     // ... all available Locomotive Scroll instance options
    //   }}
    //   watch={
    //     [
    //       //..all the dependencies you want to watch to update the scroll.
    //       //  Basicaly, you would want to watch page/location changes
    //       //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    //     ]
    //   }
    //   containerRef={containerRef}
    //   // location={refresh}
    //   // containerRef={containerRef}
    //   onLocationChange={(scroll: Scroll | null) =>
    //     scroll.scrollTo(0, { duration: 0, disableLerp: true })
    //   } // If you want to reset the scroll position to 0 for example
    //   onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on
    // >
    <motion.div
      // data-scroll-container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
    // </LocomotiveScrollProvider>
  );
};

export default LocomotiveTemplate;
