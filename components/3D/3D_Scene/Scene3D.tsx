import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
/**THREE Staff* */
import * as THREE from 'three';
/**FramerMotion Staff*/
import { useFrame, useThree } from '@react-three/fiber';
/**Provider*/
import { BasicMaterialProvider } from '../_Three/materials/basicMaterial/ThreeBasicMaterial';
/**Components**/
import DreiPerspectiveCamera from '../_Drei/camera/DreiPerspectiveCamera';
import CameraControler from '../customeObjects/cameraControler/CameraControler';
import PageHome from '../page_1_home/PageHome';
import Page2D from '../page_1_home/Page2D';
import PageContacts from '../page_9_contacts/PageContacts';
/**Hooks*/
// import useScrollPosition from '@/hooks/useScrollPosition';
/**BasicData*/
import { colors, pagesLinks } from '@/data/basicData';

/**-------------------------------**/
const Scene3D = () => {
  /**References**/
  const groupHome = useRef<THREE.Group>(null!);
  const group2D = useRef<THREE.Group>(null!);
  const groupContacts = useRef<THREE.Group>(null!);

  /**Scroll Progress Detector; is used to fuel z-axis engine **/
  // const scrollYPosition = useScrollPosition();

  // console.log('Scene3D / scrollYPosition', scrollYPosition);

  /**Condition of visibility**/
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState('');
  const visibleOnHome = path === pagesLinks[0].href;
  const visibleOn2D = path === pagesLinks[1].href;
  const visibleOnContacts = path === pagesLinks[3].href;

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
    /*
    (!) lets travel on z-axis
    (!) remember to activate <DreiPerspectiveCamera /> or camera in <canvas>
    */
    //___ver1:
    // groupHome.current.position.z = THREE.MathUtils.lerp(
    //   groupHome.current.position.z,
    //   window.scrollY / 200, //lover number gives larger speed
    //   0.08 // lover number gives more fluent move; over 0.1 is rather stiff...
    // );
    //___ver2:
    // groupHome.current.position.set(
    //   0,
    //   0,
    //   THREE.MathUtils.lerp(
    //     groupHome.current.position.z,
    //     window.scrollY / 200, //lover number gives larger speed
    //     0.08 // lover number gives more fluent move; over 0.1 is rather stiff...
    //   )
    // );
  });

  /*
  (!) Basic test for touchScreens
  (!) Allows to render some objects only on notTouchable / large screen
  */
  const [isTouch, setTouch] = useState(false);
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setTouch(isTouch);
  }, []);

  /*
  (!) used only when sceneContent is moved / groupHome in useFeame()
  */
  // useEffect(() => {
  //   if (!visibleOnHome) {
  //     // groupHome.current.position.z = new THREE.Vector3(0, 0, 0);
  //     groupHome.current.position.z = 0;
  //   }
  // }, [path, visibleOnHome]);

  /*...*/
  // const delay = useRef(true);
  // const [delay, setDelay] = useState(false);

  useEffect(() => {
    // console.log('.... currentPath:', currentPath);

    const timer = setTimeout(() => {
      setCurrentPath(path);
      // console.log('....timer / currentPath:', currentPath);
    }, 600);

    // Re-enable rendering when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [currentPath, path]);

  // console.log('.... currentPath:', currentPath);
  // console.log(
  //   '....pagesLinks[3].href === currentPath:',
  //   pagesLinks[3].href === currentPath
  // );

  /**JSX**/
  return (
    <BasicMaterialProvider>
      {/*used when scene content move: Camera taken from Drei; */}
      {/* <DreiPerspectiveCamera /> */}
      {/*used when camera move: default camera derived from useFrame()*/}
      <CameraControler
        isOnHome={visibleOnHome}
        isOnContacts={visibleOnContacts}
      />
      {/*-----Canvas Infrastructure--------------------------------*/}
      <fog attach="fog" args={['#01030d', 3, 4.3]} />
      {/*-----Canvas Content--------------------------------*/}
      <group ref={groupHome} visible={pagesLinks[0].href === currentPath}>
        <PageHome isTouch={isTouch} />
      </group>
      <group ref={group2D} visible={pagesLinks[1].href === currentPath}>
        <Page2D />
      </group>
      <group ref={groupContacts} visible={pagesLinks[3].href === currentPath}>
        <PageContacts />
      </group>
    </BasicMaterialProvider>
  );
};

export default Scene3D;

{
  /* <color attach="background" args={[colors.dark]} /> */
}
{
  /* <OrbitControls makeDefault enableZoom={false} /> */
}
{
  /* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */
}
