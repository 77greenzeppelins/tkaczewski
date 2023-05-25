import * as THREE from 'three';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, useAnimations } from '@react-three/drei';

import BasicFrame from '../customeObjects/frame/BasicFrame';
import ImageCanvas from '../customeObjects/imageCanvas/ImageCanvas';
import { imagesData, page3DConfigs } from '@/data/basicData';
import DreiText from '../_Drei/text/DreiText';

const ScrollableScene3D = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**...*/
  const scroll = useScroll();
  console.log('......scroll:', scroll);

  useFrame(() => {
    // console.log('......scroll:', scroll);
    // groupRef.current.position.z = THREE.MathUtils.lerp(
    //   groupRef.current.position.z,
    //   scroll.offset * 50,
    //   // 0.05
    //   0.1
    // );
    groupRef.current.position.z = scroll.offset * 5;
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
        <group position={[0, 0, 0]}>
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
