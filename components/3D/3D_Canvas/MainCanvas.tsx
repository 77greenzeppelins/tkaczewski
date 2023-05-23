'use client';
import React, { ReactNode } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff**/
import { Canvas } from '@react-three/fiber';
/**BasicData*/
import { colors } from '@/data/basicData';
/**Monitoring Staff**/
import { Perf } from 'r3f-perf';

/**TS**/
interface Props {
  children: ReactNode;
}

/**--------------------------------------------**/
/*
default version of <Canvas> includs initial-settings of this element: scene, camera, renderer, antialias, encoding, etc.
we can set the attributes of camera her;
we can't play / animate with camera's attributer within useFrame() here!
*/
const MainCanvas = ({ children }: Props) => {
  /**about document...**/
  let eventsRoot;
  if (typeof document !== 'undefined') {
    // you are safe to use the "document" object here
    console.log('MainCanvas / document.location.href:', document.location.href);
    // eventsRoot = document.getElementById('container2D') as HTMLDivElement;
    eventsRoot = document.getElementById('root') as HTMLDivElement;
    console.log('MainCanvas / eventsRoot:', eventsRoot);
  } else {
    console.log('MainCanvas : document === undefined');
  }
  // const eventsRoot = document.getElementById('container2D') as HTMLDivElement;
  // console.log('eventsRoot', eventsRoot);
  /**Call this function when Canvas is ready*/
  // const whileCanvasMounted = (state: { gl: any; scene: any }) => {
  //   state.gl.setClearColor(colors.dark, 1); // color, alpha
  //   // state.scene.background = new THREE.Color(colors.corpo);
  // };
  /**JSX**/
  return (
    <Canvas
      eventSource={eventsRoot}
      // eventSource={
      //   document.getElementById('root') !== null &&
      //   document.getElementById('root')
      // }
      // dpr={[1, 2]} // has this values in default settings
      // flat // no toneMapping = only defoult collors; no pseudo-HDR
      gl={{
        antialias: true,
        //  toneMapping: THREE.CineonToneMapping
        toneMapping: THREE.ACESFilmicToneMapping,
        // outputEncoding: THREE.LinearEncoding // depricated
        // outputColorSpace: 'srgb',
      }}
      camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 1000 }}
      //default: camera={{ position: [0, 0, 5],fov: 75, near: 0.1, far: 1000, zoom: 1 }}
      // onCreated={whileCanvasMounted}
    >
      {children}
      <Perf position="bottom-right" />
    </Canvas>
  );
};

export default MainCanvas;

//___camera={{ fov: 10, position: [0, 0, -5] }}
