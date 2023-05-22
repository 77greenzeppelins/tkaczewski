'use client';
import React, { MutableRefObject, useRef } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
// import Box from '../../basicShapes/Box/Box';
// import Sphere from '../../basicShapes/sphere/Sphere';
// import Triangles from '../../customeObjects/tiangles/Triangles';
import BasicFrame from '../../customeObjects/frame/BasicFrame';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Drei Staff*/
import { OrbitControls, PivotControls } from '@react-three/drei';
/**Monitorin Staff**/
import { Perf } from 'r3f-perf';
/**BasicData*/
import { colors, pagesLinks } from '@/data/basicData';

interface Props {
  scrollProgress: MutableRefObject<number>;
}
/**-----------------**/
const Act1 = ({ scrollProgress }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);
  /**useFrame Section**/
  useFrame((state, delta) => {
    // console.log('Act1 / scrollPr: ', scrollPr);
    // console.log('Act1 / scrollP: ', scrollP.current);
    //__Group Playground
    // groupRef.current.rotation.y += delta * 0.1;
    //__Camera Playground
    // state.camera.position.x = Math.sin(state.clock.elapsedTime) * 5;
    // state.camera.position.z = Math.cos(state.clock.elapsedTime) * 5;
    // state.camera.lookAt(0, 0, 0);
    // console.log('state.clock.elapsedTime = ', state.clock.elapsedTime);
  });

  const path = usePathname();
  // const isActive = path === url;
  /**JSX**/
  return (
    <>
      {/* <fog attach="fog" args={['#17171b', 30, 40]} /> */}
      <color attach="background" args={[colors.dark]} />
      {/* <Perf position="bottom-right" /> */}
      <OrbitControls makeDefault />
      {/* <ambientLight intensity={0.5} /> */}
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}
      <group ref={groupRef}>
        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={2}
          //   scale={100}
          //   fixed={true}
        >
          <Box position={[-1.2, 0, 0]} />
        </PivotControls> */}

        {path === pagesLinks[0].href ? (
          <BasicFrame
            groupProps={{ position: [0, 0, 0] }}
            variantsSwitcher={1}
          />
        ) : null}

        {path === pagesLinks[1].href ? (
          <BasicFrame
            groupProps={{ position: [0, 0, 0] }}
            variantsSwitcher={0}
          />
        ) : null}

        {/* <BasicFrame groupProps={{ position: [0, 0, 0] }} variantsSwitcher={0} /> */}

        {/* <Sphere
          meshProps={{
            position: [2.5, 0, 0],
            // position-x: 1.5, //  alternative approach but doesn't work ???
            rotation: [Math.PI * 0.25, 0, 0],
            // rotation-x: Math.PI * 0.25 //  alternative approach but doesn't work ???
            //rotateX: Math.PI * 0.5, //  alternative approach but doesn't work ???
            scale: 1,
            // scale:[1,2,1] // alternative approach
          }}
          geometryProps={{ args: [1, 24, 24] }}
          materialProps={{ color: colors.corpo, wireframe: true }}
          //args={[{color: colors.corpo, wireframe: true}]}
        /> */}

        {/* <Triangles /> */}
      </group>
    </>
  );
};

export default Act1;
