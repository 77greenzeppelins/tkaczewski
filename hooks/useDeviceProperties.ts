import { useEffect, useState } from 'react';

/*
'(orientation: landscape)';
'(min-height: 600px)';
*/

interface Props {
  mqLandscape?: string;
  mqMinHeight?: string;
}

const useDeviceProperties = ({ mqLandscape = '', mqMinHeight = '' }: Props) => {
  const [deviceProperties, setDeviceProperties] = useState({
    isLandscape: false,
    isMinHeight: false,
  });

  //   console.log(
  //     'useDeviceProperties / isMinHeight:',
  //     deviceProperties.isMinHeight
  //   );
  //   console.log(
  //     'useDeviceProperties / isLandscape:',
  //     deviceProperties.isLandscape
  //   );

  const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    setDeviceProperties(prevProperties => ({
      ...prevProperties,
      isLandscape: window.matchMedia(mqLandscape).matches,
      isMinHeight: window.matchMedia(mqMinHeight).matches,
    }));
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`${mqLandscape}, ${mqMinHeight}`);

    setDeviceProperties({
      isLandscape:
        mediaQueryList.matches && window.matchMedia(mqLandscape).matches,
      isMinHeight:
        mediaQueryList.matches && window.matchMedia(mqMinHeight).matches,
    });

    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mqLandscape, mqMinHeight]);

  return deviceProperties;
};

export default useDeviceProperties;

/*Usage
const MyComponent = () => {
  const { isLandscape, isMinHeight } = useDeviceProperties({mqLandscape: '(orientation: landscape)', mqMinHeight: '(min-height: 600px)'});

  useEffect(() => {
    if (isLandscape && isTall) {
      // Perform actions when the device is in landscape orientation and has a height larger than 600px
    } else {
      // Perform other actions
    }
  }, [isLandscape, isTall]);

  // Rest of your component
};
*/
