'use client';
import React from 'react';
/**Hooks Staff**/
import { useMediaQuery } from '@/hooks/useMediaQuery';

const NotHeightEnought = () => {
  //___  case1: always when height is less then 350px
  const matches = useMediaQuery('(min-height: 350px)');
  /**JSX**/
  return matches ? null : (
    <div className="fixed fc text-medium text-light w-screen h-screen bg-dark">
      <p>3D elements need at lest 500px</p>
    </div>
  );
};

export default NotHeightEnought;
