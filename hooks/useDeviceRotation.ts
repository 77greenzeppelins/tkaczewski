import { useEffect, useState } from 'react';

const useDeviceRotation = (thisMediaQuery: string) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleOrientationChange = (event: MediaQueryListEvent) => {
    console.log('event:', event);
    setIsRotated(event.matches);
  };

  useEffect(() => {
    //___calling matchMedia() on window we create mediaQueryList object that handles sending notification to listeners when the media query state changes (i.e. when the media query test starts or stops evaluating to true).
    const mediaQueryList = window.matchMedia(thisMediaQuery);

    setIsRotated(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleOrientationChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleOrientationChange);
    };
  }, [thisMediaQuery]);

  return isRotated;
};

export default useDeviceRotation;
