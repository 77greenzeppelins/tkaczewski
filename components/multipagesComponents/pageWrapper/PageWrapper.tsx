'use client';
import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**TS**/
interface Props {
  children: React.ReactNode;
}

/**--------------------------**/
const PageWrapper = ({ children }: Props) => {
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
