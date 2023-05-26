import React from 'react';
/**Components**/
import HeaderLink from './headerLink/HeaderLink';
/**BasicData**/
import { pagesLinks } from '@/data/basicData';

/**---------------------------**/
export const Header = () => {
  /**JSX**/
  return (
    <header className="fixed w-full top-0 left-0 right-0 h-[50px] z-[500] bg-dark">
      <div className="h-fullw-full wrapper-1">
        <ul className="flex items-center justify-end h-full gap-6 ">
          {pagesLinks.map(link => (
            <li key={link.href}>
              <HeaderLink label={link.label} url={link.href} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
