import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**Components**/
import Act1 from './acts/act_1/Act1';
import Act5 from './acts/act_5/Act5';
/**THREE Staff**/
import * as THREE from 'three';
/**Basic Data**/
import { page3DConfigs, pagesLinks } from '@/data/basicData';

/**-------------------**/
const Page2D = () => {
  /**References**/
  // const groupRef = useRef<THREE.Group>(null!);

  /*
  (!) the code below concerns the matter of "3dObjects visibility" and is used in every 3D-pseudoPage => property "visible" must receive boolean value with delay of 1 second => that is why setTimeout() is used to change initial false value to true value;
  */
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesLinks[1].href);
    }, page3DConfigs.visibilityDelay);

    /**cleaner**/
    return () => {
      clearTimeout(timer);
      setIsPath(false);
    };
  }, [path]);

  /**JSX**/
  return (
    <group
      visible={isPath}
      position={new THREE.Vector3(...page3DConfigs.page2D.pagePosition)}
    >
      <Act1 />
      <Act5 />
    </group>
  );
};

export default Page2D;
