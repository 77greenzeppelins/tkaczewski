'use client';
import React, { useEffect } from 'react';
/**Globas State Staff*/
import { useGlobalContext } from '@/context/globalContext';
/**Hook Staff**/
import { usePathname } from 'next/navigation';
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
import { pagesPath, scrollableContainerNames } from '@/data/basicData';

// const {
//   pageContact: { scaleFactor },
// } = basicConfigs;

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
  ___1. we use  GlobalContext to set hintIsMobile value; it's important in 3D world as we want to apply various spring animation's config for desktop and others*/
  const { setHintIsMobile } = useGlobalContext();
  useEffect(() => {
    setHintIsMobile(hintIsMobile);
  }, [setHintIsMobile, hintIsMobile]);
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
  // const [{ transform }, api_transform] = useSpring(() => ({
  //   transform: 'translateY(0%)',
  //   config: config.slow,
  // }));
  const [{ scale }, api_scale] = useSpring(() => ({
    scale: 1,
    config: { duration: 0 },
  }));

  const [{ transform }, api_transform] = useSpring(() => ({
    transform: 'translateY(0px)',
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
      // scrollAnimationCondition &&
      //   api_transform.start({
      //     transform: `translateY(${
      //       (y / (height - window.innerHeight)) * -100
      //     }%)`,
      //   });
      scrollAnimationCondition &&
        api_scale.start({
          scale: val1 < 1 ? scale1 : 0,
        });

      //________
      const sH = Number(
        typeof window !== 'undefined'
          ? window.document.getElementById(scrollableContainerNames.pageCV)
              ?.scrollHeight
          : undefined
      );

      const calcSH = sH - window.innerHeight;
      const minVal = 0;
      const maxVal = calcSH;
      // console.log('y', y);
      // console.log('y / calcSH', y / calcSH);
      const normalizedValue = (y / calcSH) * (minVal - maxVal);
      //__________springValues modification section
      scrollAnimationCondition &&
        api_transform.start({
          transform: `translateY(${normalizedValue}px)`,
          config: config.slow,
        });

      //___________
    },

    //__________ ... section
    {
      enabled: scrollAnimationCondition && true,
      target: typeof window !== 'undefined' ? window : undefined,
    }
  );

  /**JSX**/
  return (
    <div
      id={scrollableContainerNames.pageCV}
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

/*
  scrollBar Reset
  */
// const router = useRouter();

// useEffect(() => {
//   const handleRouteChange = () => {
//     window.scrollTo(0, 0);
//     console.log('...PageContactsAnimator');
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

// useEffect(() => {
//   const handleRouteChange = () => {
//     window.scrollTo(0, 0);
//     console.log('window.scrollY');
//   };
//   window.addEventListener('beforeunload', handleRouteChange);
//   return () => {
//     window.removeEventListener('beforeunload', handleRouteChange);
//   };
// }, []);

// useEffect(() => {
//   const handleNavigation = (event: PerformanceNavigation) => {
//     if (event.type === 'reload') {
//       setIsRefreshed(true);
//     }
//   };

//   window.performance.addEventListener('navigation', handleNavigation);

//   return () => {
//     window.performance.removeEventListener('navigation', handleNavigation);
//   };
// }, []);

//__________________________

// const [isRefreshed, setIsRefreshed] = useState<boolean>(false);

// useEffect(() => {
// const handleNavigation = (event: PerformanceNavigationTiming) => {
//   if (event.type === 'reload') {
//     setIsRefreshed(true);
//   }
// };

// window.performance.getEntriesByType('navigation').forEach(handleNavigation);

// const handleNavigation = (entry: PerformanceEntry) => {
//   if (
//     entry.type === 'navigation' &&
//     (entry as PerformanceNavigationTiming).type === 'reload'
//   ) {
//     setIsRefreshed(true);
//   }
// };

// window.performance.getEntriesByType('navigation').forEach(handleNavigation);

// return () => {
//   window.performance.clearResourceTimings();
// };
// }, []);

// useEffect(() => {
//   console.log('isRefreshed:', isRefreshed);
// }, [isRefreshed]);

// useEffect(() => {
//   const handleNavigation = () => {
//     // if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
//     //   // setIsRefreshed(true);
//     // }
//     console.log('load, window.scrollY', window.scrollY);
//   };

//   window.addEventListener('load', handleNavigation);

//   return () => {
//     window.removeEventListener('load', handleNavigation);
//   };
// });

// useEffect(() => {
//   console.log('...PageContactsAnimator');
// }, []);
