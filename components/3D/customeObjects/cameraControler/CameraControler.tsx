import React, { useRef } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Components**/
import ThreePlane from '../../basicShapes/plane/ThreePlane';
/**Hooks*/
import { usePathname } from 'next/navigation';
/**Utils*/
import { setXPosition } from './utils/utils';
/**Basic Data*/
import { pagesPath, cameraSettings } from '@/data/basicData';

/**----------------------------**/
const CameraControler = () => {
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);

  /**Condition of visibility**/
  const path = usePathname();
  // const [currentPath, setCurrentPath] = useState('');
  const visibleOnHome = path === pagesPath.homePath;

  /**Animations / Manipulations*/
  useFrame(state => {
    /*
    __1. settings solely for HomePage; only z-axis is animated
    */
    if (visibleOnHome) {
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
    /*
    __1. general settings for all Pages;
    __2. concept: each page should be deploy in "separate" sector on x-axis;
    __3. when user changes path camera jumps to new x-axis position; 
    */
    const cameraPosition = new THREE.Vector3(
      //___camera position-x => just jump when path got changed
      setXPosition(path),
      //___camera position-y => just stat at the same level
      0,
      //___camera position-z => just follow the mesh...
      visibleOnHome
        ? cameraSettings.z + meshRef.current.position.z
        : cameraSettings.z
    );
    state.camera.position.copy(cameraPosition);
  });

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
