import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
const PathObserver = ({ children }: Props) => {
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    // console.log('.... currentPath:', currentPath);

    const timer = setTimeout(() => {
      setCurrentPath(path);
      // console.log('....timer / currentPath:', currentPath);
    }, 600);

    // Re-enable rendering when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [currentPath, path]);

  return <>{children}</>;
};

export default PathObserver;
