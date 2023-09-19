import { colors } from '@/data/basicData';
import React from 'react';

interface Props {
  containerStyle?: string;
  pathStyle?: string;
}
const CloseXIcon = ({ containerStyle, pathStyle }: Props) => {
  return (
    <svg
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      // stroke={colors.dark}
      className={
        containerStyle
          ? containerStyle
          : 'fc origin-center w-6 h-6 stroke-light'
      }
    >
      <path
        className={pathStyle ? pathStyle : 'color-light w-6 h-6'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseXIcon;
