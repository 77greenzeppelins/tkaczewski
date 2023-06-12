'use client';
// import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
/**GlobalContext  Staff**/
// import { useGlobalContext } from '@/context/globalContext';
/**THREE staff*/
import * as THREE from 'three';
/**Components**/
// import RaphaelPainting from '../act_5/raphaelPainting/RaphaelPainting';
/**Spring Staff*/
import { useSpring, animated } from '@react-spring/three';
/**BasicData*/
// import { springConfigs } from '@/data/basicData';
import useWindowSize from '@/hooks/useWindowSize';
import { useFrame, useThree } from '@react-three/fiber';
import PointsBasic from '@/components/3D/basicShapes/points/pointsBasic/PointsBasic';
import PointsBuffered from '@/components/3D/basicShapes/points/pointsBuffered/PointsBuffered';
import PointsShader from '@/components/3D/basicShapes/points/pointsShader/PointsShader';
import PlaneShader from '@/components/3D/shaders/plane/3DObj/PlaneShader';

/**HardCoded Staff*/
// const minWidthForAnimation = 769;
// const outOfScene = 0.35;
/**-----------------**/
const Act1 = () => {
  /**GlobalContext  Section**/
  // const { askAI, setAskAI } = useGlobalContext();
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /** */
  const SCALE_FACTOR = 0.4;

  /**Responsivenes**/
  const { width } = useWindowSize();
  // const respScale = width > 460 ?
  /**Animations / Manipulations**/
  const state = useThree();
  // console.log('state:', state);
  useFrame((state, delta) => {
    // groupRef.current.rotation.x += delta * 0.01;
    // groupRef.current.rotation.y += delta * 0.05;
    // groupRef.current.rotation.z += delta * -0.02;
    // groupRef.current.position.x = width >= 1024 ? 0.75 : 0;
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
  // const path = usePathname();
  // useEffect(() => {
  //   setAskAI(false);
  // }, [setAskAI, path]);

  /**JSX**/
  return (
    <animated.group
      ref={groupRef}
      scale={
        width < 460
          ? [0.8 * SCALE_FACTOR, 0.8 * SCALE_FACTOR, 0.8 * SCALE_FACTOR]
          : [1 * SCALE_FACTOR, 1 * SCALE_FACTOR, 1 * SCALE_FACTOR]
      }
      dispose={null}
      // rotation-x={0}
      // rotation-y={width >= 1024 ? Math.PI * -0.1 : 0}
      // position-x={width >= 1024 ? 0.75 : 0}
      // position-y={width >= 1024 ? 0 : -0.45}
      position-z={0.6}
      //___if you wan to test component
      // rotation-x={Math.PI * -0.15}
      // position-z={-0.1}
      // position-y={-0.3}
      // ref={groupRef}
    >
      {/* <PointsBasic pointSize={0.0025} /> */}

      {/* <PointsBuffered
        verticesNumber={2000}
        shape={'sphere'}
        pointSize={0.001}
      /> */}
      {/* <PointsShader verticesNumber={2000} shape={'sphere'} pointSize={0.001} /> */}
      <PlaneShader />
    </animated.group>
  );
};

export default Act1;
