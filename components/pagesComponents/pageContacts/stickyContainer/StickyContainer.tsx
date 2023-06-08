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
  x: SpringValue<number>;
  scale: SpringValue<number>;
  transform: SpringValue<string>;
}

/**-------------------------------**/
const StickyContainer = ({ opacity, x, scale, transform }: Props) => {
  return (
    <div
      data-component="StickyContainer"
      className="sticky top-0 flex justify-center items-center h-[100vh] w-full z-1"
    >
      <InstantContactButtons2D opacity={opacity} />
      <ContactsDataSection
        x={x}
        opacity={opacity}
        scale={scale}
        transform={transform}
      />
    </div>
  );
};

export default StickyContainer;
