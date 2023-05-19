import React, { useRef, useMemo, useEffect } from 'react';
/** */
import * as THREE from 'three';
/**HardCoded Data**/
const trianglesNumb = 10;
const verticesNumb = trianglesNumb * 3; // 3 for each vertx in triangle
const verticesCoords = verticesNumb * 3; // 3 for x, y, z coords in each vertex
import { colors } from '@/data/basicData';

/** */
const Triangles = () => {
  /**..**/
  const geometryRef = useRef<THREE.BufferGeometry>(null!);
  /**...**/
  const verticesPositions = useMemo(() => {
    //__instantiate this array
    const verticesPositions = new Float32Array(verticesCoords);
    //__ calculate
    for (let i = 0; i < verticesCoords; i++) {
      verticesPositions[i] = (Math.random() - 0.5) * 3;
    }
    //___ return
    return verticesPositions;
  }, []);

  /***/
  useEffect(() => {
    //__this step is required by <meshStandardMaterial>; just to avoid blinking of triangles that don't know where theif "face" is;
    geometryRef.current.computeVertexNormals();
  }, []);

  /**JSX**/
  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesNumb}
          itemSize={3} // how many values specifies one vertex; x,y,z
          array={verticesPositions}
          //___equivalent to: geometry.attribute.position
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Triangles;
