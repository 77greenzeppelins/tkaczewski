import React, { useEffect, useMemo, useRef } from 'react';
/**Components**/
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff**/
import { useFrame, useThree } from '@react-three/fiber';
/**Shader staff**/
import fragmentShader from './fragmentShader';
import vertexShader from './vertexShader';
/** */
import { cameraSettings } from '@/data/basicData';

/**---------------------------**/
const Circle = () => {
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!);
  /*
  __1. staff necessary to calculate plane so that it covers the viewport
  */
  //__basic data
  const zPosition = -1.5;
  const scaleFactor = 0.01;
  //__staff from R3F state
  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;
  const aspect = width / height;
  // const distance = 0.5 / Math.tan((Math.PI * 0.5 * 45) / 180);
  // const cameraPosition = [0, 0, distance];
  //__calculations
  const distance = cameraSettings.z - zPosition; // distance between camera and plane
  const fov = cameraSettings.fov; // desired field of view
  const planeHeight = 2 * distance * Math.tan((fov * Math.PI) / 360);
  const scale = planeHeight / height;

  /*
  Section Animate / Manipulate / make shaders
  */
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new THREE.Color('#0b07ee') },
      u_colorB: { value: new THREE.Color('#058df5') },
    }),
    []
  );

  useFrame(state => {
    (
      meshRef.current.material as THREE.ShaderMaterial
    ).uniforms.u_time.value = 0;
    // state.clock.elapsedTime;
    // shaderMaterialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
  });

  //   useEffect(() => {
  //     console.log(
  //       'shaderMaterialRef',
  //       //__this is a type casting
  //       shaderMaterialRef.current.uniforms
  //     );
  //   }, []);

  /**JSX**/

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, zPosition]}
      //   rotation={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[scale * scaleFactor, scale * scaleFactor, scale * scaleFactor]}
    >
      <sphereGeometry args={[0.1, 30, 30]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        // wireframe={true}
        // ref={shaderMaterialRef}
        // depthWrite={false}
      />
    </mesh>
  );
};

export default Circle;

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
