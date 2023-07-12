import React from 'react';
/**Components**/
import { BasicFrame, ImageCanvas } from '@/components';
/**Drei Staff**/
import { Float } from '@react-three/drei';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  frameMeshProps?: JSX.IntrinsicElements['mesh'];
  imageMeshProps?: JSX.IntrinsicElements['mesh'];
  path: string;
  width: number;
  height: number;
  floatSpeed?: number;
  floatRotation?: number;
  floatIntens?: number;
  floatRange?: number;
  // geometryProps?: JSX.IntrinsicElements['sphereGeometry'];
}

/**----------------------------------------------------------**/
const InstantContactButton3D = ({
  groupProps,
  frameMeshProps,
  imageMeshProps,
  path,
  width,
  height,
  floatSpeed,
  floatRotation,
  floatIntens,
  floatRange,
}: Props) => {
  /**JSX**/
  return (
    <group {...groupProps}>
      <Float
        speed={floatSpeed || 1.5} // Animation speed, defaults to 1
        rotationIntensity={floatRotation || 0.99} // XYZ rotation intensity, defaults to 1
        floatIntensity={floatIntens || 0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <BasicFrame meshProps={frameMeshProps} />
        <ImageCanvas
          meshProps={imageMeshProps}
          argsWidth={width}
          argsHeight={height}
          image={path}
        />
      </Float>
    </group>
  );
};

export default InstantContactButton3D;
