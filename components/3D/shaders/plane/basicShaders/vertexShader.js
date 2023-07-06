const vertexShader = `

  uniform float u_time;
  varying float v_zPosition;

  // varying vec2 v_Uv;

void main() {

  //___basic | static
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  //___
  // vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  // modelPosition.y += sin(modelPosition.x * 1.0 + u_time * 3.0) * 0.02;
  // modelPosition.y += sin(modelPosition.z *0.5 + u_time * 2.0) * 0.05;

  // v_zPosition = modelPosition.y;

  // vec4 viewPosition = viewMatrix * modelPosition;
  // vec4 projectedPosition = projectionMatrix * viewPosition;



  gl_Position = projectedPosition;

}

`;

export default vertexShader;
