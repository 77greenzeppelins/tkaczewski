'use client';
import React from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import DoubtsSection from './doubtsSection/DoubtsSection';
import ThanksAISection from './ThanksAISection/ThanksAISection';
import ButtonSwitcher from '@/components/multipagesComponents/_basicComponents/buttons/buttonSwitcher/ButtonSwitcher';
/**Spring Section*/
import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web';

/**BasicData*/
import { springConfigs } from '@/data/basicData';
import CloseXIcon from '@/components/svg/CloseXIcon';
import useWindowSize from '@/hooks/useWindowSize';

/**------------------------**/
const AskAI = () => {
  /**GlobalContext  Section**/
  const { askAI, setAskAI } = useGlobalContext();
  /**...**/
  const { width } = useWindowSize();
  const condition = width >= 1024;

  const animation1Ref = useSpringRef();
  const spring1 = useSpring({
    ref: animation1Ref,
    config: springConfigs.heavyAndSlow,
    from: { y: '0', opacity: '1' },
    to: { y: askAI ? '200%' : '0', opacity: askAI ? '0' : '1' },
  });

  const animation2Ref = useSpringRef();
  const spring2 = useSpring({
    ref: animation2Ref,
    config: springConfigs.heavyAndSlow,
    from: { y: '-200%', opacity: '0' },
    to: {
      y: askAI ? '0' : '-200%',
      // x: askAI ? '0' : '-200%',
      opacity: askAI ? '1' : '0',
    },
  });

  const animationMobileRef = useSpringRef();
  const springMobile = useSpring({
    ref: animationMobileRef,
    config: springConfigs.heavyAndSlow,
    from: { x: '-200%', opacity: '0' },
    to: {
      x: askAI ? '0' : '-200%',
      opacity: askAI ? '1' : '0',
    },
  });

  const finalRef = condition ? animation2Ref : animationMobileRef;

  console.log('condition:', condition);
  console.log('finalRef:', finalRef);

  /*
  ___1. valu '1000' is a timeframe; can be ommited 
  ___2. value [number, number] is a number array of timesteps
  ___3. how it works? timesteps * timeframe; in my case it is a 1200 ms delay between both animations; 
  */
  useChain([animation1Ref, finalRef], [1, 1], 1200);

  /**JSX**/
  return (
    <div className=" fc w-full h-full">
      <div className="relative flex items-center w-[96%] lg:w-[90%] h-[90%]  border-l border-corpo pl-10">
        <animated.div
          className={`${askAI ? 'pointer-events-none' : 'pointer-events-auto'}`}
          // className="pointer-events-none"
          style={spring1}
        >
          <DoubtsSection />
        </animated.div>
        <div className="absolute flex justify-end items-end bottom-0 left-0 pl-10 overflow-hidden pr-4">
          <animated.div
            style={spring2}
            className={` hidden lg:block ${
              askAI ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <ThanksAISection />
          </animated.div>
          <animated.div
            style={springMobile}
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
