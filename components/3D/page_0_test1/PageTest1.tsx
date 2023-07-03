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
  const [{ posY }, comp2Api] = useSpring(() => ({
    posY: 0,
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

      //__________springValues Modification section
      comp2Api.start({
        posY: y * (window.innerHeight * 0.00000125),
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

  /**JSX**/
  return (
    <animated.group
      visible={isPath}
      position-x={pages3DPositions.pageTest1.x}
      position-y={posY}
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
  );
};

export default PageTest1;
