/**Provider**/
import { usePathname } from 'next/navigation';
import { BasicMaterialProvider } from '../_Three/materials/basicMaterial/ThreeBasicMaterial';
/**Components**/
import {
  PageHome,
  PageCV,
  PageContacts,
  CameraControler,
  DreiPerspectiveCamera,
  PageTest1,
} from '@/components';
/**Basic Data**/
import { pagesPath } from '@/data/basicData';

/**-------------------------------**/
const Scene3D = () => {
  /*
  ___1. this staff is used to modify fog's distance from camera; if you want 3D object to immers in fog and therefor become invisible "quicker" i.e with position-z={-1} add relevant path;
  */
  const path = usePathname();
  const closeFog =
    path === pagesPath.test1Path || path === pagesPath.contactcPath;
  /**JSX**/
  return (
    <BasicMaterialProvider>
      {/*-----Canvas Engine--------------------------------*/}
      <DreiPerspectiveCamera />
      <CameraControler />
      {/*-----Canvas Infrastructure--------------------------------*/}
      <fog
        attach="fog"
        args={['#01030d', closeFog ? 1.5 : 3, closeFog ? 1.8 : 4.3]}
      />

      {/*-----Canvas Content--------------------------------*/}
      <PageHome />
      <PageCV />
      <PageContacts />
      <PageTest1 />
    </BasicMaterialProvider>
  );
};

export default Scene3D;

{
  /* <color attach="background" args={[colors.dark]} /> */
}
{
  /* <OrbitControls makeDefault enableZoom={false} /> */
}
{
  /* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */
}
