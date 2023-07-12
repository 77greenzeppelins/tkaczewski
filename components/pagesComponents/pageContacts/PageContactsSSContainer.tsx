import React from 'react';
import { headers } from 'next/headers';
/**Components**/
import PageContactsAnimator from './PageContactsAnimator';
/**Basic Data**/
import { scrollableContainerNames } from '@/data/basicData';

const PageContactsSSContainer = () => {
  /*
  ___0. we need to know if user is strict-mobile or tablet; it means more or less that non-desktop devices would have diffrent specification then all other devices;
  ___1. 'sec-ch-ua-mobile' possible values: "?0" or "?1"; mobile phone returns "?1" but desktop and tablet return "?0";  
  ___2. docs: "?1" indicates that the user-agent prefers a mobile experience (true). "?0" indicates that user-agent does not prefer a mobile experience (false).
  */
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  let isMobile = headersList.get('sec-ch-ua-mobile')?.includes('1');
  /*
  ___1. The match() method will return either a truthy value (a match) or null (no match). Applying the double negation operator (!!) to the result will convert it into a boolean value. If there is a match, isMobileView will be true; otherwise, it will be false.
  */
  let isMobileView = !!userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );
  /**JSX**/
  return (
    <div
      id={scrollableContainerNames.pageContacts}
      data-container="PageContactsSSContainer"
    >
      <PageContactsAnimator hintIsMobile={isMobile || isMobileView} />
    </div>
  );
};

export default PageContactsSSContainer;

//  return (
//    <div>
//      {
//        /*
//         create an array from the iterable returned by the keys() method and use the map() methode to return ReactNode objects to display on the page.
//         */
//        Array.from(headersList.keys()).map((key: string) => {
//          return (
//            <div key={key}>
//              <div className="bg-light">
//                {' '}
//                <h3 className="text-dark p-regular">{`${key}: ${headersList.get(
//                  key
//                )}`}</h3>
//              </div>
//            </div>
//          );
//        })
//      }
//      <div className="bg-corpo w-full h-[300px]">
//        <p className="text-light p-regular">{isMobile?.toString()}</p>{' '}
//      </div>
//    </div>
//  );
