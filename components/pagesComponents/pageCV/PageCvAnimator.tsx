'use client';
import React from 'react';
/**Hooks**/
// import useElementSize from '@/hooks/useElementSize';
/**Components**/
import { PageCvContent, SmoothCvContainer } from '@/components';
/**Spring Staff**/
import { useSpring, config } from '@react-spring/web';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';

/**Basic Data*/
/**TS**/
interface Props {
  hintIsMobile: boolean;
}

/**---------------------------------------------------**/
const PageCvAnimator = ({ hintIsMobile }: Props) => {
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
      // console.log('y:', y);
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
      // ref={squareRef}
      data-component="PageCvAnimator"
      className="relative w-full h-full"
    >
      <div>
        <PageCvContent hintIsMobile={hintIsMobile} />
      </div>
      {hintIsMobile ? null : <SmoothCvContainer transform={transform} />}
    </div>
  );
};

export default PageCvAnimator;
