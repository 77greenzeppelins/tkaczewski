'use client';
import { usePathname } from 'next/navigation';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
/**Components**/
import { InstantContactPanel } from '@/components';
/**BasicData*/
import { pagesPath, page3DConfigs, pages3DPositions } from '@/data/basicData';

/**Spring Staff**/
import { animated, config, useSpring } from '@react-spring/three';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';
import ThreePlane from '../basicShapes/plane/ThreePlane';
import { MeshBasicMaterial } from 'three';
import { useFrame, useThree } from '@react-three/fiber';

/**BasicData*/
import { scrollableContainerNames } from '@/data/basicData';

/**-----------------------------------------*/
const PageContacts = () => {
  /*
  (!) the code below concerns the matter of "3dObjects visibility" and is used in every 3D-pseudoPage => property "visible" must receive boolean value with delay of 1 second => that is why setTimeout() is used to change initial false value to true;
  */
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesPath.contactcPath);
    }, page3DConfigs.visibilityDelay);

    /**cleaner**/
    return () => {
      clearTimeout(timer);
      setIsPath(false);
    };
  }, [path]);

  /**Spring Section*/
  const [{ posY, posInstantContacts }, comp2Api] = useSpring(() => ({
    posY: 0,
    posInstantContacts: 0,
  }));

  /** */
  useScroll(
    /*
    ___1. here we utilize some gesture state offers by useGesture
    ___2. value "y" => returns progress of scrolling; let's take such case: (a) scrollHeight property of scrollableContainer has value of 1654; (b) window.innerHeight is 827; (c) final value (at the end of scrolling) of y is 827;
    */
    ({ xy: [x, y] }: { xy: number[] }) => {
      /* 
      ___0. let's calculate valu for <InstantContactPanel>
      ___1. what is const viewportHeightFraction ==> it's arbitary value that respect current screen height and sets a sort of "velocity factor" i.e. how fast <ICC> goes deep into a scene;
      ___2.  const normalizedScrollY ==> normalizes the scrollY value to the range [0, 1]; when user scrolls and  (scrollY < viewportHeightFraction) ==> resulta are values like: 0.001, 0.3, 0.99...; and 3D object move into center of the scene ==> it looks as if the scale was decreasing;  
      */
      const viewportHeightFraction = window.innerHeight * 0.85;
      const normalizedScrollY =
        Math.max(0, Math.min(y, viewportHeightFraction)) /
        viewportHeightFraction;

      /*
      ___0. let's calculate value for AnimatedGroup that works as ScrollableContainer 
      ___1. the aim is: to normalize value to range [0,3] ==> from "pixelized" scrollY to "canvasUnits" ===> why such range, especially why "3" ? ==> my buess is: calcSH / window.innerHeight; initially I set 4 and it was hard to coordinate scrolling of 2DScrollableContainer ant 3DSS; 
      ___2. const sH is "numbered" scrollHeight value of scrollable container; it turned out that it's possible to get 2D element within useScroll() hook and read his property! it seems that usage of "typeof window !== 'undefined'" condition is safe and doesn't produces errors; 
      ___3. const calcSH contains: (a) it's actually a scalling proces (y / calcSH) that gives the same result as classic normalization i.e. values from [0,1]; in this cara it's equaivalent to: (currentVal - minVal) / (maxVal - minVal) ==> (currentVal - 0) / (calcSH - 0) ==> reduce "zeros" and have (currentVal / calcSH)
      */
      const sH = Number(
        typeof window !== 'undefined'
          ? window.document.getElementById(
              scrollableContainerNames.pageContacts
            )?.scrollHeight
          : undefined
      ); // const calcSH = sH || 0;
      const calcSH = sH - window.innerHeight;
      const minVal = 0;
      const maxVal = 3; //___ ? calcSH / window.innerHeight
      // console.log('calcSH:', calcSH);
      // console.log('calcSH / window.innerHeight ', calcSH / window.innerHeight);
      // const normalizedValue = (window.innerHeight / calcSH) * (0 - 20);
      const normalizedValue = (y / calcSH) * (minVal - maxVal);
      // console.log('y:', y / calcSH);
      // console.log('y-norm:', (y - 0) / (calcSH - 0));
      // console.log('y  / calcSH:', y / calcSH);
      // console.log('normalizedValue:', normalizedValue);
      // console.log('y :', y);
      // const finalScrollVal = Math.min(
      //   Math.max(minVal, normalizedValue),
      //   maxVal
      // );
      // console.log('finalScrollVal :', finalScrollVal);
      //__________springValues Modification section
      isPath &&
        comp2Api.start({
          posY: -normalizedValue,
          posInstantContacts: -normalizedScrollY,
          config: config.slow,
          // transform: `translateY(${(y / (height - window.innerHeight)) * -300}%)`,
        });
    },
    //__________ ... section
    {
      enabled: isPath ? true : false,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  const state = useThree();
  const {
    viewport: { width, height, aspect, distance },
  } = state;
  const sideSize =
    aspect >= 0.8 ? (height / distance) * 0.7 : (width / distance) * 0.96;

  // console.log('state:', state);

  // const ref = useRef();
  // useFrame(state => {
  //   console.log('ref.current:', ref.current.position);
  // });
  /**JSX**/
  return (
    <group visible={isPath} position-x={pages3DPositions.pageContacts.x}>
      {/*-----AnimatedGroup for preudoScrollableContainer*/}
      <animated.group position-y={posY}>
        {/* <mesh position={[0, 0, 0]}>
          <ThreePlane
            // argsWidth={0.04}
            // argsHeight={0.04}
            // argsWidth={(width / distance) * 0.98}
            // argsHeight={(width / distance) * 0.98}
            argsWidth={sideSize}
            argsHeight={sideSize}
            widthSegments={2}
            heightSegments={2}
          />
          <meshBasicMaterial wireframe color={0x394867} />
        </mesh> */}
        <mesh position={[0, -1, 0]}>
          <ThreePlane
            argsWidth={sideSize}
            argsHeight={sideSize}
            widthSegments={2}
            heightSegments={2}
          />
          <meshBasicMaterial wireframe color={0x00ff00} />
        </mesh>
        {/* <mesh position={[0, -2, 0]}>
          <ThreePlane
            argsWidth={sideSize}
            argsHeight={sideSize}
            widthSegments={2}
            heightSegments={2}
          />
          <meshBasicMaterial wireframe color={0xe11299} />
        </mesh> */}
        <mesh position={[0, -3, 0]}>
          <ThreePlane
            argsWidth={sideSize}
            argsHeight={sideSize}
            widthSegments={2}
            heightSegments={2}
          />
          <meshBasicMaterial wireframe color={0xffa41b} />
        </mesh>
      </animated.group>

      {/*-----AnimatedGroup for instantContactPanel*/}
      <animated.group
        /*
        ___1: general concept: move from 0 to -1; why? simple because position-x={-1} guarantee object is invisible and there in no need to move deeper and probably consume resources; 
        */
        position-z={posInstantContacts}
      >
        <InstantContactPanel
          topButtonPos={
            page3DConfigs.pageContacts.contactButtonConfig.topButtonPos
          }
          bottomButtonPos={
            page3DConfigs.pageContacts.contactButtonConfig.bottomButtonPos
          }
          scaleFrame={page3DConfigs.pageContacts.contactButtonConfig.scaleFrame}
          scaleImage={page3DConfigs.pageContacts.contactButtonConfig.scaleImage}
        />
      </animated.group>
    </group>
  );
};

export default PageContacts;

/*
  const scrollYToValue = (scrollY: number, viewportHeight: number): number => {
  const halfViewportHeight = viewportHeight / 2;
  const normalizedScrollY = Math.max(0, Math.min(scrollY, halfViewportHeight)) / halfViewportHeight;
  const mappedValue = Math.sin(normalizedScrollY * Math.PI) * 3;
  const clampedValue = Math.max(0, Math.min(mappedValue, 3));
  return clampedValue;
};
  */

/*
      the normalized value is passed through the sin function, which maps the range from 0 to 1 to oscillate between -1 and 1. By multiplying it by 3, we stretch the resulting range to oscillate between -3 and 3.
      */
// const mappedValue = Math.sin(normalizedScrollY * Math.PI) * 3;
/*
      the mappedValue is clamped to ensure it stays within the range of 0 to 3 using the clamp function; the resulting value represents the desired mapping from window.scrollY to the range of 0 to 3
      */
// const clampedValue = Math.max(0, Math.min(mappedValue, 3));
