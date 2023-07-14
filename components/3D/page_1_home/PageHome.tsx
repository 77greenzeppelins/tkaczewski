'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import { Act1, Act2, Act3, Act4, Act5, Act6, Act7, Act8 } from '@/components';
/**THREE Staff**/
import * as THREE from 'three';
/**BasicData**/
import { page3DConfigs, pagesLinks } from '@/data/basicData';
import { useThree } from '@react-three/fiber';

/**TS**/

/**---------------------------------------**/
const PageHome = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /*
  (!) the code below concerns the matter of "3dObjects visibility" and is used in every 3D-pseudoPage => property "visible" must receive boolean value with delay of 1 second => that is why setTimeout() is used to change initial false value to true value;
  */
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesLinks[0].href);
    }, page3DConfigs.visibilityDelay);

    /**cleaner**/
    return () => {
      clearTimeout(timer);
      setIsPath(false);
    };
  }, [path]);

  /*
  ___1. it was used in scenario when group move instead of cameraControler  
  */
  // useEffect(() => {
  //   const groupRefReset = groupRef.current;
  //   return () => {
  //     if (!setIsPath) {
  //       groupRefReset.position.set(0, 0, 0);
  //     }
  //   };
  // }, [setIsPath]);

  /*
  ___1. prevent rotation if height is smaller then 560px
  */
  const state = useThree();
  // console.log('state:', state.size.height);
  // console.log('screen.orientation:', screen.orientation);
  // console.log('screen.orientation.type:', screen.orientation.type);

  function lock(orientation: OrientationLockType) {
    // (A1) GO INTO FULL SCREEN FIRST
    // let de = document.documentElement;
    // if (de.requestFullscreen) {
    //   de.requestFullscreen();
    // } else if (de.mozRequestFullScreen) {
    //   de.mozRequestFullScreen();
    // } else if (de.webkitRequestFullscreen) {
    //   de.webkitRequestFullscreen();
    // } else if (de.msRequestFullscreen) {
    //   de.msRequestFullscreen();
    // }

    // (A2) THEN LOCK ORIENTATION
    screen.orientation.lock(orientation);
  }

  // (B) UNLOCK SCREEN ORIENTATION
  function unlock() {
    // (B1) UNLOCK FIRST
    screen.orientation.unlock();

    // (B2) THEN EXIT FULL SCREEN
    // if (document.exitFullscreen) {
    //   document.exitFullscreen();
    // } else if (document.webkitExitFullscreen) {
    //   document.webkitExitFullscreen();
    // } else if (document.mozCancelFullScreen) {
    //   document.mozCancelFullScreen();
    // } else if (document.msExitFullscreen) {
    //   document.msExitFullscreen();
    // }
  }

  // useEffect(() => {
  //   if (state.size.height < 560) {
  //     if (window.screen.orientation?.lock) {
  //       console.log('...is screen orientation locked?');
  //       // Disable screen rotation
  //       window.screen.orientation.lock('portrait').catch(error => {
  //         console.error('Failed to lock screen orientation:', error);
  //       });
  //     }
  //   }
  // }, [state.size.height]);

  /**JSX**/
  return (
    <group ref={groupRef} visible={isPath}>
      <Act1
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
        }}
      />
      <Act2
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[1]),
        }}
      />
      <Act3
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[2]),
        }}
      />
      <Act4
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[3]),
        }}
      />
      <Act5
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[4]),
        }}
      />
      <Act6
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[5]),
        }}
      />
      <Act7
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[6]),
        }}
      />
      <Act8
        // groupProps={{
        //   position: new THREE.Vector3(...page3DConfigs.actsPositions[7]),
        // }}
        positionZ={page3DConfigs.actsPositions[7][2]}
      />
    </group>
  );
};

export default PageHome;
