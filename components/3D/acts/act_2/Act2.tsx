'use client';
import React, { MutableRefObject, useRef } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import Sphere from '../../basicShapes/sphere/Sphere';
/**THREE staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Drei Staff*/
import { Float, Text } from '@react-three/drei';
/**BasicData*/
import { colors, pagesLinks, page3DConfigs } from '@/data/basicData';
import DreiText from '../../_Drei/text/DreiText';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  scrollProgress: MutableRefObject<number>;
  direction: MutableRefObject<number>;
}
/**-----------------**/
const Act2 = ({ scrollProgress, direction, groupProps }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /**Condition of visibility**/
  const path = usePathname();
  const isVisible = path === pagesLinks[0].href;

  /**useFrame Section**/
  useFrame(state => {
    // groupRef.current.rotation.y = THREE.MathUtils.lerp(
    //   groupRef.current.rotation.y,
    //   (state.mouse.x * Math.PI) / 8,
    //   0.05
    // );
  });

  /**JSX**/
  return (
    <>
      <group {...groupProps} ref={groupRef} visible={isVisible}>
        {/* <Text color="white" anchorX="center" anchorY="middle">
          hello world!
        </Text> */}
        <DreiText
          hasMatcap={true}
          text={page3DConfigs.act2.text1}
          fontSize={0.25}
          color="white"
          textAlign="center"
          maxWidth={2}
          anchorX="center"
          // fillOpacity={0}
          // strokeColor={'white'}
          // strokeWidth={0.001}
        />
        {/* <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        ></Float> */}

        {/* <Sphere
          meshProps={{
            position: [0, 0, -2],
            // position-x: 1.5, //  alternative approach but doesn't work ???
            rotation: [Math.PI * 0.25, 0, 0],
            // rotation-x: Math.PI * 0.25 //  alternative approach but doesn't work ???
            //rotateX: Math.PI * 0.5, //  alternative approach but doesn't work ???
            scale: 1,
            // scale:[1,2,1] // alternative approach
          }}
          geometryProps={{ args: [1, 12, 12] }}
          materialProps={{ color: colors.corpo, wireframe: true }}
          //args={[{color: colors.corpo, wireframe: true}]}
          matcapMaterial={false}
        /> */}

        {/* <Triangles /> */}
      </group>
    </>
  );
};

export default Act2;
