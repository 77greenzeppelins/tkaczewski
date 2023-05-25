import React from 'react';
import { usePathname } from 'next/navigation';
/**Drei Staff**/
import { Scroll, ScrollControls } from '@react-three/drei';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
/**Components**/
import ScrollableScene3D from '../../3D_Scene/ScrollableScene3D';

//___{ children }: { children: React.ReactNode }
/**----------------------------------------------------------------------**/
const CanvasContent = () => {
  /**...**/
  const path = usePathname();

  /**JSX**/
  return (
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
          <h1
            style={{
              position: 'absolute',
              top: '198.5vh',
              left: '0.5vw',
              fontSize: '30vw',
              color: 'white',
            }}
          >
            hello
          </h1>
          {/* {children} */}
        </motion.div>
      </Scroll>
    </ScrollControls>
  );
};

export default CanvasContent;
