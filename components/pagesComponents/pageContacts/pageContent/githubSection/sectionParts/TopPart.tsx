'use client';
import React from 'react';
/**Components**/
import { GitHubIcon } from '@/components';
/**Spring Staff**/
import { useInView, animated } from '@react-spring/web';
/**Basic Data**/
import { basicConfigs, colors } from '@/data/basicData';
import { pageContactsText } from '@/data/textData';
const {
  pageContact: { rootMargin, amount, inViewStyle },
} = basicConfigs;
const { gitHub } = pageContactsText;

const TopPart = () => {
  /**Spring Section**/
  const [ref, inView] = useInView({
    rootMargin: rootMargin,
    amount: amount,
    /*
    rootMargin: '10% 0% 10% 0%',
    amount: 0.5,
    */
  });

  return (
    <div
      ref={ref}
      className={`${inView ? inViewStyle.show : inViewStyle.hide}`}
    >
      <p className="select-none p-medium text-corpo">{gitHub[0]}</p>
    </div>
  );
};

export default TopPart;
