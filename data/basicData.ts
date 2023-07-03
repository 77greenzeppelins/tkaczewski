const colors = {
  dark: '#01030d',
  light: '#f1f5f9',
  corpo: '#38bdf8',
};
/*
__1. shape of mainLinks's path is strictly related with each "3D-page"
*/
const pagesPath = {
  homePath: '/',
  cvPath: '/cv',
  contactcPath: '/contact',
};

const pagesLinks = [
  { href: pagesPath.homePath, label: '3D' },
  { href: pagesPath.cvPath, label: 'CV' },
  { href: pagesPath.contactcPath, label: 'Contact' },
];

const contactData = {
  mail: 'tkaczewski.oskar@gmail.com',
  mobile: '728-617-507',
};

const linksToInstantContactData = {
  mail: `mailto:${contactData.mail}`, //___to delate
  mobile: `tel:${contactData.mobile}`,
};

/*
___(!) I've decided to keep all path in one place in case any changes...
___1. glb section is useful whenever useGLTF(somePath) is used; 
*/
const assetsPaths = {
  //___glb
  frame: '/assets/3D/glb/frame_4_draco.glb',
  dialogCloud: '/assets/3D/glb/dialogCloud_draco.glb',

  //___textures
  venus: '/assets/images/art/botticelli_venus_.webp',
  school: '/assets/images/art/raphael_800_1047.webp',
  phone: '../assets/images/contacts/instantContact_phone.webp',
  email: '../assets/images/contacts/instantContact_email.webp',
  family: '../assets/images/various/family_3.webp',

  //___fonts
  font: '/assets/fonts/eb-garamond-v26-latin-regular.woff',
};
/*
__1. let's assume there is a responsiveness treshold set to 768px
__2. condition should look like this: "x >= 768" as it corresponds to tailwind "md" setting
__3. ternay : respTreshold ? desktopSettings : mobilesettings
*/
const basicConfigs = {
  respTreshold: 768,
  errorMargin: 10,
  pageHome: {
    viewports: 7, //scrollable container in <PageHomeContent> is: 600vh + 100vh
    startErrorMargin: 100,
    endErrorMargin: 100,
  },
  pageContact: {
    opacityFactor: 1.125,
    scaleFactor: 0.25,
    viewports: 3,
    viewportsTotal: 3 * 100,
    rootMargin: '10% 0% 10% 0%',
    amount: 0.5,
    inViewStyle: {
      show: 'opacity-100 transition duration-500',
      hide: 'opacity-0 transition duration-500',
    },
  },
};
/*
__1. it turned out that camera settings take part in some calculations in various places in code / in various components;
__2. are used in <CameraControler> , <PlaneShader>
*/
const cameraSettings = {
  z: 1,
  y: 0,
  fov: 45,
};

/*
__2. for customeObjects |  <CameraControler>
*/
const cameraControler = {
  zAxisFactor: 0.22,
};

/*
___1. used in <CameraControler>, Page2D.tsx,
___2. concept: each 3D-pseudoPage has unique x-axis value to avoid any overlapping of events (for instance click event)
*/
const pages3DPositions = {
  pageHome: { x: 0 },
  page2D: { x: 10 },
  pageCV: { x: 20 },
  pageContacts: { x: 30 },
};

/*
(!) used in component with images
*/
const imagesData = {
  //__pageHome
  botticelliVenus: { path: assetsPaths.venus, width: 0.445, height: 0.8 },
  family: { path: assetsPaths.family, width: 0.446, height: 0.8 },
  //__page2D
  raphaelSchool: { path: assetsPaths.school, width: 0.8, height: 1.047 },
  //__pageContacts
  phone: {
    path: assetsPaths.phone,
    width: 0.42,
    height: 0.592,
  },
  //__pageContacts
  email: {
    path: assetsPaths.email,
    width: 0.42,
    height: 0.592,
  },
};
/*
settings for <InstantContactPenel> | <InstantContactButton>
*/
const contactButtonConfig = {
  scaleFrame: [0.178, 0.178, 0.178],
  scaleImage: [0.385, 0.385, 0.385],
  // topButtonPos: [pages3DPositions.pageContacts.x, 0.19, 0],
  // bottomButtonPos: [pages3DPositions.pageContacts.x, -0.19, 0],
  topButtonPos: [0, 0.19, 0],
  bottomButtonPos: [0, -0.19, 0],
};

