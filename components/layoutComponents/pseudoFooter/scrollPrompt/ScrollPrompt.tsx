'use client';
import React, { useRef, useEffect } from 'react';
/**Hooks Staff**/
import { usePathname } from 'next/navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
/**Components**/
import { FlyingLine } from '@/components';
import { pagesPath } from '@/data/basicData';

/**TS*/
interface Props {
  pseudoFooterIsMounted: boolean;
}

/**------------------------------------------------------------*/
const ScrollPrompt = ({ pseudoFooterIsMounted }: Props) => {
  const path = usePathname();
  const sY = useScrollPosition();

  const mountingCondition =
    pseudoFooterIsMounted &&
    (path === pagesPath.homePath || path === pagesPath.contactcPath) &&
    sY.val < 200;

  /**JSX**/
  return mountingCondition ? (
    <div className="absolute right-0 h-[180px] w-[5px] overflow-hidden">
      <FlyingLine scrollDirection={'fromTop'} />
    </div>
  ) : null;
};

export default ScrollPrompt;
