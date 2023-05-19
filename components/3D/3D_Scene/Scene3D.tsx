import React from 'react';
/**Components**/
import MainCanvas from '../3D_Canvas/MainCanvas';
import Act1 from '../acts/act_1/Act1';
/**BasicData*/
import { colors } from '@/data/basicData';

/**--------------------**/
const Scene3D = () => {
  return (
    <MainCanvas>
      {/*-----Canvas "attributes"--------------------------------*/}
      <color attach="background" args={[colors.dark]} />
      {/* <fog attach="fog" args={[colors.dark, 2, 3]} /> */}
      <Act1 />
    </MainCanvas>
  );
};

export default Scene3D;

/*
...old settings 
*/
// sRGB={true}
/*
            suggestion from :https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance
            */
// frameloop="demand"
// shadows
/*
            https://stackoverflow.com/questions/64899716/color-differences-between-threejs-vanilla-js-and-react-three-fiber-create-re
            There was a problem with "white color" on plane's background i.e. I couldn't achieve pure white, and there was a difference batween "white" on canvas smog / backgrounde and "white" on otcher objects; 
            there is one drawback though: colors are a bit flat... aluminium doesn look as impresive as it looks withou this setting
            */
// onCreated={({ gl }) => {
//   gl.toneMapping = THREE.NoToneMapping;
// }}
/*
            What "gl-shadowMaps-type" does???
            */
// gl-shadowMaps-type={THREE.PCFSoftShadowMap}
// dpr={[1, 2]} // doubles canvas' width and size ???
// pixelRatio={[1, 2]} //?? syntax
// pixelRatio={window.devicePixelRatio} //?? syntax
// camera={{ fov: 45, position: [0, 0, 3] }}
