import React, { useState } from 'react';
/**Components*/
import {
  InstantContactButtons2D,
  ContactsDataSection,
  ScrollableContent,
} from '@/components';
/**Spring Staff*/
import { SpringValue, animated } from '@react-spring/web';

/**TS**/
interface Props {
  // scrollDrivenStyles: { opacity: SpringValue<number> };
  opacity: SpringValue<number>;
  transform: SpringValue<string>;
  hintIsMobile: boolean;
}

/**-------------------------------**/
const StickyContainer = ({ opacity, transform, hintIsMobile }: Props) => {
  /****/
  // const [inView, setInView] = useState(false);

  /**JSX**/
  return (
    <div
      data-component="StickyContainer"
      className="sticky h-screen top-0 bottom-0 inset-x-0 overflow-hidden -z-0"
      //___  flex justify-center items-center   -z-10
    >
      <div className="relative w-full h-full">
        <div className="relative w-full h-full">
          <InstantContactButtons2D
            //___array order: [ top = phone , bottom = email ]
            containerStyle={[
              'absolute top-[11.5vh] ',
              'absolute bottom-[11vh] ml-[180px]',
            ]}
            buttonsWidth={[0.3, 0.22]}
            buttonsHeight={[0.4, 0.3]}
          />
          <animated.div
            style={{ opacity: opacity }}
            className="absolute inset-0 bg-dark pointer-events-none"
          />
        </div>
        <ScrollableContent transform={transform} hintIsMobile={hintIsMobile} />
        {/* <ContactsDataSection transform={transform} stateSetter={setInView} /> */}
        {/* <div className="fixed top-[100px] left-0 bg-corpo">
          {inView.toString()}
        </div> */}
      </div>
    </div>
  );
};

export default StickyContainer;
