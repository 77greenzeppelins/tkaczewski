import React from 'react';
/**Components**/
import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import CanvasOverlay from '../overlays/canvasOverlay/CanvasOverlay';
import { GlobalContextProvider } from '@/context/globalContext';

/**---------------------------------------------------------------------**/
const AppContainer = ({ children }: { children: React.ReactNode }) => {
  /**JSX**/
  return (
    <main data-component="AppContainer" id="appContainer" className="relative">
      {/* <div className="fixed w-screen h-screen z-1">
        <CanvasOverlay />
        <MainCanvas />
      </div>
      <div className="relative z-10">{children}</div> */}
      {/*
      just a test; prototype of context...
      */}
      <GlobalContextProvider
        CanvasOverlay={CanvasOverlay}
        MainCanvas={MainCanvas}
        // MainCanvas={() => <MainCanvas />}
      >
        {children}
      </GlobalContextProvider>
    </main>
  );
};

export default AppContainer;
