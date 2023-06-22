'use client';
import React, { useEffect, useRef } from 'react';
/**Hooks**/
import useScrollPosition from '@/hooks/useScrollPosition';
import useMeasure from 'react-use-measure';
/**Components*/
import { InstantContactButtons2D } from '@/components';

import { basicConfigs, springConfigs } from '@/data/basicData';
import { useGlobalContext } from '@/context/globalContext';
/**----------------------------------------**/
const PageHomeContent = () => {
  const containerRef = useRef(null!);
  /*
  ___1. what is going here? we want to catch the moment when user scroll to the bottom of the document => scrolled the whole page => scrollYPosition === all viewPorts - 1 viewPort
  ___2. mountingCondition takes its valu from: progress of scrolling === responsive viewport height minus responsive viewport height divided by hardCoded 7;
  */
  const scrollYPosition = useScrollPosition();
  const [ref, { height }] = useMeasure({ scroll: true }); //___
  const muntingCondition =
    scrollYPosition.val === height - height / basicConfigs.pageHome.viewports;

  /*
  ___1. why do I need GlobalContext /setScrollableHeight ? because <CameraControler> requires data about height of scrollableContainer on pageHome 
  */
  const { scrollableHeight, setScrollableHeight } = useGlobalContext();
  useEffect(() => {
    setScrollableHeight(height);
    // console.log('scrollableHeight', scrollableHeight);
    // console.log('height', height);
  }, [height, setScrollableHeight]);

  // if (muntingCondition) {
  //   console.log('...show!');
  // } else {
  //   console.log('...hide!');
  // }

  /**JSX**/
  return (
    <div ref={ref} data-container="PageHomeContent">
      <div ref={containerRef} className="relative">
        <div className="fixed top-[100px] left-0 bg-corpo">
          {scrollableHeight}
        </div>
        <div className=" h-[600vh]" />
        <div className="flex justify-center items-center h-[100vh] w-full">
          <div
            className={`h-full  ${
              muntingCondition
                ? 'scale-100 transition duration-1000 delay-1000'
                : 'scale-0 transition duration-0 delay-0'
            }`}
          >
            {' '}
            <InstantContactButtons2D
              phoneContainerStyle={'pt-[13vh]'}
              emailContainerStyle={'pt-[8vh]'}
              buttonWidth={0.22}
              buttonHeight={0.28}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHomeContent;
