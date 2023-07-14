'use client';
import React, { useEffect, useRef, useState } from 'react';
/**Hooks Staff**/
import { useMediaQuery } from '@/hooks/useMediaQuery';
import useWindowSize from '@/hooks/useWindowSize';

/**----------------------------**/
const DeviceRotated = () => {
  const [rotation, setRotation] = useState(0);
  const [alteredRotation, setAlteredRotation] = useState(1);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /*
  ___1. this component should be mounted always when height is then 351px | someone plays with scrren and makes it very low;
  ___2. I don't know why I can't use "match" directly... problem: "Text content does not match server-rendered HTML" occures ==> it's a problem of hydration...
  */
  const matches = useMediaQuery('(max-height: 350px)');

  const { width, height } = useWindowSize();
  const portrait = height > width;

  useEffect(() => {
    setRotation(prev => prev + 1);
    // console.log('portrait', portrait);
    timerRef.current = setTimeout(() => {
      setAlteredRotation(prev => prev + 1);
    }, 200);
    /*
    __1. it's a cleaner
    __2. why: setMounted(true) ? when user changes path this component should be mounted again so local state must be true ! 
    */
    return () => {
      //   setMounted(true);
      clearTimeout(timerRef.current as NodeJS.Timeout);
    };
  }, [portrait]);

  console.log('rotation', rotation);
  console.log('alteredRotation', alteredRotation);

  return rotation !== alteredRotation && alteredRotation > 1 ? (
    <div className="fc flex-col gap-3 text-medium text-light w-screen h-screen bg-dark">
      <p>rotation:{rotation}</p>
      <p>alteredRotation:{alteredRotation}</p>

      <p>portrait:{portrait.toString()}</p>
    </div>
  ) : null;
};

export default DeviceRotated;
