'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import BasicFrame from '../../../customeObjects/frame/BasicFrame';
import ImageCanvas from '../../../customeObjects/imageCanvas/ImageCanvas';
/**THREE staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Spring Staff*/
// import { useTransition, config } from '@react-spring/web';
// import { animated } from '@react-spring/three';

import { useSpring, animated } from '@react-spring/three';
/**BasicData*/
import { imagesData, springConfigs } from '@/data/basicData';
import MouseMoveGesture from '@/utils/gestures/mouseMoveGesture/mouseMoveGesture';

/**HardCoded Staff*/
const minWidthForAnimation = 769;
// const outOfScene = 0.35;

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  // geometryProps?: JSX.IntrinsicElements['sphereGeometry'];
}
/**-----------------**/
const Act5 = ({ groupProps }: Props) => {
  /**References**/
  // const groupRef = useRef<THREE.Group>(null!);

  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();

  /*
-----------
  */

  const { positionZ, rotationX } = useSpring({
    positionZ: askAI ? 0 : -1.7,
    rotationX: askAI ? Math.PI * -0.2 : 0,
    config: springConfigs.heavyAndSlow,
    delay: 1000,
  });
  //___?
  // const scale = spring.to([0, 1], [1, 5]);
  // const rotation = spring.to([0, 1], [0, Math.PI]);

  /**useFrame Section**/
  // useFrame(state => {
  //   // console.log('state.mouse.x: ', state.mouse.x);
  //   groupRef.current.rotation.y = THREE.MathUtils.lerp(
  //     groupRef.current.rotation.y,
  //     (state.mouse.x * Math.PI) / 4,
  //     0.05
  //   );
  //   groupRef.current.rotation.x = THREE.MathUtils.lerp(
  //     groupRef.current.rotation.x,
  //     (state.mouse.y * Math.PI) / -8,
  //     0.05
  //   );
  // });

  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [x, y] = MouseMoveGesture({
    enabled: true,
    tileFactorX: 0.15,
    tileFactorY: 0.15,
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
      rotation-x={rotationX}
      position-z={positionZ}

      // ref={groupRef}
    >
      <animated.group {...groupProps} rotation-x={x} rotation-y={y}>
        <BasicFrame meshProps={{ scale: [1, 1, 1] }} />
        <ImageCanvas
          meshProps={{ scale: [0.57, 0.59, 1] }}
          argsWidth={imagesData.raphaelSchool.width * 2}
          argsHeight={imagesData.raphaelSchool.height * 2}
          image={imagesData.raphaelSchool.path}
        />
      </animated.group>
    </animated.group>
  );
};

export default Act5;
function usePathName() {
  throw new Error('Function not implemented.');
}
