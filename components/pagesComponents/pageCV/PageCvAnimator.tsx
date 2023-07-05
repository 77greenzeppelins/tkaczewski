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
import { scrollableContainerNames } from '@/data/basicData';

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
    ({ xy: [x, y] }: { xy: number[] }) => {
      // console.log('y:', y);
      const sH = Number(
        typeof window !== 'undefined'
          ? window.document.getElementById(scrollableContainerNames.pageCV)
              ?.scrollHeight
          : undefined
      );
      /*
      ___1. const calcSH ==> is a sort of calculated height that takes scrollableContainer's scrollHeight property and subtract window.innerHeight ==> final value is equal "y" we get from hook state
      ___2. minVal & maxVal is a range of values we want to "map" to
      ___3. How it happens: scrollDriven dynamic value that works in this range [0,1] multuplied by this range [0 - someNumberOfPixels] ==> 
      */
      const calcSH = sH - window.innerHeight;
      const minVal = 0;
      const maxVal = calcSH - window.innerHeight;
      // console.log('y', y);
      // console.log('y / calcSH', y / calcSH);
      const normalizedValue = (y / calcSH) * (minVal - maxVal);
      //__________springValues modification section
      comp2Api.start({
        transform: `translateY(${normalizedValue}px)`,
        config: config.slow,
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
      id={scrollableContainerNames.pageCV} // ref={squareRef}
      data-component="PageCvAnimator"
      className="relative flex flex-col w-full h-full"
    >
      <PageCvContent hintIsMobile={hintIsMobile} />
      {hintIsMobile ? null : <SmoothCvContainer transform={transform} />}
    </div>
  );
};

export default PageCvAnimator;
