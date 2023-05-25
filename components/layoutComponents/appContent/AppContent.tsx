'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**R3F Staff**/
import { Canvas } from '@react-three/fiber';
/**Drei Staff**/
import { Preload, Scroll, ScrollControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { usePathname } from 'next/navigation';
import CanvasContent from '@/components/3D/3D_Canvas/canvasContent/CanvasContent';
import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import { motion } from 'framer-motion';

/**--------------------------------------**/
const AppContent = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  /**Local State**/
  const [eventsRoot, setEventsRoot] = useState<HTMLDivElement>(null!);

  useEffect(() => {
    let eventSource = document.getElementById('root') as HTMLDivElement;
    setEventsRoot(eventSource);
  }, []);

  // console.log('...AppContent / children', children);

  /**JSX**/
  return (
    <Canvas
      eventSource={eventsRoot}
      eventPrefix="client"
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
    >
      <ScrollControls damping={0.5} pages={5}>
        {/* <ScrollableScene3D /> */}
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
            {/* <h1
              style={{
                position: 'absolute',
                top: '40vh',
                left: '0.5em',
                fontSize: '40vw',
                color: 'white',
              }}
            >
              to
            </h1> */}
            {/* <h1
              style={{
                position: 'absolute',
                top: '120vh',
                left: '60vw',
                fontSize: '10vw',
                color: 'white',
              }}
            >
              be
            </h1> */}
            {/* <h1
              style={{
                position: 'absolute',
                top: '198.5vh',
                left: '0.5vw',
                fontSize: '30vw',
                color: 'white',
              }}
            >
              hello
            </h1> */}
            {/* {children} */}
          </motion.div>
        </Scroll>
      </ScrollControls>
      <Perf
        position="bottom-right"
        // showGraph={width > 800 ? true : false}
        // // deepAnalyze={true}
        // minimal={width > 800 ? false : true}
      />
    </Canvas>
    // <MainCanvas>
    //   <CanvasContent>{children}</CanvasContent>
    // </MainCanvas>
  );
};

export default AppContent;
// <Canvas
//   eventSource={eventsRoot}
//   eventPrefix="client"
//   gl={{ antialias: false }}
//   dpr={[1, 1.5]}
//   camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
// >
//   <CanvasContent>{children}</CanvasContent>
//   {/* <Preload /> */}
//   {/* </Suspense> */}
//   <Perf position="top-left" />
// </Canvas>
