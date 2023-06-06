import React from 'react';
/**Components**/
import HeaderNav from './headerNav/HeaderNav';

/**---------------------------**/
const Header = () => {
  /**JSX**/
  return (
    <header className={`fixed w-full top-0 left-0 right-0 h-[50px] z-[500] `}>
      <HeaderNav />
    </header>
  );
};

export default Header;
