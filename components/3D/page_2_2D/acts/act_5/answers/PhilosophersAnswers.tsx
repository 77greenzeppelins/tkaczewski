import React from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**Components**/
import Answer from './answer/Answer';
/**Spring Staff*/
import { animated } from '@react-spring/three';
/**Gesture Staff*/
import MouseMoveGesture from '@/utils/gestures/mouseMoveGesture/mouseMoveGesture';
/**Basic Data**/
import { page3DConfigs } from '@/data/basicData';
import DreiText from '@/components/3D/_Drei/text/DreiText';

const PhilosophersAnswers = () => {
  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [x, y] = MouseMoveGesture({
    enabled: true,
    tileFactorX: 0.15,
    tileFactorY: 0.15,
  });
  return (
    <animated.group rotation-x={x} rotation-y={y}>
      {Array.from([
        page3DConfigs.page2D.answers.platoCloud,
        page3DConfigs.page2D.answers.aristotlesCloud,
      ]).map(({ scale, position, rotation }, i) => (
        <Answer key={i} scale={scale} position={position} rotation={rotation} />
      ))}
      {Array.from([
        page3DConfigs.page2D.answers.platoText,
        page3DConfigs.page2D.answers.aristotlesText,
      ]).map(({ text, scale, position, rotation, fontSize, lineHeight }, i) => (
        <DreiText
          key={i}
          hasMatcap={false}
          text={text}
          scale={new THREE.Vector3(...scale)}
          position={new THREE.Vector3(...position)}
          rotation={new THREE.Euler(...rotation)}
          fontSize={fontSize}
          lineHeight={lineHeight}
          maxWidth={1}
          color="white"
          textAlign="center"
          anchorX="center"
        />
      ))}
    </animated.group>
  );
};

export default PhilosophersAnswers;
