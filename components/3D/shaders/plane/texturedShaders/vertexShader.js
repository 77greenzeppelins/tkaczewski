const vertexShader = `

 #pragma vscode_glsllint_stage: vert

//__data from JS
  uniform float u_time;
  // uniform sampler2D u_positionTexture;
//__data for fragmentShader
  varying vec2 v_uv;
  varying float v_zPosition;


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

  //__data for fragmentShader
  v_uv = uv;

}

`;

export default vertexShader;
