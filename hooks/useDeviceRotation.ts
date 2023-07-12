import { useEffect, useState } from 'react';

const useDeviceRotation = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleOrientationChange = (event: MediaQueryListEvent) => {
    setIsRotated(event.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(orientation: landscape)');

    setIsRotated(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return isRotated;
};

export default useDeviceRotation;
