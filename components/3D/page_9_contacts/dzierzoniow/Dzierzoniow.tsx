'use client';
import React, { useRef } from 'react';
/**Components**/
import { DreiText } from '@/components';
// import DreiText from '../../../_Drei/text/DreiText';
/**THREE staff*/
import * as THREE from 'three';
/**BasicData*/
import { page3DConfigs } from '@/data/basicData';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
}
/**-----------------**/
const Dzierzoniow = ({ groupProps }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**JSX**/
  return (
    <group {...groupProps} ref={groupRef}>
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
    </group>
  );
};

export default Dzierzoniow;
