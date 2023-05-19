'use client';
import React from 'react';
/**THREE Staff**/
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
/**R3F Staff**/
import { extend, useThree } from '@react-three/fiber';

extend({ OrbitControls });

const OrbitControler = () => {
  /**...**/
  const three = useThree();
  /**JSX**/
  return (
    <>
      {' '}
      {/* <orbitControls args={[three.camera, three.gl.domElement]} />{' '} */}
    </>
  );
};

export default OrbitControler;
