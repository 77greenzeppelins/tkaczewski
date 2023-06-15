import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
/**Shaders**/
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

import {
  GPUComputationRenderer,
  Variable,
} from 'three/examples/jsm/misc/GPUComputationRenderer';

const WIDTH = 32;
const HEIGHT = 32;
const DT_SIZE = WIDTH * HEIGHT;

const fragmentSimulation = `
  uniform float u_time;
  uniform float delta;
  uniform sampler2D texturePosition;
  uniform float u_resolution_width;
  uniform float u_resolution_height;

  void main() {
    vec2 resolution = vec2(u_resolution_width, u_resolution_height);
    vec2 uv = gl_FragCoord.xy / resolution.xy;

    vec4 tmpPos = texture2D(texturePosition, uv);
    vec3 position = tmpPos.xyz;

    gl_FragColor = vec4(position + vec3(0.001), 1.0);
  }
`;

const PointsFBO2 = () => {
  const pointsRef = useRef<THREE.Points>(null!);

  const state = useThree();

  const gpuComputeRef = useRef<GPUComputationRenderer>(null!);
  const dtPositionRef = useRef<THREE.DataTexture>(null!);
  const positionVariableRef = useRef<Variable>(null!);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_positionTexture: {
        value: null,
      },
      u_resolution_width: {
        value: state.size.width,
      },
      u_resolution_height: {
        value: state.size.height,
      },
      u_colorA: {
        value: new THREE.Color('#FFE486'),
      },
      u_colorB: {
        value: new THREE.Color('#FEB3D9'),
      },
    }),
    [state.size.height, state.size.width]
  );

  const [particlesPosition, references] = useMemo(() => {
    const positions = new Float32Array(DT_SIZE * 3);
    const references = new Float32Array(DT_SIZE * 2);

    for (let i = 0; i < DT_SIZE; i++) {
      let x = Math.random() - 0.5;
      let y = Math.random() - 0.5;
      let z = Math.random() - 0.5;

      let refX = (i % WIDTH) / WIDTH;
      let refY = ~~(i / WIDTH) / WIDTH;

      positions.set([x, y, z], i * 3);
      references.set([refX, refY], i * 2);
    }
    return [positions, references];
  }, []);

  //   const textureNewPositions = useMemo(() => {
  //     const textureNewPositions = new Float32Array(DT_SIZE * 4);
  //     for (let i =0; i<)
  //   }, []);

  // Initialize the GPUComputationRenderer in a useEffect hook
  useEffect(() => {
    // Create a new instance of GPUComputationRenderer
    const gpuCompute = new GPUComputationRenderer(WIDTH, HEIGHT, state.gl);

    //__let's create DataTexture
    const dtPosition = gpuCompute.createTexture();

    // Add the position data texture to the GPUComputationRenderer
    const positionVariable = gpuCompute.addVariable(
      'texturePosition',
      fragmentSimulation,
      dtPosition
    );

    // Set any necessary uniforms or variables
    positionVariable.material.uniforms['time'] = { value: 0 };

    // Initialize the GPUComputationRenderer
    gpuCompute.init();

    // Store the GPUComputationRenderer and position data texture in the refs
    gpuComputeRef.current = gpuCompute;
    dtPositionRef.current = dtPosition;
    positionVariableRef.current = positionVariable;
  }, [particlesPosition, state.gl]);

  // Use the useFrame hook to update the GPUComputationRenderer and uniforms
  useFrame(({ clock }) => {
    // Get the current GPUComputationRenderer and position data texture from the refs
    const gpuCompute = gpuComputeRef.current;
    const dtPosition = dtPositionRef.current;
    const positionVariable = positionVariableRef.current;

    // Update the time uniform
    uniforms.u_time.value = clock.elapsedTime;

    // Compute the new positions using the GPUComputationRenderer
    gpuCompute.compute();

    // Update the position data texture
    // const positionTexture =
    //   gpuCompute.getCurrentRenderTarget(positionVariable).texture;
    // uniforms.u_positionTexture.value = positionTexture;
    // Update the position data texture
    // const positionTexture =
    //   gpuCompute.getCurrentRenderTarget(positionVariable).texture;
    // uniforms.u_positionTexture.value = positionTexture;

    // Update the position data texture in the DataTexture object
    // const positions = new Float32Array(DT_SIZE * 3);
    // positionTexture.image.data.forEach((val, idx) => {
    //   positions[idx % (DT_SIZE * 3)] = val;
    // });
    // dtPosition.image.data.set(positions);
    // dtPosition.needsUpdate = true;

    // Update the position attribute in the buffer geometry
    // const positionAttribute =
    //   pointsRef.current.geometry.getAttribute('position');
    // positionAttribute.array = positions;
    // positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]}>
      <bufferGeometry>
        <bufferAttribute
          attach="position"
          count={DT_SIZE}
          array={particlesPosition}
          itemSize={3}
        />
        {/* <bufferAttribute
          attach="attributes"
          args={['reference', references]}
          itemSize={2}
        /> */}
      </bufferGeometry>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default PointsFBO2;
