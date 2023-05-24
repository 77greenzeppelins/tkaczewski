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
  frame: '/assets/3D/glb/frame_4_draco.glb',
  venus: '/assets/images/art/botticelli_venus_.webp',
  school: '/assets/images/art/botticelli_venus_.webp',
  font: '/assets/fonts/eb-garamond-v26-latin-regular.woff',
};
const imagesData = {
  botticelliVenus: { path: assetsPaths.venus, width: 0.445, height: 0.8 },
  raphaelSchool: { path: assetsPaths.school, width: 0.445, height: 0.8 },
};

const page3DConfigs = {
  actsPositions: [
    [0, 0, 0],
    // [0, 0, -5],//
    [0, -2, 0],

    [0, 0, -6],
  ],
  act2: {
    text1: 'Thank you for visiting me',
    text2: "I'm front-end developer",
    text3: '',
  },
};

export { colors, pagesLinks, assetsPaths, imagesData, page3DConfigs };
