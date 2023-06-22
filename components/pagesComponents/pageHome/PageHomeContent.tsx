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
  const [ref, { height }] = useMeasure({ scroll: true });
  /*
  ___1. why do I need GlobalContext /setScrollableHeight ? because <CameraControler> requires data about height of scrollableContainer on pageHome 
  */
  const { scrollableHeight, setScrollableHeight } = useGlobalContext();
  useEffect(() => {
    setScrollableHeight(height);
  }, [height, setScrollableHeight]);

  const startRange =
    scrollableHeight -
    scrollableHeight / basicConfigs.pageHome.viewports -
    basicConfigs.errorMargin;
  const endRange =
    scrollableHeight -
    scrollableHeight / basicConfigs.pageHome.viewports +
    basicConfigs.errorMargin;
  const muntingCondition =
    scrollYPosition.val >= startRange && scrollYPosition.val <= endRange;

  /**JSX**/
  return (
    <div ref={ref} data-container="PageHomeContent">
      <div ref={containerRef} className="relative">
        {/* <div className="fixed top-[100px] left-0 bg-corpo">
          {scrollableHeight}
        </div>
        <div className="fixed top-[140px] left-0 bg-corpo">
          {muntingCondition.toString()}
        </div> */}
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

// const muntingCondition =
//   scrollYPosition.val ===
//   Math.trunc(height) -
//     Math.trunc(Math.trunc(height) / basicConfigs.pageHome.viewports);

// console.log('scrollYPosition.val:', scrollYPosition.val);
// console.log('Math.trunc(height):', Math.trunc(height));
// console.log(
//   'Math.trunc(Math.trunc(height) / basicConfigs.pageHome.viewports):',
//   Math.trunc(Math.trunc(height) / basicConfigs.pageHome.viewports)
// );

// console.log(
//   'Math.trunc(scrollYPosition.val):',
//   Math.trunc(scrollYPosition.val)
// );
// console.log('Math.trunc(height):', Math.trunc(height));
// console.log('height:', height);
