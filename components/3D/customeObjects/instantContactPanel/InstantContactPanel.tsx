import React from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**Components**/
import { InstantContactButton3D } from '@/components';
/**BasicData*/
import { imagesData } from '@/data/basicData';

interface Props {
  topButtonPos: number[];
  bottomButtonPos: number[];
  scaleFrame: number[];
  scaleImage: number[];
}

/**--------------------------------------*/
const InstantContactPanel = ({
  topButtonPos,
  bottomButtonPos,
  scaleFrame,
  scaleImage,
}: Props) => {
  /*
  ___1.set of imageData to specify path, width, height + 
  */
  const buttonsData = [imagesData.phone, imagesData.email];

  /**JSX**/
  return (
    <>
      {buttonsData.map(({ path, width, height }, i) => (
        <InstantContactButton3D
          key={path}
          groupProps={{
            position:
              i === 0
                ? new THREE.Vector3(...topButtonPos)
                : new THREE.Vector3(...bottomButtonPos),
          }}
          frameMeshProps={{
            scale: new THREE.Vector3(...scaleFrame),
          }}
          imageMeshProps={{
            scale: new THREE.Vector3(...scaleImage),
          }}
          path={path}
          width={width}
          height={height}
        />
      ))}
    </>
  );
};

export default InstantContactPanel;

/*
return(
    <>
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
    </>
)
*/
