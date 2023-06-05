import React from 'react';
/**Components**/
import InViewContainer from '@/components/multipagesComponents/_containers/inViewContainer/InViewContainer';
/**Spring Staff**/
import { animated, useSpring } from '@react-spring/web';

/**TS**/
type Props = {
  inView?: boolean;
  text?: string;
  textStyle?: string;
};

/**-------------------------**/
const AnimatedTextHolder = ({ inView = false, text, textStyle }: Props) => {
  /** */
  const styles = useSpring({
    scale: inView ? 1.5 : 0,
    config: {
      tension: 300,
    },
  });

  /**JSX**/
  return (
    // <InViewContainer>
    <animated.div style={styles} className="flex flex-col h-[50vh] bg-corpo ">
      <p className="text-3xl text-dark">Per aspera ad astra</p>
      <p className="text-5xl text-dark">Per aspera ad astra</p>
      <p className="text-3xl text-dark">Per aspera ad astra</p>
    </animated.div>

    // </InViewContainer>
  );
};

export default AnimatedTextHolder;
