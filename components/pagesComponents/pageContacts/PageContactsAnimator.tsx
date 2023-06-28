'use client';
import React from 'react';
/**Components**/
import StickyContainer from './stickyContainer/StickyContainer';
import { InstantContactButtons2D, ScrollableContainer } from '@/components';
/**Hook**/
import useElementSize from '@/hooks/useElementSize';
/**Spring Staff**/
import { useSpring, easings, config, animated } from '@react-spring/web';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';
/**Basic Data*/
import { basicConfigs } from '@/data/basicData';
import PageContent from './pageContent/PageContent';

/*
this const allows to tweek "acceleration" of darkness; if 1 darknes is 100% when whole viewport was scrolled; if less then 1 darkness comes earlier;
*/
const speedupFactor = 0.125;

interface Props {
  hintIsMobile: boolean;
}
/**----------------------------------------**/
const PageContactsAnimator = ({ hintIsMobile }: Props) => {
  /**Hook Section*/
  const [squareRef, { height }] = useElementSize(); // innerHeight * 2
  // console.log('PageContactsContent | height:', height);
  /*
  ___1. spring imperative API for <StickyContainer>'s overlay opacity that hides <InstantContactButtons2D/>
  ___2. this opacity goes from 0 to 1;
  */
  const [{ opacity }, comp1Api] = useSpring(() => ({
    opacity: 0,
  }));
  const [{ transform, scale }, comp2Api] = useSpring(() => ({
    transform: 'translateY(100%)',
    scale: 1,
    // transform: 'translateX(100%)',
    // config: { mass: 5, friction: 120, tension: 120 },
  }));

  /** */
  useScroll(
    /*
    ___1. her we utilize some gesture state offers by useGesture
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
      // console.log('height:', height);
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
      comp1Api.start({
        opacity:
          y /
          ((height / basicConfigs.pageContact.viewports) *
            basicConfigs.pageContact.speedupFactor),
      });
      comp2Api.start({
        // transform: `translateX(${cond1 ? 0 : cond2 ? 100 : 100}%)`,
        // transform: `translateY(${(y / (height - window.innerHeight)) * -300}%)`,
        transform: `translateY(${
          (y / height) * -basicConfigs.pageContact.viewportsTotal
        }%)`,
        /*
        ___1. "1 - y / ((height / basicConfigs.pageContact.viewports) * speedupFactor)" returns values from 1 via 0 to relatively large negative values;
        ___2. these negative values make object scale "positive" i.e. object extends (=augment)! that is why I use ternary op. to end scroll progress detection on value 0 => I want <InstantContactButtons2D> container to disappears === to "disable" buttons...
        */
        scale:
          1 -
            y /
              ((height / basicConfigs.pageContact.viewports) * speedupFactor) >
          0
            ? 1 -
              y /
                ((height / basicConfigs.pageContact.viewports) * speedupFactor)
            : 0,
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

  /**JSX**/
  return (
    <div
      data-container="PageContactsContent"
      ref={squareRef}
      className="relative"
    >
      <StickyContainer
        opacity={opacity}
        scale={scale}
        transform={transform}
        hintIsMobile={hintIsMobile}
      />
      <ScrollableContainer hintIsMobile={hintIsMobile} />
    </div>
  );
};

export default PageContactsAnimator;
