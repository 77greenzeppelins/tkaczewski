import { useEffect, useState } from 'react';

interface ScrollYPosition {
  val: number;
}

const useScrollPosition = (): ScrollYPosition => {
  //___

  const [scrollYPosition, setScrollY] = useState({ val: 0 });

  useEffect(() => {
    //___handler
    const onScroll = () => {
      const { scrollY } = window;
      // console.log('...yOffset', pageYOffset, '...scrollY', scrollY);
      setScrollY({ val: scrollY });
    };
    //___event listener
    window.addEventListener('scroll', onScroll); //, { passive: true }
    //document.body.
    //___ event cleaner
    () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollYPosition;
};

export default useScrollPosition;
