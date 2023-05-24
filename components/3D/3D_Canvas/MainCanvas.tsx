'use client';
import React, { MutableRefObject, useEffect, useState } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff**/
import { Canvas } from '@react-three/fiber';
/**Drei Staff*/
import { PerspectiveCamera } from '@react-three/drei/core/PerspectiveCamera';
/**Components**/
import Scene3D from '../3D_Scene/Scene3D';
/**Monitoring Staff**/
import { Perf } from 'r3f-perf';
/**Hooks*/
import useWindowSize from '@/hooks/useWindowSize';

// /**FramerMotion Staff*/
// import { MotionValue } from 'framer-motion';

/**TS**/ interface Props {
  scrollProgress: MutableRefObject<number>;
  direction: MutableRefObject<number>;
  // scrollYProgress: MotionValue<number>;
}

/**--------------------------------------------**/
/*
default version of <Canvas> includs initial-settings of this element: scene, camera, renderer, antialias, encoding, etc.
we can set the attributes of camera her;
we can't play / animate with camera's attributer within useFrame() here!
*/
const MainCanvas = ({ scrollProgress, direction }: Props) => {
  /**Local State**/
  const [eventsRoot, setEventsRoot] = useState<HTMLDivElement>(null!);

  useEffect(() => {
    let eventSource = document.getElementById('root') as HTMLDivElement;
    setEventsRoot(eventSource);
  }, []);

  /**...*/
  const { width } = useWindowSize();

  /**JSX**/
  return (
    <Canvas
      // eventSource={ccc}
      eventSource={eventsRoot}
      // eventSource={x.current}
      // dpr={[1, 2]} // Canvas has this values in default settings
      // flat // means no toneMapping is applied = only default collors of odjects = no pseudo-HDR
      gl={{
        antialias: true,
        // toneMapping: THREE.CineonToneMapping,
        toneMapping: THREE.ACESFilmicToneMapping,
        // outputEncoding: THREE.LinearEncoding // depricated
        // outputColorSpace: 'srgb',
      }}
      camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
      //default: camera={{ position: [0, 0, 5],fov: 75, near: 0.1, far: 1000, zoom: 1 }}
      // onCreated={whileCanvasMounted}
      // onCreated={({ gl }) => {
      //   gl.toneMapping = THREE.NoToneMapping;
      // }}
    >
      {/* <PerspectiveCamera
        makeDefault
        //
        // name="customePerspectiveCamera"
        // ref={cameraRef}
        position={[0, 0, 3]}
        far={5} //_____comments below
        fov={45}
      ></PerspectiveCamera> */}
      <Scene3D
        // scrollYProgress={scrollYProgress}
        scrollProgress={scrollProgress}
        direction={direction}
      />
      <Perf
        position="bottom-right"
        showGraph={width > 800 ? true : false}
        // deepAnalyze={true}
        minimal={width > 800 ? false : true}
      />
    </Canvas>
  );
};

export default MainCanvas;

//___camera={{ fov: 10, position: [0, 0, -5] }}
