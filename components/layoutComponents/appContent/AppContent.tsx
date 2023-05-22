'use client';
import React, { useRef } from 'react';
/**Components**/
import Scene3D from '@/components/3D/3D_Scene/Scene3D';
import CanvasWithHtml from '@/components/3D/_Drei/canvas/CanvasWithHtml';

/**----------------------------------------------------------------------**/
const AppContent = ({ children }: { children: React.ReactNode }) => {
  /**References**/
  const scrollProgress = useRef<number>(0);
  const scrollableContainer = useRef<HTMLDivElement>(null!);

  /**JSX**/
  return (
    <div id="root" className="root">
      <Scene3D scrollProgress={scrollProgress} />
      {/* <CanvasWithHtml /> */}
      <div
        className="content2D scroll-bar-style"
        onScroll={event => {
          /*
          1__initially event.target is of type EventTarget and has only three methods;
          2__target object has lots of properties, yet EventTarget doesn't inherit from HTMLElements by defaults, because HTML elements are not the only things that can be event targets;
          3__cast the type of event.target to HTMLDivElement when creating the target variable 
          */
          const target = event.target as HTMLDivElement;
          scrollProgress.current =
            target.scrollTop / (target.scrollHeight - window.innerHeight);
          scrollableContainer.current.innerText =
            scrollProgress.current.toFixed(2);
          // console.log('scroll.current: ', scroll.current);
          // console.log('target.scrollHeight: ', target.scrollHeight);
          // scrollProgress.current.innerText = target.scrollHeight.toString();
        }}
      >
        <div
          ref={scrollableContainer}
          className="fixed top-[50px] left-[20px] m-[10px] text-light text-[1rem] pointer-events-none slashed-zero tabular-nums z-[15]"
        >
          0.00
        </div>
        <main className="z-10 w-full h-full">{children}</main>
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
