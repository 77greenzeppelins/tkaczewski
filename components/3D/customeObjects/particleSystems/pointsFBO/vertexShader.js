const vertexShader = `
//__data from JS
  uniform float u_time;
  uniform sampler2D u_positionTexture;
//__data for fragmentShader
  varying vec2 v_uv;
//__data from "bufferGeometry / bufferAttributes"
  attribute vec2 reference;


//------------
void main() {
  //__
  vec3 pos = texture(u_positionTexture,reference).xyz;
 
  //__evaluation
   vec4 mvPosition = modelViewMatrix * vec4(position,1.);
   gl_PointSize = 10. * (1. / -mvPosition.z);
   gl_Position = projectionMatrix * mvPosition;
   
  //__staff rof FragmentShader
   v_uv = reference;

}

`;

export default vertexShader;
//__equivalents:

//  vec4 mvPosition = modelViewMatrix * vec4(position,1.);
//  gl_PointSize = 10. * (1. / -mvPosition.z);
//  gl_Position = projectionMatrix * mvPosition;

// &

// vec4 modelPosition = modelMatrix * vec4(position, 1.0);
// vec4 viewPosition = viewMatrix * modelPosition;
// vec4 projectedPosition = projectionMatrix * viewPosition;
// gl_Position = projectedPosition;
// // Size attenuation;
// gl_PointSize *= (10.0 / - viewPosition.z);
