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
  phoneContainerStyle?: string;
  emailContainerStyle?: string;
  buttonWidth?: number;
  buttonHeight?: number;
}
/**------------------------------------**/
const InstantContactButtons2D = ({
  containerStyle,
  buttonsWidth,
  buttonsHeight,
  phoneContainerStyle,
  emailContainerStyle,
  buttonWidth = 0.2,
  buttonHeight = 0.28,
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
      {buttonContent.map(({ Component }, i) => (
        <div
          data-component={`InstantContactButton2D__${buttonContent[i].name}`}
          key={i}
          className={`bg-corpo opacity-25 ${containerStyle[i]}`}
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

      {/* <div
        className={`flex justify-center h-[50%] w-full ${
          phoneContainerStyle ? phoneContainerStyle : 'pt-[10vh]'
        } `}
      >
        <div
          // className="no-sparkling"
          className="bg-corpo opacity-25"
          style={{ width: height * buttonWidth, height: height * buttonHeight }}
        >
          <DirectPhone
            aStyle={'block w-full h-full no-sparkling'}
            hasLabel={false}
          />
        </div>
      </div> */}

      {/* <div
        className={`flex justify-center h-[50%] w-full ${
          emailContainerStyle ? emailContainerStyle : 'pt-[12vh]'
        } `}
      >
        <div
          className="bg-corpo opacity-25"
          style={{ width: height * buttonWidth, height: height * buttonHeight }}
        >
          <DirectEmail
            aStyle={'block w-full h-full no-sparkling'}
            hasLabel={false}
          />
        </div>
      </div> */}
    </div>
  );
};

export default InstantContactButtons2D;
