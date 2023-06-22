/*
__________2D
*/
//__direct contact Staff
import InstantContactButtons2D from './multipagesComponents/instantContactButtons/InstantContactButtons2D';
import DirectEmail from './multipagesComponents/_basicComponents/links/directContactLinks/DirectEmail';
import DirectPhone from './multipagesComponents/_basicComponents/links/directContactLinks/DirectPhone';
import ContactsDataSection from './pagesComponents/pageContacts/contactsData/ContactsDataSection';
/*
__________3D
*/
import DreiPerspectiveCamera from './3D/_Drei/camera/DreiPerspectiveCamera';
import CameraControler from './3D/customeObjects/cameraControler/CameraControler';
import PageHome from './3D/page_1_home/PageHome';
import PageCV from './3D/page_3_cv/PageCV';
import PageContacts from './3D/page_9_contacts/PageContacts';
//___Custome components
import DreiText from './3D/_Drei/text/DreiText';
import BasicFrame from './3D/customeObjects/frame/BasicFrame';
import ImageCanvas from './3D/customeObjects/imageCanvas/ImageCanvas';
import InstantContactButton3D from './3D/customeObjects/instantContactPanel/instantContactButton/InstantContactButton3D';
import InstantContactPanel from './3D/customeObjects/instantContactPanel/InstantContactPanel';

//___HomePage
import Act1 from './3D/page_1_home/acts/act_1/Act1';
import Act2 from './3D/page_1_home/acts/act_2/Act2';
import Act3 from './3D/page_1_home/acts/act_3/Act3';
import Act4 from './3D/page_1_home/acts/act_4/Act4';
import Act5 from './3D/page_1_home/acts/act_5/Act5';
import Act6 from './3D/page_1_home/acts/act_6/Act6';
import Act7 from './3D/page_1_home/acts/act_7/Act7';
import Act8 from './3D/page_1_home/acts/act_8/Act8';

//__

export {
  //___
  InstantContactButtons2D,
  DirectEmail,
  DirectPhone,
  ContactsDataSection,
  //
  CameraControler,
  DreiPerspectiveCamera,
  PageHome,
  PageCV,
  PageContacts,
  //___
  DreiText,
  BasicFrame,
  ImageCanvas,
  //___3D | PageHome
  Act1,
  Act2,
  Act3,
  Act4,
  Act5,
  Act6,
  Act7,
  Act8,
  //___
  InstantContactPanel,
  InstantContactButton3D,
};
