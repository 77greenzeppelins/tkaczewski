import React, { useEffect, useMemo, useRef } from 'react';
/**Components**/
import ThreePlane from '@/components/3D/basicShapes/plane/ThreePlane';
/**R3F Staff**/
import { useFrame, useThree } from '@react-three/fiber';
/**Shader staff**/
// import fragmentShader from '../fragmentShader';
// import vertexShader from '../vertexShader';
/** */
import { cameraSettings } from '@/data/basicData';
import * as THREE from 'three';
import fragmentShader from '../../planes/movingPlane/fragmentShader';
import vertexShader from '../../planes/movingPlane/vertexShader';

/**---------------------------**/
const PlaneShader = () => {
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!);
  /*
  __1. staff necessary to calculate plane so that it covers the viewport
  */
  //__basic data
  const zPosition = 0.5;
  const scaleFactor = 0.7;
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
      u_colorA: { value: new THREE.Color('#FFE486') },
      u_colorB: { value: new THREE.Color('#FEB3D9') },
    }),
    []
  );

  useFrame(state => {
    (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value =
      state.clock.elapsedTime;
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
      position={[0, 0, -0.5]}
      //   rotation={[0, 0, 0]}
      //   scale={0.02}
      rotation={[-Math.PI * 0.33, 0, 0]}
      //   scale={[scale * scaleFactor, scale * scaleFactor, scale * scaleFactor]}
    >
      <ThreePlane
        // argsWidth={width * scale * 1.2}
        // argsHeight={height * scale * 1.2}
        argsWidth={1 * aspect}
        argsHeight={1}
        widthSegments={32}
        heightSegments={32}
      />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshBasicMaterial wireframe /> */}
      <shaderMaterial
        // ref={shaderMaterialRef}
        // depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
      />
    </mesh>
  );
};

export default PlaneShader;

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
