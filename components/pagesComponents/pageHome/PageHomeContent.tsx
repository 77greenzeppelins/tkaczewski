'use client';
import React from 'react';
/**Hooks**/
import useScrollPosition from '@/hooks/useScrollPosition';
import useMeasure from 'react-use-measure';
/**Components*/
import { InstantContactButtons2D } from '@/components';
import { useSpring, animated } from '@react-spring/web';
import { basicConfigs, springConfigs } from '@/data/basicData';
/**----------------------------------------**/
const PageHomeContent = () => {
  /*
   ___1. mountingCondition takes its valu from: progress of scrolling === responsive viewport height minus responsive viewport height divided by hardCoded 7;
  */
  const scrollYPosition = useScrollPosition();
  const [ref, { height }] = useMeasure({ scroll: true });
  const muntingCondition =
    scrollYPosition.val === height - height / basicConfigs.pageHome.viewports;
  // console.log('window.innerHeight:', window.innerHeight);

  // if (muntingCondition) {
  //   console.log('...show!');
  // } else {
  //   console.log('...hide!');
  // }

  const { scale } = useSpring({
    scale: muntingCondition ? 1 : 0,
    // config: springConfigs.heavyAndSlow,
    // config: { delay: muntingCondition ? 1 : 0 },
  });

  /**JSX**/
  return (
    <div ref={ref} data-container="PageHomeContent">
      <div className=" h-[600vh]" />
      <div className="flex justify-center items-center h-[100vh] w-full">
        {/* {muntingCondition ? <InstantContactButtons2D /> : null} */}
        <animated.div
          className="h-full"
          //  {...spring}
          style={{ scale: scale }}
        >
          {' '}
          <InstantContactButtons2D
            phoneContainerStyle={'pt-[13vh]'}
            emailContainerStyle={'pt-[8vh]'}
            // buttonWidth={0.25}
            // buttonHeight={0.3}
          />
        </animated.div>
      </div>
    </div>
  );
};

export default PageHomeContent;
