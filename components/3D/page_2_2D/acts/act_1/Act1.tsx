'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**THREE staff*/
import * as THREE from 'three';
/**Components**/
import RaphaelPainting from '../act_5/raphaelPainting/RaphaelPainting';
/**Spring Staff*/
import { useSpring, animated } from '@react-spring/three';
/**BasicData*/
import { springConfigs } from '@/data/basicData';
import useWindowSize from '@/hooks/useWindowSize';
import { useFrame, useThree } from '@react-three/fiber';

/**HardCoded Staff*/
// const minWidthForAnimation = 769;
// const outOfScene = 0.35;
/**-----------------**/
const Act1 = () => {
  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**Responsivenes**/
  const { width } = useWindowSize();
  // const respScale = width > 460 ?
  /**Animations / Manipulations**/
  const state = useThree();
  // console.log('state:', state);
  useFrame(state => {
    groupRef.current.position.x = width >= 1024 ? 0.75 : 0;
    // console.log('state.mouse.x: ', state.mouse.x);
    // groupRef.current.rotation.y = THREE.MathUtils.lerp(
    //   groupRef.current.rotation.y,
    //   (state.mouse.x * Math.PI) / 4,
    //   0.05
    // );
    // groupRef.current.rotation.x = THREE.MathUtils.lerp(
    //   groupRef.current.rotation.x,
    //   (state.mouse.y * Math.PI) / -8,
    //   0.05
    // );
  });
  /*
  ___1. this spring animates initial move, when painting enters the scene...
  */
  // const { rotationX, rotationY } = useSpring({
  //   rotationX: 0,
  //   rotationY: Math.PI * -0.1,

  //   config: springConfigs.heavyAndSlow,
  //   delay: 1000,
  // });

  /**Set FALSE section**/
  const path = usePathname();
  useEffect(() => {
    setAskAI(false);
  }, [setAskAI, path]);

  /**JSX**/
  return (
    <animated.group
      ref={groupRef}
      scale={width < 460 ? [0.8, 0.8, 0.8] : [1, 1, 1]}
      dispose={null}
      // rotation-x={0}
      rotation-y={width >= 1024 ? Math.PI * -0.1 : 0}
      // position-x={width >= 1024 ? 0.75 : 0}
      position-y={width >= 1024 ? 0 : -0.45}
      //___if you wan to test component
      // rotation-x={Math.PI * -0.15}
      // position-z={-0.1}
      // position-y={-0.3}
      // ref={groupRef}
    >
      {/* <RaphaelPainting /> */}
    </animated.group>
  );
};

export default Act1;
