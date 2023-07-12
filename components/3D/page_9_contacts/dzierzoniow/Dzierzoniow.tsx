'use client';
import React, { useRef } from 'react';
/**Components**/
import { DreiText } from '@/components';
/**THREE staff*/
import * as THREE from 'three';
/**BasicData*/
import { page3DConfigs } from '@/data/basicData';
import { animated, config, useSpring } from '@react-spring/three';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  isVisible: boolean;
}
/**-----------------**/
const Dzierzoniow = ({ groupProps, isVisible }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**Animate / */
  const { posZ } = useSpring({
    posZ: isVisible ? 0 : -1,
    config: isVisible ? config.molasses : { duration: 0 },
  });

  /**JSX**/
  return (
    <group {...groupProps} ref={groupRef}>
      <animated.group position-z={posZ}>
        {page3DConfigs.pageContacts.dzConfig.map(
          ({ text, position, rotation, scale }, index) => (
            <DreiText
              key={index}
              hasMatcap={false}
              text={text}
              position={new THREE.Vector3(...position)}
              rotation={new THREE.Euler(...rotation)}
              scale={scale && new THREE.Vector3(...scale)}
              color="white"
              textAlign="center"
              anchorX="center"
            />
          )
        )}
      </animated.group>
    </group>
  );
};

export default Dzierzoniow;
