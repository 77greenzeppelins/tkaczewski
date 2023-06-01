import React from 'react';
/**Components**/
import DialogCloud from '@/components/3D/customeObjects/dialogCloud/DialogCloud';
import * as THREE from 'three';
import DreiText from '@/components/3D/_Drei/text/DreiText';

interface Props {
  scale: number[];
  position: number[];
  rotation: number[];
  //___
}

/**--------------------------------------------------------**/
const Answer = ({ scale, position, rotation }: Props) => {
  /**JSX**/
  return (
    <group>
      <DialogCloud
        meshProps={{
          scale: new THREE.Vector3(...scale),
          position: new THREE.Vector3(...position),
          rotation: new THREE.Euler(...rotation),
          //   scale={new THREE.Vector3(...scale)}
          //   position={new THREE.Vector3(...position)}
          //   rotation={new THREE.Euler(...rotation)}
          //   position: [-0, -0.1, 0],
          //   rotation: [0.5 * Math.PI, 0, 0],
          //   scale: [0.33, 0.33, 0.33],
        }}
      />
      {/* <DreiText
        hasMatcap={false}
        text={text} //    textConfig={PlatoAnswerTextConfig}
      /> */}
    </group>
  );
};

export default Answer;
