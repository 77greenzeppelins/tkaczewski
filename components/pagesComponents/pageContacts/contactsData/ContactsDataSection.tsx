'use client';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
/**Spring Staff**/
import { useInView, useSpring, animated, SpringValue } from '@react-spring/web';
import { DirectPhone, DirectEmail } from '@/components';

/**TS**/
interface Props {
  transform: SpringValue<string>;
  // stateSetter: Dispatch<SetStateAction<boolean>>;
}

/**--------------------------------**/
const ContactsDataSection = ({ transform }: Props) => {
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
    rootMargin: '0% 0% 0% 0%',
    amount: 0.8,
  });

  const springs = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? '0%' : '-55%',
    config: { mass: 50, tension: 170, friction: 26, clamp: true },
  });

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
    <animated.div
      ref={ref}
      // className={`absolute inset-0 w-full h-[100vh] wrapper-1
      // `}
      // ${inView ? 'translate-x-0' : 'translate-x-[105%]'}
      // style={{ transform }}
      // style={{ transform: `translateX(${x}px)` }}
      //___new
      className="relative h-[100vh] wrapper-1"
    >
      <div className="flex flex-col gap-6 items-start justify-center w-full h-full overlay-hidden">
        {buttonContent.map(({ Component, label }, i) => (
          <div key={label} className=" overflow-hidden">
            <animated.div
              //  style={{ opacity: opacity }}
              // style={springs}
              className={`${
                inView
                  ? 'opacity-100 transition-all duration-1000 delay-1000'
                  : 'opacity-0 duration-0.01 delay-0'
              } `}
            >
              <p className="p-v-large text-corpo select-none">{label}</p>
              <Component labelStyle={'p-medium text-corpo'} />
            </animated.div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default ContactsDataSection;
