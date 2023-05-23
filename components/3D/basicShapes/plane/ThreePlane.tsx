import React from 'react';
/**TS**/
interface Props {
  argsWidth: number;
  argsHeight: number;
}
/**------------------------*/
const ThreePlane = ({ argsWidth = 1, argsHeight = 1 }: Props) => {
  /**JSX**/
  return <planeGeometry args={[argsWidth, argsHeight, 1, 1]} />;
};

export default ThreePlane;
