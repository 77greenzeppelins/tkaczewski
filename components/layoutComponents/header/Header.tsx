import React from 'react';
/**Components**/
import HeaderNav from './headerNav/HeaderNav';

/**---------------------------**/
const Header = () => {
  /**JSX**/
  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-[500]`}
      //__height is set in <HeaderNav> | li
    >
      <HeaderNav />
    </header>
  );
};

export default Header;
