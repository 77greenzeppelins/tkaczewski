const fillPositions = texture => {
  //__TextureData doesn have "image" property
  //   let arr = texture.image.data;
  let arr = texture.souce.data.data;

  for (let i = 0; i < arr.length; i = i + 4) {
    let x = Math.random();
    let y = Math.random();
    let z = Math.random();
    arr[i] = x;
    arr[i + 1] = y;
    arr[i + 2] = z;
    arr[i + 3] = 1;
  }
};

export { fillPositions };
