import React from 'react';
/**Components**/
// import Act5 from './acts/act_5/Act5';
/**THREE Staff**/
import * as THREE from 'three';
/**Basic Data**/
import { page3DConfigs } from '@/data/basicData';
import Act5 from './acts/act_5/Act5';

/**-------------------**/
const Page2D = () => {
  /**JSX**/
  return (
    <>
      <Act5
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
        }}
      />
    </>
  );
};

export default Page2D;
