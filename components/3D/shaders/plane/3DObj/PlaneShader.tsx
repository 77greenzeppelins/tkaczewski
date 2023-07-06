import React, { useEffect, useMemo, useRef } from 'react';
/**Components**/
import ThreePlane from '@/components/3D/basicShapes/plane/ThreePlane';
/**R3F Staff**/
import { useFrame, useThree } from '@react-three/fiber';
/**Shader staff**/
import fragmentShader from '../basicShaders/fragmentShader';
import vertexShader from '../basicShaders/vertexShader';
/** */
import { cameraSettings } from '@/data/basicData';
import * as THREE from 'three';

/**TS**/
interface Props {
  position?: number[];
  rotation?: number[];
  scale?: number[];
  planeWidthSegments?: number;
  planeHeightSegments?: number;
}
/**---------------------------**/
const PlaneShader = ({
  position = [0, 0, 0],
  rotation,
  scale,
  planeWidthSegments = 1,
  planeHeightSegments = 1,
}: Props) => {
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!);
  /*
  __1. staff necessary to calculate plane so that it covers the viewport
  */
  //__basic data
  // const zPosition = position[2];
  //__staff from R3F state
  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;
  const aspect = width / height;
  // const distance = 0.5 / Math.tan((Math.PI * 0.5 * 45) / 180);
  // const cameraPosition = [0, 0, distance];
  //__calculations
  // const distance = cameraSettings.z - zPosition; // distance between camera and plane
  // const fov = cameraSettings.fov; // desired field of view
  // const specPlaneHeight = 2 * distance * Math.tan((fov * Math.PI) / 360);
  // const finalScale = specPlaneHeight / height;

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
      position={position ? new THREE.Vector3(...position) : [0, 0, 0]}
      rotation={rotation ? new THREE.Euler(...rotation) : [0, 0, 0]}
    >
      <ThreePlane
        argsWidth={1 * aspect}
        argsHeight={1}
        widthSegments={planeWidthSegments}
        heightSegments={planeHeightSegments}
      />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshBasicMaterial wireframe /> */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
        // ref={shaderMaterialRef}
        // depthWrite={false}
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
