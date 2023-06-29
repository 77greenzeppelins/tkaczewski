'use client';
import React, { useRef } from 'react';
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
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);

  /**Condition of visibility**/
  const path = usePathname();
  const scrollableOnZ = path === pagesPath.homePath;

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
    );
    state.camera.position.copy(cameraPosition);
  });

  //____________________________________

  const state = useThree();
  console.log('state:', state.size.height);

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
      // console.log('dirY:', dirY);
      // console.log('y:', y);
      // console.log(
      //   'y / (state.size.height * cameraControler.zAxisFactor):',
      //   y / (state.size.height * cameraControler.zAxisFactor)
      // );
      //__________springValues Modification section

      comp2Api.start({
        positionZ: y / (state.size.height * cameraControler.zAxisFactor),
        // config: config.molasses,
        // config: { mass: 5, friction: 120, tension: 120 },
        config: {
          duration: 800,
          easing: easings.easeOutQuint,
        }, // value in ms
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
        position-z={positionZ} ///positionZ
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
