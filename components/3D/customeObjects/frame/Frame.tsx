'use client';
import React from 'react';
/**R3F staff**/
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
/**Drei Staff**/
import { useGLTF } from '@react-three/drei';

/**------------------**/
const Frame = () => {
  /**...**/
  //   const dracoModel = useLoader(
  //     GLTFLoader,
  //     '/assets/3D/glb/frame_4_draco.glb',
  //     loader => {
  //       const dracoLoader = new DRACOLoader();
  //       dracoLoader.setDecoderPath('./draco/');
  //       loader.setDRACOLoader(dracoLoader);
  //     }
  //   );
  //___
  const model = useGLTF('/assets/3D/glb/frame_4_draco.glb');
  console.log('...model: ', model);

  return <primitive object={model.scene} />;
};

//__depends on useCase; it actually preload all the staff eaven if it is not vissible at the moment (imagin: staff in other, currently locked room...)
useGLTF.preload('/assets/3D/glb/frame_4_draco.glb');

export default Frame;
