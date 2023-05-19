'use client';
import React, { useRef, useState } from 'react';
/**THREE Staff**/
import * as THREE from 'three';
/**R3F staff**/
import { useFrame } from '@react-three/fiber';
/**Drei Staff*/
import { Html } from '@react-three/drei';
/**Basic Data**/
import { colors } from '@/data/basicData';

/**--------------------------------------------------------**/
const Box = (props: JSX.IntrinsicElements['mesh']) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={colors.corpo}

        //  color={hovered ? colors.corpo : colors.light}
      />
      <Html
        position={[0, 0, 0.5]}
        wrapperClass="boxLabel"
        center
        // distanceFactor={8} // allows csalling
      >
        {' '}
        I love it!
      </Html>
    </mesh>
  );
};

export default Box;
