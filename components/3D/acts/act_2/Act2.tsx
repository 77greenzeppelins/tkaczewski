'use client';
import React, { useRef } from 'react';
/**Components**/
import DreiText from '../../_Drei/text/DreiText';
/**THREE staff*/
import * as THREE from 'three';
/**Hooks**/
import useWindowSize from '@/hooks/useWindowSize';
/**BasicData*/
import { page3DConfigs } from '@/data/basicData';
import { useThree } from '@react-three/fiber';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  isVisible: boolean;
  // scrollProgress: MutableRefObject<number>;
}
/**-----------------**/
const Act2 = ({ groupProps, isVisible }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  // const windowSize = useWindowSize();
  // console.log('windowSize.width: ', windowSize.width);
  const state = useThree();

  console.log('state: ', state.size.width);

  /**JSX**/
  return (
    <group {...groupProps} ref={groupRef} visible={isVisible}>
      <DreiText
        hasMatcap={false}
        text={page3DConfigs.act2.text1}
        fontSize={
          state.size.width > 1000 ? 0.25 : state.size.width > 400 ? 0.18 : 0.15
        }
        color="white"
        textAlign="center"
        maxWidth={state.size.width > 1000 ? 2 : 1}
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
    </group>
  );
};

export default Act2;
