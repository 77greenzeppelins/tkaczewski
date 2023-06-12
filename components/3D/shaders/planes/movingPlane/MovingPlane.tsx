import React, { useEffect, useMemo, useRef } from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**R3F Staff**/
import { useFrame } from '@react-three/fiber';
/**Shader staff**/
import fragmentShader from './fragmentShader';
import vertexShader from './vertexShader';
/** */
import { cameraSettings } from '@/data/basicData';

/**---------------------------**/
const MovingPlane = () => {
  /**References**/
  const mesh = useRef<THREE.Mesh>(null!);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new THREE.Color('#FFE486') },
      u_colorB: { value: new THREE.Color('#FEB3D9') },
    }),
    []
  );

  useFrame(state => {
    const { clock } = state;
    (mesh.current.material as THREE.ShaderMaterial).uniforms.u_time.value =
      clock.getElapsedTime();
  });

  /**JSX**/

  return (
    <mesh
      ref={mesh}
      position={[0, 0, -0.5]}
      rotation={[-Math.PI * 0.3, 0, 0]}
      scale={1}
    >
      <planeGeometry args={[1, 1, 16, 16]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        // wireframe={true}
      />
    </mesh>
  );
};

export default MovingPlane;

/**Drei Staff**/
// import { Plane } from '@react-three/drei';
//   return (
//     <Plane
//       args={[width, height, 10, 10]}
//       position={[0, 0, 0.5]}
//       //   scale={[0.031, 0.031, 0.031]}
//       scale={[scale * 0.99, scale * 0.99, scale * 0.99]}
//     >
//       {/* <boxGeometry args={[1, 1, 1]} /> */}
//       {/* <meshBasicMaterial wireframe /> */}
//       <shaderMaterial
//         ref={shaderMaterialRef}
//         depthWrite={false}
//         fragmentShader={fragmentShader}
//         vertexShader={vertexShader}
//         uniforms={uniforms}
//       />
//     </Plane>
//   );
