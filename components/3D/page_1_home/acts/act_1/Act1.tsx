'use client';
import React, { useRef, useState } from 'react';
/**Components**/
import BasicFrame from '../../../customeObjects/frame/BasicFrame';
import ImageCanvas from '../../../customeObjects/imageCanvas/ImageCanvas';
/**Hooks**/
import useWindowSize from '@/hooks/useWindowSize';
/**THREE staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**FramerMotion Staff*/
// import { motion } from 'framer-motion-3d';
/**BasicData*/
import { imagesData, page3DConfigs } from '@/data/basicData';
import { DreiText } from '@/components';
/**HardCoded Staff*/

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  // geometryProps?: JSX.IntrinsicElements['sphereGeometry'];
}
/**-----------------**/
const Act1 = ({ groupProps }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /*
  staff for "hover" animation; includes condition that excludes screens lower then 769
  */
  // const [isHovered, setIsHovered] = useState(false);
  // const { width } = useWindowSize();
  // const animationCondition = isHovered && width >= minWidthForAnimation;

  /**useFrame Section**/
  useFrame(state => {
    // console.log('state.mouse.x: ', state.mouse.x);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      (state.mouse.x * Math.PI) / 8,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      (state.mouse.y * Math.PI) / -18,
      0.05
    );
  });

  /**JSX**/
  return (
    <group dispose={null}>
      <group {...groupProps} ref={groupRef}>
        {page3DConfigs.familyText.map(({ text, position }, index) => (
          <DreiText
            key={index}
            hasMatcap={true}
            text={text}
            position={new THREE.Vector3(...position)}
            scale={new THREE.Vector3(0.5, 0.5, 0.5)}
            // color="white"
            textAlign="center"
            // maxWidth={state.size.width > 1000 ? 2 : 1}
            anchorX="center"
          />
        ))}

        <BasicFrame
          //  meshProps={{ scale: [0.86, 1.5, 1.13] }}
          meshProps={{ scale: [0.86 * 0.45, 1.5 * 0.45, 1.13 * 0.45] }}
        />
        <ImageCanvas
          // meshProps={{ scale: [0.9, 0.85, 0.85] }}
          // meshProps={{ scale: [0.9 * 0.45, 0.85 * 0.45, 0.85 * 0.45] }}
          meshProps={{ scale: [0.9 * 0.455, 0.85 * 0.455, 0.85 * 0.455] }}
          argsWidth={imagesData.family.width * 2}
          argsHeight={imagesData.family.height * 2}
          image={imagesData.family.path}
        />
      </group>
      {/* {page3DConfigs.familyText.map(({ text, position }, index) => (
        <DreiText
          key={index}
          hasMatcap={true}
          text={text}
          position={new THREE.Vector3(...position)}
          scale={new THREE.Vector3(0.5, 0.5, 0.5)}
          // color="white"
          textAlign="center"
          // maxWidth={state.size.width > 1000 ? 2 : 1}
          anchorX="center"
        />
      ))} */}
    </group>
  );
};

export default Act1;

/*
<group
      dispose={null}
      // initial={false}
      // animate={[isLiked ? 'liked' : 'unliked', isHover ? 'hover' : 'unhover']}
      // animate={animationCondition ? 'hover' : 'unhover'}
      // animate={isHovered ? 'liked' : 'unliked'}
      // variants={{
      //   hover: {
      //     rotateZ: Math.PI * 2,
      //     transition: {
      //       rotateZ: {
      //         duration: 5,
      //         delay: 1,
      //         ease: 'linear',
      //         repeat: Infinity,
      //       },
      //     },
      //   },
      //   unhover: {
      //     rotateZ: 0,
      //     transition: {
      //       rotateZ: { duration: 5, ease: 'anticipate' }, //ease: 'linear'
      //     },
      //   },
      // }}
      // onClick={event => {
      //   event.stopPropagation();
      //   console.log('..............');
      // }}
    >
*/
{
  /* <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={isTouch ? 0.4 : 0.25} // XYZ rotation intensity, defaults to 1
          floatIntensity={isTouch ? 0.2 : 0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={isTouch ? [-0.075, 0.075] : [-0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        > */
  /* </Float> */
}

{
  /* {!isTouch ? (
          <Triangles
            meshProps={{ position: [-1, 0, 0], scale: [0.2, 0.2, 0.2] }}
            matcapMaterial={true}
          />
        ) : null} */
}

// onPointerEnter={() => {
//   // console.log('...onPointerEnter');
//   setIsHovered(true);
//   // document.body.style.cursor = 'pointer';
// }}
// onPointerLeave={() => {
//   console.log('...onPointerLeave');
//   setIsHovered(false);
//   // document.body.style.cursor = 'default';
// }}
// onHoverStart={e => {
//   console.log('...onHoverStart');
//   setIsHovered(true);
// }}
// onHoverEnd={e => setIsHovered(true)}

{
  /* <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={2}
          //   scale={100}
          //   fixed={true}
        >
          <Box position={[-1.2, 0, 0]} />
        </PivotControls> */
}

{
  /* {path === pagesLinks[0].href ? (
          <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0, 0.3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <BasicFrame
              groupProps={{ position: [0, 0, 0] }}
              variantsSwitcher={1}
            />
          </Float>
        ) : null} */
}

{
  /* {path === pagesLinks[1].href ? (
          <BasicFrame
            groupProps={{ position: [0, 0, 0] }}
            variantsSwitcher={0}
          />
        ) : null} */
}

{
  /* <BasicFrame groupProps={{ position: [0, 0, 0] }} variantsSwitcher={0} /> */
}
