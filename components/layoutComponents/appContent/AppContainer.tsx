import React from 'react';
/**Components**/
import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import CanvasOverlay from '../overlays/canvasOverlay/CanvasOverlay';
import PseudoProvider from '../pseudoProvider/PesudoProwider';

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
      <PseudoProvider
        CanvasOverlay={CanvasOverlay}
        MainCanvas={MainCanvas}
        // MainCanvas={() => <MainCanvas />}
      >
        {children}
      </PseudoProvider>
    </main>
  );
};

export default AppContainer;
