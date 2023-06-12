/**Provider**/
import DreiPerspectiveCamera from '../_Drei/camera/DreiPerspectiveCamera';
import { BasicMaterialProvider } from '../_Three/materials/basicMaterial/ThreeBasicMaterial';
/**Components**/
import CameraControler from '../customeObjects/cameraControler/CameraControler';
import PageHome from '../page_1_home/PageHome';
import Page2D from '../page_2_2D/Page2D';
import PageContacts from '../page_9_contacts/PageContacts';

/**-------------------------------**/
const Scene3D = () => {
  /**JSX**/
  return (
    <BasicMaterialProvider>
      {/*-----Canvas Engine--------------------------------*/}
      <DreiPerspectiveCamera />
      <CameraControler />
      {/*-----Canvas Infrastructure--------------------------------*/}
      <fog attach="fog" args={['#01030d', 3, 4.3]} />
      {/*-----Canvas Content--------------------------------*/}
      <PageHome />
      <Page2D />
      <PageContacts />
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
