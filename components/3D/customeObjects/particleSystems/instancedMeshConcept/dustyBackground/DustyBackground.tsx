import React, { useRef, useMemo } from 'react';
/**THREE Staff**/
import * as THREE from 'three';
import { MeshPhongMaterial } from 'three';
import { dodecaHedron } from '@/components/3D/basicShapes/dodecahedron/DodecaHedron';
/**R3F Staff**/
import { useFrame, useThree } from '@react-three/fiber';
/**Utils**/
import { rangedRandomness } from '@/utils/functions';

/**TS**/
interface Props {
  itemsNumber: number;
  mouse: React.MutableRefObject<number[]>;
}

/**----------------------------**/
const DustyBackground = ({ itemsNumber, mouse }: Props) => {
  /**References**/
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const lightRef = useRef<THREE.PointLight>(null!);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  /**LayoutLike Section*/
  //   const particles = useMemo(() => {
  //     //__set array
  //     const particlesConfig = [];
  //     //__calculate array's content
  //     for (let i = 0; i < itemsNumber; i++) {
  //       const time = rangedRandomness(0, 100);
  //       const factor = rangedRandomness(20, 120);
  //       const speed = rangedRandomness(0.01, 0.015) / 2;
  //       const x = rangedRandomness(-50, 50);
  //       const y = rangedRandomness(-50, 50);
  //       const z = rangedRandomness(-50, 50);
  //       //__push content to array
  //       particlesConfig.push({ time, factor, speed, x, y, z });
  //     }
  //     //__return array
  //     return particlesConfig;
  //   }, [itemsNumber]);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < itemsNumber; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [itemsNumber]);

  // The innards of this hook will run every frame
  useFrame(state => {
    // Makes the light follow the mouse
    // light.current.position.set(
    //   mouse.current[0] / aspect,
    //   -mouse.current[1] / aspect,
    //   0
    // );
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (mouse.current[0] - particle.mx) * 0.01;
      particle.my += (mouse.current[1] * -1 - particle.my) * 0.01;
      // Update the dummy object
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      // And apply the matrix to the instanced item
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Create a material for the mesh
  //   const phongMaterial = new MeshPhongMaterial({ color: '#050505' });

  /**JSX**/
  return (
    <>
      <pointLight
        ref={lightRef}
        distance={40}
        intensity={8}
        color="lightblue"
      />

      <instancedMesh
        ref={meshRef}
        // args={[dodecaHedron(0.2, 0), phongMaterial, itemsNumber]}
        args={[undefined, undefined, itemsNumber]}
        //___
        scale={[0.025, 0.025, 0.025]}
        position-z={-0.6}
      >
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#1e0ed3" />
        {/* <meshBasicMaterial color="#1e0ed3" /> */}
      </instancedMesh>
    </>
  );
};

export default DustyBackground;
