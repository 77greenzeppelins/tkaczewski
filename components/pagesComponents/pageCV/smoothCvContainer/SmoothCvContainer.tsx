import { PageCvContent } from '@/components';
import { SpringValue } from '@react-spring/web';
import React from 'react';

/**TS**/
interface Props {
  transform: SpringValue<string>;
}

const SmoothCvContainer = ({ transform }: Props) => {
  /**JSX**/
  return (
    <div
      data-component="SmoothCvContainer"
      // className="fixed inset-0 bg-corpo"
      className="sticky h-screen top-0 bottom-0 inset-x-0 overflow-hidden "
    >
      {' '}
      <PageCvContent
        hintIsMobile={false}
        transform={transform}
        isVisible={true}
      />
    </div>
  );
};

export default SmoothCvContainer;
