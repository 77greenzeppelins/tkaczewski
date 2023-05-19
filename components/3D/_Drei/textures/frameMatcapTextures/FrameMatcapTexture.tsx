import React from 'react';
/**Drei Staff**/
import { useMatcapTexture } from '@react-three/drei';

interface Props {
  textureIndex: string;
}

const FrameMatcapTexture = ({ textureIndex }: Props) => {
  switch (textureIndex) {
    case '1':
      textureIndex = '434240_D3D3CF_898784_A4A49F';
      break;
    case '2':
      textureIndex = '2A2A2A_DBDBDB_6A6A6A_949494';
      break;
    case '3':
      textureIndex = '2D2D2F_C6C2C5_727176_94949B';
      break;
    case '7':
      textureIndex = '1D2424_565F66_4E555A_646C6E'; //black, high-gloss, environment-map
      break;
    case '8':
      textureIndex = '300706_888576_822821_876E79'; //red-multicolor, high-gloss
      break;
    case '9':
      textureIndex = '3E2335_D36A1B_8E4A2E_2842A5'; //red-multicolor, high-gloss
      break;
    case '10':
      textureIndex = '3F3A2F_91D0A5_7D876A_94977B'; //lightBlue-multicolor, high-gloss
      break;
    default:
      textureIndex = '434240_D3D3CF_898784_A4A49F';
  }

  const [matcapTexture] = useMatcapTexture(
    textureIndex,
    // '434240_D3D3CF_898784_A4A49F', //silver-like
    // '2A2A2A_DBDBDB_6A6A6A_949494', //grey, high-gloss, !
    1024
  );

  /**JSX*/
  return <meshMatcapMaterial matcap={matcapTexture} />;
};

export default FrameMatcapTexture;
