import React from 'react';
/**Drei Staff**/
import { useGLTF } from '@react-three/drei';
/**Components**/
import FrameMatcapTexture from '../../_Drei/textures/frameMatcapTextures/FrameMatcapTexture';
/**BasicData**/
import { assetsPaths } from '@/data/basicData';

/**TS**/
import { GLTF } from 'three-stdlib';
type GLTFResult = GLTF & {
  nodes: {
    BezierCircle: THREE.Mesh;
  };
  materials: {
    ['default']: THREE.MeshStandardMaterial;
  };
};

interface Props {
  meshProps?: JSX.IntrinsicElements['mesh'];
}

/*------------------------------------------------*/
const DialogCloud = ({ meshProps }: Props) => {
  /**GLTFLoader Section**/
  const { nodes } = useGLTF(assetsPaths.dialogCloud) as GLTFResult;

  /**JSX**/
  return (
    <mesh
      {...meshProps}
      name="PlaneOfBasicFrame"
      castShadow
      receiveShadow
      geometry={nodes.BezierCircle.geometry}
    >
      <FrameMatcapTexture textureIndex={'1'} />
    </mesh>
  );
};

export default DialogCloud;
