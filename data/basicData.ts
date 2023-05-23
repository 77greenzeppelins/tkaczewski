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
};
const imagesData = {
  botticelliVenus: { path: assetsPaths.venus, width: 0.445, height: 0.8 },
  raphaelSchool: { path: assetsPaths.school, width: 0.445, height: 0.8 },
};

export { colors, pagesLinks, assetsPaths, imagesData };
