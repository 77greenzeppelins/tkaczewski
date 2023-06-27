import React from 'react';
/**Components**/
import BodySimple from './bodySimple/BodySimple';
import BodyComplex from './bodyComplex/BodyComplex';

/**----------------------------------------------------------**/
const SectionBody = ({
  text,
}: {
  text: string[] | { col1: string; col2: string[] }[];
}) => {
  /** */
  const bodyContent = text.map((item, i) => {
    if (typeof item === 'string') {
      return <BodySimple key={i} text={item} />;
    } else {
      return <BodyComplex key={i} text={item} />;
    }
  });
  /**JSX**/
  return <>{bodyContent}</>;
};

export default SectionBody;
