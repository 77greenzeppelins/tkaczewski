'use client';
import React from 'react';
/**Components**/
// import StickyContainer from './stickyContainer/StickyContainer';
import { ScrollableContainer } from '@/components';
/**Hook**/
import useElementSize from '@/hooks/useElementSize';
/**Spring Staff**/
import { useSpring, config } from '@react-spring/web';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';
/**Basic Data*/
import { basicConfigs } from '@/data/basicData';

const {
  pageContact: { opacityFactor, scaleFactor },
} = basicConfigs;

/*
this const allows to tweek "acceleration" of darkness; if 1 darknes is 100% when whole viewport was scrolled; if less then 1 darkness comes earlier;
*/
// const speedupFactor = 0.25;

interface Props {
  hintIsMobile: boolean;
}
/**----------------------------------------**/
const PageTest1Animator = ({ hintIsMobile }: Props) => {
  /**Hook Section*/
  const [squareRef, { height }] = useElementSize(); // innerHeight * 2
  // console.log('PageContactsContent | height:', height);
  /*
  ___1. spring imperative API for <StickyContainer>'s overlay opacity that hides <InstantContactButtons2D/>
  ___2. this opacity goes from 0 to 1;
  */
  /**Spring Section*/
  const [{ transform }, comp2Api] = useSpring(() => ({
    transform: 'translateY(0px)',
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
      console.log('y:', y);
      //__________springValues Modification section
      comp2Api.start({
        transform: `translateY(${-y}px)`,
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
    <div
      data-container="PageContactsContent"
      ref={squareRef}
      className="relative"
    >
      <div className="h-screen w-[5px] bg-amber-500" />
      <div className="h-screen w-[5px] bg-lime-700" />
      <div className="h-screen w-[5px] bg-slate-700" />

      {/* <StickyContainer
        opacity={opacity}
        scale={scale}
        transform={transform}
        hintIsMobile={hintIsMobile}
      /> */}
      {/* <ScrollableContainer hintIsMobile={hintIsMobile} /> */}
    </div>
  );
};

export default PageTest1Animator;
