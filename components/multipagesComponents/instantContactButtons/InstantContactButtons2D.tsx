'use client';
import React from 'react';
/**Hook**/
import useWindowSize from '@/hooks/useWindowSize';
/**Components**/
import { DirectPhone, DirectEmail } from '@/components';

/**TS**/
interface Props {
  containerStyle: string[];
  buttonsWidth: number[];
  buttonsHeight: number[];
}
/**------------------------------------**/
const InstantContactButtons2D = ({
  containerStyle,
  buttonsWidth,
  buttonsHeight,
}: Props) => {
  /*
  ___1. 3DObjects in canvas reacts (resizes) on viewPort height; this hook is required as these "buttons" have to follow 3DObjects size 
  */
  const { height } = useWindowSize();

  /**...**/
  const buttonContent = [
    { Component: DirectPhone, name: 'DirectPhone' },
    { Component: DirectEmail, name: 'DirectEmail' },
  ];

  /**JSX**/
  return (
    <div
      data-component="InstantContactButtons2D__container"
      className="relative w-full h-full z-1 flex flex-col items-center"
    >
      {buttonContent.map(({ Component, name }, i) => (
        <div
          data-component={`InstantContactButton2D__${name}`}
          key={i}
          className={` ${containerStyle[i]}`}
          //___bg-corpo opacity-25
          style={{
            width: height * buttonsWidth[i],
            height: height * buttonsHeight[i],
          }}
        >
          <Component
            aStyle={'block w-full h-full no-sparkling'}
            hasLabel={false}
          />
        </div>
      ))}
    </div>
  );
};

export default InstantContactButtons2D;
