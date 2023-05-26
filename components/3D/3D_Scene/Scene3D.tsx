import * as THREE from 'three';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

import BasicFrame from '../customeObjects/frame/BasicFrame';
import ImageCanvas from '../customeObjects/imageCanvas/ImageCanvas';
import { imagesData, page3DConfigs } from '@/data/basicData';
import DreiText from '../_Drei/text/DreiText';
import useScrollPosition from '@/hooks/useScrollPosition';
import Act1 from '../acts/act_1/Act1';

/**-------------------------------**/
const Scene3D = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**Scroll Progress Detector; is used to fuel z-axis engine **/
  const scrollY = useScrollPosition();

  /**Animations / Manipulations**/

  useFrame(state => {
    /*
    this code is a sort of engine; allows to dive deeper into scene on z-axis
    */
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      scrollY / 200, //lover number gives larger speed
      // 0.05
      0.08 // lover number gives more fluent move
    );
  });

  /*Basic Test for touchScreens*/
  const [isTouch, setTouch] = useState(false);
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setTouch(isTouch);
  }, []);

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
      <fog attach="fog" args={['#01030d', 3, 4.3]} />
      {/* <color attach="background" args={[colors.dark]} /> */}
      {/* <OrbitControls makeDefault enableZoom={false} /> */}
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/*-----Canvas Content--------------------------------*/}
      <group
        // position-z={transformedYProgress}
        ref={groupRef}
      >
        <Act1 groupProps={{ position: [0, 0, 0] }} isTouch={isTouch} />

        <group position={[0, 0, -4]}>
          <DreiText
            hasMatcap={false}
            text={page3DConfigs.act2.text1}
            fontSize={0.25}
            color="white"
            textAlign="center"
            maxWidth={2}
            anchorX="center"
          />
        </group>
      </group>
    </>
  );
};

export default Scene3D;
