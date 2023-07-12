'use client';
import React, { useEffect, useRef, useState } from 'react';
/**Global Context**/
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame, useThree } from '@react-three/fiber';
/**Components**/
import ThreePlane from '../../basicShapes/plane/ThreePlane';
/**Hooks*/
import { usePathname } from 'next/navigation';
/**Utils*/
import { setXPosition } from './utils/utils';
/**Basic Data*/
import { pagesPath, cameraSettings, cameraControler } from '@/data/basicData';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';
import { config, useSpring, animated, easings } from '@react-spring/three';

/**----------------------------**/
const CameraControler = () => {
  /**Condition of visibility**/
  const path = usePathname();
  const progressOnZ = path === pagesPath.homePath;

  /*
  ___1. this section is meant to control path changes 
  ___2. local state stores info about path, but changes should by register with a sort of delay
  ___3. this delay should allows to omit "scroll-to-top" behaviour
  */
  // const timerRef = useRef<NodeJS.Timeout | null>(null);
  // const [flag, setFlag] = useState(true);

  // useEffect(() => {
  //   setFlag(false);
  //   // console.log('...useEffect / path:', path);
  //   //___here we're setting the current property of the ref to the timer ID; this ID is returned value of setTimeout() method;
  //   timerRef.current = setTimeout(() => {
  //     // console.log('...setTimeout / currentPath:', currentPath);
  //     setFlag(true);
  //   }, 10);
  //   //___cleaner
  //   return () => {
  //     clearTimeout(timerRef.current as NodeJS.Timeout);
  //   };
  // }, [path]);

  //___wtf...
  // console.log('...flag:', flag);

  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);

  /**Animations / Manipulations*/
  useFrame(state => {
    /*
    __1. settings solely for HomePage; only z-axis is animated
    __2. alternatively, we can use useScroll + useSpring for the same purpose; performace seems to be the same, but the second solution give more possibilities to specify kind of move; another alternative is to move whole homePage 3D content instead of camera ==> like in ContactsPage;
    */
    // if (scrollableOnZ) {
    //   meshRef.current.position.set(
    //     0,
    //     0,
    //     THREE.MathUtils.lerp(
    //       meshRef.current.position.z,
    //       window.scrollY / (state.size.height * cameraControler.zAxisFactor),
    //       0.1
    //     )
    //   );
    // }
    /*
    __1. general settings for all Pages;
    __2. concept: 3D content of each page should be positioned in "separate" sector on x-axis;
    __3. when user changes among paths, camera jumps to relevant x-axis position; 
    __4. it seems that Vector3 value is "constantly" updated so we can use it in copy() method;
    __5. how copy() works? ==> 
    */
    const cameraPosition = new THREE.Vector3(
      //___camera position-x ==> just go to a new position when path got changed
      setXPosition(path),
      //___camera position-y ==> just remain unmoved / stay at the same level
      cameraSettings.y,
      //___camera position-z ==> just follow the mesh...
      cameraSettings.z + meshRef.current.position.z
    );
    state.camera.position.copy(cameraPosition);
  });

  //____________________________________

  const state = useThree();
  // console.log('state:', state.size.height);

  const [{ positionZ }, comp2Api] = useSpring(() => ({
    // transform: 'translateY(0%)',
    positionZ: 0,
  }));

  useScroll(
    /*
    ___1. here we utilize some gesture state offers by useGesture
    ___2. value "y" ==> returns progress of scrolling ==> window.scrollY; let's take such case: (a) scrollHeight property of scrollableContainer has value of 1654; (b) window.innerHeight is 827; (c) final value (at the end of scrolling) of y is 827 ==> so document must moove up by 827px to show its end;
    */
    ({
      xy: [x, y],
    }: // direction: [dirX, dirY], // scroll down = progress = 1; otherwise -1
    {
      xy: number[];
      // direction: number[];
    }) => {
      /*
      const scrollYProgress = scrollableOnZ ?
        y / (state.size.height * cameraControler.zAxisFactor)
        : path === currentPath ? cameraSettings.z : y / (state.size.height * cameraControler.zAxisFactor)
      */
      // const scrollYProgress = scrollableOnZ
      //   ? y / (state.size.height * cameraControler.zAxisFactor)
      //   : path === currentPath
      //   ? 0
      //   : y / (state.size.height * cameraControler.zAxisFactor);

      const scrollYProgress = progressOnZ
        ? y / (state.size.height * -cameraControler.zAxisFactor)
        : 0;

      //__________springValues Modification section
      comp2Api.start({
        positionZ: scrollYProgress,
        /*
         ___1. why config with ternary operator? case: on pageHome strong scroll ==> fast path change ==> fast return to pageHome ==> return to positionZ = 0 is still in progress what gives poor UX;
        */
        config: progressOnZ
          ? // { mass: 5, friction: 120, tension: 120 }
            { tension: 280, friction: 120, precision: 0.0001 }
          : { duration: 100 }, //___works better then config.slow
      });
    },
    //__________ ... section
    {
      enabled: true,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  //____________________________________

  /**JSX**/
  return (
    <group>
      <animated.mesh
        ref={meshRef}
        position-x={0}
        position-y={0}
        position-z={positionZ}
        scale={[0.5, 0.5, 0.5]}
        visible={false}
      >
        <ThreePlane argsWidth={1} argsHeight={1} />
        <meshBasicMaterial color="red" wireframe />
      </animated.mesh>
    </group>
  );
};

export default CameraControler;

//_______________________________________________________________
//___camera position-z ==> just follow the mesh...
// cameraSettings.z + meshRef.current.position.z
// scrollableOnZ
//   ? cameraSettings.z + meshRef.current.position.z
//   : cameraSettings.z
// scrollableOnZ && path === currentPath
//   ? cameraSettings.z + meshRef.current.position.z
//   : cameraSettings.z
// scrollableOnZ
//   ? cameraSettings.z + meshRef.current.position.z
//   : path === currentPath
//   ? cameraSettings.z
//   : cameraSettings.z + meshRef.current.position.z

//__basic settings to move plane on z-axis
// meshRef.current.position.z = THREE.MathUtils.lerp(
//   meshRef.current.position.z,
//   // scrollProgress.current * -30,
//   true ? window.scrollY / -200 : 0,
//   // 0.05
//   0.1
// );

// meshRef.current.position.y = scrollProgress.current * -30;
// const targetPosition = new THREE.Vector3(0, 0, meshRef.current.position.z);//
// const targetPosition = new THREE.Vector3(0, meshRef.current.position.y, 0);

//__initial settings for camera
// const cameraPosition = new THREE.Vector3();
// cameraPosition.copy(targetPosition);
// cameraPosition.z += 3;
// cameraPosition.y += 0;

// const cameraTarget = new THREE.Vector3();
// cameraTarget.copy(targetPosition);
// // cameraTarget.y += 0.25;

// state.camera.position.copy(cameraPosition);
// state.camera.lookAt(cameraTarget);
