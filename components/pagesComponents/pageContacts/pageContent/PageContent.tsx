'use client';
import React, { useEffect, useState } from 'react';
/**Spring Staff*/
import { SpringValue, animated } from '@react-spring/web';
import { DirectContactsSection } from '@/components';

/**TS**/
interface Props {
  transform?: SpringValue<string>;
  hintIsMobile: boolean;
  // stateSetter: Dispatch<SetStateAction<boolean>>;
}

/**-------------------------------**/
const PageContent = ({ transform, hintIsMobile }: Props) => {
  /**Some fake state**/
  const [clickNumber, setClickNumber] = useState(0);

  const onClickUp = () => {
    setClickNumber(prev => prev + 1);
  };
  const onClickDown = () => {
    setClickNumber(prev => prev - 1);
  };

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
      data-component="ScrollableContent"
      className="absolute inset-0 w-full "
    >
      <div className="fc h-screen w-full" />
      <div
        className={`fc h-screen w-full wrapper-1 ${
          hintIsMobile ? 'bg-dark' : ''
        }`}
      >
        <DirectContactsSection />
        {/* <div className="fc flex-col gap-y-2 bg-yellow-600 h-[50%] w-[50%]">
          <p>{hintIsMobile ? 'MOBILE' : 'DESKTOP'}</p>
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
      <div
        className={`fc h-screen w-full wrapper-1 ${
          hintIsMobile ? 'bg-dark' : ''
        }`}
      >
        <div className="flex flex-col gap-6 items-start justify-center w-full ">
          <p className="p-v-large text-corpo select-none">Dzierżoniów</p>
          <p className="p-medium text-corpo">Poland</p>
        </div>
        {/* <div className="fc flex-col gap-y-2 bg-green-600 h-[50%] w-[50%]">
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
      <div
        className={`fc h-screen w-full wrapper-1 ${
          hintIsMobile ? 'bg-dark' : ''
        }`}
      >
        <div className="flex flex-col gap-6 items-start justify-center w-full ">
          <p className="p-medium text-corpo select-none">
            Wanna see my GITHUB ?
          </p>
          <p className="p-medium text-corpo select-none">Just let me know...</p>
        </div>
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
