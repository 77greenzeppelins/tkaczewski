// 'use client';
/*
__________2D
*/
//___
import FlyingLine from './multipagesComponents/lines/flyingLine/FlyingLine';
import ScrollPrompt from './layoutComponents/pseudoFooter/scrollPrompt/ScrollPrompt';
//__direct contact Staff
import InstantContactButtons2D from './multipagesComponents/instantContactButtons/InstantContactButtons2D';
import DirectEmail from './multipagesComponents/_basicComponents/links/directContactLinks/DirectEmail';
import DirectPhone from './multipagesComponents/_basicComponents/links/directContactLinks/DirectPhone';
import DirectContactsSection from './pagesComponents/pageContacts/pageContent/directContactSection/DirectContactSection';
import OtherContactsSection from './pagesComponents/pageContacts/pageContent/otherContactsSection/OtherContactsSection';
import GitHubSection from './pagesComponents/pageContacts/pageContent/githubSection/GitHubSection';
import GitHubSectionTrans from './pagesComponents/pageContacts/pageContent/githubSection/GitHubSectionTrans';
import StickyContainer from './pagesComponents/pageContacts/stickyContainer/StickyContainer';
//___pageCV
import PageCvContent from './pagesComponents/pageCV/pageContent/PageCvContent';
import SmoothCvContainer from './pagesComponents/pageCV/smoothCvContainer/SmoothCvContainer';
import HeroSectionPageCv from './pagesComponents/pageCV/pageContent/heroSection/HeroSectionPageCv';
import CvSection from './pagesComponents/pageCV/pageContent/infoSection/CvSection';
import AskAI from './pagesComponents/pageCV/pageContent/askAI/AskAI';
//___pageContacts
import ScrollableContent from './pagesComponents/pageContacts/stickyContainer/scrollableContent/ScrollableContent';
/*
__________3D
*/
import DreiPerspectiveCamera from './3D/_Drei/camera/DreiPerspectiveCamera';
import CameraControler from './3D/customeObjects/cameraControler/CameraControler';
import PageHome from './3D/page_1_home/PageHome';
import PageCV from './3D/page_3_cv/PageCV';
import PageContacts from './3D/page_9_contacts/PageContacts';
import PageTest1 from './3D/page_0_test1/PageTest1';
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

/*
SVG
*/
import GitHubIcon from './svg/GitHubIcon';

//__

export {
  //___
  FlyingLine,
  ScrollPrompt,
  //___
  InstantContactButtons2D,
  DirectEmail,
  DirectPhone,
  DirectContactsSection,
  //___pageContacts
  StickyContainer,
  OtherContactsSection,
  GitHubSection,
  GitHubSectionTrans,
  //___pageCV
  PageCvContent,
  HeroSectionPageCv,
  CvSection,
  AskAI,
  SmoothCvContainer,
  //_______________________________3D
  CameraControler,
  DreiPerspectiveCamera,
  PageHome,
  PageCV,
  PageContacts,
  PageTest1,
  //___
  DreiText,
  BasicFrame,
  ImageCanvas,
  //___
  ScrollableContent,
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
  //___SVG
  GitHubIcon,
};
