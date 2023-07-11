const fragmentShader = `

#pragma vscode_glsllint_stage: frag


//__staff from JS
uniform float u_time;
uniform float u_resolution_width;
uniform float u_resolution_height;
uniform sampler2D u_noise;
uniform sampler2D u_gitHub;


//__staff from vertexShader
varying vec2 v_uv;



float backgroundPattern( in vec2 uv )
{
    vec2 patternUv =  uv + 0.1 * texture2D( u_noise, 0.05 * uv ).xy;
    return texture2D( u_noise, 16.0 * patternUv ).x;
}

vec3 getBackgrond( in vec2 coords)
{
   float fa = backgroundPattern( coords.xy );
  // float fb = backgroundPattern( coords.yx );
   float fb = backgroundPattern( vec2(coords.x -1.5,  coords.y - 1.5));
   return vec3( 0.82 + 0.4 * (fa-fb) );
}

float getFadeInWeight(vec2 uv)
{
    float edge = 0.5 * abs(sin(0.5));
    // taken FabriceNeyret2's advice
    vec4 v = smoothstep(0., edge, vec4(uv, 1. - uv) );
    return v.x * v.y * v.z * v.w;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
 
/*
___1. just to test how texture2d() works... 
*/
  vec4 noiseTexture = texture2D(u_noise, vec2(v_uv.x, v_uv.y));
  vec4 gitHubTexture = texture2D(u_gitHub, vec2(v_uv.x, v_uv.y));

/*
___1. from: https://www.shadertoy.com/view/4sGBz3
___2. section that generates nice move...
___3. we can't manipulate varying directy; that is why we introduce coordsUv;
___4. with coordsUv it's possible to make a move of 
*/
 vec2 coordsUv = v_uv;
  coordsUv.x += cos(coordsUv.y * 5.2 + u_time * 1.4) / 10.0;
  coordsUv.y += sin(coordsUv.x * 5.1 + u_time * 1.4) / 10.0;
	coordsUv.x -= cos(coordsUv.y * 5.2 + u_time * 1.4) / 10.0;
	coordsUv.x -= cos(coordsUv.x * 5.2 + u_time * 1.4) / 10.0;
/*
___1.  
*/
  // vec3 bg = getBackgrond(coordsUv);
  // vec3 col = gitHubTexture.rgb;
  // vec3 col = texture2D(u_git, v_uv).rgb;
  // float alpha = getFadeInWeight(coordsUv);

  /**/
  //  float fa = backgroundPattern( coordsUv.xy );
  //  float fb = backgroundPattern( vec2(coordsUv.x -0.5,  coordsUv.y -0.5));
  //  vec3 col=  vec3( 0.82 + 0.4 * (fa-fb) );


  /**/
   vec4 color = texture2D(u_noise, coordsUv);

   // Time varying pixel color
    vec3 testCol = 0.5 + 0.5*cos(u_time + v_uv.xyx+vec3(0,2,4));
    
//---------------  
  // fragColor = noiseTexture;
  fragColor = gitHubTexture;
  // fragColor = vec4(testCol, 1.0);
	//fragColor = color;
  // fragColor = vec4(mix(bg, col, alpha), 1.0);
  // fragColor = vec4(v_uv.x * u_time, 0. ,0. ,1.);

   
  
}

void main() {

  mainImage(gl_FragColor, gl_FragCoord.xy);
}

`;
export default fragmentShader;
