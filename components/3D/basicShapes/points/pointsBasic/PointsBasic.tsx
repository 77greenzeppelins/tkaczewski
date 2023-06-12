import React, { useRef } from 'react';
/**R3F Staff**/
import { useFrame } from '@react-three/fiber';
/**TS*/
interface Props {
  pointSize: number;
}
/**--------------------------**/
const PointsBasic = ({ pointSize }: Props) => {
  /**References**/
  const points = useRef();
  return (
    <points>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={pointSize} sizeAttenuation />
    </points>
  );
};

export default PointsBasic;
