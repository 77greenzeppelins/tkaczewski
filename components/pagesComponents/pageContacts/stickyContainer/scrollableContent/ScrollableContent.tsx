'use client';
import React, { useEffect, useState } from 'react';
/**Hooks**/
import useMeasure from 'react-use-measure';
import useElementSize from '@/hooks/useElementSize';
/**Spring Staff*/
import { SpringValue, animated } from '@react-spring/web';

/**TS**/
interface Props {
  transform: SpringValue<string>;
  // stateSetter: Dispatch<SetStateAction<boolean>>;
}

/**-------------------------------**/
const ScrollableContent = ({ transform }: Props) => {
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
      className={`absolute inset-0 w-full wrapper-1 `}
    >
      <div className="fc h-screen w-full" />
      <div className="fc h-screen w-full">
        <div className="fc flex-col gap-y-2 bg-yellow-600 h-[50%] w-[50%]">
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
        </div>
      </div>
      <div className="fc h-screen w-full">
        <div className="fc flex-col gap-y-2 bg-green-600 h-[50%] w-[50%]">
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
        </div>
      </div>
      <div className="fc h-screen w-full">
        <div className="fc flex-col gap-y-2 bg-blue-600 h-[50%] w-[50%]">
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
        </div>
      </div>
    </animated.div>
  );
};

export default ScrollableContent;

// className={`absolute inset-0 w-full h-[100vh] wrapper-1`}
// ${inView ? 'translate-x-0' : 'translate-x-[105%]'}
// style={{ transform }}
// style={{ transform: `translateX(${x}px)` }}
