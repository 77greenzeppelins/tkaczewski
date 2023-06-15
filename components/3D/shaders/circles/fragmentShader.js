const fragmentShader = `

//___
// varying float v_zPosition;
//__uniforms
uniform vec3 u_colorA;
uniform vec3 u_colorB;
//__varyings
varying vec2 v_Uv;


void main() {
  //___
  // vec3 color = u_colorA;
  //___
  vec3 color = mix(colorA, colorB, v_Uv.x);
  //___"Normalizing" with an arbitrary value  
  // vec2 normalizedPixel = gl_FragCoord.xy/600.0;
  // vec3 color = mix(colorA, colorB, normalizedPixel.x);


  //__2.
  // vec3 color = mix(u_colorA, u_colorB, v_zPosition * 2.0 + 0.5);

  gl_FragColor = vec4(color,1.0);
}
`;
export default fragmentShader;
