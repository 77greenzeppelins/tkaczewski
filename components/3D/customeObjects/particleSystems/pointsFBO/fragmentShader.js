const fragmentShader = `
//__staff from JS
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform float u_time;
uniform float u_resolution_width;
uniform float u_resolution_height;
// uniform float progeess;
// uniform sampler2D texture1;
// uniform vec4 resolution;

//__staff from vertexShader
varying vec2 v_uv;




void main() {

  vec2 resolution = vec2(u_resolution_width,u_resolution_height);
  //___
   vec2 uv = gl_FragCoord.xy / resolution.xy;

  gl_FragColor = vec4(uv, 1., 1.);
  // gl_FragColor = vec4(v_uv, 0., 1.);
  // gl_FragColor = vec4(gl_FragCoord.xy, 1., 1.);

  

}
`;
export default fragmentShader;
