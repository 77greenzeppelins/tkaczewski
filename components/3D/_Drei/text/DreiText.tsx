/*
Docs: https://drei.pmnd.rs/?path=/docs/abstractions-text--docs
*/

import React from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**R3F Staff**/
import { useThree } from '@react-three/fiber';
/**Drei Staff*/
import { Text } from '@react-three/drei';
/**BasicData**/
import { assetsPaths } from '@/data/basicData';
/**Comoponents**/
import FrameMatcapTexture from '../../_Drei/textures/frameMatcapTextures/FrameMatcapTexture';

interface Props {
  //___
  hasMatcap?: boolean;
  //___
  position?: THREE.Vector3;
  rotation?: THREE.Euler;
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
  position,
  rotation,
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
  const state = useThree();
  const fontSizeSetter =
    state.size.width > 1000 ? 0.25 : state.size.width > 400 ? 0.18 : 0.15;

  /**JSX**/
  return (
    <Text
      font={assetsPaths.font}
      //___
      position={position}
      rotation={rotation}
      //___
      fontSize={fontSize || fontSizeSetter}
      anchorX={anchorX}
      anchorY={anchorY}
      maxWidth={maxWidth || state.size.width > 1000 ? 2 : 1}
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
