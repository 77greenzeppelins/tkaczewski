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
/**-------------------------------**/
const Scene3D = () => {
  /**Fog Modificator*/
  const path = usePathname();
  const nearFor = path === '/test1';
  //___? ['#01030d', 1.5, 1.7] : ['#01030d', 3, 4.3];
  /**JSX**/
  return (
    <BasicMaterialProvider>
      {/*-----Canvas Engine--------------------------------*/}
      <DreiPerspectiveCamera />
      <CameraControler />
      {/*-----Canvas Infrastructure--------------------------------*/}
      <fog
        attach="fog"
        args={['#01030d', nearFor ? 1.5 : 3, nearFor ? 1.8 : 4.3]}
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
