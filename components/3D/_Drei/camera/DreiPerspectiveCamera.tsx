'use client';
import React, { useEffect, useState } from 'react';
/**Drei Staff*/
import { PerspectiveCamera } from '@react-three/drei';
/**Components**/
import ThreePlane from '../../basicShapes/plane/ThreePlane';
/**Hook from Provider*/
import { useBasicMaterial } from '../../_Three/materials/basicMaterial/ThreeBasicMaterial';
/**Hook to follow path changes*/
import { usePathname } from 'next/navigation';
/**FramerMotion Staff*/
// import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion-3d';
/*Basic Data*/
import { colors } from '@/data/basicData';

/**-----------------------------------**/
const DreiPerspectiveCamera = () => {
  /**Material from Provider**/
  const basicMaterial = useBasicMaterial();
  /**...*/
  const path = usePathname();

  /**....**/
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(false);
    console.log('...useEffect / path:', path);

    const timer = setTimeout(() => {
      setMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [path]);

  /**JSX**/
  return (
    <>
      {mounted && (
        <PerspectiveCamera
          //   ref={cameraRef}
          makeDefault
          /*
      settingd from canvase's default cam
      camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
      */
          position={[0, 0, 3]}
          near={0.01}
          far={50}
          fov={45}
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
