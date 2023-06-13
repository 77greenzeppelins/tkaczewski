const rangedRandomness = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export { rangedRandomness };
