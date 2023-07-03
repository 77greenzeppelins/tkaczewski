'useClient';
import React from 'react';
/**Utils**/
import { scrollVariant } from './utils/flyingLineUtils';
/**Spring Staff**/
import { animated, useSpring } from '@react-spring/web';

/**TSX**/
interface Props {
  scrollDirection: string;
  bgColor?: string;
  fgColor?: string;
  lineConfig?: string;
}

/**---------------------------------------------------------------------------**/
const FlyingLine = ({
  scrollDirection,
  bgColor,
  fgColor,
  lineConfig,
}: Props) => {
  /*
  __1. staff for animation
  */
  // const springConfig = scrollVariant(scrollDirection);
  const springValues = useSpring({
    ...scrollVariant(scrollDirection),
    config: { duration: 4000 },
    loop: true,
  });

  /**JSX**/
  return (
    <>
      <div
        className={`relative flex justify-end w-[5px] h-full ${
          bgColor ? bgColor : ''
        } `}
      />
      <animated.div
        style={springValues}
        className={`absolute w-[1px] h-full ${
          lineConfig ? lineConfig : 'right-0'
        }  ${
          fgColor ? fgColor : 'bg-gradient-to-b from-light to-transparent'
        } `}
      />
    </>
  );
};

export default FlyingLine;
