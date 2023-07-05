'use client';
import React from 'react';
/**Components**/
import StickyContainer from './stickyContainer/StickyContainer';
import PageContent from './pageContent/PageContent';
/**Hook**/
import useElementSize from '@/hooks/useElementSize';
/**Spring Staff**/
import { useSpring, config } from '@react-spring/web';
/**Gesture Staff**/
import { useScroll } from '@use-gesture/react';
/**Basic Data*/
import { basicConfigs } from '@/data/basicData';

const {
  pageContact: { scaleFactor },
} = basicConfigs;

/*
this const allows to tweek "acceleration" of darkness; if 1 darknes is 100% when whole viewport was scrolled; if less then 1 darkness comes earlier;
*/
// const speedupFactor = 0.25;

interface Props {
  hintIsMobile: boolean;
}
/**----------------------------------------**/
const PageContactsAnimator = ({ hintIsMobile }: Props) => {
  /*
  ___1. we need this hook to get height value of "scrollableContainer" 
  */
  const [squareRef, { height }] = useElementSize(); // innerHeight * 2
  // console.log('PageContactsContent | height:', height);
  /*
  ___1. spring imperative API for <StickyContainer>'s overlay opacity that hides <InstantContactButtons2D/>
  ___2. this opacity goes from 0 to 1;
  */
  const [{ transform, scale }, api] = useSpring(() => ({
    transform: 'translateY(0%)',
    scale: 1,
  }));

  /** */
  useScroll(
    /*
    ___1. her we utilize some gesture state offers by useGesture
    ___2. value "y" => returns progress of scrolling; let's take such case: (a) scrollHeight property of scrollableContainer has value of 1654; (b) window.innerHeight is 827; (c) final value (at the end of scrolling) of y is 827;
    */
    ({ xy: [x, y] }: { xy: number[] }) => {
      // console.log('y:', y);
      //__________springValues Modification section
      const val1 = Math.min(y / window.innerHeight, 1);
      // console.log('y/window.innerHeight:', (y / window.innerHeight) * 0.75);
      // console.log('val1', val1);

      api.start({
        transform: `translateY(${(y / (height - window.innerHeight)) * -100}%)`,
        /*
        ___1. "1 - y / ((height / basicConfigs.pageContact.viewports) * speedupFactor)" returns values from 1 via 0 to relatively large negative values;
        ___2. these negative values make object scale "positive" i.e. object extends (=augment)! that is why I use ternary op. to end scroll progress detection on value 0 => I want <InstantContactButtons2D> container to disappears === to "disable" buttons...
        */
        scale:
          1 -
            y / ((height / basicConfigs.pageContact.viewports) * scaleFactor) >
          0
            ? 1 -
              y / ((height / basicConfigs.pageContact.viewports) * scaleFactor)
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
      data-container="PageContactsAnimator"
      ref={squareRef}
      className="relative"
    >
      <StickyContainer
        scale={scale}
        transform={transform}
        hintIsMobile={hintIsMobile}
      />
      <PageContent hintIsMobile={hintIsMobile} />
    </div>
  );
};

export default PageContactsAnimator;
