const fragmentSimulation = `
//__staff from JS
uniform float u_time;
uniform sampler2D u_positionTexture;
//uniform float u_delta;

// uniform float progeess;
// uniform sampler2D texture1;
// uniform vec4 resolution;

//__staff from vertexShader
varying vec2 v_uv;
// varying vec3 v_position;

/-------------------------------------------------------
void main() {
  //___
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( u_positionTexture, uv);
  vec3 position = tmpPos.xyz

  gl_FragColor = vec4(position + vec3(0.001), phase);

}
`;
export default fragmentSimulation;
