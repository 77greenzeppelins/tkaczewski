'use client';
import React, { useRef } from 'react';
/**THREE staff*/
import * as THREE from 'three';
/**Components**/
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
import MovingPlane from '@/components/3D/shaders/planes/movingPlane/MovingPlane';

/**HardCoded Staff*/
// const minWidthForAnimation = 769;
// const outOfScene = 0.35;
/**-----------------**/
const Act2 = () => {
  /**References**/
  // const groupRef = useRef<THREE.Group>(null!);

  /** */
  const SCALE_FACTOR = 0.2;

  /**Responsivenes**/
  const { width } = useWindowSize();
  // const respScale = width > 460 ?
  /**Animations / Manipulations**/

  /*
  ...
  */
  const { viewport, size } = useThree();
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const aspect = viewportWidth / viewportHeight;

  /*
  ...
  */

  /**JSX**/
  return (
    <animated.group

    // scale={
    //   width < 460
    //     ? [0.8 * SCALE_FACTOR, 0.8 * SCALE_FACTOR, 0.8 * SCALE_FACTOR]
    //     : [1 * SCALE_FACTOR, 1 * SCALE_FACTOR, 1 * SCALE_FACTOR]
    // }
    // dispose={null}
    // position-z={0.6}
    >
      {/* <PointsShader verticesNumber={2000} shape={'sphere'} pointSize={0.001} /> */}
      <PlaneShader />
      {/* <MovingPlane /> */}
    </animated.group>
  );
};

export default Act2;
