// import React from 'react';
// import * as THREE from 'three';
import { DodecahedronGeometry } from 'three';

/**TS**/
interface Props {
  radius: number;
  detail: number;
}

// export function dodecaHedron({ radius, detail }: Props): DodecahedronGeometry {
//   return new DodecahedronGeometry(radius, detail);
// }
export function dodecaHedron(
  radius: number,
  detail: number
): DodecahedronGeometry {
  return new DodecahedronGeometry(radius, detail);
}

//(min: number, max: number): number
