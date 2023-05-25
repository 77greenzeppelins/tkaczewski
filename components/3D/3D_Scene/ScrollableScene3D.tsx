import * as THREE from 'three';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';

import BasicFrame from '../customeObjects/frame/BasicFrame';
import ImageCanvas from '../customeObjects/imageCanvas/ImageCanvas';
import { imagesData, page3DConfigs } from '@/data/basicData';
import DreiText from '../_Drei/text/DreiText';

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}
/**-------------------------------**/
const ScrollableScene3D = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);
  const botticelliRef = useRef<THREE.Group>(null!);
  /**------------------**/
  /**...*/
  //   const scroll = useScroll();
  const scrollProg = useRef<number>(0);

  /*
  ----------------------
  */
  const [scrollY, setScrollY] = useState(0);
  // const [size, setSize] = useState('');

  //   const onScroll = useCallback(() => {
  //     const { pageYOffset, scrollY } = window;
  //     console.log('yOffset', pageYOffset, 'scrollY', scrollY);
  //     setScrollY(window.pageYOffset);
  //   }, []);

  useEffect(() => {
    //   const onResize = () => {
    //     if (window.innerWidth > 800) {
    //       console.log('window.innerWidth > 800');
    //       setSize('more then 800');
    //     } else {
    //       console.log('window.innerWidth < 800');
    //       setSize('less then 800');
    //     }
    //   };

    const onScroll = () => {
      const { pageYOffset, scrollY } = window;
      console.log('yOffset', pageYOffset, 'scrollY', scrollY);
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', onScroll); //, { passive: true }
    //document.body.
    //___remove event on unmount to prevent a memory leak
    () => window.removeEventListener('scroll', onScroll);
  }, []);

  /*
  -----------------------
  */

  useFrame(state => {
    //__ used with scrollProgress taken from onScroll in main ontainer;
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      scrollY / 200,
      // 0.05
      0.1
    );
    //__main engin; based on Drei useScroll & ScrollControls staff
    // groupRef.current.position.z = scroll.offset * 40;

    //__just to interact with cursor
    botticelliRef.current.rotation.y = THREE.MathUtils.lerp(
      botticelliRef.current.rotation.y,
      (state.mouse.x * Math.PI) / 8,
      0.05
    );
  });
  return (
    <>
      {/* <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        //
        // name="customePerspectiveCamera"
        // ref={cameraRef}
        position={[0, 0, 3]}
        far={5} //_____comments below
        fov={45}
      ></PerspectiveCamera> */}
      {/*-----Canvas Infrastructure--------------------------------*/}
      {/* <fog attach="fog" args={['#01030d', 3, 4.3]} /> */}
      {/* <color attach="background" args={[colors.dark]} /> */}
      {/* <OrbitControls makeDefault enableZoom={false} /> */}
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/*-----Canvas Content--------------------------------*/}
      <group
        // position-z={transformedYProgress}
        ref={groupRef}
      >
        {/* <CameraControler
          scrollProgress={scrollProgress}
          meshProps={{ position: [0, 0, 0], scale: [0.5, 0.5, 0.5] }}
        /> */}
        <group ref={botticelliRef} position={[0, 0, 0]}>
          <BasicFrame groupProps={{ scale: [0.86, 1, 1.13] }} />
          <ImageCanvas
            meshProps={{ scale: [0.9, 0.85, 0.85] }}
            argsWidth={imagesData.botticelliVenus.width * 2}
            argsHeight={imagesData.botticelliVenus.height * 2}
            image={imagesData.botticelliVenus.path}
          />
        </group>
        {/* <group>
          <DreiText
            hasMatcap={false}
            text={page3DConfigs.act2.text1}
            fontSize={0.25}
            color="white"
            textAlign="center"
            maxWidth={2}
            anchorX="center"
          />
        </group> */}
      </group>
    </>
  );
};

export default ScrollableScene3D;
