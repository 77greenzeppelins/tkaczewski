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

const assetsPaths = {
  //___glb
  frame: '/assets/3D/glb/frame_4_draco.glb',
  //___textures
  venus: '/assets/images/art/botticelli_venus_.webp',
  school: '/assets/images/art/botticelli_venus_.webp',
  phone: '../assets/images/contacts/instantContact_phone.webp',
  email: '../assets/images/contacts/instantContact_email.webp',
  //___fonts
  font: '/assets/fonts/eb-garamond-v26-latin-regular.woff',
};
const imagesData = {
  botticelliVenus: { path: assetsPaths.venus, width: 0.445, height: 0.8 },
  raphaelSchool: { path: assetsPaths.school, width: 0.445, height: 0.8 },
  phone: {
    path: assetsPaths.phone,
    width: 0.42,
    height: 0.592,
    position: [0, 0.6, 0],
  },
  email: {
    path: assetsPaths.email,
    width: 0.42,
    height: 0.592,
    position: [0, -0.6, 0],
  },
};

const page3DConfigs = {
  actsPositions: [
    [0, 0, 0],
    [0, 0, -4], //
    // [0, -2, 0],
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
};

export { colors, pagesLinks, assetsPaths, imagesData, page3DConfigs };
