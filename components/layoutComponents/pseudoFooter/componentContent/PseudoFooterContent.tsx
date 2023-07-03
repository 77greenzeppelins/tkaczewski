'use client';
import React, { useEffect, useState } from 'react';
/**Components**/
import { ScrollPrompt } from '@/components';
/**Spring Staff*/
import { animated, easings, useSpring } from '@react-spring/web';
/**Basic Data**/
import { animationsDelays } from '@/data/basicData';

/**---------------------------------**/
const PseudoFooterContent = () => {
  /*
  ___1. this state should by pass to all children of <PFC>; 
  ___2. it should work as "switcher" that keeps all children "invisible" for 3 sec. ===> untill <IO> ends its role;
  ___3. state's setter is modified in useSpring | onRest()
  */
  const [isMounted, setIsMounted] = useState(false);
  /*
  ___1. this animation is necessary to coordinate <PFC> with <InitialOverlay>; why? because <PFC> is on <IO>
  ___2. mode of operation is simple: <PFC> opacity goes from 0 to 1 with duration 3 sec === when <IO> got unmounted
  ___3. all other components that appears withibn <PFC> should have their own animations and lifecycle logic; 
  ___3 componets that appears in <PFC> may come from various parts of layout three; some are closer (<ScrollPrompt>), other more distant (some page-related navigation?) 
  */
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    config: { duration: 1000, easings: easings.easeOutExpo },
    onRest: () => {
      setIsMounted(true);
    },
  }));

  //___
  useEffect(() => {
    const timer = setTimeout(() => {
      api.start({ opacity: 1 });
    }, animationsDelays.pseudoFooterDelay); //3sec.
    return () => {
      clearTimeout(timer);
    };
  }, [api]);

  /**JSX* */
  return (
    <animated.div style={styles} className="relative w-full min-h-[200px]">
      <ScrollPrompt pseudoFooterIsMounted={isMounted} />
    </animated.div>
  );
};

export default PseudoFooterContent;
