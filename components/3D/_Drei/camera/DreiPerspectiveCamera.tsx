'use client';
import React, { useEffect, useRef, useState } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**Drei Staff*/
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
/**Components**/
// import ThreePlane from '../../basicShapes/plane/ThreePlane';
/**Hook from Provider*/
// import { useBasicMaterial } from '../../_Three/materials/basicMaterial/ThreeBasicMaterial';
/**Hook to follow path changes*/
// import { usePathname } from 'next/navigation';
/**FramerMotion Staff*/
// import { AnimatePresence } from 'framer-motion';

/**-----------------------------------**/
const DreiPerspectiveCamera = () => {
  const cameraRef = useRef(null);
  /**Material from Provider**/
  // const basicMaterial = useBasicMaterial();
  /**...*/
  // const path = usePathname();

  /**....**/
  const [mounted, setMounted] = useState(true);

  // useEffect(() => {
  //   setMounted(false);
  //   console.log('...useEffect / path:', path);

  //   const timer = setTimeout(() => {
  //     setMounted(true);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [path]);

  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;
  //_approach_1
  // const cameraDistance = 1; // adjust as needed
  // const fov = 2 * Math.atan(height / (2 * cameraDistance)) * (180 / Math.PI);

  const aspect = width / height;
  const distance = 0.5 / Math.tan((Math.PI * 0.5 * 45) / 180);
  const cameraPosition = [0, 0, distance];

  /**JSX**/
  return (
    <>
      {mounted && (
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          /*
          settings from canvase's default cam
          camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
          */
          // position={[0, 0, 1]}
          // fov={45}
          near={0.01}
          far={50}
          position={new THREE.Vector3(...cameraPosition)}
          fov={45}
          aspect={aspect}
        >
          {/* <AnimatePresence> */}
          {/* {mounted && (
        <motion.mesh
          key={path}
          // ref={meshRef}
          position={[0, 0, -0.01]}
          // scale={[0.0025, 0.0025, 0.0025]}
          scale={[0.5, 0.5, 0.5]}
          //  {...meshProps}
          // visible={false}
          // material={basicMaterial}
          // animate={{position:[0.5,0,0]}}
        >
          <ThreePlane argsWidth={1} argsHeight={1} />
          <meshBasicMaterial color={colors.corpo} />
        </motion.mesh>
      )} */}
          {/* </AnimatePresence> */}
        </PerspectiveCamera>
      )}
    </>
  );
};

export default DreiPerspectiveCamera;
