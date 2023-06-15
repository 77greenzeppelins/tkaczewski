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

/**Components**/
import MovingPlane from '@/components/3D/shaders/planes/movingPlane/MovingPlane';
import PlaneShader from '@/components/3D/shaders/plane/3DObj/PlaneShader';
import PointsBasic from '@/components/3D/basicShapes/points/pointsBasic/PointsBasic';
import PointsBuffered from '@/components/3D/basicShapes/points/pointsBuffered/PointsBuffered';
import PointsShader from '@/components/3D/basicShapes/points/pointsShader/PointsShader';
import DustyBackground from '@/components/3D/customeObjects/particleSystems/instancedMeshConcept/dustyBackground/DustyBackground';
import BackgroundPlane from '@/components/3D/shaders/planes/backgroundPlane/BackgroundPlane';
import { Circle } from '@react-three/drei';
import PointsFBO from '@/components/3D/customeObjects/particleSystems/pointsFBO/PointsFBO';
import PointsFBO3 from '@/components/3D/customeObjects/particleSystems/pointsFBO/PointsFBO3';

/**HardCoded Staff*/
// const minWidthForAnimation = 769;
// const outOfScene = 0.35;
/**-----------------**/
const Act2 = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /** */
  const SCALE_FACTOR = 0.2;

  /**Responsivenes**/
  const { width } = useWindowSize();
  // const respScale = width > 460 ?
  /**Animations / Manipulations**/

  /*
  ...
  */
  const { viewport } = useThree();
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const aspect = viewportWidth / viewportHeight;

  /**useFrame Section**/
  useFrame(state => {
    // console.log('state.mouse.x: ', state.mouse.x);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      (state.mouse.x * Math.PI) / 8,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      (state.mouse.y * Math.PI) / -30,
      0.05
    );
  });
  /*
  ...
  */
  const mouse = useRef([0, 0]);

  /**JSX**/
  return (
    <animated.group ref={groupRef}>
      <PointsFBO />
      {/* <PointsShader verticesNumber={2000} shape={'sphere'} radius={0.5} /> */}
      {/* <PointsFBO3 verticesNumber={2000} shape={'sphere'} radius={0.5} /> */}
    </animated.group>
  );
};

export default Act2;

// <Circle />

// <BackgroundPlane />

// <DustyBackground itemsNumber={500} mouse={mouse} />

// <PointsShader verticesNumber={2000} shape={'sphere'} radius={0.5} />

// <PlaneShader />

// <MovingPlane />
