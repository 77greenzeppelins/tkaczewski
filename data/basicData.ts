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
];

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
//___
const cameraSettings = {
  x: 3,
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

//___used in component with images
const imagesData = {
  botticelliVenus: { path: assetsPaths.venus, width: 0.445, height: 0.8 },
  raphaelSchool: { path: assetsPaths.school, width: 0.8, height: 1.047 },

  phone: {
    path: assetsPaths.phone,
    width: 0.42,
    height: 0.592,
    position: [pages3DPositions.pageContacts.x, 0.55, 0],
  },
  email: {
    path: assetsPaths.email,
    width: 0.42,
    height: 0.592,
    position: [pages3DPositions.pageContacts.x, -0.55, 0],
  },
};

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

const springConfigs = {
  heavyAndSlow: { mass: 10, tension: 70, friction: 30, precision: 0.0001 },
  molasses: { mass: 1, tension: 280, friction: 120 },
  default: { mass: 1, tension: 170, friction: 26 },
  type1: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
};

export {
  colors,
  pagesLinks,
  assetsPaths,
  imagesData,
  page3DConfigs,
  //___used in <CameraControler>
  pages3DPositions,
  //___used in <CameraControler> and ...
  cameraSettings,
  //___
  springConfigs,
};
