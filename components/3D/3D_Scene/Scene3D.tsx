import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
/**THREE Staff* */
import * as THREE from 'three';
/**FramerMotion Staff*/
import { useFrame } from '@react-three/fiber';
/**Components**/
import Act1 from '../acts/act_1/Act1';
import Act2 from '../acts/act_2/Act2';
import Act3 from '../acts/act_3/Act3';
import Act4 from '../acts/act_4/Act4';
/**Hooks*/
import useScrollPosition from '@/hooks/useScrollPosition';
/**BasicData*/
import { pagesLinks, page3DConfigs } from '@/data/basicData';
import Act5 from '../acts/act_5/Act5';

/**-------------------------------**/
const Scene3D = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**Scroll Progress Detector; is used to fuel z-axis engine **/
  const scrollYPosition = useScrollPosition();

  /**Condition of visibility**/
  const path = usePathname();
  const visibleOnHome = path === pagesLinks[0].href;
  const visibleOn2D = path === pagesLinks[1].href;

  //___|| scrollProgress.current > outOfScene;

  /**Animations / Manipulations**/
  useFrame(state => {
    /*
    this code is a sort of engine; allows to dive deeper into scene on z-axis
    */
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      scrollYPosition.val / 200, //lover number gives larger speed
      0.08 // lover number gives more fluent move; over 0.1 is rather stiff...
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
        <Act1
          groupProps={{
            position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
          }}
          isTouch={isTouch}
          isVisible={visibleOnHome}
        />

        <Act2
          groupProps={{
            position: new THREE.Vector3(...page3DConfigs.actsPositions[1]),
          }}
          isVisible={visibleOnHome}
        />
        <Act3
          groupProps={{
            position: new THREE.Vector3(...page3DConfigs.actsPositions[2]),
          }}
          isVisible={visibleOnHome}
        />
        <Act4
          groupProps={{
            position: new THREE.Vector3(...page3DConfigs.actsPositions[3]),
          }}
          isVisible={visibleOnHome}
        />
        <Act5
          groupProps={{
            position: new THREE.Vector3(...page3DConfigs.actsPositions[4]),
          }}
          isVisible={visibleOnHome}
        />
      </group>
    </>
  );
};

export default Scene3D;
