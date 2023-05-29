'use client'; //required by "motion" component
import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**TS**/
interface Props {
  children: React.ReactNode;
}

/**--------------------------------------------**/
const PageWrapper = ({ children }: Props) => {
  /**JSX**/
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;

/*
  this useEffect() solve the following issue: user scrolls the page => canvas scrolls and 2D staff scrolls => but when user refreshes the page canvas goes to starting point but  2D staff remains on scrolled position => after the very next scroll canvas quickly  readjust to the most current scroll popsition => it's a very poor UX
  */
// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);
