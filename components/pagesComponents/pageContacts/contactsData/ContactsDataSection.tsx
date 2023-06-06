'use client';
import React from 'react';
/**Spring Staff**/
import { useInView, useSpring, animated } from '@react-spring/web';
import DirectPhone from '@/components/multipagesComponents/_basicComponents/links/directContactLinks/DirectPhone';
import DirectEmail from '@/components/multipagesComponents/_basicComponents/links/directContactLinks/DirectEmail';

/**--------------------------------**/
const ContactsDataSection = () => {
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
    rootMargin: '-20% 0px -20% 0px',
    amount: 0.4,
  });

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    duration: inView ? 2 : 0,
    // scale: inView ? 1 : 0.9,
    // config: {
    //   tension: 300,
    // from: { opacity: 0 },
    // to: { opacity: inView ? 1 : 0 },
    // },
  });

  return (
    <div ref={ref} className="w-full h-[100vh] wrapper-1">
      <animated.div
        style={styles}
        className="z-10 flex flex-col items-start justify-center w-full h-full backdrop-blur-md"
      >
        {/* <p className="text-4xl select-none text-neutral-300">
          contact / 2 / 100vh
        </p> */}
        <DirectPhone labelStyle={'p-medium text-corpo'} />
        <DirectEmail labelStyle={'p-medium text-corpo'} />
      </animated.div>
    </div>
  );
};

export default ContactsDataSection;
