/**TS**/
const fromTopConfig = {
  from: { y: '-200%' },
  to: { y: '100%' },
};
const fromBottomConfig = {
  from: { y: '200%' },
  to: { y: '-100%' },
};
const noAnimationConfig = {
  from: { y: 0 },
  to: { y: 0 },
};

const scrollVariant = (scrollDirection: string) => {
  switch (scrollDirection) {
    case 'fromBottom':
      return fromBottomConfig;
    case 'fromTop':
      return fromTopConfig;
    default:
      return noAnimationConfig;
  }
};

export { scrollVariant };
