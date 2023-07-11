'use client';
import React from 'react';
/**Components**/
import { GitHubIcon } from '@/components';
/**Spring Staff**/
import { useInView, animated } from '@react-spring/web';
/**Basic Data**/
import { basicConfigs, colors } from '@/data/basicData';
import { pageContactsText } from '@/data/textData';
const {
  pageContact: { rootMargin, amount, inViewStyle },
} = basicConfigs;
const { gitHub } = pageContactsText;

pageContactsText;
/**--------------------------------**/
const GitHubSectionTrans = () => {
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
    rootMargin: rootMargin,
    amount: amount,
    /*
    rootMargin: '10% 0% 10% 0%',
    amount: 0.5,
    */
  });

  /**JSX**/
  return (
    <div ref={ref} className="relative w-full h-full">
      <div className="flex flex-col items-start justify-between w-full h-full py-[60px] wrapper-1">
        <div className={`${inView ? inViewStyle.show : inViewStyle.hide}`}>
          <p className="select-none p-medium text-corpo">{gitHub[0]}</p>
        </div>
        <div className={`${inView ? inViewStyle.show : inViewStyle.hide} `}>
          <p className="select-none p-medium text-corpo">{gitHub[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubSectionTrans;

{
  /* {dz.map((item, i) => (
          <div key={item} className="overflow-hidden ">
            <animated.div
              className={`${inView ? inViewStyle.show : inViewStyle.hide} `}
            >
              <p className="select-none p-medium text-corpo">{item}</p>
            </animated.div>
          </div>
        ))} */
}
