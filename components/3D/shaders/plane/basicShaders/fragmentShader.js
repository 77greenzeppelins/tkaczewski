const fragmentShader = `

//__staff from JS
uniform float u_time;
uniform float u_resolution_width;
uniform float u_resolution_height;

//__staff from vertexShader
varying vec2 v_uv;

// varying vec2 v_Uv;
// vec3 u_colorA = vec3(0.912,0.191,0.652);
// vec3 u_colorB = vec3(1.000,0.777,0.052);
//___
varying float v_zPosition;
varying vec3 u_colorA;
varying vec3 u_colorB;

//___

vec2 getScreenSpace(vec2 uResolution) {
  vec2 screenUV = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
  return screenUV;
}

/*
___1. parameters "out" is only ever set and not referenced directly
___2. paramenter "in" only comes in and doesn't get out doesn't get modified
___3. gl_FragCoord is build-in method that return information about fragment   position within the framebuffer using window coordinates.
*/
void mainImage(out vec4 fragColor, in vec2 fragCoord) {

  vec2 uResolution = vec2(u_resolution_width, u_resolution_height);
  vec2 screenUV = getScreenSpace(uResolution);

  vec3 col = 0.5 + 0.5 * cos(u_time + screenUV.xyx + vec3(0.2, 2.0, 4.0));
  // col += texture2D(u_noise, screenUV * 4.)......

  /*
  ___1. similar to calc from useScroll() hook where we have (y / scrollableContainerHeight) where we start with 0, then with every scroll we increase value, and finaly get 1 as "fullScroll" / "sch" = 2600 / 2600 = 1
  ___2. within this approach originPoint of values [0,0] is bottom-left corner 
  */
  vec2 coords = fragCoord / uResolution;
  fragColor = vec4(0., coords.y, .0, 1.0);

  /*
  ___1. shape: elipse if in field() we use centeredCoords
  ___2. shape: circle if in field() we use uvCentered scrollable but not responsive; I guess that responsiveness should be set at component level
  ___3. shape: circle if in field() we use screenUV responsive but not scrollable

  */
  vec2 centeredCoords = fragCoord / uResolution - 0.5 ;
  vec2 uvCentered = v_uv -0.5;
  float field = length(uvCentered);
  float mask = step(field, .2 );
  fragColor = vec4(vec3(mask,field,field), 1.0);

  
  // fragColor = vec4(vec3(screenUV.x, screenUV.y, 0.0), 1.0);

}


void main() {
  //___
  // vec2 uResolution = vec2(u_resolution_width, u_resolution_height);
  // vec2 screenUV = getScreenSpace(uResolution);
  // vec2 screenUV = getScreenSpace(uResolution);
  //__
  // vec3 color = u_colorB;
  vec3 color = vec3(0.5);
  //__1.  "Normalizing" with an arbitrary value 
  // vec2 normalizedPixel = gl_FragCoord.xy/600.0;
  // vec3 color = mix(colorA, colorB, normalizedPixel.x);
  //__2.
  // vec3 color = mix(u_colorA, u_colorB, v_zPosition * 2.0 + 0.5);
  // gl_FragColor = vec4(color,1.0);


  //---------------------------https://www.youtube.com/watch?v=_ziWCZFqvak&list=PLigR2sjkH_KdsXpTJmCgwQAC1fcK_1pQN&index=16

  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;
export default fragmentShader;
