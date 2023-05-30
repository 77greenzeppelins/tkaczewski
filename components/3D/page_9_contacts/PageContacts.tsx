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
    <group visible={pagesLinks[3].href === currentPath}>
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
