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
  /**References**/
  // const groupRef = useRef<THREE.Group>(null!);
  /**...**/
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesLinks[1].href);
    }, page3DConfigs.visibilityDelay);
    // const groupRefReset = groupRef.current;

    /**cleaner**/
    return () => {
      // if (currentPath !== pagesLinks[0].href) {
      //   groupRefReset.position.set(0, 0, 0);
      // }
      clearTimeout(timer);
      setIsPath(false);
    };
  }, [path]);

  /**JSX**/
  return (
    <group visible={isPath}>
      <Act5
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
        }}
      />
    </group>
  );
};

export default Page2D;
