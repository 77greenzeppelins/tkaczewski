import React from 'react';
import HeaderLink from './headerLink/HeaderLink';

const links = [
  { href: '/', label: '3D' },
  { href: '/2d', label: '2D' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  /**JSX**/
  return (
    <header
      className={`fixed w-screen top-0 left-0 right-0 h-[50px] z-[500] bg-dark`}
    >
      <div className="h-full wrapper-1">
        <ul className="flex items-center justify-end h-full gap-6 ">
          {links.map(link => (
            <li key={link.href}>
              <HeaderLink label={link.label} url={link.href} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
