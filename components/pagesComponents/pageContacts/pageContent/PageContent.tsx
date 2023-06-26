'use client';
import React from 'react';
/**Spring Staff*/
import { SpringValue, animated } from '@react-spring/web';
import {
  DirectContactsSection,
  GitHubSection,
  OtherContactsSection,
} from '@/components';

/**TS**/
interface Props {
  transform?: SpringValue<string>;
  opacity?: SpringValue<number>;
  hintIsMobile: boolean;
  // stateSetter: Dispatch<SetStateAction<boolean>>;
}

/**-------------------------------**/
const PageContent = ({ transform, hintIsMobile, opacity }: Props) => {
  //   const [squareRef, { height }] = useElementSize();
  //   const [ref, bounds] = useMeasure({ scroll: true });
  //   useEffect(() => {
  //     console.log('bounds.height', bounds.height);
  //   }, [bounds.height]);

  // const finalStyles = true ? transform : null

  /**JSX**/
  return (
    <animated.div
      style={{ transform }}
      //   ref={squareRef}
      //   ref={ref}
      data-component="PageContent"
      className="absolute inset-0 w-full pointer-events-none"
    >
      <div className="fc h-screen w-[1px]" />
      <div
        className={`fc h-screen w-full wrapper-1 pointer-events-none ${
          hintIsMobile ? 'bg-dark' : ''
        }`}
      >
        <DirectContactsSection />
      </div>
      <div
        className={`fc h-screen w-full wrapper-1 ${
          hintIsMobile ? 'bg-dark' : ''
        }`}
      >
        <OtherContactsSection />
      </div>
      <div
        className={`fc h-screen w-full wrapper-1 ${
          hintIsMobile ? 'bg-dark' : ''
        }`}
      >
        <GitHubSection />
        {/* <div className="flex flex-col gap-6 items-start justify-center w-full ">
          <p className="p-medium text-corpo select-none">
            If you want to see my GitHub ?
          </p>
          <p className="p-medium text-corpo select-none">Just let me know...</p>
        </div> */}
        {/* <div className="fc flex-col gap-y-2 bg-blue-600 h-[50%] w-[50%]">
          <button className="border border-dark px-2 py-3" onClick={onClickUp}>
            CLICK + 1
          </button>
          <button
            className="border border-dark px-2 py-3"
            onClick={onClickDown}
          >
            CLICK - 1
          </button>
          <p>{clickNumber}</p>
        </div> */}
      </div>
    </animated.div>
  );
};

export default PageContent;

// className={`absolute inset-0 w-full h-[100vh] wrapper-1`}
// ${inView ? 'translate-x-0' : 'translate-x-[105%]'}
// style={{ transform }}
// style={{ transform: `translateX(${x}px)` }}
