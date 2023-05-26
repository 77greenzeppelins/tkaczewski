'use client';
import React, { useRef } from 'react';
/**Components**/
import DreiText from '../../_Drei/text/DreiText';
/**THREE staff*/
import * as THREE from 'three';
/**BasicData*/
import { page3DConfigs } from '@/data/basicData';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  isVisible: boolean;
  // scrollProgress: MutableRefObject<number>;
}
/**-----------------**/
const Act4 = ({ groupProps, isVisible }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**JSX**/
  return (
    <group {...groupProps} ref={groupRef} visible={isVisible}>
      {page3DConfigs.act2.text3.map(({ text, position, rotation }, index) => (
        <DreiText
          key={index}
          hasMatcap={true}
          text={text}
          position={new THREE.Vector3(...position)}
          rotation={new THREE.Euler(...rotation)}
          color="white"
          textAlign="center"
          anchorX="center"
        />
      ))}

      {/* <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ></Float> */}
    </group>
  );
};

export default Act4;
