'use client';
import React, { useRef } from 'react';
/**Components**/
import DreiText from '../../../_Drei/text/DreiText';
/**THREE staff*/
import * as THREE from 'three';
/**BasicData*/
import { page3DConfigs } from '@/data/basicData';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
}
/**-----------------**/
const Act4 = ({ groupProps }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**JSX**/
  return (
    <group {...groupProps} ref={groupRef}>
      {page3DConfigs.text3.map(({ text, position, rotation }, index) => (
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
    </group>
  );
};

export default Act4;
