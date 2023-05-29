import React from 'react';
/**Components**/
import BasicFrame from '@/components/3D/customeObjects/frame/BasicFrame';
import ImageCanvas from '@/components/3D/customeObjects/imageCanvas/ImageCanvas';
/**Drei Staff**/
import { Float, Html } from '@react-three/drei';
/**BasicData**/
import { imagesData } from '@/data/basicData';

/**TS**/
interface Props {
  groupProps: JSX.IntrinsicElements['group'];
  frameMeshProps?: JSX.IntrinsicElements['mesh'];
  imageMeshProps?: JSX.IntrinsicElements['mesh'];
  path: string;
  width: number;
  height: number;
  // geometryProps?: JSX.IntrinsicElements['sphereGeometry'];
}

const floatConfig = {
  rotationIntensity: 0.8,
  floatIntensity: 0.2,
  floatingRange: [-0.2, 0.2],
};

/**----------------------------------------------------------**/
const InstantContactButton3D = ({
  groupProps,
  frameMeshProps,
  imageMeshProps,
  path,
  width,
  height,
}: Props) => {
  /**JSX**/
  return (
    <group
      {...groupProps}
      //  ref={groupRef}
    >
      <Float
        speed={2} // Animation speed, defaults to 1
        rotationIntensity={0.7} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <BasicFrame meshProps={frameMeshProps} />
        <ImageCanvas
          meshProps={imageMeshProps}
          argsWidth={width}
          argsHeight={height}
          image={path}
        />
        {/* <Html transform position={[0, 0, 0]}>
          <div
            onClick={() => console.log('.......')}
            className=" bg-corpo w-[10px] h-[35px]"
          ></div>
        </Html> */}
      </Float>
    </group>
  );
};

export default InstantContactButton3D;
