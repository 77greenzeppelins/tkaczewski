'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import PhilosophersAnswers from './answers/PhilosophersAnswers';
import RaphaelPainting from './raphaelPainting/RaphaelPainting';
/**Spring Staff*/
import { useSpring, animated } from '@react-spring/three';
/**BasicData*/
import { springConfigs } from '@/data/basicData';

/**HardCoded Staff*/
// const minWidthForAnimation = 769;
// const outOfScene = 0.35;
/**-----------------**/
const Act5 = () => {
  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();

  /*
  ___1. this spring animates initial move, when painting enters the scene...
  */
  const { positionZ, rotationX, positionY } = useSpring({
    positionZ: askAI ? -0.1 : -1.7,
    positionY: askAI ? -0.3 : 0.5,
    rotationX: askAI ? Math.PI * -0.15 : 0,
    config: springConfigs.heavyAndSlow,
    delay: 1000,
  });

  /**Set FALSE section**/
  const path = usePathname();
  useEffect(() => {
    setAskAI(false);
  }, [setAskAI, path]);

  /**JSX**/
  return (
    <animated.group
      dispose={null}
      // rotation-x={rotationX}
      // position-z={positionZ}
      // position-y={positionY}
      rotation-x={Math.PI * -0.15}
      position-z={-0.1}
      position-y={-0.3}
      // ref={groupRef}
    >
      <PhilosophersAnswers />
      <RaphaelPainting />
    </animated.group>
  );
};

export default Act5;
