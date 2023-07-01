'use client';
import React, { useEffect } from 'react';
/**Components**/
import HeaderLink from '../headerLink/HeaderLink';
/**Sp[ring Staff**/
import { useSpring, animated, useSpringRef } from '@react-spring/web';
import { easings } from '@react-spring/web';
/**BasicData**/
import { animationsDelays, pagesLinks } from '@/data/basicData';

/**-----------------------**/
const HeaderNav = () => {
  /*
  ___1. this springRef if 
  */
  const springApi = useSpringRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      springApi.start();
    }, animationsDelays.manuDelay);
    return () => {
      clearTimeout(timer);
    };
  }, [springApi]);

  /**Spring Section**/
  const props = useSpring({
    ref: springApi,
    from: { opacity: 0 },
    to: { opacity: 1, config: { easings: easings.easeOutExpo } },
    // config: { mass: 100 }, //large mass gives some effect of delay yet hard to specify preciselly;
  });

  /**JSX**/
  return (
    <animated.nav style={props} className="relative w-full wrapper-1">
      <ul className="flex items-center justify-end gap-8 ">
        {pagesLinks.map(link => (
          <li key={link.href} className="fc h-[60px]">
            <HeaderLink label={link.label} url={link.href} />
          </li>
        ))}
      </ul>
    </animated.nav>
  );
};

export default HeaderNav;
