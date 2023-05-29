import React from 'react';
/**Components**/
import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import CanvasOverlay from '../overlays/canvasOverlay/CanvasOverlay';

/**---------------------------------------------------------------------**/
const AppContainer = ({ children }: { children: React.ReactNode }) => {
  /**JSX**/
  return (
    <main data-component="AppContainer" id="appContainer" className="relative">
      <div
        //  className="fixed top-0 left-0 right-0 bottom-0"
        className="fixed w-screen h-screen z-1"
      >
        <CanvasOverlay />
        <MainCanvas />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default AppContainer;
