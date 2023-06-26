import React from 'react';
import { headers } from 'next/headers';
import PageContactsContent from './PageContactsContent';

const PageContactsSSContainer = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  const isMobile = headersList.get('sec-ch-ua-mobile');
  console.log('userAgent:', typeof userAgent);
  /**JSX**/
  return (
    <div>
      {/* <PageContactsContent /> */}
      {
        // create an array from the iterable returned by the keys() method
        // and use the map() methode to return ReactNode objects
        // to display on the page.
        Array.from(headersList.keys()).map((key: string) => {
          return (
            <div key={key}>
              <div className="bg-light">
                {' '}
                <h3 className="text-dark p-regular">{`${key}: ${headersList.get(
                  key
                )}`}</h3>
              </div>
            </div>
          );
        })
      }
      <div className="bg-corpo w-full h-[300px]">
        <p className="text-light p-regular">{isMobile}</p>{' '}
      </div>
    </div>
  );
};

export default PageContactsSSContainer;
