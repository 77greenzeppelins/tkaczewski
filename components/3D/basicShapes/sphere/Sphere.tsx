'use client';
import React, { useRef } from 'react';
/**R3F Staff**/
// import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
/**Reusable Staff*/
import FrameMatcapTexture from '../../_Drei/textures/frameMatcapTextures/FrameMatcapTexture';

/**TS**/
interface Props {
  meshProps: JSX.IntrinsicElements['mesh'];
  geometryProps?: JSX.IntrinsicElements['sphereGeometry'];
  materialProps?: {};
  matcapMaterial: boolean;
}

const Sphere = ({
  meshProps,
  geometryProps,
  materialProps,
  matcapMaterial,
}: Props) => {
  /**References Section**/
  const meshRef = useRef<THREE.Mesh>(null!);
  /**useFrame Section**/
  useFrame((_, delta) => {
    //__it's a matter of a "frame rate" => how much time has passed since the last frame; it's a delta
    // console.log('delta:', delta);
    // meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.y += delta * 0.1;
  });
  /**useThree Section**/
  // useThree(state => {
  //   console.log('Sphere / state:', state);
  // });

  /**JSX**/
  return (
    <mesh ref={meshRef} {...meshProps}>
      <sphereGeometry {...geometryProps} />
      {matcapMaterial ? (
        <FrameMatcapTexture textureIndex={'1'} />
      ) : (
        <meshBasicMaterial {...materialProps} />
      )}
    </mesh>
  );
};

export default Sphere;
