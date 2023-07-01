import { colors } from '@/data/basicData';
import React from 'react';

interface Props {
  containerStyle?: string;
  pathStyle?: string;
  fill?: string;
}

const GitHubIcon = ({ containerStyle, pathStyle, fill }: Props) => {
  return (
    <svg
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      // width="92"
      // height="92"
      // fill="none"
      fill={fill ? fill : '#fff'}
      viewBox="0 0 92 92"
      className={containerStyle ? containerStyle : 'fc origin-center w-6 h-6'}
    >
      <path
        // fill={fill ? fill : '#fff'}
        // className={pathStyle ? pathStyle : 'color-light w-6 h-6'}
        fillRule="evenodd"
        d="M45.61 21.048c-14.219 0-25.735 11.47-25.735 25.632 0 11.342 7.367 20.923 17.596 24.319 1.287.224 1.77-.545 1.77-1.218 0-.608-.033-2.627-.033-4.774-6.466 1.186-8.138-1.57-8.653-3.012-.29-.736-1.544-3.011-2.638-3.62-.9-.48-2.187-1.666-.032-1.698 2.026-.032 3.474 1.858 3.957 2.627 2.316 3.877 6.015 2.788 7.495 2.115.225-1.666.9-2.788 1.64-3.429-5.726-.64-11.709-2.851-11.709-12.656 0-2.787.997-5.094 2.638-6.888-.257-.641-1.158-3.268.257-6.793 0 0 2.156-.673 7.077 2.628a23.966 23.966 0 016.434-.866c2.187 0 4.375.289 6.434.866 4.921-3.333 7.077-2.628 7.077-2.628 1.415 3.525.514 6.152.257 6.793 1.64 1.794 2.638 4.069 2.638 6.888 0 9.837-6.016 12.016-11.742 12.656.933.801 1.737 2.34 1.737 4.742 0 3.429-.032 6.184-.032 7.05 0 .672.483 1.473 1.77 1.217C63.978 67.603 71.344 57.99 71.344 46.68c0-14.162-11.516-25.632-25.734-25.632z"
        clipRule="evenodd"
      ></path>
    </svg>
    // <svg
    //   role="ikonka"
    //   aria-hidden="true"
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   strokeWidth={2}
    //   stroke={colors.dark}
    //   className={containerStyle ? containerStyle : 'fc origin-center w-6 h-6'}
    // >
    //   <path
    //     className={pathStyle ? pathStyle : 'color-light w-6 h-6'}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     d="M6 18L18 6M6 6l12 12"
    //   />
    // </svg>
  );
};

export default GitHubIcon;
