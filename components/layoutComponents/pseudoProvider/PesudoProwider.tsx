import React from 'react';
interface Props {
  children: React.ReactNode;
  CanvasOverlay: () => React.JSX.Element;
  MainCanvas: () => React.JSX.Element;
}

/**-------------------------------------------------------------------------**/
const PseudoProvider = ({ children, MainCanvas, CanvasOverlay }: Props) => {
  //   const CanvasToRender = MainCanvas();
  /**JSX**/
  return (
    <>
      <div className="fixed w-screen h-screen z-1">
        <CanvasOverlay />
        {/* {CanvasToRender} */}
        <MainCanvas />
      </div>
      <div className="relative z-10">{children}</div>
    </>
  );
};

export default PseudoProvider;
