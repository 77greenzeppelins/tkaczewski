import React, { useEffect, useRef } from 'react';
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
import { pagesLinks, cameraSettings } from '@/data/basicData';

/**----------------------------**/
const CameraControler = () => {
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);

  /**Condition of visibility**/
  const path = usePathname();
  // const [currentPath, setCurrentPath] = useState('');
  const visibleOnHome = path === pagesLinks[0].href;
  // const visible2D = path === pagesLinks[1].href;
  // const visibleCV = path === pagesLinks[2].href;
  // const visibleOnContacts = path === pagesLinks[3].href;

  // const setXPosition = (path: string) => {
  //   switch (path) {
  //     case pagesLinks[0].href:
  //       return pages3DPositions.pageHome.x;
  //     case pagesLinks[1].href:
  //       return pages3DPositions.page2D.x;
  //     case pagesLinks[2].href:
  //       return pages3DPositions.pageCV.x;
  //     case pagesLinks[3].href:
  //       return pages3DPositions.pageContacts.x;
  //   }
  // };

  /**Animations / Manipulations*/
  useFrame(state => {
    /*
    for HomePage; z-axis settings
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
    //__
    const cameraPosition = new THREE.Vector3(
      //___x
      // visibleOnContacts ? 10 : 0,
      setXPosition(path),
      //___y
      0,
      //___z
      visibleOnHome
        ? cameraSettings.x + meshRef.current.position.z
        : cameraSettings.x
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
