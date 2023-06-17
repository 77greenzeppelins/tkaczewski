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
import { basicConfigs, springConfigs, page3DConfigs } from '@/data/basicData';
import useWindowSize from '@/hooks/useWindowSize';

/**HardCoded Staff*/
// const minWidthForAnimation = 769;
// const outOfScene = 0.35;
/**-----------------**/
const Act5 = () => {
  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();
  /**Responsivenes**/
  const { width } = useWindowSize();
  const RESP_SCALE = width >= basicConfigs.respTreshold;
  /**spread Data*/
  const { springPositionsZ, springPositionsY, springRotationX, springDelay } =
    page3DConfigs.pageCV.act5Config;
  /*
  ___1. this spring animates initial move, when painting enters the scene...
  */
  const { positionZ, rotationX, positionY } = useSpring({
    positionZ: askAI ? springPositionsZ[1] : springPositionsZ[0],
    positionY: askAI ? springPositionsY[1] : springPositionsY[0],
    rotationX: askAI ? springRotationX[1] : springRotationX[0],
    config: springConfigs.heavyAndSlow,
    delay: springDelay,
  });

  /**Set FALSE section**/
  const path = usePathname();
  useEffect(() => {
    setAskAI(false);
  }, [setAskAI, path]);

  /**JSX**/
  return (
    <animated.group
      scale={RESP_SCALE ? [1, 1, 1] : [0.75, 0.75, 0.75]}
      dispose={null}
      rotation-x={rotationX}
      position-z={positionZ}
      position-y={positionY}
      //___if you wan to test component
      // rotation-x={Math.PI * -0.15}
      // position-z={-0.1}
      // position-y={-0.3}
      // ref={groupRef}
      // visible={askAI}
    >
      <PhilosophersAnswers enable={askAI} />
      <RaphaelPainting />
    </animated.group>
  );
};

export default Act5;
