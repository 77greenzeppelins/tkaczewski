import React from 'react';
/**Basic Data**/
import { introOverlayTexts, introOverlayTextsStyles } from '@/data/textData';

/**--------------------------**/
const IntroMessage = () => {
  /**JSX**/
  return (
    <>
      {introOverlayTexts.map((text, i) => (
        <p className={`p-medium ${introOverlayTextsStyles[i]}`} key={i}>
          {text}
        </p>
      ))}
    </>
  );
};

export default IntroMessage;
