import { useFrame, useThree } from '@react-three/fiber';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F staff*/
// import { BufferAttribute, PointsMaterial } from 'three';
/**Shaders**/
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
// import someFake100 from './someFake100';
// import vertexShader from '@/components/3D/shaders/planes/movingPlane/vertexShader';
// import fragmentShader from '@/components/3D/shaders/planes/movingPlane/fragmentShader';
import fragmentSimulation from './fragmentSimulation';
//___
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer';
const WIDTH = 32;
const dtNumber = WIDTH * WIDTH * 4; //each DataTexture entity requires 4 numbers / "parameters"

/**TS**/
interface Props {
  verticesNumber: number;
  shape: 'box' | 'sphere';
  radius?: number;
}
const PointsFBO3 = ({ verticesNumber, radius = 1, shape }: Props) => {
  /**References**/
  const pointsRef = useRef<THREE.Points>(null!);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!);
  const gpuRenderer = useRef<GPUComputationRenderer>(null!);
  const dataTexture = useRef<THREE.DataTexture>(null!);

  /*
  Section Layout
  */
  //___attributes array
  const particlesPosition = useMemo(() => {
    //___all x,y,z values for each vertex
    const positions = new Float32Array(verticesNumber * 3);
    //___
    if (shape === 'box') {
      for (let i = 0; i < verticesNumber; i++) {
        //__Generate random values for x, y, and z on every loop
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;
        //__We add the 3 values to the attribute array for every loop
        positions.set([x, y, z], i * 3);
      }
    }
    if (shape === 'sphere') {
      for (let i = 0; i < verticesNumber; i++) {
        // const distance = 1;
        const distance = Math.sqrt(Math.random()) * radius;
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }
    //__return section
    return positions;
  }, [verticesNumber, shape, radius]);

  // console.log('dtNewPositions:', dtNewPositions);
  // console.log('dataTexture.current:', dataTexture.current);

  //___
  const { gl, size } = useThree();
  /*
  Section Animate / Manipulate / make shaders
  */
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_radius: {
        value: radius,
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
    [radius, size.height, size.width]
  );

  const state = useThree();

  useEffect(() => {
    gpuRenderer.current = new GPUComputationRenderer(WIDTH, WIDTH, state.gl);

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
    const positionsVariables = gpuRenderer.current.addVariable(
      'texturePosition',
      fragmentSimulation,
      dataTexture.current
    );
    //__
    positionsVariables.material.uniforms['time'] = { value: 0 };
    //__ some "settings" for texture itself; they are necessary to work...
    positionsVariables.wrapS = THREE.RepeatWrapping;
    positionsVariables.wrapT = THREE.RepeatWrapping;

    //__Yuri comments: "we dont need dependencies"

    //__wtf...
    // console.log(
    //   'positionsVariables.material.uniforms:',
    //   positionsVariables.material.uniforms
    // );
    console.log('dataTexture.current:', dataTexture.current);
    // console.log(
    //   'gpuRenderer.current.variables[0].initialValueTexture:',
    //   gpuRenderer.current.variables[0].initialValueTexture.source
    // );

    //__end of initialization
    gpuRenderer.current.init();

    //__error checker | optional?
    const error = gpuRenderer.current.init();

    if (error !== null) {
      console.error(error);
    }
  }, [state.gl]);

  // console.log('gpuRenderer.current:', gpuRenderer.current);

  useFrame(state => {
    const { clock } = state;
    // shaderMaterialRef.current.uniforms.u_time.value = clock.getElapsedTime();
    uniforms.u_time.value = clock.elapsedTime;
  });

  /**JSX**/
  return (
    <points ref={pointsRef}>
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
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        ref={shaderMaterialRef}
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default PointsFBO3;

// const dtNewPositions = useMemo(() => {
//   //__TextureData doesn have "image" property
//   //   let arr = texture.image.data;
//   let dtNewPositions = new Float32Array(dtNumber);
//   for (let i = 0; i < dtNumber; i = i + 4) {
//     let x = Math.random();
//     let y = Math.random();
//     let z = Math.random();
//     let w = 1;
//     // dtNewPositions[i] = x;
//     // dtNewPositions[i + 1] = y;
//     // dtNewPositions[i + 2] = z;
//     // dtNewPositions[i + 3] = 1;
//     // dtNewPositions.set([x, y, z, w], i * 4);
//   }
//   return dtNewPositions;
// }, []);
// const makeDtPositions = useCallback((arr: Float32Array) => {
//   let dtNewPositions = arr;
//   for (let i = 0; i < dtNewPositions.length; i = i + 4) {
//     let x = Math.random();
//     let y = Math.random();
//     let z = Math.random();
//     dtNewPositions[i] = x;
//     dtNewPositions[i + 1] = y;
//     dtNewPositions[i + 2] = z;
//     dtNewPositions[i + 3] = 1;
//   }
//   return dtNewPositions;
// }, []);

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
