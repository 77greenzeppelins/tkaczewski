'use client';
import React, { useRef, useState } from 'react';
/**Components**/
import BasicFrame from '../../../customeObjects/frame/BasicFrame';
import ImageCanvas from '../../../customeObjects/imageCanvas/ImageCanvas';
import Triangles from '../../../customeObjects/tiangles/Triangles';
/**Hooks**/
import useWindowSize from '@/hooks/useWindowSize';
/**THREE staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Drei Staff*/
// import { Float, meshBounds } from '@react-three/drei';
/**FramerMotion Staff*/
import { motion } from 'framer-motion-3d';
/**BasicData*/
import { imagesData } from '@/data/basicData';
/**HardCoded Staff*/
const minWidthForAnimation = 769;
// const outOfScene = 0.35;

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  // geometryProps?: JSX.IntrinsicElements['sphereGeometry'];
  isTouch: boolean;
}
/**-----------------**/
const Act1 = ({ isTouch, groupProps }: Props) => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /*
  staff for "hover" animation; includes condition that excludes screens lower then 769
  */
  const [isHovered, setIsHovered] = useState(false);
  const { width } = useWindowSize();
  const animationCondition = isHovered && width >= minWidthForAnimation;

  /**useFrame Section**/
  useFrame(state => {
    // console.log('state.mouse.x: ', state.mouse.x);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      (state.mouse.x * Math.PI) / 4,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      (state.mouse.y * Math.PI) / -8,
      0.05
    );
  });

  /**JSX**/
  return (
    <motion.group
      dispose={null}
      onPointerEnter={() => {
        console.log('...onPointerEnter');
        setIsHovered(true);
        // document.body.style.cursor = 'pointer';
      }}
      onPointerLeave={() => {
        console.log('...onPointerLeave');
        setIsHovered(false);
        // document.body.style.cursor = 'default';
      }}
      // onHoverStart={e => {
      //   console.log('...onHoverStart');
      //   setIsHovered(true);
      // }}
      // onHoverEnd={e => setIsHovered(true)}
      initial={false}
      // animate={[isLiked ? 'liked' : 'unliked', isHover ? 'hover' : 'unhover']}
      animate={isHovered ? 'hover' : 'unhover'}
      // animate={isHovered ? 'liked' : 'unliked'}
      variants={{
        unliked: {
          x: [0, 0],
          y: [0, 0],
          scale: 0.9,
        },
        liked: {
          x: 4,
          y: [0, -1.5, 2],
          scale: 0.9,
          transition: { duration: 0.5 },
        },
        hover: {
          rotateZ: Math.PI * 2,
          // rotateY: Math.PI,
          // scale: 1.3,
          transition: {
            rotateZ: { duration: 5, ease: 'linear', repeat: Infinity },
            // rotateY: { duration: 5, ease: 'linear' },
          },
        },
        unhover: {
          rotateZ: 0,
          // rotateY: -Math.PI,
          // scale: 1.3,
          transition: {
            rotateZ: { duration: 5, ease: 'anticipate' },
            // rotateY: { duration: 5, ease: 'linear' },
          },
        },
      }}
      onClick={event => {
        event.stopPropagation();
        console.log('..............');
      }}
    >
      <group {...groupProps} ref={groupRef}>
        {/* <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={isTouch ? 0.4 : 0.25} // XYZ rotation intensity, defaults to 1
          floatIntensity={isTouch ? 0.2 : 0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={isTouch ? [-0.075, 0.075] : [-0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        > */}
        <BasicFrame groupProps={{ scale: [0.86, 1, 1.13] }} />
        <ImageCanvas
          meshProps={{ scale: [0.9, 0.85, 0.85] }}
          argsWidth={imagesData.botticelliVenus.width * 2}
          argsHeight={imagesData.botticelliVenus.height * 2}
          image={imagesData.botticelliVenus.path}
        />
        {/* </Float> */}

        {/* {!isTouch ? (
          <Triangles
            meshProps={{ position: [-1, 0, 0], scale: [0.2, 0.2, 0.2] }}
            matcapMaterial={true}
          />
        ) : null} */}
      </group>
    </motion.group>
  );
};

export default Act1;

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
