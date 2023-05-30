import React, { useRef } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame, useThree } from '@react-three/fiber';
/**Components**/
import ThreePlane from '../../basicShapes/plane/ThreePlane';
interface Props {
  isOnHome: boolean;
}

/**----------------------------**/
const CameraControler = ({ isOnHome }: Props) => {
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);
  /**Animations / Manipulations*/
  useFrame(state => {
    if (isOnHome) {
      meshRef.current.position.set(
        0,
        0,
        THREE.MathUtils.lerp(
          meshRef.current.position.z,
          // scrollProgress.current * -30,
          true ? window.scrollY / -200 : 0,
          // 0.05
          0.1
        )
      );
    }

    //____min version
    const cameraPosition = new THREE.Vector3(
      0,
      0,
      isOnHome ? 3 + meshRef.current.position.z : 3
    );
    state.camera.position.copy(cameraPosition);
  });

  // const state = useThree();
  // console.log('...state:', state);

  /**JSX**/
  return (
    <group>
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        //  {...meshProps}
        visible={false}
      >
        <ThreePlane argsWidth={1} argsHeight={1} />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
    </group>
  );
};

export default CameraControler;

//__basic settings to move plane on z-axis
// meshRef.current.position.z = THREE.MathUtils.lerp(
//   meshRef.current.position.z,
//   // scrollProgress.current * -30,
//   true ? window.scrollY / -200 : 0,
//   // 0.05
//   0.1
// );

// meshRef.current.position.y = scrollProgress.current * -30;
// const targetPosition = new THREE.Vector3(0, 0, meshRef.current.position.z);//
// const targetPosition = new THREE.Vector3(0, meshRef.current.position.y, 0);

//__initial settings for camera
// const cameraPosition = new THREE.Vector3();
// cameraPosition.copy(targetPosition);
// cameraPosition.z += 3;
// cameraPosition.y += 0;

// const cameraTarget = new THREE.Vector3();
// cameraTarget.copy(targetPosition);
// // cameraTarget.y += 0.25;

// state.camera.position.copy(cameraPosition);
// state.camera.lookAt(cameraTarget);
