'use client';
import React from 'react';
/**Hooks**/
import useScrollPosition from '@/hooks/useScrollPosition';
import useMeasure from 'react-use-measure';
/**Components*/
import { InstantContactButtons2D } from '@/components';

import { basicConfigs, springConfigs } from '@/data/basicData';
/**----------------------------------------**/
const PageHomeContent = () => {
  /*
  ___1. what is going here? we want to catch the moment when user scroll to the bottom of the document => scrolled the whole page => scrollYPosition === all viewPorts - 1 viewPort
  ___2. mountingCondition takes its valu from: progress of scrolling === responsive viewport height minus responsive viewport height divided by hardCoded 7;
  */
  const scrollYPosition = useScrollPosition();
  const [ref, { height }] = useMeasure({ scroll: true });
  const muntingCondition =
    scrollYPosition.val === height - height / basicConfigs.pageHome.viewports;

  // if (muntingCondition) {
  //   console.log('...show!');
  // } else {
  //   console.log('...hide!');
  // }

  /**JSX**/
  return (
    <div ref={ref} data-container="PageHomeContent">
      <div className=" h-[600vh]" />
      <div className="flex justify-center items-center h-[100vh] w-full">
        {/* {muntingCondition ? <InstantContactButtons2D /> : null} */}
        <div
          className={`h-full  ${
            muntingCondition
              ? 'scale-100 transition duration-1000 delay-1000'
              : 'scale-0 transition duration-0 delay-0'
          }`}
          //  {...spring}
          // style={{ scale: scale }}
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
  );
};

export default PageHomeContent;
