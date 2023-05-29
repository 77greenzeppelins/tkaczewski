import React from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**Components**/
import InstantContactButton3D from './instantContactButton3D/InstantContactButton3D';
/**BasicData*/
import { imagesData } from '@/data/basicData';

const buttonsData = [imagesData.phone, imagesData.email];
const scale = [0.65, 0.65, 0.65];
const scaleImage = [1.4, 1.4, 1.4];

/**-----------------------------------------*/
const InstantContactsButtons3d = () => {
  return (
    <>
      {buttonsData.map(({ path, width, height, position }) => (
        <InstantContactButton3D
          key={path}
          groupProps={{
            position: new THREE.Vector3(...position),
            // scale: new THREE.Vector3(...scale),
          }}
          frameMeshProps={{ scale: new THREE.Vector3(...scale) }}
          imageMeshProps={{ scale: new THREE.Vector3(...scaleImage) }}
          path={path}
          width={width}
          height={height}
        />
      ))}
    </>
  );
};

export default InstantContactsButtons3d;
