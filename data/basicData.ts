const colors = {
  dark: '#01030d',
  light: '#f1f5f9',
  corpo: '#38bdf8',
};
const pagesLinks = [
  { href: '/', label: '3D' },
  { href: '/2d', label: '2D' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
  { href: '/io', label: 'IO' },
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
};

/*
__1. it turned out that camera settings take part in some calculations in various places in code / in various components;
__2. are used in <CameraControler> , <PlaneShader>
*/
const cameraSettings = {
  x: 1,
  z: 1,
  fov: 45,
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
  //__page2D
  raphaelSchool: { path: assetsPaths.school, width: 0.8, height: 1.047 },
  //__pageContacts
  phone: {
    path: assetsPaths.phone,
    width: 0.42,
    height: 0.592,
    position: [pages3DPositions.pageContacts.x, 0.55, 0],
  },
  //__pageContacts
  email: {
    path: assetsPaths.email,
    width: 0.42,
    height: 0.592,
    position: [pages3DPositions.pageContacts.x, -0.55, 0],
  },
};

/*
(!) bunch of settings used in 3D world;
*/
const page3DConfigs = {
  //___general settings
  visibilityDelay: 1000,
  canvasOverlayDelay: 1000,

  //___for pageHome
  pageHome: {
    pagePosition: [pages3DPositions.pageHome.x, 0, 0],
  },

  actsPositions: [
    [0, 0, 0],
    [0, 0, -4],
    [0, 0, -8],
    [0, 0, -12],
    [0, 0, -16],
  ],
  text1: [
    { text: 'Thank you for', position: [0, 0.2, 0] },
    { text: 'visiting me!', position: [0, -0.2, -0.5] },
  ],
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
  text4: [
    { text: 'taking', position: [0, 0.15, 0], rotation: [0, 0, 0] },
    {
      text: 'off',
      position: [0, -0.15, -0.6],
      rotation: [0, 0, 0],
    },
  ],
  //___for page2D
  page2D: {
    pagePosition: [pages3DPositions.page2D.x, 0, 0],
    // section1: { position: [1, 1, 1] },

    //__Act_1
    act1Config: {
      // springPositionsZ: [-4.25, -2], //from | to
      // springPositionsY: [-1.5, -0.3], //from | to
      // springRotationX: [0, Math.PI * -0.2], //from | to
      // springDelay: 1000,
    },

    //__Act_5
    act5Config: {
      springPositionsZ: [-4.25, -2], //from | to
      springPositionsY: [-1.5, -0.3], //from | to
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
    // act5: { position: [pages3DPositions.page2D.x, 0, 0] },
  },
};

//___
const animationsDelays = {
  introOverlayDurance: 2400,
  manuDelay: 2600,
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
  basicConfigs,
  //___
  colors,
  pagesLinks,
  assetsPaths,
  imagesData,
  page3DConfigs,
  //___used in <CameraControler>
  pages3DPositions,
  //___used in <CameraControler> and ...
  cameraSettings,
  //___spring settings
  springConfigs,
  animationsDelays,
  //___
  contactData,
  linksToInstantContactData,
};
