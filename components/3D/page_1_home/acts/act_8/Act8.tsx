import React from 'react';
/**Components**/
import { InstantContactPanel } from '@/components';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
}

/**---------------------------------------**/
const Act8 = ({ groupProps }: Props) => {
  /**JSX**/
  return (
    <group {...groupProps}>
      <InstantContactPanel />
    </group>
  );
};

export default Act8;
