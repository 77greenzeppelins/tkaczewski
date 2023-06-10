'use client';
import React, { useEffect } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import DoubtsSection from './doubtsSection/DoubtsSection';
import ThanksAISection from './ThanksAISection/ThanksAISection';
import ButtonSwitcher from '@/components/multipagesComponents/_basicComponents/buttons/buttonSwitcher/ButtonSwitcher';
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
import CloseXIcon from '@/components/svg/CloseXIcon';
import useWindowSize from '@/hooks/useWindowSize';

/**------------------------**/
const AskAI = () => {
  /**GlobalContext Section**/
  const { askAI, setAskAI } = useGlobalContext();
  /**Staff for responsiveness condition**/
  const { width } = useWindowSize();
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
    rootMargin: '-10% 0px -10% 0px',
    /*
    ___1. amount has valu from range [0,1]
    ___2. We set how much of observed element shoud be in observableArea to make it fully observable
    */
    amount: 0.7,
  });

  useEffect(() => {
    if (!inView) {
      setAskAI(false);
    }
  }, [inView, setAskAI]);

  /**JSX**/
  return (
    <div
      ref={ref} //ref from react-spring isInView
      className=" fc w-full h-full"
    >
      <div className="relative flex items-center w-[94%] lg:w-[90%] h-[90%]  border-l border-corpo pl-4 lg:pl-10 overflow-hidden">
        <animated.div
          className={`${askAI ? 'pointer-events-none' : 'pointer-events-auto'}`}
          // className="pointer-events-none"
          style={spring1}
        >
          <DoubtsSection />
        </animated.div>
        <div className="absolute flex justify-end items-end bottom-0 left-0 pl-4 lg:pl-10  pr-4">
          <animated.div
            style={spring2}
            className={` hidden lg:block ${
              askAI ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <ThanksAISection />
          </animated.div>
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
