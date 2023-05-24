import React from 'react';
/**Drei Staff*/
import { Text } from '@react-three/drei';

interface Props {
  text: string;
  fontSize?: number;
  color?: string;
  anchorX?: number | 'center' | 'left' | 'right';
  anchorY?:
    | number
    | 'top'
    | 'top-baseline'
    | 'bottom-baseline'
    | 'bottom'
    | 'middle';
}

const DreiText = ({ text, fontSize, color, anchorX, anchorY }: Props) => {
  /**JSX**/
  return (
    <Text color={color} fontSize={fontSize} anchorX={anchorX} anchorY={anchorY}>
      {text}
    </Text>
  );
};

export default DreiText;
