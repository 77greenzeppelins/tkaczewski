import React from 'react';
/** Components**/
import Clock from '@/components/multipagesComponents/timeAndDate/clock/Clock';
/**Basic Data**/
import { timeZones } from '@/data/textData';

/**------------------------**/
const IntroTimers = () => {
  /**JSX**/
  return (
    <>
      {timeZones.map(({ city, zone }) => (
        <div key={zone} className="flex justify-between">
          <p className="p-small text-lightDark">{city}</p>
          <Clock timeZone={zone} textStyle={'p-small text-lightDark'} />
        </div>
      ))}
    </>
  );
};

export default IntroTimers;
