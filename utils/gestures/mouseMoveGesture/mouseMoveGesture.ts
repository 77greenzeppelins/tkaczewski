// import React from 'react';
import { useCallback } from 'react';
import { useSpring, config } from '@react-spring/three';
import { useMove } from '@use-gesture/react';
/*
useThree Staff
*/
import { useThree } from '@react-three/fiber';

interface Props {
  enabled: boolean;
  tileFactorX: number;
  tileFactorY: number;
}

const MouseMoveGesture = ({ enabled, tileFactorX, tileFactorY }: Props) => {
  /**useThree Section**/
  const { size } = useThree();
  /*
  Spring Section
  */
  const [{ x, y }, api] = useSpring(() => ({
    rotateWithMouseMove: [0, 0, 0],
    x: 0,
    y: 0,
    config: config.molasses,
  }));

  const eventHandler = useCallback(
    ({ active, xy: [x, y] }: { active: boolean; xy: number[] }) => {
      let newX = (x / size.width) * 2 - 1;
      let newY = (y / size.height) * 2 - 1;
      //   console.log('pointer positions x:', x);
      //   console.log('pointer positions y:', y);
      //   console.log('newX:', newX);
      //   console.log('newY', newY);
      // console.log('pointer positions newX,newY', newX, newY);

      api.start({
        //___rotation on x-axis depends on mouse position on y-axis
        x: newX < 0 ? newY * tileFactorY : newY * tileFactorY,
        y: newY < 0 ? newX * tileFactorX : newX * tileFactorX,
      });
    },
    //dependency array
    [api, size.width, size.height, tileFactorX, tileFactorY]
  );

  /*
  ___1. 
  */
  const basicMove = useMove(eventHandler, {
    enabled: enabled,
    // target: target || window,
    target: window,
  });

  return [x, y, basicMove];
};

export default MouseMoveGesture;
