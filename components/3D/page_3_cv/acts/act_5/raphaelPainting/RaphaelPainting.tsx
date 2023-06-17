import React from 'react';
/**Components**/
import BasicFrame from '../../../../customeObjects/frame/BasicFrame';
import ImageCanvas from '../../../../customeObjects/imageCanvas/ImageCanvas';
/**Spring Staff*/
import { animated } from '@react-spring/three';
/**Gesture Staff*/
import MouseMoveGesture from '@/utils/gestures/mouseMoveGesture/mouseMoveGesture';
/**BasicData*/
import { imagesData } from '@/data/basicData';

const RaphaelPainting = () => {
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
      <BasicFrame meshProps={{ scale: [1, 1.5, 1] }} />
      <ImageCanvas
        meshProps={{ scale: [0.57, 0.59, 1] }}
        argsWidth={imagesData.raphaelSchool.width * 2}
        argsHeight={imagesData.raphaelSchool.height * 2}
        image={imagesData.raphaelSchool.path}
      />
    </animated.group>
  );
};

export default RaphaelPainting;
