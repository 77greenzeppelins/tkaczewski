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
  const scrollableOnZ = path === pagesPath.homePath;

  /*
  ___1. this section is ment to controll path changes 
  ___2. local state stores info about path, but changes should by register with a sort of delay
  ___3. this delay should allows to omit "scroll-to-top" behaviour
  */
  // const timerRef = useRef<NodeJS.Timeout | null>(null);
  // const [currentPath, setCurrentPath] = useState(path);

  // useEffect(() => {
  //   // console.log('...useEffect / path:', path);
  //   //___here we're setting the current property of the ref to the timer ID; this ID is returned value of setTimeout() method;
  //   timerRef.current = setTimeout(() => {
  //     // console.log('...setTimeout / currentPath:', currentPath);
  //     setCurrentPath(path);
  //   }, 2000);
  //   //__
  //   // setFakeFlag(path === currentPath ? true : false);
  //   //___cleaner
  //   return () => {
  //     clearTimeout(timerRef.current as NodeJS.Timeout);
  //   };
  // }, [setCurrentPath, path]);

  //___wtf...
  // console.log('...currentPath:', currentPath);
  // console.log('...path:', path);
  // console.log('path === currentPath', path === currentPath);

  // console.log('fakeFlag', fakeFlag);
  // const scrollableOnZ = currentPath === pagesPath.homePath;
  // console.log(
  //   'currentPath === pagesPath.homePath:',
  //   currentPath === pagesPath.homePath
  // );

  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);

  /**Animations / Manipulations*/
  useFrame(state => {
    /*
    __1. settings solely for HomePage; only z-axis is animated
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

    // console.log(
    //   'window.scrollY / (state.size.height * cameraControler.zAxisFactor):',
    //   window.scrollY / (state.size.height * cameraControler.zAxisFactor)
    // );
    /*
    __1. general settings for all Pages;
    __2. concept: each page should be deploy in "separate" sector on x-axis;
    __3. when user changes among paths, camera jumps to relevant x-axis position; 
    __4. it seems that Vector3 value is "constantly" updated so we can use it in copy() method;
    __5. how copy() works? ==> 
    */
    const cameraPosition = new THREE.Vector3(
      //___camera position-x ==> just jump when path got changed
      setXPosition(path),
      //___camera position-y ==> just remain unmoved / stay at the same level
      0,
      //___camera position-z ==> just follow the mesh...
      scrollableOnZ
        ? cameraSettings.z + meshRef.current.position.z
        : cameraSettings.z

      // scrollableOnZ && path === currentPath
      //   ? cameraSettings.z + meshRef.current.position.z
      //   : cameraSettings.z
      // scrollableOnZ
      //   ? cameraSettings.z + meshRef.current.position.z
      //   : path === currentPath
      //   ? cameraSettings.z
      //   : cameraSettings.z + meshRef.current.position.z
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
    ___2. value "y" => returns progress of scrolling; let's take such case: (a) scrollHeight property of scrollableContainer has value of 1654; (b) window.innerHeight is 827; (c) final value (at the end of scrolling) of y is 827;
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

      const scrollYProgress = scrollableOnZ
        ? y / (state.size.height * cameraControler.zAxisFactor)
        : 0;
      //__________springValues Modification section
      comp2Api.start({
        positionZ: scrollYProgress,
        // config: config.molasses,
        config: { mass: 5, friction: 120, tension: 120 },
        // config: {
        //   duration: 800,
        //   easing: easings.easeOutQuint,
        // }, // value in ms
      });
      //___wtf...
      // console.log('dirY:', dirY);
      // console.log('y:', y);
      /*
      ___1. when path changes log shows value "-0" 
      ___2. it means that useScroll() raacts to Next.js default behaviour "scroll-to-top"; 
      */
      console.log(
        'y / (state.size.height * cameraControler.zAxisFactor):',
        y / (state.size.height * cameraControler.zAxisFactor)
      );
      console.log('scrollYProgress:', scrollYProgress);
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
        // position={[0, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        //  {...meshProps}
        visible={false}
      >
        <ThreePlane argsWidth={1} argsHeight={1} />
        <meshBasicMaterial color="red" wireframe />
      </animated.mesh>
    </group>
  );
};

export default CameraControler;

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
