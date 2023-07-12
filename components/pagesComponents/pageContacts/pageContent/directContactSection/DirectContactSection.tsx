'use client';
import React from 'react'; //___ { Dispatch, SetStateAction, useEffect }
/**Components**/
import { DirectPhone, DirectEmail } from '@/components';
/**Spring Staff**/
import { useInView, animated } from '@react-spring/web';
/**Basic Data**/
import { basicConfigs } from '@/data/basicData';
const {
  pageContact: { rootMargin, amount, inViewStyle },
} = basicConfigs;

/**--------------------------------**/
const DirectContactsSection = () => {
  /**Spring Section**/
  const [ref, inView] = useInView({
    /*
    ___1. rootMarginthat is the viewPort 
    ___2. initially the whole viewPort is an observableArea
    ___3. it's possible to manipulate all observableArea's margins so that some innerAreas aroun top, left, bottom and right might be excluded from observation; here observed object is invissible;
    ___4. order of cutting: top, _ , bottom, _  
    ___5. if top = 20% => imagine a line 20% of viewPort height from the top, and this is the margin; when observed object reaches the margin it becomes invissible;
    */
    // rootMargin: '0% 0px 0% 0px',
    /*
    ___1. amount has valu from range [0,1]
    ___2. We set how much of observed element shoud be in observableArea to make it fully observable
    */
    // amount: 1,
    //___
    rootMargin: rootMargin,
    amount: amount,
  });

  // const springs = useSpring({
  //   opacity: inView ? 1 : 0,
  //   y: inView ? '0%' : '-55%',
  //   config: { mass: 50, tension: 170, friction: 26, clamp: true },
  // });

  // useEffect(() => {
  //   stateSetter(inView);
  // }, [inView, stateSetter]);

  /**Basic Data*/
  const buttonContent = [
    { Component: DirectPhone, label: 'Phone' },
    { Component: DirectEmail, label: 'Email' },
  ];

  /**JSX**/
  return (
    <div
      data-component="DirectContactsSection"
      ref={ref}
      className="relative flex w-full h-screen item-center wrapper-1 k bg-gradient-to-b from-transparent via-dark to-dark"
    >
      <div className="flex flex-col items-start justify-center w-full gap-6">
        {buttonContent.map(({ Component, label }, i) => (
          <div key={label} className="overflow-hidden ">
            <animated.div
              //  style={{ opacity: opacity }}
              // style={springs}
              className={`${inView ? inViewStyle.show : inViewStyle.hide} `}
            >
              <p className="font-serif select-none p-u-large text-light">
                {label}
              </p>
              <Component
                labelStyle={'p-medium text-corpo pointer-events-auto'}
              />
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectContactsSection;
