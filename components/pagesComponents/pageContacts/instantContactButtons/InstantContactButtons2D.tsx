'use client';
import React from 'react';
/**Hook**/
import useWindowSize from '@/hooks/useWindowSize';
/**Spring Staff**/
import {
  config,
  useSpring,
  useScroll,
  animated,
  SpringValue,
} from '@react-spring/web';

interface Props {
  // scrollDrivenStyles: { opacity: SpringValue<number> };
  opacity: SpringValue<number>;
}

const InstantContactButtons2D = (
  // { scrollDrivenStyles }: Props
  { opacity }: Props
) => {
  /*
  ___1. 3DObjects in canvas reacts (resizes) on viewPort height; this hook is required as these "buttons" have to follow 3DObjects size 
  */
  const { height } = useWindowSize();

  /**Spring Section*/
  const [comp1Styles, comp1Api] = useSpring(() => ({
    opacity: 0,

    config: config.stiff,
  }));
  useScroll({
    // container: containerRef,
    onChange: ({ value: { scrollYProgress, scrollY } }) => {
      comp1Api.start({
        //  x: `${scrollYProgress * -100}%`
        // scale: scrollYProgress * 2,
        opacity: scrollY < 300 ? 0 : scrollYProgress * 2,
      });
      //___
      //   console.log('scrollYProgress', scrollYProgress);
      // console.log('scrollY', scrollY);
      //   console.log(`${scrollYProgress * -100}%`);
    },
    default: {
      immediate: false,
    },
  });

  return (
    <div className="relative w-full h-full z-1">
      <div className="flex justify-center h-[50%] w-full pt-[10vh]">
        <div
          // className="opacity-50 bg-corpo"
          style={{ width: height * 0.25, height: height * 0.3 }}
        ></div>
      </div>
      <div className="flex justify-center h-[50%] w-full pt-[10vh]">
        <div
          // className="opacity-50 bg-corpo"
          style={{ width: height * 0.25, height: height * 0.3 }}
        ></div>
      </div>
      <animated.div
        // style={scrollDrivenStyles}
        style={{ opacity: opacity }}
        className="absolute inset-0 bg-dark pointer-events-none"
      />
    </div>
  );
};

export default InstantContactButtons2D;
