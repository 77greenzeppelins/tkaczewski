'use client';
import React, { useEffect } from 'react';

interface Props {
  entries: [string, string][];
  isMobile: boolean | undefined;
}

const TesterComponent = ({ entries, isMobile }: Props) => {
  /** */
  //   console.log('screen.orientation:', screen.orientation);
  //   console.log('screen.orientation.type:', screen.orientation.type);
  /** */
  function lock(orientation: OrientationLockType) {
    screen.orientation.lock(orientation);
  }
  function unlock() {
    screen.orientation.unlock();
  }
  useEffect(() => {
    console.log('screen.orientation.type:', screen.orientation.type);
    console.log('screen.orientation.angle:', screen.orientation.angle);
  }, []);
  //   useEffect(() => {
  //     if (isMobile && screen.orientation && screen.orientation?.lock) {
  //       lock('portrait');
  //     }
  //     // return unlock();
  //   }, [isMobile]);
  /**JSX**/
  return (
    <>
      <div className="flex flex-col text-light text-[12px]">
        {entries.map((item, i) => (
          <p className="flex gap-4" key={i}>
            <span>{item[0]}:</span>
            <span>{item[1]}</span>
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-6 text-corpo text-[12px]">
        <p className="">{screen.orientation.type} </p>
        <p className="">{screen.orientation.angle} </p>
      </div>
    </>
  );
};

export default TesterComponent;
