'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
/**Components**/
import { InstantContactPanel } from '@/components';
/**BasicData*/
import { pagesPath, page3DConfigs, pages3DPositions } from '@/data/basicData';

/**-----------------------------------------*/
const PageContacts = () => {
  /*
  (!) the code below concerns the matter of "3dObjects visibility" and is used in every 3D-pseudoPage => property "visible" must receive boolean value with delay of 1 second => that is why setTimeout() is used to change initial false value to true;
  */
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesPath.contactcPath);
    }, page3DConfigs.visibilityDelay);

    /**cleaner**/
    return () => {
      clearTimeout(timer);
      setIsPath(false);
    };
  }, [path]);

  /**JSX**/
  return (
    <group visible={isPath} position-x={pages3DPositions.pageContacts.x}>
      <InstantContactPanel
        topButtonPos={
          page3DConfigs.pageContacts.contactButtonConfig.topButtonPos
        }
        bottomButtonPos={
          page3DConfigs.pageContacts.contactButtonConfig.bottomButtonPos
        }
        scaleFrame={page3DConfigs.pageContacts.contactButtonConfig.scaleFrame}
        scaleImage={page3DConfigs.pageContacts.contactButtonConfig.scaleImage}
      />
    </group>
  );
};

export default PageContacts;
