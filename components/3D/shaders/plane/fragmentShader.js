const fragmentShader = `
// varying vec2 v_Uv;
vec3 u_colorA = vec3(0.912,0.191,0.652);
vec3 u_colorB = vec3(1.000,0.777,0.052);
//___
varying float v_zPosition;

void main() {
  //__1.  "Normalizing" with an arbitrary value
  // We'll see a cleaner technique later :)   
  // vec2 normalizedPixel = gl_FragCoord.xy/600.0;
  // vec3 color = mix(colorA, colorB, normalizedPixel.x);


  //__2.
  vec3 color = mix(u_colorA, u_colorB, v_zPosition * 2.0 + 0.5);

  gl_FragColor = vec4(color,1.0);
}
`;
export default fragmentShader;
