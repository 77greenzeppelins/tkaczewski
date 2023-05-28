import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
/**THREE Staff* */
import * as THREE from 'three';
/**FramerMotion Staff*/
import { useFrame } from '@react-three/fiber';
/**Provider*/
import { BasicMaterialProvider } from '../_Three/materials/basicMaterial/ThreeBasicMaterial';
/**Components**/
import DreiPerspectiveCamera from '../_Drei/camera/DreiPerspectiveCamera';
import PageHome from '../page_1_home/PageHome';
import Page2D from '../page_1_home/Page2D';
/**Hooks*/
import useScrollPosition from '@/hooks/useScrollPosition';
/**BasicData*/
import { colors, pagesLinks } from '@/data/basicData';

/**-------------------------------**/
const Scene3D = () => {
  /**References**/
  const groupHome = useRef<THREE.Group>(null!);
  const group2D = useRef<THREE.Group>(null!);

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
    // if (visibleOnHome) {
    //   console.log(',,,,,,,,,,,');
    //   groupHome.current.position.z = THREE.MathUtils.lerp(
    //     groupHome.current.position.z,
    //     scrollYPosition.val / 200, //lover number gives larger speed
    //     0.08 // lover number gives more fluent move; over 0.1 is rather stiff...
    //   );
    // }

    groupHome.current.position.z = THREE.MathUtils.lerp(
      groupHome.current.position.z,
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

  /**...**/
  useEffect(() => {
    if (!visibleOnHome) {
      // groupHome.current.position.z = new THREE.Vector3(0, 0, 0);
      groupHome.current.position.z = 0;
    }
  }, [path, visibleOnHome]);

  /**JSX**/
  return (
    <BasicMaterialProvider color={colors.dark}>
      {/*-----Canvas Infrastructure--------------------------------*/}
      <DreiPerspectiveCamera />
      <fog attach="fog" args={['#01030d', 3, 4.3]} />
      {/* <color attach="background" args={[colors.dark]} /> */}
      {/* <OrbitControls makeDefault enableZoom={false} /> */}
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/*-----Canvas Content--------------------------------*/}
      <group ref={groupHome} visible={visibleOnHome}>
        <PageHome isTouch={isTouch} />
      </group>
      <group ref={group2D} visible={visibleOn2D}>
        <Page2D />
      </group>
    </BasicMaterialProvider>
  );
};

export default Scene3D;
