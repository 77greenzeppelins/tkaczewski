'use client';
import React, { useRef, useState } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import BasicFrame from '../../../customeObjects/frame/BasicFrame';
import ImageCanvas from '../../../customeObjects/imageCanvas/ImageCanvas';
/**Hooks**/
import useWindowSize from '@/hooks/useWindowSize';
/**THREE staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Spring Staff*/
// import { useTransition, config } from '@react-spring/web';
// import { animated } from '@react-spring/three';

import { useSpring, animated, config } from '@react-spring/three';
/**BasicData*/
import { imagesData } from '@/data/basicData';
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
  const [active, setActive] = useState(false);

  /**GlobalContext  Section**/
  const { askAI } = useGlobalContext();
  /*
-----------
  */

  const { scale, rotation, position } = useSpring({
    position: askAI ? 0 : -1.5,
    scale: askAI ? 0.8 : 1,
    rotation: askAI ? Math.PI : 0,
    // config: config.wobbly,
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
      // delay: 1000,
    },
    delay: 2000,
  });

  // const { spring } = useSpring({
  //   spring: active,
  //   // config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  //   config: config.wobbly,
  // });

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

  /**JSX**/
  return (
    <group
      dispose={null}
      // ref={groupRef}
      // scale={scale}
      // onClick={() => setActive(!active)}
    >
      <animated.group
        {...groupProps}
        // scale={scale}
        // scale-x={scale}
        // scale-y={scale}
        position-z={position}
        // rotation-z={rotation}
        // onClick={() => setActive(!active)}
      >
        <BasicFrame meshProps={{ scale: [1, 1, 1] }} />
        <ImageCanvas
          meshProps={{ scale: [0.57, 0.59, 1] }}
          argsWidth={imagesData.raphaelSchool.width * 2}
          argsHeight={imagesData.raphaelSchool.height * 2}
          image={imagesData.raphaelSchool.path}
        />
      </animated.group>
    </group>
  );
};

export default Act5;
