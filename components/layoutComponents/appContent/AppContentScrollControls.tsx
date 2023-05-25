'use client';

import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import ScrollableScene3D from '@/components/3D/3D_Scene/ScrollableScene3D';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

/**--------------------------------------**/
const AppContentScrollControls = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();

  /**JSX**/
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
    >
      {/* <Suspense fallback={null}> */}
      <ScrollControls damping={0.5} pages={5}>
        <ScrollableScene3D />
        <Scroll html>
          <motion.div
            key={path}
            data-scroll-container
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full h-full"
            // onClick={() => console.log('....clicked')}
          >
            <h1
              style={{
                position: 'absolute',
                top: '40vh',
                left: '0.5em',
                fontSize: '40vw',
                color: 'white',
              }}
            >
              to
            </h1>
            <h1
              style={{
                position: 'absolute',
                top: '120vh',
                left: '60vw',
                fontSize: '10vw',
                color: 'white',
              }}
            >
              be
            </h1>
            <h1
              style={{
                position: 'absolute',
                top: '198.5vh',
                left: '0.5vw',
                fontSize: '40vw',
                color: 'white',
              }}
            >
              home
            </h1>
          </motion.div>
        </Scroll>
      </ScrollControls>
      {/* <Preload /> */}
      {/* </Suspense> */}
      <Perf position="top-left" />
    </Canvas>
  );
};

export default AppContentScrollControls;
