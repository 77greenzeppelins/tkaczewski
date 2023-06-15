import React from 'react';
/**THREE Staff*/
import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer';

import { fillPositions } from './utils/utils';
import fragmentSimulation from '../fragmentSimulation';

// const GpuCompute = () => {
//   //   const gpuCompute = new GPUComputationRenderer()
//   return <div>GpuCompute</div>;
// }

// export default GpuCompute

const initGPGPU = (
  renderer: THREE.WebGLRenderer,
  width: number,
  height: number
) => {
  //   const gpuCompute = new GPUComputationRenderer(width, height, renderer);
  //   const dtPosition = gpuCompute.createTexture();
  //   fillPositions(dtPosition);
  //   const positionVariable = gpuCompute.addVariable(
  //     'texturePosition',
  //     fragmentSimulation,
  //     dtPosition
  //   );
  //   positionVariable.material.uniforms['u_time'] = { value: 0 };
  //   positionVariable.wrapS = THREE.RepeatWrapping;
  //   positionVariable.wrapT = THREE.RepeatWrapping;
  //   gpuCompute.init();
  //   return { gpuCompute, positionVariable };
};

export default initGPGPU;
