import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import ThreePlane from '../../basicShapes/plane/ThreePlane';

/**TS**/
interface Props {
  meshProps?: JSX.IntrinsicElements['mesh'];
  argsWidth: number;
  argsHeight: number;
  image: string;
}
const ImageCanvas = ({ meshProps, argsWidth, argsHeight, image }: Props) => {
  /**Image Loader**/
  const map = useLoader(THREE.TextureLoader, image);
  /**JSX*/
  return (
    <mesh {...meshProps}>
      <ThreePlane argsWidth={argsWidth} argsHeight={argsHeight} />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default ImageCanvas;
