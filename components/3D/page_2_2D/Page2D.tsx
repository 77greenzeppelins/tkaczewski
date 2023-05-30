import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**Components**/
import Act5 from './acts/act_5/Act5';
/**THREE Staff**/
import * as THREE from 'three';
/**Basic Data**/
import { page3DConfigs, pagesLinks } from '@/data/basicData';

/**-------------------**/
const Page2D = () => {
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
    <group visible={pagesLinks[1].href === currentPath}>
      <Act5
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
        }}
      />
    </group>
  );
};

export default Page2D;
