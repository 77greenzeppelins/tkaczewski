import { page3DConfigs } from '@/data/basicData';
import React from 'react';
/**Components**/
import Act5 from './acts/act_5/Act5';
/**THREE Staff**/
import THREE from 'three';

const Page2D = () => {
  return (
    <>
      <Act5
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
        }}
        // isTouch={isTouch}
      />
    </>
  );
};

export default Page2D;
