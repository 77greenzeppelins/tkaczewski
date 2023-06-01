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
  //   initialPosition?: number[];
  tileFactorX: number;
  tileFactorY: number;
}

const MouseMoveGesture = ({
  enabled,
  //   initialPosition = [0, 0, 0],
  tileFactorX,
  tileFactorY,
}: Props) => {
  /**useThree Section**/
  const { size } = useThree();
  /*
  Spring Section
  */
  const [{ x, y }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      //   posX: initialPosition[0],
      //   posY: initialPosition[1],
      //   posZ: initialPosition[2],
      config: config.molasses,
    }),
    []
  );

  const eventHandler = useCallback(
    //___state attribute: [x,y] => values (pointer position or scroll offset)
    ({ xy: [x, y] }: { xy: number[] }) => {
      //___x = [0,screenWidth] : [mousePositionLeft, mousePositionRight]
      //___y = [0,screenHeight] : [mousePositionTop, mousePositionBottom]
      //__newX = [-1,1] : [mousePositionLeft, mousePositionRight]
      //___newY = [-1,1] : [mousePositionTop, mousePositionBottom]
      let newX = (x / size.width) * 2 - 1; //__
      let newY = (y / size.height) * 2 - 1;
      //   let newY = (y / size.height) * 2 - 1;
      //   console.log('pointer positions x:', x);
      //   console.log('pointer positions y:', y);
      //   console.log('newX:', newX);
      //   console.log('newY', newY);
      api.start({
        //___in cease he have various values for rotations in each side;
        // x: newX < 0 ? newY * tileFactorYa : newY * tileFactorYb,
        // y: newY < 0 ? newX * tileFactorXa : newX * tileFactorXb,
        //___rotation on x-axis depends on mouse position on y-axis
        x: newY * tileFactorY,
        y: newX * tileFactorX,
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

  /*
  ___1. if target is always window there is no need to return basicMove
  */
  return [x, y];
};

export default MouseMoveGesture;
