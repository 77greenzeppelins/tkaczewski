'use client';
import React, { useRef } from 'react';
/**Components**/
import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
/**FramerMotion*/
import { useScroll } from 'framer-motion';

/**----------------------------------------------------------------------**/
const AppContent = ({ children }: { children: React.ReactNode }) => {
  /**References**/
  const scrollProgress = useRef<number>(0);
  const scrollProgressDisplayer = useRef<HTMLDivElement>(null!);
  const prevScrollPosRef = useRef(0);
  const direction = useRef(0);

  /**...**/
  const scrollableElement = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({ container: scrollableElement });

  /**JSX**/
  return (
    <div data-component="AppContent" id="root" className="root">
      <div
        className="content3D "
        //___relative z-10 pointer-events-none
      >
        <MainCanvas
          scrollProgress={scrollProgress}
          direction={direction}
          scrollYProgress={scrollYProgress}
        />
      </div>
      <div
        ref={scrollableElement}
        id="container2D"
        className="content2D scroll-bar-style"
        onScroll={event => {
          /*
          1__initially event.target is of type EventTarget and has only three methods;
          2__target object has lots of properties, yet EventTarget doesn't inherit from HTMLElements by defaults, because HTML elements are not the only things that can be event targets;
          3__cast the type of event.target to HTMLDivElement when creating the target variable 
          */
          const target = event.target as HTMLDivElement;
          /*
          set value of scrollProgress
          */
          scrollProgress.current =
            target.scrollTop / (target.scrollHeight - window.innerHeight);
          scrollProgressDisplayer.current.innerText =
            scrollProgress.current.toFixed(2);
          // console.log('target.scrollTop: ', target.scrollTop);
          // console.log('target.scrollHeight: ', target.scrollHeight);
          // // scrollProgress.current.innerText = target.scrollHeight.toString();
          // console.log('scrollProgress.current: ', scrollProgress.current);

          //___
          const currentScrollPos = target.scrollTop;

          if (currentScrollPos > prevScrollPosRef.current) {
            // console.log('Scrolling down');
            direction.current = 1;
          } else {
            // console.log('Scrolling up');
            direction.current = 0;
          }

          prevScrollPosRef.current = currentScrollPos;
        }}
      >
        <div
          ref={scrollProgressDisplayer}
          className="fixed top-[50px] left-[20px] m-[10px] text-light text-[1rem] pointer-events-none slashed-zero tabular-nums z-[15]"
        >
          0.00
        </div>
        <main id="app-main" className="z-10 w-full h-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppContent;

/**...*/
// useEffect(() => {
//   const handleScroll = () => {
//     const { scrollTop, scrollHeight, clientHeight } =
//       document.documentElement;
//     const newScrollProgress =
//       (scrollTop / (scrollHeight - clientHeight)) * 100;
//     console.log('scrollTop:', scrollTop);
//     console.log('scrollHeight:', scrollHeight);
//     console.log('scrollTclientHeightop:', clientHeight);

//     // console.log('newScrollProgress:', newScrollProgress);
//     // setScrollProgress(newScrollProgress);
//   };

//   // console.log(
//   //   'document.documentElement.scrollTop:',
//   //   document.documentElement.scrollTop
//   // );
//   // console.log(
//   //   'document.documentElement.scrollHeight:',
//   //   document.documentElement.scrollHeight
//   // );
//   // console.log(
//   //   'document.documentElement.clientHeight:',
//   //   document.documentElement.clientHeight
//   // );
//   // console.log('window.innerHeight:', window.innerHeight);
//   // Add event listeners for scroll and resize
//   window.addEventListener('scroll', handleScroll);

//   // Clean up event listeners on component unmount
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, [path]);
