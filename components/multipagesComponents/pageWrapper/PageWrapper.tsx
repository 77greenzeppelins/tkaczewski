'use client'; //required by "motion" component
import React from 'react';
/**FramerMotion Staff*/
import { animated, useTransition } from '@react-spring/web';
/**FramerMotion Staff*/
// import { motion } from 'framer-motion';

/**TS**/
interface Props {
  children: React.ReactNode;
}

/**--------------------------------------------**/
const PageWrapper = ({ children }: Props) => {
  /**Spring Section*/
  const transitions = useTransition(children, {
    // from: { opacity: 0, config: { duration: 0 } },
    // enter: { opacity: 1, config: { duration: 0 } },
    // leave: { opacity: 0, config: { duration: 0 } },
    from: { opacity: 0 },
    enter: { opacity: 1, config: { duration: 1000 } },
    leave: { opacity: 0, config: { duration: 1000 } },
    exitBeforeEnter: true,
  });

  /**JSX**/
  return transitions(style => (
    <animated.div data-component="PageWrapper" style={style}>
      {children}
    </animated.div>
  ));

  // return (
  //   <motion.div
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1, transition: { duration: 0.6 } }}
  //     exit={{ opacity: 0 }}
  //     className="w-full h-full"
  //   >
  //     {children}
  //   </motion.div>
  // );
};

export default PageWrapper;

/*
  this useEffect() solve the following issue: user scrolls the page => canvas scrolls and 2D staff scrolls => but when user refreshes the page canvas goes to starting point but  2D staff remains on scrolled position => after the very next scroll canvas quickly  readjust to the most current scroll popsition => it's a very poor UX
  */
// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);
