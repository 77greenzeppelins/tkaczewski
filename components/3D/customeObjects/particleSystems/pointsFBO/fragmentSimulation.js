const fragmentSimulation = `
//__staff from JS
uniform float u_time;
uniform float u_resolution_width;
uniform float u_resolution_height;
uniform sampler2D u_positionTexture;

//__staff from vertexShader
varying vec2 v_uv;


//-------------------------------------------------------
void main() {
  //__
  // vec2 resolution = vec2(u_resolution_width,u_resolution_height);
  //___
  // vec2 uv = gl_FragCoord.xy / resolution.xy;
  //___
  // vec4 tmpPos = texture2D( u_positionTexture, uv);
  // vec3 position = tmpPos.xyz

  // gl_FragColor = vec4(position + vec3(0.001), 1.);
  // gl_FragColor = vec4(u_time + v_uv, 0., 1.); //doesn't work

}
`;
export default fragmentSimulation;
