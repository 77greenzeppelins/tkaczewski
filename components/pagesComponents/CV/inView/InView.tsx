'use client';
import React from 'react';
/**Components**/
import { useInView, animated } from '@react-spring/web';

/**---------------------*/
const InView = () => {
  /**...*/
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -20,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      /*
      someNumb% <= specifies distance from refObject to topSide of a viewport; the higher number the larger gap when object starts "to-animation" 
      0px,
      someNumb% <= specifies distance from refObject to bottomSide of a viewport,
      0px,
      */
      rootMargin: '-20% 0px -20% 0px',
      //   once: true,
    }
  );

  /**JSX**/
  return (
    <div className="w-full h-[50vh] flex flex-col justify-evenly  bg-corpo px-[10%] overflow-hidden">
      <animated.div ref={ref} style={springs} className="flex flex-col ">
        <p className="text-3xl text-dark">Per InView ad astra</p>
        <p className="text-5xl text-dark">Per InView ad astra</p>
        <p className="text-3xl text-dark">Per InView ad astra</p>
        <button
          onClick={() => console.log('...........')}
          className="w-[100px] h-[100px] bg-dark rounded-md pointer-events-auto"
        />
      </animated.div>
    </div>
  );
};

export default InView;

{
  /* <animated.div ref={ref} style={springs} className="flex flex-col ">
        <p className="text-3xl text-dark">Per aspera ad astra</p>
        <p className="text-5xl text-dark">Per aspera ad astra</p>
        <p className="text-3xl text-dark">Per aspera ad astra</p>
      </animated.div>
      <animated.div ref={ref} style={springs} className="flex flex-col ">
        <p className="text-3xl text-dark">Per aspera ad astra</p>
        <p className="text-5xl text-dark">Per aspera ad astra</p>
        <p className="text-3xl text-dark">Per aspera ad astra</p>
      </animated.div> */
}
