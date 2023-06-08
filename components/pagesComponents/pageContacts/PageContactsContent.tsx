'use client';
import React, { useRef } from 'react';
/**Components**/
import StickyContainer from './stickyContainer/StickyContainer';
/**Hook**/
import useElementSize from '@/hooks/useElementSize';
import useMeasure from 'react-use-measure';
/**Spring Staff**/
import { useSpring } from '@react-spring/web';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';

/**----------------------------------------**/
const PageContactsContent = () => {
  /**Basic Data**/
  const VIEWPORTS_NUMB = 2;

  /**Hook Section*/
  const [squareRef, { height, width }] = useElementSize();
  /*
  ___1. api for <InstantContactButtons> opacity
  */
  const [{ opacity }, comp1Api] = useSpring(() => ({
    opacity: 0,
  }));
  const [{ x, transform, scale }, comp2Api] = useSpring(() => ({
    x: width,
    scale: 0,
    transform: 'translateX(100%)',
    config: { mass: 5, friction: 120, tension: 120 },
  }));

  /** */
  useScroll(
    ({
      xy: [_, y],
      direction: [dirX, dirY], //dirY => scroll down = progress = 1; otherwise -1
    }: {
      xy: number[];
      direction: number[];
    }) => {
      //   console.log('scroll offset', y);
      //   console.log('opacity', y / (height / VIEWPORTS_NUMB));
      //   console.log('dirY', dirY);
      let x;
      let s;
      const cond1 = dirY === 1 && y >= height / VIEWPORTS_NUMB;
      const cond2 = dirY === -1 && y < height / VIEWPORTS_NUMB / VIEWPORTS_NUMB;
      //   if (cond1) {
      //     x = 0;
      //     s = 1;
      //   }
      //   if (cond2) {
      //     x = width;
      //     s = 0;
      //   }
      //___
      comp1Api.start({
        opacity: y / (height / VIEWPORTS_NUMB),
      });
      comp2Api.start({
        x: x,
        scale: s,
        transform: `translateX(${cond1 ? 0 : cond2 ? 100 : 100}%)`, //error
        // transform: `translateX(${100}%)`,
      });
    },
    {
      target: window,
    }
  );

  /**JSX**/
  return (
    <div
      data-container="PageContactsContent"
      ref={squareRef}
      //   ref={ref}
    >
      <StickyContainer
        opacity={opacity}
        x={x}
        scale={scale}
        transform={transform}
      />
      {/* <div className="fc h-[100vh] ">
        {' '}
        <button
          onClick={() => console.log('...........')}
          className="w-[100px] h-[100px] bg-corpo rounded-md pointer-events-auto"
        />
      </div> */}
      <div className="h-[100vh] " />
    </div>
  );
};

export default PageContactsContent;

/**Spring Section**/
//___create SpringAnimation and api for imperative approach
//   const [comp1Styles, comp1Api] = useSpring(() => ({
//     opacity: 0,
//     config: config.stiff,
//   }));
//___trigger hook and get "scroll values"
//   useScroll({
//     // container: containerRef,
//     onChange: ({ value: { scrollYProgress, scrollY } }) => {
//       //___use imperative API and utilize "scroll values" (scrollYProgress, scrollY) for setting SpringValue (props like opacity etc.);
//       comp1Api.start({
//         /*
//    __1. first part of the condition tells that initiall 300px of scrolling doesn't change anything;
//    __2. secondt part of the condition tells that we want to speed up scrollProgress value = speed up the animation itself so that it ends befor user scrolls to the bottom; factor can change depending on "number of viewport" / how long is the page;
//    */
//         opacity: scrollY < 300 ? 0 : scrollYProgress * 4,
//       });
//       //___wtf...
//       //   console.log('scrollYProgress', scrollYProgress);
//       //   console.log('scrollY', scrollY);
//       //   console.log(`${scrollYProgress * -100}%`);
//     },
//     //___??
//     default: {
//       immediate: false,
//     },
//   });
