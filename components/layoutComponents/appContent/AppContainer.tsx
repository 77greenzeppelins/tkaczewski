import React from 'react';
/**GlobalState Staff*/
import { GlobalContextProvider } from '@/context/globalContext';
/**Components**/
import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import CanvasOverlay from '../overlays/canvasOverlay/CanvasOverlay';
import IntroOverlay from '../overlays/introOverlay/IntroOverlay';

/**---------------------------------------------------------------------**/
const AppContainer = ({ children }: { children: React.ReactNode }) => {
  /**JSX**/
  return (
    <main
      data-component="AppContainer"
      id="appContainer"
      className="relative z-[400]"
    >
      <GlobalContextProvider
        IntroOverlay={IntroOverlay}
        CanvasOverlay={CanvasOverlay}
        MainCanvas={MainCanvas}
      >
        {children}
      </GlobalContextProvider>
    </main>
  );
};

export default AppContainer;
