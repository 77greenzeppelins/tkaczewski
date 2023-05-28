import React from 'react';
import { Color, MeshBasicMaterial } from 'three';
///___import * as THREE from 'three';

interface IMaterialContext {
  material: MeshBasicMaterial;
}

interface MaterialProviderProps {
  color?: Color | string | number;
  children: React.ReactNode;
}

// const BasicMaterialContext= React.createContext()
const BasicMaterialContext = React.createContext<IMaterialContext | undefined>(
  undefined
);

export const BasicMaterialProvider = ({
  color,
  children,
}: MaterialProviderProps) => {
  const material = React.useMemo(
    () => new MeshBasicMaterial({ color: color || 0xff0000 }),
    [color]
  );

  return (
    <BasicMaterialContext.Provider value={{ material }}>
      {children}
    </BasicMaterialContext.Provider>
  );
};

export const useBasicMaterial = (): MeshBasicMaterial => {
  const context = React.useContext(BasicMaterialContext);
  if (!context) {
    throw new Error('useMaterial must be used within a MaterialProvider');
  }
  return context.material;
};

// export default ThreeBasicMaterial
