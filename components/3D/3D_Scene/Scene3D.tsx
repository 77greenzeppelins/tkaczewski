'use client';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
/**Components**/
import Act1 from '../acts/act_1/Act1';
import Act2 from '../acts/act_2/Act2';
import CameraControler from '../customeObjects/cameraControler/CameraControler';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Drei Staff*/
// import { PerspectiveCamera } from '@react-three/drei/core/PerspectiveCamera';
import { PerspectiveCamera } from '@react-three/drei/native';
/**Basic Data**/
import { pagesLinks } from '@/data/basicData';

/**TS**/
interface Props {
  scrollProgress: MutableRefObject<number>;
  direction: MutableRefObject<number>;
}

pagesLinks;
/**--------------------**/
const Scene3D = ({ scrollProgress, direction }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /*Basic Test for touchScreens*/
  const [isTouch, setTouch] = useState(false);
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setTouch(isTouch);
  }, []);

  /**Animations / Manipulations**/
  useFrame((state, delta) => {
    /*
  (!) Main engine that allow to travel on z-axis moving canvase's content, not camera;
  */
    // groupRef.current.position.z = THREE.MathUtils.lerp(
    //   groupRef.current.position.z,
    //   scrollProgress.current * 10,
    //   0.05
    // );
    // cameraRef.current.position.z = THREE.MathUtils.lerp(
    //   groupRef.current.position.z,
    //   scrollProgress.current * 10,
    //   0.05
    // );
  });
  /**JSX**/
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
      <fog attach="fog" args={['#01030d', 3, 3.5]} />
      {/* <color attach="background" args={[colors.dark]} /> */}
      {/* <OrbitControls makeDefault enableZoom={false} /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/*-----Canvas Content--------------------------------*/}
      <group ref={groupRef}>
        <CameraControler
          scrollProgress={scrollProgress}
          meshProps={{ position: [0, 0, 0], scale: [0.5, 0.5, 0.5] }}
        />
        <Act1
          scrollProgress={scrollProgress}
          direction={direction}
          isTouch={isTouch}
        />
        {/* <Act2 scrollProgress={scrollProgress} direction={direction} /> */}
      </group>
    </>
  );
};

export default Scene3D;

/*
...old settings 
*/
// sRGB={true}
/*
            suggestion from :https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance
            */
// frameloop="demand"
// shadows
/*
            https://stackoverflow.com/questions/64899716/color-differences-between-threejs-vanilla-js-and-react-three-fiber-create-re
            There was a problem with "white color" on plane's background i.e. I couldn't achieve pure white, and there was a difference batween "white" on canvas smog / backgrounde and "white" on otcher objects; 
            there is one drawback though: colors are a bit flat... aluminium doesn look as impresive as it looks withou this setting
            */
// onCreated={({ gl }) => {
//   gl.toneMapping = THREE.NoToneMapping;
// }}
/*
            What "gl-shadowMaps-type" does???
            */
// gl-shadowMaps-type={THREE.PCFSoftShadowMap}
// dpr={[1, 2]} // doubles canvas' width and size ???
// pixelRatio={[1, 2]} //?? syntax
// pixelRatio={window.devicePixelRatio} //?? syntax
// camera={{ fov: 45, position: [0, 0, 3] }}
