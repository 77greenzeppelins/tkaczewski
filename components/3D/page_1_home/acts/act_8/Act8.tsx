import React from 'react';
/**Components**/
import { InstantContactPanel } from '@/components';
/**Basic Data*/
import { page3DConfigs } from '@/data/basicData';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
}

/**---------------------------------------**/
const Act8 = ({ groupProps }: Props) => {
  /**JSX**/
  return (
    <group {...groupProps}>
      <InstantContactPanel
        topButtonPos={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.topButtonPos
        }
        bottomButtonPos={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.bottomButtonPos
        }
        scaleFrame={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.scaleFrame
        }
        scaleImage={
          page3DConfigs.pageHome.act8_data.contactButtonConfig.scaleImage
        }
      />
    </group>
  );
};

export default Act8;
