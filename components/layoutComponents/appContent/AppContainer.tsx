import MainCanvas from '@/components/3D/3D_Canvas/MainCanvas';
import React from 'react';

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main id="relative root">
      <div className="fixed top-0 left-0 right-0 h-screen">
        <MainCanvas />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default AppContainer;