/*
(!) bunch of settings used in respective pages in 3D world;
*/
const page3DConfigs = {
  //___general confige to set "pseudo-opacity-animations" during routing;
  visibilityDelay: 200,
  canvasOverlayDelay: 400,

  //___for pageHome
  pageHome: {
    pagePosition: [pages3DPositions.pageHome.x, 0, 0],
    act8_data: {
      hiddenPositionZ: -3,
      errorMargin: 100,
      contactButtonConfig: {
        scaleFrame: [0.45, 0.45, 0.45],
        scaleImage: [0.945, 0.945, 0.945],
        topButtonPos: [0, 0.25, 0],
        bottomButtonPos: [0.2, -0.45, -0.6],
      },
    },
  },

  familyText: [
    { text: "it's", position: [-0.09, 0.26, 0.05] },
    { text: 'me', position: [-0.09, 0.19, 0.025] },
  ],

  //__used in 3D <HomePage> to set groupProps.position to each "act"; order is important as it is used via index
  actsPositions: [
    [0, 0, 0],
    [0, 0, -4],
    [0, 0, -8],
    [0, 0, -12],
    [0, 0, -16],
    [0, 0, -20],
    [0, 0, -24],
    [0, 0, -28],
  ],
  //__text for Act_2
  text1: [
    { text: 'Thank you ', position: [0, 0.35, 0] },
    { text: 'for visiting', position: [0, 0, -0.3] },
    { text: 'my page', position: [0, -0.3, -0.3] },
  ],
  //__text for Act_3
  text2: [
    { text: "I'm", position: [0, 0.25, 0], rotation: [0, 0, 0] },
    {
      text: 'front-end',
      position: [0, 0, -0.5],
      rotation: [0, 0.7, 0],
    },
    {
      text: 'developer',
      position: [0, -0.29, -1],
      rotation: [0, -0.5, 0],
    },
  ],
  //__text for Act_4
  text3: [
    { text: 'Have you', position: [0, 0.5, 0], rotation: [0, -0.5, 0] },
    {
      text: 'ever',
      position: [0, 0.35, -1.2],
      rotation: [0, 0, 0],
    },
    {
      text: 'thought ',
      position: [0, 0.1, -0.4],
      rotation: [0, 0, 0],
    },
    {
      text: 'about... ',
      position: [0, -0.35, -0.8],
      rotation: [0, -0.5, 0],
    },
  ],
  //__text for Act_5a
  text4: { text: 'taking', position: [0, 0, 0], rotation: [0, 0, 0] },
  //__text for Act_5b
  text4b: [
    {
      text: 'o',
      position: [-0.15, -0.45, -0.6],
      rotation: [0, 0, 0],
    },
    {
      text: 'f',
      position: [0, -0.45, -0.6],
      rotation: [0, 0, 0],
    },
    {
      text: 'f',
      position: [0.15, -0.45, -0.6],
      rotation: [0, 0, 0],
    },
  ],
  //__text for Act_6
  text5: [
    {
      text: 'in',
      position: [0, 0.22, -0.6],
      rotation: [0, 0, 0],
    },
    {
      text: 'the',
      position: [0, 0, -0.3],
      rotation: [0, 0, 0],
    },
    {
      text: 'internet',
      position: [0, -0.15, 0],
      rotation: [0, 0, 0],
    },
    {
      text: '?',
      position: [0, -0.37, -0.3],
      rotation: [0, 0, 0],
    },
  ],
  //__text for Act_7
  text6: [
    {
      text: 'if so,',
      position: [0, 0.3, 0],
      rotation: [0, 0, 0],
    },
    {
      text: 'just',
      position: [0, 0.1, -2],
      rotation: [0, 0, 0],
    },
    {
      text: 'let me know !',
      position: [0, -0.38, -2.5],
      rotation: [0, 0, 0],
    },
  ],
  //__for Act_8 => contact panel

  //_____for page2D
  page2D: {
    pagePosition: [pages3DPositions.page2D.x, 0, 0],
    section1: { position: [1, 1, 1] },

    // __Act_5
    act5Config: {
      springPositionsZ: [-4.25, -2], //from | to
      springPositionsY: [-2.5, -0.3], //from | to
      springRotationX: [0, Math.PI * -0.2], //from | to
      springDelay: 1000,
    },
    answers: {
      platoCloud: {
        scale: [0.6, 0.6, 0.6],
        position: [-0.32, 0.8, 0.35],
        rotation: [Math.PI * 0.7, 0, 0],
      },
      platoText: {
        text: 'Oscar is awesome',
        scale: [0.25, 0.25, 1],
        position: [-0.32, 1, 0.45],
        rotation: [Math.PI * 0.1, 0, 0],
        fontSize: 0.5,
        lineHeight: 1,
      },
      aristotlesCloud: {
        scale: [0.6, 0.6, 0.6],
        position: [0.32, 0.8, 0.35],
        rotation: [Math.PI * 0.7, 0, Math.PI],
      },
      aristotlesText: {
        text: 'You are 100% right',
        scale: [0.225, 0.225, 1],
        position: [0.32, 1, 0.45],
        rotation: [Math.PI * 0.2, 0, 0],
        fontSize: 0.5,
        lineHeight: 1,
      },
    },

    // section1: { position: [1, 1, 1] },
  },

  //_____for pageCV
  pageCV: {
    pagePosition: [pages3DPositions.pageCV.x, 0, 0],
    act5Config: {
      springPositionsZ: [-4.25, -2], //from | to
      springPositionsY: [-2.5, -0.3], //from | to
      springRotationX: [0, Math.PI * -0.2], //from | to
      springDelay: 1000,
    },
  },
  //_____for pageContacts
  pageContacts: {
    // contactButtonConfig: {
    //   scaleFrame: [0.178, 0.178, 0.178],
    //   scaleImage: [0.385, 0.385, 0.385],
    //   topButtonPos: [0, 0.19, 0],
    //   bottomButtonPos: [0, -0.19, 0],
    // },
    contactButtonConfig: {
      scaleFrame: [0.45 * 0.6, 0.45 * 0.6, 0.45 * 0.6],
      scaleImage: [0.945 * 0.6, 0.945 * 0.6, 0.945 * 0.6],
      topButtonPos: [0, 0.165, -0.09],
      bottomButtonPos: [0.1, -0.265, -0.4],
    },
  },
};

//___
const animationsDelays = {
  introOverlayDurance: 2400,
  manuDelay: 2600, //___2600
  pseudoFooterDelay: 3000, //___2600
};

/*
__1. some general spring settings => for "config" property
*/
const springConfigs = {
  heavyAndSlow: { mass: 10, tension: 70, friction: 30, precision: 0.0001 },
  molasses: { mass: 1, tension: 280, friction: 120 },
  default: { mass: 1, tension: 170, friction: 26 },
  type1: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
};

export {
  //___
  pagesPath,
  pagesLinks,
  //___
  basicConfigs,
  //___
  colors,
  assetsPaths,
  imagesData,
  page3DConfigs,
  //___used in <CameraControler>
  pages3DPositions,
  //___used in <CameraControler> and ...
  cameraSettings,
  cameraControler,
  //___spring settings
  springConfigs,
  animationsDelays,
  //___
  contactData,
  linksToInstantContactData,
  //___
  contactButtonConfig,
};
