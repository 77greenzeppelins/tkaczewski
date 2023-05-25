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

/**--------------------------------------**/
const AppContentScrollControls = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      {/* <Suspense fallback={null}> */}
      <ScrollControls damping={4} pages={3}>
        <ScrollableScene3D />
        {/* <Scroll>
            <Images />
          </Scroll> */}
        {/* <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
            <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
            <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1>
          </Scroll> */}
      </ScrollControls>
      {/* <Preload /> */}
      {/* </Suspense> */}
      <Perf position="top-left" />
    </Canvas>
  );
};

export default AppContentScrollControls;
