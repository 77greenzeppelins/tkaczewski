import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**Components**/
import InstantContactButton3D from './instantContactButtons/InstantContactButton3D';
/**BasicData*/
import { imagesData, pagesPath, page3DConfigs } from '@/data/basicData';

/**HardCoded Staff*/
const buttonsData = [imagesData.phone, imagesData.email];
const scale = [0.65, 0.65, 0.65];
const scaleImage = [1.4, 1.4, 1.4];

/**-----------------------------------------*/
const PageContacts = () => {
  /*
  (!) the code below concerns the matter of "3dObjects visibility" and is used in every 3D-pseudoPage => property "visible" must receive boolean value with delay of 1 second => that is why setTimeout() is used to change initial false value to true value;
  */
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesPath.contactcPath);
    }, page3DConfigs.visibilityDelay);

    /**cleaner**/
    return () => {
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
