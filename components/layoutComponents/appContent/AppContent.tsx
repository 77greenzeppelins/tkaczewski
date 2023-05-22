'use client';
import React, { useRef } from 'react';
/**Components**/
import Scene3D from '@/components/3D/3D_Scene/Scene3D';
import ScrollProgressDisplayer from '@/components/multipagesComponents/scrollProgressDisplayer/ScrollProgressDisplayer';

/**TS**/
// import { PageProps } from '@/ts/typeScriptStaff';

// const sceneWrapperConfig =
//   'fixed top-0 left-0 w-full h-full overflow-hidden z-1';

// const canvasWrapperStyle =
//   'relative w-full h-full overflow-hidden pointer-events-none bg-corpo';

// interface PageProps {
//   //   pageRef: React.MutableRefObject<any>;
//   fakeVal: number;
// }

// export const LayoutContext = createContext<PageProps>({
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   //   pageRef: ,
//   fakeVal: 0,
// });

/**----------------------------------------------------------------------**/
const AppContent = ({ children }: { children: React.ReactNode }) => {
  /**References**/
  const scrollProgress = useRef<number>(0);
  const scrollableContainer = useRef<HTMLDivElement>(null!);

  /**JSX**/
  return (
    // <LayoutContext.Provider value={{ fakeVal }}>
    <div className="root">
      <div className="content3D relative">
        <Scene3D scrollProgress={scrollProgress} />
      </div>
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
        <div className="fixed top-[80px] left-[20px] m-[10px] text-light text-[1rem] pointer-events-none slashed-zero tabular-nums z-[15]">
          {scrollProgress.current.toFixed(2).toString()}
        </div>
        <main
          className="z-10 w-full h-full"
          //  className="app"
        >
          {children}
        </main>
      </div>
    </div>
    // </LayoutContext.Provider>
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
