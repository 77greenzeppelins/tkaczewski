'use client';
import { useState } from 'react';
import { GlobalContext } from './globalContext';

/**TS**/
interface ProviderProps {
  children: React.ReactNode;
  IntroOverlay: () => React.JSX.Element;
  CanvasOverlay: () => React.JSX.Element;
  MainCanvas: () => React.JSX.Element;
}

/*
___1. is used in <AppContainer>;
___2. such localization allows to access global values in 2D & 3D world;
___3. we can't add provider to some _app.js file to wrap it around our application content; it worked in next.js before app directory and concept of server-side rendered layout were introduced / applied;
___4. we actually face the following issue: how to wrap "RootLayout" and keep it "server-side"; we can't put <Provider> in it !;   
___5. We have to creat <Provider> here, in that file because it requiers "client environment" to work;
*/
export const GlobalContextProvider = ({
  children,
  IntroOverlay,
  CanvasOverlay,
  MainCanvas,
}: ProviderProps) => {
  /*
  ___1. states for all "values" we want to access (read/write) within global state 
  */
  const [isIntroOverlay, setIsIntroOverlay] = useState(true);
  const [askAI, setAskAI] = useState(false);
  const [scrollableHeight, setScrollableHeight] = useState(0);
  const [hintIsMobile, setHintIsMobile] = useState(false);

  /**JSX**/
  return (
    <GlobalContext.Provider
      value={{
        isIntroOverlay,
        setIsIntroOverlay,
        askAI,
        setAskAI,
        scrollableHeight,
        setScrollableHeight,
        hintIsMobile,
        setHintIsMobile,
      }}
    >
      <>
        <IntroOverlay />
        <div className="fixed w-screen h-screen z-1">
          <CanvasOverlay />
          {/* {CanvasToRender} */}
          <MainCanvas />
        </div>
        <div className="relative z-10">{children}</div>
      </>
    </GlobalContext.Provider>
  );
};
