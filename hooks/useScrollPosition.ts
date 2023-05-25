import { useCallback, useEffect, useState } from 'react';

const useScrollPosition = () => {
  // if (typeof window === "undefined") return 500;

  // Store the state
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  // On Scroll
  const onScroll = useCallback(() => {
    setScrollPos(window.pageYOffset);
  }, []);

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;

// const useScrollPosition = () => {
//   // if(typeof window === "undefined") return null
//   //___state
//   const [scrollPos, setScrollPos] = useState(window.pageYOffset);

//   //___onScroll Handler
//   const onScroll = () => {
//     setScrollPos(window.pageYOffset);
//   };

//   //___Add and remove the window listener
//   useEffect(() => {
//     window.addEventListener('scroll', onScroll);
//     //___cleaner
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   });

//   //___return valu
//   return scrollPos;
// };

// export default useScrollPosition;

// interface ScrollPosition {
//   scrollX: number;
//   scrollY: number;
// }

// const useScrollPosition = (): ScrollPosition => {
//   const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
//     // scrollX: window.scrollX,
//     // scrollY: window.scrollY,
//     scrollX: window.scrollX,
//     scrollY: window.pageYOffset,
//   });

//   const handleScroll = (): void => {
//     setScrollPosition({
//       scrollX: window.scrollX,
//       scrollY: window.scrollY,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrollPosition.scrollY]);

//   return scrollPosition;
// };

// export default useScrollPosition;
