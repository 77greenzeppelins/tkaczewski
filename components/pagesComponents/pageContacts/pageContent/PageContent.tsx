'use client';
import React from 'react';
/**Spring Staff*/
import { SpringValue, animated } from '@react-spring/web';
import {
  DirectContactsSection,
  // GitHubSection,
  GitHubSectionTrans,
  OtherContactsSection,
} from '@/components';

/**TS**/
interface Props {
  transform?: SpringValue<string>;
  hintIsMobile: boolean;
  isVisible?: boolean;
}

/**-------------------------------**/
const PageContent = ({ transform, hintIsMobile, isVisible = false }: Props) => {
  const componentsArray = [
    { Component: DirectContactsSection },
    { Component: OtherContactsSection },
    { Component: GitHubSectionTrans },
  ];

  /**JSX**/
  return (
    <animated.div
      /*
    ___1. transform is an optional props; 
    ___2. in case of mobile, transform is not passed; when we pass nothing style is just "undefined"
    ___3. in case of desktop transform has some SpringValue and behave like pseudoScrollableContainer
    ___4. in case of desktop we actually have two PageContent>s one is invisible and play role of scrollableContainer and the second one is visible, rendered as <StickyContainer> child 
    */
      style={{ transform }}
      data-component="PageContactContent"
      // className={`${
      //   hintIsMobile ? '' : 'absolute inset-0 w-full pointer-events-none'
      // }`}
      className={`${hintIsMobile ? '' : isVisible ? 'opacity-1' : 'opacity-0'}`}
    >
      {componentsArray.map(({ Component }, i) => (
        <div
          key={i}
          // className="w-full h-screen "
          //____border-b border-darkTint
        >
          <Component />
        </div>
      ))}
    </animated.div>
  );
};

export default PageContent;

// className={`absolute inset-0 w-full h-[100vh] wrapper-1`}
// ${inView ? 'translate-x-0' : 'translate-x-[105%]'}
// style={{ transform }}
// style={{ transform: `translateX(${x}px)` }}

{
  /* <div className="flex flex-col items-start justify-center w-full gap-6 ">
          <p className="select-none p-medium text-corpo">
            If you want to see my GitHub ?
          </p>
          <p className="select-none p-medium text-corpo">Just let me know...</p>
        </div> */
}
{
  /* <div className="fc flex-col gap-y-2 bg-blue-600 h-[50%] w-[50%]">
          <button className="px-2 py-3 border border-dark" onClick={onClickUp}>
            CLICK + 1
          </button>
          <button
            className="px-2 py-3 border border-dark"
            onClick={onClickDown}
          >
            CLICK - 1
          </button>
          <p>{clickNumber}</p>
        </div> */
}
