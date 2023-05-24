/*
Docs: https://drei.pmnd.rs/?path=/docs/abstractions-text--docs
*/

import React from 'react';
/**Drei Staff*/
import { Text } from '@react-three/drei';
import { assetsPaths } from '@/data/basicData';
/**Comoponents**/
import FrameMatcapTexture from '../../_Drei/textures/frameMatcapTextures/FrameMatcapTexture';

interface Props {
  //___
  hasMatcap?: boolean;
  //___
  text: string;
  fontSize?: number;
  anchorX?: number | 'center' | 'left' | 'right';
  anchorY?:
    | number
    | 'top'
    | 'top-baseline'
    | 'bottom-baseline'
    | 'bottom'
    | 'middle';
  maxWidth?: number;
  //___
  color?: string;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  //___
  fillOpacity?: number;
  strokeColor?: string;
  strokeWidth?: string | number;
}

const DreiText = ({
  hasMatcap,
  //___
  text,
  fontSize,
  anchorX,
  anchorY,
  maxWidth,
  //___
  textAlign,
  color,
  //___
  fillOpacity,
  strokeColor,
  strokeWidth,
}: Props) => {
  /**JSX**/
  return (
    <Text
      font={assetsPaths.font}
      //___
      fontSize={fontSize}
      anchorX={anchorX}
      anchorY={anchorY}
      maxWidth={maxWidth}
      //___
      textAlign={textAlign}
      color={hasMatcap ? '' : color}
      //___
      fillOpacity={fillOpacity}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
    >
      {text}
      {/* <meshBasicMaterial color={color} /> */}
      {hasMatcap && <FrameMatcapTexture textureIndex={'1'} />}
    </Text>
  );
};

export default DreiText;
