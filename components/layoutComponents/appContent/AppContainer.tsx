import React from 'react';
/**GlobalState Staff*/
import { GlobalContextProvider } from '@/context/ContextProvider';
/**Components**/
import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import CanvasOverlay from '../overlays/canvasOverlay/CanvasOverlay';
import IntroOverlay from '../overlays/introOverlay/IntroOverlay';
// import EmergencyOverlay from '../overlays/emergencyOverlay/EmergencyOverlay';

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
        // EmergencyOverlay={EmergencyOverlay}
      >
        {children}
      </GlobalContextProvider>
    </main>
  );
};

export default AppContainer;
