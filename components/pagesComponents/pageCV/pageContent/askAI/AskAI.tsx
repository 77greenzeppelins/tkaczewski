'use client';
import React, { useEffect, useState } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Hooks**/
import useWindowSize from '@/hooks/useWindowSize';
/**Components**/
import DoubtsSection from './doubtsSection/DoubtsSection';
import ThanksAISection from './ThanksAISection/ThanksAISection';
import ButtonSwitcher from '@/components/multipagesComponents/_basicComponents/buttons/buttonSwitcher/ButtonSwitcher';
import CloseXIcon from '@/components/svg/CloseXIcon';
/**Spring Section*/
import {
  useSpring,
  useChain,
  animated,
  useSpringRef,
  useInView,
} from '@react-spring/web';
/**BasicData*/
import { springConfigs } from '@/data/basicData';
import { useDebounce } from '@/hooks/useDeboince';

/**------------------------**/
const AskAI = () => {
  /**GlobalContext Section**/
  const { askAI, setAskAI } = useGlobalContext();
  /**Staff for responsiveness condition**/
  const { width, height } = useWindowSize();
  const isDesktopCondition = width >= 1024;

  /**Spring Section**/
  //__spring for "buttonOn"
  const animation1Ref = useSpringRef();
  const spring1 = useSpring({
    ref: animation1Ref,
    config: springConfigs.heavyAndSlow,
    from: { y: '0', opacity: '1' },
    to: {
      y: !isDesktopCondition ? '0' : askAI ? '200%' : '0',
      x: isDesktopCondition ? '0' : askAI ? '-110%' : '0',
      opacity: askAI ? '0' : '1',
    },
  });
  //__spring for "buttonOff"
  const animation2Ref = useSpringRef();
  const spring2 = useSpring({
    ref: animation2Ref,
    config: springConfigs.heavyAndSlow,
    from: { y: '-200%', opacity: '0' },
    to: {
      y: !isDesktopCondition ? '0' : askAI ? '0' : '-200%',
      x: isDesktopCondition ? '0' : askAI ? '0' : '-200%',
      opacity: askAI ? '1' : '0',
    },
  });
  /*
  ___1. value '1000' is a timeframe; can be ommited 
  ___2. value [number, number] is a number array of timesteps
  ___3. how it works? timesteps * timeframe; in my case it is a 1200 ms delay between both animations; 
  */
  useChain([animation1Ref, animation2Ref], [1, 1], 1200);

  /*
  __1. this intersection obserwer works as alternative "buttonOff"
  __2. if user doesn't turn off "Philosophers" expicitelly, it should do it 
  */
  const [ref, inView] = useInView({
    /*
    ___1. rootMarginthat is the viewPort 
    ___2. initially the whole viewPort is an observableArea
    ___3. it's possible to manipulate all observableArea's margins so that some innerAreas aroun top, left, bottom and right might be excluded from observation; here observed object is invissible;
    ___4. order of cutting: top, _ , bottom, _  
    ___5. if top = 20% => imagine a line 20% of viewPort height from the top, and this is the margin; when observed object reaches the margin it becomes invissible;
    */
    rootMargin: '0% 0px 0% 0px',
    /*
    ___1. amount has valu from range [0,1]
    ___2. We set how much of observed element shoud be in observableArea to make it fully observable
    */
    amount: 0.85,
  });

  //__________________
  const [makeVisible, setMakeVisible] = useState(true);
  const val = (width / height).toString();
  const debouncedValue = useDebounce<string>(val, height * 2.9);

  useEffect(() => {
    setMakeVisible(false);
    setAskAI(false);
    // window.scrollTo(0, 0);
    // if (condition) {
    //   setMakeVisible(true);
    //   window.scrollTo(0, 0);
    // }
  }, [width, height, setAskAI]);
  /*
  ___1. let overlay be invisible!
  */
  useEffect(() => {
    // window.scrollTo(0, 0);
    setMakeVisible(true);
    // setCounter(val => val + 1);
  }, [debouncedValue]);

  /**...*/
  useEffect(() => {
    if (!inView) {
      setAskAI(false);
      // console.log('if (!inView && makeVisible){}.....');
    }
  }, [inView, setAskAI]);

  useEffect(() => {
    // console.log('if (!inView && makeVisible){}.....');
    // console.log('makeVisible:', makeVisible);
    console.log('inView:', inView);
  }, [inView]);

  /**JSX**/
  return (
    <div
      ref={ref} //ref from react-spring isInView
      className="w-full h-full fc "
    >
      <div className="relative flex items-center w-[94%] lg:w-[90%] h-[90%]  border-l border-corpo pl-4 lg:pl-10 overflow-hidden">
        <animated.div
          className={`${askAI ? 'pointer-events-none' : 'pointer-events-auto'}`}
          // className="pointer-events-none"
          style={spring1}
        >
          <DoubtsSection />
        </animated.div>
        <div className="absolute bottom-0 left-0 flex items-end justify-end pl-4 pr-4 lg:pl-10 ">
          <animated.div
            style={spring2}
            className={`lg:hidden fc bg-corpo w-[28px] h-[28px] ${
              askAI ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <ButtonSwitcher onClickHandler={setAskAI}>
              <CloseXIcon />
            </ButtonSwitcher>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default AskAI;

{
  /* <animated.div
            style={spring2}
            className={` hidden lg:block ${
              askAI ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <ThanksAISection />
          </animated.div> */
}

{
  /* {transitions(style => (
          <animated.div style={style}>
            <DoubtsSection />
          </animated.div>
        ))} */
}
{
  /* <animated.div style={spring2}>
          <ThanksAISection />
        </animated.div> */
}

// const transitions = useTransition(askAI, {
//   ref: animation1Ref,
//   exitBeforeEnter: true,
//   config: springConfigs.heavyAndSlow,
//   keys: null,
//   // key: askAI,
//   from: { opacity: 1, y: '0' },
//   enter: { opacity: 1, y: '0' },
//   leave: { opacity: 0, y: '200%' },
// });
