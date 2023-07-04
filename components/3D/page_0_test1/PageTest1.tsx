'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
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
import { useThree } from '@react-three/fiber';

/**-----------------------------------------*/
const PageTest1 = () => {
  /*
  (!) the code below concerns the matter of "3dObjects visibility" and is used in every 3D-pseudoPage => property "visible" must receive boolean value with delay of 1 second => that is why setTimeout() is used to change initial false value to true;
  */
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesPath.test1Path);
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
    ({
      xy: [x, y],
    }: // direction: [dirX, dirY], // scroll down = progress = 1; otherwise -1
    {
      xy: number[];
      // direction: number[];
    }) => {
      // console.log('y / 100:', y / 100);
      // console.log(
      //   'y * (window.innerHeight * 0.000001):',
      //   y * (window.innerHeight * 0.000001)
      // );
      // console.log('y * 0.000000000001:', y * 0.00000000000000001);

      const viewportHeightFraction = window.innerHeight * 0.85;
      /*
      normalizedScrollY ==> normalizes the scrollY value to the range of 0 to 1 based on the viewport height, ensuring that values above halfViewportHeight are clamped to halfViewportHeight.
      */
      const normalizedScrollY =
        Math.max(0, Math.min(scrollY, viewportHeightFraction)) /
        viewportHeightFraction;

      /*
      the normalized value is passed through the sin function, which maps the range from 0 to 1 to oscillate between -1 and 1. By multiplying it by 3, we stretch the resulting range to oscillate between -3 and 3.
      */
      const mappedValue = Math.sin(normalizedScrollY * Math.PI) * 3;
      const clampedValue = Math.max(0, Math.min(mappedValue, 3));

      console.log('normalizedScrollY:', normalizedScrollY);
      console.log('mappedValue:', mappedValue);

      //__________springValues Modification section
      comp2Api.start({
        // posY: y * (window.innerHeight * 0.00000125),
        posY: y * 0.002,
        // posInstantContacts: y * (window.innerHeight * 0.00000125),
        posInstantContacts: -normalizedScrollY,

        config: config.slow,
        // transform: `translateY(${(y / (height - window.innerHeight)) * -300}%)`,
      });
    },
    //__________ ... section
    {
      enabled: true,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  const state = useThree();
  const {
    viewport: { width, height, aspect, distance },
  } = state;
  const sideSize =
    aspect >= 1 ? (height / distance) * 0.96 : (width / distance) * 0.96;

  // console.log('state:', state);

  /*
  const scrollYToValue = (scrollY: number, viewportHeight: number): number => {
  const halfViewportHeight = viewportHeight / 2;
  const normalizedScrollY = Math.max(0, Math.min(scrollY, halfViewportHeight)) / halfViewportHeight;
  const mappedValue = Math.sin(normalizedScrollY * Math.PI) * 3;
  const clampedValue = Math.max(0, Math.min(mappedValue, 3));
  return clampedValue;
};
  
  */
  /**JSX**/
  return (
    <animated.group
      visible={isPath}
      position-x={pages3DPositions.pageTest1.x}
      // position-y={posY}
    >
      {/* <animated.mesh>
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
        <meshBasicMaterial wireframe color={0xff0000} />
      </animated.mesh> */}
      <animated.group
        //  position-y={posY}
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
    </animated.group>
  );
};

export default PageTest1;
