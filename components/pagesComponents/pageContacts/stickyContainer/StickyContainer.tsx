import React from 'react';
/**Components*/
import InstantContactButtons2D from '../instantContactButtons/InstantContactButtons2D';
/**Spring Staff*/
import { SpringValue } from '@react-spring/web';
import ContactsDataSection from '../contactsData/ContactsDataSection';

/**TS**/
interface Props {
  // scrollDrivenStyles: { opacity: SpringValue<number> };
  opacity: SpringValue<number>;

  transform: SpringValue<string>;
}

/**-------------------------------**/
const StickyContainer = ({ opacity, transform }: Props) => {
  return (
    <div
      data-component="StickyContainer"
      className="sticky h-screen top-0 bottom-0 inset-x-0 overflow-hidden"
      //___  flex justify-center items-center   -z-10
    >
      <div className="relative w-full h-full">
        {/* <InstantContactButtons2D opacity={opacity} />
      <ContactsDataSection transform={transform} /> */}
        <InstantContactButtons2D opacity={opacity} />
        <ContactsDataSection transform={transform} />

        {/* <div className="h-screen fc">
        <p className="text-5xl text-light">1</p>
      </div>
      <div className="h-screen bg-corpo fc">
        <p className="text-5xl text-light">2</p>
      </div> */}
      </div>
    </div>
  );
};

export default StickyContainer;
