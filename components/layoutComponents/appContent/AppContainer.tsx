import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import React from 'react';

/**---------------------------------------------------------------------**/
const AppContainer = ({ children }: { children: React.ReactNode }) => {
  /**JSX**/
  return (
    <main data-component="AppContainer" id="appContainer">
      <div className="fixed top-0 left-0 right-0 bottom-0">
        <MainCanvas />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default AppContainer;
