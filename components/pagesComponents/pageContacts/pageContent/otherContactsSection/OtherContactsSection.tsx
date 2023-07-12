'use client';
import React, { useEffect, useRef } from 'react';
/**Spring Staff**/
import { useInView, animated, SpringValue } from '@react-spring/web';
import { useGlobalContext } from '@/context/globalContext';
/**Basic Data**/
// import { basicConfigs } from '@/data/basicData';
// const {
//   pageContact: { rootMargin, amount, inViewStyle },
// } = basicConfigs;

/**--------------------------------**/
const OtherContactsSection = () => {
  /*
  ___1. why BC?
  */
  const { setIsDz } = useGlobalContext();

  /**Spring Section**/
  const [ref, inView] = useInView({
    /*
    ___1. rootMarginthat is the viewPort 
    ___2. initially the whole viewPort is an observableArea
    ___3. it's possible to manipulate all observableArea's margins so that some innerAreas aroun top, left, bottom and right might be excluded from observation; here observed object is invissible;
    ___4. order of cutting: top, _ , bottom, _  
    ___5. if top = 20% => imagine a line 20% of viewPort height from the top, and this is the margin; when observed object reaches the margin it becomes invissible;
    */
    // rootMargin: '0% 0px 0% 0px',
    /*
    ___1. amount has valu from range [0,1]
    ___2. We set how much of observed element shoud be in observableArea to make it fully observable
    */
    // amount: 1,
    //___
    rootMargin: '0% 0px 0% 0px',
    amount: 0.1,
  });

  /**reference for setTimeout() ID**/
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(
      () => {
        setIsDz(inView);
      },
      inView ? 400 : 0
    );

    return () => {
      clearTimeout(timerRef.current as NodeJS.Timeout);
    };
  }, [inView, setIsDz]);

  /**Basic Data*/
  const dz = ['Dzi', 'erżo', 'niów'];

  /**JSX**/
  return (
    <div
      ref={ref}
      className="relative flex w-full h-screen wrapper-1"
      //___border-t border-b border-orange-600
    >
      {/* <p className="relative font-serif select-none p-u-large text-corpo z-2">
        {inView.toString()}
      </p> */}

      {/* <div className="flex flex-col items-start justify-center w-full gap-0">
        {dz.map((item, i) => (
          <div key={item} className="overflow-hidden ">
            <animated.div
              //  style={{ opacity: opacity }}
              // style={springs}
              className={`${inView ? inViewStyle.show : inViewStyle.hide} `}
            >
              <p className="font-serif select-none p-u-large text-corpo">
                {item}
              </p>
            </animated.div>
          </div>
        ))}
      </div> */}
      {/* <div className={`${inView ? inViewStyle.show : inViewStyle.hide} `}>
        <p className="select-none p-medium text-corpo">Poland</p>
      </div> */}
    </div>
  );
};

export default OtherContactsSection;
