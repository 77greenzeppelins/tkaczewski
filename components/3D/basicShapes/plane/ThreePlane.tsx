import React from 'react';
// import * as THREE from 'three';
/**TS**/
interface Props {
  argsWidth: number;
  argsHeight: number;
  widthSegments?: number;
  heightSegments?: number;
}
/**------------------------*/
const ThreePlane = ({
  argsWidth = 1,
  argsHeight = 1,
  widthSegments = 1,
  heightSegments = 1,
}: Props) => {
  /**JSX**/
  return (
    <planeGeometry
      // scale={new THREE.Vector3(0.3, 0.3,0.3)}
      args={[argsWidth, argsHeight, widthSegments, heightSegments]}
    />
  );
};

export default ThreePlane;
