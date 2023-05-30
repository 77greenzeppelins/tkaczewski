import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**Components**/
import InstantContactButton3D from './instantContactButtons/InstantContactButton3D';
/**BasicData*/
import { imagesData, pagesLinks, page3DConfigs } from '@/data/basicData';

/**HardCoded Staff*/
const buttonsData = [imagesData.phone, imagesData.email];
const scale = [0.65, 0.65, 0.65];
const scaleImage = [1.4, 1.4, 1.4];

/**-----------------------------------------*/
const PageContacts = () => {
  /**References**/
  // const groupRef = useRef<THREE.Group>(null!);
  /**...**/
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesLinks[3].href);
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
      {buttonsData.map(({ path, width, height, position }) => (
        <InstantContactButton3D
          key={path}
          groupProps={{
            position: new THREE.Vector3(...position),
          }}
          frameMeshProps={{ scale: new THREE.Vector3(...scale) }}
          imageMeshProps={{ scale: new THREE.Vector3(...scaleImage) }}
          path={path}
          width={width}
          height={height}
        />
      ))}
    </group>
  );
};

export default PageContacts;
