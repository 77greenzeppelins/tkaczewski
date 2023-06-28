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
  /**Hook Section*/
  // const [squareRef, { height }] = useElementSize();

  const [{ transform }, comp2Api] = useSpring(() => ({
    // transform: 'translateY(0%)',
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
      // console.log('dirY:', dirY);
      // console.log('y:', y);
      // console.log('window.innerHeight:', window.innerHeight);
      // console.log(
      //   'y/(height - window.innerHeight):',
      //   (y / (height - window.innerHeight)) * 100
      // );
      // console.log(
      //   'y / ((height / basicConfigs.pageContact.viewports) * speedupFactor):',
      //   1 - y / ((height / basicConfigs.pageContact.viewports) * speedupFactor)
      // );

      //__________conditions section
      /*
      ___1. here we actually use "gesture state values" to set two boolean const that works as switcher when springValues are imperatively modified;
      ___2. if scroll down && scrolled more then half of the element scrollHeight property our cond1 is true
      */
      // const cond1 =
      //   dirY === 1 && y >= height / basicConfigs.pageContact.viewports - 5;
      // const cond2 =
      //   dirY === -1 && y < height / basicConfigs.pageContact.viewports; // /basicConfigs.pageContact.viewports;

      //__________springValues Modification section

      comp2Api.start({
        // transform: `translateX(${cond1 ? 0 : cond2 ? 100 : 100}%)`,
        // transform: `translateY(${(y / (height - window.innerHeight)) * -300}%)`,
        // transform: `translateY(${(y / (height - window.innerHeight)) * 100}%)`,
        transform: `translateY(${-y}px)`,

        /*
        ___1. "1 - y / ((height / basicConfigs.pageContact.viewports) * speedupFactor)" returns values from 1 via 0 to relatively large negative values;
        ___2. these negative values make object scale "positive" i.e. object extends (=augment)! that is why I use ternary op. to end scroll progress detection on value 0 => I want <InstantContactButtons2D> container to disappears === to "disable" buttons...
        */
        config: config.slow,
        // config: { mass: 5, friction: 120, tension: 120 },
        // config: {
        //   duration: hintIsMobile ? 0 : 400,
        //   easing: easings.easeOutQuint,
        // }, // value in ms
      });
    },
    //__________ ... section
    {
      enabled: true,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  // useEffect(() => {
  //   console.log('height:', height);
  // }, [height]);

  /**JSX**/
  return (
    <div
      // ref={squareRef}
      data-component="PageCvAnimator"
      className="relative w-full h-full"
      // className="w-full h-full pointer-events-none opacity-0"
    >
      <div>
        <PageCvContent hintIsMobile={hintIsMobile} />
      </div>
      {hintIsMobile ? null : <SmoothCvContainer transform={transform} />}
    </div>
  );
};

export default PageCvAnimator;
