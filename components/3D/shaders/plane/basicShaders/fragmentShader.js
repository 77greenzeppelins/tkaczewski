const fragmentShader = `
//__staff from JS
uniform float u_time;
uniform float u_resolution_width;
uniform float u_resolution_height;
uniform sampler2D u_noise;

//__staff from vertexShader
varying vec2 v_uv;

//___
varying float v_zPosition;
varying vec3 u_colorA;
varying vec3 u_colorB;

/*
__1. this function returns responsive coordinates that refers to pixel position on the screen ==> opposite approach (as far as I understand) is besed on v_uv that is based in plane coordinates
*/
vec2 getScreenSpace(vec2 uResolution) {
  vec2 screenUv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
  return screenUv;
}

/*
___1. sign distance function for circle
___2. offset; it follows the idea of: "(x - offsetX)^2 + (y - offsetY)^2 - r^2 = 0"
*/
vec3 sdfCircle(vec2 uv, float r, vec2 offset) {
  float x = uv.x - offset.x;
  float y = uv.y - offset.y;

  float d = length(vec2(x,y)) - r;

  //return d > 0. ? vec3(1.) : vec3(0.,0., 1.); // just blue circle
  return d > 0. ? vec3(0.0039,0.0117, 0.0509) : 0.5 + 0.5 * cos(u_time + uv.xyx + vec3(0,2,4));

}

/*
___1. parameters "out" is only ever set and not referenced directly
___2. paramenter "in" only comes in and doesn't get out doesn't get modified
___3. gl_FragCoord is build-in method that return information about fragment   position within the framebuffer using window coordinates.
*/
void mainImage(out vec4 fragColor, in vec2 fragCoord) {

  vec2 uResolution = vec2(u_resolution_width, u_resolution_height);
  vec2 screenUv = getScreenSpace(uResolution);

  /*
  ___1. sin returns values from range [-1, 1]; multiplying each of them by 0.5 we get [-0.5, 0.5]; adding 0.5 to each we get [0,1];
  */
  //vec3 col = 0.5 + 0.5 * cos(u_time + screenUv.xyx + vec3(0.2, 2.0, 4.0));
  // col += texture2D(u_noise, screenUv * 4.)......

  /*
  ___1. similar to calc from useScroll() hook where we have (y / scrollableContainerHeight) where we start with 0, then with every scroll we increase value, and finaly get 1 as "fullScroll" / "sch" = 2600 / 2600 = 1
  ___2. within this approach originPoint with coords [0,0] is located at bottom-left corner 
  */
  vec2 coords = fragCoord / uResolution;
  fragColor = vec4(0., coords.y, .0, 1.0);

  /*
  ___1. let's center coordSystems of screen and / or uv;
  ___2. now the values range is [-.5. -.5] ==> to have [-1, 1] simply multiply by 2;
  */
  vec2 centeredCoords = fragCoord / uResolution - 0.5 ;
  vec2 centeredUv = v_uv -0.5;
  /*
  ___1. shape: elipse if in field() we use centeredCoords
  ___2. shape: circle if in field() we use uvCentered scrollable but not responsive; I guess that responsiveness should be set at component level
  ___3. shape: circle if in field() we use screenUv responsive but not scrollable
  */
  
  float field = length(centeredUv);
  float mask = step(field, .2 );
  float smoothMask = smoothstep( 0.2, 0.195, field);
  fragColor = vec4(vec3(smoothMask), 1.0);
  fragColor = vec4(vec3(centeredUv.x, centeredUv.y, 1.0) * smoothMask, 1.0);
  fragColor = vec4(vec3(sin(centeredUv.x + u_time) * 0.5 + 0.5 , centeredUv.y, 1.0) * smoothMask, 1.0);
  fragColor = vec4(vec3(sin(centeredUv.x + u_time) * 0.5 + 0.5 , centeredUv.y, 1.0) * smoothMask, smoothMask);

  /*
  ___1. shape: oblong
  */
 vec2 size = vec2(.2, .4);
 //___zooming
 centeredUv *= 5.;
  //___randomness / multiplication
//  vec2 id = floor(centeredUv);
//  centeredUv.x += u_time * id.y;
//  centeredUv = fract(centeredUv) - .5;
 //___noise
 vec2 id = floor(centeredUv);
 float random = texture2D(u_noise, vec2(centeredUv.y, centeredUv.y)).x;
 centeredUv.x += u_time * random;
 centeredUv = fract(centeredUv) - .5;

 

 float geoMask = step(centeredUv.x, .3) * step(-.3, centeredUv.x);
 centeredUv.x += sin(centeredUv.y * 20. ) * .2; 
 float smoothGeoMask = smoothstep(.01,.0, abs(centeredUv.x) - size.x);
 smoothGeoMask *= smoothstep(.01,.0, abs(centeredUv.y) - size.y);
 fragColor = vec4(vec3(sin(centeredUv.x * 5. + u_time * 3.5) * .5 + .5 , centeredUv.y, 1.) * smoothGeoMask, 1.);



  // fragColor = vec4(vec3(screenUv.x, screenUv.y, 0.0), 1.0);
 /*
 ___1. basic colorization
 */
 fragColor = vec4(v_uv, .0, 1.);

 /*
 ___1. 
 */
 vec2 cUv = v_uv - 0.5;

vec2 offset = vec2(sin(u_time * 2.) * .2, cos(u_time * 2.) * .2);

 vec3 col2 = sdfCircle(cUv, .2, offset); 

 fragColor = vec4(col2,1.0);

}


void main() {
  //___
  // vec2 uResolution = vec2(u_resolution_width, u_resolution_height);
  // vec2 screenUv = getScreenSpace(uResolution);
  // vec2 screenUv = getScreenSpace(uResolution);
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
