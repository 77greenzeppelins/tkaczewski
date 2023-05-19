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
      className="relative"
    >
      {url === path && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 top-full block h-[1px] w-full bg-corpo "
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
