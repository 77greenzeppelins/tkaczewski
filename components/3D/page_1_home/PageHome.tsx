import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import Act1 from './acts/act_1/Act1';
import Act2 from './acts/act_2/Act2';
import Act3 from './acts/act_3/Act3';
import Act4 from './acts/act_4/Act4';
import Act5 from './acts/act_5/Act5';
/**THREE Staff**/
import * as THREE from 'three';
/**BasicData**/
import { page3DConfigs, pagesLinks } from '@/data/basicData';

/**TS**/
interface Props {
  isTouch: boolean;
}

/**---------------------------------------**/
const PageHome = ({ isTouch }: Props) => {
  /**...**/
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPath(path);
    }, page3DConfigs.visibilityDelay);
    return () => {
      clearTimeout(timer);
    };
  }, [currentPath, path]);

  /**JSX**/
  return (
    <group visible={pagesLinks[0].href === currentPath}>
      <Act1
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
        }}
        isTouch={isTouch}
      />
      <Act2
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[1]),
        }}
      />
      <Act3
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[2]),
        }}
      />
      <Act4
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[3]),
        }}
      />
      <Act5
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[4]),
        }}
      />
    </group>
  );
};

export default PageHome;
