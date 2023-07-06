'use client';
import React, { useEffect } from 'react';
/**Hook Staff**/
import { usePathname, useRouter } from 'next/navigation';
import { Router } from 'next/router';
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
import { basicConfigs, pagesPath } from '@/data/basicData';

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
  ___1. concept: each <PageNameAnimator> with useScroll needs some booleanFlag that switch on / off listening of scroll within relevant page
  */
  const route = usePathname();
  const scrollAnimationCondition = route === pagesPath.contactcPath;
  /*
  ___1. we need this hook to get height value of "scrollableContainer" 
  */
  const [squareRef, { height }] = useElementSize(); // innerHeight * 2
  // console.log('PageContactsContent | height:', height);
  /*
  ___1. spring imperative API_transform for <StickyContainer>'s overlay opacity that hides <InstantContactButtons2D/>
  ___2. this opacity goes from 0 to 1;
  */
  const [{ transform }, api_transform] = useSpring(() => ({
    transform: 'translateY(0%)',
    config: config.slow,
  }));
  const [{ scale }, api_scale] = useSpring(() => ({
    scale: 1,
    config: { duration: 0 },
  }));

  /** */
  useScroll(
    /*
    ___1. her we utilize some gesture state offers by useGesture
    ___2. value "y" => returns progress of scrolling; let's take such case: (a) scrollHeight property of scrollableContainer has value of 1654; (b) window.innerHeight is 827; (c) final value (at the end of scrolling) of y is 827;
    */
    ({ xy: [x, y] }: { xy: number[] }) => {
      // console.log('y:', y);
      // const val1 = Math.min((y / window.innerHeight) * 3, 1);
      const val1 = Math.min(y / (window.innerHeight * 0.3), 1);
      //const normalizedValue = (y / calcSH) * (minVal - maxVal);
      const scale1 = 1 - val1 * (1 - 0.75);
      // console.log('val1', val1);
      // console.log('scale1', scale1);
      scrollAnimationCondition &&
        api_transform.start({
          transform: `translateY(${
            (y / (height - window.innerHeight)) * -100
          }%)`,
        });
      scrollAnimationCondition &&
        api_scale.start({
          /*
           */
          scale: val1 < 1 ? scale1 : 0,
        });
    },
    //__________ ... section
    {
      enabled: scrollAnimationCondition && true,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  /*
  scrollBar Reset
  */
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     window.scrollTo(0, 0);
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     window.scrollTo(0, 0);
  //     console.log('window.scrollY');
  //   };

  //   Router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     Router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
      console.log('window.scrollY');
    };

    window.addEventListener('beforeunload', handleRouteChange);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, []);

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
