import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
import {
  GPUComputationRenderer,
  Variable,
} from 'three/examples/jsm/misc/GPUComputationRenderer';
/**R3F staff*/
// import { BufferAttribute, PointsMaterial } from 'three';
/**Shaders**/
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import fragmentSimulation from './fragmentSimulation';

const WIDTH = 32;
const verticesNumber = WIDTH * WIDTH;
const dtNumber = WIDTH * WIDTH * 4; //each DataTexture entity requires 4 numbers / "parameters"

/**TS**/
interface Props {
  verticesNumber: number;
  shape: 'box' | 'sphere';
  radius?: number;
}

/**-----------------------**/
const PointsFBO = () => {
  /**References**/
  const pointsRef = useRef<THREE.Points>(null!);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!);
  const gpuRenderer = useRef<GPUComputationRenderer>(null!);
  const dataTexture = useRef<THREE.DataTexture>(null!);
  const positionsVariables = useRef<Variable>(null!);

  //___
  const { gl, size } = useThree();
  //   console.log('state:', state.size);

  //___GPUComputationRenderer
  //   const gpuComputeRef = useRef<GPUComputationRenderer>(null!);
  //   const positionTextureRef = useRef<THREE.DataTexture>(null!);

  /*
  Section Animate / Manipulate / make shaders
  */
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_positionTexture: { value: null },
      u_resolution_width: {
        value: size.width,
      },
      u_resolution_height: {
        value: size.height,
      },
      u_colorA: { value: new THREE.Color('#FFE486') },
      u_colorB: { value: new THREE.Color('#FEB3D9') },
    }),
    [size.height, size.width]
  );

  /*
  Section Layout
  */
  //___attributes array
  const [particlesPosition, references] = useMemo(() => {
    //___all x,y,z values for each vertex
    const positions = new Float32Array(verticesNumber * 3);
    //__Yiri: why references? because we need to reference every particle in my shader; it work as alternative for uv (remeber that particles don't have uv)
    const references = new Float32Array(verticesNumber * 2);

    for (let i = 0; i < verticesNumber; i++) {
      let x = Math.random() - 0.5;
      let y = Math.random() - 0.5;
      let z = Math.random() - 0.5;

      let refX = (i % WIDTH) / WIDTH;
      let refY = ~~(i / WIDTH) / WIDTH;

      positions.set([x, y, z], i * 3);
      references.set([refX, refY], i * 2);
    }

    //__return section
    return [positions, references];
  }, []);

  useEffect(() => {
    gpuRenderer.current = new GPUComputationRenderer(WIDTH, WIDTH, gl);

    //__let's create DataTexture and fill its "positions" => dataTexture.current.source.data
    dataTexture.current = gpuRenderer.current.createTexture();

    for (let i = 0; i < dtNumber; i = i + 4) {
      let x = Math.random();
      let y = Math.random();
      let z = Math.random();
      dataTexture.current.source.data[i] = x;
      dataTexture.current.source.data[i + 1] = y;
      dataTexture.current.source.data[i + 2] = z;
      dataTexture.current.source.data[i + 3] = 1;
    }

    // dataTexture.current.source.data = dtNewPositions;
    //__Yuri: "this is the way to be based on the previous state of the shader [...] this is why it is called <framer buffer output technique> because shaders every single time outputs its state"
    positionsVariables.current = gpuRenderer.current.addVariable(
      'texturePosition',
      fragmentSimulation,
      dataTexture.current
    );
    //__
    positionsVariables.current.material.uniforms['time'] = { value: 0 };
    //__ some "settings" for texture itself; they are necessary to work...
    positionsVariables.current.wrapS = THREE.RepeatWrapping;
    positionsVariables.current.wrapT = THREE.RepeatWrapping;

    //__Yuri comments: "we dont need dependencies"

    //__wtf...
    console.log('positionsVariables.current:', positionsVariables.current);
    // console.log('dataTexture.current:', dataTexture.current);
    // console.log(
    //   'gpuRenderer.current.variables[0].initialValueTexture:',
    //   gpuRenderer.current.variables[0].initialValueTexture.source
    // );
    // if (positionsVariables.current !== null) {
    //   console.log(
    //     'gpuRenderer.current.getCurrentRenderTarget(positionsVariables.current):',
    //     gpuRenderer.current.getCurrentRenderTarget(positionsVariables.current)
    //   );
    // }

    //__end of initialization
    gpuRenderer.current.init();

    //__error checker | optional?
    const error = gpuRenderer.current.init();

    if (error !== null) {
      console.error(error);
    }
  }, [gl]);

  useFrame(state => {
    const { clock } = state;
    // shaderMaterialRef.current.uniforms.u_time.value = clock.getElapsedTime();
    uniforms.u_time.value = clock.elapsedTime;

    //___?????????
    gpuRenderer.current.compute();

    // uniforms.u_positionTexture.value = gpuRenderer.current.getCurrentRenderTarget(positionsVariables.current).texture
  });

  /**JSX**/
  return (
    <points ref={pointsRef} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]}>
      {/* <planeGeometry args={[1, 1, 10, 10]} /> */}
      <bufferGeometry>
        <bufferAttribute
          //__attach is how we specify the name of our attribute
          attach="attributes-position"
          //__ count is the total number of vertex our geometry will have. In our case, it is the number of particles we will end up rendering
          count={particlesPosition.length / 3}
          array={particlesPosition}
          //___itemSize represents the number of values from our attributes array associated with one item/vertex
          itemSize={3}
        />
        <bufferAttribute
          //__attach is how we specify the name of our attribute
          attach="attributes-reference"
          //__ count is the total number of vertex our geometry will have. In our case, it is the number of particles we will end up rendering
          count={references.length / 2}
          array={references}
          //___itemSize represents the number of values from our attributes array associated with one item/vertex
          itemSize={2}
        />
      </bufferGeometry>

      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        // blending={THREE.AdditiveBlending}
        // ref={shaderMaterialRef}
        // depthWrite={false}
        // wireframe={true}
        //__from Yuri
        //side={THREE.DoubleSide}
        //extensions: {derivatives:"#extension GL_OES_standard_derivatives : enable"}
      />

      {/* <pointsMaterial
        size={0.01}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      /> */}
    </points>
  );
};

export default PointsFBO;

//   useFrame(state => {
//     const { clock } = state;
//     shaderMaterialRef.current.uniforms.u_time.value = clock.getElapsedTime();
//   });

//   useFrame(state => {
//     // (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
//     //   state.clock.elapsedTime;
//     shaderMaterialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
//   });

//   useEffect(() => {
//     console.log(
//       'pointsRef',
//       //__this is a type casting
//       (pointsRef.current.material as THREE.ShaderMaterial).uniforms
//     );
//     console.log(
//       'shaderMaterialRef',
//       //__this is a type casting
//       shaderMaterialRef.current.uniforms
//     );
//   }, []);
