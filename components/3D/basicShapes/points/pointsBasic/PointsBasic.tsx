import React from 'react';

/**TS*/
interface Props {
  pointSize: number;
}
/**--------------------------**/
const PointsBasic = ({ pointSize }: Props) => {
  /**JSX**/
  return (
    <points>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={pointSize} sizeAttenuation />
    </points>
  );
};

export default PointsBasic;
