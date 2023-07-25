'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**Global State Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import { InstantContactPanel } from '@/components';
import PlaneShader from '../shaders/plane/3DObj/PlaneShader';
import ThreePlane from '../basicShapes/plane/ThreePlane';
/**THREE Staff**/
import * as THREE from 'three';
/**Fiber Staff**/
import { useThree } from '@react-three/fiber';
/**Spring Staff**/
import { animated, config, useSpring } from '@react-spring/three';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';
/**BasicData*/
import {
  pagesPath,
  page3DConfigs,
  pages3DPositions,
  scrollableContainerNames,
} from '@/data/basicData';
import Dzierzoniow from './dzierzoniow/Dzierzoniow';

// import MovingPlane from '../shaders/planes/movingPlane/MovingPlane';
// import BackgroundPlane from '../shaders/planes/backgroundPlane/BackgroundPlane';

/**-----------------------------------------*/
const PageContacts = () => {
  /*
  ___1. why BC?
  ___2. setter is used in 2D <OtherContactsSection>
  */
  const { hintIsMobile, isDz } = useGlobalContext();
  /*
  __1. we need to know if user is mobile ! 
  */
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
  const [{ posInstantContacts }, api_1] = useSpring(() => ({
    // posY: 0,
    posInstantContacts: 0,
  }));

  const [{ posY }, api_2] = useSpring(() => ({
    posY: 0,
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
      ___2.  const normalizedScrollY ==> normalizes the scrollY value to the range [0, 1]; when user scrolls and  (scrollY < viewportHeightFraction) ==> results are values like: 0.001, 0.3, 0.99...; and 3D object move into center of the scene ==> it looks as if the scale was decreasing;  
      */
      const viewportHeightFraction = window.innerHeight * 0.85; //scaled "viewportHeight" a little bit;
      const normalizedScrollY =
        Math.min(y, viewportHeightFraction) / viewportHeightFraction;
      //__Math.max is not necessary
      // Math.max(0, Math.min(y, viewportHeightFraction)) /
      // viewportHeightFraction;
      // console.log('viewportHeightFraction:', viewportHeightFraction);
      // console.log('normalizedScrollY:', normalizedScrollY);
      // console.log(
      //   'Math.min(y, viewportHeightFraction)):',
      //   Math.min(y, viewportHeightFraction)
      // );

      /*
      ___0. let's calculate value for <animated.group> this 3d component works as a sort of standard 2D ScrollableContainer ==> reacts on scrolling;
      ___1. the aim is: to normalize value to range [0,3] ==> we actually want to translate values of scrollY that are "pixelUnit" to "canvasUnits" ===> why such range, especially why "3" ? ==> my guess is: calcSH / window.innerHeight; initially I set 4 and it was hard to coordinate scrolling of 2DScrollableContainer ant 3DSS; 
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
      const maxVal = 4; //___ ? calcSH / window.innerHeight
      // console.log('calcSH / window.innerHeight:', calcSH / window.innerHeight);

      const normalizedValue = (y / calcSH) * (minVal - maxVal);
      //__________springValues Modification section
      isPath &&
        api_1.start({
          posInstantContacts: -normalizedScrollY,
          config: config.slow,
        });
      isPath &&
        api_2.start({
          posY: -normalizedValue,
          config: hintIsMobile ? config.gentle : config.slow,
        });
    },
    //__________ ... section
    {
      enabled: isPath ? true : false,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  /*
  ___1. how it works
  */
  const state = useThree();
  const {
    viewport: { width, height, aspect, distance },
  } = state;
  const sideSize =
    aspect >= 0.8 ? (height / distance) * 0.7 : (width / distance) * 0.96;

  /**JSX**/
  return (
    <group visible={isPath} position-x={pages3DPositions.pageContacts.x}>
      {/*-----animated.group ==> preudoScrollableContainer*/}
      <animated.group position-y={posY}>
        {/* <mesh position={[0, -1, 0]}>
          <ThreePlane
            argsWidth={sideSize}
            argsHeight={sideSize}
            widthSegments={2}
            heightSegments={2}
          />
          <meshBasicMaterial wireframe color={0x212a3e} />
        </mesh> */}
        {/* <MovingPlane /> */}
        {/* <BackgroundPlane /> */}
        <Dzierzoniow
          groupProps={{
            position: new THREE.Vector3(0, -2, 0),
            // visible: isDz,
          }}
          // isVisible={isDz}
          isVisible={true}
        />

        <PlaneShader position={[0, -4, -0.5]} />
      </animated.group>

      {/*-----AnimatedGroup for instantContactPanel
       ___1: general concept: move on z-axis from 0 to -1; why? simple because position-x={-1} guarantee object is invisible and there in no need to move deeper and probably consume resources; value {-1} is strictly associated with canvas's fog setting that changes if path === "/contacts"
      */}
      <animated.group position-z={posInstantContacts}>
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

      {/* <mesh position={[0, 0, 0]}>
        <ThreePlane
          argsWidth={sideSize}
          argsHeight={sideSize}
          widthSegments={2}
          heightSegments={2}
        />
        <meshBasicMaterial wireframe color={0x212a3e} />
      </mesh> */}
      {/* <Dzierzoniow
        groupProps={{
          position: new THREE.Vector3(0, 0, 0),
          // visible: isDz,
        }}
        isVisible={isDz}
      /> */}
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
