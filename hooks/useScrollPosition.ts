import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //___handler
    const onScroll = () => {
      const { pageYOffset } = window;
      // console.log('...yOffset', pageYOffset, '...scrollY', scrollY);
      setScrollY(pageYOffset);
    };
    //___event listener
    window.addEventListener('scroll', onScroll); //, { passive: true }
    //document.body.
    //___ event cleaner
    () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
};

export default useScrollPosition;
