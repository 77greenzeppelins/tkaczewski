'use client';
import React, { useRef } from 'react';
/**Components**/
import { DreiText } from '@/components';
/**THREE staff*/
import * as THREE from 'three';
/**BasicData*/
import { page3DConfigs } from '@/data/basicData';
import { useFrame } from '@react-three/fiber';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
}
/**-----------------**/
const Act5 = ({ groupProps }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);
  /**...*/

  useFrame((state, delta) => {
    groupRef.current.rotation.z += delta * 0.5;
  });

  /**JSX**/
  return (
    <group {...groupProps}>
      <DreiText
        hasMatcap={true}
        text={page3DConfigs.text4.text}
        position={new THREE.Vector3(...page3DConfigs.text4.position)}
        // rotation={new THREE.Euler(...rotation)}
        color="white"
        textAlign="center"
        anchorX="center"
      />
      <group
        ref={groupRef}
        // rotation={new THREE.Euler(0, 0, 0)}
        position={new THREE.Vector3(0, 0.1, 0)}
      >
        {page3DConfigs.text4b.map(({ text, position }, index) => {
          return (
            <DreiText
              key={index}
              hasMatcap={true}
              text={text}
              position={new THREE.Vector3(...position)}
              color="white"
              textAlign="center"
              anchorX="center"
            />
          );
        })}
      </group>
    </group>
  );
};

export default Act5;
