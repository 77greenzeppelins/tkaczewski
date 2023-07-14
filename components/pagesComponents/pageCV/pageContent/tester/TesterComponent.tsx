'use client';
import React from 'react';

interface Props {
  entries: [string, string][];
}

const TesterComponent = ({ entries }: Props) => {
  console.log('screen.orientation:', screen.orientation);
  console.log('screen.orientation.type:', screen.orientation.type);
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
      </div>
    </>
  );
};

export default TesterComponent;
