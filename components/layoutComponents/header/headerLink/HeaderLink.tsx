'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';

/**TS**/
interface Props {
  label: string;
  url: string;
}

/**------------------------------------------------------**/
const HeaderLink: React.FC<Props> = ({ label, url }) => {
  /**Hooks Section**/
  const path = usePathname();
  const isActive = path === url;
  // console.log('isActive', isActive);

  /**JSX**/
  return (
    <Link
      href={url}
      aria-label={`Link do strony ${label}`}
      aria-current={isActive ? 'page' : undefined}
      scroll={false}
      className="relative disable"
    >
      {url === path && (
        <motion.span
          // layoutId="underline" // don't cooperate with canvas....
          className="absolute top-full block h-[1px] bg-corpo origin-center"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )}

      <p
        className={`text-light ${
          isActive ? 'hover:text-light' : 'hover:text-corpo'
        }  delay-100 duration-300 ease-linear`}
      >
        {label}
      </p>
    </Link>
  );
};

export default HeaderLink;
