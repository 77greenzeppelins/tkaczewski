'use client';
import React from 'react'; //___ { Dispatch, SetStateAction, useEffect }
/**Components**/
import { DirectPhone, DirectEmail } from '@/components';
/**Spring Staff**/
import { useInView, useSpring, animated, SpringValue } from '@react-spring/web';

/**TS**/
interface Props {
  transform?: SpringValue<string>;
  // stateSetter: Dispatch<SetStateAction<boolean>>;
}

/**--------------------------------**/
const GitHubSection = () => {
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
    rootMargin: '10% 0% 10% 0%',
    amount: 0.8,
  });

  const springs = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? '0%' : '-55%',
    config: { mass: 50, tension: 170, friction: 26, clamp: true },
  });

  // useEffect(() => {
  //   stateSetter(inView);
  // }, [inView, stateSetter]);

  /**Basic Data*/
  const dz = ['If you want to see my GitHub', 'Just let me know...'];

  /**JSX**/
  return (
    <div ref={ref} className="relative w-full">
      <div className="flex flex-col gap-0 items-start justify-center w-full">
        {dz.map((item, i) => (
          <div key={item} className=" overflow-hidden">
            <animated.div
              //  style={{ opacity: opacity }}
              // style={springs}
              className={`${
                inView
                  ? 'opacity-100 transition-all duration-1000 delay-0'
                  : 'opacity-0 duration-1000 delay-0'
              } `}
            >
              <p className="p-medium text-corpo select-none">{item}</p>
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubSection;
