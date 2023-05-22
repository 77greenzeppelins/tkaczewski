'use client';
import React, { ReactElement, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
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
  /**...**/
  const path = usePathname();
  // children && console.log('children:',  children.length);
  const pageRef = useRef();
  const caption = useRef();
  const scroll = useRef<number>(0);
  const fakeVal: number = 0;

  /**........*/
  const scrollProgress = useRef<HTMLDivElement>(null!);

  /**JSX**/
  return (
    // <LayoutContext.Provider value={{ fakeVal }}>
    <div className="root">
      <div className="content3D">
        <Scene3D />
      </div>
      <div
        className="content2D"
        onScroll={e => {
          const target = e.target as HTMLDivElement;
          scroll.current =
            target.scrollTop / (target.scrollHeight - window.innerHeight);
          scrollProgress.current.innerText = scroll.current.toFixed(2);
          console.log('scroll.current: ', scroll.current);

          // console.log('target.scrollHeight: ', target.scrollHeight);
          // scrollProgress.current.innerText = target.scrollHeight.toString();
        }}
      >
        <div
          ref={scrollProgress}
          className="fixed top-[50px] left-[20px] m-[10px] text-light text-[1rem] pointer-events-none slashed-zero tabular-nums z-[15]"
        >
          0.00
        </div>
        <div className="fixed top-[80px] left-[20px] m-[10px] text-light text-[1rem] pointer-events-none slashed-zero tabular-nums z-[15]">
          {scroll.current.toFixed(2).toString()}
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
