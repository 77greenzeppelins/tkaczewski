'use client';
import React, { useRef } from 'react';
/**Components**/
// import Box from '../../basicShapes/Box/Box';
import Sphere from '../../basicShapes/sphere/Sphere';
// import Triangles from '../../customeObjects/tiangles/Triangles';
import BasicFrame from '../../customeObjects/frame/BasicFrame';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Drei Staff*/
import { OrbitControls, PivotControls } from '@react-three/drei';
/**Monitorin Staff**/
import { Perf } from 'r3f-perf';
/**BasicData*/
import { colors } from '@/data/basicData';

/**-----------------**/
const Act1 = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);
  /**useFrame Section**/
  useFrame((state, delta) => {
    //__Group Playground
    // groupRef.current.rotation.y += delta * 0.1;
    //__Camera Playground
    // state.camera.position.x = Math.sin(state.clock.elapsedTime) * 5;
    // state.camera.position.z = Math.cos(state.clock.elapsedTime) * 5;
    // state.camera.lookAt(0, 0, 0);
    // console.log('state.clock.elapsedTime = ', state.clock.elapsedTime);
  });
  /**JSX**/
  return (
    <>
      {/* <fog attach="fog" args={['#17171b', 30, 40]} /> */}
      <color attach="background" args={[colors.dark]} />
      <Perf position="bottom-right" />
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
        <BasicFrame groupProps={{ position: [0, 0, 0] }} variantsSwitcher={1} />

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
