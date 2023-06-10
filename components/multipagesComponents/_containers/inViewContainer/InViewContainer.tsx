'use client';
import React, { ReactElement, useRef, cloneElement } from 'react';
import { animated, useInView, useSpring } from '@react-spring/web';

/**TS**/
interface Props {
  //   children: ReactElement | ReactElement[];
  children: ReactElement | ReactElement[];
}

/**----------------------------------**/
const InViewContainer = () => {
  const [ref, inView] = useInView({
    /*
    ___1. rootMarginthat is the viewPort 
    ___2. initially the whole viewPort is an observableArea
    ___3. it's possible to manipulate all observableArea's margins so that some innerAreas aroun top, left, bottom and right might be excluded from observation; here observed object is invissible;
    ___4. order of cutting: top, _ , bottom, _  
    ___5. if top = 20% => imagine a line 20% of viewPort height from the top, and this is the margin; when observed object reaches the margin it becomes invissible;
    */
    rootMargin: '-20% 0px -20% 0px',
    /*
    ___1. amount has valu from range [0,1]
    ___2. We set how much of observed element shoud be in observableArea to make it fully observable
    */
    amount: 0.5,
  });

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0.9,
    // config: {
    //   tension: 300,
    // },
  });

  /**JSX**/
  return (
    <div
      /*
    (!) it's probably better to set referenc to this <div> then to <animated.div> as I noticed some bugs / text vibration when fer was in animated container  
    */
      ref={ref}
      className="w-full flex flex-col justify-evenly border-b border-t border-corpo  px-[10%] overflow-hidden "
    >
      <animated.div
        // ref={ref}
        style={styles}
        className="flex flex-col origin-left "
      >
        <p className="text-3xl text-corpo">Per aspera ad astra</p>
        <p className="text-5xl text-corpo">Per aspera ad astra</p>
        <p className="text-3xl text-corpo">Per aspera ad astra</p>
      </animated.div>
    </div>
  );
};

export default InViewContainer;

//  <div ref={ref}>
//    {Array.isArray(children)
//      ? children.map((child, i) =>
//          React.cloneElement(child, { key: i, inView: inView })
//        )
//      : React.cloneElement(children, { inView: inView })}
//  </div>;
