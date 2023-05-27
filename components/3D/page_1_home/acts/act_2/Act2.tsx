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
const Act2 = ({ groupProps }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**JSX**/
  return (
    <group {...groupProps} ref={groupRef}>
      {page3DConfigs.text1.map(({ text, position }, index) => (
        <DreiText
          key={index}
          hasMatcap={true}
          text={text}
          position={new THREE.Vector3(...position)}
          color="white"
          textAlign="center"
          // maxWidth={state.size.width > 1000 ? 2 : 1}
          anchorX="center"
        />
      ))}
    </group>
  );
};

export default Act2;
