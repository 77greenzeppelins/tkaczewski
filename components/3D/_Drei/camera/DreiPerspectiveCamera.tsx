'use client';
import React, { useRef } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**Drei Staff*/
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
/**Components**/
// import ThreePlane from '../../basicShapes/plane/ThreePlane';
// import { animated, useTransition } from '@react-spring/three';
// import { colors } from '@/data/basicData';
/**Hook from Provider*/
// import { useBasicMaterial } from '../../_Three/materials/basicMaterial/ThreeBasicMaterial';
/**Hook to follow path changes*/
// import { usePathname } from 'next/navigation';

/**-----------------------------------**/
const DreiPerspectiveCamera = () => {
  const cameraRef = useRef(null);
  /**Material from Provider**/
  // const basicMaterial = useBasicMaterial();
  /*
  ___1.explanation: 
  */
  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;
  //_approach_1
  // const cameraDistance = 1; // adjust as needed
  // const fov = 2 * Math.atan(height / (2 * cameraDistance)) * (180 / Math.PI);
  const aspect = width / height;
  const distance = 0.5 / Math.tan((Math.PI * 0.5 * 45) / 180);
  // const cameraPosition = [0, 0, distance];
  const cameraPosition = [0, 0, 1];

  // console.log('cameraPosition:', cameraPosition);
  // console.log('cameraRef.current:', cameraRef.current);

  /**JSX**/
  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      /*
          settings from canvase's default cam
          camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
          */
      // position={[0, 0, 1]}
      near={0.01}
      far={50}
      position={new THREE.Vector3(...cameraPosition)}
      fov={45}
      aspect={aspect}
    >
      {/* <mesh
        // ref={meshRef}
        position={[0, 0, -0.01]}
        // scale={[0.0025, 0.0025, 0.0025]}
        scale={[0.5, 0.5, 0.5]}
        //  {...meshProps}
        // visible={false}
        // material={basicMaterial}
        // animate={{position:[0.5,0,0]}}
      >
        <ThreePlane argsWidth={1} argsHeight={1} />
        <meshBasicMaterial
          //  color={colors.corpo}
          wireframe
        />
      </mesh> */}
      {/* {transitions(
        (style, isIntroOverlay) =>
          isIntroOverlay && (
            <animated.mesh
              position={[0, 0, -0.01]}
              scale-x={style.scaleX}
              scale-y={style.scaleY}
              scale-z={style.scaleZ}
            >
              <ThreePlane argsWidth={1} argsHeight={1} />
              <meshBasicMaterial color={colors.corpo} />
            </animated.mesh>
          )
      )} */}
    </PerspectiveCamera>
  );
};

export default DreiPerspectiveCamera;

/*
  __1. explanation:
  */

// const [isAtTop, setIsAtTop] = useState<boolean>(window.scrollY === 0);
// const prevScrollYRef = useRef<number>(window.scrollY);

// useEffect(() => {
//   const handleScroll = () => {
//     /*
//     ___1. isScrollingUp is a booleanFlag constantly updated by scrolling
//     */
//     const isScrollingUp = window.scrollY < prevScrollYRef.current;
//     setIsAtTop(window.scrollY === 0);

//     console.log('isScrollingUp:', isScrollingUp);
//     console.log('isAtTop:', isAtTop);

//     if (isScrollingUp) {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         setIsAtTop(window.scrollY === 0);
//       }, 100);
//     }
//     prevScrollYRef.current = window.scrollY;
//   };

//   let timeoutId = setTimeout(() => {
//     setIsAtTop(false);
//   }, 100);

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//     clearTimeout(timeoutId);
//   };
// }, [isAtTop]);

// console.log('outside useEffect | isAtTop:', isAtTop);

// const transitions = useTransition(isAtTop, {
//   // keys: mounted.toString(),
//   from: { scaleX: 1, scaleY: 1, scaleZ: 1, config: { duration: 0 } },
//   enter: { scaleX: 1, scaleY: 1, scaleZ: 1, config: { duration: 0 } },
//   leave: { scaleX: 0, scaleY: 0, scaleZ: 0, config: { duration: 0 } },
//   // config: { duration: 400 },
//   // exitBeforeEnter: true,
// });
