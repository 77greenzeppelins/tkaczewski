'use client';
import React, { useEffect, useState } from 'react';
/**Hooks Staff**/
import { useMediaQuery } from '@/hooks/useMediaQuery';

const NotHeightEnought = () => {
  const [isLow, setIsLow] = useState(false);
  /*
  ___1. this component should be mounted always when height is then 351px | someone plays with scrren and makes it very low;
  ___2. I don't know why I can't use "match" directly... problem: "Text content does not match server-rendered HTML" occures ==> it's a problem of hydration...
  */
  const matches = useMediaQuery('(max-height: 550px)');

  useEffect(() => {
    setIsLow(matches);
  }, [matches]);

  /**JSX**/
  return isLow ? (
    <div className="fc text-medium text-light w-screen h-screen bg-dark">
      <p>3D elements need at lest 500px</p>
    </div>
  ) : null;
};

export default NotHeightEnought;
