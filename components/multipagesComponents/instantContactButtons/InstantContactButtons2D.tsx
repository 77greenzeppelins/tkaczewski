'use client';
import React from 'react';
/**Hook**/
import useWindowSize from '@/hooks/useWindowSize';
/**Components**/
import { DirectPhone, DirectEmail } from '@/components'; //'@/components'

/**TS**/
interface Props {
  phoneContainerStyle?: string;
  emailContainerStyle?: string;

  buttonWidth?: number;
  buttonHeight?: number;
}
/**------------------------------------**/
const InstantContactButtons2D = ({
  phoneContainerStyle,
  emailContainerStyle,
  buttonWidth = 0.25,
  buttonHeight = 0.3,
}: Props) => {
  /*
  ___1. 3DObjects in canvas reacts (resizes) on viewPort height; this hook is required as these "buttons" have to follow 3DObjects size 
  */
  const { height } = useWindowSize();

  /**Spring Section*/

  return (
    <div className="w-full h-full z-1">
      <div
        className={`flex justify-center h-[50%] w-full ${
          phoneContainerStyle ? phoneContainerStyle : 'pt-[10vh]'
        } `}
      >
        <div
          // className="pointer-events-auto"
          className="bg-corpo opacity-25"
          style={{ width: height * buttonWidth, height: height * buttonHeight }}
        >
          <DirectPhone aStyle={'block w-full h-full'} hasLabel={false} />
        </div>
      </div>

      <div
        className={`flex justify-center h-[50%] w-full ${
          emailContainerStyle ? emailContainerStyle : 'pt-[10vh]'
        } `}
      >
        <div
          // onClick={() => {
          //   console.log('...mail');
          // }}
          className="bg-corpo opacity-25"
          style={{ width: height * buttonWidth, height: height * buttonHeight }}
        >
          <DirectEmail aStyle={'block w-full h-full'} hasLabel={false} />
        </div>
      </div>
    </div>
  );
};

export default InstantContactButtons2D;
